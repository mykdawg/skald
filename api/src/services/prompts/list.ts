import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function listPrompts() {
  try {
    const prompts = await prisma.prompts.findMany();
    return Promise.resolve(prompts);
  } catch (err) {
    console.error(err);
    throw new Error(err as string);
  }
}