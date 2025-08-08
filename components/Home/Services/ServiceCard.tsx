import Image from "next/image";
import React from "react";

type Props = {
  icon: string;
  name: string;
  description: string;
};

const ServiceCard = ({ description, icon, name }: Props) => {
  return (
    <div className="group relative overflow-hidden bg-gradient-to-br from-blue-900/40 to-purple-900/40 backdrop-blur-lg border border-white/10 transition-all duration-500 p-8 sm:p-12 rounded-2xl hover:bg-gradient-to-br hover:from-blue-800/50 hover:to-purple-800/50 hover:border-cyan-400/30 hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-500/20 transform-gpu max-w-4xl mx-auto">
        
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      

      {/* Personal Information Grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10 group-hover:bg-white/10 transition-all duration-300">
          <span className="text-cyan-300 font-medium text-base">Full Name:</span>
          <span className="text-gray-100 text-base font-medium">Sulakshani Dissanyake</span>
        </div>
        
        <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10 group-hover:bg-white/10 transition-all duration-300">
          <span className="text-cyan-300 font-medium text-base">Age:</span>
          <span className="text-gray-100 text-base">23 years old</span>
        </div>
        
        <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10 group-hover:bg-white/10 transition-all duration-300">
          <span className="text-cyan-300 font-medium text-base">Languages:</span>
          <span className="text-gray-100 text-base">Sinhala, English</span>
        </div>
        
        <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10 group-hover:bg-white/10 transition-all duration-300">
          <span className="text-cyan-300 font-medium text-base">Field:</span>
          <span className="text-gray-100 text-base">Information Technology</span>
        </div>
        
        <div className="sm:col-span-2 flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 bg-white/5 rounded-lg border border-white/10 group-hover:bg-white/10 transition-all duration-300">
          <span className="text-cyan-300 font-medium text-base mb-2 sm:mb-0">Email:</span>
          <span className="text-gray-100 text-base break-all">sulakshani@gmail.com</span>
        </div>
        
        <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10 group-hover:bg-white/10 transition-all duration-300">
          <span className="text-cyan-300 font-medium text-base">Status:</span>
          <span className="text-gray-100 text-base">IT Undergraduate</span>
        </div>
        
        <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10 group-hover:bg-white/10 transition-all duration-300">
          <span className="text-cyan-300 font-medium text-base">Nationality:</span>
          <span className="text-gray-100 text-base">Sri Lankan</span>
        </div>
      </div>
      
      {/* Decorative elements */}
     
    </div>
  );
};

export default ServiceCard;
