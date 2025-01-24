<script lang="ts">
  import { wsconnect } from '@nats-io/nats-core';
  import { onMount } from 'svelte';
  import { messages, showOverlay } from '../store';

  let messagePanel: HTMLDivElement;
  const { subject } = $props();

  async function wsConnect() {
    const nc = await wsconnect({ servers: 'ws://localhost:8080' });
    const sub = nc.subscribe(subject, {
      callback: (err, msg) => {
        if (err) {
          console.error(err);
        } else {
          messages.update((currentMessages) => [
            ...currentMessages,
            new TextDecoder().decode(msg.data),
          ]);
          showOverlay.set(false);
        }
      },
    });
  }

  onMount(() => {
    wsConnect();
  });

  $effect(() => {
    if (!messagePanel) return;

    $messages.length;

    if (messagePanel) {
      messagePanel.scrollTop = messagePanel.scrollHeight;
    }
  });
</script>

<div bind:this={messagePanel} class="message-panel">
  <ul>
    {#each $messages as message}
      <li class="rainbow-text">
        {@html message.replace(/\n/g, '<br>')}
      </li>
    {/each}
  </ul>
</div>

{#if $showOverlay}
  <div class="overlay">
    <div class="overlay-content">
      <p>Sending message...</p>
    </div>
  </div>
{/if}

<style>
  .message-panel {
    border: 1px solid #ccc;
    border-radius: 8px;
    height: 300px;
    padding: 1rem;
    margin: 0 auto 1rem;
    overflow-y: auto;
    width: 800px;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    padding: 0.5rem;
    text-align: left;
  }

  /* .rainbow-text {
    background: linear-gradient(
      90deg,
      #cc9999,
      #cc9966,
      #cccc99,
      #99cc99,
      #9999cc,
      #b299cc,
      #cc99cc
    );
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  } */

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }

  .overlay-content {
    background: #000;
    padding: 2rem;
    border-radius: 8px;
    font-size: 1.5rem;
    text-align: center;
  }
</style>
