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
import "../styles/BottomNav.css";
import {
  FaHome,
  FaCog,
  FaUser,
  FaInfoCircle,
  FaEnvelope,
} from "react-icons/fa";
function CollapsibleExample() {
  return (
    <Container fluid className="bottom-tab-nav">
      <Row className="bottom-tab-row">
        <Col sm={2} md={3} />
        <Col sm={8} md={6}>
          <Nav fill>
            <Nav.Item>
              <Nav.Link as={Link} to="/" eventKey="home">
                <FaHome className="custom-icon" />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/settings" eventKey="settings">
                <FaCog className="custom-icon" />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/profile" eventKey="profile">
                <FaUser className="custom-icon" />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/about" eventKey="about">
                <FaInfoCircle className="custom-icon" />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/contact" eventKey="contact">
                <FaEnvelope className="custom-icon" />
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={2} md={3} />
      </Row>
    </Container>
  );
}

export default CollapsibleExample;
