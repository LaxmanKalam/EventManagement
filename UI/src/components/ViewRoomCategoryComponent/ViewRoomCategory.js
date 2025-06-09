import './ViewRoomCategory.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { _categoryApi } from '../../ApiUrl';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import React, { useContext } from 'react';
import { HotelContext } from '../HotelContext/HotelContext'; // update path as needed

function ViewRoomCategory() {
    const navigate = useNavigate();
    const [cDetail, setCDetail] = useState([]);
    const { hotels } = useContext(HotelContext); ////////////////
    const params = useParams();
    useEffect(() => {
        axios.get(_categoryApi + "fetch?catnm=" + params.catnm).then((response) => {
            setCDetail(response.data);
        }).catch((error) => {
            console.log(error);
        })
    }, [])

    const [isOpen, setIsOpen] = useState(false);
    const [guestCount, setGuestCount] = useState(1);
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [infants, setInfants] = useState(0);
    const [pets, setPets] = useState(0);

    const toggleDropdown = () => setIsOpen(!isOpen);
    // const selectedCategory = cDetail.find(row => row.catnm === params.catnm);
    return (
        <>
            {/* view room Start */}
            <div style={{ backgroundColor: 'white', width: '100%' }}>

                {
                    cDetail.map((row) => (
                        <>
                            {hotels.length > 0 ? (
                                hotels
                                    .filter(hotel => hotel.catnm === params.catnm)
                                    .map((hotel, index) => (
                                        <>

                                            <div style={{ marginLeft: '115px', marginRight: '115px' }}>

                                                {/* header st */}
                                                <div style={{ height: '50px', position: 'relative', display: 'flex', alignItems: 'center' }}>

                                                    <span style={{ fontWeight: 'bold', fontSize: '22px', marginLeft: '5px' }}>{row.subcatnm}</span>

                                                    <span style={{ position: 'absolute', right: '140px' }}><img src='../assets/img/export.png' height={16} width={16} /> <u>&nbsp;Share</u></span>

                                                    <span style={{ position: 'absolute', right: '50px' }}><img src='../assets/img/save.png' height={16} width={16} /> <u>&nbsp;Save</u></span>

                                                </div>
                                                {/* header end */}

                                                {/* image div start */}
                                                <div style={{  width: '100%', height: '375px', display: 'flex', padding: '8px' }}>
                                                    <div style={{ height: '350px', width: '750px', borderRadius: '7px 0 0 7px' }}>
                                                        <span><img src={`../assets/uploads/caticons/${row.caticonnm}`} height={350} width={750} style={{ objectFit: 'cover' }} /></span>
                                                    </div>
                                                    <div style={{  height: '600px', width: '350px', marginLeft: '10px', borderRadius: '7px' }}>
                                                        {/* -------------------------- */}
                                                        <div className='paymentbox'>
                                                            <div style={{ width: '275px', border: '1px solid gray', marginTop: '0px', height: '45px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '5px', backgroundColor: '#ff385c', color: 'black', fontWeight: 'bold', cursor: 'pointer' }} onClick={() => navigate('/bookvilla')}>Register</div>
                                                            <br />
                                                            <div>
                                                                <span style={{ fontWeight: 'bold', fontSize: '22px' }}><u>₹{hotel.price} Per Person</u></span> &nbsp;

                                                            </div>
                                                            <div className='payboxes'>

                                                                <br />
                                                                <div className='box3'>
                                                                    <div className="guest-dropdown">
                                                                        <div className="dropdown-header" onClick={toggleDropdown}>
                                                                            <span>{adults} guest, children {children}, infants {infants}{guestCount !== 1 ? 's' : ''}</span>
                                                                            <span>&#x25BC;</span> {/* Dropdown arrow */}
                                                                        </div>
                                                                        {isOpen && (
                                                                            <div className="dropdown-content">
                                                                                <div className="guest-option">
                                                                                    <span>Adults</span>
                                                                                    <span >Age 13+</span>
                                                                                    <button onClick={() => setAdults(Math.max(0, adults - 1))}>−</button>
                                                                                    <span>{adults}</span>
                                                                                    <button onClick={() => setAdults(adults + 1)}>+</button>
                                                                                </div>
                                                                                <div className="guest-option" >
                                                                                    <span>Children</span>
                                                                                    <span style={{ marginLeft: '0px' }}>Ages 2–12</span>
                                                                                    <button onClick={() => setChildren(Math.max(0, children - 1))}>−</button>
                                                                                    <span>{children}</span>
                                                                                    <button onClick={() => setChildren(children + 1)}>+</button>
                                                                                </div>
                                                                                <div className="guest-option">
                                                                                    <span>Infants</span>
                                                                                    <span>Under 2</span>
                                                                                    <button onClick={() => setInfants(Math.max(0, infants - 1))}>−</button>
                                                                                    <span>{infants}</span>
                                                                                    <button onClick={() => setInfants(infants + 1)}>+</button>
                                                                                </div>
                                                                                <div className="guest-option">
                                                                                    <span>Pets</span>
                                                                                    <span>Bringing a service animal?</span>
                                                                                    <button onClick={() => setPets(Math.max(0, pets - 1))}>−</button>
                                                                                    <span>{pets}</span>
                                                                                    <button onClick={() => setPets(pets + 1)}>+</button>
                                                                                </div>
                                                                                <p>This place has a maximum of 3 guests, not including infants. Pets aren't allowed.</p>
                                                                            </div>
                                                                        )}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <br />
                                                            <span>Day- {hotel.days} </span>
                                                            <br />

                                                            <span>Time- 8AM-1PM</span>
                                                            <br />
                                                            <br />
                                                            <h5 style={{ color: "black" }}>Location</h5>
                                                            <span>city- {hotel.city}</span>
                                                            <br />
                                                            <span>address- {hotel.address}</span>
                                                            <br />
                                                            <span>venue - MGM Playground</span>
                                                            <br />
                                                            <br />
                                                            <h5 style={{ color: "black" }}>Organizer</h5>
                                                            <span>Hosted by Aakash</span>
                                                            <br />
                                                            <span>Superhost- 3 years hosting</span>
                                                             <h5 style={{ color: "black" }}>Contact</h5>
                                                            <span>+91 {hotel.mobile}</span>
                                                            

                                                        </div>
                                                        {/* <div className='paymentbox'>
                                                    
                                                    </div> */}
                                                    </div>
                                                    {/* <div style={{ display: 'flex', marginLeft: '10px', flexWrap: 'wrap' }}>
                                                        <div className='i1'>
                                                            <span ><img src='../assets/room/living.jpg' height={155} width={290} style={{ objectFit: 'cover' }} /></span>
                                                        </div>
                                                    <div className='i1' style={{ marginLeft: '9px', borderRadius:'0 7px 7px 0' }}>
                                                        <span><img src='../assets/room/kitchen.jpg' height={155} width={290} style={{ objectFit: 'cover' }} /></span>
                                                    </div>
                                                    <div className='i1'>
                                                        <span><img src='../assets/room/pool.jpg' height={155} width={290} style={{ objectFit: 'cover' }} /></span>
                                                    </div>
                                                    <div className='i1' style={{ marginLeft: '9px', borderRadius:'0 7px 7px 0'}}>
                                                        <span><img src='../assets/room/washroom.jpg' height={155} width={290} style={{ objectFit: 'cover' }} /></span>
                                                    </div>
                                                    </div> */}
                                                </div>
                                                {/* image div start */}

                                                {/* name and tag start*/}
                                                {/* <div className='nametag'>
                                                    <div className='tag1'>
                                                        <span style={{ color: 'black', fontWeight: 'bold' }}>Entire cabin,India</span>
                                                        <br />
                                                        <span style={{ color: 'gray', fontSize: '18px' }}>8 guests, 3 bedrooms, 3 beds, 3.5 bathrooms</span>
                                                    </div>
                                                    <div className='tag2'><img src='../assets/img/tag.png' height={24} width={24} />&nbsp;Prices include all fees</div>
                                                </div> */}
                                                {/* name and tag end */}

                                                {/* detail and payment start */}
                                                <div className='detail-payment'>
                                                    {/* detail start */}
                                                    <div className='details'>
                                                        {/* <span style={{ fontWeight: 'bold', fontSize: '18px' }}>★{row.userrating} Rating</span>&nbsp;
                                                        <span style={{ fontWeight: 'bold', fontSize: '18px' }}><u>{row.totalratings}&nbsp;reviews</u></span> */}
                                                        <h3>{row.subcatnm}</h3>
                                                       
                                                        <span>{row.eventdesc}</span>


                                                        <h5 style={{ color: 'black' }}>Additional Features</h5>
                                                        <span className='adfeature1'>13-min walk to the Airport</span>
                                                        <br />
                                                        <span className='adfeature2'>This Ground is by Pavana Lake.</span>
                                                        <br />
                                                        <br />
                                                        <span className='adfeature1'>Designed for staying cool</span>
                                                        <br />
                                                        <span className='adfeature2'>Beat the heat with the A/C.</span>
                                                        <br />
                                                        <br />
                                                        <span className='adfeature1'>Free cancellation for 48 hours</span>
                                                        <br />
                                                        <span className='adfeature2'>Get a full refund if you change your mind.</span>
                                                        <br />
                                                        <br />

                                                        <hr />
                                                        <br />
                                                        <p>Who wouldn't want to live in a spacious cabin on a hill with an expansive valley view!? Kick back and relax in this calm, stylish space, away from the chaotic city life.</p>
                                                        <p style={{ fontWeight: 'bold', marginBottom: '0px' }}>The space</p>
                                                        <p style={{ margin: '0px' }}>There are wardrobes, ACs, side tables, fans, beds in all the 3 rooms. The living room has 2 ACs, an open kitchen, dining set and 2 sofas. Adding to the list of amenities, there's an infinity pool and a private garden.</p>
                                                        <br />
                                                        <hr />


                                                        <hr />
                                                        <br />

                                                        <h4>What this place offers</h4>
                                                        <div style={{ width: '100%' }}>
                                                            <span className='offers'>1. Close view</span>
                                                            <span className='offers' style={{ marginLeft: '260px' }}>2. Best view</span>
                                                            <br />
                                                            <br />
                                                            <span className='offers'>3. Kitchen</span>
                                                            <span className='offers' style={{ marginLeft: '310px' }}>4. Wifi</span>
                                                            <br />
                                                            <br />
                                                            <span className='offers'>5. Dedicated workspace</span>
                                                            <span className='offers' style={{ marginLeft: '185px' }}>6. Free parking on premises</span>
                                                            <br />
                                                            <br />
                                                            <span className='offers'>7. Private Cabin</span>
                                                            <span className='offers' style={{ marginLeft: '270px' }}>8. HD Screen</span>
                                                            <br />
                                                            <br />
                                                            <span className='offers'>9. Carbon monoxide alarm</span>
                                                            <span className='offers' style={{ marginLeft: '153px' }}>10. Fire alarm</span>
                                                            <br />
                                                            <br />
                                                            <span className='offers'>And many More</span>
                                                        </div>

                                                    </div>
                                                    {/* detail end */}

                                                    {/* payment start */}

                                                    {/* payment end */}
                                                </div>
                                                {/* detail and payment end */}
                                            </div>
                                        </>
                                    ))
                            ) : (
                                <p>No hotel data available.</p>
                            )}
                        </>
                    ))
                }
                {/* extra div end for whole content */}
                <div style={{ width: '100%', border: '1px solid black', height: '350px', display: 'flex', justifyContent: 'center', alignItems: "center" }}>
                    <h3> NO EVENTS SCHEDULE</h3>
                </div>
            </div>
            {/* view room end */}
        </>
    )
}
export default ViewRoomCategory;