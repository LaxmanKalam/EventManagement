import Footer from "./components/FooterComponent/Footer";
import Header from "./components/HeaderComponent/Header";
import Home from "./components/HomeComponent/Home";
import About from "./components/AboutComponent/About"
import Contact from "./components/ContactComponent/Contact"
import Service from "./components/ServiceComponent/Service"
import Register from "./components/RegisterComponent/Register"
import Login from "./components/LoginComponent/Login"

import Nav from "./components/NavComponent/Nav";

import { Routes, Route } from "react-router-dom";
import Banner from './components/BannerComponent/Banner'
import Admin from "./components/AdminComponent/Admin";
import User from "./components/UserComponent/User";
import Logout from "./components/LogoutComponent/Logout";
import EpAdmin from "./components/EpAdminComponent/EpAdmin";
import CpAdmin from "./components/CpAdminComponent/CpAdmin";
import UserManage from "./components/UserManageComponent/UserManage";
//import UserManage from "./components/UserManageComponent/UserManage";
import Addroom from "./components/AddRoomCategory/Addroom";
import AddRoom from "./components/AddRoomDetails/AddRoom";
import ViewRoomCategory from "./components/ViewRoomCategoryComponent/ViewRoomCategory";
import AddHotel from "./components/AddSubCategoryComponent/AddSubCategory";
import VerifyUser from "./components/VerifyUserComponent/VerifyUser";
import ViewHotel from "./components/ViewHotelComponent/ViewHotel";
import BookHotel from "./components/BookComponent/BookHotel";
import LoginPopup from "./components/LoginPopUp/LoginPopUp";
import CityHome from "./components/CityComponent/CityHome";
import MakePayment from "./components/BookComponent/MakePayment";
import PaymentSuccess from "./components/BookComponent/PaymentSuccess";
// import CartPage from "./components/Payment/CartPage";
// import SubNav from "./SubNavComponent/SubNav";
import { BrowserRouter as Router } from 'react-router-dom';
import { HotelProvider } from './components/HotelContext/HotelContext'


// import Code from "./Code";
function App() {
  return (
    <>
     
        <HotelProvider>

          <Header />

          <Nav />

          {/* <SubNav /> */}
          {/* <Banner /> */}

          {/* <Home /> */}
          <Routes>

            <Route path="/" element={<ViewHotel />}></Route>
            <Route path="/about" element={<About />}></Route>

            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/service" element={<Service />}></Route>

            <Route path="/register" element={<Register />}></Route>
            <Route path="/login" element={<Login />}></Route>
            {/* <Route path="/admin" element={<Admin />}></Route> */}
            <Route path="/user" element={<ViewHotel />}></Route>
            <Route path="/logout" element={<Logout />}></Route>
            {/* <Route path="manageuser" element={<ManageUser />}></Route> */}
            <Route path="/epadmin" element={<EpAdmin />}></Route>
            <Route path="/cpadmin" element={<CpAdmin />}></Route>
            <Route path="/usermanage" element={<UserManage />}></Route>
            <Route path="/addroomcategory" element={<Addroom />}></Route>
            <Route path="/addhotel" element={<AddHotel />}></Route>

            <Route path="/addroomdetails" element={<AddRoom />}></Route>
            <Route path="/viewroomcategory/:catnm" element={<ViewRoomCategory />}></Route>
            <Route path="/verifyuser/:email" element={<VerifyUser />}></Route>
            <Route path="/viewhotel" element={<ViewHotel />}></Route>
            <Route path="/bookvilla" element={<BookHotel />}></Route>
            <Route path="/loginpopup" element={<LoginPopup />}></Route>
            <Route path="/cityhome" element={<CityHome />}></Route>
            {/* <Route path="/makepayment" element={<MakePayment />}></Route> */}
            {/* <Route path="/paymentsuccess" element={<PaymentSuccess />}></Route> */}
            {/* <Route path="/payment" element={<CartPage />}></Route> */}

          </Routes>
          {/* <Code/> */}
          <Footer />
        </HotelProvider>
    </>
  );
}

export default App;

//KEY ID
// rzp_test_WKQTvkp0cdAGxU

// SECRET KEY
//m7g3NOyPAgpvd9CynVVZCJea