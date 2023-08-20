import { useState } from "react";
import "../styles/Board.css";
import { Post, Reply } from "../types";

const PostListItem = (props: any) => {
  if (!props.posts) {
    return null; // props.posts 값이 없을 경우 렌더링하지 않음
  }

  return props.posts.map((post: Post) => (
    // 레이아웃 변경 필요
    <div
      key={post.id}
      onClick={() => props.onClick(post.id)} // 클릭 이벤트 핸들러 호출
      style={{ borderBottom: "1px solid #ccc", padding: "10px 0" }}
    >
      <h5>{post.title}</h5>
      <div style={{ display: "flow" }}>
        <p>{post.author_name}</p>
        {post.updated}
        <span style={{ float: "right" }}>댓글</span>
      </div>
    </div>
  ));
};

const ReplyItem = ({ reply }: { reply: Reply }) => {
  if (!reply) {
    return null; // reply 값이 없을 경우 렌더링하지 않음
  }
  // 댓글 목록
  return (
    <>
      <div className="reply-item">
        <div className="reply-metadata">
          <span className="reply-author">{reply.user_id}</span>
          <span className="reply-timestamp">{reply.created}</span>
        </div>
        <p className="reply-content">{reply.content}</p>
      </div>
    </>
  );
};

const ReplyInput = ({
  onAddReply,
}: {
  onAddReply: (content: string) => void;
}) => {
  const [replyContent, setReplyContent] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReplyContent(e.target.value);
  };

  const handleSubmit = () => {
    onAddReply(replyContent);
    setReplyContent("");
  };

  return (
    <div className="reply-input">
      <input
        type="text"
        value={replyContent}
        onChange={handleChange}
        placeholder="댓글을 입력하세요"
      />
      <button className="custom-button" onClick={handleSubmit}>
        작성
      </button>
    </div>
  );
};

export { PostListItem, ReplyItem, ReplyInput };
