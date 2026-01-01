import React from "react";
import VideoCard from "./VideoCard";

interface ProjectsProps {}

const Projects: React.FC<ProjectsProps> = ({}) => {
  return (
<>
      <div className="flex flex-col items-center justify-center mb-16">
        <h2 className="text-6xl md:text-8xl font-black text-white/5 uppercase tracking-tighter absolute select-none">
          PROJECTS
        </h2>
        <h2 className="text-4xl md:text-5xl font-black text-white relative z-10">
          Featured Works
        </h2>
      </div>
      <div className="flex flex-wrap items-stretch justify-center gap-6 px-4">
      <VideoCard
          URL="_Cd5riXPRQE"
          Name="Smash Your Fitness"
          Description="Smash Your Fitness makes indoor cycling irresistibly fun by transporting cyclists to a near-limitless number of richly immersive worlds, multiple gaming modes workouts, tours, races, and training programs  and a range of interactivity options that will appeal to everyone from casual gamers to seasoned endurance athletes."
          Tools="Unity, Blender, C#, Angular, MongoDB, AWS
          Platform: Windows, Mac"
        ></VideoCard>
        <VideoCard
          URL="PXsBw4Qhu0U"
          Name="Electric Circuit VR"
          Description="Explore the Electric Circuit VR app, your interactive guide to learning circuits. 
          Connect bulbs and motors etc..  with virtual cables in a fun and safe space. Perfect for students and hobbyists,
           it makes understanding electricity easy and enjoyable. 
           Step into the world of circuits and turn learning into an engaging virtual adventure"
          Tools=" Unity, Blender, C#, OculusSDK. Platform: Meta Quest 2"
        ></VideoCard>
        <VideoCard
          URL="ZFxjXFmVpsU"
          Name="ConstructionSim VR"
          Description="ConstructSim VR is your gateway to hands-on construction training in virtual reality. 
          Step into a lifelike construction site, interact with tools, and learn procedures in a safe environment. 
          Ideal for professionals and enthusiasts, this app makes construction education engaging and effective, 
          ensuring your skills are ready for the real world."
          Tools=" Unity, Blender, C#, UnityXR SDK. Platform: Meta Quest 2"
        ></VideoCard>
        <VideoCard
          URL="DBXuZ-ziI9w"
          Name="G-Runner"
          Description="An endless runner game developed for G gaiter robot, made to train paralyzed patients. G
          runner uses patient’s efforts as input. The game motivates and encourages them to put more efforts to
          walk. G runner is inspired by one of my favorite games Subway Surfers."
          Tools="Godot, blender, Mixamo GDScript.
          Platform: Linux OS."
        ></VideoCard>
        <VideoCard
          URL="jrO4ZsCAAwo"
          Name="Clutch"
          Description="highly inspired by the world famous PC online multiplayer game, Rocket League. Clutch is a
            multiplayer, multiplatform offline Game. Currently, clutch is under development. The game needs a little
            more optimization in vehicle simulation and real time physics. The modelling, texturing gameplay
            programing, UI/UX design are done by myself."
          Tools="Godot, blender, Quixel Mixer.
            Platform: Windows, Android."
        ></VideoCard>
        <VideoCard
          URL="9sibaEoYP7g"
          Name="Museum"
          Description=" Museum which is not yet completed. My idea is to make one, that has my own works. The 3D
          models and animations here are created by myself. I keep on adding my works to this gallery to
          make it my portfolio."
          Tools="Unity, Blender, Z-brush, C#.
          Platform: Android, Windows"
        ></VideoCard>
        <VideoCard
          URL="LIYYBHRn1jM"
          Name="Gold City"
          Description=""
          Tools="UnrealEngine, C++, Blender
          Platform: Android ,Windows"
        ></VideoCard>
      </div>
    </>
  );
};

export default Projects;
