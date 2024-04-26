import React, { useState } from "react";
import "./aboutUs.css";
import student from "../../assets/student.png";
import Footer from "../../components/footer/footer";
import Quicklinks from "../../components/quicklinks/quicklinks";

const AboutUs = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollTo = (index) => {
    const slider = document.querySelector(".slider");
    // const items = document.querySelectorAll(".item");
    const distanceToMove = index * -100;
    slider.style.transform = `translateX(${distanceToMove}%)`;
    setActiveIndex(index);
  };

  return (
    <>
    <div className="review-section">
      <div className="review-container">
        <div className="review-header">
          <h2>About Us</h2>
        </div>
        <div className="slider">
          <div className={`item ${activeIndex === 0 ? "animation" : ""}`}>
            <div className="profile-image-review">
              <img src={student} alt="" />
            </div>
            <div className="content-review">
              <div className="main-content-review">
                <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, doloribus id? Reiciendis expedita ipsa, architecto eaque cum voluptatem eos dolorum necessitatibus laborum, perspiciatis quasi officia qui at? Sequi eum possimus quasi omnis, ab doloremque est alias quisquam libero ipsum cum debitis asperiores adipisci odio rerum dolores officia molestias id hic.</p>
              </div>
              <div className="reviewer-name">Anne Boldren - Director</div>
              <div className="rating-review">⭐⭐⭐⭐⭐</div>
            </div>
          </div>
          <div className={`item ${activeIndex === 1 ? "animation" : ""}`}>
            <div className="profile-image-review">
              <img src={student} alt="" />
            </div>
            <div className="content-review">
              <div className="main-content-review">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
                nostrum ratione soluta, deserunt facilis voluptates vero
                perspiciatis ipsum quibusdam necessitatibus, quae unde! Sit
                voluptatum voluptates vitae perspiciatis illum odio debitis!
              </div>
              <div className="reviewer-name">John Boldren - Director</div>
              <div className="rating-review">⭐⭐⭐⭐⭐</div>
            </div>
          </div>
          <div className={`item ${activeIndex === 2 ? "animation" : ""}`}>
            <div className="profile-image-review">
              <img src={student} alt="" />
            </div>
            <div className="content-review">
              <div className="main-content-review">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                cum magnam sint, consequuntur nulla amet aspernatur facere
                temporibus magni itaque minus a nemo, blanditiis obcaecati
                eligendi ipsam laborum nesciunt quas?
              </div>
              <div className="reviewer-name">Doe Boldren - Director</div>
              <div className="rating-review">⭐⭐⭐⭐⭐</div>
            </div>
          </div>
        </div>
        <div className="review-carousel-btn">
          <button
            className={`btn ${activeIndex === 0 ? "expand" : ""}`}
            onClick={() => scrollTo(0)}
          ></button>
          <button
            className={`btn ${activeIndex === 1 ? "expand" : ""}`}
            onClick={() => scrollTo(1)}
          ></button>
          <button
            className={`btn ${activeIndex === 2 ? "expand" : ""}`}
            onClick={() => scrollTo(2)}
          ></button>
        </div>
      </div>
    </div>
     <Footer />
     <Quicklinks />
     </>
  );
};

export default AboutUs;
