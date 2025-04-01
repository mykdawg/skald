<script lang="ts">
  import { onMount } from 'svelte';
  import Quill from 'quill';
  import 'quill/dist/quill.snow.css';

  let { value = $bindable() } = $props();
  let editorContainer: HTMLDivElement;
  let quill: Quill;

  onMount(() => {
    quill = new Quill(editorContainer, {
      theme: 'snow',
      modules: {
        toolbar: [
          [{ header: [1, 2, false] }],
          ['bold', 'italic', 'underline'],
          ['link', 'image'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          ['clean'],
        ],
      },
    });

    quill.on('text-change', () => {
      value = quill.root.innerHTML;
    });

    quill.root.innerHTML = value || '';
  });

  $effect(() => {
    if (quill.root.innerHTML !== value) {
      quill.root.innerHTML = value || '';
    }
  });
</script>

<div bind:this={editorContainer} class="editor-container"></div>

<style>
  .editor-container {
    height: 300px;
  }
</style>
