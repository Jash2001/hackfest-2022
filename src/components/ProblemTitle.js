import React, { Component } from "react";
import NavBar from "./navbar";
// import Button_grid from "./modal";
import "./ProblemTitle.css";

function ProblemsTitle() {
  const ps = [
    { psname: "Pattern recognition" },
    { psname: "Traffic System" },
    { psname: "Face detection" },
    { psname: "Web Development" },
    { psname: "Health in Rural Areas" },
    { psname: "M.L. in Food Waste Management" },
    { psname: "Event Management App" },
    { psname: "Income Tax Calculation portal" },
    { psname: "Gate pass System using QR code" },
    { psname: "Ai based attendance App" },
    { psname: "Hostel Management System" },
    { psname: "First Come First Serve based choice based choosing subject" },
    { psname: "Plumber , Electrical online booking System" },
    { psname: "AR based app for material explanation in 3D view" },
    { psname: "Digital app for coin" },
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
              {/* <Button_grid /> */}
            </div>
          ))}
          ;
        </div>
      </div>
    </>
  );
}

export default ProblemsTitle;
