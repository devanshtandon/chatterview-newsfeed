import { Message } from '@anthropic-ai/sdk';

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export async function startConversation(articleContent: string, userMessage: string): Promise<ChatMessage> {
  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messages: [
          {
            role: 'system',
            content: `You are a helpful AI assistant discussing the following article with a user. Here's the article content:\n\n${articleContent}\n\nPlease help the user understand the article better by answering their questions and providing relevant insights.`
          },
          {
            role: 'user',
            content: userMessage
          }
        ]
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to start conversation');
    }

    const data = await response.json();
    return {
      role: 'assistant',
      content: data.message
    };
  } catch (error) {
    console.error('Error starting conversation:', error);
    throw error;
  }
}

export async function continueConversation(messages: ChatMessage[]): Promise<ChatMessage> {
  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ messages }),
    });

    if (!response.ok) {
      throw new Error('Failed to continue conversation');
    }

    const data = await response.json();
    return {
      role: 'assistant',
      content: data.message
    };
  } catch (error) {
    console.error('Error continuing conversation:', error);
    throw error;
  }
} 