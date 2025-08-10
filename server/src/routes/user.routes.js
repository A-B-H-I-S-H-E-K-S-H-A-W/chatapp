import { Router } from "express";
import { user } from "../controllers/user.controller";

export const userRouter = Router();

userRouter.get("/", user);
