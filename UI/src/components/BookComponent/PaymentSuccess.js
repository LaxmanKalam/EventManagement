import React, { useEffect } from 'react'
import { useSearchParams } from "react-router-dom"
import { useNavigate } from 'react-router-dom'
// import { EMPTY_CARD, CREATE_ORDER,CART_DETAILS } from '../Utility/Constant'
import axios from 'axios'

const PaymentSuccess = () => {
    const navigate = useNavigate()
    const seachQuery = useSearchParams()[0]
    const referenceNum = seachQuery.get("reference")
    var c_id = localStorage.getItem("id")

    // useEffect(() => {
    //     if (referenceNum) {
    //         getCartDetails()
    //     } else {
    //         navigate("/customer/")
    //     }
    // }, [])

    // const getCartDetails=()=>{
    //     var c_id = localStorage.getItem("id")
    //     axios.get(CART_DETAILS + c_id)
    //         .then((response) => {
    //             console.log(response.data.cartdetails._id)
    //             let cartData = response.data.cartdetails.products
    //             console.log(cartData)
    //             createOrder(cartData, c_id);       
    //         })
    //         .catch((err) => {
    //             console.log(err)
    //         })
    // }

    // const emptyCard = () => {
    //     axios.get(EMPTY_CARD + c_id)
    //         .then((response) => {
    //             // alert(response.data.msg)
    //             console.log(response)
    //             navigate("/customer/cart")
    //         })
    //         .catch((err) => {
    //             alert(err)
    //             navigate("/customer")
    //         })
    // }

    const createOrder = (cartData, c_id) => {
        if (!cartData || cartData.length === 0) {
            console.log("Cart is empty, cannot place order");
            return;
        }
    
        const orderData = {
            customer_id: c_id,
            orders: cartData.map(item => ({
                product_id: item.product_id,
                product_brand: item.product_brand,
                product_variant_name: item.product_variant_name,
                product_description: item.product_description,
                product_price: item.product_price,
                product_quantity: item.product_quantity,
                product_imageurl: item.product_imageurl
            }))
        };
    
        // axios.post(CREATE_ORDER, orderData) 
        //     .then((response) => {
        //         console.log("Order Created Successfully:", response.data);
        //         emptyCard(c_id);
        //     })
        //     .catch((err) => {
        //         console.log("Error Creating Order:", err.response?.data || err.message);
        //     });
    };
    return (
        <div>
            <h1>Order Successfully</h1>
        </div>
    )
}

export default PaymentSuccess