"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVoice = getVoice;
const cartesia_js_1 = require("@cartesia/cartesia-js");
const { CARTESIA_API_KEY: apiKey } = process.env;
const client = new cartesia_js_1.CartesiaClient({
    apiKey,
});
async function getVoice(transcript) {
    const websocket = client.tts.websocket({
        container: "raw",
        encoding: "pcm_f32le",
        sampleRate: 44100,
    });
    try {
        await websocket.connect();
    }
    catch (error) {
        console.error(`Failed to connect to Cartesia: ${error}`);
        process.exit(1);
    }
    const response = await websocket.send({
        modelId: "sonic-english",
        voice: {
            mode: "id",
            id: "a0e99841-438c-4a64-b679-ae501e7d6091",
        },
        transcript,
    });
    response.on("message", (message) => {
        console.log(message);
    });
}
//# sourceMappingURL=getVoice.js.map