import './ViewHotel.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { __hotelapi } from '../../ApiUrl';
import { Link } from 'react-router-dom';

function ViewHotel() {
    const [cDetail, setCDetail] = useState([]);

    useEffect(() => {
        axios.get(__hotelapi + "fetch").then((response) => {
            setCDetail(response.data);
        }).catch((error) => {
            console.log(error);
        })
    })
    return (
        <>
            {/* Service Start */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-12 wow fadeInUp" style={{ marginBottom: "80px" }} data-wow-delay="0.3s">
                           
                        <h1>OUR HOTELS</h1>
                        <p>Choose Your Favorite Hotels</p>
                            <div id='main-div'>
                                {
                                    cDetail.map((row) => (
                                        <div className='item'>
                                            <Link to='/tuliveerbagh'>
                                            <img src={`./assets/uploads/hotelicons/${row.subcaticonnm}`} height={270} width={480} />
                                            <h5 style={{width:"100%",marginLeft:"5px"}}>{row.subcatnm}</h5>
                                            </Link>
                                        </div>
                                     ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Service End */}
        </>
    )
}
export default ViewHotel;