import Header from "../layouts/Header/Header.jsx";
import Footer from "../layouts/Footer/Footer.jsx";
import Sidebar from "../layouts/Sidebar/Sidebar.jsx";
import dashboardStyle from "./dashboard.module.css";
import Exampage from '../exam/Exampage.jsx';
import Instruction1 from "../Instruction/Instruction1.jsx";
//  import "./dashboard.css";
const dashboard=()=>{
   return(
   <>
        <div className={dashboardStyle['main-wrapper']}>
		
          <Header/>
			     <Sidebar/>
		       <div className={dashboardStyle['page-wrapper']}>

					 		<Instruction1/>
							{/* <Exampage/> */}
			
				
				</div>
				 <Footer/>
			</div>
			<br/>
			<br/>
		
	 </>
   );
}
export default dashboard;