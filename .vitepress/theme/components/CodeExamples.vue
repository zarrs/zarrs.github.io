<script setup>
import { ref, computed, onMounted } from 'vue'
import { highlight } from '@arborium/arborium'
import rustCode from './examples/rust.rs?raw'
import pythonCode from './examples/python.py?raw'
import cppCode from './examples/cpp.cpp?raw'

const activeTab = ref('rust')
const highlightedCode = ref({})

const tabs = [
  { id: 'rust', label: 'Rust' },
  { id: 'python', label: 'Python' },
  { id: 'cpp', label: 'C/C++' }
]

const codeExamples = {
  rust: rustCode,
  python: pythonCode,
  cpp: cppCode
}

const currentCode = computed(() =>
  highlightedCode.value[activeTab.value] || codeExamples[activeTab.value]
)
const isHighlighted = computed(() => !!highlightedCode.value[activeTab.value])

onMounted(async () => {
  const results = await Promise.all(
    tabs.map(async (tab) => {
      try {
        return { id: tab.id, html: await highlight(tab.id, codeExamples[tab.id]) }
      } catch (e) {
        console.warn(`Failed to highlight ${tab.id}:`, e)
        return { id: tab.id, html: null }
      }
    })
  )
  highlightedCode.value = Object.fromEntries(
    results.filter(r => r.html).map(r => [r.id, r.html])
  )
})
</script>

<template>
  <div class="code-examples">
    <div class="tabs">
      <button
        v-for="tab in tabs"
        :key="tab.id"
        :class="['tab', { active: activeTab === tab.id }]"
        @click="activeTab = tab.id"
      >
        {{ tab.label }}
      </button>
    </div>
    <div class="code-container">
      <pre><code v-if="isHighlighted" v-html="currentCode"></code><code v-else>{{ currentCode }}</code></pre>
    </div>
  </div>
</template>

<style scoped>
.code-examples {
  max-width: 800px;
  margin: 0 auto 3rem;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
}

.tabs {
  display: flex;
  background: var(--vp-code-tab-bg);
  border-bottom: 1px solid var(--vp-c-divider);
}

.tab {
  padding: 0.75rem 1.5rem;
  background: transparent;
  border: none;
  color: var(--vp-c-text-2);
  cursor: pointer;
  font-size: 0.95rem;
  font-weight: 500;
  transition: color 0.2s, background 0.2s;
}

.tab:hover {
  color: var(--vp-c-text-1);
  background: var(--vp-c-default-soft);
}

.tab.active {
  color: var(--vp-c-text-1);
  background: var(--vp-code-block-bg);
  border-bottom: 2px solid var(--vp-c-brand-1);
}

.code-container {
  background: var(--vp-code-block-bg);
  overflow-x: auto;
}

.code-container pre {
  margin: 0;
  padding: 1.5rem;
  background: transparent !important;
  overflow-x: auto;
}

.code-container code {
  font-family: var(--vp-font-family-mono);
  font-size: 0.875rem;
  line-height: 1.6;
}

@media (max-width: 640px) {
  .code-examples {
    margin: 1.5rem 1rem 2rem;
    border-radius: 8px;
  }

  .tab {
    padding: 0.6rem 1rem;
    font-size: 0.85rem;
  }

  .code-container pre {
    padding: 1rem;
  }

  .code-container code {
    font-size: 0.75rem;
  }
}
</style>
