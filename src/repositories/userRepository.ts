import { UserModel } from "@/models";
import BaseRepository from "./baseRepository";
import { UserDocument } from "@/types/userTypes";

export const userRepository = new BaseRepository<UserDocument>(UserModel);
