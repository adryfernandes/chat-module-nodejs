import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true, index: true },
  },
  { collection: "completed", timestamps: true }
);

export const UserModel = mongoose.model("Completed", userSchema);
