import React from "react";
import { useState } from "react";
import "./assessment.css";
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&family=Readex+Pro:wght@100&display=swap" rel="stylesheet"></link>;
const Assessment = () => {

  const [showVideo, setShowVideo] = useState(false);

  const toggleVideo = () => {
    setShowVideo(!showVideo);
  };
  return (
    <div>
      <div className="container">
        <div className="content">
          <p>Simply Powerful online</p>
          <h1>Quizzes & Exams</h1>
          <p>
            AI - powered skills and knowledge assessment <br></br>software,
            serving 2.5M+ business and educational users worldwide.
          </p>
          <div className="btnClass">
            <button className="button">Sign Up For Free</button>
            <button className="button" onClick={toggleVideo}>
              {showVideo ? 'Hide Video' : 'Watch Video'}
            </button>
            {showVideo && (
              <video controls width="640" height="360">
                <source src="/video/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assessment;
