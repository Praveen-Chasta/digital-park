import React from "react";
import {Link} from "react-router-dom";

const Courses =()=>{
    return (<>
            <section className="courseToday clearfix">
              <div className="container">
                <div className="coursecard clearfix">
                  <h3><span>Structured Certification Online Courses</span> Apply Your Courses Today</h3>
                  <Link to="#" className="btn btn-primary blue animate-btn">Apply Now</Link>
                </div>
              </div>
            </section>  
          </>);
}
export default Courses;