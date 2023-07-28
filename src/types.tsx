export type Todo = {
  id: string;
  text: string;
  completed: boolean;
  category: string;
  check: boolean;
};
export type TodoCategory = "All" | "Team" | "Personal";

export type Post = {
  id: number;
  title: string;
  author_name: string;
  updated: string;
  content: string;
  permission: number;
};
