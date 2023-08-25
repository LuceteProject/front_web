import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
  useLocation,
} from "react-router-dom";
import { isTokenValid } from "./utils/APIs";
import { User } from "./types";
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
import MemberListPage from "./pages/settings/MemberList";
import AttendanceListPage from "./pages/settings/AttendanceList";

import { Button } from "react-bootstrap";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  //const [isLoggedIn, setIsLoggedIn] = useState(true);
  // 로그인 후 페이지 보고 싶으면 isLoggedIn 변수 true로 변경
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    const token = new URLSearchParams(window.location.search).get("code"); //URL에서 code로 받아온 토큰
    if (token) {
      sessionStorage.setItem("URLtoken", token); //need to delete
      setIsLoggedIn(true);
    }
  }, [])

  // 컴포넌트가 마운트될 때 토큰 확인하여 isLoggedIn 상태 변경
  /* useEffect(() => {
    //const savedToken = localStorage.getItem("URLtoken"); //localStorage에 저장되어 있던 토큰
    const savedToken = sessionStorage.getItem("URLtoken"); //localStorage에 저장되어 있던 토큰
    const token = new URLSearchParams(window.location.search).get("code"); //URL에서 code로 받아온 토큰
    //if (savedToken) localStorage.removeItem("URLtoken"); //need to delete
    //if (savedToken) sessionStorage.removeItem("URLtoken"); //need to delete
    if (savedToken) {
      isTokenValid(savedToken).then((valid) => {
        if (valid) {
          //token이 유효할 경우 로그인 유효
          //user정보 가져오기 -> setUser
          setIsLoggedIn(true);
        }
        else {
          setIsLoggedIn(false);
          window.alert("로그인이 만료되었습니다. 다시 로그인해주세요.");
        }
      })
    }
    else if (token) {
      isTokenValid(token).then((valid) => {
        if (valid) {
          //token이 유효할 경우 로그인 유효
          //user정보 가져오기 -> setUser
          setIsLoggedIn(true);
        }
        else {
          //localStorage.removeItem("URLtoken");
          //setIsLoggedIn(false);
          //window.alert("로그인이 만료되었습니다. 다시 로그인해주세요.");
          //localStorage.setItem("URLtoken", token); //need to delete
          sessionStorage.setItem("URLtoken", token); //need to delete
          setIsLoggedIn(true); //need to delete
          
        }
      })
    }
    else {
      setIsLoggedIn(false);
    }
  }, []); */

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
              <Route path="/profile/memberlist" Component={MemberListPage} />
              <Route
                path="/profile/attendance"
                Component={AttendanceListPage}
              />
              <Route path="/board/postId?:postId" Component={BoardPost} />

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
              <Button
                className="custom-button"
                onClick={() => {
                  //localStorage.removeItem("URLtoken");
                  sessionStorage.removeItem("URLtoken");
                  console.log("로그아웃");
                }}
              >
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
            </div>
          </div>
        )}
      </>
    );
  }
}
// http://54.237.121.196:8080/oauth2/authorization/naver
const redirectToExternalURL = () => {
  //console.log(process.env.REACT_APP_API_IP)
  window.location.href =
    process.env.REACT_APP_API_IP + "oauth2/authorization/naver";
  return null;
};
export default App;
