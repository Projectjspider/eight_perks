import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function ResetPasswordMail() {
    const [email, setEmail] = useState("");

    const navigate = useNavigate();

    const sendResetPasswordEmail =async (e) => {
             e.preventDefault();



            await axios.get(`http://localhost:8080/resetpasswordmail?email=${email}`)
            .then((res) => {
                if(res.data === "Reset password link sent to your email."){

                    console.log(res.data);
                    toast.success('Reset password link sent successfully.');
                    navigate('/Adminlogin'); // Navigate to the login page after sending the email



                }
                else {
                    toast.error("mail is not found in database");
                    setTimeout(() => window.location.reload(), 1000); 
                };

               
            })
            .catch((error) => {
                console.log(error.data);
                console.error('Error:', error);
                toast.error('Failed to send reset password link. Please try again later.');
            })

    };


    return (
        <div className="forgetbg">
            <div className="mainforget">
                <h2>Forget Password</h2>
                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <button type="button" className="btn btn-primary" onClick={sendResetPasswordEmail} > Send Reset Password Email</button>


                </form>

            </div>
            <ToastContainer />
        </div>

    );
}

export default ResetPasswordMail;
