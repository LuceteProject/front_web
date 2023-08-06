import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "../styles/BottomNav.css";

import {
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Card,
  Button,
  Offcanvas,
} from "react-bootstrap";
import {
  FaThList,
  FaTasks,
  FaCalendarAlt,
  FaGoogleDrive,
  FaUser,
  FaBell,
} from "react-icons/fa";

function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Navbar bg="light" expand="lg" className="px-10 header-content" style={{ justifyContent: "space-between" }}>
        <Navbar.Brand href="/">루케테 LUCETE</Navbar.Brand>
        <FaBell
          style={{
            color: "#6554A2",
          }}
          size={30}
          onClick={handleShow}
        />
      </Navbar>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>알림함</Offcanvas.Title>
          <Offcanvas.Header>클릭 시 해당 일정으로 이동(안)함다.</Offcanvas.Header>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div style={{marginBottom: 50}}>
            <p>[공지] 오늘 날씨 맑음 건에 대하여...</p>
            <p style={{fontSize:15, float:'right'}}>회장 </p>
          </div>
          <div style={{marginBottom: 50}}>
            <p>[일정] 23-10-21 정하생일</p>
            <p style={{fontSize:15, float:'right'}}>정하 </p>
          </div>

        </Offcanvas.Body>
      </Offcanvas>
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
            <Nav.Item className="bottom-tab-item">
              <Nav.Link as={Link} to="/board" eventKey="board">
                <FaThList className="custom-icon" />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="bottom-tab-item">
              <Nav.Link as={Link} to="/todolist" eventKey="todolist">
                <FaTasks className="custom-icon" />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="bottom-tab-item">
              <Nav.Link as={Link} to="/calendar" eventKey="calendar">
                <FaCalendarAlt className="custom-icon" />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="bottom-tab-item">
              <Nav.Link as={Link} to="/drive" eventKey="drive">
                <FaGoogleDrive className="custom-icon" />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="bottom-tab-item">
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
