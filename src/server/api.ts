
import Anthropic from '@anthropic-ai/sdk';
import { Request, Response } from 'express';

// This function will be used by our API endpoint
export async function handleChatRequest(req: Request, res: Response) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Get the API key from environment variable
  const apiKey = import.meta.env.VITE_ANTHROPIC_API_KEY;
  
  if (!apiKey) {
    console.error('Missing Anthropic API key');
    return res.status(500).json({ error: 'Anthropic API key is not configured' });
  }

  try {
    const anthropic = new Anthropic({
      apiKey,
    });

    const { messages } = req.body;

    const response = await anthropic.messages.create({
      model: 'claude-3-opus-20240229',
      max_tokens: 1024,
      messages: messages.map((msg: any) => ({
        role: msg.role,
        content: msg.content,
      })),
    });

    return res.status(200).json({
      message: response.content[0].text,
    });
  } catch (error) {
    console.error('Error processing chat:', error);
    return res.status(500).json({ error: 'Failed to process chat' });
  }
}
