import { createLLM, listLLMs } from "../services/llms";

export async function create(req: any, res: any):Promise<void> {
  try {
    const { name } = req.body;
    const llm = await createLLM({ name });
    return res.send(llm);
  } catch (err) {
    return res.status(500).send
  }
}

export async function list(_req: any, res: any): Promise<any> {
  try {
    const llms = await listLLMs();
    return res.status(200).send(llms);
  } catch (err) {
    return res.status(500).send
  }
  return [];
}
