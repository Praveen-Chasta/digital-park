const SubjectClass=()=>{
    return(
            <>
              <section className="classPage clearfix">
                <div className="container">
                  <div className="accordion" id="accordionQuiz">
                  <div className="row">
                      <div className="col-lg-6 col-md-6 col-12">
                      <h2>Subject Wise Quiz</h2>
                      <h5>Select Difficulty Level :</h5>
                        <ul className="SelectLevel clearfix">
                        <li className="clearfix">
                          <div className="form-check">
                            <input type="radio" className="form-check-input" id="radio1" name="optradio" value="option1" checked />Basic (L1)
                            <label className="form-check-label" for="radio1"></label>
                          </div>
                        </li>
                        <li>
                          <div className="form-check">
                            <input type="radio" className="form-check-input" id="radio2" name="optradio" value="option1" checked />Medium (L2)
                            <label className="form-check-label" for="radio2"></label>
                          </div>
                        </li>
                        <li>
                          <div className="form-check">
                            <input type="radio" className="form-check-input" id="radio3" name="optradio" value="option1" checked />High (L3)
                            <label className="form-check-label" for="radio3"></label>
                          </div>
                        </li>
                        <li>
                          <div className="form-check">
                            <input type="radio" className="form-check-input" id="radio4" name="optradio" value="option1" checked />Miscellaneous (L4)
                            <label className="form-check-label" for="radio4"></label>
                          </div>
                        </li>
                      </ul>
                        <div className="accordion-item">
                        <div className="accordion-header" id="heading_1">
                          <button className="accordion-button red" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_1" aria-expanded="true" aria-controls="collapse_1">
                          English Grammar
                          </button>
                        </div>
                        <div id="collapse_1" className="accordion-collapse collapse show" aria-labelledby="heading_1" data-bs-parent="#accordionQuiz">
                          <div className="accordion-body">
                          <div className="form-check">
                            <input type="radio" className="form-check-input" id="radio5" name="optradio" value="option1" checked /> 10 Question Quiz
                            <label className="form-check-label" for="radio5"></label>
                          </div>
                            
                            <div className="form-check">
                              <input type="radio" className="form-check-input" id="radio6" name="optradio" value="option1"/> 20 Question Quiz
                              <label className="form-check-label" for="radio6"></label>
                            </div>
                            <div className="form-check">
                              <input type="radio" className="form-check-input" id="radio7" name="optradio" value="option1" /> 30 Question Quiz
                              <label className="form-check-label" for="radio7"></label>
                            </div>
                            <div className="form-check">
                              <input type="radio" className="form-check-input" id="radio8" name="optradio" value="option1" /> 40 Question Quiz
                              <label className="form-check-label" for="radio8"></label>
                            </div>
                            <div className="form-check">
                              <input type="radio" className="form-check-input" id="radio9" name="optradio" value="option1" /> 50 Question Quiz
                              <label className="form-check-label" for="radio9"></label>
                            </div>
                            
                          </div>
                        </div>
                        </div>
                        <div className="accordion-item">
                        <div className="accordion-header" id="heading_2">
                          <button className="accordion-button collapsed green" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_2" aria-expanded="false" aria-controls="collapse_2">
                          Mathematics
                          </button>
                        </div>
                        <div id="collapse_2" className="accordion-collapse collapse" aria-labelledby="heading_2" data-bs-parent="#accordionQuiz">
                          <div className="accordion-body">
                          <div className="form-check">
                            <input type="radio" className="form-check-input" id="radio5" name="optradio" value="option1" checked /> 10 Question Quiz
                            <label className="form-check-label" for="radio5"></label>
                          </div>
                            
                            <div className="form-check">
                              <input type="radio" className="form-check-input" id="radio6" name="optradio" value="option1" /> 20 Question Quiz
                              <label className="form-check-label" for="radio6"></label>
                            </div>
                            <div className="form-check">
                              <input type="radio" className="form-check-input" id="radio7" name="optradio" value="option1" /> 30 Question Quiz
                              <label className="form-check-label" for="radio7"></label>
                            </div>
                            <div className="form-check">
                              <input type="radio" className="form-check-input" id="radio8" name="optradio" value="option1" /> 40 Question Quiz
                              <label className="form-check-label" for="radio8"></label>
                            </div>
                            <div className="form-check">
                              <input type="radio" className="form-check-input" id="radio9" name="optradio" value="option1" /> 50 Question Quiz
                              <label className="form-check-label" for="radio9"></label>
                            </div>
                            
                          </div>
                        </div>
                        </div>
                        <div className="accordion-item">
                        <div className="accordion-header" id="heading_3">
                          <button className="accordion-button collapsed blue" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_3" aria-expanded="false" aria-controls="collapse_3">
                          Science
                          </button>
                        </div>
                        <div id="collapse_3" className="accordion-collapse collapse" aria-labelledby="heading_3" data-bs-parent="#accordionQuiz">
                          <div className="accordion-body">
                          <div className="form-check">
                            <input type="radio" className="form-check-input" id="radio5" name="optradio" value="option1" checked /> 10 Question Quiz
                            <label className="form-check-label" for="radio5"></label>
                          </div>
                            
                            <div className="form-check">
                              <input type="radio" className="form-check-input" id="radio6" name="optradio" value="option1" /> 20 Question Quiz
                              <label className="form-check-label" for="radio6"></label>
                            </div>
                            <div className="form-check">
                              <input type="radio" className="form-check-input" id="radio7" name="optradio" value="option1" /> 30 Question Quiz
                              <label className="form-check-label" for="radio7"></label>
                            </div>
                            <div className="form-check">
                              <input type="radio" className="form-check-input" id="radio8" name="optradio" value="option1" /> 40 Question Quiz
                              <label className="form-check-label" for="radio8"></label>
                            </div>
                            <div className="form-check">
                              <input type="radio" className="form-check-input" id="radio9" name="optradio" value="option1" /> 50 Question Quiz
                              <label className="form-check-label" for="radio9"></label>
                            </div>
                            
                          </div>
                        </div>
                        </div>
                        <div className="accordion-item">
                        <div className="accordion-header" id="heading_4">
                          <button className="accordion-button collapsed yallow" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_4" aria-expanded="false" aria-controls="collapse_4">
                          Hindi Grammar
                          </button>
                        </div>
                        <div id="collapse_4" className="accordion-collapse collapse" aria-labelledby="heading_4" data-bs-parent="#accordionQuiz">
                          <div className="accordion-body">
                          <div className="form-check">
                            <input type="radio" className="form-check-input" id="radio5" name="optradio" value="option1" checked /> 10 Question Quiz
                            <label className="form-check-label" for="radio5"></label>
                          </div>
                            
                            <div className="form-check">
                              <input type="radio" className="form-check-input" id="radio6" name="optradio" value="option1" /> 20 Question Quiz
                              <label className="form-check-label" for="radio6"></label>
                            </div>
                            <div className="form-check">
                              <input type="radio" className="form-check-input" id="radio7" name="optradio" value="option1" /> 30 Question Quiz
                              <label className="form-check-label" for="radio7"></label>
                            </div>
                            <div className="form-check">
                              <input type="radio" className="form-check-input" id="radio8" name="optradio" value="option1" /> 40 Question Quiz
                              <label className="form-check-label" for="radio8"></label>
                            </div>
                            <div className="form-check">
                              <input type="radio" className="form-check-input" id="radio9" name="optradio" value="option1"/> 50 Question Quiz
                              <label className="form-check-label" for="radio9"></label>
                            </div>
                            
                          </div>
                        </div>
                        </div>
                        <div className="accordion-item">
                        <div className="accordion-header" id="heading_5">
                          <button className="accordion-button collapsed red" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_5" aria-expanded="true" aria-controls="collapse_5">
                          Social Science
                          </button>
                        </div>
                        <div id="collapse_5" className="accordion-collapse collapse" aria-labelledby="heading_5" data-bs-parent="#accordionQuiz">
                          <div className="accordion-body">
                          <div className="form-check">
                            <input type="radio" className="form-check-input" id="radio5" name="optradio" value="option1" checked /> 10 Question Quiz
                            <label className="form-check-label" for="radio5"></label>
                          </div>
                            
                            <div className="form-check">
                              <input type="radio" className="form-check-input" id="radio6" name="optradio" value="option1" /> 20 Question Quiz
                              <label className="form-check-label" for="radio6"></label>
                            </div>
                            <div className="form-check">
                              <input type="radio" className="form-check-input" id="radio7" name="optradio" value="option1" /> 30 Question Quiz
                              <label className="form-check-label" for="radio7"></label>
                            </div>
                            <div className="form-check">
                              <input type="radio" className="form-check-input" id="radio8" name="optradio" value="option1"/> 40 Question Quiz
                              <label className="form-check-label" for="radio8"></label>
                            </div>
                            <div className="form-check">
                              <input type="radio" className="form-check-input" id="radio9" name="optradio" value="option1" /> 50 Question Quiz
                              <label className="form-check-label" for="radio9"></label>
                            </div>
                            
                          </div>
                        </div>
                        </div>	
                      </div>
                      <div className="col-lg-6 col-md-6 col-12">
                      <h3>Chapter Wise Quiz</h3>
                      <h5>Select Difficulty Level :</h5>
                        <ul className="SelectLevel clearfix">
                        <li className="clearfix">
                          <div className="form-check">
                            <input type="radio" className="form-check-input" id="radio21" name="optradio21" value="option21" checked />Basic (L1)
                            <label className="form-check-label" for="radio21"></label>
                          </div>
                        </li>
                        <li>
                          <div className="form-check">
                            <input type="radio" className="form-check-input" id="radio22" name="optradio22" value="option22" />Medium (L2)
                            <label className="form-check-label" for="radio22"></label>
                          </div>
                        </li>
                        <li>
                          <div className="form-check">
                            <input type="radio" className="form-check-input" id="radio23" name="optradio23" value="option23" />High (L3)
                            <label className="form-check-label" for="radio23"></label>
                          </div>
                        </li>
                        <li>
                          <div className="form-check">
                            <input type="radio" className="form-check-input" id="radio24" name="optradio24" value="option24" />Miscellaneous (L4)
                            <label className="form-check-label" for="radio24"></label>
                          </div>
                        </li>
                      </ul>
                        
                        <div className="accordion-item">
                        <div className="accordion-header" id="heading_21">
                          <button className="accordion-button blue" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_21" aria-expanded="true" aria-controls="collapse_21">
                          English Grammar
                          </button>
                        </div>
                        <div id="collapse_21" className="accordion-collapse collapse show" aria-labelledby="heading_21" data-bs-parent="#accordionQuiz">
                          <div className="accordion-body">
                            <h4>Chapter 1</h4>
                            <div className="form-check">
                            <input type="radio" className="form-check-input" id="radio5" name="optradio" value="option1" checked /> 10 Question Quiz
                            <label className="form-check-label" for="radio5"></label>
                          </div>
                            <div className="form-check">
                              <input type="radio" className="form-check-input" id="radio6" name="optradio" value="option1" /> 20 Question Quiz
                              <label className="form-check-label" for="radio6"></label>
                            </div>
                            <div className="form-check">
                              <input type="radio" className="form-check-input" id="radio7" name="optradio" value="option1" /> 30 Question Quiz
                              <label className="form-check-label" for="radio7"></label>
                            </div>
                            <div className="form-check">
                              <input type="radio" className="form-check-input" id="radio8" name="optradio" value="option1" /> 40 Question Quiz
                              <label className="form-check-label" for="radio8"></label>
                            </div>
                            <div className="form-check">
                              <input type="radio" className="form-check-input" id="radio9" name="optradio" value="option1" /> 50 Question Quiz
                              <label className="form-check-label" for="radio9"></label>
                            </div>
                            <h4 className="mt-3">Chapter 2</h4>
                            
                            <div className="form-check">
                              <input type="radio" className="form-check-input" id="radio6" name="optradio" value="option1" /> 20 Question Quiz
                              <label className="form-check-label" for="radio6"></label>
                            </div>
                            <div className="form-check">
                              <input type="radio" className="form-check-input" id="radio7" name="optradio" value="option1" /> 30 Question Quiz
                              <label className="form-check-label" for="radio7"></label>
                            </div>
                            <div className="form-check">
                              <input type="radio" className="form-check-input" id="radio8" name="optradio" value="option1" /> 40 Question Quiz
                              <label className="form-check-label" for="radio8"></label>
                            </div>
                            <div className="form-check">
                              <input type="radio" className="form-check-input" id="radio9" name="optradio" value="option1" /> 50 Question Quiz
                              <label className="form-check-label" for="radio9"></label>
                            </div>
                            
                            <button className="btn btn-primary blue animate-btn mt-3 w-100">Start Exam</button>
                          </div>
                        </div>
                        </div>
                        <div className="accordion-item">
                        <div className="accordion-header" id="heading_22">
                          <button className="accordion-button collapsed green" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_22" aria-expanded="false" aria-controls="collapse_22">
                          Mathematics
                          </button>
                        </div>
                        <div id="collapse_22" className="accordion-collapse collapse" aria-labelledby="heading_22" data-bs-parent="#accordionQuiz">
                          <div className="accordion-body">
                          <h4>Chapter 1</h4>
                            <div className="form-check">
                            <input type="radio" className="form-check-input" id="radio5" name="optradio" value="option1" checked /> 10 Question Quiz
                            <label className="form-check-label" for="radio5"></label>
                          </div>
                            <div className="form-check">
                              <input type="radio" className="form-check-input" id="radio6" name="optradio" value="option1" /> 20 Question Quiz
                              <label className="form-check-label" for="radio6"></label>
                            </div>
                            <div className="form-check">
                              <input type="radio" className="form-check-input" id="radio7" name="optradio" value="option1" /> 30 Question Quiz
                              <label className="form-check-label" for="radio7"></label>
                            </div>
                            <div className="form-check">
                              <input type="radio" className="form-check-input" id="radio8" name="optradio" value="option1" /> 40 Question Quiz
                              <label className="form-check-label" for="radio8"></label>
                            </div>
                            <div className="form-check">
                              <input type="radio" className="form-check-input" id="radio9" name="optradio" value="option1" /> 50 Question Quiz
                              <label className="form-check-label" for="radio9"></label>
                            </div>
                            <h4 className="mt-3">Chapter 2</h4>
                            
                            <div className="form-check">
                              <input type="radio" className="form-check-input" id="radio6" name="optradio" value="option1" /> 20 Question Quiz
                              <label className="form-check-label" for="radio6"></label>
                            </div>
                            <div className="form-check">
                              <input type="radio" className="form-check-input" id="radio7" name="optradio" value="option1" /> 30 Question Quiz
                              <label className="form-check-label" for="radio7"></label>
                            </div>
                            <div className="form-check">
                              <input type="radio" className="form-check-input" id="radio8" name="optradio" value="option1" /> 40 Question Quiz
                              <label className="form-check-label" for="radio8"></label>
                            </div>
                            <div className="form-check">
                              <input type="radio" className="form-check-input" id="radio9" name="optradio" value="option1" /> 50 Question Quiz
                              <label className="form-check-label" for="radio9"></label>
                            </div>
                            
                            <button className="btn btn-primary blue animate-btn mt-3 w-100">Start Exam</button>
                          </div>
                        </div>
                        </div>
                        <div className="accordion-item">
                        <div className="accordion-header" id="heading_23">
                          <button className="accordion-button collapsed blue" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_23" aria-expanded="false" aria-controls="collapse_23">
                          Science
                          </button>
                        </div>
                        <div id="collapse_23" className="accordion-collapse collapse" aria-labelledby="heading_23" data-bs-parent="#accordionQuiz">
                          <div className="accordion-body">
                          <h4>Chapter 1</h4>
                            <div className="form-check">
                            <input type="radio" className="form-check-input" id="radio5" name="optradio" value="option1" checked /> 10 Question Quiz
                            <label className="form-check-label" for="radio5"></label>
                          </div>
                            <div className="form-check">
                              <input type="radio" className="form-check-input" id="radio6" name="optradio" value="option1" /> 20 Question Quiz
                              <label className="form-check-label" for="radio6"></label>
                            </div>
                            <div className="form-check">
                              <input type="radio" className="form-check-input" id="radio7" name="optradio" value="option1" /> 30 Question Quiz
                              <label className="form-check-label" for="radio7"></label>
                            </div>
                            <div className="form-check">
                              <input type="radio" className="form-check-input" id="radio8" name="optradio" value="option1" /> 40 Question Quiz
                              <label className="form-check-label" for="radio8"></label>
                            </div>
                            <div className="form-check">
                              <input type="radio" className="form-check-input" id="radio9" name="optradio" value="option1" /> 50 Question Quiz
                              <label className="form-check-label" for="radio9"></label>
                            </div>
                            <h4 className="mt-3">Chapter 2</h4>
                            
                            <div className="form-check">
                              <input type="radio" className="form-check-input" id="radio6" name="optradio" value="option1" /> 20 Question Quiz
                              <label className="form-check-label" for="radio6"></label>
                            </div>
                            <div className="form-check">
                              <input type="radio" className="form-check-input" id="radio7" name="optradio" value="option1" /> 30 Question Quiz
                              <label className="form-check-label" for="radio7"></label>
                            </div>
                            <div className="form-check">
                              <input type="radio" className="form-check-input" id="radio8" name="optradio" value="option1" /> 40 Question Quiz
                              <label className="form-check-label" for="radio8"></label>
                            </div>
                            <div className="form-check">
                              <input type="radio" className="form-check-input" id="radio9" name="optradio" value="option1" /> 50 Question Quiz
                              <label className="form-check-label" for="radio9"></label>
                            </div>
                            
                            <button className="btn btn-primary blue animate-btn mt-3 w-100">Start Exam</button>
                          </div>
                        </div>
                        </div>
                        <div className="accordion-item">
                        <div className="accordion-header" id="heading_24">
                          <button className="accordion-button collapsed yallow" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_24" aria-expanded="false" aria-controls="collapse_24">
                          Hindi Grammar
                          </button>
                        </div>
                        <div id="collapse_24" className="accordion-collapse collapse" aria-labelledby="heading_24" data-bs-parent="#accordionQuiz">
                          <div className="accordion-body">
                          <h4>Chapter 1</h4>
                            <div className="form-check">
                            <input type="radio" className="form-check-input" id="radio5" name="optradio" value="option1" checked /> 10 Question Quiz
                            <label className="form-check-label" for="radio5"></label>
                          </div>
                            <div className="form-check">
                              <input type="radio" className="form-check-input" id="radio6" name="optradio" value="option1" /> 20 Question Quiz
                              <label className="form-check-label" for="radio6"></label>
                            </div>
                            <div className="form-check">
                              <input type="radio" className="form-check-input" id="radio7" name="optradio" value="option1" /> 30 Question Quiz
                              <label className="form-check-label" for="radio7"></label>
                            </div>
                            <div className="form-check">
                              <input type="radio" className="form-check-input" id="radio8" name="optradio" value="option1" /> 40 Question Quiz
                              <label className="form-check-label" for="radio8"></label>
                            </div>
                            <div className="form-check">
                              <input type="radio" className="form-check-input" id="radio9" name="optradio" value="option1" /> 50 Question Quiz
                              <label className="form-check-label" for="radio9"></label>
                            </div>
                            <h4 className="mt-3">Chapter 2</h4>
                            
                            <div className="form-check">
                              <input type="radio" className="form-check-input" id="radio6" name="optradio" value="option1" /> 20 Question Quiz
                              <label className="form-check-label" for="radio6"></label>
                            </div>
                            <div className="form-check">
                              <input type="radio" className="form-check-input" id="radio7" name="optradio" value="option1" /> 30 Question Quiz
                              <label className="form-check-label" for="radio7"></label>
                            </div>
                            <div className="form-check">
                              <input type="radio" className="form-check-input" id="radio8" name="optradio" value="option1" /> 40 Question Quiz
                              <label className="form-check-label" for="radio8"></label>
                            </div>
                            <div className="form-check">
                              <input type="radio" className="form-check-input" id="radio9" name="optradio" value="option1" /> 50 Question Quiz
                              <label className="form-check-label" for="radio9"></label>
                            </div>
                            
                            <button className="btn btn-primary blue animate-btn mt-3 w-100">Start Exam</button>
                          </div>
                        </div>
                        </div>
                        <div className="accordion-item">
                        <div className="accordion-header" id="heading_25">
                          <button className="accordion-button collapsed red" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_25" aria-expanded="true" aria-controls="collapse_25">
                          Social Science
                          </button>
                        </div>
                        <div id="collapse_25" className="accordion-collapse collapse" aria-labelledby="heading_25" data-bs-parent="#accordionQuiz">
                          <div className="accordion-body">
                          <h4>Chapter 1</h4>
                            <div className="form-check">
                            <input type="radio" className="form-check-input" id="radio5" name="optradio" value="option1" checked /> 10 Question Quiz
                            <label className="form-check-label" for="radio5"></label>
                          </div>
                            <div className="form-check">
                              <input type="radio" className="form-check-input" id="radio6" name="optradio" value="option1" /> 20 Question Quiz
                              <label className="form-check-label" for="radio6"></label>
                            </div>
                            <div className="form-check">
                              <input type="radio" className="form-check-input" id="radio7" name="optradio" value="option1" /> 30 Question Quiz
                              <label className="form-check-label" for="radio7"></label>
                            </div>
                            <div className="form-check">
                              <input type="radio" className="form-check-input" id="radio8" name="optradio" value="option1" /> 40 Question Quiz
                              <label className="form-check-label" for="radio8"></label>
                            </div>
                            <div className="form-check">
                              <input type="radio" className="form-check-input" id="radio9" name="optradio" value="option1" /> 50 Question Quiz
                              <label className="form-check-label" for="radio9"></label>
                            </div>
                            <h4 className="mt-3">Chapter 2</h4>
                            
                            <div className="form-check">
                              <input type="radio" className="form-check-input" id="radio6" name="optradio" value="option1" /> 20 Question Quiz
                              <label className="form-check-label" for="radio6"></label>
                            </div>
                            <div className="form-check">
                              <input type="radio" className="form-check-input" id="radio7" name="optradio" value="option1" /> 30 Question Quiz
                              <label className="form-check-label" for="radio7"></label>
                            </div>
                            <div className="form-check">
                              <input type="radio" className="form-check-input" id="radio8" name="optradio" value="option1" /> 40 Question Quiz
                              <label className="form-check-label" for="radio8"></label>
                            </div>
                            <div className="form-check">
                              <input type="radio" className="form-check-input" id="radio9" name="optradio" value="option1" /> 50 Question Quiz
                              <label className="form-check-label" for="radio9"></label>
                            </div>
                            
                            <button className="btn btn-primary blue animate-btn mt-3 w-100">Start Exam</button>
                          </div>
                        </div>
                        </div>	
                      </div>
                    </div>
                  </div>
                </div>
              </section> 
            </>
          );
}
export default SubjectClass;