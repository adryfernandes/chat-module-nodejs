import mongoose from "mongoose";
import { MessageDocument } from "@/types/messageTypes";
export declare const MessageModel: mongoose.Model<MessageDocument, {}, {}, {}, mongoose.Document<unknown, {}, MessageDocument> & MessageDocument & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
