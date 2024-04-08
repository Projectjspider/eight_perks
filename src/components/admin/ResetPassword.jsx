import React, { useState } from 'react';
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function ResetPassword() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState('');
 
    const handleReset = async (e) => {
        e.preventDefault();
    
       
            await axios.put(`http://localhost:8080/resetpassword?email=${email}&password=${password}`)
            .then((res) => {
                console.log(res.data);
                if(res.data === "Password reset successfully"){

                    toast.success('Reset password  successfully.');
                }
                else { toast.error("mail not found")}
                
            })
         .catch ((error)=> {
            console.error('Error:',error);
            toast.error('Failed to send reset password link. Please try again later.');
        })
    };

    return (
        <div className='forgetbg'>
            <div className="mainforget">
                <h1>Reset Password</h1>
                <form className="mb-3" onSubmit={handleReset}>
                    <div>
                        <label htmlFor="email" className="form-label">Enter Email</label>
                        <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div>
                        <label htmlFor="password" className="form-label">New Password</label>
                        <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)}required/>
                        <div id="emailHelp" className="form-text">Please enter a strong password.</div>
                    </div>
                   
                    <button type="submit" className="btn btn-primary">Reset Password</button>
                </form>
               
            </div>
            <ToastContainer/>
        </div>
    );
}

export default ResetPassword;
