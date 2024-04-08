import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./quizcard.css";

<link
  href="https://fonts.googleapis.com/css2?family=Readex+Pro:wght@10..100&display=swap"
  rel="stylesheet"
></link>;

const Quizcard = () => {
  // Dummy data arrays
  const [academicData, setAcademicData] = useState([
    { id: 1, name: "Class 5" },
    { id: 2, name: "Class 6" },
    { id: 3, name: "Class 7" },
    { id: 3, name: "Class 8" },
    { id: 3, name: "Class 9" },
    { id: 3, name: "Class 10" },
    { id: 3, name: "Class 11" },
    { id: 3, name: "Class 12" },
  ]);

  const [governmentData, setGovernmentData] = useState([
    { id: 1, name: "Government Policies Quiz" },
    { id: 2, name: "Constitution Quiz" },
    { id: 3, name: "Politics Quiz" },
  ]);

  const [competitiveExamsData, setCompetitiveExamsData] = useState([
    { id: 1, name: "SAT Practice Test" },
    { id: 2, name: "GRE Mock Exam" },
    { id: 3, name: "GMAT Sample Quiz" },
  ]);

  return (
    <section className="quiz-container">
      <div className="top-heading-quiz">
        <p>Top Class Quizzes</p>
      </div>
      <div className="main-heading-quiz">
        <h2>
          Explore Our Best<span> Assessment</span> Platform
        </h2>
      </div>
      <div className="quiz-card-container">
        {/* Academics */}
        <div className="academics-card quiz-card">
          <div className="heading-quiz">
            <h4>Academics</h4>
          </div>
          <div className="card-list-content">
            <ul>
              {academicData.map((item) => (
                <li key={item.id}>
                  <span className="tick-icon">✔️</span> {/* Double tick icon */}
                  <Link to={`/quiz/${item.id}`} className="list-item-link">{item.name}</Link> {/* Link text */}
                </li>
              ))}
            </ul>
          </div>
          <button className="quiz-view-btn">View All</button>
        </div>
        
        {/* Government Services */}
        <div className="government-services-card quiz-card">
          <div className="heading-quiz2">
            <h4>Government Services</h4>
          </div>
          <div className="card-list-content">
            <ul>
              {governmentData.map((item) => (
                <li key={item.id}>
                  <span className="tick-icon">✔️</span> {/* Double tick icon */}
                  <Link to={`/quiz/${item.id}`} className="list-item-link">{item.name}</Link> {/* Link text */}
                </li>
              ))}
            </ul>
          </div>
          <button className="quiz-view-btn2">View All</button>
        </div>
        
        {/* Competitive Exams */}
        <div className="competitive-exams-card quiz-card">
          <div className="heading-quiz3">
            <h4>Competitive Exams</h4>
          </div>
          <div className="card-list-content">
            <ul>
              {competitiveExamsData.map((item) => (
                <li key={item.id}>
                  <span className="tick-icon">✔️</span> {/* Double tick icon */}
                  <Link to={`/quiz/${item.id}`} className="list-item-link">{item.name}</Link> {/* Link text */}
                </li>
              ))}
            </ul>
          </div>
          <button className="quiz-view-btn3">View All</button>
        </div>
      </div>
      <div className="btncont">
        <button className="common-quiz-button">Common Quizzes</button>
        <button className="free-exam-trial-button">Free Exam Trial</button>
      </div>
    </section>
  );
};

export default Quizcard;
