import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Button, Nav, Tab } from "react-bootstrap";
import { FaPen } from "react-icons/fa";
import { PostItem } from "../components/Posts";
import "../styles/Board.css";
import { Post } from "../types";

const dummyData: Post[] = [
  {
    id: 1,
    title: "게시글 제목1",
    author_name: "작성자1",
    updated: "2023-07-21 12:30",
    content: "게시글 내용1",
    permission: 3,
  },
  {
    id: 2,
    title: "게시글 제목2",
    author_name: "작성자2",
    updated: "2023-07-21 14:45",
    content: "게시글 내용2",
    permission: 5,
  },
  // 더미데이터 추가
];

function Page() {
  const navigate = useNavigate(); // useNavigate 훅 사용
  // 게시판 목록 상태
  const [posts, setPosts] = useState<Post[]>([]);

  // 더미데이터를 받아오는 API 호출 시뮬레이션
  useEffect(() => {
    setPosts(dummyData);
  }, []);
  // 게시글 클릭 이벤트 핸들러
  const handlePostItemClick = (postId: number) => {
    // 해당 게시글 페이지로 이동
    console.log('pressed');
    navigate(`/posts/${postId}`);
  };
  return (
    <div style={{ padding: "20px" }}>
      {/* 게시판 탭 */}
      <Tab.Container defaultActiveKey="first">
        <Row style={{ flexWrap: "nowrap" }}>
          <Col>
            <Nav
              variant="pills"
              className="flex-row"
              style={{ flexWrap: "nowrap" }}
            >
              <Nav.Item>
                <Nav.Link eventKey="first" className="custom-tab-link">
                  자유게시판
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second" className="custom-tab-link">
                  익명게시판
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third" className="custom-tab-link" disabled>
                  임원진게시판
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col>
            <Button
              className="custom-button"
              style={{
                position: "fixed",
                right: "20%",
                bottom: "30%",
                border: 1,
              }}
            >
              글쓰기
            </Button>
          </Col>
        </Row>
        <div style={{ height: 10 }} />
        <Row>
          <Col>
            {/* 게시글 목록 */}
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <PostItem posts={posts} onClick={handlePostItemClick} />
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <PostItem posts={posts} onClick={handlePostItemClick} />
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <PostItem posts={posts} onClick={handlePostItemClick} />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>

      {/* 글쓰기 버튼 */}
      <FaPen
        style={{
          color: "#9978C1",
          position: "fixed",
          right: "20%",
          bottom: "20%",
          border: 1,
        }}
        size={50}
        onClick={() => {
          console.log("pressed");
        }}
      />
    </div>
  );
}

export default Page;
