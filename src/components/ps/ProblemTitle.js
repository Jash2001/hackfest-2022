import React, { Component } from "react";
import { Button, Modal, Row, Col, Container } from "react-bootstrap";
import Button_grid from "./modal";
import "./ProblemTitle.css";
import Food from "./food.jpg";

function ProblemsTitle() {
  const ps = [
    {
      psname: "Track warm blooded species using thermal camera",
      ps: 1,
      img_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIVYejAymaNutw5uU0etT99GFYFvLCWv9lLA&usqp=CAU",
    },
    { psname: "Mental Rehabilitation App", ps: 2, img_url: Food },
    { psname: " Automated Driving with traffic lights", ps: 3, img_url: Food },
    { psname: "Face detection to identify temperature", ps: 4, img_url: Food },
    {
      psname: "AI based indentification with CCTV feeds",
      ps: 5,
      img_url: Food,
    },
    { psname: "Farming system ", ps: 6, img_url: Food },

    { psname: "Income Tax Calculation portal", ps: 7, img_url: Food },
    { psname: "Gate pass System using QR code", ps: 8, img_url: Food },
    { psname: "Ai based attendance App", ps: 9, img_url: Food },
    {
      psname: "Hostel Management System",
      ps: 10,
      img_url:
        "https://media.istockphoto.com/vectors/attendance-concept-businessman-holding-document-vector-flat-design-vector-id1167651240?k=20&m=1167651240&s=612x612&w=0&h=3jN8v2aA_7xIuPUiPZM0V-JLacPowcb32wCfq1ckJmg=",
    },
    {
      psname: "FCFS based choice based choosing subject",
      ps: 11,
      img_url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIVYejAymaNutw5uU0etT99GFYFvLCWv9lLA&usqp=CAU",
    },
    {
      psname: "Plumber , Electrical online booking System",
      ps: 12,
      img_url: Food,
    },
    {
      psname: "AR based app for material explanation in 3D view",
      ps: 13,
      img_url: Food,
    },
    { psname: "Digital app for coin", ps: 14, img_url: Food },
    { psname: "Event Management App", ps: 15, img_url: Food },
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
