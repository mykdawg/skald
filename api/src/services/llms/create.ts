import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export interface CreateLLMParam {
  name: string;
}

export async function createLLM({ name }: CreateLLMParam) {
  try {
    const llm = await prisma.llms.create({
      data: {
        name,
      },
    });
    return Promise.resolve(llm);
  } catch (err) {
    console.error(err);
    throw new Error(err as string);
  }
}