import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Todo } from "../types";
import { TodoItem, InputTodoItem } from "../components/TodoItem";
import { Container, Form } from "react-bootstrap";
import "../styles/Todo.css"; // Board.css 파일에서 추가적인 스타일을 정의합니다.

function Page() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodoAll, setNewTodoAll] = useState("");
  const [newTodoTeam, setNewTodoTeam] = useState("");
  const [newTodoPersonal, setNewTodoPersonal] = useState("");
  const [category, setCategory] = useState("전체");
  const [checked, setChecked] = useState(false);

  const handleAddTodo = () => {
    let newTodo = "";
    if (category === "All") {
      newTodo = newTodoAll;
      setNewTodoAll("");
    } else if (category === "Team") {
      newTodo = newTodoTeam;
      setNewTodoTeam("");
    } else if (category === "Personal") {
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
  /* 
  이거 중복되는거 맞는지 확인 필요 
  const Checked = (id: string) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

 */
  const handleToggleTodo = (id: string) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, check: !todo.check } : todo
    );
    setTodos(updatedTodos);
  };

  const handleDeleteTodo = (id: string) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <Container className="mt-4">
      <div style={{ flex: 1, backgroundColor: "#fff" }}>
        {/* 전체 투두리스트 */}
        <div
          style={{
            backgroundColor: "#6554A2",
            borderRadius: 50,
            marginRight: 200,
            marginBottom: 5,
            marginTop: 15,
          }}
          className="todo-category"
        >
          <p
            className="title-text"
            style={{ fontSize: 22, color: "#fff", paddingLeft: 20 }}
          >
            전체
          </p>
        </div>
        <InputTodoItem
          newTodo={newTodoAll}
          onNewTodoChange={setNewTodoAll}
          onAddTodo={() => {
            handleAddTodo();
            setCategory("All");
          }}
        />

        <div>
          {todos
            .filter((todo) => todo.category === "All")
            .map((item) => (
              <TodoItem
                key={item.id}
                item={item}
                category="All"
                onChecked={handleToggleTodo}
                onDelete={handleDeleteTodo}
              />
            ))}
        </div>
        <hr />
        {/* 팀 투두리스트 */}
        <div
          style={{
            backgroundColor: "#9978C1",
            borderRadius: 50,
            marginRight: 200,
            marginBottom: 5,
            marginTop: 15,
          }}
        >
          <p style={{ fontSize: 22, color: "#fff", paddingLeft: 20 }}>팀</p>
        </div>
        <InputTodoItem
          newTodo={newTodoTeam}
          onNewTodoChange={setNewTodoTeam}
          onAddTodo={() => {
            handleAddTodo();
            setCategory("Team");
          }}
        />
        <div>
          {todos
            .filter((todo) => todo.category === "Team")
            .map((item) => (
              <TodoItem
                key={item.id}
                item={item}
                category="Team"
                onChecked={handleToggleTodo}
                onDelete={handleDeleteTodo}
              />
            ))}
        </div>
        <hr />
        {/* 개인 투두리스트 */}
        <div
          style={{
            backgroundColor: "#D5ADDF",
            borderRadius: 50,
            marginRight: 200,
            marginBottom: 5,
            marginTop: 15,
          }}
        >
          <p style={{ fontSize: 22, color: "#fff", paddingLeft: 20 }}>개인</p>
        </div>
        <InputTodoItem
          newTodo={newTodoPersonal}
          onNewTodoChange={setNewTodoPersonal}
          onAddTodo={() => {
            handleAddTodo();
            setCategory("Personal");
          }}
        />
        <div>
          {todos
            .filter((todo) => todo.category === "Personal")
            .map((item) => (
              <TodoItem
                key={item.id}
                item={item}
                category="Personal"
                onChecked={handleToggleTodo}
                onDelete={handleDeleteTodo}
              />
            ))}
        </div>
        <hr />
      </div>
    </Container>
  );
}
export default Page;
