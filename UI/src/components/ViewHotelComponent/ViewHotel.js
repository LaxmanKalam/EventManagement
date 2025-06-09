import './ViewHotel.css';
import { useState, useEffect,useContext } from 'react';
import axios from 'axios';
import { __hotelapi } from '../../ApiUrl';
import { Link } from 'react-router-dom';

import { HotelContext } from '../HotelContext/HotelContext'; // ✅ update this path


function ViewHotel() {
    const [cDetail, setCDetail] = useState([]);
    const { hotels, setHotels } = useContext(HotelContext); // ✅ using context

    useEffect(() => {
        axios.get(__hotelapi + "fetch").then((response) => {
            setCDetail(response.data);
            setHotels(response.data); // ✅ update context
        }).catch((error) => {
            console.log(error);
        })
    },[setHotels]);
    return (
        <>
            {/* Service Start */}  
                    <div  style={{paddingTop:'15px',width:'100%'}}>
                        {/* filter start */}
                        {/* <div style={{height:'70px',width:'100%'}}> */}
                            {/* <div style={{display:'flex',height:'40px'}}>
                                <span style={{marginLeft:'85px'}}><img src='../assets/img/filter1.jpg' height={30} width={30}/></span>
                                <span style={{marginLeft:'75px'}}><img src='../assets/img/filter2' height={30} width={30}/></span>
                                <span style={{marginLeft:'50px'}}><img src='../assets/img/filter3.jpg' height={30} width={30}/></span>
                                <span style={{marginLeft:'65px'}}><img src='../assets/img/filter4.jpg' height={30} width={30}/></span>
                                <span style={{marginLeft:'53px'}}><img src='../assets/img/filter5.jpg' height={30} width={30}/></span>
                                <span style={{marginLeft:'50px'}}><img src='../assets/img/filter6.jpg' height={30} width={30}/></span>
                                <span style={{marginLeft:'70px'}}><img src='../assets/img/filter7.jpg' height={30} width={30}/></span>
                                <span style={{marginLeft:'80px'}}><img src='../assets/img/filter8.jpg' height={30} width={30}/></span>
                                <span style={{marginLeft:'70px'}}><img src='../assets/img/filter9.jpg' height={30} width={30}/></span>
                                <span style={{marginLeft:'0px'}}> <div className='tag2'><img src='../assets/img/tag.png' height={24} width={24} />&nbsp;Prices include all fees</div></span>
                                
                            </div> */}
                            {/* filter name */}
                            {/* <div style={{height:'28px'}}>
                                <span style={{marginLeft:'40px',fontSize:'14px'}}><u>Historical Homes</u></span>
                                <span style={{marginLeft:'40px',fontSize:'14px'}}><u>Icons</u></span>
                                <span style={{marginLeft:'40px',fontSize:'14px'}}><u>Rooms</u></span>
                                <span style={{marginLeft:'40px',fontSize:'14px'}}><u>Lakefront</u></span>
                                <span style={{marginLeft:'40px',fontSize:'14px'}}><u>OMG!</u></span>
                                <span style={{marginLeft:'40px',fontSize:'14px'}}><u>Beach</u></span>
                                <span style={{marginLeft:'40px',fontSize:'14px'}}><u>Amazing Views</u></span>
                                <span style={{marginLeft:'40px',fontSize:'14px'}}><u>Farms</u></span>
                                <span style={{marginLeft:'40px',fontSize:'14px'}}><u>Amazing Pools</u></span>
                            </div> */}
                        {/* </div> */}
                        {/* filter end */}
                        <div style={{ marginBottom: "80px",marginTop:'0' }} data-wow-delay="0.3s">
                           <div className='view' style={{marginTop:'15px'}}>
                        {/* <h1>OUR VILLAS</h1>
                        <p>Choose Your Favorite Villas</p> */}
                            <div id='main-div'>
                                {
                                    cDetail.map((row) => (
                                        <div className='item'>
                                            <Link to={`/viewroomcategory/${row.catnm}`}>
                                            {/* <div height={200} width={200}> */}
                                               <img src={`./assets/uploads/hotelicons/${row.subcaticonnm}`} height={200} width={288} style={{objectFit:'cover',border:'1px solid rgb(126, 122, 122)'}} />
                                            {/* </div> */}
                                             <br/>
                                             <div style={{display:"flex",height:'35px',alignItems:'center'}}>
                                             <div style={{width:'150px'}}>
                                             <span className='tag'>{row.catnm}</span>
                                             </div>
                                             <div style={{width:'80px',marginLeft:'50px',color:'black'}}>
                                             <span>{row.available}</span>
                                             </div>
                                             </div>
                                            
                                             <span className='ml' style={{width:"100%",fontWeight:'bold'}}>{row.subcatnm}</span>
                                           
                                            <br/>
                                            {/* <span style={{fontWeight:'bold'}}><u>₹{row.price}</u></span> */}
                                           
                                            {/* <span style={{color:'gray'}}>&nbsp;for {row.days} Nights</span>
                                             <br/> */}
                                             <span className='ml' style={{display:'flex',flexWrap:"wrap",fontSize:'14px'}}>{row.eventdesc}</span>
                                           
                                            <span className='ml'><i className="fa fa-map-marker-alt me-3"></i>{row.city}</span>
                                            </Link>
                                        </div>
                                     ))
                                }
                            </div>
                            <br/>
                            <button style={{marginLeft:"500px"}}>More Events--&gt;</button>
                        </div>
                        </div>
                    </div>               
            {/* Service End */}
        </>
    )
}
export default ViewHotel;