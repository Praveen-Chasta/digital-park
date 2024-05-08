import React from "react";

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import Quizzes from "../asset/images/home/quizzes.jpg";
import Exam  from "../asset/images/home/exams.jpg";
import FormativeAssessment from "../asset/images/home/formative-assessment.jpg";
import {Link} from "react-router-dom";

const  Evaluation=()=>{
	
			return (
				<section className="py-5">
					<div className="container py-md-3">
					<p className="text-center">Skills and knowledge exams made easy</p>
					<h2 className="fs-1 text-center text-54 fw-semibold mb-4 mb-md-5">Evaluation Programs for Personal Assesment</h2>
					<OwlCarousel  margin={10} loop  items={3} autoplay  autoplayTimeout={10000} autoplaySpeed={3000} className="owl-carousel evaluationCarousel">
								<div className='item evaluation__card rounded-2'>
										<Link to="#" className="d-block">
											<img src={Quizzes} width="375" height="200" className="img-fluid rounded-2" loading="lazy" alt="Quizzes"/>
										</Link> 
										<div className="caption p-3 pt-md-4">
											<h3 className="title text-blue fs-4 fw-semibold text-capitalize mb-3">
												<Link to="#">Quizzes</Link>
											</h3>
											<p className="description">
												Engage your remote students or connected classrooms in a way that’s efficient and fun.
											</p>
											<div className="mt-4">
												<Link to="#" className="btn btn-outline-primary rounded-0 py-2 px-3 gap-1 fw-medium" data-text="Learn more" aria-label="Learn more">
													<span>Learn more</span>
													<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="red" d="m20 12l.354-.354l.353.354l-.353.354zm-15 .5a.5.5 0 0 1 0-1zm9.354-6.854l6 6l-.708.708l-6-6zm6 6.708l-6 6l-.708-.708l6-6zM20 12.5H5v-1h15z"/></svg>
												</Link>
											</div>
										</div>
								</div>
								<div className=" item evaluation__card rounded-2">
									<Link to="#" className="d-block">
										<img src={Exam} width="375" height="200" className="img-fluid rounded-2" loading="lazy" alt="Exams"/>
									</Link> 
									<div className="caption p-3 pt-md-4">
										<h3 className="title text-blue fs-4 fw-semibold text-capitalize mb-3">
											<Link to="#">Exams</Link>
										</h3>
										<p className="description">
											Test skills and knowledge in a professional and no-distraction environment.
										</p>
											<div className="mt-4">
												<Link to="#" className="btn btn-outline-primary rounded-0 py-2 px-3 gap-1 fw-medium" data-text="Learn more" aria-label="Learn more">
													<span>Learn more</span>
													<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="red" d="m20 12l.354-.354l.353.354l-.353.354zm-15 .5a.5.5 0 0 1 0-1zm9.354-6.854l6 6l-.708.708l-6-6zm6 6.708l-6 6l-.708-.708l6-6zM20 12.5H5v-1h15z"/></svg>
												</Link>
											</div>
									</div>
								</div>
								<div className=" item evaluation__card rounded-2">
									<Link to="#" className="d-block">
										<img src={FormativeAssessment} width="375" height="200" className="img-fluid rounded-2" loading="lazy" alt="Formative Assessment"/>
									</Link> 
									<div className="caption p-3 pt-md-4">
										<h3 className="title text-blue fs-4 fw-semibold text-capitalize mb-3">
											<Link to="Formative Assessment">Formative Assessment</Link>
										</h3>
										<p className="description">
											Positive motivation, encouraging feedback, and equal opportunities with a new educational approach
										</p>
										<div className="mt-4">
											<Link to="#" className="btn btn-outline-primary rounded-0 py-2 px-3 gap-1 fw-medium" data-text="Learn more" aria-label="Learn more">
												<span>Learn more</span>
												<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="red" d="m20 12l.354-.354l.353.354l-.353.354zm-15 .5a.5.5 0 0 1 0-1zm9.354-6.854l6 6l-.708.708l-6-6zm6 6.708l-6 6l-.708-.708l6-6zM20 12.5H5v-1h15z"/></svg>
											</Link>
										</div>
									</div>
								</div>
					</OwlCarousel>
						</div>
						</section>

			)
}
export default Evaluation;