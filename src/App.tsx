import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Card,
  Button,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/BottomNav.css";
import "./App.css";
import Navigation from "./components/Navigation";

function App() {
  return (
    <Router>
      <div className="page-wrapper">
        <Container className="py-4">
          <Row className="mb-3">
            <Col xs={12} md={6}>
              <Calendar />
            </Col>
            <Col xs={12} md={6}>
              <TaskList />
            </Col>
          </Row>
          <Row>
            <Col xs={12} className="text-center">
              <Button variant="primary">Add Task</Button>
            </Col>
          </Row>
        </Container>

       <Navigation />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/settings" Component={Settings} />
          <Route path="/profile" Component={Profile} />
        </Routes>
      </div>
    </Router>
  );
}
function Home() {
  return (
    <div>
      <h2>Home Screen</h2>
    </div>
  );
}

function Settings() {
  return (
    <div>
      <h2>Settings Screen</h2>
    </div>
  );
}

function Profile() {
  return (
    <div>
      <h2>Profile Screen</h2>
    </div>
  );
}

function Calendar() {
  return (
    <Card className="mt-3">
      <Card.Header as="h5">Calendar</Card.Header>
      <Card.Body>
        {/* Your Calendar Component */}
        {/* Replace this with your actual calendar */}
      </Card.Body>
    </Card>
  );
}

function TaskList() {
  return (
    <Card className="mt-3">
      <Card.Header as="h5">Task List</Card.Header>
      <Card.Body>
        {/* Your Task List Component */}
        {/* Replace this with your actual task list */}
      </Card.Body>
    </Card>
  );
}

export default App;
