import { CartesiaClient } from "@cartesia/cartesia-js";

const { CARTESIA_API_KEY: apiKey } = process.env;

const client= new CartesiaClient({
    apiKey,
});

export async function getVoice(transcript: string) {
  // // Initialize the WebSocket. Make sure the output format you specify is supported.
  const websocket = client.tts.websocket({
      container: "raw",
      encoding: "pcm_f32le",
      sampleRate: 44100,
  });

  try {
      await websocket.connect();
  } catch (error) {
      console.error(`Failed to connect to Cartesia: ${error}`);
      process.exit(1);
  }

  // Create a stream.
  const response = await websocket.send({
      modelId: "sonic-english",
      voice: {
          mode: "id",
          id: "a0e99841-438c-4a64-b679-ae501e7d6091",
      },
      transcript,
      // The WebSocket sets output_format on your behalf.
  });

  // Access the raw messages from the WebSocket.
  response.on("message", (message) => {
      // Raw message.
      console.log(message);
  });

  // const res = await client.tts.bytes({
  //   modelId: "sonic-english",
  //   voice: {
  //     mode: "id",
  //     id: "a0e99841-438c-4a64-b679-ae501e7d6091",
  //   },
  //   language: "en",
  //   transcript,
  //   outputFormat: {
  //     container: "raw",
  //     sampleRate: 44100,
  //     encoding: "pcm_f32le",
  // },
  // });

}
