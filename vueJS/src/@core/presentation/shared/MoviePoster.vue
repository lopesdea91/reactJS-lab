<script setup lang="ts">
const props = defineProps({
  posterPath: String
})
</script>

<template>
  <img
    class="block object-cover object-top rounded-md opacity-80 duration-500 group-hover:opacity-100"
    :src="props.posterPath"
    alt="example"
    v-bind="$attrs"
  />
</template>
