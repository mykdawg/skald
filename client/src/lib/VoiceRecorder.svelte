<script lang="ts">
  let { transcribe } = $props();
  let recognition: SpeechRecognition;

  if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
    recognition = new webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      transcribe({ transcript });
    };
  } else {
    console.error('Speech recognition not supported in this browser.');
  }

  function startRecording() {
    recognition.start();
  }

  function stopRecording() {
    recognition.stop();
  }
</script>

<div class="voice-recorder">
  <button type="button" onclick={startRecording}>Start Recording</button>
  <button type="button" onclick={stopRecording}>Stop Recording</button>
</div>

<style>
  .voice-recorder {
    display: flex;
    gap: 1rem;
  }

  button {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    background-color: #007bff;
    color: white;
    cursor: pointer;
    margin: 0.5rem 0;
  }

  button:hover {
    background-color: #0056b3;
  }
</style>
