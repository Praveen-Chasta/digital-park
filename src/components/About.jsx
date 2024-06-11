import React from "react";
import Navbar from"./layouts/Navbar.jsx";
import AboutBanner from "./about/aboutBanner.jsx";
import StudentWrapper from "./StudentWrapper";
import AboutOnlineExam from "./about/AboutOnlineExam.jsx";
import Courses from "./about/Courses.jsx";
import Footer from "./layouts/Footer.jsx";
const About =(props)=>{
  

  return(
        <>
          <Navbar/>
          <AboutBanner/>
          <AboutOnlineExam/>
          <Courses/>
          <StudentWrapper/>
          <Footer/>
        </>
        );
}
export default About;