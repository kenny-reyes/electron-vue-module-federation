<script setup lang="ts">
  import { onMounted } from 'vue'
  import { storeToRefs } from 'pinia'
  import { useCounterStore } from './stores/counter'

  const store = useCounterStore()
  const { count } = storeToRefs(store)

  onMounted(() => {
    console.log('Remote Counter mounted, store instance:', store)
    console.log('Remote Counter count value:', count.value)
  })
</script>
<template>
  <button
    style="
      border: 0 solid #e2e8f0;
      margin-top: 10px;
      background-color: rgb(246, 179, 82);
      border-radius: 0.25rem;
      font-weight: 700;
      padding: 0.5rem 1rem 0.5rem 1rem;
      color: rgb(24, 24, 24);
    "
    @click="store.increment"
  >
    Remote counter: {{ count }}
  </button>
</template>
