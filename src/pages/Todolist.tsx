import React, { useState } from "react";

import "../styles/Todo.css"; // Board.css 파일에서 추가적인 스타일을 정의합니다.

import { Container, Form } from "react-bootstrap";

interface TodoItem {
  id: number;
  text: string;
  completed: boolean;
  type: string;
}

function Page() {
  return (
    <Container className="mt-4">
      <p> To do page</p>
      <div className="check-circle" />

      <Form>
        <Form.Group className="mb-3" controlId="formAll">
          <Form.Label>전체</Form.Label>
          <Form.Control type="text" placeholder="항목을 입력하세요." />
          <div className="check-circle" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formTeam">
          <Form.Label>팀</Form.Label>
          <Form.Control type="text" placeholder="항목을 입력하세요." />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formIndividual">
          <Form.Label>개인</Form.Label>
          <Form.Control type="text" placeholder="항목을 입력하세요." />
        </Form.Group>
      </Form>
    </Container>
  );
}
export default Page;
