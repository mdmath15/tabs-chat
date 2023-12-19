import { useUsers } from '../../../../hooks/useUsers';
import { Container, Content, Header } from './Message.styles';
import { MessageProps } from './Message.types';

export function Message({ content, author, timestamp }: MessageProps) {
  const { currentUser } = useUsers();

  return (
    <Container isCurrentUser={author.id === currentUser.id}>
      <Header>
        <h3>{author.username}</h3>
        <span>
          {new Date(timestamp).toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          })}
        </span>
      </Header>
      <Content>{content}</Content>
    </Container>
  );
}
