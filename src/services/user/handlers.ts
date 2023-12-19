import { userService } from '.';
import { useUsersStore } from '../../hooks/useUsers';
import { type User } from '../../hooks/useUsers/useUsers.types';

const handleDeclareUser = (user: User) => {
  userService.addUser(user);
};

const handleUserDisconnected = (user: User) => {
  useUsersStore.getState().removeUser(user);
};

export const userActionHandlers = {
  handleDeclareUser,
  handleUserDisconnected,
};
