import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FaThList,
  FaTasks,
  FaCalendarAlt,
  FaGoogleDrive,
  FaUser,
  FaBell,
} from "react-icons/fa";
import { User } from "../types";
import "../styles/Profile.css";

function Page() {
  const [user, setUser] = useState<User>({
    id: "",
    name: "아무개",
    team: "임시",
    message: "최대 글자수 20개",
    number: 0,
    image:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
  });
  // Fetch User Information from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<User>(
          "http://210.96.102.143:8080/api/v1/users/1",
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        setUser(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <Container className="content-wrapper">
      <Row>
        <Col>
          {/* Profile Information */}
          <div className="profile-view">
            <img className="profile-image"
              src={user.image}
              alt="profile-image"  
            />
            <div>
              <p className="profile-text">{user.number} 기</p>
              <p className="profile-text">{user.team} 팀 {user.name}</p>
              <p className="message-text">" {user.message} "</p>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div>
            <Button className="setting-button">
              <Link to="/attendance" className="link-text">출석확인</Link>
            </Button>
            <Button className="setting-button">
              <Link to="/memberlist" className="link-text">부원목록</Link>
            </Button>
            <p>다른 기능은 모바일에서만 지원됩니다.</p>
            <p>모바일에서 확인해주세요 🥰</p>
          </div>
        </Col>

      </Row>
    </Container>
  );
}

export default Page;
