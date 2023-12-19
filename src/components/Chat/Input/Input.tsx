import React, { FormEventHandler } from 'react';
import { Button, Container, TextField } from './Input.styles';
import { IoSendSharp } from 'react-icons/io5';
import { chatService } from '../../../services/chat/chat';
import { Emojis } from './Emojis';
import { useEmojis } from '../../../hooks/useEmojis';

export function Input() {
  const [isEmojisOpen, setIsEmojisOpen] = React.useState(false);
  const { data, isError, isLoading } = useEmojis();

  const textFieldRef = React.useRef<HTMLInputElement>(null);

  const onSubmitMessage = React.useCallback<FormEventHandler>((e) => {
    e.preventDefault();

    if (!textFieldRef.current) return;

    const content = textFieldRef.current.value;

    if (!content) return;

    chatService.sendMessage(content.trim());
    textFieldRef.current.value = '';
    setIsEmojisOpen(false);
  }, []);

  const onSelectEmoji = React.useCallback((emoji: string) => {
    const input = textFieldRef.current;

    if (!input) return;

    const { selectionStart, selectionEnd } = input;

    input.setRangeText(emoji, selectionStart, selectionEnd, 'end');
  }, []);

  return (
    <Container onSubmit={onSubmitMessage}>
      <Emojis
        emojis={data}
        onSelectEmoji={onSelectEmoji}
        isError={isError}
        isLoading={isLoading}
        isOpen={isEmojisOpen}
        toggleEmojis={() => setIsEmojisOpen((state) => !state)}
      />
      <TextField ref={textFieldRef} placeholder="Digite uma mensagem" />
      <Button type="submit">
        <IoSendSharp />
      </Button>
    </Container>
  );
}
