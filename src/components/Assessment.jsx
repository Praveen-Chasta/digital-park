import React from "react";
import DoubleCheck from "../asset/images/icons/doubble-check.svg";
import AssessmentGradient from "../asset/images/home/assesment-gradient.svg";
import {Link} from "react-router-dom";
 const Assesment =()=>{
     return(
    <section className="py-5 scroller overflow-hidden">
				<div className="container py-sm-5">
					<div className="text-center">
						<p className="top__title">Top Class Quizzes</p>
					</div>
					<h2 className="fs-1 text-center text-54 fw-semibold mb-4 mb-md-5">Explore Our Best <span className="text-primary">Assesment</span> Platform</h2>

					<div className="position-relative">
						<div className="row g-4 position-relative z-1">
							<div className="col-md-4">
								<div className="card assesment__card rounded-3 bg-white">
									<div className="card-header bg-blue border-0 py-3">
										<h3 className="fs-6 fw-medium text-white mb-0">Academics</h3>
									</div>
									<div className="card-body">
										<ul className="d-flex flex-column gap-2 check__list fw-medium" style={{'--double-check':`url(${DoubleCheck});`}}>
											<li>Class 5</li>
											<li>Class 6</li>
											<li>Class 7</li>
											<li>Class 8</li>
											<li>Class 9</li>
											<li>Class 10</li>
											<li>Class 11</li>
											<li>Class 12</li>
										</ul>
									</div>
									<div className="card-footer border-0 py-3 bg-transparent">
										<button className="btn btn-primary blue fs-6 w-100" disabled>View all </button>
									</div>
								</div>
							</div>
							<div className="col-md-4">
								<div className="card assesment__card rounded-3 bg-white">
									<div className="card-header bg-primary border-0 py-3">
										<h3 className="fs-6 fw-medium text-white mb-0">Government Services</h3>
									</div>
									<div className="card-body">
										<ul className="d-flex flex-column gap-2 check__list fw-medium" style={{'--double-check': `url(${DoubleCheck})`}}>
											<li>SSC</li>
											<li>DSS</li>
											<li>SBC</li>
											<li>TET</li>
											<li>KVS</li>
											<li>DELHI</li> 
											<li>UNIVERSITY</li>
											<li>UP POLICE</li>
											<li>NAVY</li>
											<li>AFCAT</li>
										</ul>
									</div>
									<div className="card-footer border-0 py-3 bg-transparent">
										<button className="btn btn-primary fs-6 w-100" disabled>View all </button>
									</div>
								</div>
							</div>
							<div className="col-md-4">
								<div className="card assesment__card rounded-3 bg-white">
									<div className="card-header bg-green border-0 py-3">
										<h3 className="fs-6 fw-medium text-white mb-0">Competitive Exams</h3>
									</div>
									<div className="card-body">
										<ul className="d-flex flex-column gap-2 check__list fw-medium" style={{'--double-check':`url(${DoubleCheck})`}}>
											<li>DELHI UNIVERSITY</li>
											<li>VIT</li>
											<li>BITS PILANI</li>
											<li>NEET</li>
											<li>IIT JEE</li>
										</ul>
									</div>
									<div className="card-footer border-0 py-3 bg-transparent">
										<button className="btn btn-primary green fs-6 w-100" disabled>View all </button>
									</div>
								</div>
							</div>
						</div>
						<img 
							src={AssessmentGradient}
							alt="Digitaledupark" width="779" height="1062"
							className="img-fluid position-absolute assesment__gradient d-none d-md-block z-n1"
						/>
					</div>

					<div className="d-flex flex-wrap gap-3 justify-content-center mt-4 mt-sm-5">
						<Link to="#" className="btn btn-primary animate-btn" data-text="Common Quizzes" aria-label="Common Quizzes">
							<span>Common Quizzes</span>
						</Link>
						<Link to="#" className="btn btn-primary blue animate-btn" data-text="Free Exam Trial" aria-label="Free Exam Trial">
							<span>Free Exam Trial</span>
						</Link>
					</div>

				</div>
	</section>
  )
 }
 export default Assesment;