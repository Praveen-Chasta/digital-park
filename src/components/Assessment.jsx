import React,{useState,useEffect} from "react";
import DoubleCheck from "../asset/images/icons/doubble-check.svg";
import AssessmentGradient from "../asset/images/home/assesment-gradient.svg";
import {Link} from "react-router-dom";
import axios from 'axios';
 const Assesment =()=>{
	const [categoryData, setcategoriesClassData] = useState([]);
	const baseUrl ="https://digitaledupark.pleximus.co.in/api/edu/categories-class";

				useEffect(() => 
					{
							axios.get(baseUrl)
							.then(response => 
								{
										console.log(response.data);
										setcategoriesClassData(response.data.data);
								})
							.catch(error => {
									console.error('Error fetching data: ', error);
							});
					}, 
					[]);
					
					const getRandomColor = () =>
						 {
								return '#' + Math.floor(Math.random()*16777215).toString(16);
							}
				
     return (
						<section className="py-5 scroller overflow-hidden">
								<div className="container py-sm-5">
									<div className="text-center">
										<p className="top__title">Top Class Quizzes </p>
									</div>
									<h2 className="fs-1 text-center text-54 fw-semibold mb-4 mb-md-5">Explore Our Best <span className="text-primary">Assesment</span> Platform</h2>

									<div className="position-relative">
										<div className="row g-4 position-relative z-1">
											 {  categoryData.map((data,index)=>(
														<div className="col-md-4" key={index}>
															<div className="card assesment__card rounded-3 bg-white">
																<div className="card-header border-0 py-3" style={{ backgroundColor: getRandomColor()}}>
																	<h3 className="fs-6 fw-medium text-white mb-0">{data.category}</h3>
																</div>
																<div className="card-body">
																	<ul className="d-flex flex-column gap-2 check__list fw-medium" style={{'--double-check':`url(${DoubleCheck});`}}>
																			{data.class.map((classData) => (
																					<li key={classData.id}>{classData.class_name}	</li>
                       							 	))}
																	</ul>
																</div>
																<div className="card-footer border-0 py-3 bg-transparent">
																	<button className="btn btn-primary blue fs-6 w-100" disabled>View all </button>
																</div>
															</div>
														</div>
												  ))}
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