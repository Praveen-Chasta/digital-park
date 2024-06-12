import {logo,smlogo,profile01} from "../../imagepath";
import { Link ,useNavigate} from "react-router-dom";
import React,{ useCallback, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import dashboardStyle from "../../dashboard/dashboard.module.css";
import { useState } from "react";
import { profileReducer } from "../../../components/Auth/UserProfileSlice";
import { useLayoutEffect } from "react";
import "./header.css";
const Header =()=>{

  const data = useSelector((state) => state.userProfile.data);
  // const [ userName , setUserName ] = useState('');

 
  const dispatch = useDispatch();
  const getAllList = useCallback(async () => {
    dispatch(
      profileReducer({
      })
    );
  }, [dispatch]);

  useEffect(() => {
    let mounted = true;

    if (mounted) {
      getAllList();
    }

    return () => {
      mounted = false;
    };
  }, [getAllList]);
//   useLayoutEffect(() => {

//     // getAllList();
// }, [data.full_name]);

  const navigate = useNavigate();

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
    console.log("kjdbbj");

    navigate("/");
		setUser(null);
    setUserName(null);
		
	};



  return(
        <>
        <div className={dashboardStyle['header']}>
			
      <div className={dashboardStyle['header-left']}>
            <Link to="/" className={dashboardStyle['logo']}>
          <img src="https://res.cloudinary.com/dp3nahxbi/image/upload/v1718081114/Logo_1_e4kznt.png" alt="Logo"/>
        </Link>
        {/* <Link href="index.html" className={`${dashboardStyle['logo']} logo-small`}>
          <img src={smlogo} alt="Logo" width="30" height="30"/>
        </Link> */}
      </div>
      
      {/* <div className={dashboardStyle['menu-toggle']}>
      <Link href="javascript:void(0);" id={dashboardStyle['toggle_btn']}>
      <i className="fas fa-bars"></i>
      </Link>
      </div> */}
{/*       
      <div className={dashboardStyle['top-nav-search']}>
      <form>
      <input type="text" className={dashboardStyle['form-control']} placeholder="Search here"/>
      <button className={dashboardStyle['btn']} type="submit"><i className="fas fa-search"></i></button>
      </form>
      </div> */}
     <div className="header-flex-container d-flex align-item-center justify-content-between">
        <h2 className="student-result-heading">Result</h2>
          <Link className={dashboardStyle['mobile_btn']} id="mobile_btn">
          <i className="fas fa-bars"></i>
          </Link>
          <ul className={`nav ${dashboardStyle['user-menu']}`}>

          <Link to="/admin-dashboard" className="student-result-heading"> Dashboard</Link>

          <li className="nav-item dropdown has-arrow new-user-menus">
          <Link href="#" className={`dropdown-toggle ${dashboardStyle['nav-link']} `} data-bs-toggle="dropdown">
          <div className={dashboardStyle['user-img']}>
            
            <div className={dashboardStyle['user-text']}>
            <h6 className="student-username">Hi 
            {user ? <> {userName ?? ""} </> : <> {""}</>} </h6>
              {/* <p className={`${dashboardStyle['text-muted']} mb-0`}>Administrator</p> */}
            </div>
            <img className="rounded-circle" src={profile01} width="31" alt="Ryan Taylor"/>
          </div>
          </Link>
          <div className="dropdown-menu">
          <div className={dashboardStyle['user-header']}>
            <div className={`${dashboardStyle['avatar']} ${dashboardStyle['avatar-sm']}`}>
              <img src={profile01} alt="User Image" className="avatar-img rounded-circle"/>
            </div>
            <div className={dashboardStyle['user-text']}>
            <h6>Hi 
            {user ? <> {userName ?? ""} </> : <> {""}</>} </h6>
              {/* <p className={`${dashboardStyle['text-muted']} mb-0`}>Administrator</p> */}
            </div>
          </div>
          {/* <Link className={dashboardStyle['dropdown-item']} href="profile.html">My Profile</Link>
          <Link className={dashboardStyle['dropdown-item']} href="inbox.html">Inbox</Link> */}
          <Link to="/" className={dashboardStyle['dropdown-item']}  onClick={logout}>Logout</Link>
          </div>
          </li>
          
          </ul>
        </div>
      
      </div>
        </>
      )
}
export default Header;
