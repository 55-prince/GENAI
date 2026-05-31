import React from 'react';

const TypingIndicator = () => {
  return (
    <div className="px-6 pb-4">
      <div className="flex items-start space-x-3">
        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center flex-shrink-0">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
          </svg>
        </div>
        <div className="bg-gray-100 rounded-2xl rounded-tl-none p-4">
          <div className="flex space-x-1">
            <span className="w-2 h-2 bg-gray-500 rounded-full animate-blink"></span>
            <span className="w-2 h-2 bg-gray-500 rounded-full animate-blink" style={{ animationDelay: '0.2s' }}></span>
            <span className="w-2 h-2 bg-gray-500 rounded-full animate-blink" style={{ animationDelay: '0.4s' }}></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypingIndicator;