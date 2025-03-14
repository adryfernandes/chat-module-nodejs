import { PaswordDocument } from "@/types/passwordTypes";
import mongoose from "mongoose";

const passwordSchema = new mongoose.Schema<PaswordDocument>(
  {
    hash: { type: String, required: true, unique: true, index: true },
  },
  { collection: "passwords", timestamps: true }
);

export const PasswordModel = mongoose.model<PaswordDocument>(
  "Password",
  passwordSchema
);
