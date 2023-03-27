type todo = {
  title: string;
  complet: boolean;
  id: number;
  favourite: boolean;
  details: string;
};

export type Todo = {
  userID: number;
  userName: string;
  password: number;
  todos: todo[];
  deleted: todo[];
  favourite: todo[];
  completed: todo[];
  theme: number;
};
