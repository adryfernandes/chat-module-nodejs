import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    content: { type: String, required: true },
    sender: { type: String, required: true },
    receiver: { type: String, required: true },
    read: { type: Boolean, default: false },
  },
  { collection: "completed", timestamps: true }
);

export const MessageModel = mongoose.model("Completed", messageSchema);
