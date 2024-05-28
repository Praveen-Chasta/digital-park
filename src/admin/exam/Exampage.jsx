import React, { useState, useCallback, useEffect } from "react";
import './ExamPage.css'; // Import this if you separate the CSS into an App.css file
import Header from "../layouts/Header/Header.jsx";
import Footer from "../layouts/Footer/Footer.jsx";
import Sidebar from "../layouts/Sidebar/Sidebar.jsx";
import dashboardStyle from "../dashboard/dashboard.module.css"
import {  useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { quizQuestionsReducer } from "./ExamSlice.jsx";
import PageRefreshWarning from "./PageRefreshWarning.jsx";

function Exampage() {

  let { id, subjectId, ChapterId, timeLimit, Difficulty } = useParams();

  const quizData = useSelector((state) => state.quizQuestions.examQuestions) || [];

  const dispatch = useDispatch();
  const getAllQuestionList = useCallback(async () => {
    try {
      dispatch(
        quizQuestionsReducer({
          //user_type: "admin",
          class: id,
          subject: subjectId,
          chapter: ChapterId,
          difficulty_label: Difficulty
        })
      );
    } catch (error) {
      console.error("Failed to fetch quiz questions:", error);
    }
  }, [dispatch, id, subjectId, ChapterId, Difficulty]);

  useEffect(() => {
    let mounted = true;

    if (mounted) {
      getAllQuestionList();
    }

    return () => {
      mounted = false;
    };
  }, [getAllQuestionList]);

  timeLimit = timeLimit * 60;
  const autoSubmitDelay = 30000; // auto-submit delay in milliseconds (30 seconds)

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [reviewQuestions, setReviewQuestions] = useState([]);
  const [timeLeft, setTimeLeft] = useState(timeLimit);
  const [submitted, setSubmitted] = useState(false);
  const [questionStatus, setQuestionStatus] = useState(
    quizData.map(() => 'Not Visited')
  );

  useEffect(() => {
    try {
      const storedAnswers = localStorage.getItem('quizAnswers');
      const storedReviewQuestions = localStorage.getItem('quizReviewQuestions');
      const storedCurrentQuestion = localStorage.getItem('quizCurrentQuestion');
      const storedTimeLeft = localStorage.getItem('quizTimeLeft');
      const storedQuestionStatus = localStorage.getItem('quizQuestionStatus');

      if (storedAnswers && storedReviewQuestions && storedCurrentQuestion && storedTimeLeft && storedQuestionStatus) {
        setAnswers(JSON.parse(storedAnswers));
        setReviewQuestions(JSON.parse(storedReviewQuestions));
        setCurrentQuestion(parseInt(storedCurrentQuestion, 10));
        setTimeLeft(parseInt(storedTimeLeft, 10));
        setQuestionStatus(JSON.parse(storedQuestionStatus));
      }
    } catch (error) {
      console.error("Failed to retrieve data from local storage:", error);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('quizAnswers', JSON.stringify(answers));
      localStorage.setItem('quizReviewQuestions', JSON.stringify(reviewQuestions));
      localStorage.setItem('quizCurrentQuestion', currentQuestion);
      localStorage.setItem('quizTimeLeft', timeLeft);
      localStorage.setItem('quizQuestionStatus', JSON.stringify(questionStatus));
    } catch (error) {
      console.error("Failed to save data to local storage:", error);
    }
  }, [answers, reviewQuestions, currentQuestion, timeLeft, questionStatus]);

  useEffect(() => {
    let timer;
    if (timeLeft > 0 && !submitted) {
      timer = setTimeout(() => {
        setTimeLeft(prevTime => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0 && !submitted) {
      handleSubmit();
    }

    return () => clearTimeout(timer);
  }, [timeLeft, submitted]);

  useEffect(() => {
    let autoSubmitTimer;

    const checkNetworkStatus = () => {
      try {
        if (!navigator.onLine) {
          autoSubmitTimer = setTimeout(() => {
            if (!submitted) {
              handleSubmit();
            }
          }, autoSubmitDelay);
        } else {
          clearTimeout(autoSubmitTimer);
        }
      } catch (error) {
        console.error("Error checking network status:", error);
      }
    };

    checkNetworkStatus();

    const interval = setInterval(checkNetworkStatus, 5000);

    return () => clearInterval(interval);
  }, [submitted, autoSubmitDelay]);

  const handleAnswer = (questionId, answer) => {
    setAnswers(prevAnswers => ({
      ...prevAnswers,
      [questionId]: answer
    }));
    const updatedStatus = [...questionStatus];
    updatedStatus[currentQuestion] = 'Answered';
    setQuestionStatus(updatedStatus);
  };

  const handleClearAnswer = () => {
    const updatedAnswers = { ...answers };
    delete updatedAnswers[quizData[currentQuestion]?.id];
    setAnswers(updatedAnswers);
    const updatedStatus = [...questionStatus];
    updatedStatus[currentQuestion] = 'Not Answered';
    setQuestionStatus(updatedStatus);
  };

  const handleReview = (questionId) => {
    if (reviewQuestions.includes(questionId)) {
      setReviewQuestions(prevReviews =>
        prevReviews.filter(id => id !== questionId)
      );
      const updatedStatus = [...questionStatus];
      updatedStatus[currentQuestion] = answers[questionId] ? 'Answered' : 'Not Answered';
      setQuestionStatus(updatedStatus);
    } else {
      setReviewQuestions(prevReviews => [...prevReviews, questionId]);
      const updatedStatus = [...questionStatus];
      updatedStatus[currentQuestion] = 'Marked';
      setQuestionStatus(updatedStatus);
    }
  };

  const handleNavigation = (direction) => {
    if (direction === 'next' && currentQuestion < quizData.length - 1) {
      setCurrentQuestion(prevQuestion => prevQuestion + 1);
    } else if (direction === 'prev' && currentQuestion > 0) {
      setCurrentQuestion(prevQuestion => prevQuestion - 1);
    }
  };

  const handlePaletteClick = (index) => {
    setCurrentQuestion(index);
  };

  const handleSubmit = () => {
    const confirmed = window.confirm("Are you sure you want to submit?");
    if (confirmed) {
      setSubmitted(true);
    }
  };

  return (
    <>
      <div className={dashboardStyle['main-wrapper']}>
        <Header />
        <Sidebar />
        <div className={dashboardStyle['page-wrapper']}>
          <div className="container">
            <PageRefreshWarning />
            <div className="section mt-5">
              <div className="question-info mt-5">
              {quizData[currentQuestion] ? (
                  <h4>Type : {quizData[currentQuestion].type}</h4>
                ) : (
                  <p>Question not available</p>
                )}
                <h3>Question No {currentQuestion + 1}</h3>
                {quizData[currentQuestion] ? (
                  <p>{quizData[currentQuestion].question}</p>
                ) : (
                  <p>Question not available</p>
                )}
                <div className="options">
                  {quizData[currentQuestion] && quizData[currentQuestion].options ? (
                    quizData[currentQuestion].options.map((option, index) => (
                      <div key={index}>
                        <input
                          type="radio"
                          id={`question-${quizData[currentQuestion].id}-option-${index}`}
                          name={`question-${quizData[currentQuestion].id}-option-${index}`}
                          value={option}
                          checked={answers[quizData[currentQuestion].id] === option}
                          onChange={() => handleAnswer(quizData[currentQuestion].id, option)}
                        />
                        <label htmlFor={`question-${quizData[currentQuestion].id}-option-${index}`}>{option}</label>
                      </div>
                    ))
                  ) : (
                    <p>Options not available</p>
                  )}
                </div>
                <div className="button_menu">
                  {quizData[currentQuestion] ? (
                    <button
                      className="btn review-next button"
                      onClick={() => handleReview(quizData[currentQuestion].id)}
                    >
                      {reviewQuestions.includes(quizData[currentQuestion].id) ? 'Unmark Review' : 'Mark For Review'}
                    </button>
                  ) : (
                    <p>Question not available</p>
                  )}
                  <button className='btn btn-sm clear-response' onClick={handleClearAnswer}>Clear Response</button>
                  <button className='btn btn-sm save_prev' onClick={() => handleNavigation('prev')} disabled={currentQuestion === 0}>
                    Previous
                  </button>
                  <button className='btn btn-sm save_next' onClick={() => handleNavigation('next')} disabled={currentQuestion === quizData.length - 1}>
                    Next
                  </button>
                </div>
              </div>
              <div className="sidebar">
                <div className="timer">
                  <p>Time Left: {Math.floor(timeLeft / 60)}:{timeLeft % 60 < 10 ? '0' : ''}{timeLeft % 60}</p>
                  <p>Candidate</p>
                </div>
                <div className="question-palette">
                  {/* <h2>You are viewing Verbal Ability Section</h2> */}
                  <div className="palette">
                    {quizData.map((_, index) => {
                      const status = questionStatus[index] ? questionStatus[index].toLowerCase().replace(' ', '-') : '';
                      return (
                        <div
                          key={index}
                          className={`palette-item ${status}`}
                          onClick={() => handlePaletteClick(index)}
                        >
                          {index + 1}
                        </div>
                      );
                    })}
                  </div>
                  <div className="legend">
                    <h3>Legend:</h3>
                    <div className="legend-item">
                      <div className="legend-color answered"></div>
                      <span>Answered</span>
                    </div>
                    <div className="legend-item">
                      <div className="legend-color not-answered"></div>
                      <span>Not Answered</span>
                    </div>
                    <div className="legend-item">
                      <div className="legend-color marked"></div>
                      <span>Marked</span>
                    </div>
                    <div className="legend-item">
                      <div className="legend-color not-visited"></div>
                      <span>Not Visited</span>
                    </div>
                  </div>
                </div>
                <div className="buttons">
                  <button>Profile</button>
                  <button>Instructions</button>
                  <button>Question Paper</button>
                  <button onClick={handleSubmit}>Submit</button>
                </div>
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

export default Exampage;








