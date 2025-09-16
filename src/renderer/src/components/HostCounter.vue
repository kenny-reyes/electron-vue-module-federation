<template>
  <button
    style="
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border: none;
      border-radius: 8px;
      padding: 0.5rem 1rem 0.5rem 1rem;
      color: rgb(24, 24, 24);
    "
    @click="store.increment"
  >
    Host counter: {{ count }}
  </button>
</template>

<script setup lang="ts">
  import { onMounted } from 'vue'
  import { storeToRefs } from 'pinia'
  import { useCounterStore } from '@/stores/counter'

  const store = useCounterStore()
  const { count } = storeToRefs(store)

  onMounted(() => {
    console.log('Host Counter mounted, store instance:', store)
    console.log('Host Counter count value:', count.value)
  })
</script>
