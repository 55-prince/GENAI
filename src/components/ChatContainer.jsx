import React, { useEffect, useRef } from 'react';
import ChatMessage from './ChatMessage';

const ChatContainer = ({ messages }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Auto-scroll to bottom when new messages arrive
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div 
      ref={containerRef}
      className="flex-1 overflow-y-auto p-6 space-y-4 chat-container"
    >
      {messages.map((message) => (
        <ChatMessage 
          key={message.id}
          message={message.text}
          sender={message.sender}
          timestamp={message.timestamp}
        />
      ))}
    </div>
  );
};

export default ChatContainer;