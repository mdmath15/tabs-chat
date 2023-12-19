import { useUsers } from '../../../hooks/useUsers/useUsers';
import { Container } from './Header.styles';

export function Header() {
  const { currentUser, users } = useUsers();

  return (
    <Container>
      <h3>GoBots - Chat</h3>
      <span>
        <strong>{currentUser?.username}</strong>
        {users?.length > 0 && (
          <>
            {' '}
            e mais {users.length} usuário{users.length > 1 && 's'}
          </>
        )}{' '}
      </span>
    </Container>
  );
}
