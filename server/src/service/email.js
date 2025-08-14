import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { userEmail } = req.body;
    const { resume } = req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const downloadCvObject = {
      from: process.env.GMAIL_USER,
      to: userEmail,
      subject: "Request for CV",
      text: `Greetings,

Thank you for contacting me. I appreciate your interest in learning more about my background and experiences. I wanted to let you know that I have received your request and will be sending my CV to you shortly.

Your interest in my expertise and achievements is truly valued, and I believe my CV will provide valuable insights for you.

Thank you for your time and consideration. If you have any further questions or require additional information, please do not hesitate to reach out.

Best regards,

Abhishek Shaw`,
    };

    const contactMeObject = {
      from: process.env.GMAIL_USER,
      to: userEmail,
      subject: "Collaboration Request",
      text: `Greetings,

I hope this message finds you well.

Thank you for reaching out and expressing your interest in collaborating with me. I am excited about the opportunity to work together and explore potential projects. Your enthusiasm and vision for collaboration are truly appreciated, and I believe that our combined expertise can lead to remarkable outcomes.

I look forward to discussing how we can bring our ideas to life and achieve our shared goals. Please let me know your availability for a meeting or any further details you would like to discuss.

Best regards,

Abhishek Shaw`,
    };

    try {
      const info = await transporter.sendMail(
        resume === undefined ? downloadCvObject : contactMeObject
      );
      console.log("Email sent: " + info.response);
      res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
      console.log("Error details:", error);
      if (error.response && error.response.includes("Invalid login")) {
        res.status(500).json({
          message: "Failed to send email. Invalid login credentials.",
        });
      } else {
        res
          .status(500)
          .json({ message: "Failed to send email", error: error.toString() });
      }
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
