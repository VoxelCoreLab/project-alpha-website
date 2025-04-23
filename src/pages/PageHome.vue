<template>
  <LayoutBasic>
    <h1 class="text-8xl font-bold max-w-6xl mx-auto py-8">Game Title</h1>
    <div>
      <img alt="" src="../assets/world-map.jpg" class="w-6xl mx-auto shadow-2xl" />
      <div class="max-w-6xl mx-auto py-4">
        <a href="/world-map" class="btn btn-soft">Zur Weltkarte</a>
      </div>
  </div>
    <div class="bg-base-300 py-16 mt-16">
      <div class="max-w-6xl mx-auto py-4">
        <h2 class="text-6xl pb-4">Newsletter</h2>
        <p class="w-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <fieldset class="fieldset  bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend class="fieldset-legend">Was ist deine E-Mail?</legend>
          <input type="text" class="input" placeholder="Hier eingeben" />
          <!-- <p class="label">Optional</p> -->

          <button class="btn btn-neutral mt-4">Beim Newsletter anmelden</button>
        </fieldset>
      </div>
    </div>
  </LayoutBasic>
</template>
<script setup lang="ts">
import LayoutBasic from '../layouts/LayoutBasic.vue'
</script>