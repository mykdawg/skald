import fastify from 'fastify';
import { publish } from './services/message';
import { callMachine } from './services/machine-call';
import { llmRoutes, promptRoutes } from './routes';
 

const server = fastify({
  logger: true,
})

// register CORS
server.register(import('@fastify/cors'), {});

server.get('/words', async () => {
  return JSON.stringify( [
    { value: 'hello' },
    { value: 'world' },
    { value: 'i' },
    { value: 'love' },
    { value: 'u' },
    { value: '❤️❤️❤️' },
  ])
})

server.post('/message', async (req: any, res: any) => {
  const { subject, data } = req.body as { subject: string, data: string };
  console.log(`PUBLISHING MESSAGE TO ${subject} SUBJECT`);
  console.log(data);
  const result = await publish(subject, data);  
  res.send(JSON.stringify(result));
});

server.post('/story' , async (req: any, res: any) => {
  const { name } = req.body as { name: string };
  console.log(`CALLING MACHINE`);
  const result = await callMachine({ name });
  res.send(JSON.stringify(result));
});

server.addHook('onSend', async (_request, reply) => {
  reply.headers({
    'Content-Type': 'application/json',
  });
});

// register routes
server.register(llmRoutes);
server.register(promptRoutes);

server.listen({ port: 3000, host: '0.0.0.0' }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})
