import User from "../models/user.model.js";

// Function to get the count of all users
export const getUserCount = async (req, res) => {
  try {
    // Get the total count of all users
    const totalUserCount = await User.countDocuments();

    // Send the response with the user count
    res.status(200).json({
      message: "Total user count fetched successfully",
      totalUserCount,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Failed to fetch user count",
      error: error.message,
    });
  }
};
