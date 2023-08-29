import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { fetchData } from "../utils/APIs";
import { User } from "../types";
import "../styles/Profile.css";
/**
 * @todo sesison에 저장된 유저 정보 매핑 -> 그럼 API 호출 안해도 됨
 * @todo 프로필 메시지 등 유저정보 수정 기능 웹에서도 구현할건지 ->  
 * 
 */
const Page = () => {
  const navigate = useNavigate(); // useNavigate 훅 사용
  const user_id = JSON.parse(sessionStorage.getItem("user-info") || "{}").id; //사용자 정보 가져올 때 참조
  const [user, setUser] = useState<User>();
  // Fetch User Information from API 할건지 sessionStorage에 저장된 값 쓸건지 결정 필요
  useEffect(() => {
    const fetchUserData = async () => {
      const response = await fetchData(`api/v1/users/${user_id}`); //확인 필요
      //console.log(response); //API 변수 달라져서 프로필 못 불러옴 키 수정 필요
      setUser(response);
    };
    fetchUserData();
  }, []);

  return (
    <Container className="content-wrapper">
      <Row>
        <Col>
          {/* Profile Information */}
          {user && (
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
          )
          }
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
