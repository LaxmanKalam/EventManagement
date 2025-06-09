import './AddSubCategory.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { __hotelapi } from '../../ApiUrl';
import { useNavigate } from 'react-router-dom';

function AddHotel() {
    const navigate = useNavigate();
    const [output, setOutput] = useState();
    const [file, setFile] = useState();
    const [catnm, setCatnm] = useState();
    const [subcatnm, setSubCatnm] = useState();
    const [address, setAddress] = useState();
    const [city, setCity] = useState();
    const [available, setAvailable] = useState();
    const [price, setPrice] = useState();
    const [days, setDays] = useState();
    const [mobile, setMobile] = useState();
    const [eventdesc, setEventdesc] = useState();

    /* select code start*/
    const [rating, setRating] = useState();
    const [facility1, setFacility1] = useState();
    const [facility2, setFacility2] = useState();
    const [d1, setD1] = useState();
    const [d2, setD2] = useState();
    const [d3, setD3] = useState();
    const [d4, setD4] = useState();
    const [offer,setOffer]=useState();
    const [discount,setDiscount]=useState();
    const [tax,setTax]=useState();
    const [bank,setBank]=useState();
    const [userrating,setUserRating]=useState();
    const [totalratings,setTotalRatings]=useState();
    /* select code end*/

    const HandleChange = (event) => {
        setFile(event.target.files[0]);
    }

    const HandleSubmit = (event) => {
        event.preventDefault();
        var formData = new FormData();
        formData.append('catnm', catnm);
        formData.append('subcatnm', subcatnm);
        formData.append('address', address);
        formData.append('mobile', mobile);
        formData.append("caticon", file);
        formData.append("city", city);
        formData.append("available", available);
        formData.append("price", price);
        formData.append("days", days);
        formData.append("eventdesc", eventdesc);

        formData.append("offer", offer);
        formData.append("discount", discount);
        formData.append("tax", tax);
        formData.append("bank", bank);

        // select start
        formData.append('rating', rating);
        formData.append('userrating', userrating);
        formData.append('totalratings', totalratings);
        formData.append('facility1', facility1);
        formData.append('facility2', facility2);
        formData.append('d1', d1);
        formData.append('d2', d2);
        formData.append('d3', d3);
        formData.append('d4', d4);
        //select end
        const config = {
            "content-type": "multipart/form-data"
        }
        axios.post(__hotelapi + "save", formData, config).then((response) => {
            setOutput("Hotel Added Successfully");
            navigate("/addhotel");
        }).catch((error) => {
            setOutput("Hotel not Added Successfully");
            navigate("/addhotel");
        })
    }
    return (
        <>
            {/* About Start */}
            <div class="container-xxl py-5">
                <div class="container">
                    <div class="row g-5">
                        <div class="col-lg-12 wow fadeInUp" data-wow-delay="0.1s">
                            <h1>Add Event Detail Here!!!</h1>
                            <font style={{ "color": "blue" }}>{output}</font>
                            <br /><br />
                            <form style={{ color: 'black' }}>

                                <div class="form-group">
                                    <label for="CategoryName" style={{ color: "black" }}>Category Name:</label> <br /> <br />
                                    <input type="text" value={catnm} class="form-control" onChange={e => setCatnm(e.target.value)} />
                                </div>
                                <br />
                                <div class="form-group">
                                    <label for="Event Name">Event Name :</label> <br /> <br />
                                    <input type="text" class="form-control" value={subcatnm} onChange={e => setSubCatnm(e.target.value)} />
                                </div>
                                <br />
                                <div class="form-group">
                                    <label for="Event City">Event City :</label> <br /> <br />
                                    <input class="form-control" value={city} onChange={e => setCity(e.target.value)}></input>
                                </div>
                                <br />
                                <div class="form-group">
                                    <label for="Hotel Availability">Availability :</label> <br /> <br />
                                    <input class="form-control" value={available} onChange={e => setAvailable(e.target.value)}></input>
                                </div>
                                <br />
                                <div class="form-group">
                                    <label for="Hotel Price">Price :</label> <br /> <br />
                                    <input class="form-control" value={price} onChange={e => setPrice(e.target.value)}></input>
                                </div>
                                <br />
                                <div class="form-group">
                                    <label for="Event Description">Event Description :</label> <br /> <br />
                                    <textarea class="form-control" value={eventdesc} onChange={e => setEventdesc(e.target.value)}></textarea>
                                </div>
                                <br />
                                {/* <div class="form-group">
                                    <label for="Hotel discount">discount :</label> <br /> <br />
                                    <input class="form-control" value={discount} onChange={e => setDiscount(e.target.value)}></input>
                                </div>
                                <br />
                                <div class="form-group">
                                    <label for="Hotel tax">tax :</label> <br /> <br />
                                    <input class="form-control" value={tax} onChange={e => setTax(e.target.value)}></input>
                                </div>
                                <br />
                                <div class="form-group">
                                    <label for="Hotel Offer">Bank Offer :</label> <br /> <br />
                                    <input class="form-control" value={offer} onChange={e => setOffer(e.target.value)}></input>
                                </div>
                                <br /> */}
                                <div class="form-group">
                                    <label for="Hotel Days">How Many Days :</label> <br /> <br />
                                    <input class="form-control" value={days} onChange={e => setDays(e.target.value)}></input>
                                </div>
                                <br />
                                <div class="form-group">
                                    <label for="Event Address">Event Address :</label> <br /> <br />
                                    <textarea class="form-control" value={address} onChange={e => setAddress(e.target.value)}></textarea>
                                </div>
                                <br />
                                <div class="form-group">
                                    <label for="Mobile">Mobile :</label> <br /> <br />
                                    <input class="form-control" value={mobile} onChange={e => setMobile(e.target.value)}></input>
                                </div>
                                <br />
                                <div class="form-group">
                                    <label for="Caticon">Hotel Icon:</label><br /> <br />
                                    <input type="file" class="form-control" onChange={HandleChange} />
                                </div>
                                <br />
                                {/* select start */}
                                {/* <div class="form-group">
                                    <label for="facility 1">facility 1 :</label> <br /> <br />
                                    <textarea class="form-control" value={facility1} onChange={e => setFacility1(e.target.value)}></textarea>
                                </div>
                                <br />

                                <div class="form-group">
                                    <label for="facility 2">facility 2:</label> <br /> <br />
                                    <textarea class="form-control" value={facility2} onChange={e => setFacility2(e.target.value)}></textarea>
                                </div>
                                <br />

                                <div class="form-group">
                                <label for="rating">select Rating :</label> <br /> <br />
                                    <select value={rating} onChange={e => setRating(e.target.value)} >
                                        <option value="">select</option>
                                        <option value="5">5</option>
                                        <option value="4">4</option>
                                        <option value="3" >3</option>
                                    </select>
                                </div>
                                <br />
                                <div class="form-group">
                                <label for="rating">User Rating :</label> <br /> <br />
                                    <select value={userrating} onChange={e => setUserRating(e.target.value)} >
                                        <option value="">select</option>
                                        <option value="5">5</option>
                                        <option value="4.9" >4.9</option>
                                        <option value="4.8" >4.8</option>
                                        <option value="4.5" >4.5</option>
                                        <option value="4.2" >4.2</option>
                                        <option value="4">4</option>
                                        <option value="3.9" >3.9</option>
                                        <option value="3.8" >3.8</option>
                                        <option value="3.5" >3.5</option>
                                        <option value="3.1" >3.1</option>
                                        <option value="3" >3</option>
                                    </select>
                                </div>
                                <br />
                                <div class="form-group">
                                    <label for="Mobile">total Ratings :</label> <br /> <br />
                                    <input class="form-control" value={totalratings} onChange={e => setTotalRatings(e.target.value)}></input>
                                </div>
                                <br />
                                <div class="form-group">
                                <label for="Type">Type :</label> <br /> <br />
                                    <select value={d1} onChange={e => setD1(e.target.value)}>
                                        <option value="">select</option>
                                        <option value="Couple Friendly" >Couple Friendly</option>
                                        <option value="Family Friendly">Family Friendly</option>
                                    </select>
                                </div>
                                <br /> */}

                                <div class="form-group">
                                <label for="charges">charges :</label> <br /> <br />
                                    <select value={d2} onChange={e => setD2(e.target.value)}>
                                        <option value="">select</option>
                                        <option value="Free Cancellation" >Free Cancellation</option>
                                        <option value="Cancellation Charges">Cancellation Charges</option>
                                    </select>
                                </div>
                                <br />
{/* 
                                <div class="form-group">
                                <label for="meals">meals :</label> <br /> <br />
                                    <select value={d3} onChange={e => setD3(e.target.value)}>
                                        <option value="">select</option>
                                        <option value="Breakfast available at extra charges" >
                                            Breakfast available at extra charges</option>
                                        <option value="Breakfast Included">Breakfast Included</option>
                                        <option value="Breakfast Not Included">Breakfast Not Included</option>
                                    </select>
                                </div>
                                <br />

                                <div class="form-group">
                                <label for="aditional offers"> aditional offers :</label> <br /> <br />
                                    <select value={d4} onChange={e => setD4(e.target.value)}>
                                        <option value="">select</option>
                                        <option value="Book @ ₹0 available" >Book @ ₹0 available</option>
                                        <option value="10% Off on Airport Transfer" >10% Off on Airport Transfer</option>
                                        <option value="Get a Taj Gift Card worth at least INR 500 for F&B & Spa" >Get a Taj Gift Card worth at least INR 500 for F&B & Spa</option>
                                        <option value="Heritage hostel featuring a kitchen & indoor games">Heritage hostel featuring a kitchen & indoor games</option>
                                    </select>
                                </div>
                                <br />

                                <div class="form-group">
                                <label for="bank offers"> bank offers :</label> <br /> <br />
                                    <select value={bank} onChange={e => setBank(e.target.value)} >
                                        <option value="">select</option>
                                        <option value="Pay using HDFC Bank and enjoy No cost EMI for 3 months and Flat 12% Instant Discount">Pay using HDFC Bank and enjoy No cost EMI for 3 months and Flat 12% Instant Discount</option>
                                        <option value="Get Flat 15% off and No Cost EMI on HSBC Credit Card EMI">Get Flat 15% off and No Cost EMI on HSBC Credit Card EMI</option>
                                        <option value="Pay using HSBC Bank Credit Card EMI option to Enjoy 3 and 6 Months No Cost EMI." >Pay using HSBC Bank Credit Card EMI option to Enjoy 3 and 6 Months No Cost EMI.</option>
                                    </select>
                                </div> */}
                                <br />
                                {/* select end */}
                                <button type="button" onClick={HandleSubmit} class="btn btn-primary">Add Hotel</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* About End */}
        </>
    )
}
export default AddHotel;
