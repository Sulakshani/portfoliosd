import Image from "next/image";
import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);

  const projects = [
    {
      title: "Pinnacle Website",
      type: "Web Project",
      
      description: [
        "Built an AI-powered e-commerce platform offering personalized recommendations, smart search, order tracking, and an advanced admin dashboard.",
        
      ],
      image: "/images/Pinnacle.png",
      tech: [
        "Next.js",
        "MongoDB",
        "Gemini API",
        "Stripe",
        "JWT",
        "Cloudinary",
        "Figma",
        "GitHub"
      ],
      link: "https://github.com/Anuradha-Herath/Pinnacle",
      github: "https://github.com/Anuradha-Herath/Pinnacle",
      highlight: true,
    },
    
    {
      title: "Careerly – Career Connecting Platform",
      type: "Web Project",
      description:
        "Built a platform connecting students and companies for internships and hiring, with secure authentication and company profile management.",
      image: "/images/careerly.png",
      tech: ["Next.js", "Tailwind CSS", "JWT","GitHub"],
      link: "https://github.com/AdeepaK2/careerly_ras",
      github: "https://github.com/AdeepaK2/careerly_ras",
    },
    {
      title: "My Portfolio",
      type: "Web Project",
      description:
        "My first portfolio website showcasing my skills, projects,certifications, blogs and experiences.",
      image: "/images/portfolio.png",
      tech: ["Next.js", "Tailwind CSS", "Three.js","GitHub"],
      link: "https://github.com/Sulakshani/portfoliosd",
      github: "https://github.com/Sulakshani/portfoliosd",
    },
    {
      title: "MedLink Platform",
      type: "Web App",
      description:
        "Built a secure web app for sharing patient medical details via QR code with role-based authentication and SQL Server integration.",
      image: "/images/medlink.png",
      tech: ["Next.js", "ASP.NET", "Tailwind CSS","GitHub","Firebase"],
      link: "https://github.com/Sulakshani/medlink-frontend",
      github: "https://github.com/Sulakshani/medlink-frontend",
    },
    {
      title: "SevaLanka project",
      type: "Web App",
      description:
        "Built a secure web app for sharing patient medical details via QR code with role-based authentication and SQL Server integration.",
      image: "/images/sevalanka.png",
      tech: ["Next.js", "ASP.NET", "Tailwind CSS","GitHub","Firebase"],
      link: "https://github.com/SeVaLanka",
      github: "https://github.com/SeVaLanka",
    },
    {
      title: "Baby Driver project",
      type: "Web App",
      description:
        "Built a mobile-controlled car game for kids to collect RFID-tagged items and place them in correct slots, improving learning and problem-solving skills.",
      image: "/images/babydriver.jpeg",
      tech: ["React", "Node.js", "MIT App Inventor","GitHub","GitHub"],
      link: "https://github.com/Sulakshani/BabyDriverGame",
      github: "https://github.com/Sulakshani/BabyDriverGame",
    },
    {
      title: "FinFit Design",
      type: "UI/UX Design",
      description:
        "FinFit is an easy-to-use platform that helps Gen Z manage expenses, budgets, savings, and investments through interactive dashboards and real-time alerts, making money management simple and rewarding.",
      image: "/images/finfit.png",
      tech: ["Figma"],
      link: "https://www.figma.com/design/cOlhUOJYnrggyVPcpam4D1/InterfaceX?node-id=29-7009&t=AAE290U6yQrY6nQ1-0",
      github: "https://www.figma.com/design/cOlhUOJYnrggyVPcpam4D1/InterfaceX?node-id=29-7009&t=AAE290U6yQrY6nQ1-0",
    },
  ];

  // Show only first 4 projects by default, or all if showAllProjects is true
  const displayedProjects = showAllProjects ? projects : projects.slice(0, 4);

  return (
    <div className="pt-16 pb-16">
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
        A small selection of recent <br />
        <span className="text-cyan-300">projects</span>
      </h1>

      <div className="w-[60%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
        {displayedProjects.map((project, index) => (
          <div
            key={index}
            className={`relative bg-[#0f172a] rounded-xl p-6 shadow-lg border border-white/10 hover:shadow-cyan-500/20 transition group overflow-hidden ${project.highlight ? 'ring-2 ring-cyan-400 scale-[1.03]' : ''}`}
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            {/* Project Image with overlay for highlight */}
            <div className="relative">
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={450}
                className="rounded-lg group-hover:scale-105 transition-transform duration-500"
              />
              {project.highlight && (
                <div className="absolute top-4 left-4 bg-cyan-400 text-[#0f172a] text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-pulse z-10">
                  Featured
                </div>
              )}
            </div>
            {/* Title and Role/Company */}
            <div className="mt-4 flex flex-col gap-1">
              <h1 className="text-xl sm:text-2xl font-semibold text-cyan-300">
                {project.title}
              </h1>
              {project.type && (
                <span className="bg-gray-700 text-white text-xs px-3 py-1 rounded-full inline-block mt-1">
                  {project.type}
                </span>
              )}
            </div>
            {/* Description (multi-line for Pinnacle) */}
            {Array.isArray(project.description) ? (
              <ul className="pt-3 text-white/80 space-y-2 list-disc list-inside">
                {project.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            ) : (
              <p className="pt-3 text-white/80">{project.description}</p>
            )}
            {/* Tech Stack */}
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
            {/* Actions */}
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

      {/* View More Projects Button */}
      {!showAllProjects && projects.length > 4 && (
        <div className="flex justify-center mt-12">
          <button
            onClick={() => setShowAllProjects(true)}
            className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 px-8 py-3 rounded-full text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            View More Projects
          </button>
        </div>
      )}

      {/* View Less Projects Button */}
      {showAllProjects && (
        <div className="flex justify-center mt-12">
          <button
            onClick={() => setShowAllProjects(false)}
            className="bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 px-8 py-3 rounded-full text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gray-500/25"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            View Less Projects
          </button>
        </div>
      )}
    </div>
  );
};

export default Projects;
