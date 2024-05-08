import React from "react";
import Navbar from "./Navbar.jsx";
import Header from "./Header.jsx";
import Info from "../Info.jsx";
import Notice from "../Notice.jsx";
import Test from "../Test.jsx";
import Assesment from "../Assessment.jsx";
// import Quizz from "../Quizz";
// import Evaluation from "../Evaluation";
import Revolutionary from "../Revolutionary.jsx";
// import OnlineExamService from "../OnlineExamService.jsx";
import StudentWrapper from"../StudentWrapper.jsx";
import Wrapper from "../Wrapper.jsx";
import Footer from "./Footer.jsx";

const Main =() =>{
  return (<>
          <Navbar/>
          <main>
           
            <Header/>
            <Info/>
            <Notice/>
            <Test/>
            <Assesment/>
            {/* <Quizz/> */}
            {/* <Evaluation/> */}
            <Revolutionary/>
            {/* <OnlineExamService/> */}
            <StudentWrapper/>
            <Wrapper/> 
          </main>
          <Footer/>
          </>
          )
}
export default Main;


