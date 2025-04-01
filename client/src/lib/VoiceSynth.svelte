<script lang="ts">
  // If you're using the client in the browser, you can control audio playback using our WebPlayer:
  import { WebPlayer } from '@cartesia/cartesia-js';

  console.log('Playing stream...');

  let { response } = $props();

  function playStream() {
    // Create a Player object.
    const player = new WebPlayer();
    console.log(response);
    // Play the audio. (`response` includes a custom Source object that the Player can play.)
    // The call resolves when the audio finishes playing.
    player.play(response.source).then(() => {
      console.log('Done playing.');
    });
  }

  // Play the audio. (`response` includes a custom Source object that the Player can play.)
  // The call resolves when the audio finishes playing.
  // await player.play(response.source);

  console.log('Done playing.');
</script>
