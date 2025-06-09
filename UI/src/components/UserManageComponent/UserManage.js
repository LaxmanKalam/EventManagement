import './UserManage.css';
import { useNavigate } from 'react-router-dom';
import { _userApi } from '../../ApiUrl';
import { useState, useEffect } from 'react';
import axios from 'axios';

function UserManage()
{
    const navigate=useNavigate();
        const [userDetail, setUserDetail] = useState([]);
    
        useEffect(() => {
            axios.get(_userApi + "fetch?role=user").then((response) => {
                setUserDetail(response.data);
            }).catch((error) => {
                console.log(error);
            })
        });
    
        const handleChange=(_id,s)=>{
            if(s=='verify') //send request to update API
            {
                const updateDetails = {"condition_obj":{"_id":_id},"content_obj":{"status":1}};
                axios.patch(_userApi+"update",updateDetails).then((response)=>{
                    alert("user varified successfully");
                    navigate("/manageuser");
                }).catch((error)=>{
                    alert("user 'NOT' varified successfully!!!!!");
                    navigate("/manageuser");
                })
            }
            else if(s=='block')
            {
                const updateDetails = {"condition_obj":{"_id":_id},"content_obj":{"status":0}};
                axios.patch(_userApi+"update",updateDetails).then((response)=>{
                    alert("user varified successfully");
                    navigate("/manageuser");
                }).catch((error)=>{
                    alert("user 'NOT' varified successfully!!!!!");
                    navigate("/manageuser");
                })
            }
            else
            {
                const deleteDetails = {"data":{"_id":_id}};
                axios.delete(_userApi+"delete",deleteDetails).then((response)=>{
                    alert("user Delete successfully");
                    navigate("/manageuser");
                }).catch((error)=>{
                    alert("user 'NOT' Delete successfully!!!!!");
                    navigate("/manageuser");
                })
            }
        }
    return (
     <>
      {/* Service Start */}
      <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5">
                       
                        <div className="col-lg-12 wow fadeInUp" style={{marginBottom:"80px"}} data-wow-delay="0.3s" >
                        <h1>View and Manage UserDetails!!!!</h1>
                        <table className="table table-bordered" border={2} cellPadding={7} cellSpacing={7}
                        width={900}>
                                <tr>
                                    <th>regID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Mobile</th>
                                    <th>Address</th>
                                    <th>City</th>
                                    <th>Gender</th>
                                    <th>Info</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                                {
                                    userDetail.map((row) => (
                                        <tr>
                                            <td>{row._id}</td>
                                            <td>{row.name}</td>
                                            <td>{row.email}</td>
                                            <td>{row.mobile}</td>
                                            <td>{row.address}</td>
                                            <td>{row.city}</td>
                                            <td>{row.gender}</td>
                                            <td>{row.info}</td>
                                            
                                            <td>
                                                {
                                                    (row.status==0) && <font style={{color:"green",cursor: 'pointer'}} onClick={()=>{
                                                        handleChange(row._id,'verify')
                                                    }}>Verify</font>
                                                }
                                                {
                                                    (row.status==1) && <font style={{color:"orange",cursor: 'pointer'}}onClick={()=>{
                                                        handleChange(row._id,'block')
                                                     }}>Block</font>
                                                }
                                            </td>
                                            <td><font style={{color:"red",cursor: 'pointer'}} onClick={()=>handleChange(row._id,'delete')}>DELETE</font></td>
                                        </tr>
                                    ))
                                }
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            {/* Service End */}
     </> 
)
} 
export default UserManage;