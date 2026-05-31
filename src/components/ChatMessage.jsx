import React from 'react';

const ChatMessage = ({ message, sender, timestamp }) => {
  const isUser = sender === 'user';
  
  return (
    <div className={`flex items-start space-x-3 animate-fadeIn ${isUser ? 'flex-row-reverse space-x-reverse' : ''}`}>
      {/* Avatar */}
      <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
        isUser 
          ? 'bg-gradient-to-br from-green-500 to-emerald-500' 
          : 'bg-gradient-to-br from-blue-500 to-indigo-500'
      }`}>
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isUser ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
          )}
        </svg>
      </div>
      
      {/* Message Bubble */}
      <div className={`rounded-2xl p-4 max-w-[70%] ${
        isUser 
          ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-tr-none' 
          : 'bg-gray-100 text-gray-800 rounded-tl-none'
      }`}>
        <p className="whitespace-pre-wrap break-words">{message}</p>
        <span className={`text-xs mt-1 block ${isUser ? 'text-blue-100' : 'text-gray-500'}`}>
          {timestamp}
        </span>
      </div>
    </div>
  );
};

export default ChatMessage;