import './UpdatePass.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { _userApi } from '../../ApiUrl';
import { useNavigate } from 'react-router-dom';

function UpdatePass() {

    const navigate = useNavigate();

    const [output, setOutput] = useState();
    const [email, setEmail] = useState(localStorage.getItem('email'));
    const [password, setPassword] = useState();
    const [password1, setPassword1] = useState();

    useEffect(() => {
        axios.get(_userApi + "fetch?email=" + localStorage.getItem('email')).then((response) => {
            var userDetail = response.data[0];
            setPassword(userDetail.password);
        }).catch((error) => {
            console.log(error);
        });
    }, []);

    const HandleSubmit = () => {
        const updateDetails = { "condition_obj": { "email": email }, "content_obj": { "password": password } };
        axios.patch(_userApi + "update", updateDetails).then((response) => {
            alert("Password Updated successfully");
            navigate("/login");
        }).catch((error) => {
            alert("Password 'NOT' updated successfully!!!!!");
            navigate("/login");
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
                            <h1>Choose New Password !!!!!!</h1>
                            <font style={{ "color": "blue" }}>{output}</font>
                            <br /><br />
                            <form>
                                <div class="form-group">
                                    <label for="password" style={{ color: "black" }}>Enter New Password :</label> <br /> <br />
                                    <input type="text" class="form-control" onChange={e => setPassword(e.target.value)} />
                                </div>
                                <br />
                                <div class="form-group">
                                    <label for="Password1" style={{ color: "black" }}
                                    >Re-Enter New Password :</label> <br /> <br />
                                    <input type="text" class="form-control" onChange={e => setPassword1(e.target.value)} />
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
export default UpdatePass;