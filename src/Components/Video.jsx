import React from "react";

const Video = ({ src, poster }) => {
  return (
    <div className="flex justify-center items-center w-full my-6">
      <video 
        className="w-full max-w-3xl rounded-lg shadow-md"
        poster={poster} 
        controls 
        autoPlay 
        loop 
        muted
        controlList="nodownload nofullscreen noremoteplayback"
        playsInline
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
};

export default Video;
