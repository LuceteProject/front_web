import React, { useState, useEffect } from "react";
import { IoNotificationsOutline } from "react-icons/io5";

import "../styles/Todo.css"; // Board.css 파일에서 추가적인 스타일을 정의합니다.
import { BrowserRouter as Router, Route } from "react-router-dom";
import {
  FaPlusCircle,
  FaRegCheckCircle,
  FaRegCircle,
  FaTimes,
} from "react-icons/fa";
import { Container, Form } from "react-bootstrap";
interface Todo {
  id: string;
  text: string;
  completed: boolean;
  category: string;
  check: boolean;
}

function Page() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodoAll, setNewTodoAll] = useState("");
  const [newTodoTeam, setNewTodoTeam] = useState("");
  const [newTodoPersonal, setNewTodoPersonal] = useState("");
  const [category, setCategory] = useState("전체");
  const [checked, setChecked] = useState(false);

  const handleAddTodo = () => {
    let newTodo = "";
    if (category === "전체") {
      newTodo = newTodoAll;
      setNewTodoAll("");
    } else if (category === "팀") {
      newTodo = newTodoTeam;
      setNewTodoTeam("");
    } else if (category === "개인") {
      newTodo = newTodoPersonal;
      setNewTodoPersonal("");
    }

    if (newTodo) {
      const newTodoItem: Todo = {
        id: Date.now().toString(),
        text: newTodo,
        completed: false,
        category: category,
        check: false,
      };
      setTodos([...todos, newTodoItem]);
    }
  };

  const Checked = (id: string) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, check: !todo.check } : todo
    );
    setTodos(updatedTodos);
  };

  const handleToggleTodo = (id: string) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const handleDeleteTodo = (id: string) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const AllItem = ({ item }: { item: Todo }) => (
    <div>
      <div>{item.text}</div>

      <div onClick={() => Checked(item.id)}>
        <FaRegCircle size={25} color="#B77DE4" />
        <FaRegCheckCircle color="#B77De4" />{" "}
      </div>
      <div onClick={() => handleDeleteTodo(item.id)}>
        <FaTimes name="close" size={25} color="red" />
      </div>
      <div
        style={{
          borderBottomColor: "#B77DE4",
          borderBottomWidth: 1,
        }}
      />
    </div>
  );
  const TeamItem = ({ item }: { item: Todo }) => (
    <div>
      <div>
        <div>{item.text}</div>

        <div onClick={() => Checked(item.id)}>
          <FaRegCircle size={25} color="#B77DE4" />
          <FaRegCheckCircle color="#B77De4" />
          <div />
        </div>
        <div onClick={() => handleDeleteTodo(item.id)}>
          <FaTimes name="close" size={25} color="red" />
        </div>
      </div>
      <div
        style={{
          borderBottomColor: "#CBD773",
          borderBottomWidth: 1,
        }}
      />
    </div>
  );
  const PersonalItem = ({ item }: { item: Todo }) => (
    <div>
      <div>
        <div>{item.text}</div>

        <div onClick={() => Checked(item.id)}>
          <FaRegCircle size={25} color="#B77DE4" />
          <FaRegCheckCircle color="#B77De4" />
        </div>
        <div onClick={() => handleDeleteTodo(item.id)}>
          <FaTimes name="close" size={25} color="red" />
        </div>
      </div>
      <div
        style={{
          borderBottomColor: "#CA6D68",
          borderBottomWidth: 1,
        }}
      />
    </div>
  );

  return (
    <Container className="mt-4">
      <div style={{ flex: 1, backgroundColor: "#fff" }}>
        <div style={{ margin: 10, width: "400px", height: "300px" }}>
          {/* 전체 투두리스트 */}
          <div
            style={{
              backgroundColor: "#B77DE4",
              borderRadius: 50,
              marginRight: 250,
              marginBottom: 5,
              marginTop: 15,
              
            }}
            className="todo-category"
          >
            <p style={{ fontSize: 22, color: "#fff", paddingLeft: 10 }}>전체</p>
          </div>
          <div>
            <input
              style={{ float: "left", marginRight: "10px", width: "350px" }}
              type="text"
              placeholder="전체 항목을 입력하세요"
              value={newTodoAll}
              onChange={(e) => setNewTodoAll(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleAddTodo()}
            />
            <FaPlusCircle
              style={{ float: "left" }}
              onClick={() => {
                handleAddTodo();
                setCategory("전체");
              }}
            />
          </div>

          <div>
            {todos
              .filter((todo) => todo.category === "전체")
              .map((item) => (
                <AllItem key={item.id} item={item} />
              ))}
          </div>

          {/* 팀 투두리스트 */}
          <div
            style={{
              backgroundColor: "#CBD773",
              borderRadius: 50,
              marginRight: 250,
              alignItems: "center",
              marginBottom: 5,
              marginTop: 15,
              width: "400px",
            }}
          >
            <p style={{ fontSize: 22, color: "#fff" }}>팀</p>
          </div>

          {/* ... (팀과 개인 투두리스트에 대한 변경) */}
        </div>
      </div>
    </Container>
  );
}
export default Page;
