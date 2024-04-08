import React, { useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const AddEmp = () => {

    const NAME = useRef();
    const EMAIL = useRef();
    const DATEOFJOINING = useRef();
    const DESIGNATION = useRef();
    const CONTACTNUMBER = useRef();
    const PASSWORD = useRef();


  

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newEmp = {
            name: NAME.current.value,
            email: EMAIL.current.value,
            dateOfJoining: formatDate(DATEOFJOINING.current.value),
            designation: DESIGNATION.current.value,
            contactNumber: CONTACTNUMBER.current.value,
            password: PASSWORD.current.value
        };

        // Format the date of joining to 'yy-mm-dd'
        const formattedDate = formatDate(formData.dateOfJoining);

        await axios.post('http://your-backend-api.com/addEmployee', newEmp);


        // Submit the form with formatted date
        // Here you can send the formData to the backend

        // Example of submitting the form data
        console.log('Submitted data:', { ...formData, dateOfJoining: formattedDate });

        // Clear the form fields
        setFormData({
            name: '',
            email: '',
            dateOfJoining: '',
            designation: '',
            contactNumber: '',
            password: ''
        });

        // Show a success message
        toast.success('Employee added successfully!');
    };

    // Function to format date to 'yy-mm-dd'
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const year = date.getFullYear().toString().slice(-2);
        const month = ('0' + (date.getMonth() + 1)).slice(-2);
        const day = ('0' + date.getDate()).slice(-2);
        return `${year}-${month}-${day}`;
    };

    return (
        <div className="AddEmp-cont">
            <h1>Add New Employee</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" value={formData.name} ref={NAME} required />
                <input type="email" name="email" placeholder="Email" value={formData.email} ref={EMAIL} required />
                <input type="date" name="dateOfJoining" placeholder="Date of Joining" value={formData.dateOfJoining} ref={DATEOFJOINING} required />
                <input type="text" name="designation" placeholder="Designation" ref={DESIGNATION} value={formData.designation} required />
                <input type="number" name="contactNumber" placeholder="Contact Number" ref={CONTACTNUMBER} value={formData.contactNumber} required />
                <input type="text" name="password" placeholder="Password" value={formData.password} ref={PASSWORD} required />
                <p>Credentials will be sent to the employee's email</p>
                <input type="submit" value="Generate" />
            </form>
            <ToastContainer />
        </div>
    );
};

export default AddEmp;
