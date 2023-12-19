import { type User } from '../useUsers/useUsers.types';

export type Message = {
  id: string;
  content: string;
  author: User;
  timestamp: number;
};

export type ChatProps = {
  messages: Message[];
  setMessages: (message: Message) => void;
};
