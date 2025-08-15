import { Router } from "express";
import { sendOtp, verify } from "../controllers/auth.controller.js";
import { register } from "../controllers/user.controller.js";

export const authRouter = Router();

authRouter.post("/login", sendOtp);
authRouter.post("/verify", verify, register);
