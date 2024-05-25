import React from 'react';
import './ExamPage.css'; // Import this if you separate the CSS into an App.css file
import Header from "../layouts/Header/Header.jsx";
import Footer from "../layouts/Footer/Footer.jsx";
import Sidebar from "../layouts/Sidebar/Sidebar.jsx";
import dashboardStyle from "../dashboard/dashboard.module.css"
import { Link } from "react-router-dom";
function Exampage() {
  return (

    <>
      <div className={dashboardStyle['main-wrapper']}>

        <Header />
        <Sidebar />
        <div className={dashboardStyle['page-wrapper']}>
          <div className="container">

            <div className="section mt-5">
              <div className="question-info mt-5">
                <h3>Question No 1.</h3>
                <p>1.As a Project Leader, write an email to your customer, Mr. Gill Roy, explaining delay to the project. Sign the email as Maria</p>
               
                {/* <textarea placeholder="Write your email here..."></textarea> */}
                <div class="input-block row">
                  <div class="col-lg-9">
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="gender" id="gender_male" value="option1" checked />
                      <label class="form-check-label" for="gender_male">
                        option 1
                      </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="gender" id="gender_female" value="option2" />
                      <label class="form-check-label" for="gender_female">
                        option 2
                      </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="gender" id="gender_female" value="option2" />
                      <label class="form-check-label" for="gender_female">
                        option 3
                      </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="gender" id="gender_female" value="option2" />
                      <label class="form-check-label" for="gender_female">
                        option 4
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



        </div>
        <Footer />
      </div>
      <br />
      <br />
    </>


  );
}

export default Exampage;








