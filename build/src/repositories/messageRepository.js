"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.messageRepository = void 0;
const models_1 = require("@/models");
const baseRepository_1 = __importDefault(require("./baseRepository"));
exports.messageRepository = new baseRepository_1.default(models_1.MessageModel);
