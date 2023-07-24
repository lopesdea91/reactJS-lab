<script setup lang="ts">
import type IMovie from '../../../../domain/Movie'
import { RouterLink } from 'vue-router'
import MovieTitle from './MovieTitle.vue'
import MoviePoster from '../../../shared/MoviePoster.vue'

const props = defineProps({
  movie: {
    type: Object as () => IMovie
  }
})
</script>

<template>
  <RouterLink
    :to="`/movie/${props.movie?.id}`"
    class="group h-60 duration-500 flex-[2] hover:flex-[3] cursor-pointer relative"
  >
    <MoviePoster
      :poster-path="props.movie?.posterPath"
      class="h-full w-full object-cover object-center border-[1px] border-white/25 rounded-tl-3xl rounded-br-3xl group-hover:rounded-none"
    />

    <MovieTitle
      class="absolute bottom-[2px] left-[2px] right-[2px] overflow-hidden duration-300 py-0 group-hover:py-4 opacity-0 group-hover:opacity-100"
    >
      {{ props.movie?.title }}
    </MovieTitle>
  </RouterLink>
</template>
