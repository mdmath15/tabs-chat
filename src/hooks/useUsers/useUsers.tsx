import { create } from 'zustand';
import type { UserProps, User } from './useUsers.types';

const useUsersStore = create<UserProps>((set) => ({
  users: [] as User[],
  currentUser: {} as User,
  setUsers: (user: User) => {
    set((state) => ({ users: [...state.users, user] }));
  },
  setCurrentUser: (user: User) => set({ currentUser: user }),
  removeUser: (removedUser: User) =>
    set((state) => ({
      users: state.users.filter(
        (user) => user.username !== removedUser.username
      ),
    })),
}));

const useUsers = () => {
  return useUsersStore((state) => ({
    users: state.users,
    currentUser: state.currentUser,
    setUsers: state.setUsers,
    setCurrentUser: state.setCurrentUser,
    removeUser: state.removeUser,
  }));
};

export { useUsersStore, useUsers };
