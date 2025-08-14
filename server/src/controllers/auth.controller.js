import { sendSMS } from "../service/messenging.js";

export async function login(req, res) {
  const { number, otp } = req.body;

  if (number && otp) {
    console.log(number, otp);

    const message = `Your OTP for th chatapp is ${otp}. Dont share this OTP with anyone`;

    const result = await sendSMS(number, message);

    if (result.success) {
      return res.status(200).json(result);
    } else {
      return res.status(400).json(result);
    }
  } else {
    console.log("Invalid number or otp");
    return {
      message: "Invalid number",
      success: false,
    };
  }
}
