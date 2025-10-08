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
      <div className="w-[80%] mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-16">
        {skills.map((skill, i) => (
          <Tilt key={skill.name} scale={1.05} transitionSpeed={400}>
            <div
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="bg-[#0f172a] p-6 rounded-xl shadow-lg border border-white/10 hover:shadow-cyan-500/20 transition-all duration-300 hover:scale-105 text-center min-h-[120px] flex flex-col items-center justify-center"
            >
              <div className="text-4xl mb-3 text-cyan-400">{skill.icon}</div>
              <p className="text-white text-sm font-medium">{skill.name}</p>
            </div>
          </Tilt>
        ))}
      </div>
    </div>
  );
};

export default Skills;
