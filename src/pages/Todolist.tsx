import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Todo } from "../types";
import { TodoItem, InputTodoItem } from "../components/TodoItem";
import { Col, Container, Form, Row } from "react-bootstrap";
import "../styles/Todo.css"; // Board.css 파일에서 추가적인 스타일을 정의합니다.

function Page() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodoAll, setNewTodoAll] = useState("");
  const [newTodoTeam, setNewTodoTeam] = useState("");
  const [newTodoPersonal, setNewTodoPersonal] = useState("");
  const [category, setCategory] = useState("All");
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
      <Row>
        <Col>
          <h3>투두리스트</h3>
          <p> 카테고리 별 작업을 추가하고 완료 등의 상태를 관리할 수 있습니다.</p>
        </Col>
      </Row>
      <Row>
        <Col xs={6} md={4}>
          {/* 전체 투두리스트 */}
          <div
            style={{
              backgroundColor: "#8056AA",
            }}
            className="todo-category"
          >
            <p
              className="title-text"
              style={{ fontSize: 22, color: "#fff", paddingLeft: 20 }}
            >
              📢 전체
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
          <div className="space-for-list">
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

        </Col>
        <Col xs={6} md={4}>
          {/* 팀 투두리스트 */}
          <div
            style={{
              backgroundColor: "#9978C1",
            }}
            className="todo-category"
          >
            <p
              className="title-text"
              style={{ fontSize: 22, color: "#fff", paddingLeft: 20 }}
            >
              ⚙️ 팀
            </p>
          </div>
          <InputTodoItem
            newTodo={newTodoTeam}
            onNewTodoChange={setNewTodoTeam}
            onAddTodo={() => {
              handleAddTodo();
              setCategory("Team");
            }}
          />
          <div className="space-for-list">
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
 
        </Col>
        <Col xs={6} md={4}>
          {/* 개인 투두리스트 */}
          <div
            style={{
              backgroundColor: "#D5ADDF",
            }}
            className="todo-category"
          >
            <p
              className="title-text"
              style={{ fontSize: 22, color: "#fff", paddingLeft: 20 }}
            >
              ✏️ 개인
            </p>
          </div>
          <InputTodoItem
            newTodo={newTodoPersonal}
            onNewTodoChange={setNewTodoPersonal}
            onAddTodo={() => {
              handleAddTodo();
              setCategory("Personal");
            }}
          />
          <div className="space-for-list">
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
        </Col>
      </Row>

      <div style={{ flex: 1, backgroundColor: "#fff" }}>




      </div>
    </Container>
  );
}
export default Page;
