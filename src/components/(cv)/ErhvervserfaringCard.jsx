"use client";
import React, { useRef } from "react";

const ErhvervserfaringCard = ({ overview }) => {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    videoRef.current?.play();
  };

  const handleMouseLeave = () => {
    const video = videoRef.current;
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  };

  return (
    <div className="flex flex-col items-center px-4">
      <div className="flex items-end gap-1">
        <h3 className="pink-secondary">{overview.titel}</h3>
        <h4 className="pink-secondary italic">{overview.periode}</h4>
      </div>
      <h4>{overview.arbejdsgiver}</h4>
      <video
        ref={videoRef}
        src={`/${overview.display_mp4}`}
        alt={`video af forside på ${overview.titel}`}
        playsInline
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="w-full h-full rounded-full max-w-sm mt-5 mb-3"
      ></video>
      <p>{overview.beskrivelse_kort}</p>
    </div>
  );
};

export default ErhvervserfaringCard;
