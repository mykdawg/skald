"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.promptRoutes = promptRoutes;
const promptsController_1 = require("../controllers/promptsController");
async function promptRoutes(fastify, options) {
    fastify.get('/prompts', promptsController_1.list);
    fastify.post('/prompts', promptsController_1.create);
}
//# sourceMappingURL=promptRoutes.js.map