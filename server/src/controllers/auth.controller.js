import { AuthVerification } from "../models/auth.model.js";
import { sendOtpEmail } from "../service/email.js";

export async function sendOtp(req, res) {
  const { email, otp } = req.body;

  if (!email || !otp) {
    return res.status(400).json({
      message: "Invalid email or OTP",
      success: false,
    });
  }

  try {
    const result = await sendOtpEmail(email, otp);
    await AuthVerification.findOneAndUpdate(
      { email },
      { email, otp },
      { upsert: true, new: true }
    );

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

export async function verify(req, res, next) {
  const { otp, email } = req.body;

  if (!email || !otp) {
    return res.status(400).json({
      message: "Invalid OTP",
      success: false,
    });
  }

  try {
    const verifyuser = await AuthVerification.findOne({ email });

    console.log(verifyuser.otp, otp);

    if (!verifyuser) {
      return res.status(404).json({
        message: "User not found",
        success: false,
      });
    }

    console.log(verifyuser.otp, otp);

    if (verifyuser.otp.toString() !== otp.toString()) {
      return res.status(400).json({
        message: "OTP not matched",
        success: false,
      });
    }

    req.email = verifyuser.email;

    verifyuser.otp = null;
    await verifyuser.save();

    next();
  } catch (error) {
    console.error("Verification error:", error);
    return res.status(500).json({
      message: "Server error while verifing OTP",
      success: false,
    });
  }
}
