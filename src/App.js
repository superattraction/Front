import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";

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
      </Routes>
    </Router>
  );
}

export default App;
