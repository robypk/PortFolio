import React from "react";
import CircularProgressBar from "./CircularProgressBar";

interface SkillProps {
  // props definition
}

const Skill: React.FC<SkillProps> = ({}) => {
  return (
    <>
      <div className=" flex flex-wrap items-center justify-center text-2xl md:text-3xl  text-green-800 font-bold mb-4">
        {" "}
        Skill
      </div>
      <div className="  flex flex-wrap items-center justify-center">
        <CircularProgressBar progress={80} skillName="Unity" />
        <CircularProgressBar progress={60} skillName=" Unreal" />
        <CircularProgressBar progress={60} skillName="GoDot" />
        <CircularProgressBar progress={60} skillName=" C#" />
        <CircularProgressBar progress={40} skillName="C++" />
        <CircularProgressBar progress={40} skillName="TypeScript" />
        <CircularProgressBar progress={50} skillName=" Python" />
        <CircularProgressBar progress={60} skillName="React" />
      </div>
    </>
  );
};

export default Skill;
