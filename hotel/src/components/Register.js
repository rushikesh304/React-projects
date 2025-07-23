import React, { useState } from 'react';
import axios from 'axios';
import './register.css';

function Register() {
    // State to manage form data
    const [formData, setFormData] = useState({
        username: '',
        fullName: '',
        email: '',
        phone: '',
        dob: '',
        gender: '',
        address: ''
    });

    // Handle input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
             await axios.post('http://localhost:8001/registerform', formData);
            alert("Registration successful!");
            // Refresh the page after successful registration
            window.location.reload();
        } catch (error) {
            console.error('Error:', error);
            alert("Registration failed. Please try again.");
        }
    };

    return (

        <>
            <section className="registration">
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    {/* <div>
                        <label htmlFor="username">User Name:</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Enter your username"
                            required
                            onChange={handleChange}
                        />
                    </div> */}
                    <div>
                        <label htmlFor="fullName">Full Name:</label>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            placeholder="Enter your full name"
                            required
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            required
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="phone">Phone:</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            placeholder="Enter your phone number"
                            required
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="dob">Date of Birth:</label>
                        <input
                            type="date"
                            id="dob"
                            name="dob"
                            required
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="gender">Gender:</label>
                        <select id="gender" name="gender" required onChange={handleChange}>
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="address">Address:</label>
                        <textarea
                            id="address"
                            name="address"
                            placeholder="Enter your address"
                            required
                            onChange={handleChange}
                        ></textarea>
                    </div>
                    <button type="submit">Register</button>
                </form>
            </section>
        </>
    );
}

export default Register;
