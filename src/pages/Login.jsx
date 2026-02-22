import React, { useState } from "react";
import "../pages/css/Login.css";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // Handle login submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // OTP sent, redirect to verify-otp page
        navigate("/verify-otp", { state: { email: formData.email } });
      } else {
        alert(`⚠️ ${data.error || "Invalid login credentials"}`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("🚨 Server error. Please try again later.");
    }
  };

  return (
    <div className="login-container">
      <h1 className="header">Welcome Back</h1>
      <p className="tagline">Login to continue exploring MedSafe</p>

      <form onSubmit={handleSubmit}>
        {/* Email */}
        <div className="input-group">
          <label htmlFor="email">Email address</label>
          <div className="input-field-container">
            <i className="fa-regular fa-envelope"></i>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Password */}
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <div className="input-field-container">
            <i className="fa-solid fa-key"></i>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <button type="submit" className="btn primary-btn">
          Login
        </button>
      </form>

      <p className="signup-text">
        Don’t have an account? <Link to="/signup">Create one</Link>
      </p>
    </div>
  );
};

export default Login;
