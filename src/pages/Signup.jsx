import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../pages/css/Signup.css";

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const res = await fetch("http://127.0.0.1:5000/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        full_name: formData.full_name,
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await res.json().catch(() => null);
      if (res.ok) {
        alert("Signup successful!");
        navigate("/login");
      } else {
        const msg = (data && (data.error || data.message)) || `Signup failed (status ${res.status})`;
        console.error("Signup failed response:", res.status, data);
        alert(msg);
      }
    } catch (err) {
      console.error("Network or fetch error:", err);
      alert(`Server/fetch error: ${err?.message || err}`);
    }
  };

  return (
    <div className="signup-container">
      <div className="form-box">
        <h2>Create your account</h2>
        <p className="tagline">
          Join MedSafe today and take control of your health.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Full Name</label>
            <input
              type="text"
              name="full_name"
              placeholder="Enter your full name"
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Email address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Create a password"
              onChange={handleChange}
              required
            />
            <small>Must be at least 6 characters long.</small>
          </div>

          <div className="input-group">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn primary-btn">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
