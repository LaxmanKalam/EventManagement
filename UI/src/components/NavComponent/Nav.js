import React from 'react';
import './Nav.css';
import './Dropdown.css'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Login from '../LoginComponent/Login';
import SubNav from '../SubNavComponent/SubNav';
import Dropdown from './Dropdown';

function Nav() {

  const [city, setCity] = useState('city');
  const [navContent, setNavContent] = useState('City');
  const [openProfile,setOpenProfile] = useState(false)

  useEffect(() => {
    setInterval(() => {
      if (localStorage.getItem('role') == 'admin') {
        setNavContent(
          <>
            {/* Navbar & Hero Start */}
            <div style={{ height: "70px" }} className="container-fluid position-relative p-0 ">
              <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0" style={{ height: "70px" }}>
                <a className="navbar-brand p-0">
                  <h1 className="text-primary m-0"><i className="fa fa-map-marker-alt me-3"></i><span className='villa'>Community Plus</span></h1>
                  {/* <img src="img/logo.png" alt="Logo"> */}
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                  <span className="fa fa-bars"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                  <div className
                    ="navbar-nav ms-auto py-0">
                    <a className="nav-item nav-link"><Link to="/">Home</Link></a>
                    <a className="nav-item nav-link"><Link to="/usermanage">UserManage</Link></a>

                    <div className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" style={{ cursor: "pointer", fontSize: "20px" }}>Profile Setting</a>
                      <div className="dropdown-menu m-0">

                        <a className="dropdown-item"><Link to='/epadmin'>Edit Profile</Link></a>
                        <a className="dropdown-item"><Link to='/cpadmin'>Change Password</Link></a>
                        {/* <a className="dropdown-item"><Link to='/usermanage'>User Manage</Link></a> */}
                      </div>
                    </div>
                    <div className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" style={{ cursor: "pointer" }}>Events</a>
                      <div className="dropdown-menu m-0">

                        <a className="dropdown-item"><Link to="/addhotel">Add Event</Link></a>
                        <a className="dropdown-item"><Link to="/addroomcategory">Add Event Details</Link></a>

                      </div>
                    </div>

                  </div>
                  <Link className="btn btn-primary rounded-pill py-2 px-4 mr-5 nav-item nav-link nav-item nav-link" to="/logout">Logout</Link>
                  {/* <Link className="btn btn-primary rounded-pill py-2 px-4 nav-item nav-link" to="/register">Register</Link> */}

                </div>
              </nav>

            </div>
            {/* Navbar & Hero End */}
          </>
        )
      }
      else if (localStorage.getItem('role') == 'user') {
        setNavContent(
          <>

          {/* Nav Start */}
          <nav className='nav' style={{ backgroundColor:'white',height: "150px", position: 'sticky', top: '0', zIndex: '9999' }}>
              <div style={{ display: 'flex' ,width:'100%'}}>
                <div style={{alignItems:'center',paddingTop:'10px',marginLeft:'10px'}}>
                 <a className="navbar-brand p-0" >
                  <h1 className="text-primary m-0"><i className="fa fa-map-marker-alt me-3"></i><span className='villa'>Community Plus</span></h1>
                </a>
                </div>
                <div style={{display:'flex',justifyContent:'space-around',height:'78px',alignItems:'center',marginLeft:'750px'}}>
                <a className="nav-item nav-link"><Link to="/">Home</Link></a>
                {/* <a className="nav-item nav-link"><Link to="/viewhotel">HOTELS</Link></a> */}
                <div className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" style={{ cursor: "pointer", fontSize: "20px" }}>Profile Setting</a>
                    <div className="dropdown-menu m-0">
                      <a className="dropdown-item"><Link to='/epadmin'>Edit Profile</Link></a>
                      <a className="dropdown-item"><Link to='/cpadmin'>Change Password</Link></a>
                      <a className="nav-item nav-link"><Link to="/logout">Logout</Link></a>
                    </div>
                    </div>
                </div>
              </div>
              <div style={{ marginTop: '1px',marginLeft:'60px' }}>
                {
                  <SubNav />
                }
              </div>

            </nav>
            {/* Nav End */}
            {/* Navbar & Hero End */}
          </>
        )
      }
      else {
        setNavContent(
          <>
            {/* Nav Start */}
            <nav className='nav' style={{ backgroundColor:'white',height: "150px", position: 'sticky', top: '0', zIndex: '9999' }}>
              <div style={{ display: 'flex' ,width:'100%'}}>
                <div style={{alignItems:'center',paddingTop:'10px',marginLeft:'10px'}}>
                 <a className="navbar-brand p-0" >
                  <h1 className="text-primary m-0"><i className="fa fa-map-marker-alt me-3"></i><span className='villa'>Community Plus</span></h1>
                </a>
                </div>
                <div style={{display:'flex',justifyContent:'space-around',height:'78px',alignItems:'center',marginLeft:'800px'}}>
                  <div className='homebtn'>
                <a className="nav-item nav-link"><Link to="/">Home</Link></a>
                </div>
                <div className='loginbtn'>
                 <a className="nav-item nav-link"><Link to='/login'><span>login</span></Link></a>
                 </div>
             
                {/* <div className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" style={{ cursor: "pointer", fontSize: "20px" }}><img height={35} width={35} src='../assets/img/user.png'/></a>
                    <div className="dropdown-menu m-0">
                      <a className="dropdown-item"><Link to='/login'>login</Link></a>
                      <a className="dropdown-item"><Link to='/register'>Profile Complete</Link></a>
                      <a className="nav-item nav-link"><Link to="/service">Services</Link></a>
                      <a className="nav-item nav-link"><Link to="/about">About</Link></a>
                      <a className="nav-item nav-link"><Link to="/logout">Logout</Link></a>
                    </div>
                    </div> */}
                {/* <a className="nav-item nav-link"><Link><img onClick={()=>setOpenProfile((prev)=>!prev)} height={35} width={35} src='../assets/img/user.png'/></Link></a> */}
                {/* <Link className="btn btn-primary rounded-pill py-2 px-4 mr-5 nav-item nav-link nav-item nav-link" to='/login'>Login</Link> */}
                {/* <Link className="btn btn-primary rounded-pill py-2 px-4 nav-item nav-link" to="/register">Register</Link> */}
                </div>

                {/* dropdown start */}
                {
                  openProfile && <Dropdown />
                }
                
                {/* dropdown end */}
              </div>
              <div style={{ marginTop: '1px',marginLeft:'60px' }}>
                {
                  <SubNav />
                }
              </div>

            </nav>
            {/* Nav End */}
          </>
        )
      }
    }, 1)
  }, []);

  return (
    <>
      {
        navContent
      }
    </>
  )
}
export default Nav;