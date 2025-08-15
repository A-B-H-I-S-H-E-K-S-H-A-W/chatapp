import { Router } from "express";
import { register, setUsername } from "../controllers/user.controller.js";
import { authenticate } from "../middleware/middleware.js";

export const userRouter = Router();

userRouter.post("/", register);
userRouter.post("/set-username", authenticate(), setUsername);
