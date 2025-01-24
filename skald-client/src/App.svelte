<script lang="ts">
  import { onMount } from 'svelte';
  import svelteLogo from './assets/svelte.svg';
  import StoryPanel from './lib/StoryPanel.svelte';
  import ChatPanel from './lib/ChatPanel.svelte';

  const { VITE_SKALD_API_URL: SKALD_API_URL } = import.meta.env;

  let words: any = $state([]);

  onMount(async () => {
    const res = await fetch(`${SKALD_API_URL}/words`);
    words = await res.json();
  });
</script>

<main>
  <h1>skald</h1>
  <StoryPanel />
  <div>
    <a href="https://svelte.dev" target="_blank" rel="noreferrer">
      <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
    </a>
  </div>
  <div class="words">
    <ul>
      {#each words as word}
        <li>{word.value}</li>
      {:else}
        <p>loading...</p>
      {/each}
    </ul>
  </div>
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
</style>
