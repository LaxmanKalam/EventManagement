import './CityHome.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { __hotelapi } from '../../ApiUrl';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function CityHome() {
    const location = useLocation();
    const { city } = location.state || {}; // Destructure city from location.state

    const [cDetail, setCDetail] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(__hotelapi + `fetch?city=${city}`).then((response) => {
            setCDetail(response.data);
            // console.log(response.data);
        }).catch((error) => {
            console.log(error);
        })
    })
    return (
        <>
            {/* Service Start */}
            {/*  */}
            <div style={{ paddingTop: '5px', width: '100%',backgroundColor: 'rgb(216, 212, 212)'}}>
                <div style={{ marginBottom: "80px", marginTop: '0' }} data-wow-delay="0.3s">
                    <div className='view' style={{ marginTop: '15px' }}>
                        <div id='city-div'>
                            <div style={{ display: 'flex', gap: '20px' }}>
                                {/* filter div */}
                                <div className='filter-div' style={{ backgroundColor: 'white', marginTop: '30px', paddingTop: '10px', width: '250px', border: '1px solid black', borderRadius: '13px', marginLeft: '50px' }}>
                                   <div style={{marginLeft:'5px'}}> 
                                    <div>
                                        <span style={{ fontWeight: 'bold' }}>FILTERS</span>
                                        <span style={{ color: 'gray', marginLeft: '110px' }}>clear</span>
                                    </div>
                                    <hr />
                                    <div>
                                        <span style={{ fontWeight: 'bold', fontSize: '14px' }}>Popular Filters</span>
                                        <br />
                                        <input type='checkbox' style={{ marginLeft: '6px' }}></input>
                                        <span style={{ color: 'gray', fontSize: '13px' }}>GoStays</span>
                                        <span style={{ color: 'gray', fontSize: '13px', marginLeft: '110px' }}>(211)</span>
                                        <br />
                                        <input type='checkbox' style={{ marginLeft: '6px' }}></input>
                                        <span style={{ color: 'gray', fontSize: '13px' }}>Book@₹0</span>
                                        <span style={{ color: 'gray', fontSize: '13px', marginLeft: '101px' }}>(130)</span>
                                        <br />
                                        <input type='checkbox' style={{ marginLeft: '6px' }}></input>
                                        <span style={{ color: 'gray', fontSize: '13px' }}>Daily Steal Deal</span>
                                        <span style={{ color: 'gray', fontSize: '13px', marginLeft: '80px' }}>(5)</span>
                                        <br />
                                        <input type='checkbox' style={{ marginLeft: '6px' }}></input>
                                        <span style={{ color: 'gray', fontSize: '13px' }}>Early Bird Deal</span>
                                        <span style={{ color: 'gray', fontSize: '13px', marginLeft: '80px' }}>(19)</span>
                                        <br />
                                        <input type='checkbox' style={{ marginLeft: '6px' }}></input>
                                        <span style={{ color: 'gray', fontSize: '13px' }}>
                                            Couple Friendly</span>
                                        <span style={{ color: 'gray', fontSize: '13px', marginLeft: '60px' }}>(1661)</span>
                                        <br />
                                        <input type='checkbox' style={{ marginLeft: '6px' }}></input>
                                        <span style={{ color: 'gray', fontSize: '13px' }}>Free Cancellation</span>
                                        <span style={{ color: 'gray', fontSize: '13px', marginLeft: '50px' }}>(1200)</span>
                                        <br />
                                        <input type='checkbox' style={{ marginLeft: '6px' }}></input>
                                        <span style={{ color: 'gray', fontSize: '13px' }}>
                                            Free Breakfast</span>
                                        <span style={{ color: 'gray', fontSize: '13px', marginLeft: '70px' }}>(300)</span>
                                        <br />
                                        <input type='checkbox' style={{ marginLeft: '6px' }}></input>
                                        <span style={{ color: 'gray', fontSize: '13px' }}>
                                            Pay At Hotel</span>
                                        <span style={{ color: 'gray', fontSize: '13px', marginLeft: '80px' }}>(180)</span>
                                        <br />
                                    </div>
                                    <hr />
                                    <div>
                                        <input type='checkbox' style={{ marginLeft: '6px' }}></input>
                                        <span style={{ fontWeight: 'bold', fontSize: '14px' }}>Flexible check-in(6AM to 6PM)</span>
                                        <span style={{ color: 'gray', fontSize: '13px', marginLeft: '180px' }}>(180)</span>
                                    </div>
                                    <hr />
                                    <div>
                                        <span style={{ fontWeight: 'bold', fontSize: '14px' }}>Price</span>
                                        <br />
                                        <input type='checkbox' style={{ marginLeft: '6px' }}></input>
                                        <span style={{ color: 'gray', fontSize: '13px' }}>₹0 to ₹2000</span>
                                        <span style={{ color: 'gray', fontSize: '13px', marginLeft: '90px' }}>(386)</span>
                                        <br />

                                        <input type='checkbox' style={{ marginLeft: '6px' }}></input>
                                        <span style={{ color: 'gray', fontSize: '13px' }}>₹2000 to ₹3500</span>
                                        <span style={{ color: 'gray', fontSize: '13px', marginLeft: '67px' }}>(260)</span>
                                        <br />

                                        <input type='checkbox' style={{ marginLeft: '6px' }}></input>
                                        <span style={{ color: 'gray', fontSize: '13px' }}>₹3500 to ₹7500</span>
                                        <span style={{ color: 'gray', fontSize: '13px', marginLeft: '67px' }}>(180)</span>
                                        <br />

                                        <input type='checkbox' style={{ marginLeft: '6px' }}></input>
                                        <span style={{ color: 'gray', fontSize: '13px' }}>₹7500 to ₹11500</span>
                                        <span style={{ color: 'gray', fontSize: '13px', marginLeft: '60px' }}>(206)</span>
                                        <br />

                                        <input type='checkbox' style={{ marginLeft: '6px' }}></input>
                                        <span style={{ color: 'gray', fontSize: '13px' }}>₹11500 to ₹19900</span>
                                        <span style={{ color: 'gray', fontSize: '13px', marginLeft: '60px' }}>(89)</span>
                                        <br />
                                        <input type='checkbox' style={{ marginLeft: '6px' }}></input>
                                        <span style={{ color: 'gray', fontSize: '13px' }}>₹19900 to ₹30000</span>
                                        <span style={{ color: 'gray', fontSize: '13px', marginLeft: '52px' }}>(260)</span>
                                        <br />
                                    </div>
                                    <input type='checkbox' style={{ marginLeft: '6px' }}></input>
                                    <span style={{ color: 'gray', fontSize: '13px' }}>₹30000 +</span>
                                    <span style={{ color: 'gray', fontSize: '13px', marginLeft: '108px' }}>(40)</span>
                                    <br />
                                    <hr />
                                    <div>
                                        <span style={{ fontWeight: 'bold', fontSize: '14px' }}>Villa Type</span>
                                        <br />
                                        <input type='checkbox' style={{ marginLeft: '6px' }}></input>
                                        <span style={{ color: 'gray', fontSize: '13px' }}>5★</span>
                                        <span style={{ color: 'gray', fontSize: '13px', marginLeft: '140px' }}>(160)</span>
                                        <br />
                                        <input type='checkbox' style={{ marginLeft: '6px' }}></input>
                                        <span style={{ color: 'gray', fontSize: '13px' }}>4★</span>
                                        <span style={{ color: 'gray', fontSize: '13px', marginLeft: '140px' }}>(85)</span>
                                        <br />
                                        <input type='checkbox' style={{ marginLeft: '6px' }}></input>
                                        <span style={{ color: 'gray', fontSize: '13px' }}>3★</span>
                                        <span style={{ color: 'gray', fontSize: '13px', marginLeft: '140px' }}>(180)</span>
                                        <br />

                                    </div>
                                    <hr />
                                    <div>
                                        <span style={{ fontWeight: 'bold', fontSize: '14px' }}>User Rating</span>
                                        <br />
                                        <input type='checkbox' style={{ marginLeft: '6px' }}></input>
                                        <span style={{ color: 'gray', fontSize: '13px' }}>5 &nbsp;&nbsp;★</span>
                                        <span style={{ color: 'gray', fontSize: '13px', marginLeft: '135px' }}>(160)</span>
                                        <br />
                                        <input type='checkbox' style={{ marginLeft: '6px' }}></input>
                                        <span style={{ color: 'gray', fontSize: '13px' }}>4.5★</span>
                                        <span style={{ color: 'gray', fontSize: '13px', marginLeft: '135px' }}>(85)</span>
                                        <br />
                                        <input type='checkbox' style={{ marginLeft: '6px' }}></input>
                                        <span style={{ color: 'gray', fontSize: '13px' }}>4&nbsp;&nbsp;&nbsp;★</span>
                                        <span style={{ color: 'gray', fontSize: '13px', marginLeft: '135px' }}>(180)</span>
                                        <br />
                                        <input type='checkbox' style={{ marginLeft: '6px' }}></input>
                                        <span style={{ color: 'gray', fontSize: '13px' }}>3.5★</span>
                                        <span style={{ color: 'gray', fontSize: '13px', marginLeft: '135px' }}>(180)</span>
                                        <br />
                                        <input type='checkbox' style={{ marginLeft: '6px' }}></input>
                                        <span style={{ color: 'gray', fontSize: '13px' }}>3&nbsp;&nbsp;&nbsp;★</span>
                                        <span style={{ color: 'gray', fontSize: '13px', marginLeft: '135px' }}>(180)</span>
                                        <br />
                                    </div>
                                    <hr />
                                    <div>
                                        <span style={{ fontWeight: 'bold', fontSize: '14px' }}>Location</span>
                                        <br />
                                        <input type='checkbox' style={{ marginLeft: '6px' }}></input>
                                        <span style={{ color: 'gray', fontSize: '13px' }}>Mumbai</span>
                                        <span style={{ color: 'gray', fontSize: '13px', marginLeft: '117px' }}>(103)</span>
                                        <br />
                                        <input type='checkbox' style={{ marginLeft: '6px' }}></input>
                                        <span style={{ color: 'gray', fontSize: '13px' }}>Delhi</span>
                                        <span style={{ color: 'gray', fontSize: '13px', marginLeft: '135px' }}>(103)</span>
                                        <br />
                                        <input type='checkbox' style={{ marginLeft: '6px' }}></input>
                                        <span style={{ color: 'gray', fontSize: '13px' }}>Odisha</span>
                                        <span style={{ color: 'gray', fontSize: '13px', marginLeft: '123px' }}>(103)</span>
                                        <br />
                                        <input type='checkbox' style={{ marginLeft: '6px' }}></input>
                                        <span style={{ color: 'gray', fontSize: '13px' }}>Kerala</span>
                                        <span style={{ color: 'gray', fontSize: '13px', marginLeft: '127px' }}>(103)</span>
                                        <br />
                                    </div>
                                    <hr />

                                    <div>
                                        <span style={{ fontWeight: 'bold', fontSize: '14px' }}>Room Amenities</span>
                                        <br />
                                        <input type='checkbox' style={{ marginLeft: '6px' }}></input>
                                        <span style={{ color: 'gray', fontSize: '13px' }}>Cook & Butler Service
                                        </span>
                                        <span style={{ color: 'gray', fontSize: '13px', marginLeft: '30px' }}>(103)</span>
                                        <br />
                                        <input type='checkbox' style={{ marginLeft: '6px' }}></input>
                                        <span style={{ color: 'gray', fontSize: '13px' }}>Home Theatre</span>
                                        <span style={{ color: 'gray', fontSize: '13px', marginLeft: '70px' }}>(103)</span>
                                        <br />
                                        <input type='checkbox' style={{ marginLeft: '6px' }}></input>
                                        <span style={{ color: 'gray', fontSize: '13px' }}>Smoking Room</span>
                                        <span style={{ color: 'gray', fontSize: '13px', marginLeft: '65px' }}>(103)</span>
                                        <br />
                                        <input type='checkbox' style={{ marginLeft: '6px' }}></input>
                                        <span style={{ color: 'gray', fontSize: '13px' }}>Private Pool</span>
                                        <span style={{ color: 'gray', fontSize: '13px', marginLeft: '83px' }}>(103)</span>
                                        <br />
                                        <input type='checkbox' style={{ marginLeft: '6px' }}></input>
                                        <span style={{ color: 'gray', fontSize: '13px' }}>Jacuzzi</span>
                                        <span style={{ color: 'gray', fontSize: '13px', marginLeft: '108px' }}>(103)</span>
                                        <br />
                                        <input type='checkbox' style={{ marginLeft: '6px' }}></input>
                                        <span style={{ color: 'gray', fontSize: '13px' }}>
                                            Bathtub</span>
                                        <span style={{ color: 'gray', fontSize: '13px', marginLeft: '105px' }}>(103)</span>
                                        <br />
                                        <input type='checkbox' style={{ marginLeft: '6px' }}></input>
                                        <span style={{ color: 'gray', fontSize: '13px' }}>
                                            Fireplace</span>
                                        <span style={{ color: 'gray', fontSize: '13px', marginLeft: '98px' }}>(103)</span>
                                        <br />
                                    </div>

                                    <p style={{ marginLeft: '90px', color: 'blue' }}>more+</p>
                                   </div>
                                </div>
                                {/* filter div end */}

                                <div className='content-div' style={{marginLeft: '25px', width: '920px', marginTop: '10px' }}>
                                    {
                                        cDetail.map((row) => (
                                            <div className='city-item'>
                                                <Link to={`/viewroomcategory/${row.catnm}`}>
                                                    <div className='Link-div' style={{  borderRadius: '13px', width: '920px', height: '250px',border:'1px solid rgb(77, 70, 70)' }}>
                                                        <div style={{ width: '290px' }}>
                                                            <img src={`./assets/uploads/hotelicons/${row.subcaticonnm}`} height={249} width={290} style={{ objectFit: 'cover', border: '1px solid rgb(126, 122, 122)' }} />
                                                        </div>     
                                                        <div style={{  width: '410px', padding: '5px' }}>
                                                            <div style={{paddingLeft:'10px',position:'relative'}}>
                                                                <span style={{ margin: '0px', height: '25px' ,color:'black',fontWeight:'bold',fontSize:'12px'}}>{row.rating}<span style={{color:'rgb(255, 194, 74)',marginLeft:'0px'}}>★</span> Hotel</span>
                                                                <span style={{fontSize:'13px',marginLeft:'220px'}}>{row.totalratings} Ratings</span>
                                                                <span style={{margin: '0px', height: '25px' ,color:'black',fontWeight:'bold',fontSize:'12px',position:'absolute',right:'5px'}}><div style={{backgroundColor:'rgb(28, 165, 79)',width:'40px',height:'20px',color:'white',display:'flex',justifyContent:'center',alignItems:'center',borderRadius:'5px'}}>{row.userrating}/5</div></span>
                                                            </div>
                                                            <div style={{ height: '90px' ,paddingLeft:'10px'}}>
                                                                <span style={{ width: "100%",fontWeight:'bold' }}>{row.subcatnm},</span>
                                                                <br/>
                                                                <span style={{color:'blue', width: "100%" ,fontSize:'13px'}}>{row.city} | </span>
                                                                {/* <br /> */}
                                                                <span style={{ width: "100%", fontSize: '13px', marginTop: '0',color:'rgb(77, 70, 70)' }}>{row.address}</span>
                                                                <br />
                                                                <div style={{display:'flex',marginTop:'10px'}}>
                                                                <div style={{border:'1px solid rgb(77, 70, 70)',borderRadius:'50px'}}>
                                                                <span style={{ fontSize:'12px',margin:'6px',color:'rgb(77, 70, 70)'}}>{row.facility1}</span>
                                                                </div>
                                                                &nbsp;
                                                                <div style={{border:'1px solid rgb(77, 70, 70)',borderRadius:'50px'}}>
                                                                <span style={{fontSize:'12px',margin:'6px' ,color:'rgb(77, 70, 70)'}}>{row.facility2}</span>
                                                                </div>
                                                                </div>
                                                                <br />
                                                            </div>
                                                            {/* style="color: rgb(70, 72, 77) */}
                                                            <div style={{ height: '120px',paddingTop:'35px',paddingLeft:'5px',fontSize:'13px' }}>
                                                                <span style={{color:'rgb(255, 109, 56)'}}><img src='../assets/img/couple.png' height={16} width={16} />{row.d1}</span>
                                                                <br/>
                                                                <span style={{color:'rgb(77, 70, 70)'}}><img src='../assets/img/right.png' height={16} width={16} />{row.d2}</span>
                                                                <br/>
                                                                <span style={{color:'rgb(77, 70, 70)'}}><img src='../assets/img/right.png' height={16} width={16} />{row.d3}</span>
                                                                <br/>
                                                                <span style={{color:'rgb(77, 70, 70)'}}><img src='../assets/img/thunder.png' height={16} width={16}/>{row.d4}</span>
                                                            </div>
                                                        </div>
                                                        {/* payment div start */}
                                                        <div style={{width: '220px', borderLeft:'1px solid rgb(77, 70, 70)',borderTopRightRadius: '13px', borderBottomRightRadius: '13px' }}>
                                                            {/* <p>Payment details</p> */}

                                                            {/* bank offer start*/}
                                                            <div style={{margin:'8px',height:'80px',border:'1px solid gray',borderRadius:'10px'}}>
                                                               <span style={{fontSize:'13px',marginLeft:'50px'}}><img src='../assets/img/bankoffer.png' height={14} width={14}/>&nbsp;Bank Offer | ₹{row.offer} off</span>
                                                               <hr style={{margin:'1px'}}/>
                                                               <span style={{fontSize:'12px',marginTop:'0px'}}>{row.bank}</span>
                                                               <span></span>
                                                            </div>
                                                            {/* bank offer end*/}
                                                            <div style={{marginTop: '50px', marginLeft: '80px', width: '130px', height: '90px', position: 'relative' }}>
                                                                <span style={{color: 'gray', position: 'absolute' ,fontSize:'13px',paddingLeft:'18px',paddingTop:'2px'}}><del>₹{row.discount}</del></span>
                                                                <span style={{ position: 'absolute', right: '5px',fontWeight:'bold',fontSize:'16px' }}><u>₹{row.price}</u></span>
                                                                <br />
                                                                <span style={{color: 'gray', position: 'absolute' ,right: '10px',fontSize:'13px'}}>+₹{row.tax} taxes & fees</span>
                                                                <br />
                                                                <span style={{ color: 'gray', position: 'absolute', right: '5px' ,fontSize:'13px'}}>{row.available}</span>
                                                                <br />
                                                                <span style={{ color: 'gray', position: 'absolute', right: '5px',fontSize:'13px' }}>For {row.days} Nights</span>
                                                            </div>
                                                            <p onClick={()=>navigate('/login')} style={{fontSize:'12px',color:'blue',fontWeight:'bold',marginLeft:'75px'}}>Login now & save more</p>
                                                        </div>
                                                        {/* payment div end*/}
                                                    </div>
                                                </Link>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                        <br />
                        <button style={{ marginLeft: "650px" }}>More Hotel's--&gt;</button>
                    </div>
                </div>
            </div>

            {/* Service End */}
        </>
    )
}
export default CityHome;