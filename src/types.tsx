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
  header: number;
  title: string;
  author_id: number;
  author_name: string;
  updated: string;
  content: string;
  permission: number;
  is_notice: false;
  board_id: 0;
};

export type Reply = {
  id: number;
  author_name: string;
  content: string;
  created: string;
};

export type User = {
  id: any;
  name: string; // 이름
  team: string; // 소속
  message: string; //profile message
  number: number; //기수(논의필요)
  image: string; //profile image(논의필요)
};
