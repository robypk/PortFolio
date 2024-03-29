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
  const strokeWidth = 10;
  const circleWidth = 150;
  const radius = 50;
  const circumference = 2 * Math.PI * radius;

  const progressOffset = circumference - (progress / 100) * circumference;

  return (
    <div>
      <svg
        width={circleWidth}
        height={circleWidth}
        viewBox={`0 0 ${circleWidth} ${circleWidth}`}
      >
        <circle
          cx={circleWidth / 2}
          cy={circleWidth / 2}
          strokeWidth={strokeWidth}
          r={radius}
          className=" fill-none stroke-green-300"
        />
        <circle
          cx={circleWidth / 2}
          cy={circleWidth / 2}
          strokeWidth={strokeWidth + 2}
          r={radius}
          strokeLinecap="round"
          strokeLinejoin="round"
          className=" fill-none stroke-lime-700"
          style={{
            strokeDasharray: circumference,
            strokeDashoffset: progressOffset,
          }}
          transform={`rotate(-90 ${circleWidth / 2} ${circleWidth / 2})`}
        />
        <text
          className=" text-start text-lg font-semibold"
          x="50%"
          y="50%"
          dy=".3em"
          dx="-.8em"
        >
          {progress}%
        </text>
      </svg>
      <h1 className="flex items-center justify-center">{skillName}</h1>
    </div>
  );
};

export default CircularProgressBar;
