import React from "react";
import VideoCard from "./VideoCard";

interface ProjectsProps {}

const Projects: React.FC<ProjectsProps> = ({}) => {
  return (
    <>
      <div className=" flex flex-wrap items-center justify-center text-2xl md:text-3xl  text-green-800 font-bold mb-4">
        Projects
      </div>
      <div className=" flex flex-wrap items-center justify-center">
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
        <VideoCard
          URL="PXsBw4Qhu0U"
          Name="Electric Circuit VR"
          Tools=" Unity, Blender, C#, OculusSDK. Platform: Meta Quest 2"
        ></VideoCard>
      </div>
    </>
  );
};

export default Projects;
