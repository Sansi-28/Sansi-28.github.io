import React, { useState, useEffect, useRef } from 'react';
import PixelatedContainer from './PixelatedContainer.js';
import { GoogleGenAI } from '@google/genai';

const AiAssistant = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [context, setContext] = useState(null);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    // Fetch context file only once
    fetch('/context.txt')
      .then(response => response.text())
      .then(text => setContext(text))
      .catch(err => console.error("Failed to load context:", err));
    
    // Initial message from AI
    setMessages([
        { sender: 'ai', text: "Greetings! I'm PixelBot. Ask me anything about Santosh's skills or projects!" }
    ]);
  }, []);

  useEffect(() => {
    if (isOpen) {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);
  
 const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading || !context) return;

    const userMessage = { sender: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const apiKey = process.env.API_KEY;

      if (!apiKey) {
        const apiKeyError = { sender: 'ai', text: "SYSTEM ERROR: Gemini API key has not been configured for this deployment." };
        setMessages(prev => [...prev, apiKeyError]);
        setIsLoading(false);
        return;
      }

      // Correctly use the imported class name 'GoogleGenAI'
      const ai = new GoogleGenAI({ apiKey: apiKey });

      const systemInstruction = `You are PixelBot, a helpful AI assistant for Santosh's portfolio. Your personality is friendly, a bit quirky, and retro, like a classic video game character. Answer the user's question based on the following context. If the answer is not in the context, say "I'm sorry, I don't have that information in my knowledge base. Maybe ask me about Santosh's skills or projects! Or you can contact Santosh through mail". Keep your answers concise and format them cleanly. Also never forget to respond the user if he is giving inputs like a salutation or greeting. Note: Always go through the context before responding.

CONTEXT:
---
${context}
---`;
      
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: [{ parts: [{ text: input }] }],
        config: {
            systemInstruction: systemInstruction,
        }
      });
      
      const text = response.text;

      const aiMessage = { sender: 'ai', text };
      setMessages(prev => [...prev, aiMessage]);

    } catch (error) {
      console.error("Error calling Gemini API:", error);
      const friendlyError = "SYSTEM ERROR: Could not connect to the mothership. Please check your API key and try again later.";
      const errorMessage = { sender: 'ai', text: friendlyError };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };
  
  if (!isOpen) return null;

  return (
    <div className="fixed bottom-24 right-5 md:right-8 z-50 animate-appear">
      <PixelatedContainer className="w-[320px] h-[450px] sm:w-[350px] sm:h-[500px]">
        <div className="flex flex-col h-full p-2">
            {/* Header */}
            <div className="flex justify-between items-center pb-2 border-b-2 border-pixel-blue mb-2">
                <h3 className="text-sm text-pixel-yellow">PIXELBOT v1.0</h3>
                <button onClick={onClose} className="text-white hover:text-pixel-pink transition-colors text-lg">
                    &times;
                </button>
            </div>
            
            {/* Messages */}
            <div className="flex-grow overflow-y-auto pr-2 space-y-3 text-xs">
                {messages.map((msg, index) => (
                    <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`p-2 max-w-[85%] ${msg.sender === 'user' ? 'bg-pixel-green text-pixel-bg' : 'bg-pixel-bg shadow-pixel-inset'}`}>
                           <p className="leading-relaxed whitespace-pre-wrap text-left">{msg.text}</p>
                        </div>
                    </div>
                ))}
                 {isLoading && (
                    <div className="justify-start">
                        <div className="p-2 bg-pixel-bg shadow-pixel-inset inline-block">
                           <p className="leading-relaxed">
                             <span className="animate-blink inline-block border-r-2 border-white w-1">&nbsp;</span>
                             Thinking...
                           </p>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* Input Form */}
            <form onSubmit={handleSubmit} className="flex gap-2 pt-2 mt-auto border-t-2 border-pixel-blue">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask a question..."
                    disabled={isLoading}
                    className="flex-grow bg-pixel-bg border-2 border-pixel-border p-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-pixel-pink shadow-pixel-inset"
                />
                <button type="submit" disabled={isLoading} className="bg-pixel-pink text-white py-2 px-3 border-2 border-pixel-border shadow-pixel-sm hover:bg-pixel-yellow hover:text-pixel-bg active:translate-y-0.5 active:translate-x-0.5 active:shadow-none transition-all disabled:opacity-50">
                   &gt;
                </button>
            </form>
        </div>
      </PixelatedContainer>
    </div>
  );
};

export default AiAssistant;