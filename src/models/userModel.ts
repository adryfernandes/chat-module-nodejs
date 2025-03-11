import { randomUUID } from 'crypto';
import mongoose, { Schema } from 'mongoose';

export interface UserDocument {
  _id: string;
  username: string;
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new Schema<UserDocument>(
  {
    _id: { type: String, default: () => randomUUID() },
    username: { type: String, required: true, unique: true, index: true },
  },
  { timestamps: true }
);

export const UserModel = mongoose.model<UserDocument>('User', userSchema);
