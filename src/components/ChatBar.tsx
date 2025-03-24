import React, { useState } from 'react';
import { Send, Bot } from 'lucide-react';
import { toast } from 'sonner';
import { useChat } from '../hooks/useChat';
import { ChatMessage } from '../lib/api';

interface ChatBarProps {
  articleId: string;
  articleContent: string;
}

const ChatBar: React.FC<ChatBarProps> = ({ articleId, articleContent }) => {
  const [message, setMessage] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const { messages, isLoading, sendMessage } = useChat(articleContent);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!message.trim() || isLoading) return;
    
    toast('Message sent', {
      description: 'Claude is processing your message...',
    });
    
    await sendMessage(message);
    setMessage('');
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const renderMessage = (msg: ChatMessage, index: number) => (
    <div key={index} className="flex items-start gap-3 mb-3">
      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
        <Bot size={16} className="text-primary" />
      </div>
      <div className="bg-primary/5 p-3 rounded-lg rounded-tl-none max-w-[85%]">
        <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
      </div>
    </div>
  );

  return (
    <div className={`chat-bar ${isExpanded ? 'h-96' : 'h-auto'}`}>
      {isExpanded && (
        <div className="mb-4 p-4 bg-secondary rounded-lg animate-fade-in overflow-y-auto h-72">
          {messages.length === 0 ? (
            <div className="flex items-start gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Bot size={16} className="text-primary" />
              </div>
              <div className="bg-primary/5 p-3 rounded-lg rounded-tl-none max-w-[85%]">
                <p className="text-sm">
                  Hello! I'm Claude, your AI assistant. I've read this article and can help answer questions or provide additional context about this topic. What would you like to know?
                </p>
              </div>
            </div>
          ) : (
            messages.map(renderMessage)
          )}
          {isLoading && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Bot size={16} />
              <span>Claude is typing...</span>
            </div>
          )}
        </div>
      )}
      
      <div className="flex items-center gap-3">
        <button 
          onClick={toggleExpand}
          className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 transition-all hover:bg-primary/20"
          aria-label={isExpanded ? "Collapse chat" : "Expand chat"}
        >
          <Bot size={20} className="text-primary" />
        </button>
        
        <form onSubmit={handleSubmit} className="flex-1">
          <div className="chat-input-container">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Talk to Claude about this article..."
              className="chat-input"
              disabled={isLoading}
            />
            <button 
              type="submit" 
              className="chat-button"
              aria-label="Send message"
              disabled={!message.trim() || isLoading}
            >
              <Send size={18} className={message.trim() && !isLoading ? 'text-primary' : 'text-muted-foreground'} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChatBar;
