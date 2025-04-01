import { create, list } from '../controllers/llmsController';

export async function llmRoutes(fastify: any, options: any) { 
  fastify.get('/llms', list);
  fastify.post('/llms', create);
}  