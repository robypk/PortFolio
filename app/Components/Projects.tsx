import React from "react";
import VideoCard from "./VideoCard";

interface ProjectsProps {}

const Projects: React.FC<ProjectsProps> = ({}) => {
  const videoURLs: string[] = [
    "SqcY0GlETPk",
    "wgsznroqF-s",
    "SqcY0GlETPk",
    "SqcY0GlETPk",
    "SqcY0GlETPk",
    "SqcY0GlETPk",
    "SqcY0GlETPk",
  ];
  return (
    <>
      <div className=" flex flex-wrap items-center justify-center text-2xl md:text-3xl  text-green-800 font-bold mb-4">
        Projects
      </div>
      <div className=" flex flex-wrap items-center justify-center">
        {videoURLs.map((VideoURL) => (
          <VideoCard URL={VideoURL} />
        ))}
        {/* <VideoCard URL="SqcY0GlETPk"></VideoCard>
        <VideoCard URL="wgsznroqF-s"></VideoCard>
        <VideoCard URL="SqcY0GlETPk"></VideoCard>
        <VideoCard URL="SqcY0GlETPk"></VideoCard>
        <VideoCard URL="SqcY0GlETPk"></VideoCard>
        <VideoCard URL="SqcY0GlETPk"></VideoCard> */}
      </div>
    </>
  );
};

export default Projects;
