import { PaswordDocument } from "@/types/passwordTypes";
import mongoose from "mongoose";
export declare const PasswordModel: mongoose.Model<PaswordDocument, {}, {}, {}, mongoose.Document<unknown, {}, PaswordDocument> & PaswordDocument & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
