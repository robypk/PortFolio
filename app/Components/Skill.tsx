import React from "react";
import CircularProgressBar from "./CircularProgressBar";

interface SkillProps {
  // props definition
}

const Skill: React.FC<SkillProps> = ({}) => {
  return (
    <div className="container mx-auto py-16 px-4">
      <div className="flex flex-col items-center justify-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-800 uppercase tracking-widest drop-shadow-sm mb-8">
          Technical Arsenal
        </h2>
        
        {/* RELEVANT SKILLS */}
        <h3 className="text-2xl font-bold text-gray-300 mb-6 uppercase tracking-wide border-b-2 border-green-400 pb-2">Relevant Skills</h3>
        <div className="flex flex-wrap items-center justify-center gap-8 mb-12">
            <CircularProgressBar progress={85} skillName="Unity" />
            <CircularProgressBar progress={60} skillName="Unreal" />
            <CircularProgressBar progress={70} skillName="Godot" />
            <CircularProgressBar progress={50} skillName="Blender" />
            <CircularProgressBar progress={70} skillName="Git" />
        </div>

        {/* OTHER SKILLS */}
        <h3 className="text-2xl font-bold text-gray-300 mb-6 uppercase tracking-wide border-b-2 border-green-400 pb-2">Other Skills</h3>
        <div className="flex flex-wrap items-center justify-center gap-8">
            <CircularProgressBar progress={70} skillName="Next JS" />
            <CircularProgressBar progress={60} skillName="MongoDB" />
            <CircularProgressBar progress={55} skillName="AWS" />
            <CircularProgressBar progress={40} skillName="Three JS" />
            <CircularProgressBar progress={70} skillName="TypeScript" />
        </div>
      </div>
    </div>
  );
};

export default Skill;
