import { Document } from "mongoose";

export interface MessageDocument extends Document {
  content: string;
  sender: string;
  receiver: string;
  read: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
