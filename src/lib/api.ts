
import { Message } from '@anthropic-ai/sdk';

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

// Get API key from environment variable
const getApiKey = () => {
  const apiKey = import.meta.env.VITE_ANTHROPIC_API_KEY;
  if (!apiKey) {
    throw new Error('Anthropic API key is not configured. Please set VITE_ANTHROPIC_API_KEY environment variable.');
  }
  return apiKey;
};

export async function startConversation(articleContent: string, userMessage: string): Promise<ChatMessage> {
  try {
    // Direct API call to Anthropic
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': getApiKey(),
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-3-opus-20240229',
        max_tokens: 1024,
        messages: [
          {
            role: 'system',
            content: `You are a helpful AI assistant discussing the following article with a user. Here's the article content:\n\n${articleContent}\n\nPlease help the user understand the article better by answering their questions and providing relevant insights.`
          },
          {
            role: 'user',
            content: userMessage
          }
        ],
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('Anthropic API error:', errorData);
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();
    return {
      role: 'assistant',
      content: data.content[0].text
    };
  } catch (error) {
    console.error('Error starting conversation:', error);
    throw error;
  }
}

export async function continueConversation(messages: ChatMessage[]): Promise<ChatMessage> {
  try {
    // Format messages for Anthropic API
    const formattedMessages = messages.map(msg => ({
      role: msg.role,
      content: msg.content
    }));

    // Direct API call to Anthropic
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': getApiKey(),
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-3-opus-20240229',
        max_tokens: 1024,
        messages: formattedMessages,
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('Anthropic API error:', errorData);
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();
    return {
      role: 'assistant',
      content: data.content[0].text
    };
  } catch (error) {
    console.error('Error continuing conversation:', error);
    throw error;
  }
}
