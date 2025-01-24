import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { callLLM } from './machine-call';

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

const helloProto = loadPackageDefinition(packageDefinition).hello as any;

async function sayHello(call: any, callback: any) {
  const message = await callLLM({ input: call.request.name, promptName: 'sciFiAuthor' });
  callback(null, { message });
}

function sayGoodnight(call: any, callback: any) {
  const message  = `Goodnight ${call.request.name }!!!`;
  console.log(message);
  callback(null, { message });
}

function main() {
  const server = new grpc.Server();
  server.addService(helloProto.Greeter.service, { 
    sayHello: sayHello,
    sayGoodnight: sayGoodnight,
  });
  server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), (err, port) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`Server listening on port ${port}`);
  });
}

main();

console.log(`HELLO FROM SKALD AI WORKFLOWS SERVER 😎!`)