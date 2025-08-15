import { Router } from "express";
import { register, setUsername } from "../controllers/user.controller.js";

export const userRouter = Router();

userRouter.post("/", register);
userRouter.post("/set-username", setUsername);
