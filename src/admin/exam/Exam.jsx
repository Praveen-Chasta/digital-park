import React, { lazy, Suspense } from 'react';
import Header from "../layouts/Header/Header.jsx";

import {  useParams, useLocation } from "react-router-dom";
const ExamPage = lazy(() => import('./Exampage.jsx'));
function Exam() {
    const location = useLocation();

    let { id, subjectId, ChapterId, timeLimit, Difficulty, no_of_question, quizData, startExam } = location.state || {};
    console.log(" exam quizData", quizData);
  return (
    <>
     <Header/>
     <Suspense fallback={<div>Loading...</div>}>
        <ExamPage 
          id={id} 
          subjectId={subjectId} 
          ChapterId={ChapterId} 
          timeLimit={timeLimit} 
          Difficulty={Difficulty} 
          no_of_question={no_of_question} 
          quizData={quizData}
          startExam={startExam}
        />
      </Suspense>
    </>
  )
}

export default Exam
