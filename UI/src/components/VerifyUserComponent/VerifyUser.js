import { useState, useEffect } from 'react';
import axios from 'axios';
import { _userApi } from '../../ApiUrl';
import { Navigate, useParams } from 'react-router-dom'

function VerifyUser() {
    const params = useParams();

    useEffect(() => {
        axios.get(_userApi + "fetch?email=" + params.email).then((response) => {
            if (response.data[0].__v == 0) {
                var updateDetails = { "condition_obj": { "email": params.email }, "content_obj": { "status": 1, "__v": 1 } };
                axios.patch(_userApi + "update", updateDetails).then((response) => {
                    console.log("user verified...")
                })
            }
        })
    }, [])
    return (
        <>
            <div>
                <Navigate to='/login' />
            </div>
        </>
    )
}
export default VerifyUser;