import { Document } from "mongoose";

export interface PaswordDocument extends Document {
  hash: string;
}
