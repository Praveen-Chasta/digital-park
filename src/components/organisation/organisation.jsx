import React from "react";
import "./organisation.css";

const Organisation = () => {
  return (
    <div className="org">
      <div className="orghead">
        <h2>Thousands of organisations rely on DigitalEduPark</h2>
      </div>
      <div className="org-container">
        <div className="orgheading">
          <h3>50M+</h3>
          <p>Online Exams Students</p>
        </div>
        <div className="separator"></div>
        <div className="orgheading">
          <h3>100+</h3>
          <p>Countries Around</p>
        </div>
        <div className="separator"></div>
        <div className="orgheading">
          <h3>3M+</h3>
          <p>Questions Asked a Week</p>
        </div>
      </div>
    </div>
  );
};

export default Organisation;
