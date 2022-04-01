import React, { useState } from "react";
import { Button, Modal, Row, Col, Container } from "react-bootstrap";
import "./modal.css";
import { Link } from "react-router-dom";
// import { Link } from "gatsby";

function MydModalWithGrid(props) {
  const statement = {
    1: " Thermal cameras exist to track warm blooded species. However, in ocean most of the species are cold blooded. There exist a threat the people who swim in sea, near the coast, getting attacked bysharks and saltwater crocodiles. Develop pattern recognition technique to identify the marine species using high resolution camera and alert the swimmers when such sea animals approach the coast. Develop pattern recognition technique to identify the marine species using high resolution camera and alert the swimmers when such sea animals approach the coast. To identify Pattern recognition algorithm to identify marine animals.",

    2: " Background: Department of Empowerment of Persons with Disabilities (DEPwD) under Ministry of Social Justice and Empowerment, Govt. Of India has already initiated a 24*7 Mental health Rehabilitation Helpline (KIRAN) for addressing the mental health issues within the population. It is now needed that an app (KIRAN app) is formulated to improve the accessibility of this services specially to adolescents across the country. Not only will this help in self registration but also in providing services to clients from the comfort of their home even if they are not ready to talk about it.Summary: screening the possible mental health issues in  adolescents and PwDs. Objective: a) It will allow self registration screening of possible mental health issues b) Initiate a secured chat in their own language with professional at any convenient time c) Provide real time database, location, statistics and follow-up  services & utilization of local resources. d) Provide an option for  call back at a convenient time slot chosen by the applicant",
    3: "Background: Navigating an intersection with traffic lights is a challenging but safety critical task for a self-driving car. Using perception to identify traffic light positions and states despite lighting conditions and occlusions is an interesting problem that a 3D simulation environment can safely and effectively provide a solution for. Automated Driving Toolbox™ provides a 3D simulation environment powered by Unreal Engine® from Epic Games® that can be used to visualize traffic lights and the motion of a vehicle in a 3D scene. Description: Use MATLAB® and Simulink® to load a pre-built Unreal scene, detect and identify the state of the traffic light nearest to the ego-vehicle, design a Stateflow® model to control traffic lights in the scene, and control the reaction of the ego-vehicle in accordance with the traffic lights and surrounding vehicles. The position and color state of the traffic light at an intersection can be obtained by using a combination of sensors and perception algorithms. Perception can be used to identify surrounding vehicles which can also be used to inform decisions. Identify distance between the traffic light nearest to the ego-vehicle and the ego-vehicle in a pre-built Unreal scene intersection. Identify the color of the traffic light using camera output and perception. Control the change of state of the traffic light using Stateflow. The ego-vehicle should react to the traffic light information. Build your own scenes with the following suggested requirements and perform a quantitative analysis of your algorithm: a. Traffic lights obstructed by trees b. Various types of traffic lights like hanging on a pole, multiple traffic lights in different orientations at an intersection c. Scenes with different weather conditions Work with Automated Driving Toolbox™ , Computer Vision Toolbox™ , Lidar Toolbox™ and Sensor Fusion and Tracking Toolbox™ https://www.mathworks.com/products/sensor-fusion-and-tracking.html for this project. Students can also take the opportunity of submitting the solution to the MathWorks Excellence in Innovation Projects and get recognized for their work. Deliverables Software (Models, Code, Simulation Data, 3D files) License: For students whose institutions/university already have access to MATLAB, SIMULINK and its toolboxes, please use of these licenses. To check if your campus has a MATLAB campus license? Check the following link For those whose institutions/university, do not have access to MATLAB, SIMULINK and its toolboxes. Please send a mail to ageethag@mathworks.com and we will provide you with the required license. https://www.youtube.com/watch?v=DWlyVmIfiRQ",
    4: "Description: Build a face detection-based solution which can identify the temperature of the people entering a building in groups, where individual body temp. check is not possible using CCTV feeds. • Build a face detection-based solution which can identify student/employee and cross check with database repository, using CCTV feeds. The solution should include the following features: • Identify student/employee whose faces may be partially visible due to the varying angles at which CCTV cameras are typically placed • Handle people of different age, skin colour, gender and facial structure • Identify suspects with over 90% accuracy based on photographs of suspects provided as input • Throw an alert in real time as soon as ananyone in the crowd has a body temperature beyond the normal temperature, is detected. The video and associated timestamps should also be highlighted. • The system should also send alert of the student/employee who have not wear mask, to the Deptt. Head/organisation head, along with the individual, as a caution. • The attendance of the individual will also be registered through the CCTV feed and the data passed on to the Payroll system, for salary calculation and leave management applications. • Search for multiple individuals within multiple CCTV feeds concurrently",
    5: "In the last two decades, there has been rapid migration of the young population from the remote villages in hilly areas to medium and large cities. Consequently, majority of the population in these villages comprises women and old people. Some of these villages are yet to be connected by road and thus do not have even basic health support system. A good health facility having presence of a doctor is sometimes more than 25 km away, which is inconvenient considering that some of the old people are not able to travel large distances. The problem is compounded by the fact that hill areas have severe shortage of doctors. Visits to these villages by health workers remain largely on paper and little meaningful medical support is currently being provided to these old people. During the outbreak of the second wave of COVID 19, people living in some of these areas also contacted the virus. However, there was hardly any medical aid available. A solution may be sought from students through this hackathon to solve the problem of medical support in remote hill areas",
    6: "The principles of the circular economy on the farming system ensure that important nutrients are returned to the soil through anaerobic processes or composting, which softens the exploitation of land and natural ecosystems. In this way, as “waste” is returned to the soil, besides having fewer residues to deal with, the soil gets healthier and more resilient, allowing a greater balance in the ecosystems that surround it. As well, since soil degradation costs an estimated US$40 billion annually worldwide, and has hidden costs such as the increase of fertilizer use, loss of biodiversity and loss of unique landscapes – a circular economy could prove to be really useful for both the soils and the economy. A circular economy model in food systems has the potential to decrease 80% of the use of artificial fertilizer and therefore contributing to the natural balance of soils, according to a study.Most of the waste food that is being generated is dumped in landfills. This was we are losing the opportunity to use the food waste in more better things such as creating organic fertilizers or biogas. Hence tracking this food waste can help in bringing out more productivity to the waste that is being generated.Tracking food waste can help divert it from entering the landfill towards more productive usage. We need you to use modern generation Machine learning based techniques to track out the amount of food waste and categories them on how and which sectors we can use that waste for more productive areas.",
    7: "Income Tax Calculation portal  for college to calculate the tax to be claimed ,REFER:contact Narendran sir from COIN ",
    8: "Gate pass System using QR code [ Student Innovation ] Refer : SREC Coin Mr.G.Narendran ",
    9: "Ai based attendance App [ Student Innovation ] Refer : SREC Coin Mr.G.Narendran ",
    10: "Hostel Management System [ Student Innovation ] Refer : SREC Coin Mr.G.Narendran ",
    11: "First Come First Serve based choice based choosing subject [ Student Innovation ] Refer : SREC Coin Mr.G.Narendran ",
    12: "Plumber , Electrical online booking System [ Student Innovation ] Refer : SREC Coin Mr.G.Narendran  ",
    13: "AR based app for material explanation in 3D view [ Student Innovation ] Refer : SREC Coin Mr.G.Narendran ",
    14: "Digital app for Collaborative Innovation Center [ Student Innovation ] Refer : SREC Coin Mr.G.Narendran ",
    15: "Event Management App [ Student Innovation ] Refer : SREC Coin Mr.G.Narendran  ",
  };

  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      dialogClassName="modal-width"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Problem Statement
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        {/* {statement.map((data, i) => ( */}
        <Container>{statement[props.id]}</Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function Button_grid(props) {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Button
        variant="primary"
        className="button_view"
        onClick={() => setModalShow(true)}
      >
        PS : {props.id}
      </Button>

      <MydModalWithGrid
        id={props.id}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default Button_grid;
