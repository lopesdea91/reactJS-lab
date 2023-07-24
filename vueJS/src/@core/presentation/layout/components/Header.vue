<script setup lang="ts">
import { RouterLink } from 'vue-router'
const props = defineProps({
  title: String
})
</script>

<template>
  <header
    class="flex items-center justify-between max-w-4xl mx-auto px-4 py-6 border-b-[1px] border-b-white/25"
  >
    <RouterLink to="/" class="text-2xl font-bold text-red-600"> MovieFlix </RouterLink>
    <span class="text-lg font-semibold text-gray-200 capitalize">{{ props.title }}</span>
  </header>
</template>

<style scoped></style>
