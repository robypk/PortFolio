"use client";
import React from "react";
import YouTube, { YouTubeProps } from "react-youtube";

interface VideoCardProps {
  URL?: string;
  Name?: string;
  Description?: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ URL, Name, Description }) => {
  const opts: YouTubeProps["opts"] = {
    height: "195",
    width: "320",
    playerVars: {
      autoplay: 0,
    },
  };
  return (
    <div className=" bg-green-100 hover:bg-green-200 p-3 m-5 relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl  transition duration-300 ">
      <div className="overflow-hidden rounded-lg">
        <YouTube videoId={URL} opts={opts}></YouTube>
      </div>
      <div className=" pl-1 pt-2 text-xl text-start text-green-700 font-bold">
        {Name}
      </div>
      <p className=" w-80 pl-1 text-justify text-xs text-green-700">
        {" "}
        {Description}
      </p>
    </div>
  );
};

export default VideoCard;
