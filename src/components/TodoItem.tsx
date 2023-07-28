import React, { useState, useEffect } from "react";
import "../styles/Todo.css"; // Board.css 파일에서 추가적인 스타일을 정의합니다.
import { BrowserRouter as Router, Route } from "react-router-dom";
import { FaRegCircle, FaRegCheckCircle, FaTimes, FaPlusCircle } from "react-icons/fa";
import { Todo } from "../types";
type TodoCategory = "All" | "Team" | "Personal";
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
    <div style={{ display: "flex", padding: 10 }}>
      <div style={{ marginRight: 10 }}>{item.text}</div>
      <FaRegCircle style={{ display: item.check ? 'none' : 'block' }} size={20} color={color} onClick={() => onChecked(item.id)} />
      <FaRegCheckCircle style={{ display: item.check ? 'block' : 'none' }} size={20} color={color} onClick={() => onChecked(item.id)} />
      <FaTimes
        className="remove-icon"
        size={20}
        color="#ff4b6b"
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
        style={{ marginRight: "10px", width: "360px" }}
        type="text"
        placeholder="항목을 입력하세요"
        value={newTodo}
        onChange={(e) => onNewTodoChange(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && onAddTodo()}
      />
      <FaPlusCircle
        style={{ color: "#D7BCDD" }}
        size={30}
        onClick={onAddTodo}
      />
    </div>
  );
};

export { TodoItem, InputTodoItem };
