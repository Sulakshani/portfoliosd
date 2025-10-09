import React, { useState } from "react";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";
import { FaGithub, FaHackerrank, FaLinkedin, FaMedium } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('');

    try {
      console.log('Submitting form with data:', formData);
      
      // Use the debug endpoint to see detailed error info
      const response = await fetch('/api/send-email-debug', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          mobile: formData.mobile,
          message: formData.message,
        }),
      });

      const data = await response.json();
      console.log('API Response:', data);

      if (response.ok) {
        setStatus('Message sent successfully! Check your email inbox.');
        setFormData({ name: '', email: '', mobile: '', message: '' });
      } else {
        console.error('API Error:', data);
        throw new Error(data.details || data.error || 'Failed to send message');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('Failed to send message. Check console for details. Error: ' + error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="pt-16 pb-16">
      <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Text content */}
        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-200">
            Have a project in mind or want to collaborate? 
          </h1>
          <p className="text-gray-400 mt-6 text-base sm:text-lg">
            I&apos;d love to hear from you. Let&apos;s create something amazing together.
          </p>
          {/* info */}
          <div className="mt-7">
            <div className="flex items-center space-x-3 mb-4">
              <BiPhone className="w-9 h-9 text-cyan-300" />
              <p className="text-xl font-bold text-gray-400">+94715342627 / +94750342627</p>
            </div>
            <div className="flex items-center space-x-3 mb-4">
              <BiEnvelope className="w-9 h-9 text-cyan-300" />
              <p className="text-xl font-bold text-gray-400">
                sulakshanidissanayake@gmail.com
              </p>
            </div>
            <div className="flex items-center space-x-3 mb-4">
              <BiMap className="w-9 h-9 text-cyan-300" />
              <p className="text-xl font-bold text-gray-400">
                Moratuwa, Srilanka
              </p>
            </div>
          </div>
          {/* social icons */}
          <div className="flex items-center mt-8 space-x-3">
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
            
            {/* Medium - Black #000000 */}
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
        </div>
        {/* form */}
        <div
          data-aos="zoom-in"
          data-aos-anchor-placement="top-center"
          data-aos-delay="0"
          className="md:p-10 p-5 bg-[#131332] rounded-lg"
        >
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              required
              className="px-4 py-3.5 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
              className="px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70"
            />
            <input
              type="text"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Mobile Number"
              className="px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              className="px-4 py-3.5 mt-6 bg-[#363659] text-white outline-none rounded-md w-full placeholder:text-white/70 h-[10rem]"
            ></textarea>
            
            {status && (
              <p className={`mt-4 text-center ${status.includes('success') ? 'text-green-400' : 'text-red-400'}`}>
                {status}
              </p>
            )}
            
            <button 
              type="submit"
              disabled={isLoading}
              className="mt-8 px-12 py-4 bg-blue-950 hover:bg-blue-900 transition-all duration-300 cursor-pointer text-white rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
