import React, { useState } from "react";
import "./forgotpass.css";
import { NavLink } from 'react-router-dom';
import axios from 'axios';

function ForgotPass() {
    const [email, setEmail] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post("http://localhost:8002/forgot-password", { email });
            alert(response.data.message);
        } catch (error) {
            alert("Error sending email. Please try again.");
        }
    };

    return (
        <div className="wrapper">
            <div className="form-container">
                <div className="logo-container">
                    Forgot Password
                </div>

                <form className="form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            placeholder="Enter your email" 
                            required 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <button className="form-submit-btn" type="submit">Send Email</button>
                </form>

                <p className="signup-link">
                    Don't have an account?
                    <NavLink to="/register" className="signup-link link"> Sign up now</NavLink>
                </p>
            </div>
        </div>
    );
}

export default ForgotPass;