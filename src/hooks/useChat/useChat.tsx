import { create } from 'zustand';
import type { ChatProps, Message } from './useChat.types';
import { persist } from 'zustand/middleware';

const useChatStore = create<ChatProps, any>(
  persist(
    (set) => ({
      messages: [] as Message[],
      setMessages: (message: Message) => {
        set((state) => ({ messages: [...state.messages, message] }));
      },
    }),
    {
      name: 'chat-storage',
    }
  )
);
const useChat = () => {
  return useChatStore((state) => {
    return {
      messages: state.messages,
      setMessages: state.setMessages,
    };
  });
};

export { useChat, useChatStore };
