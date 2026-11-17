<template>
    <section class="bg-base-100 py-16 md:py-24" :aria-labelledby="headingId">
        <div class="mx-auto max-w-[1200px] px-4">
            <!-- Header -->
            <component :is="headingTag" :id="headingId"
                class="font-cinzel text-4xl font-black uppercase italic text-secondary md:text-6xl">
                Forge your Build
            </component>
            <p class="mt-6 max-w-2xl text-base leading-relaxed text-base-content/80 md:text-lg">
                There are no heroes or classes to pick. Choose any weapon and freely combine one passive,
                three skills and one ultimate. The builds below are just a few examples of what you can create.
            </p>

            <BuildSlotFormula class="mt-10 md:mt-14" />

            <!-- Showcase -->
            <div class="relative mt-10 overflow-hidden border border-base-300 bg-[#0f0f0f] md:mt-14"
                :style="{ '--build-color': active.color }">
                <div class="grid gap-8 p-5 md:p-8 lg:grid-cols-[264px_minmax(0,1fr)_368px]">
                    <!-- Example build picker -->
                    <div>
                        <h3 :id="`${headingId}-examples`"
                            class="font-cinzel text-xs font-black uppercase tracking-[0.25em] text-accent">
                            Example builds
                        </h3>
                        <ul class="mt-4 grid grid-cols-6 gap-2 lg:grid-cols-1" :aria-labelledby="`${headingId}-examples`">
                            <li v-for="b in builds" :key="b.id">
                                <button type="button" :aria-pressed="b.id === active.id" :aria-label="b.name"
                                    :style="{ '--build-color': b.color }"
                                    class="flex w-full cursor-pointer items-center gap-3 border transition lg:p-3"
                                    :class="b.id === active.id
                                        ? 'border-(--build-color)/60 bg-[#1c1c1c] shadow-[inset_4px_0_0_var(--build-color)] max-lg:shadow-none'
                                        : 'border-transparent opacity-55 hover:opacity-90 lg:border-base-300 lg:bg-base-200'"
                                    @click="select(b.id)">
                                    <img :src="b.ultimate.image" alt="" width="48" height="48" loading="lazy"
                                        class="aspect-square w-full border lg:w-12"
                                        :class="b.id === active.id ? 'border-(--build-color)' : 'border-base-300'" />
                                    <span class="hidden text-left lg:block">
                                        <span class="block font-cinzel text-sm font-black uppercase">{{ b.name }}</span>
                                        <span class="block text-xs text-(--build-color)">{{ b.tagline }}</span>
                                    </span>
                                </button>
                            </li>
                        </ul>
                    </div>

                    <!-- Character -->
                    <div class="relative flex min-h-[360px] items-end justify-center lg:min-h-[580px]" aria-hidden="true">
                        <div class="build-ground absolute bottom-0 left-1/2 h-10 w-64 -translate-x-1/2"></div>
                        <Transition name="build-fade" mode="out-in">
                            <img :key="active.id" :src="active.image.src" :width="active.image.width"
                                :height="active.image.height" alt=""
                                class="relative h-[340px] w-auto object-contain lg:h-[560px]" />
                        </Transition>
                    </div>

                    <!-- Loadout -->
                    <Transition name="build-fade" mode="out-in">
                        <div :key="active.id" aria-live="polite">
                            <h3 class="font-cinzel text-3xl font-black uppercase">{{ active.name }}</h3>
                            <div class="mt-2 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-base-300 pb-4">
                                <span class="font-cinzel text-xs font-black uppercase tracking-[0.25em] text-(--build-color)">
                                    {{ active.tagline }}
                                </span>
                                <span class="text-xs text-base-content/60">Weapon: {{ active.weapon }}</span>
                            </div>

                            <p class="slot-label mt-5"><span class="font-merriweather-sans">1</span> Passive</p>
                            <BuildSkillRow class="mt-3" :skill="active.passive" />

                            <p class="slot-label mt-6"><span class="font-merriweather-sans">3</span> Skills</p>
                            <div class="mt-3 space-y-3.5">
                                <BuildSkillRow v-for="skill in active.skills" :key="skill.id" :skill="skill" />
                            </div>

                            <p class="slot-label mt-6"><span class="font-merriweather-sans">1</span> Ultimate</p>
                            <BuildSkillRow class="mt-3" :skill="active.ultimate" ultimate />
                        </div>
                    </Transition>
                </div>
            </div>

            <div class="mt-10 text-center">
                <RouterLink to="/skills" class="btn btn-accent btn-lg uppercase">Explore all skills</RouterLink>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { computed, useId } from 'vue'
import { builds, defaultBuildId, findBuild } from '../../data/builds'
import BuildSlotFormula from './BuildSlotFormula.vue'
import BuildSkillRow from './BuildSkillRow.vue'

withDefaults(defineProps<{
    /** Use 'h1' when the showcase is the main content of a page */
    headingTag?: 'h1' | 'h2'
}>(), {
    headingTag: 'h2',
})

/** Selected example build id, optionally bound with v-model:build */
const buildId = defineModel<string>('build', { default: defaultBuildId })

const active = computed(() => findBuild(buildId.value) ?? findBuild(defaultBuildId)!)

const headingId = `builds-${useId()}`

function select(id: string) {
    buildId.value = id
}
</script>

<style scoped>
.slot-label {
    font-family: var(--font-cinzel);
    font-size: 0.75rem;
    font-weight: 900;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--color-accent);
}

.build-ground {
    background: radial-gradient(closest-side, rgb(0 0 0 / 0.85), transparent);
}

.build-fade-enter-active,
.build-fade-leave-active {
    transition: opacity 0.2s ease, transform 0.2s ease;
}

.build-fade-enter-from {
    opacity: 0;
    transform: translateY(8px);
}

.build-fade-leave-to {
    opacity: 0;
}

@media (prefers-reduced-motion: reduce) {
    .build-fade-enter-active,
    .build-fade-leave-active {
        transition: none;
    }
}
</style>
