"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPrompt = createPrompt;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function createPrompt({ name, prompt }) {
    try {
        const promptData = await prisma.prompts.create({
            data: {
                name,
                prompt,
            },
        });
        return Promise.resolve(promptData);
    }
    catch (err) {
        console.error(err);
        throw new Error(err);
    }
}
//# sourceMappingURL=create.js.map