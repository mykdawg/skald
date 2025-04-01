<script>
  export let code = ''; // Text to be displayed as code
</script>

<div class="code-panel">
  <pre><code>{code}</code></pre>
</div>

<style>
  .code-panel {
    background-color: #1e1e1e;
    border-radius: 4px;
    padding: 1rem;
    overflow-x: auto;
  }

  pre {
    margin: 0;
    font-family: 'Consolas', 'Monaco', 'Courier New', monospace;
  }

  code {
    color: #d4d4d4;
    font-size: 14px;
    line-height: 1.5;
    white-space: pre-wrap;
    word-break: break-all;
  }
</style></div>