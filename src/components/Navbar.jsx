import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./css/Navbar.css";
import logo from "../assets/logo.png";

const Navbar = () => {
  const navigate = useNavigate();
  const token =
    (typeof window !== "undefined" && (localStorage.getItem("access_token") || localStorage.getItem("token"))) || null;
  let user = null;
  try {
    user = typeof window !== "undefined" ? JSON.parse(localStorage.getItem("user") || "null") : null;
  } catch {
    user = null;
  }
  const isLoggedIn = Boolean(token);
  const firstName = user?.full_name ? user.full_name.split(" ")[0] : (user?.email ? user.email.split("@")[0] : "");

  const handleLogout = () => {
    try {
      localStorage.removeItem("access_token");
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    } catch {}
    alert("Logged out successfully");
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="MedSafe Logo" className="logo-img" />
        <span className="logo-text">MedSafe</span>
      </div>

      <div className="nav-links">
        <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink>
        <NavLink to="/contact">Contact Us</NavLink>
        <NavLink to="/assistant">AI Assistant</NavLink>
        <NavLink to="/medications">Medications</NavLink>
      </div>

      <div>
        {isLoggedIn ? (
          <>
          <div className="avatar-circle" title={firstName} aria-label={`Logged in as ${firstName}`}>
                {firstName}
              </div>
          <button className="primary-btn" onClick={handleLogout}>Log Out</button>
          </>
        ) : (
          <button className="primary-tn">Get Started</button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
