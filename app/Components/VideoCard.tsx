import React from "react";

interface VideoCardProps {
  URL?: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ URL }) => {
  return (
    <div className=" w-96  p-10  rounded-lg">
      <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition duration-300">
        {/* Video Thumbnail */}
        <video src={URL} controls></video>

        {/* Tile overlay on hover */}
        {/* <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition duration-300">
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-white text-lg font-semibold">Play Video</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default VideoCard;
