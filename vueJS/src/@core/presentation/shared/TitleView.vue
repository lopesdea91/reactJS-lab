<script setup lang="ts">
const props = defineProps({
  title: { type: String }
})
</script>

<template>
  <div class="flex items-center p-2">
    <span class="mr-auto text-gray-300 uppercase text-lg border-b-4 border-b-red-600">
      {{ props.title }}
    </span>
    <slot name="actions" />
  </div>
</template>
