import { useState, useCallback } from 'react';
import { sendMessageToAI,sendMessageToAIStream} from '../services/aiService';
import { formatTimestamp, generateId } from '../utils/helpers';

const useChat = () => {
  const [messages, setMessages] = useState([
    {
      id: generateId(),
      text: "Hello! I'm your AI assistant. How can I help you today?",
      sender: 'bot',
      timestamp: formatTimestamp(new Date()),
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const sendMessage = useCallback(async (text) => {
    // Add user message
    const userMessage = {
      id: generateId(),
      text,
      sender: 'user',
      timestamp: formatTimestamp(new Date()),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);


     // 2️⃣ Create EMPTY bot message (for streaming)
    // const botId = generateId();
    // const botMessage = {
    //   id: botId,
    //   text: '',
    //   sender: 'bot',
    //   timestamp: formatTimestamp(new Date()),
    // };

    // setMessages(prev => [...prev, botMessage]);

    try {
      // Get AI response
      const aiResponse = await sendMessageToAI(text);
      //const aiResponse = sendMessageToAIStream(text);
      
      //Add bot message
      const botMessage = {
        id: generateId(),
        text: aiResponse,
        sender: 'bot',
        timestamp: formatTimestamp(new Date()),
      };
      
      setMessages((prev) => [...prev, botMessage]);

      // for chunk streaming 
      // await sendMessageToAIStream(text, (chunk) => {
      //   setMessages(prev =>
      //     prev.map(msg =>
      //       msg.id === botId
      //         ? { ...msg, text: msg.text + chunk }
      //         : msg
      //     )
      //   );
      // });
    } catch (error) {
      console.error('Error sending message:', error);
      
      const errorMessage = {
        id: generateId(),
        text: 'Sorry, I encountered an error. Please try again.',
        sender: 'bot',
        timestamp: formatTimestamp(new Date()),
      };
      
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  }, []);

  const clearChat = useCallback(() => {
    if (window.confirm('Are you sure you want to clear the chat?')) {
      setMessages([
        {
          id: generateId(),
          text: "Hello! I'm your AI assistant. How can I help you today?",
          sender: 'bot',
          timestamp: formatTimestamp(new Date()),
        },
      ]);
    }
  }, []);

  return {
    messages,
    isTyping,
    sendMessage,
    clearChat,
  };
};

export default useChat;