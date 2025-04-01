"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createLLM = createLLM;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function createLLM({ name }) {
    try {
        const llm = await prisma.llms.create({
            data: {
                name,
            },
        });
        return Promise.resolve(llm);
    }
    catch (err) {
        console.error(err);
        throw new Error(err);
    }
}
//# sourceMappingURL=create.js.map