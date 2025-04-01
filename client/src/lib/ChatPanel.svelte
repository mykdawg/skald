<script lang="ts">
  import Message from './Message.svelte';
  import MessageReceiver from './MessageReceiver.svelte';
</script>

<div class="chat-panel">
  <MessageReceiver subject="hello" />
  <Message />
</div>
