import React from "react";
import {useNavigate} from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServiceCard from "../components/ServiceCard";
import SectionContainer from "../components/SectionContainer";
import CountUp from "../components/CountUp";
import "./css/Home.css";

import heroImage from "../assets/hero_Image.png";
import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png";
import service3 from "../assets/service3.jpg";

export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <SectionContainer>
        <h1 className="title">
          Medical Virtual Assistant for Healthcare
        </h1>

        <img
          src={heroImage}
          alt="Hero"
          className="hero-img"
        />

        <h3>Your All-in-One Digital Medical Assistant</h3>
        <p>
          Bridging the gap between advanced AI technology and expert medical care.
          Track your health, consult specialists, and find wellness solutions—all in one place.
        </p>

        {/* ✅ Updated Button Group (No Gap) */}
        <div className="btn-group connected-buttons">
          <button className="btn-primary" onClick={() => navigate("/login")}>Get Started</button>
          <button className="btn-outline" onClick={() => navigate("/medications")}>Consult a Specialist</button>
        </div>
      </SectionContainer>

      {/* CORE SERVICES */}
      <SectionContainer>
        <h2>Core Services</h2>

        <div className="card-grid">
          <ServiceCard
            title={<h3 onClick={() => navigate("/assistant")}>AI Virtual Assistant</h3>}
            description="Instant answers to your health concerns. Our intelligent chatbot provides preliminary medical guidance and symptom checking analysis 24/7."
            image={service1}
          />
          <ServiceCard
            title={<h3 onClick={() => navigate("/medications")}>Medication</h3>}
            description="Healing beyond prescriptions. Access curated exercise videos and therapeutic music playlists designed to aid your physical and mental recovery."
            image={service2}
          />
          <ServiceCard
            title={<h3 onClick={() => navigate("/health-tracker")}>Health Vitals Tracker</h3>}
            description="Stay on top of your numbers. Effortlessly calculate your BMI, blood pressure, and other vital signs with our intuitive tracking tools."
            image={service3}
          />
        </div>
      </SectionContainer>

      {/* WHY CHOOSE */}
      <SectionContainer>
        <h2 className="center">Why Choose Our Platform?</h2>

        <div className="why-grid">
          <div className="why-card">
            <h3>Secure & Private</h3>
            <p>
              Your health data is encrypted and handled with the highest privacy standards.
            </p>
          </div>

          <div className="why-card">
            <h3>Instant Insights</h3>
            <p>
              Get instant feedback on your vitals with clear, easy-to-understand health reports.
            </p>
          </div>

          <div className="why-card">
            <h3>Doctor Integration</h3>
            <p>
              Seamlessly transition from AI assistance to a live consultation with certified doctors.
            </p>
          </div>

          <div className="why-card">
            <h3>Personalized Analysis</h3>
            <p>
              Our platform analyzes your unique vitals and activity patterns for better advice.
            </p>
          </div>
        </div>
      </SectionContainer>

      {/* ✅ TRUSTED STATS WITH COUNTDOWN */}
      <SectionContainer>
        <h2 className="center purple">
          Trusted by Doctors and Patients Nationwide
        </h2>

        <div className="stats-grid">
          <div className="stat-box">
            <h1>
              <CountUp end={1800} />+
            </h1>
            <p>Actual Virtual Assistants</p>
          </div>

          <div className="stat-box">
            <h1>
              <CountUp end={100} />+
            </h1>
            <p>Customer Referrals</p>
          </div>

          <div className="stat-box">
            <h1>
              <CountUp end={70} />+
            </h1>
            <p>Clients Supported</p>
          </div>
        </div>
      </SectionContainer>

      <Footer />
    </>
  );
}