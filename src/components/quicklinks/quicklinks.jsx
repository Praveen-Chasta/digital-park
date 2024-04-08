import React from 'react';
import './quicklinks.css';

const Quicklinks = () => {
  return (
    <div className="copyright-section">
    <div className="copyright-text">
      <p>Copyright@DigitalEduPark {new Date().getFullYear()}</p>
      <span>|</span>
      <a href="#privacy">Privacy Section</a>
      <span>|</span>
      <a href="#terms">Terms and Conditions</a>
    </div>
  </div>
    
  );
}

export default Quicklinks;