import { Document } from "mongoose";

export interface UserDocument extends Document {
  username: string;
  passwordId: string;
  createdAt?: Date;
  updatedAt?: Date;
}
