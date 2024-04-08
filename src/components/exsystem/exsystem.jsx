// Exsystem.jsx

import React from "react";
import "./exsystem.css"; // import your CSS file
import ic1 from "../../assets/ic1.png";
import ic2 from "../../assets/ic2.png";
import ic3 from "../../assets/ic3.png";
import ic4 from "../../assets/ic4.png";
import ic5 from "../../assets/ic5.png";
import ic6 from "../../assets/ic6.png";

const Exsystem = () => {
  return (
    <div className="bg-system-feature">
      <div className="bsystem">
        <h2> A Revolutionary Step in the Online Examination System</h2>
        <p>
          It is an exceptional online test platform for conducting online exams
          and solving all your preparation doubts. It is a smooth online
          examination system
          <br /> to use and enhance the flow of information.
        </p>

        <div className="row">
          <div className="img-contain">
            <div className="img-fluid bg-color-one">
              <img src={ic1} alt="Icon 1" />
            </div>
            <h3>Simple to learn</h3>
            <p>
              one stop solution for online examination and
              <br /> assessment. It would solve all your problem in
              <br /> preparation for the exam
            </p>
          </div>
          <div className="img-contain">
            <div className="img-fluid bg-color-two">
              <img src={ic2} alt="Icon 2" />
            </div>
            <h3>Interactive Interface</h3>
            <p>
              Easy registration, click away tricks, and simple test
              <br /> creation facilitated by online exam software. Signing
              <br /> in and concurring.
            </p>
          </div>
          <div className="img-contain">
            <div className="img-fluid bg-color-three">
              <img src={ic3} alt="Icon 3" />
            </div>
            <h3>Test Software with Advanced<br/> Reporting System</h3>
            <p>
              Online exam software ensures fast result generation,
              <br /> digital evaluation, sharing feedback.
            </p>
          </div>
          <div className="img-contain">
            <div className="img-fluid bg-color-two">
              <img src={ic4} alt="Icon 4" />
            </div>
            <h3>Exception Support</h3>
            <p>
              We offer exceptional support for the exam platform
              <br /> to your request. Our dedicated professionals work
              <br /> round the clock to work on your queries.
            </p>
          </div>
          <div className="img-contain">
            <div className="img-fluid bg-color-three">
              <img src={ic5} alt="Icon 5" />
            </div>
            <h3>Smart Subscription</h3>
            <p>
              Subscription according to your reference for the use
              <br /> of an online test platform.
            </p>
          </div>
          <div className="img-contain">
            <div className="img-fluid bg-color-one">
              <img src={ic6} alt="Icon 6" />
            </div>
            <h3>Dynamic Accessibility</h3>
            <p>
              Anywhere and anytime practice of online
              <br /> examination sytem. The exam platform helps in
              <br /> designing and assigning an online exam.
            </p>
          </div>
        </div>
        <div className="btncontnt">
          <button className="expertbtn">EXPLORE WITH OUR EXPERTS</button>
        </div>
      </div>
    </div>
  );
};

export default Exsystem;
