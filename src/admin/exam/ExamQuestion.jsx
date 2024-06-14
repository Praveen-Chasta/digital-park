import Header from "../layouts/Header/Header.jsx";
import "./ExamQuestion.css";
import React, { useState, useCallback, useEffect, useLayoutEffect } from "react";
import {  useParams, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addResultReducer, getResultReducer, quizQuestionsReducer, finalSubmitReducer, quizResultReducer, resultReducer , startExamReducer, quizAnswerReducer, quizAnswerStatusReducer} from "./ExamSlice.jsx"
import PageRefreshWarning from "./PageRefreshWarning.jsx";
import { useNavigate } from 'react-router-dom';
import useBlockNavigation from "./BlockNavigation.jsx";

function ExamQuestion(){
    const dispatch = useDispatch();
    
    const location = useLocation();

    const navigate = useNavigate();

  // const quizAnswer = useSelector((state) => state.quizQuestions.quizAnswer);
  const quizStatus = useSelector((state) => state.quizQuestions.quizStatus) || [];
    let { id, subjectId, ChapterId, timeLimit, Difficulty, no_of_question } = location.state || {};
  
  const quizData = useSelector((state) => state.quizQuestions.examQuestions) || [];
  const startExam = useSelector((state) => state.quizQuestions.startExam);

  const getQuestionResult = useSelector((state) => state.quizQuestions.getResult) || [];
  const finalSubmit = useSelector((state) => state.quizQuestions.finalSubmit) || [];
  const quizResult = useSelector((state) => state.quizQuestions.quizResult) || [];
  
  console.log("First", timeLimit)
  let time
  time = timeLimit * 60;
  const autoSubmitDelay = 30000; // auto-submit delay in milliseconds (30 seconds)

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [QuestionId, setQuestionId] = useState(quizData[currentQuestion]?.id ?? 0);
  const [isReview, setIsReview] = useState(0);
  const [resultId, setResultId] = useState();
  const [selectedOption, setSelectedOption] = useState("");
  const [answers, setAnswers] = useState({});
  const [reviewQuestions, setReviewQuestions] = useState([]);
  const [timeLeft, setTimeLeft] = useState(time);
  const [submitted, setSubmitted] = useState(false);
  const [questionStatus, setQuestionStatus] = useState(
    quizData.map(() => '4')
  );
  const [questionStatusId, setQuestionStatusId] = useState(4);
  const [currentTime, setCurrentTime] = useState('');

  const [examData, setExamData] =  useState(false);

  console.log("start exam", startExam);
  const initiateExam = useCallback(() => {
    dispatch(
      startExamReducer({
        class: id,
        subject: subjectId,
        chapter: ChapterId,
        difficulty_level:Difficulty,
        no_of_question:no_of_question,
        duration:timeLeft

      })
    );
    console.log("000000");
    // navigate('/exam', {
    //   state: { id, subjectId, ChapterId, Difficulty, no_of_question }  //timeLimit
    // });
  }, [dispatch, id, subjectId, ChapterId, Difficulty, no_of_question]); // timeLimit

  // useEffect(() => {
  //   const hasRenderedBefore = localStorage.getItem('hasRenderedBefore');
    
  //   // Check if component has rendered before
  //   if (hasRenderedBefore) {
  //     // Call initiateExam on reload
  //     if (startExam === null || startExam.length === 0) {
        
  //     initiateExam();
  //     }else{
  //       getAllQuestionList();
  //     }
  //   } else {
  //     // Mark that component has rendered
  //     localStorage.setItem('hasRenderedBefore', true);
  //   }
  // }, []);
  

  useEffect(() => {
    // let mounted = true;

    // if (mounted) {  
    //   if(startExam === null || startExam.length === 0){
    //   initiateExam();
    //   }
    //   else{
    //     getAllQuestionList();
    //   }
    // }

    // return () => {
    //   mounted = false;
    // };


    console.log(examData);
    if (examData === false) {
      
      console.log("03333", startExam);
      if(startExam === null || startExam.length === 0){
        setExamData(true);
        initiateExam();
        console.log("22222");
      }else{
        setExamData(true);
      }
      
    }
    if(examData === true){
      console.log("0....2525", startExam);
      if(startExam != null){
        console.log("11111");
        setExamData(true);
        getAllQuestionList();
      }
    }
  
  },[]);


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


  // const getAllQuestionList = useCallback(async () => {
  //   try {
  //     if (startExam && startExam.questions && startExam.questions.length > 0) {
  //       let params = {
  //         quiz_id: startExam.id,
  //         questions: startExam.questions
  //       };
  
  //       dispatch(quizQuestionsReducer(params));
  //     } else {
  //       console.log('startExam.questions is not yet populated or is empty.');
  //       // Handle the case where questions are not available yet
  //     }
  //   } catch (error) {
  //     console.error("Failed to fetch quiz questions:", error);
  //   }
  // }, [dispatch, startExam]);
  
  // useEffect(() => {
  //   let mounted = true;
  
  //   if (mounted) {
  //     getAllQuestionList();
  //   }
  
  //   return () => {
  //     mounted = false;
  //   };
  // }, [getAllQuestionList]);

  const getAllQuestionList = useCallback(async () => {
    try {
    
      let params = {};
      // if(startExam === null || startExam.length === 0){
      //   initiateExam();
      //   }else {
      params.quiz_id = startExam.id;
      params.questions = startExam.questions;

    dispatch(quizQuestionsReducer(params));
  // } 

    } catch (error) {
      console.error("Failed to fetch quiz questions:", error);
    }
  }, [dispatch]);

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
    
      let params = {};
      if (startExam != null) {
        params.quiz_id = startExam.id;
      } 
      dispatch(quizResultReducer(params));
    } catch (error) {
      console.error("Failed to fetch quiz questions:", error);
    }
  }, [dispatch]);

  const getResult = useCallback(async () => {
    try {
    
      let params = {};
    
      if (startExam != null) {
        params.quiz_id = startExam.id;
      } 
      dispatch(resultReducer(params));
    } catch (error) {
      console.error("Failed to fetch quiz questions:", error);
    }
  }, [dispatch]);


  const getResultList = useCallback(async () => {
    try {
    
      let params = {};
    
      if (startExam != null) {
        params.quiz_id = startExam.id;
        params.question = startExam.questions;
      } 
  
      dispatch(getResultReducer(params));
    } catch (error) {
      console.error("Failed to fetch quiz questions:", error);
    }
  }, [dispatch]);

  useEffect(() => {

      getResultList();
      getResult();

  }, [getResultList, getResult]);


  
  // const getQuizAnswerList = useCallback(async () => {
  //   try {
  //     dispatch(
  //       quizAnswerReducer({
  //         quiz_id:startExam.id,
  //         question:  startExam.questions
  //       })
  //     );
  //   } catch (error) {
  //     console.error("Failed to fetch quiz questions:", error);
  //   }
  // }, [dispatch, startExam.id, startExam.questions]);

  // useEffect(() => {
  //   // let mounted = true;

  //   // if (mounted) {
  //     getQuizAnswerList();
  //   // }

  //   // return () => {
  //   //   mounted = false;
  //   // };
  // }, [getQuizAnswerList]);


    const getQuizStatusList = useCallback(async () => {
    try {

      let params = {};
    
      if (startExam != null) {
        params.quiz_id = startExam.id;
        params.questions = startExam.questions;
      } 
  
      dispatch(quizAnswerStatusReducer(params));
    } catch (error) {
      console.error("Failed to fetch quiz questions:", error);
    }
  }, [dispatch]);

  const examSubmit = useCallback(async () => {
    try {

        let params = {};

      if (startExam != null) {
        params.quiz_id = startExam.id;
        params.end_time= currentTime;
        params.status= 1;
      } 
      dispatch(finalSubmitReducer(params));

    } catch (error) {
      console.error("Failed to fetch quiz questions:", error);
    }
  }, [dispatch]);

  console.log("Initial timeLimit:", timeLimit);

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
  }, [dispatch, resultId, QuestionId, selectedOption,isReview, questionStatusId]);


  useEffect(() => {
    try {
      const storedAnswers = localStorage.getItem('quizAnswers');
      const storedReviewQuestions = localStorage.getItem('quizReviewQuestions');
      const storedCurrentQuestion = localStorage.getItem('quizCurrentQuestion');
      const storedTimeLeft = localStorage.getItem('quizTimeLeft');
      // const storedQuestionStatus = localStorage.getItem('quizQuestionStatus');

      getQuizStatusList();
      if (  storedReviewQuestions && storedCurrentQuestion && storedTimeLeft) {
        // setAnswers(JSON.parse(storedAnswers));
        setReviewQuestions(JSON.parse(storedReviewQuestions));
        setCurrentQuestion(parseInt(storedCurrentQuestion, 10));
        // setTimeLeft(parseInt(storedTimeLeft, 10));
        // setQuestionStatus(JSON.parse(storedQuestionStatus));
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
      // localStorage.setItem('quizQuestionStatus', JSON.stringify(questionStatus));
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
    updatedStatus[currentQuestion] = '1';
    setQuestionStatus(updatedStatus);

    setQuestionStatusId("1");
  };

  const handleClearAnswer = () => {
    const updatedAnswers = { ...answers };
    delete updatedAnswers[quizData[currentQuestion]?.id];
    setAnswers(updatedAnswers);
    const updatedStatus = [...questionStatus];
    updatedStatus[currentQuestion] = '2';
    setQuestionStatus(updatedStatus);

    setQuestionStatusId("2");
  };

  const handleReview = (questionId) => {
    if (reviewQuestions.includes(questionId)) {
      setReviewQuestions(prevReviews =>
        prevReviews.filter(id => id !== questionId)
      );
      const updatedStatus = [...questionStatus];
      updatedStatus[currentQuestion] = answers[questionId] ? '1' : '2';
      setQuestionStatus(updatedStatus);

    
      const updatedStatusId= answers[questionId] ? '1' : '2';
      setQuestionStatusId(updatedStatusId);
    } else {
      setReviewQuestions(prevReviews => [...prevReviews, questionId]);
      const updatedStatus = [...questionStatus];
      updatedStatus[currentQuestion] = '3';
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
        getResult();

      }}, [dispatch,resultId,  QuestionId,selectedOption, isReview, questionStatusId]);
      
   
      const handleResultId = () => {


        if (getQuestionResult.length > 0 ) {
          setResultId(getQuestionResult[currentQuestion].id);

        }else{
          setResultId(0);

        }
      }
     
      
      if (startExam != null) {
        const quiz_id=  startExam.id;
        // useEffect(() => {
          if (submitted === true) {
              navigate('/result', {
                  state: { quiz_id }
              });
          }
      // }, [submitted, navigate, quiz_id]);
      }
    
 
    const handleInstruction =()=>{
      navigate('/instruction', {
        state: { id, subjectId, ChapterId, timeLimit, Difficulty, no_of_question }
      });
     }
     const buttonStyle = {
      background: currentQuestion === 0 ? 'rgba(167, 205, 217, 1)' : 'rgba(0, 164, 216, 1)'
    };

    console.log("Time Left", timeLeft)
    
    return (
        <>
            <Header/>
            <div className="exam-question-top-container">
                <div className="container-fluid row">

                    <div className="col-xl-8 col-lg-12 exam-question-main-container">
                        <div className="exam-question-button-container mb-4">
                        {quizData[currentQuestion] ? (
                            <>
                            <button className="button-1">Verbal Ability</button>
                            <button className="button-2">Analytical Ability</button>
                            </>
                        ) : (
                            <p>Question not available</p>
                          )}
                        </div>
                        <div className="col-lg-12">
                            <h5 className="exam-question-heading">Sections</h5>
                            <div className="exam-question-type-container">
                               {quizData[currentQuestion] ? (
                
                                <p>Question type: {quizData[currentQuestion].type + ' Ability'}</p>
                            ) : (
                                <p>Question not available</p>
                              )}
                            </div>
                            <div className="col-lg-10">
                                  
                                  <h5 className="exam-question-heading">Question No {currentQuestion + 1}. </h5>
                                <hr/>
                                {quizData[currentQuestion] ? (
                                <p className="exam-question-paragraph"  onChange={() => {setQuestionId(getQuestionResult[currentQuestion].question_id); getResultList(); setResultId(getQuestionResult[currentQuestion].id); }}>{quizData[currentQuestion].question}</p>                                 
                            ) : (
                                <p className="exam-question-paragraph">Question not available</p>
                            )}
                            </div>
                            
                            <div className={'options'} style={{"marginLeft":"20px"}}>
                                {quizData[currentQuestion] && quizData[currentQuestion].options ? (
                                quizData[currentQuestion].options.map((option, index) => (
                                    <div key={index}>
                                    <input
                                        type="radio" style={{"marginRight":"20px"}}
                                        id={`question-${quizData[currentQuestion].id}-option-${index}`}
                                        name={`question-${quizData[currentQuestion].id}-option-${index}`}
                                        value={option}
                                        checked={answers[quizData[currentQuestion].id] === option }    // || quizData[currentQuestion].answer === `option${index}`
                                        onChange={() =>{ 
                                          handleAnswer(quizData[currentQuestion].id, option); 
                                          getResultList(); 
                                          setSelectedOption(`option${index+1}`);
                                          setQuestionId(getQuestionResult[currentQuestion].question_id);
                                          setResultId(getQuestionResult[currentQuestion].id);}}
                                    />
                                    <label htmlFor={`question-${quizData[currentQuestion].id}-option-${index}`} >{option}</label>
                                    </div>
                                ))
                                ) : (
                                <p>Options not available</p>
                                )}
                            </div>


                            <div className="exam-question-button-container mb-4">
                                {/* <div className="d-flex justify-content-between">
                                    <button className="button-3">Mark for Reivew & Next</button>
                                    <button className="button-4">Clear Response</button>
                                </div>
                                <button className="button-5">Save & Next</button> */}

                                {quizData[currentQuestion] ? (
                                    <button
                                    className= "button-3"
                                    onClick={() =>{ 
                                      handleReview(quizData[currentQuestion].id); 
                                      getResultList(); 
                                      setResultId(getQuestionResult[currentQuestion].id); 
                                      setQuestionId(getQuestionResult[currentQuestion].question_id); 
                                      reviewQuestions.includes(quizData[currentQuestion].id) ? setIsReview(0) : setIsReview(1);}}
                                    >
                                    {reviewQuestions.includes(quizData[currentQuestion].id) ? 'Unmark Review' : 'Mark For Review'}
                                    </button>
                                ) : (
                                    <p>Question not available</p>
                                )}
                                <button className="button-4" onClick={() => { 
                                  handleClearAnswer(); getResultList(); 
                                  setResultId(getQuestionResult[currentQuestion].id); 
                                  setQuestionId(getQuestionResult[currentQuestion].question_id);
                                  }}>Clear Response</button>
                                <button className="button-5" onClick={() => {
                                  handleNavigation('prev');    
                                  getResultList();  }} disabled={currentQuestion === 0} style={buttonStyle}>
                                    Previous
                                </button>
                                <button className= "button-5"
                                    onClick={() =>{ 
                                    handleNavigation('next');
                                    getResultList();
                                    handleNextAddResult();
                                    // handleResultId();
                                    }} disabled={currentQuestion === quizData.length - 1} 
                                    style={{"marginRight":"20px",background: currentQuestion === quizData.length - 1 ? 'rgba(167, 205, 217, 1)' : 'rgba(0, 164, 216, 1)'}}
                                    >
                                    Next
                                </button>
                            </div>
                        </div>
                    </div>


                    <div className=" col-xl-4 col-lg-6 exam-question-bottom-container">
                        <div className="exam-question-timer-container">
                                <div className="exam-question-profile-container">
                                    
                                </div>
                                <div className="exam-question-timer">
                                <h1>Time Left: {Math.floor(timeLeft / 60)}:{timeLeft % 60 < 10 ? '0' : ''}{timeLeft % 60}</h1>
                                    <p>Candidate</p>
                                </div>
                        </div>
                        <div className="exam-question-bottom-1-container"> 
                            <div className="exam-question-attempted-details mt-4">
                                {/* <h1>You are viewing Verbal Ability Section</h1> */}
                                {/* <hr/> */}
                                <p>Question Palette:</p>
                                <div className="exam-question-attempted-question-details-container">
                                    {/* <div className="cont-1">
                                        <p>1</p>
                                    </div> */}
                                    {quizData.map((_, index) => {
                                        const status = quizStatus[index] ? quizStatus[index] : '4';

                                        return (
                                            <p
                                            key={index}
                                            className={`cont-${status}`}
                                            onClick={() => {handlePaletteClick(index)}}
                                            >
                                            {index + 1}
                                            </p>
                                        );
                                        })}
                                </div>
                            </div>
                            <h1>Legend:</h1>
                            <div className="exam-question-result-container col-lg-12">
                                <div className="d-flex align-item-center col-lg-6">
                                    <div className="result-1"></div>
                                    <p className="mt-3">Answered</p>
                                </div>
                                <div className="d-flex align-item-center col-lg-6">
                                    <div className="result-2"></div>
                                    <p className="mt-3">Not Answered </p>
                                </div>
                                <div className="d-flex align-item-center col-lg-6">
                                    <div className="result-3"></div>
                                    <p className="mt-3">Marketd</p>
                                </div>
                                <div className="d-flex align-item-center col-lg-6">
                                    <div className="result-4"></div>
                                    <p className="mt-3">Not Visited</p>
                                </div>
                            </div>
                            <div className="exam-question-button-one-container col-lg-12">
                                <div className="d-flex align-item-center col-lg-6">
                                    <button className="button-one">Profile</button>
                                </div>
                                <div className="d-flex align-item-center col-lg-6">
                                    <button className="button-one"onClick={handleInstruction}>Instructions</button>
                                </div>
                                <div className="d-flex align-item-center col-lg-6">
                                    <button className="button-one">Question Paper</button>
                                </div>
                                <div className="d-flex align-item-center col-lg-6">
                                    <button className="button-two" onClick={() =>{examSubmit(); handleNextAddResult(); handleSubmit();}}>Submit</button>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </>
    )
}

export default ExamQuestion