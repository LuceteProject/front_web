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
  created: string;
  updated: string;
  content: string;
  permission: number;
  is_notice: false;
  board_id: number;
};

export type Reply = {
  id: number;
  content: string;
  created: string;
  updated: string;
  post_id : number;
  user_id : string;
  parent: any;
  is_deleted: boolean;

};

export type User = {
  id: any;
  name: string; // 이름
  team: string; // 소속
  message: string; //profile message
  number: number; //기수(논의필요)
  image: string; //profile image(논의필요)
};

export type Event = {
  id: number;
  title: string;
  date: string;
  startTime: string;
  endTime: string;
};