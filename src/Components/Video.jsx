import React from "react";

const Video = ({ src, poster }) => {
  return (
    <div className="flex justify-center items-center w-full my-6 px-4">
      <video 
        className="w-full md:w-[90%] lg:w-[80%] xl:w-[70%] max-w-6xl rounded-lg shadow-md"
        poster={poster} 
        autoPlay 
        loop 
        muted
        playsInline
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
};

export default Video;
