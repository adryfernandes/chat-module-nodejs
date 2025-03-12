import { MessageModel } from "@/models";
import BaseRepository from "./baseRepository";
import { MessageDocument } from "@/types/messageTypes";

export const messageRepository = new BaseRepository<MessageDocument>(
  MessageModel
);
