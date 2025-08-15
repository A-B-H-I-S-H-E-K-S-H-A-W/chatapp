import { User } from "../models/user.model.js";
import jwt from "jsonwebtoken";

export async function register(req, res) {
  try {
    let user = await User.findOne({ email: req.email });

    if (!user) {
      user = new User({ email: req.email });
      await user.save();
      console.log("User created");
    } else {
      console.log("User already exists");
    }

    const token = jwt.sign(
      { email: user.email, id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN || "7d" }
    );

    return res.status(200).json({
      message: "User logged in successfully",
      success: true,
      token,
    });
  } catch (error) {
    console.error("User creation error:", error);
    return res.status(500).json({
      message: "Server error while creating user",
      success: false,
    });
  }
}

export async function setUsername(req, res) {
  try {
    const { username, fullName, email } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    user.username = username;
    user.fullName = fullName;
    await user.save();

    console.log("Username set successfully");

    return res.status(200).json({
      success: true,
      message: "Username updated successfully",
      user,
    });
  } catch (error) {
    console.error("Error updating username:", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
}
