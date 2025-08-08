import Image from "next/image";
import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // More interactive chevrons

const Experiences = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const experiences = [
    {
      role: "Software Development Intern",
      company: "ABC Tech Solutions",
      type: "Internship",
      description:
        "Worked on developing web applications using React and .NET Core, improving UI responsiveness and backend performance.",
      image: "/images/exp1.jpg",
      skills: ["React", ".NET Core", "SQL", "Git"],
      link: "#",
    },
    {
      role: "UI/UX Designer",
      company: "Creative Minds Studio",
      type: "Part-time",
      description:
        "Designed modern user interfaces for mobile and web platforms, enhancing usability and accessibility.",
      image: "/images/exp2.jpg",
      skills: ["Figma", "Tailwind CSS", "Prototyping"],
      link: "#",
    },
    {
      role: "Volunteer IT Support",
      company: "Community Education Center",
      type: "Volunteer",
      description:
        "Provided technical support, maintained computer labs, and assisted in setting up learning management systems.",
      image: "/images/exp3.jpg",
      skills: ["Networking", "Troubleshooting", "LMS Setup"],
      link: "#",
    },
  ];

  const scroll = (direction: string) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -350 : 350,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="pt-16 pb-16 relative">
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white mb-8">
        My <span className="text-cyan-300">Experiences</span>
      </h1>

      {/* Left scroll button */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-800 p-3 rounded-full text-white hover:bg-gray-700 z-10 animate-pulse"
      >
        <FaChevronLeft size={20} />
      </button>

      {/* Right scroll button */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-800 p-3 rounded-full text-white hover:bg-gray-700 z-10 animate-pulse"
      >
        <FaChevronRight size={20} />
      </button>

      {/* Horizontal Scroll */}
    <div
      ref={scrollRef}
      className="flex overflow-x-auto space-x-6 px-12 scrollbar-hide items-center justify-center"
    >
      {experiences.map((exp, index) => (
        <div
        key={index}
        className="bg-[#0f172a] min-w-[350px] max-w-[350px] rounded-xl p-4 shadow-lg border border-white/10 hover:shadow-cyan-500/20 transition flex-shrink-0"
        >
        <Image
          src={exp.image}
          alt={exp.role}
          width={350}
          height={160}
          className="rounded-lg object-cover"
        />
        <div className="mt-3">
          <h1 className="text-lg font-semibold text-cyan-300">
            {exp.role}
          </h1>
          <p className="text-white/70 text-sm">{exp.company}</p>
          <span className="bg-gray-700 text-white text-xs px-2 py-0.5 rounded-full mt-1 inline-block">
            {exp.type}
          </span>
          <p className="pt-2 text-white/80 text-sm">{exp.description}</p>
          <div className="flex flex-wrap gap-1 mt-3">
            {exp.skills.map((skill, i) => (
            <span
              key={i}
              className="bg-cyan-900 text-cyan-200 text-[10px] px-2 py-0.5 rounded-full"
            >
              {skill}
            </span>
            ))}
          </div>
          {exp.link && (
            <a
            href={exp.link}
            className="mt-3 inline-block bg-gradient-to-r from-cyan-400 to-blue-500 px-3 py-1 rounded-full text-white text-xs font-medium hover:opacity-90"
            >
            View More
            </a>
          )}
        </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Experiences;
