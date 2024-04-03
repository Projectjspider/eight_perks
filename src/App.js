import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Home from './components/home';
import Adminhome from './components/admin/Adminhome';
import AddEmp from './components/admin/AddEmp';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/' element = {<Home/>}></Route>
        <Route path='/Adminhome' element = {<Adminhome/>}></Route>
        <Route path='/addemp' element = {<AddEmp/>}></Route>

      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
