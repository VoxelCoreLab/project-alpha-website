<template>
  <LayoutBasic>
    <div class="grid md:grid-cols-4 max-w-7xl mx-auto items-center gap-12 px-4 py-16">
      <div></div>
      <div>
        <p class="text-5xl md:text-6xl font-cinzel font-bold italic mb-3">Ooops....</p>
        <h1 class="text-3xl md:text-4xl font-bold mb-2">404 Page Not Found</h1>
        <p class="mb-4">The page you are looking for does not exist. It might have been moved or deleted.</p>
        <router-link to="/" class="btn btn-primary w-full md:btn-wide">Back to Home</router-link>
      </div>
      <div>
        <img src="../assets/characters/ghost.webp" alt="404 Not Found Illustration" class=" h-auto"/>
      </div>
      <div></div>
    </div>
  </LayoutBasic>
</template>
<script lang="ts" setup>
import LayoutBasic from '../layouts/LayoutBasic.vue';

</script>
