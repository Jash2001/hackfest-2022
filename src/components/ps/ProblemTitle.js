import React, { Component } from "react";
import NavBar from "../navbar";
// import Button_grid from "./modal";
import Button_grid from "./modal";
import "./ProblemTitle.css";

function ProblemsTitle() {
  const ps = [
    { psname: "Pattern recognition", ps: 1 },
    { psname: "Traffic System", ps: 2 },
    { psname: "Face detection", ps: 3 },
    { psname: "Web Development", ps: 4 },
    { psname: "Health in Rural Areas", ps: 5 },
    { psname: "M.L. in Food Waste Management", ps: 6 },
    { psname: "Event Management App", ps: 7 },
    { psname: "Income Tax Calculation portal", ps: 8 },
    { psname: "Gate pass System using QR code", ps: 9 },
    { psname: "Ai based attendance App", ps: 10 },
    { psname: "Hostel Management System", ps: 11 },
    {
      psname: "First Come First Serve based choice based choosing subject",
      ps: 12,
    },
    { psname: "Plumber , Electrical online booking System", ps: 13 },
    { psname: "AR based app for material explanation in 3D view", ps: 14 },
    { psname: "Digital app for coin", ps: 15 },
  ];
  return (
    <>
      <NavBar />
      <div className="ViewExpenses">
        <div className="title_expenses">Problem Statements</div>
        <div className="Viewps">
          {ps.map((data) => (
            <div className="card">
              <div className="status">
                <h5>{data.psname}</h5>
              </div>
              <Button_grid />
            </div>
          ))}
          ;
        </div>
      </div>
    </>
  );
}

export default ProblemsTitle;
