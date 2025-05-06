"use client";
import { useRef } from "react";
const SingleViewCard = ({ item }) => {
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
    <div>
      <div className="flex justify-end">
        <video
          ref={videoRef}
          src={`/${item.display_mp4}`}
          alt={`video af forside på ${item.titel}`}
          playsInline
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="w-full h-full max-w-200"
        ></video>
      </div>
      <div className="relative -top-20">
        <h2>{item.titel}</h2>
        <div className="flex items-center">
          <h1>{item.name}</h1>
          <h4>{item.periode}</h4>
        </div>
        <article>
          <p>{item.beskrivelse_lang}</p>
        </article>
      </div>
      <article>
        <div className="flex items-end flex-col">
          <h2>Proces</h2>
          <p>{item.proces}</p>
        </div>
        <div>
          <h2>Udførelse</h2>
          <p>{item.udfoerelse}</p>
        </div>
      </article>
    </div>
  );
};

export default SingleViewCard;
