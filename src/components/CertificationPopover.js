import React from 'react'

const CertificationPopover = ({ isOpen, onClose, imageUrl }) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={handleBackdropClick}
    >
      <div className="relative bg-gray-900 p-2 rounded-sm max-w-3xl max-h-[90vh] overflow-auto">
        <button
          onClick={onClose}
          className="absolute top-[0.42rem] right-[0.4rem] w-7 h-7 flex items-center justify-center bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white rounded-md transition-all duration-200 border border-gray-600 hover:border-gray-500"
          aria-label="Close"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5" 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path 
              fillRule="evenodd" 
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" 
              clipRule="evenodd" 
            />
          </svg>
        </button>
        <img
          src={imageUrl}
          alt="Certificate"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};


export default CertificationPopover
