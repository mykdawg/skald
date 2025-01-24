import { create, list } from '../controllers/llms.controller';

export async function llmRoutes(fastify: any, options: any) { 
  fastify.get('/llms', list);
  fastify.post('/llms', create);
}  