import React, { useState } from 'react';
import fcc_logo from '../Images/fcc logo.png';

import CertificationPopover from './CertificationPopover';

const Certifications = () => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const handleViewCertificate = (certificateImage) => {
    setSelectedCertificate(certificateImage);
    setIsPopoverOpen(true);
  };

  return (
    <div id="certifications" className="min-h-[50vh] bg-gradient-to-b from-gray-900 via-blue-900/5 to-gray-900 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="text-blue-400">My Certifications</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

          <div className="bg-gray-900 rounded-lg p-6 shadow-lg border border-gray-700 transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center mb-4">
              <img
                src={fcc_logo}
                alt="FreeCodeCamp Logo"
                className="w-10 h-12 mr-4 object-contain"
              />
              <h3 className="text-xl font-bold text-blue-400">
                Responsive Web Design
              </h3>
            </div>
            <p className="text-gray-300 mb-4">
              Comprehensive certification in building responsive websites using HTML5, CSS3, and modern design principles.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Issued by FreeCodeCamp</span>
              <button
                onClick={() => handleViewCertificate('https://res.cloudinary.com/dlhwuydks/image/upload/v1731918222/Fcc_Responsive_Web_Design_Certification_upy0xj.png')}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                View Certificate
              </button>
            </div>
          </div>

          <div className="bg-gray-900 rounded-lg p-6 shadow-lg border border-gray-700 transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center mb-4">
              <img
                src={fcc_logo}
                alt="FreeCodeCamp Logo"
                className="w-10 h-12 mr-4 object-contain"
              />
              <h3 className="text-xl font-bold text-blue-400">
                JavaScript Algorithms and Data Structures
              </h3>
            </div>
            <p className="text-gray-300 mb-4">
              Advanced certification in JavaScript programming, including algorithms, data structures, and problem-solving.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Issued by FreeCodeCamp</span>
              <button
                onClick={() => handleViewCertificate('https://res.cloudinary.com/dlhwuydks/image/upload/v1731918222/Fcc_Javascript_Certification_j8kdju.png')}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                View Certificate
              </button>
            </div>
          </div>
        </div>
      </div>

      <CertificationPopover
        isOpen={isPopoverOpen}
        onClose={() => setIsPopoverOpen(false)}
        imageUrl={selectedCertificate}
      />
    </div>
  );
};

export default Certifications;
