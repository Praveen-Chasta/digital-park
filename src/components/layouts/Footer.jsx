import React,{ useState, useEffect } from "react";
import {Link} from "react-router-dom";
import logo from "../../asset/images/digital-edu-park-logo.webp"

 const Footer =()=>{
	const [showButton, setShowButton] = useState(false);
	useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

	const handleScroll = () => {
    if (window.scrollY > 120) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

	const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
   return(
		<>
				<footer> 
							<div className="container">
								<div className="row g-4">
									<div className="col-xl-3 col-md-4 col-sm-6 col-6">
										<div className="ps-lg-5">
											<p className="fw-normal text-white text-uppercase">Used links</p>
											<ul className="links">
												<li className="mb-2"><Link to="/">Home </Link></li>
												<li className="mb-2"><Link to="/about">About Us </Link></li>
												<li className="mb-2"><Link to="#">Gallery</Link></li>
												<li className="mb-2"><Link to="#">Transfer Of Equity </Link></li>
												<li className="mb-2"><Link to="#">FAQs</Link></li>
											</ul>
										</div>
									</div>
									<div className="col-xl-3 col-md-4 col-sm-6 col-6">
										<div className="ps-lg-5">
											<p className="fw-normal text-white text-uppercase">Product</p>
											<ul className="links">
												<li className="mb-2"><Link to="#">Skills and Knowledge Assessment </Link></li>
												<li className="mb-2"><Link to="#">Easy Test Maker</Link></li>
												<li className="mb-2"><Link to="#">AI-Powered Question Creation</Link></li>
											</ul>
										</div>
									</div>
									<div className="col-xl-3 col-md-4 col-sm-6 col-6">
										<div className="ps-lg-5">
										{/* <p className="fw-normal text-white text-uppercase">Social Media</p> */}
											<ul className="links mt-4 mt-lg-5">
												<li className="mb-2"><Link to="#">Online Quiz Maker </Link></li>
												<li className="mb-2"><Link to="#">Exam Software</Link></li>
												<li className="mb-2"><Link to="#">Insights & Analytics</Link></li>
											</ul>
										</div>
									</div>
									<div className="col-xl-3 col-md-4 col-sm-6 col-6">
										<div className="ps-lg-5">
											<p className="fw-normal text-white text-uppercase">Social Media</p>
											<ul className="links">
												<li className="mb-2"><Link to="https://www.instagram.com/digitaledu.park" target="_blank">Instagram</Link></li>
												<li className="mb-2"><Link to="https://www.youtube.com/@digitaledupark"target="_blank">Youtube</Link></li>
												<li className="mb-2"><Link to="https://www.facebook.com/profile.php?id=61558629759797"target="_blank">Facebook</Link></li>
												<li className="mb-2"><Link to="https://www.linkedin.com/in/digital-edu-park-053098306"target="_blank">Linkedin</Link></li>
											</ul>
										</div>
									</div>
								</div>
							</div>

							<div className="copyright__wrapp py-3 mt-4 mt-md-5 position-relative">
								<div className="container-fluid"> 
									<div className="row g-2 align-items-center"> 
										<div className="col-md-12"> 
											<div className="text-center mb-0 text-white">&copy; DigitalEduPark 2024 | <Link to="#">Privacy Policy</Link> | <Link to="#">Terms and Conditions</Link></div>
										</div>
									</div>
								</div>
							</div>
				</footer>
				<div className="modal fade" id="loginPopup" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
        <div className="modal-content">
            <div className="modal-body">
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    <center><img src={logo} alt="Digitaledupark"/></center>
            <p>Enter your phone number to sign in</p>
            
            <label>User Name</label>
            <input type="text" className="form-control" placeholder="Enter User Name"/>

						<label>Enter Password</label>
            <input type="password" className="form-control" placeholder="Enter Password"/>
						
            <button type="button" className="btn btn-primary">Submit</button>
            
            <p>Don't have an account? <Link to="#">Sign Up</Link></p>
            
            </div>
        </div>
    </div>
    </div>
				<button
        onClick={scrollToTop}
        id="backTop"
        className={`btn backTop justify-content-center align-items-center rounded-circle p-0 bg-primary ${showButton ? 'd-flex' : 'd-none'}`}
        title="Go to top"
      >
				<svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 24 24"><path fill="#292929" d="M11.5 19V6.921l-5.792 5.792L5 12l7-7l7 7l-.708.713L12.5 6.921V19z"/></svg>
			</button>
 </>
   )
 };
 export default Footer;
