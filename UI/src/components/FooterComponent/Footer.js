import './Footer.css';
import { useState, useEffect } from 'react';

function Footer() {

  const [footerContent, setFooterContent] = useState();

  useEffect(()=>{
    setInterval(()=>{
      if(localStorage.getItem('role')=="admin" || localStorage.getItem('role')=="user")
      {
        setFooterContent(
          <>

          </>
        )

      }
      else
      {
        setFooterContent(
          <>
          <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <h4 className="text-white mb-3">Company</h4>
              <a className="btn btn-link" >About Us</a>
              <a className="btn btn-link" >Contact Us</a>
              <a className="btn btn-link" >Privacy Policy</a>
              <a className="btn btn-link" >Terms & Condition</a>
              <a className="btn btn-link" >FAQs & Help</a>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-white mb-3">Contact</h4>
              <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>123 Street, Maharastra, India</p>
              <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+91 987654321</p>
              <p className="mb-2"><i className="fa fa-envelope me-3"></i>myhotels@gmail.com</p>
              <div className="d-flex pt-2">
                <a className="btn btn-outline-light btn-social" ><i className="fab fa-twitter tcolor"></i></a>
                <a className="btn btn-outline-light btn-social" ><i className="fab fa-facebook-f fcolor"></i></a>
                <a className="btn btn-outline-light btn-social" ><i className="fab fa-youtube ycolor"></i></a>
                <a className="btn btn-outline-light btn-social" ><i className="fab fa-linkedin-in lcolor"></i></a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-white mb-3">Gallery</h4>
              <div className="row g-2 pt-2">
                <div className="col-4">
                  <img className="img-fluid bg-light p-1" src="assets/img/package-1.jpg" alt="" />
                </div>
                <div className="col-4">
                  <img className="img-fluid bg-light p-1" src="assets/img/package-2.jpg" alt="" />
                </div>
                <div className="col-4">
                  <img className="img-fluid bg-light p-1" src="assets/img/package-3.jpg" alt="" />
                </div>
                <div className="col-4">
                  <img className="img-fluid bg-light p-1" src="assets/img/package-2.jpg" alt="" />
                </div>
                <div className="col-4">
                  <img className="img-fluid bg-light p-1" src="assets/img/package-3.jpg" alt="" />
                </div>
                <div className="col-4">
                  <img className="img-fluid bg-light p-1" src="assets/img/package-1.jpg" alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-white mb-3">Enquiry</h4>
              <p>For more details sign up with your email or mobile no. to coonect with us.</p>
              <div className="position-relative mx-auto" style={{ maxWidth: "400px" }}>
                <input className="form-control border-primary w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
                <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
              </div>
            </div>
          </div>
        </div>
          </>
        )
      }
    },1);
  },[]);
  

  return (
    <>
      {/* Footer Start */}
      <div className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
        {
          footerContent
        }
        <div className="container">
          <div className="copyright">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                &copy; <a className="border-bottom" >Estate Agency</a>, All Right Reserved.

                {/*/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. ****/}
                Designed By <a className="border-bottom" href="https://htmlcodex.com">HTML Codex</a>
              </div>
              <div className="col-md-6 text-center text-md-end">
                <div className="footer-menu">
                  <a href="">Home</a>
                  <a href="">Cookies</a>
                  <a href="">Help</a>
                  <a href="">FQAs</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer End */}
    </>
  )
}
export default Footer;
