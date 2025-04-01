"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listPrompts = listPrompts;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function listPrompts() {
    try {
        const prompts = await prisma.prompts.findMany();
        return Promise.resolve(prompts);
    }
    catch (err) {
        console.error(err);
        throw new Error(err);
    }
}
//# sourceMappingURL=list.js.map