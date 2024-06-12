import React from "react";
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import AboutOnlineExam from "./about/AboutOnlineExam";
import StudentWrapper from "./StudentWrapper";
import Clasess from "./class/classes";
import ClassHeader from "./class/ClassHeader";
import SubjectClass from "./class/SubjectClass";
import "./ClassComponent.css";
const ClassComponent=()=>
  {
    return (
      <>
      <Navbar/>
      <ClassHeader/>
      <SubjectClass/>
      <AboutOnlineExam/>
      <StudentWrapper/>
      <Clasess/>
      <Footer/>
      
    
      </>
    );
  }
  export default ClassComponent;