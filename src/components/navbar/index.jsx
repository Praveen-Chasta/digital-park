// Navbar.js
import React from 'react';
import "./navbar.css"; // Import your CSS file for styling
import Logo from "../../assets/logo.png";

const Navbar = ({ onLoginClick }) => {
  return ( 
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <img src={Logo} alt="Logo" className="logo" />
        </div>
        <div className="navbar-menu">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#academics">Academics</a></li>
            <li><a href="#government-services">Government Services</a></li>
            <li><a href="#competitive-exams">Competitive Exams</a></li>
            <li><a href="#rewards">Rewards</a></li>
            <button className='login-btn-header' onClick={onLoginClick}>LOGIN</button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;