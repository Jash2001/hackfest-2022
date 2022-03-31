import React, { Component } from "react";
import NavBar from "../navbar";
import Button_grid from "./modal";
import "./ProblemTitle.css";

function ProblemsTitle() {
  const ps = [
    {
      statement1:
        " Thermal cameras exist to track warm blooded species. However, in ocean most of the species are cold blooded. There exist a threat the people who swim in sea, near the coast, getting attacked bysharks and saltwater crocodiles. Develop pattern recognition technique to identify the marine species using high resolution camera and alert the swimmers when such sea animals approach the coast. Develop pattern recognition technique to identify the marine species using high resolution camera and alert the swimmers when such sea animals approach the coast. To identify Pattern recognition algorithm to identify marine animals.",
      ps: 1,
    },
    {
      statement2:
        " Background: Department of Empowerment of Persons with Disabilities (DEPwD) under Ministry of Social Justice and Empowerment, Govt. Of India has already initiated a 24*7 Mental health Rehabilitation Helpline (KIRAN) for addressing the mental health issues within the population. It is now needed that an app (KIRAN app) is formulated to improve the accessibility of this services specially to adolescents across the country. Not only will this help in self registration but also in providing services to clients from the comfort of their home even if they are not ready to talk about it.Summary: screening the possible mental health issues in  adolescents and PwDs. Objective: a) It will allow self registration screening of possible mental health issues b) Initiate a secured chat in their own language with professional at any convenient time c) Provide real time database, location, statistics and follow-up  services & utilization of local resources. d) Provide an option for  call back at a convenient time slot chosen by the applicant",
    },
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
