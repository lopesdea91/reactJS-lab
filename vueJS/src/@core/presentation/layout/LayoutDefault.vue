<script setup lang="ts">
// import { RouterLink, RouterView } from 'vue-router'
import Container from './components/Container.vue'
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import Footer from './components/Footer.vue'

const title = 'vueJS'
</script>

<template>
  <Container>
    <Header :title="title" />

    <Main>
      <slot />
    </Main>

    <Footer />
  </Container>
</template>

<style scoped></style>
