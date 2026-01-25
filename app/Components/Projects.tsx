import React from "react";
import VideoCard from "./VideoCard";

interface ProjectsProps {}

const Projects: React.FC<ProjectsProps> = ({}) => {
  const projects = [
    {
      URL: "o36ewIXd0Zk",
      Name: "Smash Your Fitness",
      Description: "Indoor cycling simulator that transports cyclists to immersive worlds with multiple gaming modes, workouts, and training programs.",
      Tools: "Unity, Blender, C#, Angular, MongoDB, AWS",
      Platform: "Windows, Mac",
      rarity: "legendary"
    },
    {
      URL: "PXsBw4Qhu0U",
      Name: "Electric Circuit VR",
      Description: "Interactive VR guide to learning circuits. Connect bulbs and motors with virtual cables in a fun and safe space.",
      Tools: "Unity, Blender, C#, OculusSDK",
      Platform: "Meta Quest 2",
      rarity: "epic"
    },
    {
      URL: "ZFxjXFmVpsU",
      Name: "ConstructionSim VR",
      Description: "Hands-on construction training in virtual reality. Step into a lifelike construction site and interact with tools.",
      Tools: "Unity, Blender, C#, UnityXR SDK",
      Platform: "Meta Quest 2",
      rarity: "epic"
    },
    {
      URL: "DBXuZ-ziI9w",
      Name: "G-Runner",
      Description: "Endless runner game for G-Gaiter robot, made to train paralyzed patients using their efforts as input.",
      Tools: "Godot, Blender, Mixamo, GDScript",
      Platform: "Linux OS",
      rarity: "rare"
    },
    {
      URL: "jrO4ZsCAAwo",
      Name: "Clutch",
      Description: "Multiplayer, multiplatform offline game inspired by Rocket League. Currently under development.",
      Tools: "Godot, Blender, Quixel Mixer",
      Platform: "Windows, Android",
      rarity: "rare"
    },
    {
      URL: "9sibaEoYP7g",
      Name: "Museum",
      Description: "A personal gallery showcasing 3D models and animations. A living portfolio of creative works.",
      Tools: "Unity, Blender, Z-brush, C#",
      Platform: "Android, Windows",
      rarity: "rare"
    },
    {
      URL: "LIYYBHRn1jM",
      Name: "Gold City",
      Description: "Open world exploration game with detailed environments and immersive gameplay.",
      Tools: "Unreal Engine, C++, Blender",
      Platform: "Android, Windows",
      rarity: "rare"
    }
  ];

  return (
    <section className="py-20 px-4" style={{ background: 'linear-gradient(180deg, #1a1a1a 0%, #0a0a0a 100%)' }}>
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="gow-header text-4xl md:text-6xl mb-4">
            Armory
          </h2>
          <p className="text-sm uppercase tracking-widest" style={{ color: '#8b7355' }}>
            Featured Works & Projects
          </p>
          <div className="gow-divider w-48 mx-auto mt-4" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <VideoCard
              key={index}
              URL={project.URL}
              Name={project.Name}
              Description={project.Description}
              Tools={`${project.Tools}\nPlatform: ${project.Platform}`}
              rarity={project.rarity}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
