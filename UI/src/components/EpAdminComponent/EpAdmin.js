import './EpAdmin.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { _userApi } from '../../ApiUrl';
import { useNavigate } from 'react-router-dom';

function EpAdmin() {

    const navigate=useNavigate();

    const [output, setOutput] = useState();
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [mobile, setMobile] = useState();
    const [address, setAddress] = useState();
    const [city, setCity] = useState();
    const [gender, setGender] = useState();
    const [F, setF] = useState();
    const [M, setM] = useState();

    useEffect(()=>{
        axios.get(_userApi+"fetch?email="+localStorage.getItem('email')).then((response)=>{
            var userDetail =response.data[0];
            setName(userDetail.name);
            setEmail(userDetail.email);
            setMobile(userDetail.mobile);
            setAddress(userDetail.address);
            setCity(userDetail.city);
            if(userDetail.gender=='male')
            {
                setM("checked");
            }
            else{
                setF("checked");
            }

        }).catch((error)=>{
            console.log(error);
        });
    },[]);

    const HandleSubmit=()=>{
         const updateDetails = {"condition_obj":{"email":email},"content_obj":{"name":name,"email":email,"mobile":mobile,"address":address,"city":city,"gender":gender}};
                    axios.patch(_userApi+"update",updateDetails).then((response)=>{
                        alert("Profile Updated successfully");
                        // setNotificationMsg("Profile Updated successfully");
                        // setShowNotification(true);
                        // autoHideNotification();
                        navigate("/epadmin");
                    }).catch((error)=>{
                        alert("profile 'NOT' updated successfully!!!!!");
                    //    setNotificationMsg("Profile 'NOT' Updated successfully");
                    //    setShowNotification(true);
                    //    autoHideNotification();
                        navigate("/epadmin");
                    })
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
                            <h1>Edit Profile Here!!!!!!</h1>
                            <font style={{ "color": "blue" }}>{output}</font>
                            <br /><br />
                            <form>
                                <div class="form-group">
                                    <label for="Name">Name :</label> <br /> <br />
                                    <input type="text" class="form-control" value={name} onChange={e => setName(e.target.value)} />
                                </div>
                                <br />
                                <div class="form-group">
                                    <label for="Email">Email :</label> <br /> <br />
                                    <input type="text" class="form-control" value={email} onChange={e => setEmail(e.target.value)} />
                                </div>
                                <br />
                                <div class="form-group">
                                    <label for="Mobile">Mobile :</label> <br /> <br />
                                    <input type="text" class="form-control" value={mobile} onChange={e => setMobile(e.target.value)} />
                                </div>
                                <br />
                                <div class="form-group">
                                    <label for="Address">Address :</label> <br /> <br />
                                    <textarea type="text" class="form-control" value={address} onChange={e => setAddress(e.target.value)}></textarea>
                                </div>
                                <br />
                                <div class="form-group">
                                    <label for="City">City :</label> <br /> <br />
                                    <select class="form-control" value={city} onChange={e => setCity(e.target.value)}>
                                        <option>Select City</option>
                                        <option>Indore</option>
                                        <option>Bhopal</option>
                                        <option>Dewas</option>
                                        <option>Ujjain</option>
                                    </select>
                                </div>
                                <br />
                                <div class="form-group">
                                    <label for="gender">Gender :</label> <br /> <br />
                                    Male :<input type="radio" name="gender" checked={M} value="male" onChange={e => setGender(e.target.value)} />
                                    &nbsp; &nbsp; &nbsp; &nbsp;
                                    Female :<input type="radio" name="gender" checked={F} value="female" onChange={e => setGender(e.target.value)} />
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
export default EpAdmin;

