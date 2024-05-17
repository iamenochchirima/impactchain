import { Server as HttpServer } from 'http';
import { Server, Socket } from 'socket.io';
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});


export const setupSocketIO = (server: HttpServer): void => {
  const io = new Server(server, {
    cors: {
      origin: '*',
      methods: ['GET', 'POST'],
    },
    
  });

  io.on('connection', (socket: Socket) => {
    console.log('A user connected');

    socket.on('streamChatGPT', async (msg: string) => {
      try {
        const stream = await openai.chat.completions.create({
          model: "gpt-4o",
          messages: [{ role: "user", content: msg }],
          stream: true,
        });

        socket.emit('chatGPTResponse', { type: 'start', content: null });

        for await (const chunk of stream) {
          const data = chunk.choices[0]?.delta?.content || "";
          socket.emit('chatGPTResponse', { type: 'data', content: data });
        }
        socket.emit('chatGPTResponse', { type: 'end', content: null });
      } catch (error) {
        console.error("Error streaming with OpenAI", error);
        socket.emit('chatGPTError', "An error occurred while streaming with OpenAI.");
      }
    });
    socket.on('disconnect', () => {
      console.log('A user disconnected');
    });
  });
};
