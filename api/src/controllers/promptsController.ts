import { createPrompt, listPrompts } from "../services/prompts";

export async function create(req: any, res: any):Promise<void> {
  try {
    const { name, prompt } = req.body;
    const promptRes = await createPrompt({ name, prompt });
    return res.send(promptRes);
  } catch (err) {
    return res.status(500).send
  }
}

export async function list(_req: any, res: any): Promise<any> {
  try {
    const prompts = await listPrompts();
    return res.status(200).send(prompts);
  } catch (err) {
    return res.status(500).send
  }
  return [];
}
