import { broadcastChannelService } from '../broadcast-channel';
import { useChatStore } from '../../hooks/useChat/useChat';
import { v4 as uuidv4 } from 'uuid';
import { useUsersStore } from '../../hooks/useUsers';
import { chatActionHandlers } from './handlers';
import { Message } from '../../hooks/useChat/useChat.types';

const channelName = 'chat-broadcast-channel';

const actionHandlersMap = {
  newMessage: chatActionHandlers.handleNewMessage,
};

const broadcastChannel = broadcastChannelService.createBroadcastChannel<
  typeof actionHandlersMap
>(channelName, actionHandlersMap);

const sendMessage = (messageContent: string) => {
  const currentUser = useUsersStore.getState().currentUser;

  if (!currentUser) return;

  const message = {
    id: uuidv4(),
    content: messageContent,
    author: currentUser,
    timestamp: Date.now(),
  };

  useChatStore.getState().setMessages(message);

  broadcastChannelService.emit<Message>(
    broadcastChannel,
    'newMessage',
    message
  );
};

export const chatService = {
  sendMessage,
};
