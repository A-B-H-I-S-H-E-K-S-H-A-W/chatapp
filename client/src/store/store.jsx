import axios from "axios";
import { create } from "zustand";

export const useCounterStore = create((set) => ({
  email: "",
  otp: 0,
  sendOtp: async (email) => {
    const otp = Math.floor(100000 + Math.random() * 900000);

    try {
      await axios.post("/api/auth/v1/login", {
        email,
        otp,
      });

      set({ otp, email });
      console.log("OTP sent successfully");
    } catch (error) {
      console.error("Error sending OTP:", error);
      throw error;
    }
  },
}));
