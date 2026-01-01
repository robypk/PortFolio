import React from "react";
import { Scroll } from "@react-three/drei";
import Skills from "./Skill";
import Projects from "./Projects";
import WorkExperience from "./WorkExperience";
import ContactInfo from "./ContactInfo";
import Education from "./Education";
import Bio from "./Bio";

const Overlay = () => {
  return (
    <Scroll html style={{ width: "100%", height: "100%" }}>
      {/* SECTION 1: HERO / INTRO */}
      <section className="h-screen w-full flex flex-col justify-center items-start p-10 md:p-24 selection:bg-green-500 selection:text-black">
        <h1 className="text-[10rem] md:text-[12rem] font-black text-white/5 leading-none absolute -z-10 select-none">
          PORTFOLIO
        </h1>
        <h1 className="text-7xl md:text-9xl font-black text-white leading-none tracking-tighter">
          HELLO <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-emerald-600">
            I&apos;M ROBY
          </span>
        </h1>
        <div className="mt-8 p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-xl max-w-lg hover:bg-white/10 transition-colors">
             <p className="text-xl md:text-2xl text-gray-200 font-light">
                Game Developer &<br/>Immersive Specialist
            </p>
             <p className="text-sm font-bold tracking-widest uppercase text-green-400 mt-4 flex items-center gap-2">
                Scroll to Explore <span className="animate-bounce text-lg">↓</span>
             </p>
        </div>
      </section>

      {/* SECTION 2: ABOUT / BIO */}
      <section className="min-h-screen w-full flex flex-col justify-center items-end p-10 md:p-24 bg-transparent pointer-events-none">
         <div className="pointer-events-auto bg-white/5 backdrop-blur-xl p-10 rounded-[3rem] shadow-2xl max-w-xl border border-white/10 mb-12 hover:bg-white/10 transition-all duration-500">
            <h2 className="text-6xl font-black text-white mb-6 -ml-6 tracking-tighter">About</h2>
            <p className="text-gray-300 text-xl leading-relaxed font-medium">
                Experienced Game Developer with <span className="text-green-400 font-bold">4+ years</span> of industry expertise. 
                I specialize in crafting immersive storytelling experiences and 
                mastering new tools swiftly.
            </p>
         </div>
         <div className="pointer-events-auto">
             <Education />
         </div>
      </section>

      {/* SECTION 3: BIO (OBJECTIVE / STRENGTHS / HOBBIES) */}
      <section className="min-h-screen w-full flex flex-col justify-center items-center p-4">
          <Bio />
      </section>

      {/* SECTION 4: WORK EXPERIENCE */}
      <section className="min-h-screen w-full flex flex-col justify-center items-center p-4">
        <WorkExperience />
      </section>

      {/* SECTION 5: SKILLS */}
      <section className="min-h-screen w-full flex flex-col justify-center items-center p-4 bg-transparent">
        <div className="bg-white/5 backdrop-blur-2xl p-8 rounded-[3rem] shadow-2xl w-full max-w-7xl border border-white/10">
           <Skills />
        </div>
      </section>

      {/* SECTION 6: PROJECTS */}
      <section className="min-h-screen w-full flex flex-col justify-center items-center p-4">
         <div className="bg-white/5 backdrop-blur-2xl p-8 rounded-[3rem] shadow-2xl w-full max-w-7xl border border-white/10">
            <Projects />
         </div>
      </section>

       {/* SECTION 7: CONTACT */}
       <section className="h-screen w-full flex flex-col justify-center items-center p-4">
          <ContactInfo />
          <div className="h-24"></div>
       </section>
    </Scroll>
  );
};

export default Overlay;
