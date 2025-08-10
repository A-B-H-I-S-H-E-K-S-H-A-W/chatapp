import { Router } from "express";
import { auth } from "../controllers/auth.controller";

export const authRouter = Router();

authRouter.get("/", auth);
