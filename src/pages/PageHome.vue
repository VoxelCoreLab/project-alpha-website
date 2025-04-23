<template>
  <LayoutBasic>
    <h1 class="text-8xl font-bold max-w-6xl mx-auto py-8">Game Title</h1>
    <div class="world-map relative">
      <img alt="" src="../assets/world-map-teaser.jpg" class="w-full max-h-[calc(100vh/2)] object-cover mx-auto" />
    </div>

    <div class="max-w-6xl mx-auto py-4">
      <div class="bg-base-200 p-4 rounded-box inline-flex flex-col gap-4">
        <div class="text-lg">
          <p>Jede Region flüstert Geschichten – bist du bereit, ihnen zu lauschen?</p>
          <p>Erkunde jetzt die Spielwelt.</p>
        </div>
        <a href="/world-map" class="btn btn-neutral text-lg">Zur Weltkarte</a>
      </div>
    </div>
    <div class="bg-base-300 py-32 mt-16">
      <div class="max-w-6xl mx-auto py-4">
        <h2 class="text-6xl pb-4">Newsletter</h2>
        <p class="w-lg">Erhalte News zum Spiel direkt in dein Postfach. Wir informieren dich über Updates, Patches, den
          Start der Beta und die Veröffentlichung des Spieles.</p>
        <fieldset class="fieldset  bg-base-200 border-base-300 rounded-box w-xs border p-4 mt-4">
          <legend class="fieldset-legend">Was ist deine E-Mail?</legend>
          <input type="text" class="input" placeholder="Hier deine E-Mail eingeben" />
          <!-- <p class="label">Optional</p> -->

          <button class="btn btn-neutral mt-4">Beim Newsletter anmelden</button>
        </fieldset>
      </div>
    </div>
    <div class="bg-base-200 py-32">
      <div class="max-w-6xl mx-auto py-4">
        <h2 class="text-6xl pb-4">Spielveröffentlichung</h2>
        <p class="w-lg">Die Beta-Phase ist voraussichtlich Ende 2025</p>
        <p class="w-lg">Die offizielle Veröffentlichung ist für das Jahr 2026 geplant.</p>
      </div>
    </div>
  </LayoutBasic>
</template>
<script setup lang="ts">
import LayoutBasic from '../layouts/LayoutBasic.vue'
</script>
<style>
.world-map::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, var(--color-base-100) 0, transparent 350px), linear-gradient(180deg, transparent 18%, var(--color-base-100)), radial-gradient(farthest-corner, transparent 0, #180c17 100%);
}
</style>