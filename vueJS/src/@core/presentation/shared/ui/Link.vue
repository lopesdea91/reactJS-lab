<script setup lang="ts">
import { RouterLink } from 'vue-router'
const props = defineProps({
  to: { type: String, required: true },
  external: { type: Boolean }
})

console.log('... props.to', props.to)

const css =
  'px-2 py-1 font-semibold text-xs text-red-600 uppercase rounded border-b-4 border-b-red-600 bg-gray-200'
</script>

<template>
  <a v-if="props.external" :href="props.to" :class="css" v-bind="$attrs">
    <slot />
  </a>

  <RouterLink v-else :to="props.to" :class="css" v-bind="$attrs">
    <slot />
  </RouterLink>
</template>
