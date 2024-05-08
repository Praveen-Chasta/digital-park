import SoftSeamLess  from "../../asset/images/icons/soft-seamless.svg";
import Support from "./../../asset/images/icons/support.svg";
import AiBased from "../../asset/images/icons/ai-based.svg"; 
import Data from "../../asset/images/icons/data.svg"; 

const AboutOnlineExam=()=>{
    return (
            <>
            <div className="aboutonlineexam clearfix">	
                <div className="container">
                  <h2>Why We Are the Ideal Partner For Your Online Exams</h2>
                  
                  <div className="row">
                    <div className="col-lg-3 col-md-3 col-12">
                      <div className="card-body text-center">
                        <center><img src={SoftSeamLess} alt=""/></center>
                        <h3>Seamless Student &amp; Professor Experience</h3>
                        <p>Easy to use, demos and handholding</p>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-12">
                      <div className="card-body text-center">
                        <center><img src={Support} alt=""/></center>
                        <h3>Seamless Student &amp; Professor Experience</h3>
                        <p>We are here for you, always!</p>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-12">
                      <div className="card-body text-center">
                        <center><img src={AiBased} alt=""/></center>
                        <h3>The Best-in-Quizzes Proctoring Technology</h3>
                        <p>We offer an industry-leading  suite of AI-based proctoring tools</p>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-12">
                      <div className="card-body text-center">
                        <center><img src={Data} alt=""/></center>
                        <h3>Robust Data Security</h3>
                        <p>Data encryption, secure data hosting, compliant with international standards</p>
                      </div>
                    </div>
                  </div>
		
	              </div>
              </div>
            </>
          );
}
export default AboutOnlineExam;