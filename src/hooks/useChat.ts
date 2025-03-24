import { useState, useCallback } from 'react';
import { ChatMessage, startConversation, continueConversation } from '../lib/api';
import { toast } from 'sonner';

export function useChat(articleContent: string) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = useCallback(async (content: string) => {
    try {
      setIsLoading(true);
      
      // Add user message to the chat
      const userMessage: ChatMessage = { role: 'user', content };
      setMessages(prev => [...prev, userMessage]);

      // If this is the first message, start a new conversation
      const response = messages.length === 0
        ? await startConversation(articleContent, content)
        : await continueConversation([...messages, userMessage]);

      // Add Claude's response to the chat
      setMessages(prev => [...prev, response]);
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error('Failed to send message', {
        description: 'Please try again later',
      });
    } finally {
      setIsLoading(false);
    }
  }, [messages, articleContent]);

  return {
    messages,
    isLoading,
    sendMessage,
  };
} 