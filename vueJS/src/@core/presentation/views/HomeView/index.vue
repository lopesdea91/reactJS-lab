<script setup lang="ts">
import { homeController } from '../../../controllers/HomeController' // '../../../controllers/HomeController' // using
import type IMovie from '../../../domain/Movie'
import { onMounted, ref } from 'vue'
import LayoutDefault from './../../layout/LayoutDefault.vue'
import TopRatedGrid from './components/TopRatedGrid.vue'
import TopRatedItem from './components/TopRatedItem.vue'
import MovieGrid from './components/MovieGrid.vue'
import MovieItem from './components/MovieItem.vue'
import TitleView from '../../shared/TitleView.vue'
import Button from '../../shared/ui/Button.vue'

const movies = ref<IMovie[]>([])
const movieTopRated = ref<IMovie[]>([])

async function getMovies() {
  movies.value = []
  movies.value = homeController.getMovies()
}
async function getMoviesTopRated() {
  movieTopRated.value = []
  homeController.generageTopTaredIndex()
  movieTopRated.value = homeController.getMoviesTopRated()
}
async function getData() {
  await homeController.loadData()
  await getMovies()
  await getMoviesTopRated()
}

onMounted(() => {
  getData()
})
</script>

<template>
  <LayoutDefault>
    <!-- TOP RATED -->
    <TitleView title="Top rated">
      <template v-slot:actions>
        <Button @click="getMoviesTopRated">ramdon</Button>
      </template>
    </TitleView>
    <TopRatedGrid class="mb-8">
      <TopRatedItem
        v-for="movie in movieTopRated"
        :key="`topRated-item-${movie.id}`"
        :movie="movie"
      />
    </TopRatedGrid>

    <!-- MOVIE LIST -->
    <TitleView title="Movies" />

    <MovieGrid>
      <MovieItem v-for="movie in movies" :key="`movie-item-${movie.id}`" :movie="movie" />
    </MovieGrid>
  </LayoutDefault>
</template>
