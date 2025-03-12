import { Document } from "mongoose";

export interface UserDocument extends Document {
  username: string;
  createdAt?: Date;
  updatedAt?: Date;
}
