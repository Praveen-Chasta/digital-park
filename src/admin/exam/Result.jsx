import React, { useState, useCallback, useEffect } from "react";
import './ExamPage.css'; // Import this if you separate the CSS into an App.css file
import Header from "../layouts/Header/Header.jsx";
import Footer from "../layouts/Footer/Footer.jsx";
import Sidebar from "../layouts/Sidebar/Sidebar.jsx";
import dashboardStyle from "../dashboard/dashboard.module.css"
import ResultDatatable from "./resultDatatable.jsx";

import { useSelector } from "react-redux";

function Result() {

  const quizResult = useSelector((state) => state.quizQuestions.quizResult) || [];
  if (quizResult.quiz_id) 
    {
       localStorage.setItem('result_quiz_id', quizResult.quiz_id);
     }
 
 
  return (
    <>
    <div className={dashboardStyle['main-wrapper']}>
      <Header />
      <Sidebar />
      <div className={dashboardStyle['page-wrapper']}>
        <div className="container">
        <div className="section mt-5">
          
              <div className="question-info1 mt-5">
              <h2>Quiz Result</h2>
              <p>Total No of Questions : {quizResult.no_of_question}</p>
              <p>Your score: {quizResult.total_getting_mark} out of {quizResult.total_marks}</p>
                <ResultDatatable/>
             
          </div>
          </div>
      </div>
      </div>
  {/* <Footer /> */}
</div>
<br />
<br />
</>
  );
}

export default Result;








