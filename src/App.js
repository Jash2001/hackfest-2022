import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import ProblemsTitle from "./components/ps/ProblemTitle";
import Poster from "./components/poster"
import Navbar from "./components/navbar";
function App() {
  return (
    <>
      <Navbar />
      <Poster />
      <Router>
        <Routes>
          <Route path="/ProblemsTitle" exact element={<ProblemsTitle />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
