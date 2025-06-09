import './Register.css';
import { useState } from 'react';
import { _userApi } from '../../ApiUrl.js';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

function Register() {
    const navigate=useNavigate();
    const [output, setOutput] = useState("")
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [mobile, setMobile] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [gender, setGender] = useState('');

    const HandleSubmit = () => {
        const userDetail = { "name": name, "email": email, "password": password, "mobile": mobile, "address": address, "city": city, "gender": gender }
        //Writing web services using a axios tool
        axios.post(_userApi + "save", userDetail).then((response) => {
            setOutput("User Registered Successfully");
            setName("");
            setEmail("");
            setPassword("");
            setMobile("");
            setAddress("");
            setCity("");
            setGender("");
            // navigate('/login');

        }).catch((error) => {
            console.log(error);
            setOutput("User not Registered Successfully");
            setName("");
            setEmail("");
            setPassword("");
            setMobile("");
            setAddress("");
            setCity("");
            setGender("");
        });
    }

    return (
        <>
            {/* Register Start */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5">
                        {/* column ko 12 kra h pehle 6 tha  */}
                        {/* <div className="col-lg-12 wow fadeInUp" data-wow-delay="0.1s" style={{ minHeight: " 400px" }}>
                            <div className="position-relative h-100">
                                <img className="img-fluid position-absolute w-100 h-100" src="assets/img/about.jpg" alt="" style={{ objectFit: "cover" }} />
                            </div>
                        </div> */}
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                            <h2>Complete Your Profile!!!</h2>
                            <br />
                            {/* {output} */}
                            <h4>
                                <font style={{ color: "green" }}>{output}</font>
                                <br />
                                <br />
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="name">Name:</label>
                                        <input type="text" className="form-control" value={name} onChange={e => setName(e.target.value)} />
                                    </div>
                                    <br />
                                    <div className="form-group">
                                        <label htmlFor="email">Email address:</label>
                                        <input type="email" className="form-control" value={email} onChange={e => setEmail(e.target.value)} />
                                    </div>
                                    <br />
                                    <div className="form-group">
                                        <label htmlFor="password">Password:</label>
                                        <input type="password" className="form-control" value={password} onChange={e => setPassword(e.target.value)} />
                                    </div>
                                    <br />
                                    <div className="form-group">
                                        <label htmlFor="mobile">Mobile:</label>
                                        <input type="text" className="form-control" value={mobile} onChange={e => setMobile(e.target.value)} />
                                    </div>
                                    <br />
                                    {/* <div className="form-group">
                                        <label htmlFor="address">Address:</label>
                                        <textarea className="form-control" value={address} onChange={e => setAddress(e.target.value)} />
                                    </div>
                                    <br />
                                    <div className="form-group">
                                        <label htmlFor="city">City:</label>
                                        <select className="form-control" style={{height:'45px'}} value={city} onChange={e => setCity(e.target.value)}>
                                            <option>Select City</option>
                                            <option>Indore</option>
                                            <option>Ujjain</option>
                                            <option>Itarsi</option>
                                            <option>Dewas</option>
                                        </select>
                                    </div>
                                    <br /> */}
                                    <div className="form-group">
                                        <label htmlFor="gender">Gender:</label>
                                        <br />

                                        Male : <input type="radio" name='gender' value="male" onChange={e => setGender(e.target.value)} />
                                        &nbsp;&nbsp;
                                        Female : <input type="radio" name='gender' value="female" onChange={e => setGender(e.target.value)} />
                                        &nbsp;&nbsp;
                                        Other : <input type="radio" name='gender' value="other" onChange={e => setGender(e.target.value)} />
                                    </div>
                                    <br />
                                    <button type="button" onClick={HandleSubmit} className="btn btn-success">Submit</button>
                                    <br />
                                </form>

                            </h4>
                        </div>
                    </div>
                </div>
            </div>
            {/* Register End */}
        </>

    )

}
export default Register;

