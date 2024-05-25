import React from 'react';
import './ExamPage.css'; // Import this if you separate the CSS into an App.css file

function Exampage() {
  return (
    <div className="container">
      
      <div className="section">
        <div className="question-info">
          <h2>Question type: Short Answer</h2>
          <h3>Question No 1.</h3>
          <p>As a Project Leader, write an email to your customer, Mr. Gill Roy, explaining delay to the project. Sign the email as Maria</p>
          <p><strong>Outline:</strong></p>
          <ul>
            <li>Payment processing system - schedule - Tenth May (Friday) - Unexpected power outage - three days - overall delay - seven days - includes recovery of lost work - will not recur</li>
          </ul>
          <p><strong>Important Instructions:</strong></p>
          <ul>
            <li>It is compulsory to use all the specific words mentioned in the Outline in your email. You can add other sentences of your choice, as appropriate.</li>
            <li>The name of the sender and receiver should be as given</li>
            <li>The email must contain a minimum of fifty words, or it will not be evaluated at all.</li>
            <li>If the outline is not strictly followed (including the specific words used), or correct English (including spelling and grammar) is not used, the grade in this section will be poor.</li>
          </ul>
          {/* <textarea placeholder="Write your email here..."></textarea> */}
          <div class="input-block row">
             <div class="col-lg-9">
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="gender" id="gender_male" value="option1" checked/>
                <label class="form-check-label" for="gender_male">
                option 1
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="gender" id="gender_female" value="option2"/>
                <label class="form-check-label" for="gender_female">
                option 2
                </label>
              </div>
            </div>
					</div>

          <div className='button_menu'>
            <button className='btn  review-next button'> Mark for Review & Next</button>
            <button className='btn btn-sm clear-response'>Clear Response</button>
            <button className='btn  btn-sm save_next'>Save & Next</button>
         
          </div>
         
          
        </div>
        <div className="sidebar">
          <div className="timer">
            <p>Time Left : 15 : 30</p>
            <p>Candidate</p>
          </div>
          <div className="question-palette">
            <h2>You are viewing Verbal Ability Section</h2>
            <div className="palette">
              {Array.from({ length: 20 }, (_, i) => (
                <div key={i} className="palette-item">{i + 1}</div>
              ))}
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
            <button>Submit</button>
          </div>
          <br></br>
          <br />
        </div>
      </div>
     </div>
    
  );
}

export default Exampage;








