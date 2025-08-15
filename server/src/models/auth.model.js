import { model, Schema } from "mongoose";

const authVerificationSchema = Schema({
  email: {
    type: String,
    required: true,
    lowercase: true,
  },
  otp: {
    type: Number,
  },
});

export const AuthVerification = model("Auth", authVerificationSchema);
