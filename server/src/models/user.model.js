import { model, Schema } from "mongoose";

const userSchema = Schema({
  username: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

export const User = model("User", userSchema);
