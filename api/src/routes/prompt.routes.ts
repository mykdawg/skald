import { create, list } from '../controllers/prompts.controller';

export async function promptRoutes(fastify: any, options: any) { 
  fastify.get('/prompts', list);
  fastify.post('/prompts', create);
}  