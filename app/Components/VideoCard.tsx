"use client";
import React from "react";
import YouTube, { YouTubeProps } from "react-youtube";

interface VideoCardProps {
  URL?: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ URL }) => {
  const opts: YouTubeProps["opts"] = {
    height: "195",
    width: "320",
    playerVars: {
      autoplay: 0,
    },
  };
  return (
    <div className="p-10   rounded-lg">
      <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition duration-300">
        <YouTube videoId={URL} opts={opts}></YouTube>
      </div>
    </div>
  );
};

export default VideoCard;
