"use client";
import { useRef } from "react";

const VideoOnHover = ({ item }) => {
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
    <video
      ref={videoRef}
      src={`/${item.display_mp4}`}
      alt={`video af forside på ${item.titel}`}
      playsInline
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="w-full h-full rounded-full max-w-sm mt-5 mb-3"
    ></video>
  );
};

export default VideoOnHover;
