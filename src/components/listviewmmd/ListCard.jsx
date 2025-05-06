"use client";
import React, { useRef } from "react";
import Link from "next/link";

const ListCard = ({ item }) => {
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
    <div className="hover:scale-105 transition-all duration-300">
      <Link href={`/multimediedesign/${item.id}`}>
        <video
          ref={videoRef}
          src={`/${item.display_mp4}`}
          alt={`video af forside på ${item.titel}`}
          playsInline
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="w-full h-full max-w-sm mt-5 mb-3"
        ></video>
        <div className="flex items-end gap-2">
          <h3 className="pink-secondary">{item.name}</h3>
          <h4 className="italic">{item.type}</h4>
        </div>
        <p className="max-w-100">{item.beskrivelse_ord}</p>
      </Link>
    </div>
  );
};

export default ListCard;
