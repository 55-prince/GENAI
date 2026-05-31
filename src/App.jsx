import React from 'react';
import ChatContainer from './components/ChatContainer';
import ChatHeader from './components/ChatHeader';
import ChatInput from './components/ChatInput';
import TypingIndicator from './components/TypingIndicator';
import QuickActions from './components/QuickActions';
import useChat from './hooks/useChat';

function App() {
  const {
    messages,
    isTyping,
    sendMessage,
    clearChat,
  } = useChat();

  return (
    
    
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-gray-900 rounded-2xl shadow-2xl shadow-blue-900/30 overflow-hidden flex flex-col h-[600px] border border-gray-800">
        {/* Header */}
        <ChatHeader onClear={clearChat} />
        
        {/* Chat Messages */}
        <ChatContainer messages={messages} />
        
        {/* Typing Indicator */}
        {isTyping && <TypingIndicator />}
        
        {/* Input Area */}
        <div className="border-t border-gray-200 p-6 bg-gradient-to-br from-gray-900 to-blue-900">
          <ChatInput onSend={sendMessage} disabled={isTyping} />
          <QuickActions onQuickMessage={sendMessage} />
        </div>
        
      </div>
    </div>
  );
}

export default App;