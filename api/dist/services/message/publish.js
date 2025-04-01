"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.publish = publish;
const transport_node_1 = require("@nats-io/transport-node");
const { MESSAGING_HOST } = process.env;
async function publish(subject, data) {
    try {
        const nc = await (0, transport_node_1.connect)({
            servers: MESSAGING_HOST
        });
        nc.publish(subject, `${data}`);
        return { message: 'success' };
    }
    catch (err) {
        console.error(err);
        throw new Error(err);
    }
}
//# sourceMappingURL=publish.js.map