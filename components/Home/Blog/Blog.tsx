import React from "react";
import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <div className="pt-16 pb-16">
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
        My latest
        <span className="text-cyan-200"> Blogs</span>
      </h1>
      <div className="w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-3 xl:gap-4 gap-10 items-center mt-16">
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="0"
        >
          <BlogCard
            image="/images/2405a65ff1b58436b15d81a30c23561b1bf383d3-10450x5350.webp"
            title="Static vs Server-Side Rendering in Next.js"
          />
        </div>
       
          
      </div>
    </div>
  );
};

export default Blog;
