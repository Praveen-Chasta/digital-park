import React, { useState, useEffect } from "react";
import "./carousel.css";

// Dummy data for notices
const dummyNotices = [
  { date: "Jan 20", content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti optio alias minima delect" },
  { date: "Jan 26", content: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas." },
  { date: "Feb 3", content: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." },
  { date: "Feb 10", content: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." }
];

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    
    setNotices(dummyNotices);
  }, []);

  const scrollTo = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="hero-board">
      <div className="notice-board-container">
        <div className="top-board-container">
          <p className="h-board">Notice Board</p>
          <button className="btn-board">View all Notices</button>
        </div>
        <div className="subheading-para-board">
          <p className="noticeboard-para">
            It is an exceptional online test platform for conducting online
            exams and solving all your preparation doubts. It is a smooth online
            examination system to use and enhances the flow of information.
          </p>
          {/* <p className="tablet-paragraph">
            It is an exceptional online test platform for conducting online
            exams and solving all your preparation doubts. It is a smooth online
            examination system to use and<br/> enhances the flow of information.
          </p> */}
        </div>
        <div className="api-slider">
          {notices.slice(activeIndex, activeIndex + 2).map((notice, idx) => (
            <div key={idx} className={`notice-box-container ${idx === 0 ? "" : "second-box"}`}>
              <span className={`dateBox ${idx === 1 ? "different-color" : ""}`}>
                <h3>{notice.date}</h3>
              </span>
              <span className="noticeBox">
                <p>{notice.content}</p>
              </span>
            </div>
          ))}
        </div>

        <div className="review-carousel-btn">
          {[0, 1].map((index) => (
            <button
              key={index}
              className={`btn ${activeIndex === index ? "expand" : ""}`}
              onClick={() => scrollTo(index)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
