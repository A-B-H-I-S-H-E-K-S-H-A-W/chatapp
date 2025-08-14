import { sendOtpEmail } from "../service/email.js";

export async function login(req, res) {
  const { email, otp } = req.body;

  if (!email || !otp) {
    return res.status(400).json({
      message: "Invalid email or OTP",
      success: false,
    });
  }

  try {
    const result = await sendOtpEmail(email, otp);

    if (result.success) {
      return res.status(200).json(result);
    } else {
      return res.status(400).json(result);
    }
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({
      message: "Server error while sending OTP",
      success: false,
    });
  }
}
