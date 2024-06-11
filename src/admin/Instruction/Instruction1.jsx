import React from "react";
// import "./instruction.module.css";
import { useNavigate } from 'react-router-dom';
import Header from "../layouts/Header/Header.jsx";
import Sidebar from "../layouts/Sidebar/Sidebar.jsx";
// import dashboardStyle from "../dashboard/dashboard.module.css"
import { Link , useLocation} from "react-router-dom";
import "./instruction-1.css"
import useBlockNavigation from "../exam/BlockNavigation.jsx";
const Instruction1 =() =>{

  useBlockNavigation();
  const location = useLocation();
  let { id, subjectId, ChapterId, timeLimit, Difficulty, no_of_question } = location.state || {};

  const navigate = useNavigate();
   const submit =()=>{
    navigate('/instruction', {
      state: { id, subjectId, ChapterId, timeLimit, Difficulty, no_of_question }
    });
   }

    const handlePrevious=()=>{
      navigate(`/classes/${id}`);
    }
   return (<>

{/* <div className={dashboardStyle['main-wrapper']}> */}

<div className="instruction-1-top-container">

    <Header/>
     <Sidebar/>
     {/* <div className={dashboardStyle['page-wrapper']}> */}
     <div className="col-xl-9 col-lg-9 instruction-1-main-container">
        <div className="instruction-1-practise-test-container d-flex justify-content-between align-item-center col-xl-12 col-lg-11">
          <p >TCS Open SeeSame-TCS <br/>Practice Test</p>
          <img src ="https://res.cloudinary.com/dp3nahxbi/image/upload/v1717745835/Aare_ir83it.svg" alt = "img"/>
        </div>
          <h5 className="h5">General Instructions:</h5>
          <ol start="1" className="instruction-1-practise-ol-list">
            <li>Total duration of examination is 90 minutes.</li>
            <li>The clock will be set at the server. The countdown timerin the top right corner of screen will display the remaining time available for you to complete the examination. When the timer reaches zero, the examination will end by itself. You will not be required to end or submit your examination.</li>
            <li>The Question Palette display on the right side of screen will show the status of each question using one of the following symbols:
              <ol >
                <li className = "d-flex align-item-center mb-3 mt-4" style = {{"list-style-type":"none"}}><div className="ol-1-li-1">1</div> You have not visited the question yet.</li>
                <li className = "d-flex align-item-center mb-3" style = {{"list-style-type":"none"}}><span className="ol-1-li-2">3</span> You have not answered the question</li>
                <li className = "d-flex align-item-center mb-3" style = {{"list-style-type":"none"}}><span className="ol-1-li-3">5</span> You have answerd then question.</li>
                <li className = "d-flex align-item-center mb-3" style = {{"list-style-type":"none"}}><span className="ol-1-li-4">7</span> You have NOT answered the question, but have marked then question for review.</li>
                <li className = "d-flex align-item-center mb-3" style = {{"list-style-type":"none"}}><span className="ol-1-li-5">9</span> You have answered the question, but marked it for reivew.</li>
              </ol>
            </li>
            
          </ol>
          <p className="instrucion-1-para-element">The Marked for Reviews status for a question simply indicates that you would like to look at that question again. <span className="instrucion-1-span-element">If a question is answered and Marked for Reivews, your answer for that question will be considered in the evaluation.</span> </p>

          <h5 className="instrucion-1-h5">Navigatiting to a Question:</h5>
          <ol start="4" className="instruction-1-practise-ol-list">
            <li>To answer a question, do the following</li>
            {/* <li> */}
                <ol type="a">
                  <li>Click on the question number in the Question Palette to go to that question directly.</li>
                  <li> Select an answer for a multiple choice type question. Use the virtual numeric keypad to enter a number as answer for a numerical type question.</li>
                  <li>Click on (Save & Next) to save your answer for the current question and then got the next question.</li>
                  <li>Click on (Mark for Review & Next) to save your answer for the current question, mark it for reivew, and then go to the next question.</li>
                  <li className="li">Caution: Note that your answer for the current question will not be saved, if you navigate to another question directly by clicking on it s question number</li>
                </ol>
                {/* </li> */}
                <li> You can view the question by clicking on the (Question Paper) button. Note that the options for multiple choice type questions will not be shown.</li>
          </ol>


          

          <h5 className="instrucion-1-h5">Answering a Question:</h5>

            <ol start="6" className="instruction-1-practise-ol-list">
              <li>Procedure for answering a multiple choice type question:</li>
                <ol type="a">
                <li>To select your answer, click on the button of one of the options</li>
                <li>To deselect your chosen answer, click on the button of the chosen option again or click on the (Clear Response) button</li>
                <li>To change your chosen answer, click on the button of another option.</li>
                <li>To save your answer, you MUST click on the <span className="ol-li-4">(Save & Next) </span>button</li>
                <li>To mark the question for review click on the<span className="ol-li-4"> (Mark for Review & Next) </span>button. If an answer is selected for a question that is Marked for Reivew, that answer will be considered in the evaluation.</li>   
            </ol>
              <li>To change your answer to a question that has already been answered, first select that question for answering and then follow the procedure for answering that type of question.</li>
                  <li>Note: that ONLY Quesstions for which answers are saved or marked for reivew after answering will be considered for evalution.
                  Next</li>
            </ol>
          <button className="border-0"  onClick={handlePrevious}><Link  className="instruction-1-link" id="next" style={{"padding": "7px", "padding":"15px","margin-right":"10px","color": "white", "backgroundColor": "#1976D2","marginBottom": "14px"}} >Previous</Link></button>

          <button className="border-0"  onClick={submit}><Link  className="instruction-1-link" id="next" style={{"padding": "7px", "padding":"15px","color": "white", "backgroundColor": "#1976D2","marginBottom": "14px"}} >Next</Link></button>
          {/* <button>Next</button> */}

        </div>
      
</div>
      {/* <br/>
      <br/> */}




  
   </>)
}
export default Instruction1;