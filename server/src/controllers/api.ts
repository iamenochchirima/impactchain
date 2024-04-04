import axios from "axios";
import { Request, Response } from "express";
require('dotenv').config();

export const chatGPT = async (req: Request, res: Response) => {
    try {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo',
                messages: [{ role: 'user', content: 'How are you!?' }],
                max_tokens: 100,
            }),
        }
       const response = await fetch('https://api.openai.com/v1/chat/completions', options)
         const data = await response.json()
        res.send(data)
      } catch (error: any) {
        res.status(500).json({ message: "Error communicating with OpenAI", error: error?.response?.data });
      } 
};