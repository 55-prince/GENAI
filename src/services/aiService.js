import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ 
  apiKey: process.env.REACT_APP_GEMINI_API_KEY 
});

export const sendMessageToAI = async (message) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: message,
      config: {
      systemInstruction: "You have only give answer in short 2 or 3 line only .",
    },
    });

    return response.text;
  } catch (error) {
    console.error('AI Service Error:', error);
    throw new Error('Failed to get AI response');
  }
};

// For streaming responses
export const sendMessageToAIStream = async (message, onChunk) => {
  try {
    const response = await ai.models.generateContentStream({
      model: 'gemini-2.5-flash',
      contents: message,
    });

    let fullText = '';
    for await (const chunk of response) {
      fullText += chunk.text;
      onChunk(chunk.text);
    }

    return fullText;
  } catch (error) {
    console.error('AI Service Error:', error);
    throw new Error('Failed to get AI response');
  }
};