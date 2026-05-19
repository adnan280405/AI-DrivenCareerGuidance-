import React, { useEffect, useRef, useState } from 'react';
import { sendChatMessage } from '../services/api';
import { Button, Spinner, EmptyState, Card, InputGroup } from '../components/UIComponents';
import '../styles/chat-modern.css';

function ModernChat() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      role: 'assistant',
      text: 'Hi! 👋 I\'m your AI Career Advisor. Ask me about job searches, resume tips, interview prep, or anything career-related. I\'m here to help!',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMessage = input.trim();
    setInput('');
    setError('');

    // Add user message
    const userMsgId = Date.now();
    setMessages((prev) => [
      ...prev,
      {
        id: userMsgId,
        role: 'user',
        text: userMessage,
        timestamp: new Date(),
      },
    ]);

    setLoading(true);

    try {
      const response = await sendChatMessage(userMessage);
      const aiText = response?.reply || response?.message || response || 'I couldn\'t generate a response. Please try again.';

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          role: 'assistant',
          text: aiText,
          timestamp: new Date(),
        },
      ]);
    } catch (err) {
      setError(err.message || 'Failed to send message. Please try again.');
      
      // Add error message to chat
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          role: 'assistant',
          text: `Sorry, I encountered an error: ${err.message}. Please try again.`,
          timestamp: new Date(),
          isError: true,
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modern-chat-page">
      <div className="chat-container">
        {/* Header */}
        <div className="chat-header">
          <div className="chat-header-content">
            <h1>AI Career Advisor</h1>
            <p>Get personalized career guidance powered by AI</p>
          </div>
        </div>

        {/* Messages */}
        <div className="chat-messages">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`message-wrapper message-${message.role}`}
            >
              <div className={`message-bubble ${message.isError ? 'message-error' : ''}`}>
                <p>{message.text}</p>
              </div>
              <span className="message-time">
                {message.timestamp?.toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </span>
            </div>
          ))}

          {loading && (
            <div className="message-wrapper message-assistant">
              <div className="message-bubble message-loading">
                <Spinner size="sm" />
                <span>Thinking...</span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Error Message */}
        {error && (
          <div className="chat-error">
            <p>⚠️ {error}</p>
          </div>
        )}

        {/* Input Form */}
        <form className="chat-form" onSubmit={handleSend}>
          <div className="chat-input-wrapper">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything about your career..."
              className="chat-input"
              disabled={loading}
              aria-label="Chat message input"
            />
            <Button
              variant="primary"
              type="submit"
              disabled={!input.trim() || loading}
              className="chat-send-btn"
            >
              {loading ? 'Sending...' : 'Send'}
            </Button>
          </div>
          <div className="chat-tips">
            <span>💡 Tip: Ask about resumes, interviews, skill gaps, or career paths</span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModernChat;


