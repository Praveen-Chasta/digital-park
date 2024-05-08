import AboutPage from "../../asset/images/about-page.png";
const AboutPage=()=>{
  return (
      <>
        <section className="aboutpage clearfix">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-12">
                  <h2>About Us</h2>
                  <h3>Professional And Highly Qualified Tutors</h3>
                  <p>Sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Semper viverra nam libero justo laoreet sit. Nascetur ridiculus mus mauris vitae. Ac turpis egestas maecenas pharetra convallis posuere morbi leo urna. In hac habitasse platea dictumst quisque sagittis.</p>
                  <ul>
                    <li>Lam vel lorem nulla. Morbi in finibus augue. Interdum et</li>
                    <li>Lam vel lorem nulla. Morbi in finibus augue. Interdum et</li>
                    <li>Lam vel lorem nulla. Morbi in finibus augue. Interdum et</li>
                    <li>Lam vel lorem nulla. Morbi in finibus augue. Interdum et</li>
                  </ul>
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                  <img src={AboutPage} className="img-fluid" alt=""/> </div>
              </div>
            </div>
          </section>	
      </>
  )
}
export default AboutPage;