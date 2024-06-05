import React  from "react";
import EasyLearning from "../asset/images/icons/easylearning.svg";
import InterActiveInterface from "../asset/images/icons/interactive-interface.svg";
import TestSoftware from "../asset/images/icons/test-software.svg";
import ExceptionSupport from "../asset/images/icons/exception-support.svg";
import SmartSubscription from "../asset/images/icons/smart-subscriptiont.svg";
import ActiveAccessibility from "../asset/images/icons/activeaccessibility.svg";
import {Link} from "react-router-dom";
import RevolutionaryStyle from "./RevolutionaryStyle.module.css";
 const Revolutionary =()=>
	{
		
	 return (<>
          <section className="py-5 revolutionary__wrapper text-center position-relative"> 
							<div className="container py-sm-4">
								<h2 className={`text-center fs-1 fw-semibold text-dark mb-3 ${RevolutionaryStyle['wow']} slideInDown" data-wow-offset="2" data-wow-iteration="2"`}>A Revolutionary Step in the Online Examination System</h2>
								<p className="wow slideInUp" data-wow-offset="5" data-wow-iteration="5">It is an exceptional online test platform for conducting online exams and solving all your preparation doubts. It is a smooth online examination system to use and enhances the flow of information.</p>

								<div className="row g-4 g-lg-5 mt-4 row-cols-1 row-cols-sm-2  row-cols-md-3 row-cols-lg-3">
											<div className={`${RevolutionaryStyle['wow']} slideInUp`} data-wow-offset="2" data-wow-iteration="2">
												<div className="info__card">
													<figure className="icon__box bg-blue mx-auto rounded-circle d-flex justify-content-center align-items-center">
														<img src={EasyLearning} alt="Simple to learn" width="40" height="43" className="img-fluid" loading="lazy"/>
													</figure>
													<h3 className="fs-5 fw-medium text-dark">Simple to learn</h3>
													<p className="text-54 small">One stop solution for online examination and assessment. It would solve all your problems in preparation for the exam.</p>
												</div>
											</div>
											<div className={`${RevolutionaryStyle['wow']} slideInUp`} data-wow-offset="4" data-wow-iteration="4" style={{ visibility: 'visible' }}>
												<div className="info__card">
													<figure className="icon__box bg-primary mx-auto rounded-circle d-flex justify-content-center align-items-center">
														<img 
															src={InterActiveInterface} 
															alt="Interactive Interface" width="40" height="43"
															className="img-fluid" loading="lazy"/>
													</figure>
													<h3 className="fs-5 fw-medium text-dark">Interactive Interface</h3>
													<p className="text-54 small">Easy registration, click away tricks, and simple test creation facilitated by online exam software. Signing in and concurring.</p>
												</div>
											</div>
											<div className={`${RevolutionaryStyle['wow']} slideInUp`} data-wow-offset="6" data-wow-iteration="6" style={{ visibility: 'visible' }}>
												<div className="info__card">
													<figure className="icon__box bg-green mx-auto rounded-circle d-flex justify-content-center align-items-center">
														<img 
															src={TestSoftware} 
															alt="software" width="40" height="43"
															className="img-fluid" loading="lazy"
														/>
													</figure>
													<h3 className="fs-5 fw-medium text-dark">Test software with AdvancedReporting System</h3>
													<p className="text-54 small">Online exam software ensures fast result generation, digital evaluation, sharing feedback.</p>
												</div>
											</div>
											<div className={`${RevolutionaryStyle['wow']} slideInUp`} data-wow-offset="7" data-wow-iteration="7" style={{ visibility: 'visible' }}>
												<div className="info__card">
													<figure className="icon__box bg-primary mx-auto rounded-circle d-flex justify-content-center align-items-center">
														<img 
															src={ExceptionSupport} 
															alt="Exception Support" width="40" height="43"
															className="img-fluid" loading="lazy"
														/>
													</figure>
													<h3 className="fs-5 fw-medium text-dark">Exception Support</h3>
													<p className="text-54 small">We offer exceptional support for the exam platform to your request. Our dedicated professionals work round the clock to work on your queries.</p>
												</div>
											</div>
											<div className={`${RevolutionaryStyle['wow']} slideInUp`} data-wow-offset="8" data-wow-iteration="8" style={{ visibility: 'visible' }}>
												<div className="info__card">
													<figure className="icon__box bg-green mx-auto rounded-circle d-flex justify-content-center align-items-center">
														<img 
															src={SmartSubscription}
															alt="Smart Subscription" width="40" height="43"
															className="img-fluid" loading="lazy"
														/>
													</figure>
													<h3 className="fs-5 fw-medium text-dark">Smart Subscription</h3>
													<p className="text-54 small">Subscription according to your reference for the use of an online test platform.</p>
												</div>
											</div>
											<div className={`${RevolutionaryStyle['wow']} slideInUp`} data-wow-offset="9" data-wow-iteration="9" style={{ visibility: 'visible' }}>
												<div className="info__card">
													<figure className="icon__box bg-blue mx-auto rounded-circle d-flex justify-content-center align-items-center">
														<img 
															src={ActiveAccessibility}
															alt="Dynamic Accessibility" width="57" height="42"
															className="img-fluid" loading="lazy"
														/>
													</figure>
													<h3 className="fs-5 fw-medium text-dark">Dynamic Accessibility</h3>
													<p className="text-54 small">Anywhere and anytime practice of online examination system. The exam platform helps in designing and assigningan online exam...</p>
												</div>
											</div>
								</div>
								<div className="mt-4 mt-lg-5">
									<Link to="#" className="btn btn-primary blue animate-btn rounded-0" data-text="EXPLORE WITH OUR EXPERTS" aria-label="EXPLORE WITH OUR EXPERTS">
										<span>EXPLORE WITH OUR EXPERTS </span>
									</Link>
								</div>
							</div>
					</section>
					
   </>)
 }
 export default Revolutionary;