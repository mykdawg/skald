"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.llmRoutes = llmRoutes;
const llmsController_1 = require("../controllers/llmsController");
async function llmRoutes(fastify, options) {
    fastify.get('/llms', llmsController_1.list);
    fastify.post('/llms', llmsController_1.create);
}
//# sourceMappingURL=llmsRoutes.js.map