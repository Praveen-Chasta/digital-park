import React from 'react';
import "./banner.css";
import comprehensiveIcon from '../../assets/Icon1.png';
import subjectiveIcon from '../../assets/Icon2.png';
import supportingIcon from '../../assets/Icon3.png';
import quickIcon from '../../assets/Icon4.png';

const Banner = () => {
  return (
    <div className="containerr">
      <div className="icon-banner">
        <img src={comprehensiveIcon} alt="Comprehensive" />
        <span>Comprehensive Assesment</span>
      </div>
      <div className="icon-banner">
        <img src={subjectiveIcon} alt="Subjective" />
        <span>Subjective Evaluation</span>
      </div>
      <div className="icon-banner">
        <img src={supportingIcon} alt="Supporting" />
        <span>Userfriendly Interface</span>
      </div>
      <div className="icon-banner">
        <img src={quickIcon} alt="Quick" />
        <span>Quick Rewards</span>
      </div>
    </div>
  );
};

export default Banner;
