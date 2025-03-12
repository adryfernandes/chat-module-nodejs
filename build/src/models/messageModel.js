"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const messageSchema = new mongoose_1.default.Schema({
    content: { type: String, required: true },
    sender: { type: String, required: true },
    receiver: { type: String, required: true },
    read: { type: Boolean, default: false },
}, { collection: "completed", timestamps: true });
exports.MessageModel = mongoose_1.default.model("Completed", messageSchema);
