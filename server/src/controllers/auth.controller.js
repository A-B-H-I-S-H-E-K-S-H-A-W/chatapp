import { sendOtpEmail } from "../service/email.js";

export async function login(req, res) {
  const { email, otp } = req.body;

  if (email && otp) {
    console.log(email, otp);

    const result = await sendOtpEmail(email, otp);

    if (result.success) {
      return res.status(200).json(result);
    } else {
      return res.status(400).json(result);
    }
  } else {
    console.log("Invalid email or otp");
    return {
      message: "Invalid email",
      success: false,
    };
  }
}
