// import React from "react";
// import { useState } from "react";
// function Code()
// {
//     const [city,setCity]=useState("select");

//     return (
//     <>
//     <select>
//         <option>{city}</option>
//         <option onClick={()=>setCity('Agra')}>Agra</option>
//         <option onClick={()=>setCity('Bhopal')}>Bhopal</option>
//         <option onClick={()=>setCity('Indore')}>Indore</option>
//     </select>
//     </>
//     )
// }
// export default Code;

/* Importing Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

body {
  font-family: 'Roboto', sans-serif; /* Applying the font to the body */
}

.subnav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white; /* Darker background color */
  padding: 15px;
  /* box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3); */
  border-radius: 8px; /* Rounded corners for the subnav */
}

.subnav-item {
  margin: 0 15px;
}

.subnav-item select,
.subnav-item input,
.subnav-item button {
  padding: 10px 15px;
  border: 2px solid #2980b9; /* Border color */
  border-radius: 5px; /* Rounded corners for inputs and button */
  font-size: 16px;
  transition: all 0.3s ease; /* Smooth transition for hover effects */
}

.subnav-item select {
  background-color: #ecf0f1; /* Light background for select */
}

.subnav-item input {
  background-color: #ecf0f1; /* Light background for input */
}

.subnav-item button {
  background-color: #2980b9; /* Button background color */
  color: white; /* Button text color */
  cursor: pointer;
}

.subnav-item button:hover {
  background-color: #3498db; /* Lighter blue on hover */
  border-color: #3498db; /* Change border color on hover */
}

.subnav-item select:hover,
.subnav-item input:hover {
  border-color: #3498db; /* Change border color on hover */
}

