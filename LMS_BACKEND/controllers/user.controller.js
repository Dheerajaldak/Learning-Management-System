import { error, log } from "console";
import User from "../models/user.model.js";
import AppError from "../utils/error.util.js";
import cloudinary from "cloudinary";
import fs from "fs/promises";
import sendEmail from "../utils/sendEmail.js";
import crypto from "crypto";

const cookieOptions = {
  maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  httpOnly: true,
  secure: process.env.NODE_ENV === "production", // Secure cookie only in production
};

const register = async (req, res) => {
  const { fullName, email, password } = req.body;
  if (!fullName || !email || !password) {
    return next(new AppError("All fields are required", 400));
  }

  const userExists = await User.findOne({ email });
  if (userExists) {
    return next(new AppError("Email already exists", 400));
  }

  const user = await User.create({
    fullName,
    email,
    password,
    avatar: {
      public_id: email,
      secure_url: "https://res.cloudinary.com/du9jxqlpt/image/upload",
    },
  });
  if (!user) {
    return next(
      new AppError("User registration failed, please try again", 400)
    );
  }
  // console.log('File Detalis >', JSON.stringify(req.file));

  // TODO: file upload
  if (req.file) {
    try {
      // img crop logic
      const result = await cloudinary.v2.uploader.upload(req.file.path, {
        folder: "lms",
        width: 250,
        height: 250,
        gravity: "faces",
        crop: "fill",
      });
      if (result) {
        user.avatar.public_id = result.public_id;
        user.avatar.secure_url = result.secure_url;

        // remove file from server
        await fs.rm(`uploads/${req.file.filename}`);
      }
    } catch (e) {
      return next(
        new AppError(error || "File not uploaded, please try again ", 500)
      );
    }
  }

  await user.save();

  user.password = undefined;

  const token = await user.generateJWTToken();
  res.cookie("token", token, cookieOptions);

  res.status(201).json({
    success: true,
    message: "User registered successfully",
    user,
  });
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return next(new AppError("All fields are required", 400));
    }

    const user = await User.findOne({ email }).select("+password");

    if (!user || !user.comparePassword(password)) {
      return next(new AppError("Email or password does not match", 400));
    }

    const token = await user.generateJWTToken();
    user.password = undefined;

    res.cookie("token", token, cookieOptions);

    res.status(200).json({
      success: true,
      message: "User logged in successfully",
      user,
    });
  } catch (error) {
    return next(new AppError(error.message, 500));
  }
};

const logout = (req, res,) => {
  try {
    res.cookie("token", null, {
      secure: process.env.NODE_ENV === "production",
      maxAge: 0,
      httpOnly: true,
    });
    res.status(200).json({
      success: true,
      message: "User logged out successfully",
    });
  } catch (error) {
    return next(new AppError(error.message, 500));
  }
};
const getProfile = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId);
    if (!user) {
      return next(new AppError("User not found", 404));
    }

    res.status(200).json({
      success: true,
      message: "User details",
      user,
    });
  } catch (error) {
    return next(new AppError("Failed to fetch profile or user details", 500));
  }
};

