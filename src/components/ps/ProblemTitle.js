import React, { Component } from "react";
import { Button, Modal, Row, Col, Container } from "react-bootstrap";
// import Button_grid from "./modal";
import Button_grid from "./modal";
import "./ProblemTitle.css";

function ProblemsTitle() {
  const ps = [
    { psname: "Pattern Recognition", ps: 1 },
    { psname: "App for persons with health issues", ps: 2 },
    { psname: "To identify traffic light positions", ps: 3 },
    { psname: "Face detection to identify temperature", ps: 4 },
    { psname: "monitor and analyse cargo traffic ", ps: 5 },
    { psname: "medical support in remote hill areas", ps: 6 },
    { psname: "Tracking of waste", ps: 7 },
    { psname: "Income Tax Calculation portal", ps: 8 },
    { psname: "Gate pass System using QR code", ps: 9 },
    { psname: "Ai based attendance App", ps: 10 },
    { psname: "Hostel Management System", ps: 11 },
    {
      psname: "FCFS based choice based choosing subject",
      ps: 12,
    },
    { psname: "Handyman online booking System", ps: 13 },
    { psname: "Material explanation in 3D view", ps: 14 },
    { psname: "Digital app for coin", ps: 15 },
  ];

  return (
    <>
      <div className="ViewExpenses">
        <div className="title_expenses">Problem Statements</div>
        <div className="Viewps">
          {ps.map((data) => (
            <div className="card">
              <div className="status">
                <h5>{data.psname}</h5>
              </div>

              <Button_grid id={data.ps}></Button_grid>

       
            </div>
          ))}
          ;
        </div>
      </div>
    </>
  );
}

export default ProblemsTitle;
