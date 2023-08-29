import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import { fetchData, postData } from "../utils/APIs";

import { Todo } from "../types";
import { TodoItem, InputTodoItem } from "../components/TodoItem";
import "../styles/Todo.css"; // Board.css 파일에서 추가적인 스타일을 정의합니다.
/**
 * @todo 항목 수정 및 삭제 기능
 */
const Page = () => {
  const user_id = JSON.parse(sessionStorage.getItem("user-info") || "{}").id; //사용자 정보 가져올 때 참조
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodoAll, setNewTodoAll] = useState("");
  const [newTodoTeam, setNewTodoTeam] = useState("");
  const [newTodoPersonal, setNewTodoPersonal] = useState("");
  const [teamCode, setTeamCode] = useState(0);

  useEffect(() => {
    const fetchTodoData = async () => {
      const response = await fetchData(`api/v1/todos/userID/${user_id}`); //확인 필요
      setTodos(response);
    };
    fetchTodoData();
  }, []);

  const handleAddTodo = () => {
    let newTodo = "";
    if (teamCode === 0) {
      newTodo = newTodoAll;
      setNewTodoAll("");
    } else if (teamCode === 1) {
      newTodo = newTodoTeam;
      setNewTodoTeam("");
    } else if (teamCode === 2) {
      newTodo = newTodoPersonal;
      setNewTodoPersonal("");
    }

    if (newTodo) {
      const newTodoItem: Todo = {
        id: Date.now().toString(),
        content: newTodo,
        completed: false,
        team_code: teamCode,
        user_id: 0,
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
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const handleDeleteTodo = (id: string) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const Pormation_1: boolean = useMediaQuery({
    query: "(min-width:1180px)",
  });
  const Pormation_2: boolean = useMediaQuery({
    query: "(min-width:810px)",
  });
  return (
    <div>
      {Pormation_1 && (
        <Container className="mt-4">
          <Row>
            <Col>
              <h3>투두리스트</h3>
              <p>
                {" "}
                카테고리 별 작업을 추가하고 완료 등의 상태를 관리할 수 있습니다.
              </p>
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
                  setTeamCode(0);
                }}
              />
              <div className="space-for-list">
                {todos
                  .filter((todo) => todo.team_code === 0)
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
                  setTeamCode(1);
                }}
              />
              <div className="space-for-list">
                {todos
                  .filter((todo) => todo.team_code === 1)
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
                  setTeamCode(2);
                }}
              />
              <div className="space-for-list">
                {todos
                  .filter((todo) => todo.team_code === 2)
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

          <div style={{ flex: 1, backgroundColor: "#fff" }}></div>
        </Container>
      )}
      {Pormation_2 && !Pormation_1 && (
        <Container className="mt-4">
          <Row>
            <Col>
              <h3>투두리스트</h3>
              <p>
                {" "}
                카테고리 별 작업을 추가하고 완료 등의 상태를 관리할 수 있습니다.
              </p>
            </Col>
          </Row>
          <Row>
            <Col xs={8} md={6}>
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
                  setTeamCode(0);
                }}
              />
              <div className="space-for-list">
                {todos
                  .filter((todo) => todo.team_code === 0)
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
            <Col xs={8} md={6}>
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
                  setTeamCode(1);
                }}
              />
              <div className="space-for-list">
                {todos
                  .filter((todo) => todo.team_code === 1)
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
          </Row>
          <Col xs={8} md={6}>
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
                setTeamCode(2);
              }}
            />
            <div className="space-for-list">
              {todos
                .filter((todo) => todo.team_code === 2)
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

          <div style={{ flex: 1, backgroundColor: "#fff" }}></div>
        </Container>
      )}
      {!Pormation_2 && (
        <Container className="mt-4">
          <Row>
            <Col>
              <h3>투두리스트</h3>
              <p>
                {" "}
                카테고리 별 작업을 추가하고 완료 등의 상태를 관리할 수 있습니다.
              </p>
            </Col>
          </Row>
          <Row>
            <Col xs={9} md={8}>
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
                  setTeamCode(0);
                }}
              />
              <div className="space-for-list">
                {todos
                  .filter((todo) => todo.team_code === 0)
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
          </Row>
          <Row>
            <Col xs={9} md={8}>
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
                  setTeamCode(1);
                }}
              />
              <div className="space-for-list">
                {todos
                  .filter((todo) => todo.team_code === 1)
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
          </Row>
          <Col xs={9} md={8}>
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
                setTeamCode(2);
              }}
            />
            <div className="space-for-list">
              {todos
                .filter((todo) => todo.team_code === 2)
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

          <div style={{ flex: 1, backgroundColor: "#fff" }}></div>
        </Container>
      )}
    </div>
  );
};
export default Page;
