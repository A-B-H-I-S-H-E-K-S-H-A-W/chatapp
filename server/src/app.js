import express from "express";
import { userRouter } from "./routes/user.routes.js";
import { authRouter } from "./routes/auth.routes.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/user", userRouter);
app.use("/auth/v1", authRouter);

export default app;
