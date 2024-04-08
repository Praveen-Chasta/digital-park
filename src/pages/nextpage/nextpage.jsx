import React, { useState } from "react";
import "./nextpage.css";
import Assessmentnext from "../../components/assessmentnext/assessmentnext";
import Subjectquiznext from "../../components/subjectquiznext/subjectquiznext";
import Support from "../../components/support/support";
import Reviews from "../../components/reviews/reviews";
import AccordionUsage from "../../components/faq/faq";
import Footer from "../../components/footer/footer";
import Quicklinks from "../../components/quicklinks/quicklinks";
import Login from "../../components/login/login";
const Nextpage = () => {
  const [showlogin, setshowlogin] = useState(false);
  
  return (
    <div>
      {/* <Navbar  onloginClick={ ()=> {setshowlogin(true)}}/> */}
      <Assessmentnext />
      <Subjectquiznext />
      <Support />
      <Reviews />
      <AccordionUsage />
      <Footer />
      <Quicklinks />
      { !showlogin ? null : <Login></Login>
        
      }
    </div>
  );
};

export default Nextpage;
