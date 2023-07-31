import React, { useState } from "react";
import "../styles/Calendar.css";
import "../styles/Todo.css";
import { Event } from "../types";

interface ModalProps {
  showModal: boolean;
  handleCloseModal: () => void;
  onAddEvent: (event: Event) => void;
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
      id: 1, // 이벤트 ID 등을 여기에 지정해주어야 합니다.
      title: "이벤트 제목",
      date: "2023-07-28",
      startTime: "14:00",
      endTime: "16:00",
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

export { AddEvent };
