import {logo,smlogo,profile01} from "../../imagepath";
import { Link } from "react-router-dom";
import dashboardStyle from "../../dashboard/dashboard.module.css";
const Header =()=>{
  return(
        <>
        <div className={dashboardStyle['header']}>
			
      <div className={dashboardStyle['header-left']}>
            <Link href="index.html" className={dashboardStyle['logo']}>
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
          <h6>Hi Ashish</h6>
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
          <h6>Hi Ashish</h6>
          {/* <p className={`${dashboardStyle['text-muted']} mb-0`}>Administrator</p> */}
        </div>
      </div>
      {/* <Link className={dashboardStyle['dropdown-item']} href="profile.html">My Profile</Link>
      <Link className={dashboardStyle['dropdown-item']} href="inbox.html">Inbox</Link> */}
      <Link className={dashboardStyle['dropdown-item']} href="login.html">Logout</Link>
      </div>
      </li>
      
      </ul>
      
      </div>
        </>
      )
}
export default Header;
