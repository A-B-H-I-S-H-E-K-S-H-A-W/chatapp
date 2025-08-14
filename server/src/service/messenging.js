import twilio from "twilio";
import dotenv from "dotenv";

dotenv.config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = twilio(accountSid, authToken);

export async function sendSMS(to, message) {
  try {
    const sms = await client.messages.create({
      body: message,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: to,
    });

    return {
      message: `SMS sent successfully to ${sms.to}`,
      success: true,
    };
  } catch (error) {
    console.error("Error sending SMS ::::", error);
    return {
      message: `SMS couldn't be sent`,
      success: false,
    };
  }
}
