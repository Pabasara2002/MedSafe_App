import React from "react";
import "./css/ExerciseVedioCard.css";

const ExerciseVideoCard = ({ video, title }) => {
  return (
    <div className="exercise-card">
      <video
        src={video}
        autoPlay
        muted
        loop
        playsInline
        className="exercise-video"
      />
      <h4>{title}</h4>
    </div>
  );
};

export default ExerciseVideoCard;

