import React from 'react';
import { Chat } from './components/Chat';
import { userService } from './services/user/user';
import { useUsers } from './hooks/useUsers';

export function App() {
  const { currentUser } = useUsers();

  React.useEffect(() => {
    if (!currentUser?.username) {
      userService.initializeUser();
    }
  }, [currentUser?.username]);

  return <Chat />;
}
