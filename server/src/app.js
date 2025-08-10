import express from "express";
import router from "./routes/chat.routes.js";
import { userRouter } from "./routes/user.routes.js";

const app = express();

app.use(express.json());

app.use("/user", userRouter);

export default app;
