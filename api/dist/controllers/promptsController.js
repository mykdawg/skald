"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = create;
exports.list = list;
const prompts_1 = require("../services/prompts");
async function create(req, res) {
    try {
        const { name, prompt } = req.body;
        const promptRes = await (0, prompts_1.createPrompt)({ name, prompt });
        return res.send(promptRes);
    }
    catch (err) {
        return res.status(500).send;
    }
}
async function list(_req, res) {
    try {
        const prompts = await (0, prompts_1.listPrompts)();
        return res.status(200).send(prompts);
    }
    catch (err) {
        return res.status(500).send;
    }
    return [];
}
//# sourceMappingURL=promptsController.js.map