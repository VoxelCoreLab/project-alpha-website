<template>
  <LayoutBasic>
    <!-- <h1 class="text-8xl font-bold max-w-6xl mx-auto py-8 px-4">Shadow Infection</h1> -->
    <div class="world-map relative">
      <img alt="" src="../assets/world-map-teaser.jpg" class="w-full h-[calc(100svh-6rem)] object-cover mx-auto" />
      <div class="absolute z-10 w-full h-full top-0 items-center justify-center flex flex-col">
        <img alt="Spieletitel: Shadow Infection" src="../assets/header_site.webp"
          class="max-h-[calc(100svh/3)] object-cover mx-auto drop-shadow-xl/50" />
        <div class="max-w-6xl max-h-1/2 mx-auto pt-4 lg:pt-16 px-4 grid justify-items-center">
          <div class="inline-flex flex-col gap-4 md:gap-6 drop-shadow-xl/50">
            <div>
              <p
                class="text-[clamp(var(--text-4xl),5vw,var(--text-6xl))] text-4xl lg:text-6xl font-nebulous-regular text-center">
                Entdecke jetzt die Spielwelt!</p>
            </div>
            <div class="self-center">
              <a href="/world-map"
                class="btn btn-secondary btn-md lg:btn-xl inline-flex items-center gap-2 relative overflow-hidden group scale-100 hover:scale-103 transition-transform duration-300">
                <span
                  class="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                <span class="relative z-10">Zur Weltkarte</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 relative z-10" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <img alt="" src="../assets/arrowDown.png" class="absolute -bottom-6 left-1/2 -translate-x-1/2 w-10 h-10 z-10" />
    </div>

    <div class="bg-base-200 py-8 md:py-32 relative">
      <div class="max-w-6xl mx-auto py-4 px-4 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-16">
        <div>
          <h2 class="text-4xl md:text-8xl pb-4 font-nebulous-regular uppercase sticky z-10">Newsletter</h2>
          <p class="max-w-lg">Erhalte News zum Spiel direkt in dein Postfach. Wir informieren dich über Updates,
            Patches,
            den
            Start der Beta und die Veröffentlichung des Spieles.</p>
          <NewsletterForm />
        </div>
        <div class="flex justify-center items-center z-0">
          <img alt="" class="h-40 w-40 lg:h-80 lg:w-80" src="../assets/newsletter_illustration.png" />
        </div>
      </div>
    </div>
    <div class="bg-base-300 py-8 md:py-32">
      <div class="max-w-6xl mx-auto py-4 px-4 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-16">
        <div>
          <h2 class="text-4xl md:text-8xl pb-4 break-all font-nebulous-regular uppercase">Release</h2>
          <p class="max-w-lg">Die Beta-Phase ist voraussichtlich Ende 2025</p>
          <p class="max-w-lg">Die offizielle Veröffentlichung ist für das Jahr 2026 geplant.</p>
        </div>
        <div class="flex justify-center items-center">
          <img alt="" class="h-40" src="../assets/meilenstein.webp" />
        </div>
      </div>
    </div>
    <div class="bg-base-100 pt-8 md:pt-16">
      <div class="max-w-6xl mx-auto relative">
        <div
          class="absolute top-0 bottom-0 left-0 w-16 md:w-64 bg-gradient-to-r from-base-100 to-transparent pointer-events-none z-10">
        </div>
        <div
          class="absolute top-0 bottom-0 right-0 w-16 md:w-64 bg-gradient-to-l from-base-100 to-transparent pointer-events-none z-10">
        </div>
        <Carousel :itemsToShow="2" :wrapAround="true" tabindex="-1">
          <Slide v-for="(slide, index) in characterSlides" :key="index">
            <div class="relative w-full h-full">
              <div
                class="absolute w-full z-10 text-2xl md:text-5xl font-bold text-center text-base-content/80 flex items-center justify-center bottom-0 mb-10 md:mb-20">
                <RouterLink :to="`/characters/${slide.name.toLowerCase()}`"
                  class="relative px-2 py-1 md:px-3 md:py-2 font-grest uppercase border border-secondary bg-secondary/25 backdrop-blur-lg hover:bg-secondary/50 transition-colors">
                  {{ slide.name }}</RouterLink>
              </div>
              <img :src="slide.image" class="object-contain h-full w-full" alt="" />
            </div>
          </Slide>

          <template #addons>
            <Navigation tabindex="-1" />
            <Pagination ref="paginationRef" />
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
import NewsletterForm from '../components/NewsletterForm.vue'
import { useCharacters } from '../composables/useCharacters'
import { ComponentPublicInstance, nextTick, onMounted, ref } from 'vue'

const { characters } = useCharacters();
const characterSlides = characters

const paginationRef = ref<ComponentPublicInstance | null>(null)

onMounted(async () => {
  await nextTick()
  const el = paginationRef.value?.$el as HTMLElement | undefined
  if (el) {
    el.querySelectorAll('button').forEach((btn) => {
      btn.setAttribute('tabindex', '-1')
    })
  }
})
</script>
<style>
.world-map::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, var(--color-base-100) 0, transparent 100px), linear-gradient(180deg, transparent 70%, var(--color-base-100)), radial-gradient(farthest-corner, transparent 0, #180c17 100%);
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
  right: 8rem;
}

.carousel__prev {
  left: 8rem;
}

@media (max-width: 640px) {
  .carousel__next {
    right: 4rem;
  }

  .carousel__prev {
    left: 4rem;
  }
}
</style>