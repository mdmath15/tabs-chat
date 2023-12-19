import React from 'react';
import { useChatStore } from '../../../hooks/useChat/useChat';
import { Message } from './Message';
import { Container } from './Messages.styles';

export function Messages() {
  const messages = useChatStore((state) => state.messages);

  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!containerRef.current) return;
    containerRef.current.scrollTop = containerRef.current.scrollHeight;
  }, [messages]);

  return (
    <Container ref={containerRef}>
      {messages?.map((message) => <Message key={message.id} {...message} />)}
    </Container>
  );
}
