import './BookHotel.css';
import { useState } from 'react';
import { _userApi } from '../../ApiUrl.js';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import React from 'react';
import axios from 'axios'

function BookHotel() {
    const navigate=useNavigate();
    const [output, setOutput] = useState("")
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [mobile, setMobile] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [gender, setGender] = useState('');

    const [responseId, setResponseId] = React.useState("");
    const [responseState, setResponseState] = React.useState([]);
  
    const loadScript = (src) => {
      return new Promise((resolve) => {
        const script = document.createElement("script");
  
        script.src = src;
  
        script.onload = () => {
          resolve(true)
        }
        script.onerror = () => {
          resolve(false)
        }
  
        document.body.appendChild(script);
      })
    }
  
    const createRazorpayOrder = (amount) => {
      let data = JSON.stringify({
        amount: 28599 * 100,
        currency: "INR"
      })
  
      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "http://localhost:3000/orders",
        headers: {
          'Content-Type': 'application/json'
        },
        data: data
      }
  
      axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data))
        handleRazorpayScreen(response.data.amount)
      })
      .catch((error) => {
        console.log("error at", error)
      })
    }
  
    const handleRazorpayScreen = async(amount) => {
      const res = await loadScript("https:/checkout.razorpay.com/v1/checkout.js")
  
      if (!res) {
        alert("Some error at razorpay screen loading")
        return;
      }
    //   key_id: "rzp_test_5TE23tKSbcD1zK",
    //   key_secret: "mtPPzgE8S0snrmZezPky0PEu",
    
      const options = {
        key: "rzp_test_5TE23tKSbcD1zK",
        amount: amount,
        currency: 'INR',
        name: "papaya coders",
        description: "payment to papaya coders",
        image: "https://papayacoders.com/demo.png",
        handler: function (response){
          setResponseId(response.razorpay_payment_id)
        },
        prefill: {
          name: "papaya coders",
          email: "papayacoders@gmail.com"
        },
        theme: {
          color: "#F4C430"
        }
      }
  
      const paymentObject = new window.Razorpay(options)
      paymentObject.open()
    }
  
    const paymentFetch = (e) => {
      e.preventDefault();
  
      const paymentId = e.target.paymentId.value;
  
      axios.get(`http://localhost:3000/payment/${paymentId}`)
      .then((response) => {
        console.log(response.data);
        setResponseState(response.data)
      })
      .catch((error) => {
        console.log("error occures", error)
      })
    }
  
    useEffect(() => {
      let data = JSON.stringify({
        amount: 28599 * 100,
      })
  
      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: `http://localhost:3000/capture/${responseId}`,
        headers: {
          'Content-Type': 'application/json'
        },
        data: data
      }
  
      axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data))
      })
      .catch((error) => {
        console.log("error at", error)
      })
    }, [responseId])
  

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
                            <h2>Booking Details!!!</h2>
                            <br />
                            {output}
                            <h4>
                                <font style={{ color: "green" }}>{output}</font>
                                <br />
                                <br />
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="name">Enter Your Name:</label>
                                        <input type="text" className="form-control" value={name} onChange={e => setName(e.target.value)} />
                                    </div>
                                    <br />
                                    
                                    {/* <div className="form-group">
                                        <label htmlFor="password">Password:</label>
                                        <input type="password" className="form-control" value={password} onChange={e => setPassword(e.target.value)} />
                                    </div>
                                    <br /> */}
                                    <div className="form-group">
                                        <label htmlFor="mobile">Enter Your Mobile:</label>
                                        <input type="text" className="form-control" value={mobile} onChange={e => setMobile(e.target.value)} />
                                    </div>
                                    <br />
                                    <div className="form-group">
                                        <label htmlFor="address">Enter Your Address:</label>
                                        <textarea className="form-control" value={address} onChange={e => setAddress(e.target.value)} />
                                    </div>
                                    <br />
                                    <div className="form-group">
                                        <label htmlFor="city">Enter Your City:</label>
                                        <select className="form-control" style={{height:'40px'}} value={city} onChange={e => setCity(e.target.value)}>
                                            <option>Select City</option>
                                            <option>Indore</option>
                                            <option>Ujjain</option>
                                            <option>Itarsi</option>
                                            <option>Dewas</option>
                                        </select>
                                    </div>
                                    <br />
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
                                    {/* <div className="form-group">
                                        <label htmlFor="text">2500rs Per Person:</label>
                                        <br />
                                        <label htmlFor="text">No. of Members:</label>
                                        <input type="text" className="form-control"/>
                                    </div>
                                    <br /> */}
                                    <div className="form-group">
                                        <label htmlFor="text">Members Details:</label>
                                        <textarea className="form-control" placeholder='Name and Mobile no' />
                                    </div>
                                    <br />
                                    <div className="form-group">
                                        <label htmlFor="text">Check In Date and Time:</label>
                                        <input type="text" className="form-control" placeholder='DD/MM/YYYY  00:00 PM/AM'/>
                                    </div>
                                    <br />
                                    <div className="form-group">
                                        <label htmlFor="text">Check Out Date and Time:</label>
                                        <input type="text" className="form-control" placeholder='DD/MM/YYYY  00:00 PM/AM'/>
                                    </div>
                                    <br />
                                    <div className="form-group">
                                        <label htmlFor="text">Total Amount To be Paid:</label>
                                        <input type="text" className="form-control" placeholder='9000rs'/>
                                    </div>
                                    <br />
                                    <span><button onClick={()=>navigate('/viewhotel')} style={{backgroundColor:"#86B817",size:"25px",borderRadius:"5px"}}>Back to Villas</button></span>
                                    <span><button onClick={paymentFetch} style={{backgroundColor:"#86B817",marginLeft:"20px",size:"25px",borderRadius:"5px"}}>Go for Online Payment</button></span>
                                    {/* <button onClick={() => createRazorpayOrder(28599)}>Payment of 28599Rs.</button>
      {responseId && <p>{responseId}</p>}
      <h1>This is payment verification form</h1>
      <form onSubmit={paymentFetch}>
        <input type="text" name="paymentId" />
        <button type="submit">Fetch Payment</button>
        {responseState.length !==0 && (
          <ul>
            <li>Amount: {responseState.amount / 100} Rs.</li>
            <li>Currency: {responseState.currency}</li>
            <li>Status: {responseState.status}</li>
            <li>Method: {responseState.method}</li>
          </ul>
        )}
      </form> */}
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
export default BookHotel;

