import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import ProblemsTitle from "./components/ps/ProblemTitle";
import MydModalWithGrid from "./components/ps/modal";
import App from "./App";
import Poster from './components/poster';
import Register from './components/register';

ReactDOM.render(
  <React.StrictMode>
    <Poster />
    <ProblemsTitle />
    <Register />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
