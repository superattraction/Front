import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import AdminPage from "./pages/Admin/AdminPage"
import AdminSignin from "./pages/Admin/AdminSignin"
import MyPage from "./pages/MyPage/MyPage"
import Account from "./pages/JobPositionAccount"
import WelcomeSignup from "./pages/WelcomeSignup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main/>}>
        </Route>
        <Route path="/signin" element={<Signin/>}>
        </Route>
        <Route path="/signup" element={<Signup/>}>
        </Route>
        <Route path="/adminsignin" element={<AdminSignin/>}>
        </Route>
        <Route path="/admin" element={<AdminPage/>}>
        </Route>
        <Route path="/mypage" element={<MyPage/>}>
        </Route>
        <Route path="/mypage/account" element={<Account/>}>
        </Route>
        <Route path="/signup/welcome" element={<WelcomeSignup/>}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
