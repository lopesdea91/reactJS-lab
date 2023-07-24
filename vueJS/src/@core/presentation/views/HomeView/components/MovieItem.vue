<script setup lang="ts">
import { RouterLink } from 'vue-router'
import type IMovie from '../../../../domain/Movie'
import MoviePoster from '../../../shared/MoviePoster.vue'
import MovieTitle from './MovieTitle.vue'

const props = defineProps({
  movie: {
    type: Object as () => IMovie
  }
})
</script>

<template>
  <RouterLink
    :to="`/movie/${props.movie?.id}`"
    class="group aspect-w-4 aspect-h-5 rounded-md cursor-pointer"
  >
    <MoviePoster :poster-path="props.movie?.posterPath" />

    <MovieTitle class="mt-auto py-2">
      {{ props.movie?.title }}
    </MovieTitle>
  </RouterLink>
</template>
