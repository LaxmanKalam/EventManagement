import './CpAdmin.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { _userApi } from '../../ApiUrl';
import { useNavigate } from 'react-router-dom';

function CpAdmin() {

    const navigate=useNavigate();

    const [output, setOutput] = useState();
   
    const [Opass, setOpass] = useState();
    const [Npass, setNpass] = useState();
    const [Cnpass, setCnpass] = useState();


    const HandleSubmit=()=>{
        
        axios.get(_userApi+"fetch?email="+localStorage.getItem('email')+"&password="+Opass).then((response)=>{
            if(Npass==Cnpass)
            {
                let updateDetail = {'condition_obj':{'email':localStorage.getItem('email')},'content_obj':{'password':Cnpass}};
                axios.patch(_userApi+"update",updateDetail).then((response)=>{
                    alert("password change successfully");
                    setOpass("");
                    setNpass("");
                    setCnpass("");
                    
                }).catch((error)=>{
                    alert("password Not Change successfully");
                    setOpass("");
                    setNpass("");
                    setCnpass("");
                })
            }
            else
            {
                alert("New Pass and Confirm Pass did not match");
                setOpass("");
                setNpass("");
                setCnpass("");
            }
        }).catch((error)=>{
           setOutput("Old Password Did Not Matched!!!")
           setOpass("");
           setNpass("");
           setCnpass("");
        });
    }
    return (
        <>
            {/* Service Start */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5">
                        {/* column ko 12 kra h pehle 6 tha  */}
                        {/* <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s" style={{ minHeight: " 400px" }}>
                            <div className="position-relative h-100">
                                <img className="img-fluid position-absolute w-100 h-100" src="assets/img/about.jpg" alt="" style={{ objectFit: "cover" }} />
                            </div>
                        </div> */}
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                            <h1>Change Your Password !!!!!!</h1>
                            <font style={{ "color": "red" }}>{output}</font>
                            <br /><br />
                            <form>
                                <div class="form-group">
                                    <label for="Email" style={{color:"black"}}>Enter Old Password:</label> <br /> <br />
                                    <input type="password" value={Opass} class="form-control"  onChange={e => setOpass(e.target.value)} />
                                </div>
                                <br />
                                <div class="form-group">
                                    <label for="Password" style={{color:"black"}}
                                    >Enter New Password :</label> <br /> <br />
                                    <input type="password" value={Npass} class="form-control"  onChange={e => setNpass(e.target.value)} />
                                </div>
                                <br />
                                <div class="form-group">
                                    <label for="Password" style={{color:"black"}}
                                    >Confirm New Password :</label> <br /> <br />
                                    <input type="password" value={Cnpass} class="form-control"  onChange={e => setCnpass(e.target.value)} />
                                </div>
                                <br />
                                <button type="button" onClick={HandleSubmit} class="btn btn-primary">Submit</button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* Service End */}
        </>
    )
}
export default CpAdmin;