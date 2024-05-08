import React from "react";
import Elipse from"../asset/images/home/ellipse.svg";
import ElipseRed from"../asset/images/home/ellipse-red.svg";
import ElipseGreen from"../asset/images/home/ellipse-green.svg";
import Student from"../asset/images/home/student.svg";
import Quotation from"../asset/images/home/quotation.svg";
import FiveStar from "../asset/images/icons/five-stars.svg";

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


const StudentWrapper =()=>{
  return(
        
          <section className="py-5 student__wraper position-relative">
            <img 
              src={Elipse}
              alt="ellipse" width="164" height="126"
              className="img-fluid position-absolute top-0 end-0 z-1 d-none d-md-block top__right__line"
            />
            <img 
              src={ElipseRed} 
              alt="ellipse" width="345" height="119"
              className="img-fluid position-absolute bottom-0 end-0 z-1 d-none d-md-block right__img"
            />
            <img 
              src={ElipseGreen}
              alt="ellipse" width="84" height="158"
              className="img-fluid position-absolute start-0 z-1 d-none d-md-block top__img"
            />

            <div className="container py-md-4">
              <h2 className="fs-1 text-center text-blue fw-semibold mb-4 mb-md-5">Our Student Words</h2> 

              <div className="col-lg-10 mx-auto"> 
                <OwlCarousel  margin={15} loop  items={1} autoplay  autoplayTimeout={10000} autoplaySpeed={3000} className="owl-carousel studentCarousel">
                    <div className="item d-flex flex-column flex-md-row justify-content-center gap-md-5 px-sm-4 px-md-5 align-items-center">
                      <div className="img__box position-relative">
                        <img 
                          src={Student} width="181" height="181" 
                          className="img-fluid rounded-circle object-fit-cover thumbnail" alt="Student"
                        />
                        <div className="img__wraper rounded-circle position-relative d-flex align-items-center justify-content-center p-3">
                          <img 
                            src={Quotation}
                            alt="quote" width="40" height="40"
                            className="img-fluid"
                          />
                        </div>
                      </div>
                      <div className="mt-3 mt-lg-4 col text-center text-md-start">
                        <p className="desc">
                          Porttitor massa id neque aliquam vestibulum morbi blandit cursus. Aliquet porttitor lacus luctus accumsan tortor. Pharetra convallis posuere morbi leoper urna molestie.Nisi est sit amet facilisis magna risus in hendrer.
                        </p>
                        <p className="lead-sm text-dark mb-2">Anne Boldren - Director</p>
                        <img src={FiveStar} width="131" height="22" className="w-auto ratings" alt="ratings"/>
                      </div>
                    </div>
                    <div className=" item d-flex flex-column flex-md-row justify-content-center gap-md-5 px-sm-4 px-md-5 align-items-center">
                      <div className="img__box position-relative">
                        <img 
                          src={Student} width="181" height="181" 
                          className="img-fluid rounded-circle object-fit-cover thumbnail" alt="Student"
                        />
                        <div className="img__wraper rounded-circle position-relative d-flex align-items-center justify-content-center p-3">
                          <img 
                            src={Quotation}
                            alt="quote" width="40" height="40"
                            className="img-fluid"
                          />
                        </div>
                      </div>
                      <div className="mt-3 mt-lg-4 col text-center text-md-start">
                        <p className="desc">
                          Porttitor massa id neque aliquam vestibulum morbi blandit cursus. Aliquet porttitor lacus luctus accumsan tortor. Pharetra convallis posuere morbi leoper urna molestie.Nisi est sit amet facilisis magna risus in hendrer.
                        </p>
                        <p className="lead-sm text-dark mb-2">Anne Boldren - Director</p>
                        <img src={FiveStar} width="131" height="22" className="w-auto ratings" alt="ratings"/>
                      </div>
                    </div>
                    <div className="item d-flex flex-column flex-md-row justify-content-center gap-md-5 px-sm-4 px-md-5 align-items-center">
                      <div className="img__box position-relative">
                        <img 
                          src={Student} width="181" height="181" 
                          className="img-fluid rounded-circle object-fit-cover thumbnail" alt="Student"
                        />
                        <div className="img__wraper rounded-circle position-relative d-flex align-items-center justify-content-center p-3">
                          <img 
                            src={Quotation}
                            alt="quote" width="40" height="40"
                            className="img-fluid"
                          />
                        </div>
                      </div>
                      <div className="mt-3 mt-lg-4 col text-center text-md-start">
                        <p className="desc">
                          Porttitor massa id neque aliquam vestibulum morbi blandit cursus. Aliquet porttitor lacus luctus accumsan tortor. Pharetra convallis posuere morbi leoper urna molestie.Nisi est sit amet facilisis magna risus in hendrer.
                        </p>
                        <p className="lead-sm text-dark mb-2">Anne Boldren - Director</p>
                        <img src={FiveStar} width="131" height="22" className="w-auto ratings" alt="ratings"/>
                      </div>
                    </div>
                </OwlCarousel>
              </div>
            </div>
	        </section>
	      )
}
export default StudentWrapper;