import Anthropic from '@anthropic-ai/sdk';
import { NextApiRequest, NextApiResponse } from 'next';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
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