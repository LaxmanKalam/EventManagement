import './Addroom.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { __hotelapi, _categoryApi } from '../../ApiUrl';
import { useNavigate } from 'react-router-dom';
import ViewRoomCategory from '../ViewRoomCategoryComponent/ViewRoomCategory';
function Addroom() {
    const navigate = useNavigate();

    const [output, setOutput] = useState();

    // const [img2, setImg2] = useState();
    // const [img3, setImg3] = useState();
    // const [img4, setImg4] = useState();
    // const [img5, setImg5] = useState();
    // const [img6, setImg6] = useState();
    // const [img7, setImg7] = useState();

    // 
    // const [file, setFile] = useState();
    const [file, setFile] = useState([]); // ✅
    //const [files, setFiles] = useState([]);
    const [catnm, setCatnm] = useState();
    const [imgnm, setImgnm] = useState();
    // 
    const [subcatnm, setSubcatnm] = useState();
    const [city, setCity] = useState();
    const [price, setPrice] = useState();
    const [day, setDay] = useState();
    const [address, setAddress] = useState();
    const [eventdesc, setEventdesc] = useState();
    const [userrating, setUserRating] = useState();
    const [totalratings, setTotalRatings] = useState();

    //const [Cnpass, setCnpass] = useState();
    const [cDetail, setCDetail] = useState([]);

    // const [selectedCategory, setSelectedCategory] = useState(null);

    useEffect(() => {
        axios.get(__hotelapi + "fetch").then((response) => {
            //        console.log(response.data);
            setCDetail(response.data);
        }).catch((error) => {
            console.log(error);
        })

    }, [])

    const HandleChange = (event) => {
        setFile(event.target.files[0])
        
    }

    const HandleSubmit = (event) => {
        event.preventDefault();
        var formData = new FormData();
        formData.append('catnm', catnm);
        formData.append('caticon', file);
        formData.append('imgnm', imgnm);
        formData.append('subcatnm', subcatnm);
        formData.append('city', city);
        formData.append('price', price);
        formData.append('day', day);
        formData.append('address', address);
        formData.append('eventdesc', eventdesc);
        formData.append('userrating', userrating);
        formData.append('totalratings', totalratings);

        /*
         // Append multiple files
    files.forEach((file, index) => {
        formData.append('caticon', file); // or use 'caticon[]' if backend expects an array
    });
         */
        const config = {
            "content-type": "multipart/form-data"
        }
        axios.post(_categoryApi + "save", formData, config).then((response) => {
            setOutput("caterory Added Successfully")
            setFile();
            // setCatnm("");
            setImgnm("");

            navigate("/addroomcategory");
        }).catch((error) => {
            setOutput("caterory Not Added Successfully")
            navigate("/addroomcategory");
        })

    }

    // 

    const selectedCategory = cDetail.find(row => row.catnm === catnm);

    return (
        <>
            {/* Service Start */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-12 wow fadeInUp" style={{ marginBottom: "80px" }} data-wow-delay="0.3s">
                            <h1>Add Event Details</h1>
                            <font style={{ "color": "red" }}>{output}</font>
                            <br /><br />
                            <form>

                                <div class="form-group">
                                    <label for="CategoryName">CategoryName :</label> <br /> <br />
                                    <select style={{ height: '40px' }} class="form-control" value={catnm} onChange={e => setCatnm(e.target.value)}>
                                        <option>Select Category</option>
                                        {
                                            cDetail.map((row) => (
                                                <option>{row.catnm}</option>
                                                // <option>{row.price}</option>
                                            ))
                                        }
                                    </select>

                                    {/* <select style={{height:'40px'}} class="form-control" value={catnm} onChange={e => setCatnm(e.target.value)}>
                                        <option>Select Category</option>
                                        {
                                            cDetail.map((row) => (
                                                <option>{row.price}</option>
                                                // <option>{row.price}</option>
                                            ))
                                        }
                                    </select> */}
                                </div>
                                <br />
                                {/*  */}
                                {selectedCategory && (
                                    <div style={{ marginTop: '20px' }}>
                                        <h5>Selected Category Details:</h5>
                                        <p><b>hotel Name:</b> {selectedCategory.subcatnm}</p>
                                        <p><b>city:</b> {selectedCategory.city}</p>
                                        <p><b>Price:</b> {selectedCategory.price}</p>
                                        <p><b>days:</b> {selectedCategory.days}</p>
                                        <p><b>address:</b> {selectedCategory.address}</p>
                                        <p><b>userrating:</b> {selectedCategory.userrating}</p>
                                        <p><b>totalratings:</b> {selectedCategory.totalratings}</p>

                                    </div>
                                )}
                                {/*  */}
                                {/*  */}
                                <div class="form-group">
                                    <label for="Hotel Name" style={{ color: "black" }}>Hotel Name:</label> <br /> <br />
                                    <input type="text" value={subcatnm} class="form-control" onChange={e => setSubcatnm(e.target.value)} />
                                </div>
                                <br />
                                <div class="form-group">
                                    <label for="city" style={{ color: "black" }}>City Name:</label> <br /> <br />
                                    <input type="text" value={city} class="form-control" onChange={e => setCity(e.target.value)} />
                                </div>
                                <br />
                                <div class="form-group">
                                    <label for="price" style={{ color: "black" }}>Price:</label> <br /> <br />
                                    <input type="text" value={price} class="form-control" onChange={e => setPrice(e.target.value)} />
                                </div>
                                <br />
                                <div class="form-group">
                                    <label for="day" style={{ color: "black" }}>Day:</label> <br /> <br />
                                    <input type="text" value={day} class="form-control" onChange={e => setDay(e.target.value)} />
                                </div>
                                <br />
                                <div class="form-group">
                                    <label for="address" style={{ color: "black" }}>Address:</label> <br /> <br />
                                    <input type="text" value={address} class="form-control" onChange={e => setAddress(e.target.value)} />
                                </div>
                                <br />
                                <div class="form-group">
                                    <label for="eventdetails" style={{ color: "black" }}>Event Details:</label> <br /> <br />
                                    <textarea type="text" value={eventdesc} class="form-control" onChange={e => setEventdesc(e.target.value)} />
                                </div>
                                <br />
                               
                                {/*  */}

                                <div class="form-group">
                                    <label for="ImageName" style={{ color: "black" }}>Image Name:</label> <br /> <br />
                                    <input type="text" value={imgnm} class="form-control" onChange={e => setImgnm(e.target.value)} />
                                </div>
                                <br />

                                <div class="form-group">
                                    <label for="CatIcon" style={{ color: "black" }}
                                    >Category Icon :</label> <br /> <br />
                                    <input type="file" class="form-control" multiple onChange={HandleChange} />
                                </div>
                                <br />

                                <button type="button" onClick={HandleSubmit} class="btn btn-primary">Add Category</button>
                            </form>
                            {/* <ViewRoomCategory selectedCategory={selectedCategory} /> */}
                        </div>
                    </div>
                </div>
            </div>
            {/* Service End */}
        </>
    )
}
export default Addroom;