"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasswordModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const passwordSchema = new mongoose_1.default.Schema({
    hash: { type: String, required: true, unique: true, index: true },
}, { collection: "passwords", timestamps: true });
exports.PasswordModel = mongoose_1.default.model("Password", passwordSchema);
