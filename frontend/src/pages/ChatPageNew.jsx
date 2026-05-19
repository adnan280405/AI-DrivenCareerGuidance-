import React, { useState, useRef, useEffect } from 'react';
import { sendChatMessage } from '../services/api';
import '../styles/chat-new.css';

export default function ChatPageNew() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: 'Hi! I\'m PathIQ, your AI career advisor. How can I help you today?',
      sender: 'assistant'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);
  const chatLogRef = useRef(null);

  const scrollToBottom = () => {
    if (chatLogRef.current) {
      chatLogRef.current.scrollTop = chatLogRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputValue.trim() || loading) return;

    const userMessage = inputValue.trim();
    setInputValue('');

    setMessages((prev) => [
      ...prev,
      { id: Date.now(), text: userMessage, sender: 'user' }
    ]);

    setLoading(true);
    try {
      const response = await sendChatMessage(userMessage);
      const assistantMessage = response.reply || response.message || 'I understood your message. How can I help further?';

      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, text: assistantMessage, sender: 'assistant' }
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          text: 'Sorry, I encountered an error. Please try again.',
          sender: 'assistant'
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="chat-page">
      <div className="chat-header">
        <h2>AI Career Advisor</h2>
        <p>Ask anything about career guidance, skills, or interview preparation</p>
      </div>

      <div className="chat-container">
        <div className="chat-log" ref={chatLogRef}>
          {messages.map((message) => (
            <div key={message.id} className={`message ${message.sender}`}>
              <div className="message-bubble">
                {message.text}
              </div>
            </div>
          ))}
          {loading && (
            <div className="message assistant">
              <div className="message-bubble">
                <div style={{ display: 'flex', gap: '4px' }}>
                  <span style={{ animation: 'pulse 1s ease-in-out infinite' }}>●</span>
                  <span style={{ animation: 'pulse 1s ease-in-out infinite', animationDelay: '0.2s' }}>●</span>
                  <span style={{ animation: 'pulse 1s ease-in-out infinite', animationDelay: '0.4s' }}>●</span>
                </div>
              </div>
            </div>
          )}
        </div>

        <form className="chat-input-area" onSubmit={handleSendMessage}>
          <div className="chat-input">
            <textarea
              className="chat-input-field"
              placeholder="Type your question..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSendMessage(e);
                }
              }}
              disabled={loading}
            />
            <button
              type="submit"
              className="btn btn-primary chat-send-btn"
              disabled={loading || !inputValue.trim()}
            >
              Send
            </button>
          </div>
        </form>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}

