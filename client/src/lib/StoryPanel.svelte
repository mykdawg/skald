<script lang="ts">
  import Message from './Message.svelte';
  import MessageReceiver from './MessageReceiver.svelte';
</script>

<div class="story-panel">
  <div class="column">
    <MessageReceiver subject="story" />
  </div>
  <div class="column">
    <Message />
  </div>
</div>

<style>
  .story-panel .column {
    float: left;
    width: 50%;
  }
</style>
