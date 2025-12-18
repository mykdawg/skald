<script lang="ts">
  import { messages, showOverlay } from '../store';
  import TextEditor from './TextEditor.svelte';
  import VoiceRecorder from './VoiceRecorder.svelte';

  const { VITE_SKALD_API_URL: SKALD_API_URL } = import.meta.env;

  // async function sendMessage() {
  //   const timestamp = new Date().toISOString();
  //   const res = await fetch(`${SKALD_API_URL}/message`, {
  //     method: 'POST',
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       "subject": "hello",
  //       "data": `[${timestamp}] -> hi from SVELTE CLIENT 😳😳😳😳😳! `
  //     }),
  //   })
  //   console.log(res);
  // }

  let subject = '';
  let message = '';

  async function sendMessage() {
    showOverlay.set(true);
    try {
      const res = await fetch(`${SKALD_API_URL}/story`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          subject: subject,
          name: `${message}`,
        }),
      });
    } catch (error) {
      console.error('Error sending message:', error);
    }
  }

  function handleTranscription(event: any) {
    message = message + event.transcript;
    console.log('Transcription:', message);
  }
</script>

<form on:submit|preventDefault={sendMessage}>
  <TextEditor bind:value={message} />
  <VoiceRecorder transcribe={handleTranscription} />
  <button type="submit">Submit</button>
</form>

<style>
  form {
    display: flex;
    flex-direction: column;
    width: 400px;
    margin: 0 10px;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 8px;
  }

  button {
    padding: 0.75rem;
    border: none;
    border-radius: 4px;
    background-color: #007bff;
    color: white;
    font-size: 1rem;
    cursor: pointer;
    margin: 0.5rem 0;
  }

  button:hover {
    background-color: #0056b3;
  }
</style>
