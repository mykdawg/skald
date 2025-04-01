"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const message_1 = require("./services/message");
const machine_call_1 = require("./services/machine-call");
const routes_1 = require("./routes");
const server = (0, fastify_1.default)({
    logger: true,
});
server.register(import('@fastify/cors'), {});
server.get('/words', async () => {
    return JSON.stringify([
        { value: 'hello' },
        { value: 'world' },
        { value: 'i' },
        { value: 'love' },
        { value: 'u' },
        { value: '❤️❤️❤️' },
    ]);
});
server.post('/message', async (req, res) => {
    const { subject, data } = req.body;
    console.log(`PUBLISHING MESSAGE TO ${subject} SUBJECT`);
    console.log(data);
    const result = await (0, message_1.publish)(subject, data);
    res.send(JSON.stringify(result));
});
server.post('/story', async (req, res) => {
    const { name } = req.body;
    console.log(`CALLING MACHINE`);
    const result = await (0, machine_call_1.callMachine)({ name });
    res.send(JSON.stringify(result));
});
server.addHook('onSend', async (_request, reply) => {
    reply.headers({
        'Content-Type': 'application/json',
    });
});
server.register(routes_1.llmRoutes);
server.register(routes_1.promptRoutes);
server.listen({ port: 3000, host: '0.0.0.0' }, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server listening at ${address}`);
});
//# sourceMappingURL=server.js.map