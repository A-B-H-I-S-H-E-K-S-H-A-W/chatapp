import axios from "axios";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCounterStore = create(
  persist(
    (set) => ({
      email: "",
      otp: 0,
      token: "",
      result: {},
      sendOtp: async (email) => {
        const otp = Math.floor(100000 + Math.random() * 900000).toString();

        try {
          const res = await axios.post("/api/auth/v1/login", { email, otp });
          set({ otp, email, result: res.data });
          console.log("OTP sent successfully");
        } catch (error) {
          console.error("Error sending OTP:", error);
          set({
            result: error.response?.data || {
              message: "Network error",
              success: false,
            },
          });
        }
      },
      verifyOtp: async (email, otp) => {
        try {
          const res = await axios.post("/api/auth/v1/verify", { email, otp });
          console.log("User verified");
          if (res.data.success && res.data.token) {
            set({ token: res.data.token });
            localStorage.setItem("userToken", res.data.token);
          }
          set({ result: res.data });
        } catch (error) {
          console.error("Error verifying user:", error);
          set({
            result: error.response?.data || {
              message: "Network error",
              success: false,
            },
          });
        }
      },
      setUsername: async (email, username) => {
        try {
          const token = useCounterStore.getState().token;
          const res = await axios.post(
            "/api/user/set-username",
            {
              email,
              username,
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          console.log("Username set");
          set({ result: res.data });
          return res.data;
        } catch (error) {
          console.error("Error setting username:", error);
          const data = error.response?.data || {
            message: "Network error",
            success: false,
          };
          set({ result: data });
          return data;
        }
      },
    }),
    {
      name: "user-storage",
      getStorage: () => localStorage,
    }
  )
);
