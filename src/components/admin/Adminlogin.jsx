import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios" 

const Adminlogin = () => {

    let [email, setemail] = useState("")
    let [password, setpassword] = useState("")
    let navigate = useNavigate()


    let checkData = (e) => {
        e.preventDefault();
        axios.get(`http://localhost:8080/login?email=${email}&password=${password}`)
            .then((res) => {
                navigate('/cnfotp')
                localStorage.setItem("otp", res.data)
                alert("Logged in success fully")
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
                alert("Invalid Credentials")
            })

    }
    return (
        <div className="admin-login-body">
        <div className='wrapper'>
            <form action="">
                <h1>Admin</h1>
                <div className='input-box'>
                    <input type="text" value={email}
                        onChange={(e) => { setemail(e.target.value) }} placeholder='Username' required />
                    {/* <FaUser className='icon' /> */}
                </div>
                <div className='input-box'>
                    <input type="Password" value={password} onChange={(e) => { setpassword(e.target.value) }} placeholder='Password' required />
                    {/* <FaLock className='icon' /> */}
                </div>
                <div className='forgot'>
                    <label><input type="checkbox" />Save Password</label>
                    <a href="/resetPasswordMail" >Forgot Password ?</a>
                </div>
                <button type='submit' onClick={checkData}>Login</button>

            </form>
        </div>
        </div>

    );
}

export default Adminlogin;