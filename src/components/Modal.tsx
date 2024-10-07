import React, { useState, useRef, Children } from "react";
import "../styles/Calendar.css";
import "../styles/Todo.css";
import "../styles/Board.css";
import { Event, Board } from "../types";
import { text } from "stream/consumers";

interface ModalProps {
  showModal: boolean;
  handleCloseModal: () => void;
  onAddEvent: (event: Event) => void;
  onAddBoard: (event: Board) => void;
}
const AddEvent = ({ showModal, handleCloseModal, onAddEvent }: ModalProps) => {
  const [selectedStartDate, setSelectedStartDate] = useState<string>('');
  const [selectedEndDate, setSelectedEndDate] = useState<string>('');
  const [selectedStartTime, setSelectedStartTime] = useState<string>("");
  const [selectedEndTime, setSelectedEndTime] = useState<string>("");
  const [selectedGroup, setSelectedGroup] = useState<string>("");

  const handleStartDateChange = (date: any) => {
    setSelectedStartDate(date);
  };

  const handleEndDateChange = (date: any) => {
    setSelectedEndDate(date);
  };

  const handleStartTimeChange = (event: any) => {
    setSelectedStartTime(event.target.value);
  };

  const handleEndTimeChange = (event: any) => {
    setSelectedEndTime(event.target.value);
  };

  const handleGroupChange = (event: any) => {
    setSelectedGroup(event.target.value);
  };

  const handleAddEventClick = () => {
    onAddEvent({
      id: 18,
      title: "이벤트 제목",
      content: "2023-07-28",
      start: "14:00",
      end: "16:00",
      user_id: 1, //수정 필요
      team_code: 0 //수정 필요
    });
  };
  return (
    <>
      <div className="modal" style={{ display: showModal ? "flex" : "none" }}>
        <div className="modal-content">
          <form onSubmit={handleAddEventClick}>
            {/* 폼 요소들은 여기에 추가합니다. */}
            <input type="text" placeholder="이벤트 제목" required />
            <input
              type="date"
              value={selectedEndDate}
              onChange={handleEndDateChange}
            />
            <input
              type="time"
              value={selectedStartTime}
              onChange={handleStartTimeChange}
              placeholder="시작 시간"
              required
            />
            <input
              type="time"
              value={selectedEndTime}
              onChange={handleEndTimeChange}
              placeholder="종료 시간"
              required
            />
            <select value={selectedGroup} onChange={handleGroupChange} required>
              <option value="">일정 그룹 선택</option>
              <option value="group1">그룹 1</option>
              <option value="group2">그룹 2</option>
              <option value="group3">그룹 3</option>
            </select>
          </form>
          <button onClick={handleAddEventClick}>추가</button>
          <button onClick={handleCloseModal}>닫기</button>
        </div>
      </div>
    </>
  );
};


const AddBoard = ({ showModal, handleCloseModal, onAddBoard }: ModalProps) => {
  const [selectedGroup, setSelectedGroup] = useState<string>("");

  const handleGroupChange = (event: any) => {
    setSelectedGroup(event.target.value);
  };
  
  const handleAddBoardClick = () => {
    onAddBoard({
      id: 18,
      title: "게시판 제목",
      content: "본문",
      start: "14:00",
      user_id: 1, //수정 필요
      team_code: 0 //수정 필요
    });
  };

return (
  <>
    <div className="modal" style={{ display: showModal ? "flex" : "none" }}>
      <div className="modal-content">
        <form onSubmit={handleAddBoardClick}>
          <input type="text" placeholder="게시판 제목" required></input>
          <textarea className="modal-boarderwrite" placeholder="본문" required style={{height: 300, resize: "none"}}/>
          <select value={selectedGroup} onChange={handleGroupChange} required>
            <option value="">일정 그룹 선택</option>
            <option value="group1">자유 게시판</option>
            <option value="group2">익명 게시판</option>
            <option value="group3">임원진 게시판</option>
          </select>
        </form>
        <button onClick={handleAddBoardClick}>작성</button>
        <button onClick={handleCloseModal}>닫기</button>
      </div>
    </div>
    
  </>
);
};
/**/
export { AddEvent, AddBoard };