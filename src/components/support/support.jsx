import React from "react";
import "./support.css";
import support1 from "../../assets/support1.png";
import support2 from "../../assets/support2.png";
import support3 from "../../assets/support3.png";
import support4 from "../../assets/support4.png";

const Support = () => {
  return (
    <div className="support-container">
      <div className="support-head">
        <h2>Why We Are the Ideal Partner For Your Online Exams</h2>
      </div>
      <div className="support-section">
        <SupportCard
          icon={support1}
          name=<p>
            {" "}
            Seamless Student & <br />
            Professor Experience{" "}
          </p>
          description=<p>
            {" "}
            Easy to use, demos and <br /> handholding{" "}
          </p>
        />

        <SupportCard
          icon={support2}
          name=<p>
            {" "}
            24*7 Support from Our
            <br /> Online Exam Experts{" "}
          </p>
          description="We are here for you, always!"
        />
        <SupportCard
          icon={support3}
          name=<p>
            {" "}
            The Best-in-Quizzes <br /> Proctoring Technology{" "}
          </p>
          description=<p>
            {" "}
            We offer an industry-leading <br /> suite of AI-based proctoring
            tools{" "}
          </p>
        />
        <SupportCard
          icon={support4}
          name="Robust Data Security"
          description=<p>
            {" "}
            Data encryption, secure data <br /> hosting, compliant with <br/>
            international standards"
          </p>
        />
      </div>
    </div>
  );
};
const SupportCard = ({ icon, name, description }) => {
  return (
    <div className="support-card">
      <img src={icon} alt={name} className="icon" />
      <p className="name">
        {name} <br />
      </p>
      <p className="description">{description}</p>
    </div>
  );
};

export default Support;
