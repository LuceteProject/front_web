import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./index.css";
import { Header, Footer } from "./components/Navigation";

import Board from "./pages/Board";
import Calendar from "./pages/Calendar";
import Drive from "./pages/Drive";
import Profile from "./pages/Profile";
import Todolist from "./pages/Todolist";
import BoardPost from "./pages/BoardPost";
import { Button } from "react-bootstrap";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleNaverLogin = (response: any) => {
    if (response) {
      // 로그인 성공한 경우
      setIsLoggedIn(true);
    }
  };

  return (
    <Router>
      <Header />
      <div className="page-wrapper">
        {isLoggedIn ? (
          <>
            <Footer />
            <Routes>
              {/* URL 형식 : http://localhost:3000/board */}
              <Route path="/" Component={Home} />
              <Route path="/board" Component={Board} />
              <Route path="/todolist" Component={Todolist} />
              <Route path="/calendar" Component={Calendar} />
              <Route path="/drive" Component={Drive} />
              <Route path="/profile" Component={Profile} />

              <Route path="/board/:postId" Component={BoardPost} />

              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </>
        ) : (
          <>
            <Routes>
              <Route path="/" Component={Home} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </>
        )}
      </div>
    </Router>
  );

  function Home() {
    return (
      <>
        {isLoggedIn ? (
          <div className="container">
            <div className="text-center mt-5">
              <h1 style={{ marginBottom: 50 }}>Welcome to Lucete!</h1>
              <p>로그아웃하려면 아래 버튼을 누르세요.</p>
              <Button className="custom-button" onClick={redirectToExternalURL}>
                로그아웃
              </Button>
              <div />
              {/* 
          <Button className="custom-button" disabled={!isLoggedIn}>
            로그아웃
          </Button>
          */}
            </div>
          </div>
        ) : (
          <div className="container">
            <div className="text-center mt-5">
              <h1 style={{ marginBottom: 50 }}>Welcome to Lucete!</h1>
              <p>로그인하려면 아래 버튼을 누르세요.</p>
              <p>네이버 아이디가 필요합니다.</p>
              <Button className="custom-button" onClick={redirectToExternalURL}>
                로그인
              </Button>
              <div />
              {/* 
          <Button className="custom-button" disabled={!isLoggedIn}>
            로그아웃
          </Button>
          */}
            </div>
          </div>
        )}
      </>
    );
  }
}
// http://54.237.121.196:8080/oauth2/authorization/naver
const redirectToExternalURL = () => {
  window.location.href =
    "http://localhost:3000/board";
  return null;
};
export default App;
