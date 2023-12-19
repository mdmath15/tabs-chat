import { useUsersStore } from '../../hooks/useUsers/useUsers';
import { broadcastChannelService } from '../broadcast-channel';
import { v4 as uuidv4 } from 'uuid';
import { userActionHandlers } from './handlers';
import { User } from '../../hooks/useUsers/useUsers.types';

const channelName = 'users-broadcast-channel';

const actionHandlersMap = {
  declareUser: userActionHandlers.handleDeclareUser,
  userDisconnected: userActionHandlers.handleUserDisconnected,
};

const broadcastChannel = broadcastChannelService.createBroadcastChannel<
  typeof actionHandlersMap
>(channelName, actionHandlersMap);

const askUsername = (): string => {
  const username = prompt(
    'Digite seu nome (deve conter mais de 2 caracteres e menos de 24).'
  );

  if (username === null || username?.length < 3 || username?.length > 24) {
    return askUsername();
  }

  return username;
};

const initializeUser = () => {
  const currentUser = {
    id: uuidv4(),
    username: askUsername(),
  };

  useUsersStore.getState().setCurrentUser(currentUser);

  broadcastChannelService.emit<User>(
    broadcastChannel,
    'declareUser',
    currentUser
  );

  window.addEventListener('unload', () => {
    broadcastChannelService.emit<User>(
      broadcastChannel,
      'userDisconnected',
      currentUser
    );
  });
};

const addUser = (newUser: User) => {
  const users = useUsersStore.getState().users;

  const currentUser = useUsersStore.getState().currentUser;

  if (!currentUser) return;

  if (users?.some((user) => user.username === newUser.username)) return;

  useUsersStore.getState().setUsers(newUser);

  broadcastChannelService.emit<User>(
    broadcastChannel,
    'declareUser',
    currentUser
  );
};

export const userService = {
  initializeUser,
  addUser,
};
