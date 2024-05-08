import React  from "react";
import img from "../asset/images/icons/Comprehension.svg";
import img1 from "../asset/images/icons/Subjective.svg";
import img2 from "../asset/images/icons/interface.svg";
import img3 from "../asset/images/icons/interface.svg";

const Info =()=>{

  return(<>
    <div className="py-3 bg-light">
		<div className="container">
			<div className="row g-3">
				<div className="col-lg-3 col-md-6">
					<div className="d-flex gap-2 align-items-center wow slideInLeft" data-wow-offset="2" 
data-wow-iteration="2">
						<figure className="mb-0">
							<img src= {img} width="17" height="20" alt="Assesment"/>
						</figure>
						<div className="col">
							<p className="mb-0 fw-medium text-dark">Comprehensive Assesment</p>
						</div>
					</div>
				</div>
				<div className="col-lg-3 col-md-6">
					<div className="d-flex gap-2 align-items-center wow slideInUp" data-wow-offset="4" 
data-wow-iteration="4">
						<figure className="mb-0">
							<img src={img1} width="17" height="20" alt="Subjective"/>
						</figure>
						<div className="col">
							<p className="mb-0 fw-medium text-dark">Subjective Evaluation</p>
						</div>
					</div>
				</div>
				<div className="col-lg-3 col-md-6">
					<div className="d-flex gap-2 align-items-center wow slideInUp" data-wow-offset="6" 
data-wow-iteration="6">
						<figure className="mb-0">
							<img src={img2} width="17" height="20" alt="Interface"/>
						</figure>
						<div className="col">
							<p className="mb-0 fw-medium text-dark">Userfriendly Interface</p>
						</div>
					</div>
				</div>
				<div className="col-lg-3 col-md-6">
					<div className="d-flex gap-2 align-items-center wow slideInRight" data-wow-offset="10" 
data-wow-iteration="10">
						<figure className="mb-0">
							<img src={img3} width="17" height="20" alt="Quick Rewards"/>
						</figure>
						<div className="col">
							<p className="mb-0 fw-medium text-dark">Quick Rewards</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
      </>)
}
export default Info;