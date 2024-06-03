import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import First_Page from "./components/simple_centered_on_dark";
import List from "./components/simple_native";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<First_Page />} />
      </Routes>
      <Routes>
        <Route path="/" element={<List />} />
      </Routes>
    </Router>
  );
}

export default App;
