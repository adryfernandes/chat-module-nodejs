import mongoose, { Schema } from "mongoose";
import { MessageDocument } from "@/types/messageTypes";

const messageSchema = new Schema<MessageDocument>(
  {
    content: { type: String, required: true },
    sender: { type: String, required: true },
    receiver: { type: String, required: true },
    read: { type: Boolean, default: false },
  },
  { collection: "messages", timestamps: true }
);

export const MessageModel = mongoose.model<MessageDocument>(
  "Message",
  messageSchema
);
