import React, { useState, useCallback, useEffect } from "react";
import {Chart} from 'chart.js/auto'
import Header from "../layouts/Header/Header.jsx";
import Footer from "../layouts/Footer/Footer.jsx";
import Sidebar from "../layouts/Sidebar/Sidebar.jsx";
import dashboardStyle from "../dashboard/dashboard.module.css"
import ChartComponent from '../chartComponent/ChartComponent';
import './result.css'; // Import this if you separate the CSS into an App.css file
import ResultDatatable from "./resultDatatable.jsx";

import { useSelector } from "react-redux";

function Result() {

  const quizResult = useSelector((state) => state.quizQuestions.quizResult) || [];
  if (quizResult.quiz_id) 
    {
       localStorage.setItem('result_quiz_id', quizResult.quiz_id);
     }
     
     const pieChartData = {
      // labels: [
      //   'Red',
      //   'Blue',
      //   'Yellow',
      //   'green'
      // ],
      datasets: [{
        label: 'Pie Dataset',
        data: [300, 50, 100, 50],
        backgroundColor: [
          "rgba(255, 73, 85, 1)",
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)',
          "rgba(62, 190, 66, 1)"
  
        ],
        hoverOffset: 4
      }]
    }
 
 
  return (
    <>
    <div className={dashboardStyle['main-wrapper']}>
      <Header />
      {/* <Sidebar /> */}
      <div className={dashboardStyle['page-wrappers']}>
        <div className="result-container pt-5">
          <div className="container section mt-5">
          
              {/* <div className="question-info1 mt-5">
              <h2>Quiz Result</h2>
              <p>Total No of Questions : {quizResult.no_of_question}</p>
              <p>Your score: {quizResult.total_getting_mark} out of {quizResult.total_marks}</p>
                <ResultDatatable/>
              </div> */}
            {/* <div className="row">
              <div className="col-lg-6 graph-container">
                    <h1 className="charts-heading">Marks Obtained</h1>
                    <hr/>
                    <div className="row">
                      <div className="col-lg-5 p-4">
                      <img src = "https://res.cloudinary.com/dp3nahxbi/image/upload/v1717415726/Group_427320132_ociyrs.png" alt = "Pie Chart" className = "chart-img"/>
                      </div>
                      <div className="col-lg-7 mt-4 p-4">
                          <div className="row">
                              <div className="col-lg-6">
                                  <img src = "https://res.cloudinary.com/dp3nahxbi/image/upload/v1717416504/Rectangle_4153252_jxzdq4.png" alt = "" />
                                  <p className="charts-para">Total Questions</p>
                              </div>
                              <div className="col-lg-6">
                                  <img src = "https://res.cloudinary.com/dp3nahxbi/image/upload/v1717417294/Rectangle_4153255_iotvyv.png" alt = "" />
                                  <p className="charts-para">Question Attempted</p>
                              </div>
                          </div>
                          <div className="row">
                              <div className="col-lg-6">
                                  <img src = "https://res.cloudinary.com/dp3nahxbi/image/upload/v1717417294/Rectangle_4153253_uopwty.png" alt = "" />
                                  <p className="charts-para">Question Unattempt</p>
                              </div>
                              <div className="col-lg-6">
                                  <img src = "https://res.cloudinary.com/dp3nahxbi/image/upload/v1717417294/Rectangle_4153254_qjifih.png" alt = "" />
                                  <p className="charts-para">Question Wrong Answered</p>
                              </div>
                          </div>
                          <div className="row">
                              <div className="col-lg-6">
                                  <img src = "https://res.cloudinary.com/dp3nahxbi/image/upload/v1717417294/Rectangle_4153253_uopwty.png" alt = "" />
                                  <p className="charts-para">Question Right Answered</p>
                              </div>
                              
                          </div>
                      </div>
                    </div>

              </div>
              <div className="col-lg-6 answer-percent-container">
                <h1 className="charts-heading">Answered Given</h1>
                <div className="container-1">
                    
                </div>
              </div>
            </div> */}
            
            <div className="row">
                <div className="col-lg-6 graph-container mb-4 p-0"> 
                  <h1 className="charts-heading">Marks Obtained</h1>
                  <hr/>
                  <div className="row">
                    <div className="col-lg-5 col-md-6 col-sm-7">
                      <ChartComponent type="pie" data={pieChartData} />
                    </div>
                    <div className="col-lg-7 col-md-6 col-sm-5 p-4">
                      <div className="row">
                        <div className="col-lg-6">
                          <img src="https://res.cloudinary.com/dp3nahxbi/image/upload/v1717416504/Rectangle_4153252_jxzdq4.png" alt="" />
                          <p className="charts-para">Total Questions</p>
                        </div>
                        <div className="col-lg-6">
                          <img src="https://res.cloudinary.com/dp3nahxbi/image/upload/v1717417294/Rectangle_4153255_iotvyv.png" alt="" />
                          <p className="charts-para">Question Attempted</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6">
                          <img src="https://res.cloudinary.com/dp3nahxbi/image/upload/v1717417294/Rectangle_4153253_uopwty.png" alt="" />
                          <p className="charts-para">Question Unattempt</p>
                        </div>
                        <div className="col-lg-6">
                          <img src="https://res.cloudinary.com/dp3nahxbi/image/upload/v1717417294/Rectangle_4153254_qjifih.png" alt="" />
                          <p className="charts-para">Question Wrong Answered</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6">
                          <img src="https://res.cloudinary.com/dp3nahxbi/image/upload/v1717417294/Rectangle_4153253_uopwty.png" alt="" />
                          <p className="charts-para">Question Right Answered</p>
                        </div>
                        <div className="col-lg-6">
                          <img src="https://res.cloudinary.com/dp3nahxbi/image/upload/v1717416504/Rectangle_4153252_jxzdq4.png" alt="" />
                          <p className="charts-para">Total Questions</p>
                        </div> 
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 answer-percent-container mb-4 p-0">
                  <h1 className="ans-cont-1-heading">Answered Given</h1>
                    <div className="col-lg-12 ans-cont-1">
                        <p className="ans-cont-1-p-1">Answer</p>
                        <p>Percent</p>
                        <p className="ans-cont-1-p-3">Image Distance</p>
                    </div>
                    <div className="col-lg-12 ans-cont-2">
                        <p className="ans-cont-1-p-1">Never</p>
                        <p className="text-center">31.45%</p>
                        <p className="ans-cont-1-p-3">+25</p>
                    </div>
                    <div className="ans-cont-3">
                        <p className="ans-cont-1-p-1"> Rarely</p>
                        <p>24.03%</p>
                        <p className="ans-cont-1-p-3">+30</p>
                    </div>
                    <div className="col-lg-12 ans-cont-2">
                        <p className="ans-cont-1-p-1">Often</p>
                        <p>13.5%</p>
                        <p className="ans-cont-1-p-3">+65</p>
                    </div>
                    <div className="ans-cont-3">
                        <p className="ans-cont-1-p-1">Always</p>
                        <p>39.09%</p>
                        <p className="ans-cont-1-p-3">+45</p>
                    </div>
                </div>
                <div className="quizz-container">
                  <p className="quizz-container-p-1">Quizzes</p>
                  <p className="quizz-container-p-2">View All</p>
                </div>
                <div className="col-lg-6 question-container-even mb-4 p-0">
                    <h1>Question 3 : As a Project Leader, write an email to your customer, Mr. Gill Roy, explaining delay to the project. Sign the email as Maria</h1>
                    <div className="question-options-container">
                      <div className="option-1">
                          <input type="radio" className="radio-input" id="test1" name="test" />
                          <label for="test1">Test 1</label>
                      </div>
                      <div className="option-2">
                          <input type="radio" className="radio-input" id="test1" name="test" />
                          <label for="test1">Test 2</label>
                      </div>
                      <div className="option-3">
                          <input type="radio" className="radio-input" id="test1" name="test" />
                          <label for="test1">Test 3</label>
                      </div>
                      <div className="option-4">
                          <input type="radio" className="radio-input" id="test1" name="test" />
                          <label for="test1">Test 4</label>
                      </div>
                      <div className="question-result-ans">
                          <p className="result-para-1">Answer Given (Option 1)</p>
                          <p className="result-para-2">Answer Correct (Option 2)</p>
                      </div>
                      <div className="Time-taken-container">
                          <p>Time Spend : 02 Sec</p>
                      </div>
                    </div>
                </div>
                <div className="col-lg-6 question-container-odd mb-4 p-0">
                    <h1>Question 3 : As a Project Leader, write an email to your customer, Mr. Gill Roy, explaining delay to the project. Sign the email as Maria</h1>
                    <div className="question-options-container">
                      <div className="option-1">
                          <input type="radio" className="radio-input" id="test1" name="test"/>
                          <label for="test1">Test 1</label>
                      </div>
                      <div className="option-2">
                          <input type="radio" className="radio-input" id="test1" name="test" />
                          <label for="test1">Test 2</label>
                      </div>
                      <div className="option-3">
                          <input type="radio" className="radio-input" id="test1" name="test" />
                          <label for="test1">Test 3</label>
                      </div>
                      <div className="option-4">
                          <input type="radio" className="radio-input" id="test1" name="test" />
                          <label for="test1">Test 4</label>
                      </div>
                      <div className="question-result-ans">
                          <p className="result-para-1">Answer Given (Option 1)</p>
                          <p className="result-para-2">Answer Correct (Option 2)</p>
                      </div>
                      <div className="Time-taken-container">
                          <p>Time Spend : 02 Sec</p>
                      </div>
                    </div>
                </div>
                <div className="col-lg-6 question-container-even mb-4 p-0">
                    <h1>Question 3 : As a Project Leader, write an email to your customer, Mr. Gill Roy, explaining delay to the project. Sign the email as Maria</h1>
                    <div className="question-options-container">
                      <div className="option-1">
                          <input type="radio" className="radio-input" id="test1" name="test"/>
                          <label for="test1">Test 1</label>
                      </div>
                      <div className="option-2">
                          <input type="radio" className="radio-input" id="test1" name="test" />
                          <label for="test1">Test 2</label>
                      </div>
                      <div className="option-3">
                          <input type="radio" className="radio-input" id="test1" name="test" />
                          <label for="test1">Test 3</label>
                      </div>
                      <div className="option-4">
                          <input type="radio" className="radio-input" id="test1" name="test" />
                          <label for="test1">Test 4</label>
                      </div>
                      <div className="question-result-ans">
                          <p className="result-para-1">Answer Given (Option 1)</p>
                          <p className="result-para-2">Answer Correct (Option 2)</p>
                      </div>
                      <div className="Time-taken-container">
                          <p>Time Spend : 02 Sec</p>
                      </div>
                    </div>
                </div>
                <div className="col-lg-6 question-container-odd mb-4 p-0">
                    <h1>Question 3 : As a Project Leader, write an email to your customer, Mr. Gill Roy, explaining delay to the project. Sign the email as Maria</h1>
                    <div className="question-options-container">
                      <div className="option-1">
                          <input type="radio" className="radio-input" id="test1" name="test"/>
                          <label for="test1">Test 1</label>
                      </div>
                      <div className="option-2">
                          <input type="radio" className="radio-input" id="test1" name="test" />
                          <label for="test1">Test 2</label>
                      </div>
                      <div className="option-3">
                          <input type="radio" className="radio-input" id="test1" name="test" />
                          <label for="test1">Test 3</label>
                      </div>
                      <div className="option-4">
                          <input type="radio" className="radio-input" id="test1" name="test" />
                          <label for="test1">Test 4</label>
                      </div>
                      <div className="question-result-ans">
                          <p className="result-para-1">Answer Given (Option 1)</p>
                          <p className="result-para-2">Answer Correct (Option 2)</p>
                      </div>
                      <div className="Time-taken-container">
                          <p>Time Spend : 02 Sec</p>
                      </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                  <button className="all-question-button">View All Questions</button>
                </div>
            </div>

              <div className="col-lg-12 col-sm-12 next-quiz-session-container">
                <h1>Levels According to Time Taken Per Question</h1>
                <hr/>
                <div className="comming-soon-container">
                    <img src = "https://res.cloudinary.com/dp3nahxbi/image/upload/v1717440241/Group_427320156_bvjlrd.png" />
                </div>
              </div>
          </div>
          
      </div>
    </div>
  {/* <Footer /> */}
  
      
</div>

</>
  );
}

export default Result;








