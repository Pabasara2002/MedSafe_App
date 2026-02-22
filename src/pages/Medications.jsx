import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ExerciseVedioCard from "../components/ExerciseVedioCard";
import SoundAudioCard from "../components/SoundAudioCard";
import "./css/Medications.css";

import yoga from "../assets/videos/yoga.mp4";
import running from "../assets/videos/running.mp4";
import stretching from "../assets/videos/stretching.mp4";

import track1 from "../assets/audio/track_01.mp3";
import track2 from "../assets/audio/track_02.mp3";
import track3 from "../assets/audio/track_03.mp3";

import track1Img from "../assets/track1.jpeg";
import track2Img from "../assets/track2.jpg";
import track3Img from "../assets/track3.jpeg";

const Medications = () => {
  return (
    <>
      <Navbar />

      <div className="medications-container">
        <h2>Contact Your Doctor Here</h2>

        <div className="doctor-form">
          <input placeholder="Doctor Name" />
          <select className="doctor-select">
            <option value="">Select Specialization</option>
            <option>Cardiologist</option>
            <option>Dermatologist</option>
            <option>Neurologist</option>
            <option>Pediatrician</option>
            <option>Orthopedic</option>
            <option>Psychiatrist</option>
          </select>
          <input placeholder="Hospital" />
          <input type="date" />
          <button>Search</button>
        </div>

<div className="exercise-section"></div>
      <h2>Exercises For You</h2>
        <div className="card-row">
        <ExerciseVedioCard
        video={yoga}
        title="Yoga Exercises"
        />

        <ExerciseVedioCard
        video={running}
        title="Running Exercises"
        />

        <ExerciseVedioCard
        video={stretching}
        title="Stretching Exercises"
        />
        </div>
</div>

<div className="soundscapes-section">
        <h2>Soundscapes</h2>
        <div className="card-row">
        <SoundAudioCard
        image={track1Img}
        audio={track1}
        title="Track 1"
        />

        <SoundAudioCard
        image={track2Img}
        audio={track2}
        title="Track 2"
        />

        <SoundAudioCard
        image={track3Img}
        audio={track3}
        title="Track 3"
        />
        </div>
</div>


        <div className="vitals-box">
          <h2>Want to check your heath vitals?</h2>
          <button onClick={() => window.location.href = "/health-tracker"}>Health Vital tracker</button>
        </div>

      <Footer />
    </>
  );
};

export default Medications;
