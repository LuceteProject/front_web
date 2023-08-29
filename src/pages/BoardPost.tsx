import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import "../styles/Board.css";
import { Post, Reply } from "../types";
import { ReplyItem, ReplyInput } from "../components/PostItem";
import { fetchData } from "../utils/APIs";

const dummyData: Post = {
  id: 1,
  header: 0,
  title: "게시글 제목1",
  author_id: 10211,
  author_name: "작성자1",
  created: "2023-07-21 12:30",
  updated: "2023-07-21 12:30",
  content: "게시글 내용1",
  permission: 3,
  is_notice: false,
  board_id: 0,
};
/* 서버에서 받아온 board_id값에 따라 게시판 종류 표시*/
const boardIdToName: { [key: number]: string } = {
  1: "자유게시판",
  2: "익명게시판",
  3: "임원진 게시판",
};

const Page = () => {
  const { postId } = useParams<{ postId: string }>();
  const [post, setPost] = useState<Post | null>(dummyData);
  const [replies, setReplies] = useState<Reply[]>([]);

  /* 선택한 게시글 정보 불러오기 - 게시글과 댓글 정보 따로 불러옴 (서버 호출 2번 하든지말든지,, */
  useEffect(() => {
    const fetchPostData = async () => {
      console.log(postId);
      const postData = await fetchData(`api/v1/posts/${postId}`);
      setPost(postData);
    };
    const fetchReplyData = async () => {
      const replyData = await fetchData(
        `api/v1/comments/postID/postId?=${postId}`
      );
      setReplies(replyData);
    };
    fetchPostData();
    fetchReplyData();
  }, []);

  /**
   * Main component to display a post and its details.
   * @param {Post} post - 게시글 내용
   * @returns {JSX.Element} JSX Element 게시글 컴포넌트
   * @todo 수정, 삭제 버튼에 대한 이벤트 함수 연결
   */
  const Main = ({ post }: { post: Post }) => {
    const user_id = JSON.parse(sessionStorage.getItem("user-info") || "{}").id;
    const isAuthor = post.author_id === user_id; // 작성자가 본인인지 확인

    return (
      <>
        <p className="board-type">{boardIdToName[post.board_id]}</p>
        <h2 className="post-title">{post.title}</h2>
        {/* 작성자가 본인인 경우에만 수정, 삭제 버튼 보이도록 처리 */}
        {isAuthor && (
          <div className="edit-buttons">
            <button className="edit-button">수정</button>
            <button className="delete-button">삭제</button>
          </div>
        )}
        <div className="post-info">
          <p className="author">작성자: {post.author_name}</p>
          <p className="timestamp">마지막 수정 시각: {post.updated}</p>
        </div>
        <hr className="divider" />
        <p className="post-content">{post.content}</p>
      </>
    );
  };

  /**
   * 새로운 댓글 추가
   * @param {string} content 댓글 내용
   * @todo API 형식에 맞게 newReply 타입과 데이터 변경 필요
   */
  function addReply(content: string): void {
    const newReply: Reply = {
      id: replies.length + 1,
      content: content,
      created: new Date().toLocaleString("ko-KR"),
      updated: new Date().toLocaleString("Ko-KR"),
      post_id: 1,
      user_id: "댓글 작성자",
      parent: null,
      is_deleted: false,
    };

    setReplies((prevReplies) => [...prevReplies, newReply]);
  }

  /*
    if (!post) {
      return <p> loading... </p>
    }
  */

  return (
    post && (
      <>
        {/* 게시글 내용 출력 */}
        <Main post={post} />
        <hr className="divider" />
        {/* 댓글 목록 출력 */}
        {replies.length > 0 ? (
          <div className="reply-list">
            {replies.map((reply) => (
              <ReplyItem key={reply.id} reply={reply} />
            ))}
          </div>
        ) : (
          <p>댓글이 없습니다.</p>
        )}
        <ReplyInput onAddReply={addReply} />
      </>
    )
  );
};

export default Page;
