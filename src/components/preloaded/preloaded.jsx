import React from "react";
import "./preloaded.css"; // import your CSS file
import pre1 from "../../assets/pre1.png";
import pre2 from "../../assets/pre2.png";
import pre3 from "../../assets/pre3.png";
import pre4 from "../../assets/pre4.png";
import pre5 from "../../assets/pre5.png";
import pre6 from "../../assets/pre6.png";
import pre7 from "../../assets/pre7.png";
import pre8 from "../../assets/pre8.png";

const Preloaded = () => {
  return (
    <div className="pregroup">
      <div className="h-pregroup">
        <h2>Preloaded Quizzes</h2>
        <div className="image-container1">
          <div className="preloaded-text-image">
            <PreloadedImage src={pre1} />
            <p>Languages</p>
          </div>
          <div className="preloaded-text-image">
            <PreloadedImage src={pre2} />
            <p>Maths</p>
          </div>
          <div className="preloaded-text-image">
            <PreloadedImage src={pre3} />
            <p>Coding</p>
          </div>
          <div className="preloaded-text-image">
            <PreloadedImage src={pre4} />
            <p>Music</p>
          </div>
        
          <div className="preloaded-text-image">
            <PreloadedImage src={pre5} />
            <p>Full Curriculum</p>
          </div>
          <div className="preloaded-text-image">
            <PreloadedImage src={pre6} />
            <p>Writing</p>
          </div>
          <div className="preloaded-text-image">
            <PreloadedImage src={pre7} />
            <p>Reading</p>
          </div>
          <div className="preloaded-text-image">
            <PreloadedImage src={pre8} />
            <p>Social Emotional</p>
          </div>
          </div>
      </div>
    </div>
  );
};

const PreloadedImage = ({ src }) => {
  return (
    <div className="preloaded-image">
      <img src={src} alt="Preloaded Quiz" />
    </div>
  );
};

export default Preloaded;
