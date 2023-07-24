<script setup lang="ts">
import { useRoute } from 'vue-router'
import { onMounted, reactive } from 'vue'
import type IMovie from '../../../domain/Movie'
import { movieController } from '../../../controllers/MovieController' //'../../..//controllers/MovieController' // using
import LayoutDefault from './../../layout/LayoutDefault.vue'
import MoviePoster from '../../shared/MoviePoster.vue'
import TitleView from '../../shared/TitleView.vue'
import Link from '../../shared/ui/Link.vue'

const route = useRoute()
const currentId = route.params.id

const movie = reactive<IMovie>({
  id: 0,
  backdropPath: '',
  originalLanguage: '',
  originalTitle: '',
  overview: '',
  posterPath: '',
  releaseDate: '',
  title: '',
  voteAverage: 0,
  voteCount: 0
})

async function getData() {
  const res = await movieController.getMovies(Number(currentId))

  movie.posterPath = res.data.posterPath
  movie.backdropPath = res.data.backdropPath
  movie.originalLanguage = res.data.originalLanguage
  movie.title = res.data.title
  movie.overview = res.data.overview
  movie.releaseDate = res.data.releaseDate
  movie.voteCount = res.data.voteCount
  movie.voteAverage = res.data.voteAverage
}

onMounted(() => {
  getData()
})
</script>

<template>
  <LayoutDefault>
    <TitleView title="Info" />
    <div class="sm:grid grid-cols-5 gap-4 py-4 min-h[240px]">
      <div class="sm:col-span-1 overflow-hidden">
        <MoviePoster v-if="movie.posterPath" :poster-path="movie.posterPath" class="h-full" />
      </div>
      <div class="sm:col-span-4 flex flex-col">
        <div class="text-gray-200 flex flex-col gap-2 mb-3">
          <p class="text-sm">Title: {{ movie.title }}</p>
          <p class="text-sm">Data: {{ movie.releaseDate }}</p>
          <p class="text-sm">Original language: {{ movie.originalLanguage }}</p>
        </div>

        <div class="mt-auto flex gap-2">
          <Link :to="movie.posterPath" :external="true" target="_blank">see poster</Link>
          <Link :to="movie.backdropPath" :external="true" target="_blank">see backdrop</Link>
        </div>
      </div>
    </div>

    <TitleView title="Sinopse" />
    <div class="relative bg-black/50 shadow-lg min-h-[485px]">
      <MoviePoster
        v-if="movie.posterPath"
        :poster-path="movie.backdropPath"
        class="h-full w-full object-cover object-center opacity-50"
      />
      <p
        class="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] italic text-gray-200 p-4"
      >
        {{ movie.overview }}
      </p>
    </div>
  </LayoutDefault>
</template>

<style scoped></style>
