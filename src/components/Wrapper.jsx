import React from "react";
import Question1 from "../asset/images/home/question-1.jpg";
import Question2 from "../asset/images/home/question-2.jpg";
import {Link} from "react-router-dom";

const Wrapper =()=>{
    return (  
            
              <section className="py-4 py-lg-5 question__wraper">
                <div className="container py-lg-5">
                  <div className="bg-blue rounded-2">
                    <div className="row g-4 align-items-end">
                      <div className="col-lg-7">
                        <div className="p-4 p-lg-5 text-center text-lg-start">
                          <h2 className="fs-1 text-white">Create your first online test, quiz or exam</h2>
                          <p className="text-white mt-4"> Explore all of DigitalEduPark assessment software features and streamline your online assessments. It's on the house.You're welcome.</p>
                          <div className="mt-4 mt-lg-5">
                            <Link to="#" className="btn btn-outline-white rounded-0 py-2 fw-normal text-white" data-text="Sign Up For Your Free" aria-label="Sign Up For Your Free"><span>Sign Up For Your Free</span></Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-5">
                        <div className="d-flex py-3 py-lg-4 px-3 px-sm-4 px-lg-0">
                          <div className="pe-3 pe-lg-4" style={{'width': '55%'}}> 
                            <img src={Question1} width="288" height="382" className="img-fluid w-100 rounded-1" alt="banner"/>
                          </div>
                          <div className="pt-4" style={{'width': '45%'}}>
                            <img src={Question2} width="236" height="234" className="img-fluid w-100 rounded-1" alt="banner"/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
                      
          )
}
export default Wrapper;