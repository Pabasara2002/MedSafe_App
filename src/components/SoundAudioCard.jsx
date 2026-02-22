import React from "react";
import "./css/SoundAudioCard.css";

const SoundAudioCard = ({ audio, title, image }) => {
  return (
    <div className="sound-card">
      <img src={image} alt={title} className="sound-image" />

      <audio
        src={audio}
        autoPlay
        muted
        loop
        controls
        className="audio-player"
      />

      <h4>{title}</h4>
    </div>
  );
};

export default SoundAudioCard;
