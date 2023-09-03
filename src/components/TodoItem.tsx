import React, { useState, useEffect } from "react";
import "../styles/Todo.css"; // Board.css 파일에서 추가적인 스타일을 정의합니다.\
import { FaRegCircle, FaRegCheckCircle, FaTimes, FaMinus, FaPlusCircle } from "react-icons/fa";
import { Todo } from "../types";
import { Ellipsis } from "react-bootstrap/esm/PageItem";

type TodoCategory = "All" | "Team" | "Personal";
const serverCategoryToClientCategory: { [key: number]: TodoCategory } = {
  0: "All",
  1: "Team",
  2: "Personal",
};

interface TodoItemProps {
  item: Todo;
  category: TodoCategory;
  onChecked: (id: string) => void;
  onDelete: (id: string) => void;
}
interface InputTodoItemProps {
  newTodo: string;
  onNewTodoChange: (text: string) => void;
  onAddTodo: () => void;
}

const TodoItem = (props: TodoItemProps) => {
  const { item, category, onChecked, onDelete } = props;
  const categoryStyles = {
    All: { color: "#8056AA"},
    Team: { color: "#9978C1"},
    Personal: { color: "#D5ADDF"},
  };

  const { color } = categoryStyles[category];

  return (
    /* 완료된 항목들 정렬은 서버에서 받아올 때 정렬된 상태로 ? 리렌더링 문제 있긴함*/
    <div style={{ display: "flex", marginTop: 12 }}>
      <FaRegCircle style={{ display: item.completed ? 'none' : 'block' }} size={30} color={color} onClick={() => onChecked(item.id)} />
      <FaRegCheckCircle style={{ display: item.completed ? 'block' : 'none' }} size={30} color={color} onClick={() => onChecked(item.id)} />
      
      <text style={{maxWidth: 240, wordBreak: 'break-all', minWidth: 240, marginLeft: 5, marginRight: 5, fontSize: 20 }}>{item.content}</text>
      <FaMinus
        className="remove-icon"
        size={20}
        color="#ccc"
        onClick={() => onDelete(item.id)}
      />
    </div>
  );
};

const InputTodoItem = (props: InputTodoItemProps) => {
  const { newTodo, onNewTodoChange, onAddTodo } = props;
  return (
    <div className="input-todo">
      <input
        className="input-text"
        type="text"
        placeholder="항목을 입력하세요"
        value={newTodo}
        maxLength={30}
        onChange={(e) => onNewTodoChange(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && onAddTodo()}
      />
      <FaPlusCircle
        style={{ color: "#D7BCDD" }}
        size={25}
        onClick={onAddTodo}
      />
    </div>
  );
};

export { TodoItem, InputTodoItem };
