 // AI WORKFLOWS HAVE BEEN MOVED TO SEPARATE CONTAINER -- MIGHT USE A DIFFERENT SERVER TO SERVER PROTOCOL *GRPC*

// import { runAgent } from '../../ai-workflows/index.js';
// export async function collectInput({ threadId:string, message:string }) {
//   try {
//     const output = await runAgent({ threadId, message });
//     const response = output.messages[output.messages.length - 1].content;
//     return Promise.resolve({ response });
//   } catch (err) {
//     throw new Error(err);
//   }
// }

import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { publish } from '../message';

const { AGENT_WORKFLOWS_HOST } = process.env;

const PROTO_PATH = `${__dirname}/protos/hello.proto`

const { loadPackageDefinition } = grpc;
const { loadSync } = protoLoader;
const packageDefinition = loadSync(
  PROTO_PATH, 
  {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
  }
); 

export async function callMachine({ name }: { name: string }) {
  try {
    ;
    const helloProto = loadPackageDefinition(packageDefinition).hello as any;
    const client = new helloProto.Greeter(AGENT_WORKFLOWS_HOST, grpc.credentials.createInsecure());
    await client.sayHello({name}, async function(err:string, response: any
    ) {
      // await getVoice(response.message);
      publish('story', response.message)
    });
    return { message: 'success' };
  } catch (err) {
    console.error(err);
    throw new Error(err as string);
  }
}