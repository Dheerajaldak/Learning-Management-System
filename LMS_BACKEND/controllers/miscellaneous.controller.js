
import { validationResult } from "express-validator";
import nodemailer from "nodemailer"; // For sending emails
import Contact from "../models/contact.model.js"; // Import the Contact model to save data

export const contactUs = async (req, res) => {
  const { name, email, message } = req.body;

  // Input validation (basic example)
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  }

  // Check if all fields are provided
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "All fields are mandatory 💬",
    });
  }

  // Check if the email format is valid
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      message: "Invalid email format 🚫",
    });
  }

  try {
    // Save contact submission in the database
    const newContact = new Contact({
      name,
      email,
      message,
    });

    await newContact.save(); // Save the contact form data

    // Optionally, send a thank-you email to the user using nodemailer
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false, // Set to true if using port 465 for SSL/TLS
      auth: {
        user: process.env.SMTP_USERNAME,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_FROM_EMAIL, // Sender's email address (could be a generic no-reply email)
      to: email, // Recipient's email address (the user's email)
      subject: "Thank you for contacting us!",
      text: `Dear ${name},

Thank you for reaching out to us. We have received your message and will get back to you as soon as possible. Your feedback is important to us!

Here are the details of your submission:

-------------------------------
Name: ${name}
Email: ${email}
Message: 
${message}
-------------------------------

We appreciate your time and look forward to assisting you soon!

Best regards,
The LMS Support Team
`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Return a success response
    return res.status(200).json({
      success: true,
      message: "Form submitted successfully, data saved and email sent to the user",
    });
  } catch (error) {
    console.error("Error while submitting contact form: ", error);
    return res.status(500).json({
      success: false,
      message: "An error occurred while submitting the form",
    });
  }
};

