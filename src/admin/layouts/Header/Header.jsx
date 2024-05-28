import {logo,smlogo,profile01} from "../../imagepath";
import { Link ,useNavigate} from "react-router-dom";
import React,{ useCallback, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import dashboardStyle from "../../dashboard/dashboard.module.css";
import { useState } from "react";
import { profileReducer } from "../../../components/Auth/UserProfileSlice";
const Header =()=>{

  const data = useSelector((state) => state.userProfile.data);

    console.log(data);
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

  const navigate = useNavigate();

	const initialUser = localStorage.getItem("token") || null;
	const [user, setUser] = useState(initialUser);

	useEffect(() => {
		
		const token = localStorage.getItem("token");
		setUser(token || null);
	}, [initialUser]);


	const logout = () => {
		localStorage.removeItem("token");
		setUser(null);
		navigate("/");
	};

  return(
        <>
        <div className={dashboardStyle['header']}>
			
      <div className={dashboardStyle['header-left']}>
            <Link to="/" className={dashboardStyle['logo']}>
          <img src={logo} alt="Logo"/>
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
      <Link className={dashboardStyle['mobile_btn']} id="mobile_btn">
      <i className="fas fa-bars"></i>
      </Link>
      <ul className={`nav ${dashboardStyle['user-menu']}`}>
     
      <li className="nav-item dropdown has-arrow new-user-menus">
      <Link href="#" className={`dropdown-toggle ${dashboardStyle['nav-link']} `} data-bs-toggle="dropdown">
      <div className={dashboardStyle['user-img']}>
        <img className="rounded-circle" src={profile01} width="31" alt="Ryan Taylor"/>
        <div className={dashboardStyle['user-text']}>
        <h6>Hi 
        {user ? <> {data.user_name} </> : <> {""}</>} </h6>
          {/* <p className={`${dashboardStyle['text-muted']} mb-0`}>Administrator</p> */}
        </div>
      </div>
      </Link>
      <div className="dropdown-menu">
      <div className={dashboardStyle['user-header']}>
        <div className={`${dashboardStyle['avatar']} ${dashboardStyle['avatar-sm']}`}>
          <img src={profile01} alt="User Image" className="avatar-img rounded-circle"/>
        </div>
        <div className={dashboardStyle['user-text']}>
        <h6>Hi 
        {user ? <> {data.user_name} </> : <> {""}</>} </h6>
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
        </>
      )
}
export default Header;
