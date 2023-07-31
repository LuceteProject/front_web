import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import { Container, Row, Col, Button } from "react-bootstrap";
import moment from "moment";
import "react-calendar/dist/Calendar.css";
import "../styles/Calendar.css";
import "../styles/Todo.css";
import { AddEvent } from "../components/Modal";
import { Event } from "../types";

//function for get Dates from API
function fetchDate() {
  //console.log('fetched');
}

function Page() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [dates, setDates] = useState([
    "2023-07-22",
    "2023-07-30",
    "2023-07-31",
  ]);
  /* 일정 추가 모달 */
  const [showModal, setShowModal] = useState(false);
  const handleAddEventClick = () => {
    console.log("add button pressed");
    setShowModal(true);
  };

  // 일정을 추가하는 함수 (API 호출 등의 로직은 여기에 추가)
  const handleAddEvent = (eventData: Event) => {
    // 여기서 API 호출이나 상태 업데이트 등의 로직을 수행할 수 있습니다.
    console.log("새로운 일정 추가:", eventData);
    // 모달 닫기
    setShowModal(false);
  };

  const handleDateChange = (
    date: Date,
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setSelectedDate(date);
  };

  useEffect(() => {
    fetchDate();
  }, []);

  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <h2>일정 관리 페이지</h2>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={6}>
          <Calendar
            className="custom-calendar"
            onChange={handleDateChange as any}
            formatDay={(locale, date) => moment(date).format("DD")}
            value={selectedDate}
            locale="ko-KR"
            calendarType="gregory"
            //style css 오버라이딩은 node_modules > react-calendar > dist > Calendar.css
            tileContent={({ date, view }) => {
              if (dates.find((x) => x === moment(date).format("YYYY-MM-DD"))) {
                return (
                  <>
                    <div className="flex justify-center items-center absoluteDiv">
                      <div className="dot"></div>
                    </div>
                  </>
                );
              }
            }}
          />

          <p>선택된 날짜: {selectedDate.toDateString()}</p>
        </Col>
        <Col md={6}>
          <div className="custom-contents">
            {/* 전체 */}

            <div
              style={{
                backgroundColor: "#8056AA",
              }}
              className="todo-category"
            >
              <p
                className="title-text"
                style={{ fontSize: 22, color: "#fff", paddingLeft: 20 }}
              >
                전체
              </p>
            </div>
            {/* 팀 */}
            <div
              style={{
                backgroundColor: "#9978C1",
              }}
              className="todo-category"
            >
              <p
                className="title-text"
                style={{ fontSize: 22, color: "#fff", paddingLeft: 20 }}
              >
                팀
              </p>
            </div>
            {/* 개인 */}
            <div
              style={{
                backgroundColor: "#D5ADDF",
              }}
              className="todo-category"
            >
              <p
                className="title-text"
                style={{ fontSize: 22, color: "#fff", paddingLeft: 20 }}
              >
                개인
              </p>
            </div>

            {/* 이 곳에 선택된 날짜의 일정 정보를 표시할 컴포넌트 또는 기능을 추가할 수 있습니다 */}
            <Button className="custom-button" onClick={handleAddEventClick}>
              새 일정 추가
            </Button>
          </div>
        </Col>
        {/* 모달 */}
        <AddEvent
          showModal={showModal}
          handleCloseModal={() => setShowModal(false)}
          onAddEvent={handleAddEvent}
        />
      </Row>
    </Container>
  );
}

export default Page;
