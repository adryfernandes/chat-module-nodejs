"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRepository = void 0;
const models_1 = require("@/models");
const baseRepository_1 = __importDefault(require("./baseRepository"));
exports.userRepository = new baseRepository_1.default(models_1.UserModel);