const forgotPassword = async (req, res, next) => {
  const { email } = req.body;
  if (!email) {
    return next(new AppError("Email is required", 400));
  }

  const user = await User.findOne({ email });
  if (!user) {
    return next(new AppError("Email is not registered", 400));
  }

  const resetToken = await user.generatePasswordResetToken();
  await user.save();

  const resetPasswordURL = `${process.env.FRONTEND_URL}/reset-password/${resetToken}`;

  console.log("url: " + resetPasswordURL);

  // const subject = "Reset Password";
  // const message = `You can reset your password by clicking <a href=${resetPasswordURL} target="_blank">Reset your password</a>.\nIf the link doesn't work, copy and paste this link into a new tab: ${resetPasswordURL}.`;
  // const subject = "Password Reset Request";  // Subject line
  // const message = `
  //   <p>Hello,</p>
  //   <p>You requested to reset your password. Please click the link below to reset your password:</p>
  //   <p><a href="${resetPasswordURL}" target="_blank">Reset your password</a></p>
  //   <p>If the link above does not work, copy and paste the following URL into your browser:</p>
  //   <p>${resetPasswordURL}</p>
  //   <p>If you did not request a password reset, please ignore this email. Your password will remain unchanged.</p>
  //   <p>Thanks,<br/>Dheeraj Aldak Company</p>
  // `;
  const subject = "Password Reset Request for Your LMS Account";

  const message = `
  <p>Dear User,</p>

  <p>We received a request to reset the password for your account in the LMS platform. If you did not request a password reset, please ignore this email.</p>

  <p>To reset your password, please click the link below:</p>
  <p><a href="${resetPasswordURL}" target="_blank">Reset your password</a></p>

  <p>If the link above does not work, copy and paste the following URL into your browser:</p>
  <p><a href="${resetPasswordURL}">${resetPasswordURL}</a></p>

  <p>Please note that this password reset link will expire in 15 minutes for your security. If you need assistance, please contact support.</p>

  <p>Thank you,<br/>Dheeraj's LMS Team</p>
  <p><em>This is an automated email. Please do not reply.</em></p>
`;

  try {
    await sendEmail(email, subject, message);

    res.status(200).json({
      success: true,
      message: `Reset password token has been sent to ${email} successfully`,
    });
  } catch (e) {
    console.error("Error sending email:", e.message);
    user.forgotPasswordExpiry = undefined;
    user.forgotPasswordToken = undefined;
    await user.save();
    return next(new AppError(`Error: ${e.message}`, 500));
  }
};

const resetPassword = async (req, res, next) => {
  const { resetToken } = req.params;
  const { password } = req.body;

  // console.log('resetToken:', resetToken);
  const forgotPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  const user = await User.findOne({
    forgotPasswordToken,
    forgotPasswordExpiry: { $gt: Date.now() },
  });

  if (!resetToken) {
    return res.status(400).json({ message: "Reset token is required" });
  }

  if (!user) {
    return next(
      new AppError("Token is invalid or expired, please try again", 400)
    );
  }

  user.password = password;
  user.forgotPasswordExpiry = undefined;
  user.forgotPasswordToken = undefined;

  await user.save();

  res.status(200).json({
    success: true,
    message: "Password changed successfully ✔✔",
  });
};

const changePassword = async (req, res, next) => {
  const { oldPassword, newPassword } = req.body;
  const { id } = req.user;

  if (!oldPassword || !newPassword) {
    return next(new AppError("All fields are mandatory!", 400));
  }

  const user = await User.findById(id).select("+password");
  if (!user) {
    return next(new AppError("User does not exist!❓", 400));
  }

  const isPasswordValid = await user.comparePassword(oldPassword);
  if (!isPasswordValid) {
    return next(new AppError("Invalid old password!🚫", 400));
  }

  user.password = newPassword;

  await user.save();

  user.password = undefined;

  res.status(200).json({
    success: true,
    message: "Password changed successfully🙂",
  });
};

const updateUser = async (req, res, next) => {
  const { fullName } = req.body;
  const { id } = req.user;

  const user = await User.findById(id);
  if (!user) {
    return next(new AppError("User does not exist!", 400));
  }

  if (fullName) {
    user.fullName = fullName;
  }

  if (req.file) {
    await cloudinary.v2.uploader.destroy(user.avatar.public_id);
    try {
      // img crop logic
      const result = await cloudinary.v2.uploader.upload(req.file.path, {
        folder: "lms",
        width: 250,
        height: 250,
        gravity: "faces",
        crop: "fill",
      });
      if (result) {
        user.avatar.public_id = result.public_id;
        user.avatar.secure_url = result.secure_url;

        // remove file from server
        await fs.rm(`uploads/${req.file.filename}`);
      }
    } catch (e) {
      return next(
        new AppError(e.message || "File not uploaded, please try again ", 500)
      );
    }
  }

  await user.save();
  res.status(200).json({
    success: true,
    message: "User details updated successfully!",
  });
};

export {
  register,
  login,
  logout,
  getProfile,
  forgotPassword,
  resetPassword,
  changePassword,
  updateUser,
};
