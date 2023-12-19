import React, { useCallback } from 'react';
import { Container, EmojisList } from './Emojis.styles';
import { MdOutlineEmojiEmotions } from 'react-icons/md';
import { type EmojisProps } from './Emojis.types';
import { Button } from '../Input.styles';
import { useOnClickOutside } from '../../../../hooks/useClickOutside/useClickOutside';

export function Emojis({
  emojis,
  onSelectEmoji,
  isOpen,
  toggleEmojis,
  isError = false,
  isLoading = false,
}: EmojisProps) {
  const emojisContainerRef = React.useRef<HTMLUListElement>(null);

  const handleClickOutside = useCallback(() => {
    toggleEmojis();
  }, [toggleEmojis]);

  useOnClickOutside<HTMLUListElement>(emojisContainerRef, handleClickOutside);

  return (
    <Container>
      <Button type="button" onClick={toggleEmojis}>
        <MdOutlineEmojiEmotions />
      </Button>
      {isOpen && (
        <EmojisList ref={emojisContainerRef}>
          {isLoading && <li>Carregando...</li>}
          {isError ? (
            <li>Falha ao carregar os emojis</li>
          ) : (
            emojis?.map((emoji) => (
              <li
                key={emoji.slug}
                onClick={() => onSelectEmoji(emoji.character)}
              >
                {emoji.character}
              </li>
            ))
          )}
        </EmojisList>
      )}
    </Container>
  );
}
