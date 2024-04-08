import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Home from './components/home';
import Adminhome from './components/admin/Adminhome';
import AddEmp from './components/admin/AddEmp';
import Adminlogin from './components/admin/Adminlogin';
import ConfirmOTP from './components/admin/ConfirmOTP';
import ResetPassword from './components/admin/ResetPassword';
import ResetPasswordMail from './components/admin/ResetPasswordMail';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/' element = {<Home/>}></Route>
        <Route path='/Adminhome' element = {<Adminhome/>}></Route>
        <Route path='/addemp' element = {<AddEmp/>}></Route>
        <Route path='/adminlogin' element = {<Adminlogin/>}></Route>
        <Route path='/cnfotp' element = {<ConfirmOTP/>}></Route>
        <Route path='/resetPasswordMail' element = {<ResetPasswordMail/>}></Route>
        <Route path='/ResetPassword' element = {<ResetPassword/>}></Route>



      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
