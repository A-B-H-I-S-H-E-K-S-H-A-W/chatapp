import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Welcome to the chatapp API!" });
});

router.get("/status", (req, res) => {
  res.json({ status: "Server is running" });
});

export default router;
