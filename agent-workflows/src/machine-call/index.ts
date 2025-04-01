import { ChatOpenAI } from '@langchain/openai';
import { codingAssistant, sciFiAuthor, screenplayWriter } from './prompts';

// import {
//   START,
//   END,
//   MessagesAnnotation,
//   StateGraph,
//   MemorySaver,
// } from '@langchain/langgraph';
// import { initModel } from '../../../../helpers/agentic/index.js';

// const llm = initModel({
//   model: 'anthropic/claude-3.5-sonnet',
// });

// // Define the function that calls the model
// const callModel = async (state) => {
//   const response = await llm.invoke(state.messages);
//   return { messages: response };
// };

// // Define a new graph
// const workflow = new StateGraph(MessagesAnnotation)
//   // Define the node and edge
//   .addNode('model', callModel)
//   .addEdge(START, 'model')
//   .addEdge('model', END);

// // Add memory
// const memory = new MemorySaver();
// const app = workflow.compile({ checkpointer: memory });

// export async function runAgent({ message, threadId }) {
//   const config = { configurable: { thread_id: threadId } };

//   const input = [
//     {
//       role: 'user',
//       content: message,
//     },
//   ];

//   const output = await app.invoke({ messages: input }, config);

//   return output;
// }
const { 
  AGENT_WORKFLOWS_LLM_API_KEY, 
  AGENT_WORKFLOWS_LLM_HOST, 
  AGENT_WORKFLOWS_LLM_MODEL,
  AGENT_WORKFLOWS_LLM_TEMPERATURE 
} = process.env;

const model = new ChatOpenAI(
  {
    openAIApiKey: AGENT_WORKFLOWS_LLM_API_KEY,
    modelName: AGENT_WORKFLOWS_LLM_MODEL,
    temperature: Number(AGENT_WORKFLOWS_LLM_TEMPERATURE),
  },
  {
    baseURL: AGENT_WORKFLOWS_LLM_HOST
  }  
);

const prompts = {
  codingAssistant, 
  sciFiAuthor,
  screenplayWriter
};

export async function callLLM({input, promptName}): Promise<any> {
  const prompt = prompts[promptName](input);
  const res = await model.invoke([['user', prompt]])
  return res.content;
}