import React, { useState } from 'react';
import { FaGithub } from "react-icons/fa";

function ProjectCard({ project , viewMode}) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  const handleButtonClick = (buttonType) => {
    if (buttonType === 'sun' && isDarkMode) {
      setIsDarkMode(false);
    } else if (buttonType === 'moon' && !isDarkMode) {
      setIsDarkMode(true);
    }
  };
  
  return (
    <div className="relative min-h-[417px] perspective">
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >

        <div className="absolute w-full h-full backface-hidden">
          <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden h-full border border-gray-700">
            <a href={project.liveDemo} target='_blank' rel='noreferrer'>
            <img
              src={project.id !== 7 ? project.image : !isDarkMode ? project.image : project.desktopDarkModeImage}
              alt={project.name}
              className={`w-full h-52 ${viewMode=== "desktop" ?"object-cover" : "object-contain"} transform duration-500 hover:scale-[1.05]`}
            />
            </a>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-white flex items-center justify-between">{project.DarkName ? isDarkMode ? project.DarkName : project.name : project.name}

              {project.id === 7 && 
                <div className='flex gap-2'>
                  <button onClick={() => handleButtonClick("sun")}>
                  <svg xmlns="http://www.w3.org/2000/svg" className='w-4 h-4' viewBox="0 0 26 26">
                    <path fill={!isDarkMode ? "yellow" : "#FFF"} fillRule="evenodd" d="M13 21a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-5.657-2.343a1 1 0 010 1.414l-2.121 2.121a1 1 0 01-1.414-1.414l2.12-2.121a1 1 0 011.415 0zm12.728 0l2.121 2.121a1 1 0 01-1.414 1.414l-2.121-2.12a1 1 0 011.414-1.415zM13 8a5 5 0 110 10 5 5 0 010-10zm12 4a1 1 0 110 2h-3a1 1 0 110-2h3zM4 12a1 1 0 110 2H1a1 1 0 110-2h3zm18.192-8.192a1 1 0 010 1.414l-2.12 2.121a1 1 0 01-1.415-1.414l2.121-2.121a1 1 0 011.414 0zm-16.97 0l2.121 2.12A1 1 0 015.93 7.344L3.808 5.222a1 1 0 011.414-1.414zM13 0a1 1 0 011 1v3a1 1 0 11-2 0V1a1 1 0 011-1z"/>
                  </svg>
                  </button>
                  <button onClick={() => handleButtonClick("moon")}>
                  <svg xmlns="http://www.w3.org/2000/svg" className='w-4 h-4' viewBox="0 0 26 26" fill={isDarkMode ? "#007BFF" : "#FFF"}>
                    <path fillRule="evenodd" d="M13 0c.81 0 1.603.074 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z"/>
                  </svg>
                  </button>
                </div>
              }

              </h3>
              <p className="text-gray-300 mb-4 line-clamp-2 ">
                {project.description}
              </p>
              <div className='flex flex-col gap-4'>
                <div className='flex justify-between items-center'>
                  <div className="w-[90%]">
                    <div className="flex flex-wrap gap-2 mb-0 overflow-y-auto custom-scrollbar" 
                        style={{
                          maxHeight: '30px',
                          overflowX: 'hidden'
                        }}>
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-900 text-blue-300 rounded-full text-sm whitespace-nowrap"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <a href={project.github} target='_blank' rel='noreferrer' className="ml-2"> 
                    <FaGithub className='text-2xl text-white hover:text-blue-500 transition-colors' />
                  </a>
                </div>
                
                <div className="flex gap-4">
                  <button
                    onClick={() => window.open(project.liveDemo, '_blank')}
                    className="flex-1 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    Live Demo
                  </button>
                  <button
                    onClick={() => setIsFlipped(true)}
                    className="flex-1 bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
                  >
                    Features
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute w-full h-full backface-hidden rotate-y-180">
          <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden h-full border border-gray-700 p-6">
            <h3 className="text-xl font-bold mb-4 text-white">Key Features</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-300 mb-6">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <button
              onClick={() => setIsFlipped(false)}
              className="absolute bottom-6 right-6 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
