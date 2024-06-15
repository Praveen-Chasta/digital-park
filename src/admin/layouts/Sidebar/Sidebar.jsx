import React,{ useEffect, useState} from "react";
import dashboardStyle from "../../dashboard/dashboard.module.css";
import { NavLink,Link,useNavigate } from "react-router-dom";
import {  useSelector } from "react-redux";
import './sidebar.css';


const Sidebar=()=>{

	const navigate = useNavigate();
	const data = useSelector((state) => state.userProfile.data);

	const initialUser = localStorage.getItem("token") || null;
	const initialUserName = localStorage.getItem("user_name") || null;
	const [user, setUser] = useState(initialUser);
	const [userName, setUserName] = useState(initialUserName);
	
	 
	useEffect(() => {
		
		const token = localStorage.getItem("token");
    	const UserName = localStorage.getItem("user_name");
		setUser(token || null);
    	setUserName(UserName || null);
   
	}, [initialUser]);


	const logout = () => {
		localStorage.removeItem("token");
		localStorage.removeItem("user_name");
	  
		setTimeout(() => {
		  // Get updated values
		  const token = localStorage.getItem("token");
		  const userName = localStorage.getItem("user_name");
	  
		  // Check if both token and userName are null
		  if (token === null && userName === null) {
			// Navigate to home page
			navigate("/");
		  }
	  
		  setUser(null);
		  setUserName(null);
		}, 0); 
	  };
  
  return(
        <>
         {/* <div className={dashboardStyle['sidebar']} id="sidebar">
                <div className={`${dashboardStyle['sidebar-inner']} slimscroll`}>
					<div id="sidebar-menu" className={dashboardStyle['sidebar-menu']}> */}
						
							{/* <li className={dashboardStyle['menu-title']}> 
								<span>Main Menu</span>
							</li> */}
							{/* <li className="submenu active">
								<Link href="#">
									<i className="feather-grid"></i> <span> Dashboard</span> <span className="menu-arrow"></span></Link>
								<ul>
									<li><Link href="index.html" className="active">Admin Dashboard</Link></li>
									<li><Link href="teacher-dashboard.html">Teacher Dashboard</Link></li>
									<li><Link href="student-dashboard.html">Student Dashboard</Link></li>
								</ul>
							</li> */}
							{/* <li className="submenu">
								<Link href="#"><i className="fas fa-graduation-cap"></i> <span> Students</span> <span className={dashboardStyle['menu-arrow']}></span></Link>
								<ul>
									<li><Link href="students.html">Student List</Link></li>
									<li><Link href="student-details.html">Student View</Link></li>
									<li><Link href="add-student.html">Student Add</Link></li>
									<li><Link href="edit-student.html">Student Edit</Link></li>
								</ul>
							</li> */}
							
							{/* <ul className="sidebar-ul-list">
								<li className="sidebar-ul-0 mt-4">
									<Link to="/" className="sidebar-ul-0" activeClassName="active-link">Dashboard</Link>
								</li>
								<li className="sidebar-ul-0"> 
									<Link to="/quiz" className="sidebar-ul-0" activeClassName="active-link">Quizz</Link>
								</li>
								<li className="sidebar-ul-0">
									<Link to="/profile" className="sidebar-ul-1" activeClassName="active-link">
										<i className="bi bi-person"></i>Profile
									</Link>
								</li>
								<li className="sidebar-ul-0">
									<Link to="/" className="sidebar-ul-1" activeClassName="active-link"  onClick={logout}>
										<i className="bi bi-box-arrow-right bg-white"></i>Logout
									</Link>
								</li>
							</ul> */}
							
							{/* <li className="submenu">
								<Link href="#"><i className="fas fa-chalkboard-teacher"></i> <span> Teachers</span> <span className={dashboardStyle['menu-arrow']}></span></Link>
								<ul>
									<li><Link href="teachers.html">Teacher List</Link></li>
									<li><Link href="teacher-details.html">Teacher View</Link></li>
									<li><Link href="add-teacher.html">Teacher Add</Link></li>
									<li><Link href="edit-teacher.html">Teacher Edit</Link></li>
								</ul>
							</li>
							<li className="submenu">
								<Link href="#"><i className="fas fa-building"></i> <span> Departments</span> <span className={dashboardStyle['menu-arrow']}></span></Link>
								<ul>
									<li><Link href="departments.html">Department List</Link></li>
									<li><Link href="add-department.html">Department Add</Link></li>
									<li><Link href="edit-department.html">Department Edit</Link></li>
								</ul>
							</li>
							<li className="submenu">
								<Link href="#"><i className="fas fa-book-reader"></i> <span> Subjects</span> <span className={dashboardStyle['menu-arrow']}></span></Link>
								<ul>
									<li><Link href="subjects.html">Subject List</Link></li>
									<li><Link href="add-subject.html">Subject Add</Link></li>
									<li><Link href="edit-subject.html">Subject Edit</Link></li>
								</ul>
							</li>
						 */}
						
					{/* </div>
          </div>
        </div> */}
		<div className="sidebar-container">
		<ul className="sidebar-ul-list">
			<li className="sidebar-ul-0 mt-4">
				<NavLink to="/admin-dashboard" >Dashboard</NavLink>
			</li>
			<li className="sidebar-ul-0 mt-4">
				<NavLink to="/quiz" >Quizz</NavLink>
			</li>
			<li className="sidebar-ul-0 mt-4">
				<NavLink to="/profile" >Profile</NavLink>
			</li>
			<li className="sidebar-ul-0 mt-4">
				<Link to="/" onClick={logout}>Logout</Link>
			</li>
    	</ul>
		</div>
        </>
        )
}
export default Sidebar;