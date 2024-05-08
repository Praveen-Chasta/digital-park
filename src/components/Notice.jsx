import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import NoticeBoard from "../asset/images/home/notice-board-gradient.svg";
import {Link} from "react-router-dom";

const  Notice =()=>
	{
		
    return(<>
  <section className="py-5 position-relative">
		<img 
			src={NoticeBoard}
			alt="Digitaledupark" width="1920" height="354"
			className="img-fluid object-fit-cover position-absolute bottom-0 start-0 z-0 w-100 h-100"
		/>
				<div className="container py-sm-4 position-relative z-1 ">
					<div className="row g-0 mb-md-3">
						<div className="col-md-8">
							<h2 className="fs-1 text-primary fw-bold wow slideInDown" data-wow-offset="2" data-wow-iteration="2">Notice Board</h2>
						</div>
						<div className="col-md-4 text-end d-none d-md-block">
							<Link to="#" className="btn btn-primary blue animate-btn" data-text="View all Notices" aria-label="View all Notices">
								<span>View all Notices</span>
							</Link>
						</div>
					</div>
					<p className=" wow slideInUp" data-wow-offset="6" data-wow-iteration="6">
						It is an exceptional online test platform for conducting online exams and solving all your preparation doubts. It is a smooth online examination system to use and enhances the flow of information.
					</p>

					<OwlCarousel  margin={40} loop  className="owl-carousel noticeCarousel" items={2} autoplay autoplayTimeout={10000} autoplaySpeed={3000}>

							<Link to="#" className="notice__card d-flex rounded-2 align-items-center" style={{'--date-bg':'#C7EFFC','--card-bg':'#EBFAFF'}}>
								<div className="date fs-3 fw-medium text-dark p-3 text-center rounded-1 lh-1">
									Jan 26
								</div>
								<div className="col ps-3">
									<p className="fs-15 mb-0">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
								</div>
							</Link>
							<Link to="#" className="notice__card d-flex rounded-2 align-items-center" style={{'--date-bg':'#FFEFB9','--card-bg':'#FFF7DD'}}>
								<div className="date fs-3 fw-medium text-dark p-3 text-center rounded-1 lh-1">
									Jan 28
								</div>
								<div className="col ps-3">
									<p className="fs-15 mb-0">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
								</div>
							</Link>
							<Link to="#" className="notice__card d-flex rounded-2 align-items-center" style={{'--date-bg':'#d4ffb9','--card-bg':'#efffdd'}}>
								<div className="date fs-3 fw-medium text-dark p-3 text-center rounded-1 lh-1">
									Jan 30
								</div>
								<div className="col ps-3">
									<p className="fs-15 mb-0">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
								</div>
							</Link>
							<Link to="#" className="notice__card d-flex rounded-2 align-items-center" style={{'--date-bg':'#c2f2e8','--card-bg':'#E3FFF3'}}>
								<div className="date fs-3 fw-medium text-dark p-3 text-center rounded-1 lh-1">
									Feb 05
								</div>
								<div className="col ps-3">
									<p className="fs-15 mb-0">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
								</div>
							</Link>
					</OwlCarousel>
		</div>
	</section>
	
      </>)
}
export default Notice;