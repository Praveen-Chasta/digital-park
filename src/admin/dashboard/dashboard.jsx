import Header from "../layouts/Header/Header.jsx";
import Footer from "../layouts/Footer/Footer.jsx";
import Sidebar from "../layouts/Sidebar/Sidebar.jsx";
import dashboardStyle from "./dashboard.module.css";
//  import "./dashboard.css";
const dashboard=()=>{
   return(
   <>
        <div className={dashboardStyle['main-wrapper']}>
		
          <Header/>
			     <Sidebar/>
		       <div className={dashboardStyle['page-wrapper']}>

          <div className={`content container-fluid`}>
					<div className={dashboardStyle['page-header']}>
						<div className="row">
							<div className="col-sm-12">
								<div className={dashboardStyle['page-sub-header']}>
									<h3 className={dashboardStyle['page-title']}>Welcome Admin!</h3>
									<ul className={dashboardStyle['breadcrumb']}>
										<li className="breadcrumb-item"><a href="index.html">Home</a></li>
										<li className="breadcrumb-item active">Admin</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					
					<div className="row">
						<div className="col-xl-3 col-sm-6 col-12 d-flex">
							<div className="card bg-comman w-100">
								<div className="card-body">
									<div className="db-widgets d-flex justify-content-between align-items-center">
										<div className="db-info">
											<h6>Students</h6>
											<h3>50055</h3>
										</div>	
										<div className="db-icon">
											<img  src="admin/assets/img/icons/dash-icon-01.svg"  alt="Dashboard Icon"/>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="col-xl-3 col-sm-6 col-12 d-flex">
							<div className="card bg-comman w-100">
								<div className="card-body">
									<div className="db-widgets d-flex justify-content-between align-items-center">
										<div className="db-info">
											<h6>Awards</h6>
											<h3>50+</h3>
										</div>		
										<div className="db-icon">
											<img  src="admin/assets/img/icons/dash-icon-02.svg"  alt="Dashboard Icon"/>
										</div>	
									</div>
								</div>
							</div>
						</div>

						<div className="col-xl-3 col-sm-6 col-12 d-flex">
							<div className="card bg-comman w-100">
								<div className="card-body">
									<div className="db-widgets d-flex justify-content-between align-items-center">
										<div className="db-info">
											<h6>Department</h6>
											<h3>30+</h3>
										</div>
										<div className="db-icon">
											<img  src="admin/assets/img/icons/dash-icon-03.svg"  alt="Dashboard Icon"/>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="col-xl-3 col-sm-6 col-12 d-flex">
							<div className="card bg-comman w-100">
								<div className="card-body">
									<div className="db-widgets d-flex justify-content-between align-items-center">
										<div className="db-info">
											<h6>Revenue</h6>
											<h3>$505</h3>
										</div>	
										<div className="db-icon">
											<img  src="admin/assets/img/icons/dash-icon-04.svg"  alt="Dashboard Icon"/>
										</div>	
									</div>
								</div>
							</div>
						</div>
					</div>
				
				</div>
				 <Footer/>
			</div>
			
		
        </div>
	 </>
   );
}
export default dashboard;