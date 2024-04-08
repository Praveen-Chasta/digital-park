import React, { useState } from "react";
import "./reviews.css";
import student from "../../assets/student.png";

const Reviews = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollTo = (index) => {
    const slider = document.querySelector(".slider");
    // const items = document.querySelectorAll(".item");
    const distanceToMove = index * -100;
    slider.style.transform = `translateX(${distanceToMove}%)`;
    setActiveIndex(index);
  };

  return (
    <div className="review-section">
      <div className="review-container">
        <div className="review-header">
          <h2>Our Student Words</h2>
        </div>
        <div className="slider">
          <div className={`item ${activeIndex === 0 ? "animation" : ""}`}>
            <div className="profile-image-review">
              <img src={student} alt="" />
            </div>
            <div className="content-review">
              <div className="main-content-review">
                <p>
                Porttitor massa id neque aliquam vestibulum morbi blandit cursus. Aliquet porttitor lacus luctus accumsan tortor. Pharetra convallis posuere morbi leoper urna molestie.Nisi est sit amet facilisis magna  risus in hendrer.</p>
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
  );
};

export default Reviews;
