import Header from "../layouts/Header/Header.jsx";
import "./ExamQuestion.css";


function ExamQuestion(){
    return (
        <>
            <Header/>
            <div className="exam-question-top-container">
                <div className="container-fluid row">
                    <div className="col-xl-8 col-lg-12 exam-question-main-container">
                        <div className="exam-question-button-container mb-4">
                            <button className="button-1">Verbal Ability</button>
                            <button className="button-2">Analytical Ability</button>
                        </div>
                        <div className="col-lg-12">
                            <h5 className="exam-question-heading">Sections</h5>
                            <div className="exam-question-type-container">
                                <p>Question type: Short Answer</p>
                            </div>
                            <div className="col-lg-10">
                                <h5 className="exam-question-heading">Question No 1.</h5>
                                <hr/>
                                <p className="exam-question-paragraph">As a Project Leader, write an email to your customer, Mr. Gill Roy, explaining delay to the project. Sign the email as Maria</p>
                            </div>
                            <h5 className="exam-question-heading">Outline:</h5>
                            <p className="exam-question-outline-para">Payment processing system - schedule - Tenth May (Friday) - Unexpected power outage - three days - overall delay -  seven days - includes recovery of lost work - will not recur</p>
                            <h5 className="exam-question-heading">Important Instructions:</h5>
                            <ul className="exam-question-ul-list mb-3">
                                <li>It is compulsory to use all the specific words mentioned int he Outline in your email. You can add other sentences of your choice, as appropriate.</li>
                                <li>The name of the sender and receiver should be as given.</li>
                                <li>The email must contain a minimum of fifty words, or it will not be evaluated at all.</li>
                                <li>If the outline is not strictly followed (including the specific words used), or correct English (including spelling and grammar) is not used, the grade in this section will be poor.</li>
                            </ul>
                            <textarea id="example-textarea" className="mb-5" name="example-textarea" rows="9" cols="120"></textarea>
                            <div className="exam-question-button-container mb-4">
                                <div className="d-flex justify-content-between">
                                    <button className="button-3">Mark for Reivew & Next</button>
                                    <button className="button-4">Clear Response</button>
                                </div>
                                <button className="button-5">Save & Next</button>
                            </div>
                        </div>
                    </div>
                    <div className=" col-xl-4 col-lg-6 exam-question-bottom-container">
                        <div className="exam-question-timer-container">
                                <div className="exam-question-profile-container">
                                    
                                </div>
                                <div className="exam-question-timer">
                                    <h1>Time Left : 15 : 30</h1>
                                    <p>Candidate</p>
                                </div>
                        </div>
                        <div className="exam-question-bottom-1-container"> 
                            <div className="exam-question-attempted-details mt-4">
                                <h1>You are viewing Verbal Ability Section</h1>
                                <hr/>
                                <p>Question Palette:</p>
                                <div className="exam-question-attempted-question-details-container">
                                    <div className="cont-1">
                                        <p>1</p>
                                    </div>
                                    <div className="cont-2">
                                        <p>2</p>
                                    </div>
                                    <div className="cont-3">
                                        <p>3</p>
                                    </div>
                                    <div className="cont-4">
                                        <p>4</p>
                                    </div>
                                    <div className="cont-3">
                                        <p>5</p>
                                    </div>
                                    <div className="cont-2">
                                        <p>6</p>
                                    </div>
                                    <div className="cont-1">
                                        <p>7</p>
                                    </div>
                                    <div className="cont-4">
                                        <p>8</p>
                                    </div>
                                    <div className="cont-3">
                                        <p>9</p>
                                    </div>
                                    <div className="cont-4">
                                        <p>10</p>
                                    </div>
                                    <div className="cont-2">
                                        <p>11</p>
                                    </div>
                                    <div className="cont-1">
                                        <p>12</p>
                                    </div>
                                    <div className="cont-1">
                                        <p>13</p>
                                    </div>
                                    <div className="cont-3">
                                        <p>14</p>
                                    </div>
                                    <div className="cont-1">
                                        <p>15</p>
                                    </div>
                                    <div className="cont-2">
                                        <p>16</p>
                                    </div>
                                    <div className="cont-2">
                                        <p>17</p>
                                    </div>
                                    <div className="cont-1">
                                        <p>18</p>
                                    </div>
                                    <div className="cont-4">
                                        <p>19</p>
                                    </div>
                                    <div className="cont-3">
                                        <p>20</p>
                                    </div>
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
                                    <button className="button-one">Instructions</button>
                                </div>
                                <div className="d-flex align-item-center col-lg-6">
                                    <button className="button-one">Question Paper</button>
                                </div>
                                <div className="d-flex align-item-center col-lg-6">
                                    <button className="button-two">Submit</button>
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