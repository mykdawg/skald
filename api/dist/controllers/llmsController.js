"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = create;
exports.list = list;
const llms_1 = require("../services/llms");
async function create(req, res) {
    try {
        const { name } = req.body;
        const llm = await (0, llms_1.createLLM)({ name });
        return res.send(llm);
    }
    catch (err) {
        return res.status(500).send;
    }
}
async function list(_req, res) {
    try {
        const llms = await (0, llms_1.listLLMs)();
        return res.status(200).send(llms);
    }
    catch (err) {
        return res.status(500).send;
    }
    return [];
}
//# sourceMappingURL=llmsController.js.map