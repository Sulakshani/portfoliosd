"use client";
import Image from "next/image";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import Typewriter from "typewriter-effect";
import ParticlesHero from "./ParticleBackground";
//import RobotAnimation from "./RobotAnimation";

type AnimatedTextProps = {
  texts: string[];
  interval?: number;
};

const AnimatedText: React.FC<AnimatedTextProps> = ({ texts, interval = 2000 }) => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, interval);
    return () => clearInterval(timer);
  }, [texts.length, interval]);

  return <span>{texts[index]}</span>;
};

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center text-white overflow-hidden flex-col">
      <ParticlesHero />

      <div className="relative z-10 flex flex-col items-center">
        {/*<Image
          src="/images/s12.png"
          alt="heroimage"
          width={200}
          height={200}
          className="rounded-full border-8 border-[#0c0c48aa]"
          data-aos="fade-up"
        />*/}
       
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="mt-5 px-2 font-medium w-full flex flex-col sm:flex-row items-center justify-between text-center sm:text-left"
        >
          {/* Left: Text */}
            <div className="sm:w-1/2 pl-0">
            {/* Line 1: Hello, I'm Sulakshani */}
            <h2 className="text-sm sm:text-6xl whitespace-nowrap">
              Hello, I'm Sulakshani
            </h2>

            {/* Line 2: A Passionate IT undergraduate */}
            <h2 className="text-sm sm:text-6xl mt-2 whitespace-nowrap">
              <span className="text-cyan-200 font-bold inline-block align-middle min-w-[200px]">
                <AnimatedText
                  texts={["IT Undergraduate", "Full Stack Developer"]}
                  interval={2000}
                />
              </span>
            </h2>
            {/* Line 3: Typewriter Description with background */}
            <div className="mt-4 flex justify-center sm:justify-start">
              <span
                className="bg-[#0f172a] min-w-[600px] max-w-[600px] h-[120px] rounded-xl p-4 shadow-lg border border-white/10 shadow-cyan-500/20 transition flex-shrink-0 flex items-center"
                style={{
                  color: "#38bdf8", // cyan-400
                  background: "linear-gradient(90deg, #0f172a 80%, #1e293b 100%)",
                }}
              >
                <Typewriter
                  options={{
                    strings: [
                      "Adaptable and quick to learn, with strong problem-solving and teamwork skills. Passionate about full-stack development, proactive in overcoming challenges, and eager to gain new knowledge to thrive in diverse environments."
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 60,
                    deleteSpeed: 40,
                  }}
                />
              </span>
            </div>
          </div>
          
        </div>
             
        <button
          data-aos="fade-up"
          data-aos-delay="600"
          className="mt-6 px-10 py-4 bg-blue-800 hover:bg-blue-900 transition-all duration-300 cursor-pointer rounded-full text-lg font-medium"
        >
         
          <span>See my work</span>
          <BsArrowRight className="w-5 h-5 ml-2 inline-block" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
