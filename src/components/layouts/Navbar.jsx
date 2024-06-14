import React, { useEffect, useState , useContext} from 'react';

import Logo from '../../asset/images/digital-edu-park-logo.webp';
import {Link, useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
const Navbar=()=>{

	const [lastScrollTop, setLastScrollTop] = useState(0);
  const [scrollDirection, setScrollDirection] = useState(null);
	useEffect(() => {
    const handleScroll = () => {
      const scroll_top = window.pageYOffset;
      if (scroll_top < lastScrollTop) {
        setScrollDirection('up');
      } else {
        setScrollDirection('down');
      }
      if (scroll_top === 0) {
        setScrollDirection(null);
      }
      setLastScrollTop(scroll_top);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);


  	const navigate = useNavigate();

	const initialUser = localStorage.getItem("token") || null;
	const [user, setUser] = useState(initialUser !== "null" ? initialUser : null);


	console.log(user);
	useEffect(() => {
		
		const token = localStorage.getItem("token");
		setUser(token || null);
	}, [initialUser]);


	const logout = () => {
		localStorage.removeItem("token");
		setUser(null);
		navigate("/");
	};
  
  return (
     	 <nav className={`navbar navbar-expand-xl smart-scroll ${scrollDirection ? `scrolled-${scrollDirection}` : ''}`} id="mainNav">
				<div className="container-fluid position-relative px-sm-4 px-md-5">
					
					<Link to="/" className="navbar-brand p-0 m-0 d-inline-block" aria-label="Digitaledupark" title="Digitaledupark">
						<img src={Logo} width="180" height="136" className="w-auto" alt="Digitaledupark"/>
					</Link> 

					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav ms-auto">
							<li className="nav-item ms-lg-2 ms-xxl-3">
								<Link className="nav-link active" aria-current="page" to="/">Home</Link>

							</li>
							
							<li className="nav-item ms-lg-2 ms-xxl-3">
								<Link className="nav-link" to="/about">About Us</Link>
							</li>
							<li className="nav-item ms-lg-2 ms-xxl-3 dropdown">
								<Link className="nav-link dropdown-toggl" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
									Academics
								</Link>
								<ul className="dropdown-menu">
									<li><Link to="#" className="dropdown-item" >action</Link></li>
									<li><Link to="#" className="dropdown-item" >Another action</Link></li>  
								</ul>
							</li>

							<li className="nav-item ms-lg-2 ms-xxl-3">
								<Link to="#" className="nav-link">Govt Services</Link>
							</li>
							<li className="nav-item ms-lg-2 ms-xxl-3">
								<Link to="#" className="nav-link">Competitive Exams</Link>
							</li>
							<li className="nav-item ms-lg-2 ms-xxl-3">
								<Link to="#" className="nav-link">Rewards</Link>
							</li>
						</ul>  
					</div>
					<div className="d-inline-flex gap-3">
						{user ? ( 
							<>
							<Link to="#" className="btn btn-primary ff-pro fw-semibold text-uppercase rounded-0 py-2 ms-4" onClick={logout} >Logout</Link>
						<button className="navbar-toggler p-0 border-0 d-inline-flex justify-content-center align-items-center d-xl-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
							<svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 24 24"><path fill="none" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/></svg>
						</button>
							</>
						
						   ) : ( 
							<>
						   <Link to="#" className="btn btn-primary ff-pro fw-semibold text-uppercase rounded-0 py-2 ms-4" aria-label="Login" data-bs-toggle="modal" data-bs-target="#loginPopup">Login</Link>
						   <button className="navbar-toggler p-0 border-0 d-inline-flex justify-content-center align-items-center d-xl-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
							   <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 24 24"><path fill="none" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/></svg>
						   </button>
						   </>
							  ) 
							}
					</div>
				</div>
			</nav>
		
  	);
};
export default Navbar;