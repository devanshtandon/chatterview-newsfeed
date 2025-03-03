
import React, { useState } from 'react';
import { Send, Bot } from 'lucide-react';
import { toast } from 'sonner';

interface ChatBarProps {
  articleId: string;
}

const ChatBar: React.FC<ChatBarProps> = ({ articleId }) => {
  const [message, setMessage] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!message.trim()) return;
    
    toast('Message sent', {
      description: 'AI is processing your message...',
      duration: 2000,
    });
    
    // This would actually send the message to the AI backend
    console.log('Message sent:', message, 'Article ID:', articleId);
    
    setMessage('');
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`chat-bar ${isExpanded ? 'h-60' : 'h-auto'}`}>
      {isExpanded && (
        <div className="mb-4 p-4 bg-secondary rounded-lg animate-fade-in overflow-y-auto h-40">
          <div className="flex items-start gap-3 mb-3">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Bot size={16} className="text-primary" />
            </div>
            <div className="bg-primary/5 p-3 rounded-lg rounded-tl-none max-w-[85%]">
              <p className="text-sm">
                Hello! I'm your AI assistant. I've read this article and can help answer questions or provide additional context about this topic. What would you like to know?
              </p>
            </div>
          </div>
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
              placeholder="Ask AI about this article..."
              className="chat-input"
            />
            <button 
              type="submit" 
              className="chat-button"
              aria-label="Send message"
              disabled={!message.trim()}
            >
              <Send size={18} className={message.trim() ? 'text-primary' : 'text-muted-foreground'} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChatBar;
