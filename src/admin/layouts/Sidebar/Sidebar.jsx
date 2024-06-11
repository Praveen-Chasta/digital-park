import React  from "react";
import dashboardStyle from "../../dashboard/dashboard.module.css";
// import { Link } from "react-router-dom";
import './sidebar.css';


const Sidebar=()=>{
	 
  
  return(
        <>
         <div className={dashboardStyle['sidebar']} id="sidebar">
                <div className={`${dashboardStyle['sidebar-inner']} slimscroll`}>
					<div id="sidebar-menu" className={dashboardStyle['sidebar-menu']}>
						<ul>
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
							
								<li className="ul-0 mt-4">Dashboard</li>
								<li className="ul-1 mt-4">Quizz</li>
								<li className="ul-1 mt-4">History</li>
								<li className="ul-1 mt-4"><i class="bi bi-person"></i>Profile</li>
								<li className="ul-1 mt-4">Contact Us</li>
								<li className="ul-1 mt-4"><i class="bi bi-box-arrow-right bg-white"></i>Logout</li>
							
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
						</ul>
					</div>
          </div>
        </div>
        </>
        )
}
export default Sidebar;