import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import "../styles/Board.css";
import { Post, Reply } from "../types";
import { ReplyItem, ReplyInput } from "../components/Posts";
import { fetchData } from '../utils/api';

const dummyData: Post = {
  id: 1,
  header: 0,
  title: "게시글 제목1",
  author_id: 10211,
  author_name: "작성자1",
  updated: "2023-07-21 12:30",
  content: "게시글 내용1",
  permission: 3,
  is_notice: false,
  board_id: 0,
};

const Page = () => {
  const { postId } = useParams<{ postId: string }>();
  const [post, setPost] = useState<Post | null>(dummyData);
  const [replies, setReplies] = useState<Reply[]>([]);

  useEffect(() => {
    const fetchPostData = async () => {
      const postData = await fetchData('/api/postData');
      setPost(postData);
    };
    const fetchReplyData = async () => {
      const replyData = await fetchData('/api/replyData');
      setReplies(replyData);
    };
    //아직 404에러 - 게시글이랑 댓글 모두 따로 달아야 하는지?
    //fetchPostData();
    //fetchReplyData();
  }, []);


  const Main = ({ post }: { post: Post }) => {
    const isAuthor = post.author_id === 10211; // 작성자 ID를 여기에 넣어주세요

    return (
      <>
        <p className="board-type">[게시판] {post.board_id}</p>
        <h2 className="post-title">[제목] {post.title}</h2>
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

  function addReply(content: string): void {
    const newReply: Reply = {
      id: replies.length + 1,
      author_name: "댓글 작성자",
      content: content,
      created: new Date().toLocaleString("ko-KR"),
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
