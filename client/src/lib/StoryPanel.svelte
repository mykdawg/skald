<script lang="ts">
  import Message from './Message.svelte';
  import MessageReceiver from './MessageReceiver.svelte';
</script>

<div class="story-panel">
  <MessageReceiver subject="story" />
  <Message />
</div>
