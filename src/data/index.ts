import { Conversation, Message } from "../types";

export const _MESSAGE_LIST: Message[] = [
  {
    id: 0,
    userId: 1,
    message: "Xin chào, có ai ở đây không?",
    timestamp: "2023-12-12T08:58:04.180Z",
    isSender: true,
  },
  {
    id: 1,
    userId: 1,
    message: "Chào bạn, tôi giúp gì được cho bạn",
    timestamp: "2023-12-12T09:58:04.180Z",
    isSender: false,
  },
  {
    id: 2,
    userId: 1,
    message: "Bạn còn ở đó không",
    timestamp: "2023-12-12T010:58:04.180Z",
    isSender: false,
  },
  {
    id: 3,
    userId: 1,
    message: "Tôi ở đây,tôi nhắn test thôi",
    timestamp: "2023-12-12T10:59:04.180Z",
    isSender: true,
  },
  {
    id: 4,
    userId: 2,
    message: "Hello",
    timestamp: "2023-12-12T10:59:04.180Z",
    isSender: true,
  },
  {
    id: 5,
    userId: 2,
    message: "Hi",
    timestamp: "2023-12-12T10:59:04.180Z",
    isSender: false,
  },
  {
    id: 6,
    userId: 2,
    message: "Kakakakakakakak",
    timestamp: "2023-12-12T11:19:04.180Z",
    isSender: true,
  },
];

export const _USER_LIST = [
  {
    id: 1,
    name: "Administrator",
    role: 1,
  },
  {
    id: 2,
    name: "User 01",
    role: 0,
  },
  {
    id: 3,
    name: "User 02",
    role: 0,
  },
  {
    id: 4,
    name: "User 03",
    role: 0,
  },
];

export const _CONVERSATION_LIST: Conversation[] = [
  {
    id: 0,
    userId: 1,
    lastMessageId: 3,
    title: "User 01",
  },
  {
    id: 1,
    userId: 2,
    lastMessageId: 6,
    title: "User 02",
  },
];
