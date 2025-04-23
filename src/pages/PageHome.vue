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
    <div class="bg-base-100">
      <div class="max-w-6xl mx-auto">
        <Carousel :itemsToShow="2" :wrapAround="true">
          <Slide v-for="(slide, index) in characterSlides" :key="index">
            <div class="relative w-full h-full">
              <div
                class="absolute w-full z-10 text-4xl font-bold text-center text-base-content/80 flex items-center justify-center bottom-0 mb-10">
                <div class="relative p-4">{{ slide.name }}</div>
              </div>
              <img :src="slide.image" class="object-contain h-full w-full" />
            </div>
          </Slide>

          <template #addons>
            <Navigation />
            <Pagination />
          </template>
        </Carousel>
      </div>
    </div>
  </LayoutBasic>
</template>
<script setup lang="ts">
import 'vue3-carousel/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import LayoutBasic from '../layouts/LayoutBasic.vue'
import bountyHunter from '../assets/characters/bounty-hunter.webp'
import featherAssassin from '../assets/characters/feather-girl.webp'
import ghost from '../assets/characters/ghost.webp'
import princeOfDeath from '../assets/characters/prince-of-death.webp'

const characterSlides = [
  { id: 1, name: 'Bounty Hunter', image: bountyHunter },
  { id: 2, name: 'Feather Assassin', image: featherAssassin },
  { id: 3, name: 'Ghost', image: ghost },
  { id: 4, name: 'Prince of Death', image: princeOfDeath }
]
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

<style>
:root {
  --carousel-transition: 300ms;
  --carousel-opacity-inactive: 0.4;
  --carousel-opacity-active: 1;
  --carousel-opacity-near: 0.4;
}

.carousel {
  --vc-nav-background: rgba(255, 255, 255, 0.7);
  --vc-nav-border-radius: 100%;
  --vc-nav-color: var(--color-neutral);
  --vc-nav-color-hover: var(--color-secondary);
  --vc-pgn-active-color: var(--color-secondary);
  --vc-pgn-background-color: var(--color-neutral);
  --vc-pgn-height: 16px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition:
    opacity var(--carousel-transition),
    transform var(--carousel-transition);
}

.carousel.is-dragging .carousel__slide {
  transition:
    opacity var(--carousel-transition),
    transform var(--carousel-transition);
}


.carousel__slide--prev {
  opacity: var(--carousel-opacity-near);
  transform: rotateY(-10deg) scale(0.8);
}

.carousel__slide--active {
  opacity: var(--carousel-opacity-active);
  transform: rotateY(0) scale(1);
}

.carousel__slide--next {
  opacity: var(--carousel-opacity-near);
  transform: rotateY(10deg) scale(0.8);
}

.carousel__slide--next~.carousel__slide {
  opacity: var(--carousel-opacity-inactive);
  transform: translateX(-10px) rotateY(12deg) scale(0.8);
}

.carousel__next {
  right: 160px;
}

.carousel__prev {
  left: 160px;
}
</style>