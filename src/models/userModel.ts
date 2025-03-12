import { UserDocument } from "@/types/userTypes";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema<UserDocument>(
  {
    username: { type: String, required: true, unique: true, index: true },
  },
  { collection: "completed", timestamps: true }
);

export const UserModel = mongoose.model<UserDocument>("Completed", userSchema);
