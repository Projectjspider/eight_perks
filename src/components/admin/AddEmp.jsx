import React, { useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios"


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
            dateOfJoining: formatDate(DATEOFJOINING.current.value),         // Format the date of joining to 'yy-mm-dd'
            designation: DESIGNATION.current.value,
            contactNumber: CONTACTNUMBER.current.value,
            password: PASSWORD.current.value
        };
 

        try {
        await axios.post('http://localhost:8080/save', newEmp);


        // Here you can send the formData to the backend

        // Example of submitting the form data
        console.log('Submitted data:', { newEmp });



        // Show a success message
        toast.success('Employee added successfully!');
        setTimeout(() => window.location.reload(), 1000);
        }
        catch (error) {
            // Handle any errors that occur during the POST request
            console.error('Error adding employee:', error);
            toast.error('Failed to add employee. Please try again later.');
        }
    };





    // Function to format date from dd-mm-yy to yy-mm-dd
    const formatDate = (dateString) => {
        const [dd, mm, yy] = dateString.split('-');
        return `${yy}-${mm}-${dd}`;
    };


    return (
        <div className="AddEmp-cont">
            <h1>Add New Employee</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name"  ref={NAME} required />
                <input type="email" name="email" placeholder="Email"  ref={EMAIL} required />
                <input type="date" name="dateOfJoining" placeholder="Date of Joining"ref={DATEOFJOINING} required />
                <input type="text" name="designation" placeholder="Designation" ref={DESIGNATION} required />
                <input type="number" name="contactNumber" placeholder="Contact Number" ref={CONTACTNUMBER}  required />
                <input type="text" name="password" placeholder="Password" ref={PASSWORD} required />
                <p>Credentials will be sent to the employee's email</p>
                <input type="submit" value="Generate" />
            </form>
            <ToastContainer />
        </div>
    );
};

export default AddEmp;
