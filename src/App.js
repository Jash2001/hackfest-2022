import "./App.css";
import React, { Component } from "react";
import ProblemsTitle from "./components/ps/ProblemTitle";
import { Routes, Route, Router } from "react-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/ProblemsTitle" exact element={<ProblemsTitle />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
