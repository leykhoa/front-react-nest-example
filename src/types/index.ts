export interface Message {
  id: number;
  userId: number;
  isSender: boolean;
  message: string;
  timestamp: string;
  [key: string]: any;
}

export interface Conversation {
  id: number;
  userId: number;
  isRead: boolean;
  isSender: boolean;
  messages: Message[];
  [key: string]: any;
 
}
