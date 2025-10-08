import Image from "next/image";
import React from "react";

type Props = {
  image: string;
  title: string;
  link?: string;
};

const BlogCard = ({ image, title, link }: Props) => {
  const mediumLink = link || "https://medium.com/@sulakshanidissanayake";
  
  return (
    <a 
      href={mediumLink} 
      target="_blank" 
      rel="noopener noreferrer"
      className="block bg-[#0f172a] p-6 rounded-xl shadow-lg border border-white/10 hover:shadow-cyan-500/20 transition-all duration-300 hover:scale-105 cursor-pointer group"
    >
      <Image
        src={image}
        alt="blog"
        width={500}
        height={300}
        className="object-cover rounded-lg w-full h-48 group-hover:brightness-110 transition-all duration-300"
      />
      <div className="mt-4">
        <p className="text-gray-400 font-medium text-sm">
          5 July 2025
        </p>
        <h1 className="mt-3 text-lg font-semibold text-cyan-300 group-hover:text-cyan-400 transition-all duration-300">
          {title}
        </h1>
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="bg-cyan-900 text-cyan-200 text-xs px-3 py-1 rounded-full">
            Next.js
          </span>
          <span className="bg-cyan-900 text-cyan-200 text-xs px-3 py-1 rounded-full">
            SSG
          </span>
          <span className="bg-cyan-900 text-cyan-200 text-xs px-3 py-1 rounded-full">
            SSR
          </span>
        </div>
        
        {/* Read More Link */}
        <div className="mt-4 flex items-center text-cyan-400 text-sm font-medium group-hover:text-cyan-300 transition-all duration-300">
          <span>Read on Medium</span>
          <svg 
            className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </a>
  );
};

export default BlogCard;
