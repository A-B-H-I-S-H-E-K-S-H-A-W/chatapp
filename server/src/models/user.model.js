import { model, Schema } from "mongoose";

const userSchema = Schema({
  username: {
    type: String,
    unique: true,
  },
  fullName: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

export const User = model("User", userSchema);
