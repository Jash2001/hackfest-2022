import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import ProblemsTitle from "./components/ps/ProblemTitle";
// import Poster from "./components/ps/poster.png";
import { Routes, Route, Router } from "react-dom";

function App() {
  return (
    <>
      {/* <Poster /> */}
      <Router>
        <Routes>
          <Route path="/ProblemsTitle" exact element={<ProblemsTitle />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
