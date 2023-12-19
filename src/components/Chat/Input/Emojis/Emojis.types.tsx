export type Emoji = {
  slug: string;
  character: string;
  unicodeName: string;
  codePoint: string;
  group: string;
  subGroup: string;
};

export type EmojisProps = {
  emojis?: Emoji[];
  onSelectEmoji: (emoji: string) => void;
  isOpen: boolean;
  toggleEmojis: () => void;
  isError?: boolean;
  isLoading?: boolean;
};
