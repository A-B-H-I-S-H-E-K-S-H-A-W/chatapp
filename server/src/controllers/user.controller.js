import { User } from "../models/user.model.js";

export async function register(req, res) {
  try {
    const user = new User({
      email: req.email,
    });

    await user.save();
    console.log("user created");
    return {
      message: "User loggedin successfully",
      success: true,
    };
  } catch (error) {
    console.error("User creation error:", error);
    return res.status(500).json({
      message: "Server error while creating user",
      success: false,
    });
  }
}
