import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { fetchData } from "../utils/APIs";
import { useMediaQuery } from "react-responsive";
import Calendar from "react-calendar";
import moment from "moment";

import { EventListItem } from "../components/Events";
import { AddEvent } from "../components/Modal";
import { Event } from "../types";

import "react-calendar/dist/Calendar.css";
import "../styles/Calendar.css";

function Page() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [dates, setDates] = useState([
    "2023-07-22",
    "2023-07-30",
    "2023-07-31", //dummy
  ]);

  const [items, setItems] = useState<Event[]>([]);
  useEffect(() => {
    const fetchItemData = async () => {
      const userId = 1;
      const postData = await fetchData(`api/v1/schedules/userID/${userId}`); //확인 필요
      setItems(postData);
      //console.log(postData);
    };
    fetchItemData();
  }, []);

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
    setShowModal(false);
  };

  const handleDateChange = (
    date: Date,
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setSelectedDate(date);
  };

  const Horizontal: boolean = useMediaQuery({
    query: "(min-width:850px)",
  });

  return (
    <div>
      {Horizontal && (
        <Container className="mt-4">
          <Row>
            <Col>
              <h3>일정 관리 페이지</h3>
              <p> 카테고리 별 일정을 추가하고 확인할 수 있습니다.</p>
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
                  if (
                    dates.find((x) => x === moment(date).format("YYYY-MM-DD"))
                  ) {
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
              <Button className="custom-button" onClick={handleAddEventClick}>
                새 일정 추가
              </Button>
              <p>선택된 날짜: {selectedDate.toDateString()}</p>
            </Col>
            <Col md={6}>
              <div className="custom-contents">
                <p
                  className="cal-category title-text"
                  style={{ backgroundColor: "#8056AA" }}
                >
                  📢 전체{" "}
                </p>
                <EventListItem events={items.filter(item => item.team_code === 123)} />
              </div>
              <div className="custom-contents">
                <p
                  className="cal-category title-text"
                  style={{ backgroundColor: "#9978C1" }}
                >
                  ⚙️ 팀{" "}
                </p>
                <EventListItem events={items.filter(item => item.team_code === 2)} />
              </div>
              <div className="custom-contents">
                <p
                  className="cal-category title-text"
                  style={{ backgroundColor: "#D5ADDF" }}
                >
                  ✏️ 개인{" "}
                </p>
                <EventListItem events={items.filter(item => item.team_code === 3)} />
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
      )}
      {!Horizontal && (
        <Container className="mt-4">
          <Row>
            <Col>
              <h3>일정 관리 페이지</h3>
              <p> 카테고리 별 일정을 추가하고 확인할 수 있습니다.</p>
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
                  if (
                    dates.find((x) => x === moment(date).format("YYYY-MM-DD"))
                  ) {
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
              <Button className="custom-button" onClick={handleAddEventClick}>
                새 일정 추가
              </Button>
              <p>선택된 날짜: {selectedDate.toDateString()}</p>
            </Col>
            <Row>
              <div className="custom-contents">
                <p
                  className="cal-category title-text"
                  style={{ backgroundColor: "#8056AA" }}
                >
                  📢 전체{" "}
                </p>
                <EventListItem events={items.filter(item => item.team_code === 123)} />
              </div>
              <div className="custom-contents">
                <p
                  className="cal-category title-text"
                  style={{ backgroundColor: "#9978C1" }}
                >
                  ⚙️ 팀{" "}
                </p>
                <EventListItem events={items.filter(item => item.team_code === 2)} />
              </div>
              <div className="custom-contents">
                <p
                  className="cal-category title-text"
                  style={{ backgroundColor: "#D5ADDF" }}
                >
                  ✏️ 개인{" "}
                </p>
                <EventListItem events={items.filter(item => item.team_code === 3)} />
              </div>
            </Row>
            {/* 모달 */}
            <AddEvent
              showModal={showModal}
              handleCloseModal={() => setShowModal(false)}
              onAddEvent={handleAddEvent}
            />
          </Row>
        </Container>
      )}
    </div>
  );
}

export default Page;
