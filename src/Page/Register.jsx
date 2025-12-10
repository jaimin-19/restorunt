import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./Auth.css";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { register } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Mock registration logic
        if (name && email && password) {
            register({ name, email });
            navigate("/"); // Redirect to Home/Restaurant after registration
        }
    };

    return (
        <div className="auth-page">
            <div className="auth-container">
                <h2 className="auth-title">Create Account</h2>
                <p className="auth-subtitle">Join us for exclusive offers</p>

                <form className="auth-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Full Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit" className="auth-btn">
                        Register
                    </button>
                </form>

                <div className="auth-divider">OR</div>

                <div className="auth-footer">
                    Already have an account?
                    <Link to="/login" className="auth-link">
                        Login Here
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Register;
