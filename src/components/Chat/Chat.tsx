import { Container } from './Chat.styles';
import { Header } from './Header';
import { Input } from './Input';
import { Messages } from './Messages';

export function Chat() {
  return (
    <Container>
      <Header />
      <Messages />
      <Input />
    </Container>
  );
}
