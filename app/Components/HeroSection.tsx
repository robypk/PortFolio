"use client";
import React from "react";

interface HeroSectionProps {
  // props definition
}

const HeroSection: React.FC<HeroSectionProps> = ({}) => {
  const handleDownload = () => {
    const pdfUrl = "Roby_Resume.pdf"; // Adjust the path accordingly
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Roby_Resume.pdf";
    link.click();
  };
  return (
    <section className="relative  text-white">
      <div className=" flex items-center justify-center p-6 md:p-12">
        <div className=" w-52  h-52 rounded-full overflow-hidden border-4 border-green-500 shadow-black shadow-2xl md:w-72 md:h-72">
          <img
            src="Roby_Pic.jpg" // Replace with the path to your photo
            alt="Your Photo"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className=" text-center p-5">
        <h1 className="text-4xl md:text-6xl  text-green-800 font-bold mb-4">
          Roby
        </h1>
        <p className=" text-sm md:text-xl mb-8 text-green-800 m-5">
          Experienced and imaginative game developer with 4 years of industry
          expertise. Known for adaptability, I have a proven track record of
          mastering new programming languages, tools, and software swiftly. As a
          patient and creative problem solver, I am deeply passionate about
          crafting innovative storytelling experiences, conducting rigorous game
          testing, and implementing enhancements to elevate gameplay. Thriving
          in fast-paced, deadline-driven environments, I bring in-depth
          knowledge of gaming trends and a commitment to continually refining my
          proficiency in diverse programming languages
        </p>
        <button
          className=" bg-green-200 text-green-500 shadow-zinc-400 shadow-md m-10 px-4 py-2 rounded-full font-semibold hover:bg-green-500 hover:text-white"
          onClick={handleDownload}
        >
          DownLoad Resume
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
