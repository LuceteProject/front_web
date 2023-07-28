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

export type User = {
  id : any;
  name : string; // 이름
  team : string; // 소속
  message : string; //profile message
  number : number; //기수(논의필요)
  image : string; //profile image(논의필요)
}
