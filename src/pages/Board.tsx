import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Button, Nav, Tab } from "react-bootstrap";
import { PostListItem } from "../components/Posts";
import "../styles/Board.css";
import { Post } from "../types";

const dummyData: Post[] = [
  {
    id: 1,
    header: 0,
    title: "게시글 제목1",
    author_id:10211,
    author_name: "작성자1",
    updated: "2023-07-21 12:30",
    content: "게시글 내용1",
    permission: 3,
    is_notice: false,
    board_id: 0,
  },
  {
    id: 2,
    header: 0,
    title: "게시글 제목2",
    author_id:10211,
    author_name: "작성자2",
    updated: "2023-07-21 14:45",
    content: "게시글 내용2",
    permission: 5,
    is_notice: false,
    board_id: 0,
  },
  // 더미데이터 추가
];

function Page() {
  const navigate = useNavigate(); // useNavigate 훅 사용
  // 게시판 목록 상태
  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedPost, setSelectedPost] = useState<Post | null>(); // 클릭한 게시물 정보를 상태로 관리

  // 더미데이터를 받아오는 API 호출 시뮬레이션
  useEffect(() => {
    setPosts(dummyData);
  }, []);

  // 게시글 클릭 이벤트 핸들러
  const handlePostItemClick = (postId: number) => {
    const post = dummyData.find((item) => item.id === postId);
    if (post) {
      setSelectedPost(post); // 선택한 게시물 정보를 상태로 설정
    } else {
      console.log(`Post with id ${postId} not found.`);
    }
  };
  useEffect(() => {
    if (selectedPost) {
      navigate(`/posts/${selectedPost.id}`); // 선택한 게시물의 id로 경로 설정
    }
  }, [selectedPost]);
  return (
    <div style={{ paddingTop: "20px" }}>
      {/* 게시판 탭 */}
      <Tab.Container defaultActiveKey="first">
        <Row>
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
        </Row>
        <div style={{ height: 10 }} />
        <Row>
          <Col>
            {/* 게시글 목록 */}
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <PostListItem posts={posts} onClick={handlePostItemClick} />
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <PostListItem posts={posts} onClick={handlePostItemClick} />
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <PostListItem posts={posts} onClick={handlePostItemClick} />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button
              className="custom-button"
              style={{
                position: "sticky",
                float: "right",
                marginTop: "20px",
                border: 1,
              }}
            >
              글쓰기
            </Button>
          </Col>
        </Row>
      </Tab.Container>
      
    </div>
  );
}

export default Page;
