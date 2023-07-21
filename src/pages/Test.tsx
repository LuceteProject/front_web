import React from "react";
import {  Navbar,  Nav,  Container,  Row,  Col,  Card,  Button,} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/BottomNav.css";
import {
  FaHome,
  FaCog,
  FaUser,
  FaInfoCircle,
  FaEnvelope,
} from "react-icons/fa";
function Page() {
  return (
    <>
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
    </>
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
  
export default Page;
