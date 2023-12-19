export type User = {
  id: string;
  username: string;
};

export type UserProps = {
  users: User[];
  currentUser: User;
  setUsers: (user: User) => void;
  setCurrentUser: (user: User) => void;
  removeUser: (user: User) => void;
};
