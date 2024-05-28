import React from "react";
import "./instruction.module.css";
import { useNavigate } from 'react-router-dom';
import Header from "../layouts/Header/Header.jsx";
import Footer from "../layouts/Footer/Footer.jsx";
import Sidebar from "../layouts/Sidebar/Sidebar.jsx";
import dashboardStyle from "../dashboard/dashboard.module.css"
import { Link , useParams} from "react-router-dom";
const Instruction1 =() =>{


  const { id, subjectId, ChapterId, timeLimit , Difficulty} = useParams();
  const navigate = useNavigate();
   const submit =()=>{
    navigate('/dashboard/exam');
   }
   return (<>

<div className={dashboardStyle['main-wrapper']}>
		
    <Header/>
     <Sidebar/>
     <div className={dashboardStyle['page-wrapper']}>
     <p>TCS Open SeeSame-TCS Practice Test</p>
<h5>General Instructions:</h5>
<ol type="1">
  <li>Total duration of examination is 90 minutes.</li>
  <li>The clock will be set at the server. The countdown timerin the top right corner of screen will display the remaining time available for you to complete the examination. When the timer reaches zero, the examination will end by itself. You will not be required to end or submit your examination.</li>
  <li>The Question Palette display on the right side of screen will show the status of each question using one of the following symbols:
    <ol type="1">
      <li>You have not visited the question yet.</li>
      <li>You have not answered the question</li>
      <li>You have answerd then question.</li>
      <li>You have NOT answered the question, but have marked then question for review.</li>
      <li>You have answered the question, but marked it for reivew.</li>
    </ol>
  </li>
  
</ol>
<p>The Marked for Reviews status for a question simply indicates that you would like to look at that question again. <span style={{"color":"red"}}>If a question is answered and Marked for Reivews, your answer for that question will be considered in the evaluation.</span> </p>

<h5>Navigatiting to a Question:</h5>
<ol type="4">
  <li>To answer a question, do the following</li>
  {/* <li> */}
      <ol type="a">
      <li>Click on the question number in the Question Palette to go to that question directly.</li>
      <li> Select an answer for a multiple choice type question. Use the virtual numeric keypad to enter a number as answer for a numerical type question.</li>
      <li>Click on (Save & Next) to save your answer for the current question and then got the next question.</li>
      <li>Click on (Mark for Review & Next) to save your answer for the current question, mark it for reivew, and then go to the next question.</li>
      <li style={{"color":"red"}}>Caution: Note that your answer for the current question will not be saved, if you navigate to another question directly by clicking on it s question number</li></ol>
      {/* </li> */}
</ol>


<p>5. You can view the question by clicking on the (Question Paper) button. Note that the options for multiple choice type questions will not be shown.</p>

<h5>Answering a Question:</h5>

  <ol>
    <li>Procedure for answering a multiple choice type question:</li>
      <ol>
      <li>To select your answer, click on the button of one of the options</li>
      <li>To deselect your chosen answer, click on the button of the chosen option again or click on the (Clear Response) button</li>
      <li>To change your chosen answer, click on the button of another option.</li>
      <li>To save your answer, you MUST click on the (Save & Next) button</li>
      <li>To mark the question for review click on the (Mark for Review & Next) button. If an answer is selected for a question that is Marked for Reivew, that answer will be considered in the evaluation.</li>
      <li>To change your answer to a question that has already been answered, first select that question for answering and then follow the procedure for answering that type of question.</li>
      <li>Note: that ONLY Quesstions for which answers are saved or marked for reivew after answering will be considered for evalution.
      Next</li>
  </ol>

  </ol>

<Link to={`/dashboard/instruction/${id}/${subjectId}/${ChapterId}/${timeLimit}/${Difficulty}`}  className="btn next btn-sm" id="next" style={{"border": "1px solid gray","padding": "7px","color": "white", "backgroundColor": "#1976D2","marginBottom": "14px"}}  onClick={submit}>Next</Link>
{/* <button>Next</button> */}

  
  </div>
   {/* <Footer/> */}
</div>
<br/>
<br/>




  
   </>)
}
export default Instruction1;