import { useChatStore } from '../../hooks/useChat';
import { type Message } from '../../hooks/useChat/useChat.types';

const handleNewMessage = (message: Message) => {
  useChatStore.getState().setMessages(message);
};

export const chatActionHandlers = {
  handleNewMessage,
};
