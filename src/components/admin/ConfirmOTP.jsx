import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ConfirmOTP() {
    const otpRef = useRef(null);
    const navigate = useNavigate(); // Using useNavigate for navigation

    const verify = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        const storedOTP = parseInt(localStorage.getItem("otp"), 10); // Parse stored OTP as integer
        const enteredOTP = parseInt(otpRef.current.value, 10); // Parse entered OTP as integer

        if (!isNaN(storedOTP) && enteredOTP === storedOTP) {
            await new Promise((resolve) => {
                toast.success('Logged in Successfully', {
                    onClose: resolve
                }); })

           navigate('/Adminhome'); // Navigate to Adminhome

        } else {
             await new Promise(( err ) => {
                toast.error('invalid otp', {
                    onClose: err
                }); })
                window.location.reload();

        }
    };

    return (
        <div className='forgetbg'>
            <div className="mainforget">
                <h1>ConfirmOTP</h1>
                <form onSubmit={verify}>
                    <div className="mb-3">
                        <input ref={otpRef} type="text" className="form-control" id="exampleInputEmail1" placeholder='Enter OTP here' />
                        <div id="emailHelp" className="form-text"> do not share your otp anywhere...</div>

                    </div>
                    < button type="submit" className="btn btn-primary">Verify</button>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
}

export default ConfirmOTP;
