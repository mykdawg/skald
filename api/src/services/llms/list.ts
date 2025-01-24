import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function listLLMs() {
  try {
    const llms = await prisma.llms.findMany();
    return Promise.resolve(llms);
  } catch (err) {
    console.error(err);
    throw new Error(err as string);
  }
}