import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddEmp = () => {

    
       

    return ( <div className="AddEmp-cont">
               

                <h1>Add New Employee</h1>
                <form >
                    <input type="text" placeholder="name"  required/>
                    <input type="email" name="" id=""  placeholder="email" required/>
                    <input type="date" placeholder="date of joining" required/>
                    <input type="text" placeholder="designation" required/>
                    <input type="number" placeholder="contact number" required />
                    <input type="text" placeholder="password" required />
                    <p>via generating credentials will be sended to employee's email </p>
                    <input type="submit" value="generate" />
                </form>
                <ToastContainer />
             </div> );
}
export default AddEmp;