import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Button, Nav, Tab } from "react-bootstrap";
import { useMediaQuery } from 'react-responsive';
import { fetchData } from '../utils/APIs';
import { PostListItem } from "../components/Posts";
import { Post } from "../types";

import "../styles/Board.css";


const dummyData: Post[] = [
  {
    id: 1,
    header: 0,
    title: "게시글 제목1",
    author_id: 10211,
    author_name: "작성자1",
    updated: "2023-07-21 12:30",
    created: "2023-07-21 12:30",
    content: "게시글 내용1",
    permission: 3,
    is_notice: false,
    board_id: 0,
  },
  {
    id: 2,
    header: 0,
    title: "게시글 제목2",
    author_id: 10211,
    author_name: "작성자2",
    created: "2023-07-21 12:30",
    updated: "2023-07-21 14:45",
    content: "게시글 내용2",
    permission: 5,
    is_notice: false,
    board_id: 0,
  },
  // 더미데이터 추가
];

function Page(): JSX.Element {
  const navigate = useNavigate(); // useNavigate 훅 사용
  // 게시판 목록 상태
  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedPost, setSelectedPost] = useState<Post | null>(); // 클릭한 게시물 정보를 상태로 관리

  useEffect(() => {
    const fetchPostsData = async () => {
      const response = await fetchData('api/v1/posts'); //확인 필요
      setPosts(response.content);
      console.log(response.content);

    };
    fetchPostsData();
  }, []);

  // 게시글 클릭 이벤트 핸들러
  const handlePostItemClick = (postId: number) => {
    const post = posts.find((item) => item.id === postId);
    if (post) {
      setSelectedPost(post); // 선택한 게시물 정보를 상태로 설정
    } else {
      console.log(`Post with id ${postId} not found.`);
    }
  };
  useEffect(() => {
    if (selectedPost) {
      navigate(`/board/${selectedPost.id}`); // 선택한 게시물의 id로 경로 설정
    }
  }, [selectedPost]);

  //반응형 웹
  const isDesktop: boolean = useMediaQuery({
    query: "(min-width:950px)",
  });

  return (
    <div>
      {
        <div style={{ paddingTop: "20px" }}>
          {/* 게시판 탭 */}
          <Tab.Container defaultActiveKey="first">
            <Row>
              <Col>
                <h3 style={{ marginBottom: 40 }}>게시판 페이지</h3>

              </Col>
            </Row>
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
                    <PostListItem posts={posts.filter(post => post.board_id === 1)} onClick={handlePostItemClick} />
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <PostListItem posts={posts.filter(post => post.board_id === 2)} onClick={handlePostItemClick} />
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <PostListItem posts={posts.filter(post => post.board_id === 3)} onClick={handlePostItemClick} />
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

        </div>}

    </div>
  );
}

export default Page;
