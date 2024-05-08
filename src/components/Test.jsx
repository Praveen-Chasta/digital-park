import React  from "react";
import SearchIcon from "../asset/images/icons/search.svg";
import ChevronImg from "../asset/images/icons/chevron-down.svg";
import GlobeWhite from "../asset/images/icons/globe-white.svg";
import StudentCapWhite  from "../asset/images/icons/student-cap-white.svg";
import ExamWhite  from "../asset/images/icons/exam-white.svg";
import TeamWhite  from "../asset/images/icons/team-white.svg";

const Test =()=>{
	
  return(
	<section className="py-5 bg-blue">
			<div className="container py-sm-4">
				<h2 className="text-center fs-1 fw-semibold text-white mb-4 mb-lg-5 wow slideInDown" data-wow-offset="2" data-wow-iteration="2">Online Tests & Quizzes</h2>

				<div className="col-lg-10 mx-auto">
					<form action="#" className="row g-3 quizzes__form">
						<div className="col-md-4">
							<div className="position-relative">
								<img 
									src={SearchIcon} 
									width="20" height="20" alt="search" 
									className="position-absolute top-50 translate-middle-y"
									style={{'left':'1rem'}}
								/>
								<select name="quzzes" id="quzzes" className="form-select"
									style={{'backgroundImage':`url(${ChevronImg})`}}
								>
									<option value="Select Quizzes">Select Quizzes</option>
								</select>
							</div>
						</div>
						<div className="col-md-5">
							<input type="text" name="search" className="form-control" placeholder="Search for a Quizzes or Exams"
								style={{'backgroundImage':`url(${SearchIcon})`}}
							/>
						</div>
						<div className="col-md-3">
							<button className="btn btn-primary">
								<span>Search</span>
							</button>
						</div>
					</form> 
				</div>

				<div className="row g-4 mt-3">
					<div className="col-xl-3 col-md-6 col-sm-6">
						<div className="d-flex quizze__info__card gap-3 align-items-center wow slideInLeft" data-wow-offset="2" data-wow-iteration="2">
							<figure className="icon mb-0 rounded-2 d-flex justify-content-center align-items-center">
								<img 
									src={StudentCapWhite}
									width="32" height="32" alt="cap" 
									className="img-fluid" loading="lazy" 
								/>
							</figure>
							<div className="col">
								<p className="text-white mb-0 lh-1_25">Trusted by over 1,200 students and teachers</p>
							</div>
						</div>
					</div>
					<div className="col-xl-3 col-md-6 col-sm-6">
						<div className="d-flex quizze__info__card gap-3 align-items-center wow slideInUp" data-wow-offset="4" data-wow-iteration="4">
							<figure className="icon mb-0 rounded-2 d-flex justify-content-center align-items-center">
								<img 
									src={ExamWhite} 
									width="32" height="32" alt="courses" 
									className="img-fluid" loading="lazy" 
								/>
							</figure>
							<div className="col">
								<p className="text-white mb-0 lh-1_25">Over 2,500 online courses available every day</p>
							</div>
						</div>
					</div>
					<div className="col-xl-3 col-md-6 col-sm-6">
						<div className="d-flex quizze__info__card gap-3 align-items-center wow slideInUp" data-wow-offset="6" data-wow-iteration="6">
							<figure className="icon mb-0 rounded-2 d-flex justify-content-center align-items-center">
								<img 
									src={GlobeWhite}
									width="32" height="32" alt="country" 
									className="img-fluid" loading="lazy" 
								/>
							</figure>
							<div className="col">
								<p className="text-white mb-0 lh-1_25">Our students come from every country in the world</p>
							</div>
						</div>
					</div>
					<div className="col-xl-3 col-md-6 col-sm-6">
						<div className="d-flex quizze__info__card gap-3 align-items-center wow slideInRight" data-wow-offset="9" data-wow-iteration="9">
							<figure className="icon mb-0 rounded-2 d-flex justify-content-center align-items-center">
								<img 
									src={TeamWhite}
									width="32" height="32" alt="team" 
									className="img-fluid" loading="lazy" 
								/>
							</figure>
							<div className="col">
								<p className="text-white mb-0 lh-1_25">Our team is devoted to transforming education</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
  );
}
export default Test;