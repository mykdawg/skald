import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export interface CreatePromptParam {
  name: string;
  prompt: string;
}

export async function createPrompt({ name, prompt }: CreatePromptParam) {
  try {
    const promptData = await prisma.prompts.create({
      data: {
        name,
        prompt,
      },
    });
    return Promise.resolve(promptData);
  } catch (err) {
    console.error(err);
    throw new Error(err as string);
  }
}