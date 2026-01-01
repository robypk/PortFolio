import React from "react";

const WorkExperience = () => {
  const experiences = [
    {
      role: "Lead Developer",
      company: "Amrita Vishwa Vidyapeetham",
      period: "Dec 2024 - Present",
      location: "Kollam, Kerala",
      description: (
        <ul className="list-disc list-inside space-y-2 mt-2">
            <li>Currently leading a team of seven developers in the PSSCIVE projects, funded by the Ministry of Education, India.</li>
            <li>Our team is focused on designing and developing Virtual Labs for Vocational Higher Secondary students, enabling immersive and interactive learning experiences.</li>
            <li>My role involves overseeing the entire development lifecycle, ensuring high-quality implementation, optimizing performance, and driving innovation in Unity-based simulations.</li>
        </ul>
      )
    },
    {
      role: "Senior Game Developer",
      company: "Improvement Interactive",
      period: "March 2024 – Dec 2024",
      location: "Tucson, AZ",
      description: (
        <div className="space-y-4">
            <div>
                <strong>Smash Your Fitness– Windows, Mac</strong>
                <p className="mt-1">&quot;Smash Your Fitness&quot; is an indoor cycling simulator game that connects to a physical exercise bike, allowing players to improve their fitness while engaging in a realistic virtual cycling experience on Windows and Mac.</p>
                <ul className="list-disc list-inside ml-4 mt-2 space-y-1 text-gray-500">
                    <li>Improved visuals and performance by optimizing 3D environments, including terrain and animations.</li>
                    <li>Enhanced asset management and reduced game load times with Unity Addressable across scenes.</li>
                    <li>Developed custom features, like looping terrains and dynamic road generation, for a more immersive experience.</li>
                </ul>
            </div>
        </div>
      )
    },
    {
      role: "Unity Developer",
      company: "Olive Group",
      period: "April 2022 – Feb 2024",
      location: "Dublin, Ireland",
      description: (
         <ul className="list-disc list-inside space-y-3 mt-2">
            <li>
                <strong>Ocado Group Induction – WebXR</strong><br/>
                Designed and developed gameplay mechanics for &apos;Ocado Group Induction,&apos; a gamified onboarding platform to enhance the new employee induction experience
            </li>
            <li>
                <strong>Microsoft DreamSpace – WebXR</strong><br/>
                Developed interactive gameplay features for Microsoft DreamSpace, an educational platform aimed at providing students with an introductory experience of DreamSpace.
            </li>
         </ul>
      )
    },
    {
      role: "Game Developer (Robotics R&D)",
      company: "Genrobotics Innovations",
      period: "Jan 2021 - April 2022",
      location: "Kerala, India",
      description: (
         <div className="space-y-2">
             <p>Developed an endless runner 3D game called G-runner for the medical mobility robot, G-Gaiter.</p>
             <ul className="list-disc list-inside ml-4 space-y-1 text-gray-500 text-xs">
                <li>Level design and gameplay programming were done in Godot (Game Engine).</li>
                <li>Modelling of game-ready 3D assets and baking PBR texture atlas done in blender for better game optimization.</li>
                <li>Created both simulated and armature based animations.</li>
                <li>UV Unwrapping of game-ready models.</li>
                <li>UI/UX design and programming done in Godot.</li>
                <li>Sensor integration using python (pyserial, socket).</li>
                <li>Optimization and Drawcall reduction for better performance and reasonable FPS.</li>
             </ul>
         </div>
      )
    },
  ];

  return (
    <div className="w-full max-w-6xl">
      <h2 className="text-6xl font-black text-white mb-12 tracking-tighter text-center">
        EXPERIENCE
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="group relative p-8 bg-white/5 backdrop-blur-xl rounded-[2.5rem] border border-white/10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:bg-white/10"
          >
            <div className="absolute top-8 right-8 text-6xl opacity-10 font-black text-white z-0 select-none">
                0{index + 1}
            </div>
            
            <div className="relative z-10">
                <div className="inline-block px-4 py-2 bg-white/10 rounded-full text-xs font-bold text-gray-300 mb-4 shadow-sm">
                    {exp.period}
                </div>
                <h3 className="text-3xl font-black text-white leading-none mb-2">{exp.role}</h3>
                <p className="text-green-400 font-bold text-sm uppercase tracking-wider mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>
                  {exp.company}, {exp.location}
                </p>
                <div className="text-gray-300 text-sm leading-relaxed font-medium">
                  {exp.description}
                </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-16 pt-12 border-t border-white/10">
         <h3 className="text-3xl font-black text-white mb-8 text-center uppercase tracking-tight">Notable Projects</h3>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                <h4 className="font-bold text-lg text-emerald-400">Electric Circuit Simulator VR</h4>
                <p className="text-xs text-gray-400 mt-3 leading-relaxed">Contributed as a programmer to this immersive VR education tool.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                <h4 className="font-bold text-lg text-emerald-400">Building Construction VR</h4>
                <p className="text-xs text-gray-400 mt-3 leading-relaxed">Programmer for a VR construction safety and training simulator.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                <h4 className="font-bold text-lg text-emerald-400">Rugby Tactics Builder</h4>
                <p className="text-xs text-gray-400 mt-3 leading-relaxed">Gameplay programmer for a WebXR tactical training solution.</p>
            </div>
         </div>
      </div>
    </div>
  );
};

export default WorkExperience;
