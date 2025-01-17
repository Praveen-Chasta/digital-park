import React,{useState,useEffect,useCallback} from "react";
import DoubleCheck from "../asset/images/icons/doubble-check.svg";
import AssessmentGradient from "../asset/images/home/assesment-gradient.svg";
import {Link} from "react-router-dom";
import axios from 'axios';
import { SERVER_URL } from "../config";
import AssessmentStyle from "./AssessmentStyle.module.css";
import { categoriesClassReducer } from "./class/SubjectClassSlice";
import { useDispatch, useSelector } from "react-redux";
import { debounce } from 'lodash';

const BASE_URL = SERVER_URL;

 const Assesment =()=>{

	const dispatch = useDispatch()

	// const categoryData = useSelector((state) => state.subjectClass.classCategories) || [];
	let [categoryData, setCategoryData] = useState([]);

	let stateResponse = useSelector((state)=>state)

				// useEffect(() => 
				// 	{
				// 			axios.get(`${BASE_URL}/categories-class`)
				// 			.then(response => 
				// 				{
				// 						setCategoriesClassData(response.data.data);
				// 				})
				// 			.catch(error => {
				// 					console.error('Error fetching data: ', error);
				// 			});
				// 	}, 
				// 	[]);
					

	const getClassCategoriesList = useCallback(async () => {
		try {			
			dispatch(categoriesClassReducer());
		} catch (error) {
			console.error("Failed to fetch quiz questions:", error);
		}
		}, []);


		useEffect(()=>{
			let {subjectClass}=  stateResponse
			let {classCategories}=  subjectClass

			
			if (classCategories.length === 0 ) {
				getClassCategoriesList();
			}else{
				setCategoryData(classCategories)
			}
		},[stateResponse.subjectClass.classCategories])
	

					const bgColors = ['bg-blue', 'bg-primary', 'bg-green'];
					const Colors = ['blue', 'primary', 'green'];

					
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
																<div className={`card-header  border-0 py-3 ${bgColors[index % bgColors.length]} `}>
																	<h3 className="fs-6 fw-medium text-white mb-0">{data.category}</h3>
																</div>
																<div className="card-body">
																	<ul className="d-flex flex-column gap-2 check__list fw-medium" style={{'--double-check':`url(${DoubleCheck});`}}>
																			{data.class.map((classData, classIndex) => (
																					// <li key={classData.id}>{classData.class_name}	</li>
																					
																					<Link key={classIndex}  className={AssessmentStyle['fontStyle']}
																					to={`/classes/${classData?.class_id}`} 
																					>{classData.class_name} </Link>
						
                       							 	))}
													
																	</ul>
																</div>
																<div className="card-footer border-0 py-3 bg-transparent">
																	<button className={`btn btn-primary ${Colors[index % Colors.length]} fs-6 w-100`} disabled>View all </button>
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