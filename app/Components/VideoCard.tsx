"use client";
import React from "react";
import YouTube, { YouTubeProps } from "react-youtube";

interface VideoCardProps {
  URL?: string;
  Name?: string;
  Description?: string;
  Tools?: string;
}

const VideoCard: React.FC<VideoCardProps> = ({
  URL,
  Name,
  Description,
  Tools,
}) => {
  const opts: YouTubeProps["opts"] = {
    height: "200",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-green-500 hover:shadow-lg hover:shadow-green-500/10 p-4 m-5 relative group overflow-hidden rounded-xl transition-all duration-300 w-80 md:w-96 flex flex-col h-[500px]">
      <div className="overflow-hidden rounded-lg shadow-sm mb-4">
        <YouTube videoId={URL} opts={opts} className="w-full" />
      </div>
      <div className="flex-grow flex flex-col">
        <div className="text-xl text-start text-green-400 font-bold mb-2 group-hover:text-green-300 transition-colors">
            {Name}
        </div>
        <p className="text-justify text-sm text-gray-300 mb-4 flex-grow overflow-y-auto scrollbar-hide">
            {Description}
        </p>
        <div className="pt-2 border-t border-white/10">
            <span className="font-bold text-green-400 text-xs uppercase tracking-wider block mb-1">Stack:</span>
            <span className="text-xs text-gray-400 font-mono">{Tools}</span>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
