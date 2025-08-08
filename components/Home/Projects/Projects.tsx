import Image from "next/image";
import React from "react";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      title: "My Portfolio Site",
      type: "Web Project",
      description:
        "My first portfolio website showcasing my skills, projects, and experiences.",
      image: "/images/p1.jpg",
      tech: ["Next.js", "Asp.Net", "Tailwind CSS", "+1 more"],
      link: "#",
      github: "#",
    },
    {
      title: "Modern Finance Dashboard UI",
      type: "UI/UX Project",
      description:
        "A modern and interactive finance dashboard with sleek UI and smooth user flow.",
      image: "/images/p2.jpg",
      tech: ["React", "Tailwind CSS", "Chart.js"],
      link: "#",
      github: "#",
    },
    {
      title: "Brand Identity for Startups",
      type: "Branding Project",
      description:
        "Creative and unique branding solutions to help startups build strong identity.",
      image: "/images/p3.jpg",
      tech: ["Figma", "Illustrator", "Photoshop"],
      link: "#",
      github: "#",
    },
    {
      title: "SaaS Dashboard Development",
      type: "Web App",
      description:
        "SaaS dashboard built with modern technologies to manage and analyze data.",
      image: "/images/p4.jpg",
      tech: ["Next.js", "Node.js", "Tailwind CSS"],
      link: "#",
      github: "#",
    },
  ];

  return (
    <div className="pt-16 pb-16">
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
        A small selection of recent <br />
        <span className="text-cyan-300">projects</span>
      </h1>

      <div className="w-[60%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#0f172a] rounded-xl p-6 shadow-lg border border-white/10 hover:shadow-cyan-500/20 transition"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <Image
              src={project.image}
              alt={project.title}
              width={600}
              height={450}
              className="rounded-lg"
            />
            <div className="mt-4 flex items-center justify-between">
              <h1 className="text-xl sm:text-2xl font-semibold text-cyan-300">
                {project.title}
              </h1>
              <span className="bg-gray-700 text-white text-xs px-3 py-1 rounded-full">
                {project.type}
              </span>
            </div>
            <p className="pt-3 text-white/80">{project.description}</p>

            <div className="flex flex-wrap gap-2 mt-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-cyan-900 text-cyan-200 text-xs px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex justify-between items-center mt-5">
              <a
                href={project.link}
                className="bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-2 rounded-full text-white font-medium hover:opacity-90"
              >
                More Info
              </a>
              <a
                href={project.github}
                className="text-white hover:text-cyan-300 text-2xl"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
