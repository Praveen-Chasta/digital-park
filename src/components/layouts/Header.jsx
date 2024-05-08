
import React from "react";
// import HeroBanner from "../../asset/images/home/hero-banner.jpg";
// import HeroBannerSm from "../../asset/images/home/hero-banner-sm.jpg";
// import HeroBannerMd from "../../asset/images/home/hero-banner-md.jpg";
// import HeroBannerHigh from "../../asset/images/home/hero-banner-md.jpg";
//  import Video from "../../asset/video/home-video.mp4";

//  import HeroLine from "../../asset/images/home/hero-lines.svg";
//  import HeroLineTwo from "../../asset/images/home/hero-line-two.svg";
import Video from "../../asset/video/Final.mp4";



 const Header =()=>{
    return (
              
<div className="header__wrapper d-flex">
	{/* <img 
		src={HeroBanner} 
		srcset={`${HeroBannerSm} 575w, ${HeroBannerMd} 991w, ${HeroBannerHigh} 1200w `}
		sizes="(max-width:575px) 500px, (max-width: 991px) 1000px, 100%"
		alt="Digitaledupark" width="1920" height="600"
		className="img-fluid w-100 h-100 object-fit-cover position-absolute top-0 start-0 z-0"
	/>
	<img 
		src={HeroLine} 
		alt="Digitaledupark" width="289" height="354"
		className="img-fluid position-absolute bottom-0 start-0 z-1 line__one d-none d-md-block"
	/>
	<img 
		src={HeroLineTwo}
		alt="Digitaledupark" width="272" height="402"
		className="img-fluid position-absolute bottom-0 end-0 z-1 line__two d-none d-md-block"
	/> */}
	  <video autoPlay loop muted playsInline preload="auto">
      <source src={Video} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
	
	{/* <div className="position-absolute bottom-0 end-0 z-1 w-100 h-100 d-sm-none gradient__overlay"></div>
			<div className="container position-relative z-3">
				<div className="col-xl-6 col-lg-8 col-md-9"> 
					<h1 className="display-3 fw-bold text-white">
						<span className="fs-3 fw-normal d-block">Simply Powerful online</span>
						Quizzes & Exams
					</h1>
					<p className="fs-5 fw-light text-dark">
						AI-powered skills and knowledge assessment software, serving 2.5M+ business and educational users worldwide.
					</p>
					<div className="d-flex flex-wrap gap-3 justify-content-center justify-content-sm-start">
						<a href="#" className="btn btn-primary rounded-0 animate-btn" data-text="Sign Up For Your Free" aria-label="Sign Up For Your Free">
							<span>Sign Up For Your Free</span>
						</a>
						<a href="#" className="btn btn-outline-dark rounded-0" data-text="Watch Video" aria-label="Watch Video">
							<span>Watch Video</span>
						</a>
					</div>
				</div>
			</div>  */}

</div>
 )
 };
 export default Header;
