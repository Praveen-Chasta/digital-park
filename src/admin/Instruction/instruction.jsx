import React, {  useCallback, useEffect } from "react";
import Header from "../layouts/Header/Header.jsx";
import Sidebar from "../layouts/Sidebar/Sidebar.jsx";
// import dashboardStyle from "../dashboard/dashboard.module.css"
import { Link , useParams} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { startExamReducer } from "../exam/ExamSlice.jsx";
import "./instruction.module.css";
import "./instruction.css";

const Instruction =()=>
  {
    
  const { id, subjectId, ChapterId, timeLimit, Difficulty, no_of_question } = useParams();

  const dispatch = useDispatch();
  const handleStartExam = useCallback(() => {
    dispatch(
      startExamReducer({
        class: id,
        subject: subjectId,
        chapter: ChapterId,
        difficulty_level:Difficulty,
        no_of_question:no_of_question,
        duration:timeLimit

      })
    );
  }, [dispatch, id, subjectId, ChapterId, Difficulty, no_of_question, timeLimit]);


     return(
     <>

{/* <div className={dashboardStyle['main-wrapper']}> */}
		<div className="ins-container">
          <Header/>
			     <Sidebar/>
		       {/* <div className={dashboardStyle['page-wrapper']}> */}

          <div className="col-xl-9 col-lg-9  instructions-top-container">
             
             <p>This is a Practice Test to get you familiarize with the test format and some tof the concepts that may be used. The question paper displayed is for practice purposes only. Under no circumstances should it be presumed as a sample paper.</p>

            <h5> A. Test Format</h5>
             <ol type="1" className="col-xl-10 col-lg-10">  
            <li>The TCS Aptitude Test has 2 sections - (Verbal Ability and Analytical Ability). The Verbal Ability Section has 1 question and the Analytical Ability Section has 30 questions.</li> 
            <li> The test will begin with the Verbal Ability Section first and then move to the Analytical Ability Section. The section are sequential and you cannot back to the Verbal Analytical Ability Section once you move to the next section.</li>
           <li>  The test duration for the Verbal Ability Section is (10 minutes) and for the Analytical Ability Section is (80 minutes).</li>
             <li> The countdown timer displayed on the test screen will help you monitor the time you have to complete each section.
           </li>
           <li>There are separate timers for each section and the timer will start the moment you see the first question on the screen.</li>
            <li> The test duration for each section is fixed. If you complete the Verbal Ability Section in less than 10 minutes, the left over time will (NOT) be carried forward to the Analytical Ability Section.</li>
             <li> To exit the test, click on the Submit button on the test screen. Clicking Submit in the Verbal Ability Section, will move you to the Analytical Ability Section. Clicking Submit in the Analytical Ability Section, will exit you form the test.</li>
             <li> You can refer tot the test instructions at any point in time during the test, by clicking on the Instructions button on the test screen.</li>
             </ol>
            
             <h5>B. Verbal Ability Section</h5> 
             <ol type="1" className="col-xl-10 col-lg-10">
               <li>Read the question and all instructions in this section carefully.</li>
               <li>To answer the question, enter free text in the space provided.</li>
               <li>You will be automatically logged out of the Verbal Ability Section on completion of 10 minutes. The text entered by you will be submitted and taken as the final answer.</li>
               <li>Negative making is (NOT) applicable to this section.</li>
               <li> Click Save & Next button at regular intervals to save the text that you are typing. Note that Verbal Ability Section has only one question and hence clicking Save & Next not take you to the next question or section, it will only save your answer. If you have completed the Verbal Ability Section and have saved your answer, click on Submit to move to the next section.</li>
             </ol>
            
             <h5>C. Analytical Ability Section</h5>  
               <ol type="1" className="col-xl-10 col-lg-10">
                 <li>This section has multiple choice question.</li>
                 <li>The Analytical Ability Section has two sub-section A and Section B.</li>
                 <li>Section A has 28 question, both carrying equal marks.</li>
                 <li>Section B has 2 questions, both carrying equal marks, However, question in Section B Carry higher marks than questions in Section A.</li>
                 <li>Negative marking is applicable to this section. Please avoid guessing answers.</li>
                 <li>An online scientific calculator has been provided on the test screen for your use. You are permitted to use your own scientific calculator, if you wish.</li>
               </ol>
            <h5>  D. Additional Instructions applicable to the actual TCS Online Aptitude Test</h5>
             <ol className="col-xl-10 col-lg-10">
             <li>Your performance in both Verbal and Analytical Ability Sections will be considered for shortlisting.</li>
             <li>Please refrain form using function keys on your keyboard as it will lock you out of the test.</li>
             <li>In case you get locked out/face any technical issues/require any assistance during the test, please connect with the coordinators at the examination center.</li>
             <li>Rough sheets will be provided to you. All rough sheets should be submitted back to the coordinators before leaving the exam center.</li>
             <li>Talking use of mobile phones, sharing stationary etc, is not permitted during the test and can disqualify you from appearing for TCS selections process.</li>
             <li> You are permitted to leave the examination center only after you have submitted your test.
            </li>
             </ol>
             <h1> All the Best!</h1><br></br>
             <div className="d-flex align-item-center ">
              <input type="checkbox"  name  ="checkbox" className="instruction-checkbox"  />
              <label htmlFor="checkbox" className="instruction-label"> The computer provided to me is in proper working condition. I have read and understood the instruction given above.
              Previous
              I'm ready to Begin</label>
             </div>
             <br></br>
            <div className="d-flex align-item-center">
            <button className="instruction-previous-button">Previous</button>
              <button className="border-0"> <Link to={`/dashboard/exam/${id}/${subjectId}/${ChapterId}/${timeLimit}/${Difficulty}/${no_of_question}`} class="instruction-ready-button" style={{"padding":"10px","padding-top":"13px",'color':"white",'text-align':'center',}} onClick={handleStartExam}>I'm ready to Begin</Link></button>
            </div>
               {/* <button >Start</button> */}
            <br/>
          </div>  
				
				{/* </div> */}
			</div>
			<br/>
			<br/>


           
        </>);
  }
  export default Instruction;