import AppError from "../utils/error.util.js";
import jwt from "jsonwebtoken";
const isLoggedIn = async (req, _res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return next(new AppError("Unauthenticated,🤢 please login again", 401));
  }

  try {
    const userDetails = await jwt.verify(token, process.env.JWT_SECRET);
    req.user = userDetails;
    next();
  } catch (error) {
    return next(new AppError("Invalid or expired token", 401));
  }
};

const authorizedRoles =
  (...roles) =>
  (req, _res, next) => {
    const currentUserRole = req.user.role;
    if (!roles.includes(currentUserRole)) {
      return next(
        new AppError(
          "You do not have permission to access this route💥, ADMIN has permission ✔",
          403
        )
      );
    }
    next();
  };

const authorizeSubscriber = async (req, _res, next) => {
  const subscription = req.user.subscription;
  const currentUserRole = req.user.role;
  if (currentUserRole !== "ADMIN" && subscription.status !== "active") {
    return next(new AppError("Please subscribe to access this route!⚡", 403));
  }

  next();
};

export { isLoggedIn, authorizedRoles, authorizeSubscriber };
