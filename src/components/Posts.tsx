import "../styles/Board.css";
import { Post } from "../types";

const PostItem = ( props: any) => {
  return props.posts.map((post : Post) => (
    // 레이아웃 변경 필요
    <div
      key={post.id}
      style={{ borderBottom: "1px solid #ccc", padding: "10px 0" }}
    >
      <h5>{post.title}</h5>
      <div style={{ display: "flow" }}>
        <p>
          {post.author_name} / {post.updated}
        </p>

        <span>{post.permission}</span>
        <span style={{ float: "right" }}>댓글</span>
      </div>
    </div>
  ));
};

export { PostItem };
