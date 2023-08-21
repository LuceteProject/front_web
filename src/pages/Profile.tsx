import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { fetchData } from "../utils/api";
import { User } from "../types";

import MemberListPage from "./settings/MemberList";
import "../styles/Profile.css";

function Page() {
  const navigate = useNavigate(); // useNavigate 훅 사용
  const [user, setUser] = useState<User>({
    id: "",
    name: "아무개",
    google_id: "user1@gmail.com",
    team: "임시",
    status: true,
    email: "john@example.com",
    phone: "1234567890",
    profile_message: "최대 글자수 20개",
    semester: 12,
    team_code: 123,
    permission: 1,
    image:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
  });
  // Fetch User Information from API
  useEffect(() => {
    const userId = 1;
    const fetchUserData = async () => {
      const postData = await fetchData(`api/v1/users/${userId}`); //확인 필요
      setUser(postData);
    };
    fetchUserData();
  }, []);

  return (
    <Container className="content-wrapper">
      <Row>
        <Col>
          {/* Profile Information */}
          <div className="profile-view">
            <img
              className="profile-image"
              src={user.image}
              alt="profile-image"
            />
            <div>
              <p className="profile-text">{user.semester} 기</p>
              <p className="profile-text">
                {user.team} 팀 {user.name}
              </p>
              <p className="message-text">" {user.profile_message} "</p>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div>
            <Button
              className="setting-button"
              onClick={() => {
                navigate(`/profile/attendance`);
              }}
            >
                출석확인
            </Button>
            <Button
              className="setting-button"
              onClick={() => {
                navigate(`/profile/memberlist`);
              }}
            >
              <Link to="/memberlist" className="link-text">
                부원목록
              </Link>
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
