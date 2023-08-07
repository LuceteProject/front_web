import React from "react";
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

function App() {
  return (
    <Router>
      <Header />
      <div className="page-wrapper">
        <Footer />
        <Routes>
          <Route path="/" Component={redirectToExternalURL} />
          <Route path="/board" Component={Board} />
          <Route path="/todolist" Component={Todolist} />
          <Route path="/calendar" Component={Calendar} />
          <Route path="/drive" Component={Drive} />
          <Route path="/profile" Component={Profile} />

          <Route path="/board/:postId" Component={BoardPost} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

// http://54.237.121.196:8080/oauth2/authorization/naver
const redirectToExternalURL = () => {
  window.location.href = "http://54.237.121.196:8080/oauth2/authorization/naver";
  return null;
};
function Home() {
  return (
    <div>
      <h2>Home Screen</h2>
    </div>
  );
}

export default App;
