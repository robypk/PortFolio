import React from "react";

interface CircularProgressBarProps {
  // props definition
  progress: number;
  skillName: string;
}

const CircularProgressBar: React.FC<CircularProgressBarProps> = ({
  progress,
  skillName,
}) => {
  const strokeWidth = 8;
  const circleWidth = 120;
  const radius = 50;
  const circumference = 2 * Math.PI * radius;

  const progressOffset = circumference - (progress / 100) * circumference;

  return (
    <div className="flex flex-col items-center justify-center m-4 group hover:scale-105 transition-transform duration-300">
      <div className="relative">
        <svg
            width={circleWidth}
            height={circleWidth}
            viewBox={`0 0 ${circleWidth} ${circleWidth}`}
            className="transform -rotate-90 drop-shadow-[0_0_10px_rgba(34,197,94,0.3)]"
        >
            {/* Background Circle */}
            <circle
            cx={circleWidth / 2}
            cy={circleWidth / 2}
            strokeWidth={strokeWidth}
            r={radius}
            className="fill-none stroke-gray-200"
            />
            {/* Progress Circle */}
            <circle
            cx={circleWidth / 2}
            cy={circleWidth / 2}
            strokeWidth={strokeWidth}
            r={radius}
            strokeLinecap="round"
            className="fill-none stroke-green-600 transition-all duration-1000 ease-out"
            style={{
                strokeDasharray: circumference,
                strokeDashoffset: progressOffset,
            }}
            />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xl font-bold text-gray-800">
                {progress}%
            </span>
        </div>
      </div>
      <h1 className="mt-3 text-lg font-semibold text-gray-700 group-hover:text-green-600 transition-colors uppercase tracking-wider">
        {skillName}
      </h1>
    </div>
  );
};

export default CircularProgressBar;
