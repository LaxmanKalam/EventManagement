import React from 'react'
import axios from 'axios'
// import Footer from '../Components/Footer'
import { useLocation } from 'react-router-dom'
// import Header from '../Components/Header'

const MakePayment = () => {
    const location = useLocation();
    const checkoutHandler = async (amount) => {
        try {

            const { data: { key } } = await axios.get("http://www.localhost:5000/customer/getkey")

            const { data: { order } } = await axios.post("http://localhost:5000/customer/checkout", {
                amount
            })

            console.log("Order:", order)


            const options = {
                key,
                amount: order.amount,
                currency: "INR",
                name: "Videh Jaiswal",
                description: "Tutorial of RazorPay",
                image: "https://avatars.githubusercontent.com/u/75520279?v=4",
                order_id: order.id,
                callback_url: "http://localhost:5000/customer/paymentverification",
                prefill: {
                    name: "Videh Jaiswal",
                    email: "videh@gmail.com",
                    contact: "9999999999"
                },
                notes: {
                    "address": "Razorpay Corporate Office"
                },
                theme: {
                    "color": "#121212"
                }
            };
            console.log(options)
            console.log("window:", window)
            const razor = new window.Razorpay(options);
            console.log(razor)
            razor.open();

        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            {/* <Header /> */}
            <h1 style={{ marginTop: 80 }}></h1>
            <h4 className="mtext-105 cl2 txt-center p-b-30">
                Make Payment
            </h4>
            <div className="col-sm-10 col-lg-7 col-xl-5 m-lr-auto m-b-50">
                <button className="flex-c-m stext-101 cl0 size-116 bg11 bor14 p-lr-10 trans-04 pointer"
                    onClick={() => checkoutHandler(location.state.price)}
                >
                    Pay &#8377;{location.state.price}
                </button>
            </div>
            {/* <Footer /> */}
        </div>
    )
}

export default MakePayment