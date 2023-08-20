import { useState } from "react";
import "../styles/Board.css";
import { Event } from "../types";

const EventListItem = (props: any) => {
  if (!props.events) {
    return null; // props.posts 값이 없을 경우 렌더링하지 않음
  }

  return props.events.map((event: Event) => (
    // 레이아웃 변경 필요
    <div
      key={event.id}
      //onClick={() => props.onClick(event.id)} // 클릭 이벤트 핸들러 호출
      style={{ borderBottom: "1px solid #ccc", padding: "10px 0" }}
    >
      <h5></h5>
      <p>{event.title} : {event.content}</p>
      <div style={{ display: "flow" }}>
        <p>{event.start}~{event.end}</p>
      </div>
    </div>
  ));
};



export { EventListItem };
