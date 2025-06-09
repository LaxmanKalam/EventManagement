import './Header.css';
import { useState,useEffect } from 'react';

function Header()
{

    const [headerContent, setHeaderContent ]=useState();
    //useEffect Start
    useEffect(()=>{
        //agar routes nhi chale to use setinterval m lik denge
        setInterval(()=>{

            if(localStorage.getItem('role')=='admin')
                {
            setHeaderContent(
                <>
                {/* Topbar Start */}
    <div className="container-fluid bg-dark px-5 d-none d-lg-block">
        <div className="row gx-0">
            <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
                <div className="d-inline-flex align-items-center" style={{height:" 45px"}}>
                    <small className="me-3 text-light"><h3>Welcome to Admin Pannel!!!</h3></small>
                    <small className="me-3 text-light"><i className="fa fa-map-marker-alt me-2"></i>{localStorage.getItem('city')}</small>
                    <small className="me-3 text-light"><i className="fa fa-phone-alt me-2"></i>{localStorage.getItem('mobile')}</small>
                    <small className="text-light"><i className="fa fa-envelope-open me-2"></i>{localStorage.getItem('email')}</small>
                </div>
            </div>
            <div className="col-lg-4 text-center text-lg-end">
                <div className="d-inline-flex align-items-center" style={{height: "45px"}}>
                    <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"><i className="fab fa-twitter fw-normal"></i></a>
                    <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"><i className="fab fa-facebook-f fw-normal"></i></a>
                    <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"><i className="fab fa-linkedin-in fw-normal"></i></a>
                    <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"><i className="fab fa-instagram fw-normal"></i></a>
                    <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle" ><i className="fab fa-youtube fw-normal"></i></a>
                </div>
            </div>
        </div>
    </div>
    {/* Topbar End */}
                </>
            )
        }
        else if(localStorage.getItem('role')=='user')
        {
            setHeaderContent(
                <>
                {/* Topbar Start */}
    <div className="container-fluid bg-dark px-5 d-none d-lg-block">
        <div className="row gx-0">
            <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
                <div className="d-inline-flex align-items-center" style={{height:" 45px"}}>
                    <small className="me-3 text-light"><h2>Welcome to User Pannel!!!</h2></small>
                    <small className="me-3 text-light"><i className="fa fa-map-marker-alt me-2"></i>{localStorage.getItem('city')}</small>
                    <small className="me-3 text-light"><i className="fa fa-phone-alt me-2"></i>{localStorage.getItem('mobile')}</small>
                    <small className="text-light"><i className="fa fa-envelope-open me-2"></i>{localStorage.getItem('email')}</small>
                </div>
            </div>
            <div className="col-lg-4 text-center text-lg-end">
                <div className="d-inline-flex align-items-center" style={{height: "45px"}}>
                    <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"><i className="fab fa-twitter fw-normal"></i></a>
                    <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"><i className="fab fa-facebook-f fw-normal"></i></a>
                    <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"><i className="fab fa-linkedin-in fw-normal"></i></a>
                    <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"><i className="fab fa-instagram fw-normal"></i></a>
                    <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle" ><i className="fab fa-youtube fw-normal"></i></a>
                </div>
            </div>
        </div>
    </div>
    {/* Topbar End */}
                </>
            )
        }
        else
        {
            setHeaderContent(
                <>
                {/* Topbar Start */}
    <div className="container-fluid bg-dark px-5 d-none d-lg-block">
        <div className="row gx-0">
            <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
                <div className="d-inline-flex align-items-center" style={{height:" 45px"}}>
                <small className="me-3 text-light"><h2>Welcome to Community</h2></small>
                    <small className="me-3 text-light"><i className="fa fa-map-marker-alt me-2"></i>Indore, MP, India</small>
                    <small className="me-3 text-light"><i className="fa fa-phone-alt me-2"></i>+91 987654321</small>
                    <small className="text-light"><i className="fa fa-envelope-open me-2"></i>myvillas@gmail.com</small>
                </div>
            </div>
            <div className="col-lg-4 text-center text-lg-end">
                <div className="d-inline-flex align-items-center" style={{height: "45px"}}>
                    <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"><i className="fab fa-twitter fw-normal"></i></a>
                    <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"><i className="fab fa-facebook-f fw-normal"></i></a>
                    <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"><i className="fab fa-linkedin-in fw-normal"></i></a>
                    <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"><i className="fab fa-instagram fw-normal"></i></a>
                    <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle" ><i className="fab fa-youtube fw-normal"></i></a>
                </div>
            </div>
        </div>
    </div>
    {/* Topbar End */}
                </>
            )
        }
    },1);
    },[])   //[] se useEffect ak bar chalega
    //useEffect End

       return(
     <>
             {
                headerContent
             }

     </> 
)
} 
export default Header;
