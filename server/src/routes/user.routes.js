import { Router } from "express";
import { user } from "../controllers/user.controller.js";

export const userRouter = Router();

userRouter.get("/", user);
