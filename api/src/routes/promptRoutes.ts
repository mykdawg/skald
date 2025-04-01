import { create, list } from '../controllers/promptsController';

export async function promptRoutes(fastify: any, options: any) { 
  fastify.get('/prompts', list);
  fastify.post('/prompts', create);
}  