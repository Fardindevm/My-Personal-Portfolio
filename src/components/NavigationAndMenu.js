import React from 'react';
import { useState } from 'react';
import { FaLinkedin, FaInstagram, FaTelegram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const NavigationAndMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-900 bg-opacity-90 backdrop-blur-sm shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 relative group">
            <div className="flex-shrink-0 relative group">
              <span className="font-bold text-xl text-blue-400 cursor-pointer">
                F.M Portfolio
              </span>
              {/* Desktop */}
              <div className="hidden md:block absolute -bottom-12 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-blue-500 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap shadow-lg pointer-events-none">
                Fardin Mohammadi Portfolio
                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-500 rotate-45"></div>
              </div>
              {/* Mobile */}
              <div className="md:hidden absolute -bottom-10 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-blue-500 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap shadow-lg pointer-events-none">
                Fardin Mohammadi Portfolio
                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-500 rotate-45"></div>
              </div>
            </div>
          </div>



          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <a href="#home" className="text-gray-300 hover:text-blue-400 transition-colors">Home</a>
              <a href="#projects" className="text-gray-300 hover:text-blue-400 transition-colors">Projects</a>
              <a href="#skills" className="text-gray-300 hover:text-blue-400 transition-colors">Skills</a>
              <a href="#certifications" className="text-gray-300 hover:text-blue-400 transition-colors">Certifications</a>
              <a href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors">Contact</a>

              <div className="flex items-center space-x-4 ml-6 border-l border-gray-700 pl-6">
                <a
                  href="https://www.linkedin.com/in/fardin-mohammadi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-400 transition-all duration-300 hover:scale-110"
                >
                  <FaLinkedin size={20} />
                </a>
                <a
                  href="https://instagram.com/fardinmo7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-400 transition-all duration-300 hover:scale-110"
                >
                  <FaInstagram size={20} />
                </a>
                <a
                  href="mailto:Fardinmohammadi504@gmail.com"
                  className="text-gray-300 hover:text-blue-400 transition-all duration-300 hover:scale-110"
                >
                  <MdEmail size={20} />
                </a>
                <a
                  href="https://t.me/feriphx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-400 transition-all duration-300 hover:scale-110"
                >
                  <FaTelegram size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-blue-400"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 bg-opacity-95">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block text-gray-300 hover:text-blue-400 px-3 py-2">Home</a>
            <a href="#projects" className="block text-gray-300 hover:text-blue-400 px-3 py-2">Projects</a>
            <a href="#skills" className="block text-gray-300 hover:text-blue-400 px-3 py-2">Skills</a>
            <a href="#certifications" className="block text-gray-300 hover:text-blue-400 px-3 py-2">Certifications</a>
            <a href="#contact" className="block text-gray-300 hover:text-blue-400 px-3 py-2">Contact</a>

            {/* Icons for Mobile */}
            <div className="flex items-center space-x-4 px-3 py-2 border-t border-gray-700 mt-2">
              <a
                href="https://www.linkedin.com/in/fardin-mohammadi/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition-all duration-300"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://instagram.com/fardinmo7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition-all duration-300"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="mailto:Fardinmohammadi504@gmail.com"
                className="text-gray-300 hover:text-blue-400 transition-all duration-300"
              >
                <MdEmail size={20} />
              </a>
              <a
                href="https://t.me/feriphx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition-all duration-300"
              >
                <FaTelegram size={20} />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavigationAndMenu;
