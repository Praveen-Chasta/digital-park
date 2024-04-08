import React, { useState } from "react";
import "./evaluation.css";
import eval1 from "../../assets/eval1.png";
import eval2 from "../../assets/eval2.png";
import eval3 from "../../assets/eval3.png";
import arrow2 from "../../assets/arrow2.png";
import downarrow2 from "../../assets/downarrow2.png";
import downarrow0 from "../../assets/downarrow0.png";

const Evaluation = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Placeholder data for eval-cards
  const evalCardsData = [
    {
      id: 1,
      image: eval1,
      title: "Quizzes",
      description:
        "Engage your remote students or connected classrooms in a way that’s efficient and fun.",
    },
    {
      id: 2,
      image: eval2,
      title: "Exams",
      description:
        "Test skills and knowledge in a professional and no-distraction environment.",
    },
    {
      id: 3,
      image: eval3,
      title: "Formative Assessment",
      description:
        "Positive motivation and equal opportunities with a new educational.",
    },
    {
      id: 4,
      image: eval2,
      title: "Evaluation 4",
      description: "Description for Evaluation 4.",
    },
    {
      id: 5,
      image: eval1,
      title: "Evaluation 5",
      description: "Description for Evaluation 5.",
    },
    {
      id: 6,
      image: eval3,
      title: "Evaluation 6",
      description: "Description for Evaluation 6.",
    },
  ];

  const handleArrowClick = (direction) => {
    setActiveIndex((prevIndex) => {
      if (direction === "left") {
        return prevIndex === 0 ? evalCardsData.length - 3 : prevIndex - 1;
      } else {
        return prevIndex === evalCardsData.length - 3 ? 0 : prevIndex + 1;
      }
    });
  };

  return (
    <div className="eval">
      <h6>Skills and knowledge exams made easy</h6>

      <div className="eval-head">
        <h1>Evaluation Program for Personal Assessment</h1>
      </div>

      <div className="eval-cards">
        {evalCardsData.map((item, index) => (
          <div
            key={index}
            className="eval-card"
            style={{
              display:
                index >= activeIndex && index < activeIndex + 3
                  ? "block"
                  : "none",
            }}
          >
            <div className="card-content">
              <img src={item.image} alt={item.title} className="card-image" />
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <button className="learn-more-btn">
                Learn more{" "}
                <img src={arrow2} alt="Arrow2" className="arrow-icon" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="arrow-buttons">
        <button className="arrow-left" onClick={() => handleArrowClick("left")}>
          <img src={downarrow0} alt="Left Arrow" className="arrow-icon" />
        </button>
        <button
          className="arrow-right"
          onClick={() => handleArrowClick("right")}
        >
          <img src={downarrow2} alt="Left Arrow" className="arrow-icon" />
        </button>
      </div>
    </div>
  );
};

export default Evaluation;
