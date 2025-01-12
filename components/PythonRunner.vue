<template>
  <div class="python-runner">
    <div ref="codeContent" style="display: none"><slot></slot></div>
    <MonacoEditor
      v-model="code"
      language="python"
      :options="editorOptions"
      class="h-48 w-full"
      @change="autoRun && runCode()"
    />
    <button
      v-if="showRunButton"
      @click="runCode"
      class="mt-1 px-1 py-0.5 text-sm text-white rounded transition-colors"
      @mouseenter="isHovered = true"
      @mouseleave="isHovered = false"
    >
      Run Code
    </button>
    <div v-if="output" class="mt-1 p-1 bg-gray-100 rounded text-sm">
      <pre class="max-h-32 overflow-y-auto text-sm" style="font-size: 8px;">{{ output }}</pre>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import MonacoEditor from './MonacoEditor.vue'

const props = defineProps({
  showRunButton: {
    type: Boolean,
    default: true
  },
  autoRun: {
    type: Boolean,
    default: false
  },
  buttonHoverColor: {
    type: String,
    default: '#a30750'
  }
})

const code = ref('')
const output = ref('')
const isHovered = ref(false)
const codeContent = ref(null)

onMounted(() => {
  if (codeContent.value) {
    let rawCode = codeContent.value.innerText || '';
    rawCode = rawCode.replace(/\r\n/g, '\n');
    const lines = rawCode.split('\n').filter(line => line.trim());
    const minIndent = Math.min(...lines.map(line => line.match(/^\s*/)[0].length));

    code.value = rawCode
      .split('\n')
      .map(line => line.slice(minIndent))
      .join('\n');
  }
});

const editorOptions = {
  theme: 'vs-dark',
  fontSize: 8,
  minimap: { enabled: false },
  scrollBeyondLastLine: false,
  lineNumbers: 'on',
  wordWrap: 'on',
  lineNumbersMinChars: 2,
  glyphMargin: false,
  folding: false,
  lineDecorationsWidth: 8,
  lineNumbersWidth: 20,
  automaticLayout: true,
}

async function runCode() {
  try {
    const response = await fetch('http://localhost:3001/run-python', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ code: code.value }),
    })
    
    const data = await response.json()
    output.value = data.output
  } catch (error) {
    output.value = `Error: ${error.message}`
  }
}
</script>

<style>
.python-runner {
  width: 100%;
}

.python-runner button {
    background-color: #ca1167;
    font-size: 8px;
}

.python-runner button:hover {
  background-color: #a30750 !important;
}
</style>
