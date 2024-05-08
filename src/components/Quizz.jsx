import React from "react";
import QuizzTop from "../asset/images/home/preloaded-quizze-top-line.svg";
import QuizzBottom from "../asset/images/home/preloaded-quizze-bottom-line.svg";
import LanguageIcon from "../asset/images/icons/language.svg";
import LanguageMath from "../asset/images/icons/maths.svg";
import Coding from "../asset/images/icons/coding.svg";
import Music from "../asset/images/icons/coding.svg";
import Curriculum from "../asset/images/icons/full-curriculum.svg";
import Writing from "../asset/images/icons/writing.svg";
import Reading from "../asset/images/icons/reading.svg";
import ScoialEmotional from "../asset/images/icons/social-emotional.svg";
import {Link} from "react-router-dom";

const Quizz =()=>
	{
	
  return (
  <section className="py-5 preloaded__quizze__wrapper text-center position-relative">
			<img 
				src={QuizzTop}
				alt="Digitaledupark" width="110" height="85"
				className="img-fluid position-absolute top-0 end-0 z-1 line__one d-none d-md-block"
			/>
			<img 
				src={QuizzBottom}
				alt="Digitaledupark" width="172" height="59"
				className="img-fluid position-absolute bottom-0 start-0 z-1 line__two d-none d-md-block"
			/>
			<div className="container py-sm-4">
				<h2 className="text-center fs-1 fw-semibold text-primary  wow slideInDown" data-wow-offset="4" 
					data-wow-iteration="4">Preloaded Quizzes </h2>

				<div className="row g-3 mt-4 row-cols-2 row-cols-md-3 row-cols-lg-4">
					<div className=" wow slideInUp" data-wow-offset="1" data-wow-iteration="1">
						<div className="info__card">
							<figure className="icon__box bg-white mx-auto rounded-circle d-flex justify-content-center align-items-center">
								<img 
									src={LanguageIcon}
									alt="Digitaledupark" width="144" height="126"
									className="img-fluid" loading="lazy"
								/>
							</figure>
							<h3 className="fs-5 fw-normal">
								<Link to="#">Languages</Link>
							</h3>
						</div>
					</div>
					<div className=" wow slideInUp" data-wow-offset="2" data-wow-iteration="2">
						<div className="info__card">
							<figure className="icon__box bg-white mx-auto rounded-circle d-flex justify-content-center align-items-center">
								<img 
									src={LanguageMath}
									alt="Digitaledupark" width="144" height="126"
									className="img-fluid" loading="lazy"
								/>
							</figure>
							<h3 className="fs-5 fw-normal">
								<Link to="#">Maths</Link>
							</h3>
						</div>
					</div>
					<div className=" wow slideInUp" data-wow-offset="3" data-wow-iteration="3">
						<div className="info__card">
							<figure className="icon__box bg-white mx-auto rounded-circle d-flex justify-content-center align-items-center">
								<img 
									src={Coding}
									alt="Coding" width="144" height="126"
									className="img-fluid" loading="lazy"
								/>
							</figure>
							<h3 className="fs-5 fw-normal">
								<Link to="#">Coding</Link>
							</h3>
						</div>
					</div>
					<div className=" wow slideInUp" data-wow-offset="4" data-wow-iteration="4">
						<div className="info__card">
							<figure className="icon__box bg-white mx-auto rounded-circle d-flex justify-content-center align-items-center">
								<img 
									src={Music} 
									alt="Music" width="144" height="126"
									className="img-fluid" loading="lazy"
								/>
							</figure>
							<h3 className="fs-5 fw-normal">
								<Link to="#">Music</Link>
							</h3>
						</div>
					</div>
					<div className=" wow slideInUp" data-wow-offset="5" data-wow-iteration="5">
						<div className="info__card mt-3 mt-lg-4">
							<figure className="icon__box bg-white mx-auto rounded-circle d-flex justify-content-center align-items-center">
								<img 
									src={Curriculum}
									alt="Full Curriculum" width="144" height="126"
									className="img-fluid" loading="lazy"
								/>
							</figure>
							<h3 className="fs-5 fw-normal">
								<Link to="#">Full Curriculum</Link>
							</h3>
						</div>
					</div>
					<div className=" wow slideInUp" data-wow-offset="6" data-wow-iteration="6">
						<div className="info__card mt-3 mt-lg-4">
							<figure className="icon__box bg-white mx-auto rounded-circle d-flex justify-content-center align-items-center">
								<img 
									src={Writing}
									alt="Writing" width="144" height="126"
									className="img-fluid" loading="lazy"
								/>
							</figure>
							<h3 className="fs-5 fw-normal">
								<Link to="#">Writing</Link>
							</h3>
						</div>
					</div>
					<div className=" wow slideInUp" data-wow-offset="7" data-wow-iteration="7">
						<div className="info__card mt-3 mt-lg-4">
							<figure className="icon__box bg-white mx-auto rounded-circle d-flex justify-content-center align-items-center">
								<img 
									src={Reading}
									alt="Reading" width="144" height="126"
									className="img-fluid" loading="lazy"
								/>
							</figure>
							<h3 className="fs-5 fw-normal">
								<Link to="#">Reading</Link>
							</h3>
						</div>
					</div>
					<div className=" wow slideInUp" data-wow-offset="8" data-wow-iteration="8">
						<div className="info__card mt-3 mt-lg-4">
							<figure className="icon__box bg-white mx-auto rounded-circle d-flex justify-content-center align-items-center">
								<img 
									src={ScoialEmotional}
									alt="Social Emotional" width="144" height="126"
									className="img-fluid" loading="lazy"
								/>
							</figure>
							<h3 className="fs-5 fw-normal">
								<Link to="#">Social Emotional</Link>
							</h3>
						</div>
					</div>
				</div>
			</div>
	</section>
	)
}
export default Quizz;