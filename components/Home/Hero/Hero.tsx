"use client";
import Image from "next/image";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { FaLinkedin, FaGithub, FaHackerrank, FaMedium } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import ParticlesHero from "./ParticleBackground";

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

  return <span className="transition-all duration-500">{texts[index]}</span>;
};

const Hero = () => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative h-screen flex items-center justify-center text-white overflow-hidden">
      <ParticlesHero />
      
      {/* Animated gradient orbs */}
      <div 
        className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl transition-all duration-1000 ease-out pointer-events-none"
        style={{
          left: `${mousePosition.x / 20}px`,
          top: `${mousePosition.y / 20}px`,
        }}
      />
      <div 
        className="absolute w-96 h-96 bg-blue-800/10 rounded-full blur-3xl transition-all duration-1000 ease-out pointer-events-none"
        style={{
          right: `${mousePosition.x / 30}px`,
          bottom: `${mousePosition.y / 30}px`,
        }}
      />

      <div className="relative z-20 w-full h-full flex flex-col sm:flex-row items-center justify-center">
        {/* Left: Text */}
        <div className="flex flex-col items-center justify-center h-full sm:h-auto sm:min-h-[500px]">
          <h2 className="text-sm sm:text-6xl whitespace-nowrap text-center animate-fade-in">
            Hello, I'm{" "}
            <span className="bg-gradient-to-r from-cyan-200 via-cyan-400 to-blue-400 bg-clip-text text-transparent hover:scale-105 inline-block transition-transform duration-300">
              Sulakshani
            </span>
          </h2>
          <h2 className="text-sm sm:text-6xl mt-2 whitespace-nowrap text-center">
            <span className="text-cyan-200 font-bold inline-block align-middle min-w-[200px] hover:text-cyan-300 transition-colors duration-300">
              <AnimatedText
                texts={["IT Undergraduate", "Full Stack Developer"]}
                interval={2000}
              />
            </span>
          </h2>
          
          <div className="mt-4 flex justify-center w-full group">
            <span
              className="bg-[#0f172a] min-w-[300px] sm:min-w-[600px] max-w-[600px] h-[120px] rounded-xl p-4 shadow-lg border border-white/10 shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:border-cyan-500/30 transition-all duration-500 flex-shrink-0 flex items-center mx-auto transform hover:scale-[1.02]"
              style={{
                color: "#38bdf8",
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
          
          <button
            data-aos="fade-up"
            data-aos-delay="600"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => {
              const projectsSection = document.getElementById('projects');
              if (projectsSection) {
                projectsSection.scrollIntoView({ 
                  behavior: 'smooth' 
                });
              }
            }}
            className="mt-6 px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-blue-600 hover:to-cyan-500 transition-all duration-300 cursor-pointer rounded-full text-lg font-medium mx-auto relative overflow-hidden group shadow-lg hover:shadow-cyan-500/50 transform hover:scale-105 active:scale-95"
          >
            <span className="absolute inset-0 w-0 bg-gradient-to-r from-cyan-500 to-blue-600 transition-all duration-500 ease-out group-hover:w-full"></span>
            <span className="relative flex items-center justify-center">
              See my work
              <BsArrowRight 
                className={`w-5 h-5 ml-2 transition-all duration-300 ${
                  isHovered ? 'translate-x-2' : ''
                }`}
              />
            </span>
          </button>
        </div>
        
        {/* Right: Photo */}
        <div className="sm:w-1/2 flex justify-center items-center mt-8 sm:mt-0 relative group">
          <Image
            src="/images/image.png"
            alt="My Photo"
            width={320}
            height={320}
            className="rounded-xl border-4 border-cyan-500/70 shadow-lg object-cover relative z-10 transition-all duration-500 group-hover:border-cyan-400 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-cyan-500/30 group-hover:brightness-110"
            data-aos="fade-left"
          />
        </div>
      </div>
      
      {/* Fixed Social Media Icons */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 flex flex-col space-y-4">
        {/* LinkedIn - Blue #0077B5 */}
        <a 
          href="https://www.linkedin.com/in/sulakshani-dissanayake" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer hover:bg-[#0077B5] transition-all duration-300 group relative overflow-hidden backdrop-blur-sm border border-white/10 hover:border-[#0077B5]/70 hover:shadow-lg hover:shadow-[#0077B5]/50 transform hover:scale-110 active:scale-95"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-[#0077B5] to-[#005885] opacity-0 group-hover:opacity-90 transition-opacity duration-300"></span>
          <FaLinkedin className="text-white w-6 h-6 relative z-10 group-hover:scale-110 transition-transform duration-300" />
        </a>
        
        {/* GitHub - Dark Gray/Black #24292e */}
        <a 
          href="https://github.com/Sulakshani" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer hover:bg-[#24292e] transition-all duration-300 group relative overflow-hidden backdrop-blur-sm border border-white/10 hover:border-gray-400/70 hover:shadow-lg hover:shadow-gray-500/50 transform hover:scale-110 active:scale-95"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-[#24292e] to-[#1a1e22] opacity-0 group-hover:opacity-90 transition-opacity duration-300"></span>
          <FaGithub className="text-white w-6 h-6 relative z-10 group-hover:scale-110 transition-transform duration-300" />
        </a>
        
        {/* HackerRank - Green #00EA64 */}
        <a 
          href="https://www.hackerrank.com/profile/Sulakshani2002" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer hover:bg-[#00EA64] transition-all duration-300 group relative overflow-hidden backdrop-blur-sm border border-white/10 hover:border-[#00EA64]/70 hover:shadow-lg hover:shadow-[#00EA64]/50 transform hover:scale-110 active:scale-95"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-[#00EA64] to-[#00C851] opacity-0 group-hover:opacity-90 transition-opacity duration-300"></span>
          <FaHackerrank className="text-white w-6 h-6 relative z-10 group-hover:scale-110 transition-transform duration-300" />
        </a>
        
        {/* Medium - Black/Green #000000 or #00AB6C */}
        <a 
          href="https://medium.com/@sulakshanidissanayake" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer hover:bg-[#000000] transition-all duration-300 group relative overflow-hidden backdrop-blur-sm border border-white/10 hover:border-gray-300/70 hover:shadow-lg hover:shadow-gray-400/50 transform hover:scale-110 active:scale-95"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-[#000000] to-[#1a1a1a] opacity-0 group-hover:opacity-90 transition-opacity duration-300"></span>
          <FaMedium className="text-white w-6 h-6 relative z-10 group-hover:scale-110 transition-transform duration-300" />
        </a>
      </div>

      <style jsx global>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.05);
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Hero;