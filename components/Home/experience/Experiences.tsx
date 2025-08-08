import Image from "next/image";
import React from "react";

const Experiences = () => {
  const experiences = [
    {
      role: "Software Development Intern",
      company: "ABC Tech Solutions",
      type: "Internship",
      description:
        "Worked on developing web applications using React and .NET Core, improving UI responsiveness and backend performance.",
      image: "/images/exp1.jpg",
      skills: ["React", ".NET Core", "SQL", "Git"],
      link: "#", // Link to certificate or project page
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

  return (
    <div className="pt-16 pb-16">
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
        My <span className="text-cyan-300">Experiences</span>
      </h1>

      <div className="w-[60%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-[#0f172a] rounded-xl p-6 shadow-lg border border-white/10 hover:shadow-cyan-500/20 transition"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <Image
              src={exp.image}
              alt={exp.role}
              width={600}
              height={450}
              className="rounded-lg"
            />
            <div className="mt-4 flex items-center justify-between">
              <h1 className="text-xl sm:text-2xl font-semibold text-cyan-300">
                {exp.role}
              </h1>
              <span className="bg-gray-700 text-white text-xs px-3 py-1 rounded-full">
                {exp.type}
              </span>
            </div>
            <p className="text-white/70 text-sm">{exp.company}</p>
            <p className="pt-3 text-white/80">{exp.description}</p>

            <div className="flex flex-wrap gap-2 mt-4">
              {exp.skills.map((skill, i) => (
                <span
                  key={i}
                  className="bg-cyan-900 text-cyan-200 text-xs px-3 py-1 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>

            {exp.link && (
              <div className="flex justify-start mt-5">
                <a
                  href={exp.link}
                  className="bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-2 rounded-full text-white font-medium hover:opacity-90"
                >
                  View More
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiences;
