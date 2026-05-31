import React from 'react';

const ChatHeader = ({ onClear }) => {
  return (
    <div className="bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 text-white p-6 flex items-center justify-between border-b border-gray-800">
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center ring-2 ring-blue-700/50">
          <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
          </svg>
        </div>
        <div>
          <h1 className="text-2xl font-bold text-white">AI Assistant</h1>
          <p className="text-blue-300 text-sm">Online • Always ready to help</p>
        </div>
      </div>
      <button 
        onClick={onClear}
        className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition duration-200 border border-gray-700 hover:border-gray-600"
      >
        Clear Chat
      </button>
    </div>
  );
};

export default ChatHeader;