import { Message } from '../../../../hooks/useChat/useChat.types';

export type MessageProps = Omit<Message, 'id'>;
