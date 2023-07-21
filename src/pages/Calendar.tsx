import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Container, Row, Col, Button } from 'react-bootstrap';

function Page() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange =  (date: Date, event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setSelectedDate(date);
  };
  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <h2>일정 관리 페이지</h2>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={8}>
          <Calendar
            onChange={handleDateChange as any}
            value={selectedDate}
            locale="ko-KR"
            calendarType="gregory"
            //style css 오버라이딩은 node_modules > react-calendar > dist > Calendar.css
          />
        </Col>
        <Col md={4}>
          <h3>선택된 날짜: {selectedDate.toDateString()}</h3>
          {/* 이 곳에 선택된 날짜의 일정 정보를 표시할 컴포넌트 또는 기능을 추가할 수 있습니다 */}
          <Button variant="primary" className="mt-2">새 일정 추가</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Page;
