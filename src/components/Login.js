import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './login.css';
import { NavLink } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8001/loginform', {
                _id:Math.floor(Math.random()*1000),
                username: username,
                password: password,
                email: email
            });

            if (response.data) {
                console.log("Login Successful:", response.data);
                navigate('/');
            } else {
                console.error("Login failed");
            }
        } catch (error) {
            console.error("Error during login:", error);
        }
    };

    return (
        <>
            <section className="Login">
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                    <div>
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            value={username}
                            name="username"
                            placeholder="Enter your username"
                            required
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            value={email}
                            name="email"
                            placeholder="Enter your email"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            value={password}
                            name="password"
                            placeholder="Enter your password"
                            required
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div className="remember-forgot">
                        <label>
                            <input type="checkbox" /> Remember me
                        </label>
                        <NavLink to="/forgot-password">Forgot Password</NavLink>
                    </div>

                    <input type="submit" value="Login" />
                    <NavLink to="/register">
                        <div className="register">Or Register Here!</div>
                    </NavLink>
                </form>
            </section>

            <span>
                {username}
                {email}
                {password}
            </span>
        </>
    );
}

export default Login;
