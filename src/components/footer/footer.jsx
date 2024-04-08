import React from "react";
import "./footer.css"; // Import your CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h4>USED LINKS</h4>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About Us</a>
          </li>
          <li>
            <a href="/faqs">FAQs</a>
          </li>
          <li>
            <a href="/gallery">Gallery</a>
          </li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>PRODUCT</h4>
        <ul>
          <li>Skills and Knowledge Assessment</li>
          <li>Easy Test Maker</li>
          <li>AI-powered Questions Creation</li>
        </ul>
      </div>
      <div className="footer-section">
        <ul> {/* Removed the h4 tag */}
          <li>Online Quiz Maker</li>
          <li>Exam Software</li>
          <li>Insight and Analytics</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>SOCIAL MEDIA</h4>
        <ul>
          <li>
            <a href="https://www.facebook.com">Facebook</a>
          </li>
          <li>
            <a href="https://twitter.com">Twitter</a>
          </li>
          <li>
            <a href="https://www.linkedin.com">LinkedIn</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
