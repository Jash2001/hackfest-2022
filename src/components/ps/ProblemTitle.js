import React, { Component } from "react";
import { Button, Modal, Row, Col, Container } from "react-bootstrap";
import Button_grid from "./modal";
import "./ProblemTitle.css";
import ps1 from "./ps1.jpg";
import ps2 from "./ps2.jpg";
import ps3 from "./ps3.jpg";
import ps4 from "./ps4.jpg";
import ps5 from "./ps5.png";
import ps6 from "./ps6.png";
import ps7 from "./ps7.jpg";
import ps8 from "./ps8.jpg";
import ps9 from "./ps9.jpg";
import ps10 from "./ps10.jpg";
import ps11 from "./ps11.jpg";
import ps12 from "./ps12.webp";
import ps13 from "./ps13.jpg";
import ps14 from "./ps14.jpg";
import ps15 from "./ps15.png";


function ProblemsTitle() {
  const ps = [
    {
      psname: "Track warm blooded species using thermal camera",
      ps: 1,
      img_url:ps1,
    },
    { psname: "Mental Rehabilitation App", ps: 2, img_url: ps2 },
    { psname: " Automated Driving with traffic lights", ps: 3, img_url: ps3 },
    { psname: "Face detection to identify temperature", ps: 4, img_url: ps4 },
    {
      psname: "AI based indentification with CCTV feeds",
      ps: 5,
      img_url: ps5,
    },
    { psname: "Farming system ", ps: 6, img_url: ps6 },

    { psname: "Income Tax Calculation portal", ps: 7, img_url: ps7 },
    { psname: "Gate pass System using QR code", ps: 8, img_url: ps8 },
    { psname: "Ai based attendance App", ps: 9, img_url: ps9 },
    {
      psname: "Hostel Management System",
      ps: 10,
      img_url: ps10,
    },
    {
      psname: "FCFS based choice based choosing subject",
      ps: 11,
      img_url: ps11,
    },
    {
      psname: "Plumber , Electrical online booking System",
      ps: 12,
      img_url: ps12,
    },
    {
      psname: "AR based app for material explanation in 3D view",
      ps: 13,
      img_url: ps13,
    },
    { psname: "Digital app for Collaborative Innovation Center", ps: 14, img_url: ps14 },
    { psname: "Event Management App", ps: 15, img_url: ps15 },
  ];

  return (
    <>
      <div className="ViewExpenses">
        <div className="title_ps">Problem Statements</div>
        <div className="Viewps">
          {ps.map((data) => (
            <div className="card">
              <div className="status">
                <img src={data.img_url} className="img_ps"></img>
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
