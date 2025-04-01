"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listLLMs = listLLMs;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function listLLMs() {
    try {
        const llms = await prisma.llms.findMany();
        return Promise.resolve(llms);
    }
    catch (err) {
        console.error(err);
        throw new Error(err);
    }
}
//# sourceMappingURL=list.js.map