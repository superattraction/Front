import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import AdminPage from "./pages/Admin/AdminPage"
import AdminSignin from "./pages/Admin/AdminSignin"

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
      </Routes>
    </Router>
  );
}

export default App;
