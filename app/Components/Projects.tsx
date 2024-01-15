import React from "react";
import VideoCard from "./VideoCard";

interface ProjectsProps {}

const Projects: React.FC<ProjectsProps> = ({}) => {
  return (
    <>
      <div className=" flex flex-wrap items-center justify-center text-2xl md:text-3xl  text-green-800 font-bold mb-4">
        {" "}
        Projects
      </div>
      <div className=" flex flex-wrap items-center justify-center">
        <VideoCard URL="SqcY0GlETPk"></VideoCard>
        <VideoCard URL="wgsznroqF-s"></VideoCard>
        <VideoCard URL="SqcY0GlETPk"></VideoCard>
        <VideoCard URL="SqcY0GlETPk"></VideoCard>
        <VideoCard URL="SqcY0GlETPk"></VideoCard>
        <VideoCard URL="SqcY0GlETPk"></VideoCard>
      </div>
    </>
  );
};

export default Projects;