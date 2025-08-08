"use client";
import React from "react";
import {
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiFigma,
  SiPython,
  SiHtml5,
  SiCss3,
  SiPhp,
    SiGithub,
    SiThreedotjs,
    SiC,
    SiMysql,
    SiGit,
    SiPostman,
    SiMongodb
    
} from "react-icons/si";

import Tilt from "react-parallax-tilt";

const skills = [
  {
    name: "JavaScript",
    icon: <SiJavascript />,
   
  },
  {
    name: "React.js",
    icon: <SiReact />,
    
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs />,
    
  },
  {
    name: "Node.js",
    icon: <SiNodedotjs />,
   
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
    
  },
  {
    name: "Python",
    icon: <SiPython />,
    
  },
  {
    name: "HTML",
    icon: <SiHtml5 />,
    
  },
  {
    name: "CSS",
    icon: <SiCss3 />,
    
  },
  {
    name: "Figma",
    icon: <SiFigma />,
    
  },
  {
    name: "PHP",
    icon: <SiPhp />,
    
  },
  {
    name: "GitHub",
    icon: <SiGithub />,
  },
  {
    name: "Threejs",
    icon: <SiThreedotjs />,
  },
  {
  // Java icon removed due to missing export in react-icons/si
    name: "MySQL",
    icon: <SiMysql />,
  },
  {
    name: "C",
    icon: <SiC />,
  },
  {
    name: "Git",
    icon: <SiGit />,
  },
  {
    name: "Postman",
    icon: <SiPostman />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
  },
];

const Skills = () => {
  return (
    <div className="text-white pt-16 pb-16">
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
        My <span className="text-cyan-300">Skills</span>
      </h1>
      <div className="flex flex-wrap justify-center gap-6 mt-16">
        {skills.map((skil, i) => {
            // Start a new row every 8 skills
            if (i % 8 === 0) {
            return (
              <React.Fragment key={skil.name}>
              {i !== 0 && <div className="w-full" />}
              <Tilt scale={1.5} transitionSpeed={400}>
                <div
                data-aos="flip-right"
                data-aos-anchor-placement="top-center"
                data-aos-delay={i * 100}
                className="bg-[#14134145] text-center w-30 h-38 rounded-3xl flex flex-col items-center justify-center shadow-lg transition hover:scale-105"
                >
                <div className="text-5xl mb-4 text-gray-300">{skil.icon}</div>
                <p className="text-purple-400 mt-1">{skil.name}</p>
                </div>
              </Tilt>
              </React.Fragment>
            );
            }
            return (
            <Tilt key={skil.name} scale={1.5} transitionSpeed={400}>
              <div
              data-aos="flip-right"
              data-aos-anchor-placement="top-center"
              data-aos-delay={i * 100}
              className="bg-[#14134145] text-center w-30 h-38 rounded-3xl flex flex-col items-center justify-center shadow-lg transition hover:scale-105"
              >
              <div className="text-5xl mb-4 text-gray-300">{skil.icon}</div>
              <p className="text-purple-400 mt-1">{skil.name}</p>
              </div>
            </Tilt>
            );
        })}
      </div>
    </div>
  );
};

export default Skills;
