import React, { useState, useCallback, useEffect } from "react";
import './ExamPage.css'; // Import this if you separate the CSS into an App.css file
import Header from "../layouts/Header/Header.jsx";
import Footer from "../layouts/Footer/Footer.jsx";
import Sidebar from "../layouts/Sidebar/Sidebar.jsx";
import dashboardStyle from "../dashboard/dashboard.module.css"
import {  useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addResultReducer, getResultReducer, quizQuestionsReducer, finalSubmitReducer, quizResultReducer } from "./ExamSlice.jsx";
import PageRefreshWarning from "./PageRefreshWarning.jsx";
import { useNavigate } from 'react-router-dom';

function Exampage() {

  let { id, subjectId, ChapterId, timeLimit, Difficulty } = useParams();

  const quizData = useSelector((state) => state.quizQuestions.examQuestions) || [];
  const startExam = useSelector((state) => state.quizQuestions.startExam);

  const getQuestionResult = useSelector((state) => state.quizQuestions.getResult) || [];
  const finalSubmit = useSelector((state) => state.quizQuestions.finalSubmit) || [];
  const quizResult = useSelector((state) => state.quizQuestions.quizResult) || [];
  

  timeLimit = timeLimit * 60;
  const autoSubmitDelay = 30000; // auto-submit delay in milliseconds (30 seconds)

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [QuestionId, setQuestionId] = useState(quizData[currentQuestion]?.id ?? 0);
  const [isReview, setIsReview] = useState(0);
  const [resultId, setResultId] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [answers, setAnswers] = useState({});
  const [reviewQuestions, setReviewQuestions] = useState([]);
  const [timeLeft, setTimeLeft] = useState(timeLimit);
  const [submitted, setSubmitted] = useState(false);
  const [questionStatus, setQuestionStatus] = useState(
    quizData.map(() => 'Not Visited')
  );
  const [questionStatusId, setQuestionStatusId] = useState('4');
  const [currentTime, setCurrentTime] = useState('');
  

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const formattedTime = formatDate(now);
      setCurrentTime(formattedTime);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatDate = (date) => {
    const padZero = (num) => (num < 10 ? `0${num}` : num);

    const day = padZero(date.getDate());
    const month = padZero(date.getMonth() + 1); // Months are zero-indexed
    const year = date.getFullYear();
    const hours = padZero(date.getHours());
    const minutes = padZero(date.getMinutes());
    const seconds = padZero(date.getSeconds());

    return `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
  };


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


  const getQuizResult = useCallback(async () => {
    try {
      dispatch(
        quizResultReducer({
          //user_type: "admin",
          quiz_id:startExam.id,
        })
      );
    } catch (error) {
      console.error("Failed to fetch quiz questions:", error);
    }
  }, [dispatch,startExam.id]);


  const getResultList = useCallback(async () => {
    try {
      dispatch(
        getResultReducer({
          quiz_id:startExam.id,
          question:  startExam.questions.length > 0 ? startExam.questions : [""]
        })
      );
    } catch (error) {
      console.error("Failed to fetch quiz questions:", error);
    }
  }, [dispatch, startExam.id, startExam.questions]);

 

  const examSubmit = useCallback(async () => {
    try {
      dispatch(
        finalSubmitReducer({
          quiz_id:startExam.id,
          end_time:currentTime,
          status:1
        })
      );
        setSubmitted(true);

    } catch (error) {
      console.error("Failed to fetch quiz questions:", error);
    }
  }, [dispatch, startExam.id, currentTime]);

  const handleNextAddResult = useCallback(() => {
    dispatch(
      addResultReducer({
          id: resultId,
          quiz_id: startExam.id,
          question_id: QuestionId,
          correct: selectedOption,
          is_review: isReview,
          question_status: questionStatusId,
      
      })
    );
  }, [dispatch, resultId, startExam.id, QuestionId, selectedOption,isReview, questionStatusId]);


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

    setQuestionStatusId("1");
  };

  const handleClearAnswer = () => {
    const updatedAnswers = { ...answers };
    delete updatedAnswers[quizData[currentQuestion]?.id];
    setAnswers(updatedAnswers);
    const updatedStatus = [...questionStatus];
    updatedStatus[currentQuestion] = 'Not Answered';
    setQuestionStatus(updatedStatus);

    setQuestionStatusId("2");
  };

  const handleReview = (questionId) => {
    if (reviewQuestions.includes(questionId)) {
      setReviewQuestions(prevReviews =>
        prevReviews.filter(id => id !== questionId)
      );
      const updatedStatus = [...questionStatus];
      updatedStatus[currentQuestion] = answers[questionId] ? 'Answered' : 'Not Answered';
      setQuestionStatus(updatedStatus);

    
      const updatedStatusId= answers[questionId] ? '1' : '2';
      setQuestionStatusId(updatedStatusId);
    } else {
      setReviewQuestions(prevReviews => [...prevReviews, questionId]);
      const updatedStatus = [...questionStatus];
      updatedStatus[currentQuestion] = 'Marked';
      setQuestionStatus(updatedStatus);

      setQuestionStatusId("3");
    }
  };

  const handleNavigation = (direction) => {
    setIsReview(0); 
    if (direction === 'next' && currentQuestion < quizData.length - 1) {
      setCurrentQuestion(prevQuestion => prevQuestion + 1);
    } else if (direction === 'prev' && currentQuestion > 0) {
      setCurrentQuestion(prevQuestion => prevQuestion - 1);
    }
  };

  const handlePaletteClick = (index) => {
    setIsReview(0); 
    setCurrentQuestion(index);
  };


    const handleSubmit = useCallback(() => {
      const confirmed = window.confirm("Are you sure you want to submit?");
      if (confirmed) {
        dispatch(
          addResultReducer({
              id: resultId,
              quiz_id: startExam.id,
              question_id:QuestionId,
              correct:selectedOption,
              is_review:isReview,
              question_status:questionStatusId
          }),
        );
      
        setSubmitted(true);
        getQuizResult();

      }}, [dispatch,resultId, startExam.id, QuestionId,selectedOption, isReview, questionStatusId]);
      
   
      const handleResultId = () => {


       
        if (getQuestionResult.length > 0 ) {
          setResultId(getQuestionResult[currentQuestion].id);

        }else{
          setResultId(0);

        }
      
      }
      const navigate = useNavigate();
      
      if (submitted) {
        navigate('/result')
    }
     


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
                  <p onChange={() => {setQuestionId(quizData[currentQuestion].id);  }}>{quizData[currentQuestion].question}</p>
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
                          onChange={() =>{ handleAnswer(quizData[currentQuestion].id, option); setSelectedOption(`option${index+1}`); setQuestionId(quizData[currentQuestion].id);}}
                        />
                        <label htmlFor={`question-${quizData[currentQuestion].id}-option-${index}`} >{option}</label>
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
                      onClick={() =>{ handleReview(quizData[currentQuestion].id); setQuestionId(quizData[currentQuestion].id); reviewQuestions.includes(quizData[currentQuestion].id) ? setIsReview(0) : setIsReview(1);}}
                    >
                      {reviewQuestions.includes(quizData[currentQuestion].id) ? 'Unmark Review' : 'Mark For Review'}
                    </button>
                  ) : (
                    <p>Question not available</p>
                  )}
                  <button className='btn btn-sm clear-response' onClick={() => { handleClearAnswer(); setQuestionId(quizData[currentQuestion].id);}}>Clear Response</button>
                  <button className='btn btn-sm save_prev' onClick={() => {handleNavigation('prev'); getResultList();}} disabled={currentQuestion === 0}>
                    Previous
                  </button>
                  <button className='btn btn-sm save_next'
                    onClick={() =>{ 
                      handleNavigation('next');
                      getResultList();
                      handleNextAddResult();
                      handleResultId();
                    }} disabled={currentQuestion === quizData.length - 1}>
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
                          onClick={() => {handlePaletteClick(index)}}
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
                  <button onClick={() =>{examSubmit(); handleSubmit();}}>Submit</button>
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








