import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./Auth.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Mock login logic
        if (email && password) {
            login({ email, name: email.split("@")[0] });
            navigate("/"); // Redirect to Home/Restaurant after login
        }
    };

    return (
        <div className="auth-page">
            <div className="auth-container">
                <h2 className="auth-title">Welcome Back</h2>
                <p className="auth-subtitle">Login to access your account</p>

                <form className="auth-form" onSubmit={handleSubmit}>
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
                        Login
                    </button>
                </form>

                <div className="auth-divider">OR</div>

                <div className="auth-footer">
                    Don't have an account?
                    <Link to="/register" className="auth-link">
                        Register Now
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
