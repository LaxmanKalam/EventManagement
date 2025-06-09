import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SubNav.css';
// import CityHome from '../CityComponent/CityHome';

const SubNav = () => {

    const navigate = useNavigate();

    const [city, setCity] = useState('');
    const [checkInDate, setCheckInDate] = useState();
    const [checkOutDate, setCheckOutDate] = useState();

    const [month, setMonth] = useState(0); // January is 0
    const [year, setYear] = useState(2025); // Default year
   
    const [isCheckInCalendarVisible, setIsCheckInCalendarVisible] = useState(false); // State for Check-In calendar visibility
    const [isCheckOutCalendarVisible, setIsCheckOutCalendarVisible] = useState(false); // State for Check-Out calendar visibility

    const [selectedCheckInDate, setSelectedCheckInDate] = useState('1 January 2025');
    const [selectedCheckOutDate, setSelectedCheckOutDate] = useState('2 January 2025');

    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const daysInMonth = (month, year) => {
        // Handle February for leap years
        if (month === 1) {
            return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0) ? 29 : 28;
        }
        // Months with 30 days
        if ([3, 5, 8, 10].includes(month)) {
            return 30;
        }
        // Months with 31 days
        return 31;
    };

    const renderDays = () => {
        
        const days = [];
        const totalDays = daysInMonth(month, year);
        for (let day = 1; day <= totalDays; day++) {
            days.push(
                <div
                    className="day"
                    key={day}
                    onClick={() => handleDateSelect(day)} // Add click handler
                >
                    {day}
                </div>
            );
        }
        return days;
    };

    const handleMonthChange = (e) => {
        setMonth(Number(e.target.value));
    };

    const handleYearChange = (e) => {
        setYear(Number(e.target.value));
    };

    const toggleCheckInCalendar = () => {
        setIsCheckInCalendarVisible(!isCheckInCalendarVisible);
        setIsCheckOutCalendarVisible(false); // Close Check-Out calendar if open
    };

    const toggleCheckOutCalendar = () => {
        setIsCheckOutCalendarVisible(!isCheckOutCalendarVisible);
        setIsCheckInCalendarVisible(false); // Close Check-In calendar if open
    };

    const handleSearch = () => {
        // Implement search functionality here
        console.log('Searching for:', { city, checkInDate, checkOutDate });
    };
    const handleDateSelect = (day) => {

        if (isCheckInCalendarVisible) {
            setSelectedCheckInDate(`${day} ${months[month]} ${year}`); // Format the selected Check-In date
            setCheckInDate(`${day} ${months[month]} ${year}`);
            setIsCheckInCalendarVisible(false); // Close the calendar after selection
        } else if (isCheckOutCalendarVisible) {
            setSelectedCheckOutDate(`${day} ${months[month]} ${year}`); // Format the selected Check-Out date
            setCheckOutDate(`${day} ${months[month]} ${year}`);
            setIsCheckOutCalendarVisible(false); // Close the calendar after selection
        }
    };
    
    const handleCityChange = (e) => {
        const selectedCity = e.target.value;
        setCity(selectedCity);
        if (selectedCity === "All") {
            navigate('/'); // Navigate to home if "All" is selected
        } else if (selectedCity) {
            navigate('/cityhome', { state: { city: selectedCity } }); // Navigate to CityHome with the selected city
        }
    };

    function allhotel()
    {
        navigate('/')
    }
    return (
        <nav className="subnav">
            <div className="subnav-item" style={{ height: "35px" }}>
                <select style={{ height: "35px", overflowY: 'auto' }} value={city} onChange={handleCityChange}>
                    <option value="" disabled>Select City</option>

                    <option onClick={allhotel} >All</option>
                    <option >Agra</option>
                    {/* <option >Ahmedabad</option>
                    <option >Allahabad</option> */}
                    <option >Bangalore</option>
                    <option >Bhopal</option>
                    {/* <option >Chandigarh</option> */}
                    <option >Chennai</option>
                    <option >Delhi</option>
                    <option >Goa</option>
                    {/* <option >Hyderabad</option> */}
                    <option >Indore</option>
                    {/* <option >Jabalpur</option>
                    <option >Kolkata</option>
                    <option >Lucknow</option> */}
                    <option >Mumbai</option>
                    <option >Nagpur</option>
                    <option >Pune</option>
                    {/* <option >Surat</option> */}

                </select>
                {/* {
                    city && <CityHome city={city} />
                } */}
                {/* navigate('/cityhome'); */}
            </div>

            {/* <div className="calendar-container"  >
                <span style={{ fontWeight: 'bold' }} onClick={toggleCheckInCalendar} className="check-in-button">
                    Check-In  {selectedCheckInDate && (
                        <span className="selected-date">
                            Date: {selectedCheckInDate}
                        </span>
                    )}
                </span>
                {isCheckInCalendarVisible && (
                    <div className="calendar">
                        <h2>{months[month]} {year}</h2>
                        <div className="controls">
                            <select value={month} onChange={handleMonthChange}>
                                {months.map((m, index) => (
                                    <option key={index} value={index}>{m}</option>
                                ))}
                            </select>
                            <input
                                type="number"
                                value={year}
                                onChange={handleYearChange}
                                min="1900"
                                max="2100"
                            />
                        </div>
                        <div className="days">
                            {renderDays()}
                        </div>
                    </div>
                )}
              
            </div> */}

            {/* ---------------------- */}
            {/* <div className="calendar-container">
                <span style={{ fontWeight: 'bold' }} onClick={toggleCheckOutCalendar} className="check-in-button">
                    Check-Out  {selectedCheckOutDate && (
                        <span className="selected-date">
                            Date: {selectedCheckOutDate}
                        </span>
                    )}
                </span>
                {isCheckOutCalendarVisible && (
                    <div className="calendar">
                        <h2>{months[month]} {year}</h2>
                        <div className="controls">
                            <select value={month} onChange={handleMonthChange}>
                                {months.map((m, index) => (
                                    <option key={index} value={index}>{m}</option>
                                ))}
                            </select>
                            <input
                                type="number"
                                value={year}
                                onChange={handleYearChange}
                                min="1900"
                                max="2100"
                            />
                        </div>
                        <div className="days">
                            {renderDays()}
                        </div>
                    </div>
                )}
              
            </div> */}

            {/* ----------------------- */}


            <div className="subnav-item" style={{ height: "35px",display:'flex',borderRadius:'50px',border:'1px solid gray',width:'170px' }}>
                <input type='text' style={{backgroundColor:"white",borderTopLeftRadius:'50px',borderBottomLeftRadius:'50px',height:'100%',width:'100px',border:'none'}}></input>
                {/* <button style={{ height: "35px" ,backgroundColor:'#86B817'}} onClick={handleSearch}>Search</button> */}
                <span style={{width:'70px',borderRadius:'50px',paddingLeft:'17px',paddingTop:'2px'}}><img height={23} width={23} src='../assets/img/search.png'></img></span>
            </div>
        </nav>
    );
};

export default SubNav;