import React, { useState } from "react";
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
import {
  FaThList,
  FaTasks,
  FaCalendarAlt,
  FaGoogleDrive,
  FaUser,
} from "react-icons/fa";

function Header() {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };
  return (
    <div>
      <Navbar bg="light" expand="lg" className="px-10 header-content">
        <Navbar.Brand href="/">My App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle}/>
        <Navbar.Collapse id="basic-navbar-nav" in={expanded} >
          <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/board">Board</Nav.Link>
            <Nav.Link href="/todolist">Todolist</Nav.Link>
            <Nav.Link href="/calendar">Calendar</Nav.Link>
            <Nav.Link href="/drive">Drive</Nav.Link>
            <Nav.Link href="/profile">Profile</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
function Footer() {
  return (
    <Container fluid className="bottom-tab-nav">
      <Row className="bottom-tab-row">
        <Col sm={2} md={3} />
        <Col sm={8} md={6}>
          <Nav fill>
            <Nav.Item className="tab-item">
              <Nav.Link as={Link} to="/board" eventKey="board">
                <FaThList className="custom-icon" />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="tab-item">
              <Nav.Link as={Link} to="/todolist" eventKey="todolist">
                <FaTasks className="custom-icon" />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="tab-item">
              <Nav.Link as={Link} to="/calendar" eventKey="calendar">
                <FaCalendarAlt className="custom-icon" />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="tab-item">
              <Nav.Link as={Link} to="/drive" eventKey="drive">
                <FaGoogleDrive className="custom-icon" />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="tab-item">
              <Nav.Link as={Link} to="/profile" eventKey="profiles">
                <FaUser className="custom-icon" />
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={2} md={3} />
      </Row>
    </Container>
  );
}

export { Header, Footer };
