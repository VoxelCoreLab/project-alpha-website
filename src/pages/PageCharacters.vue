<template>
    <LayoutBasic :breadcrumbs="breadcrumbs">
        <div class="max-w-7xl mx-auto p-4 md:p-8 grid gap-4">
            <h1 class="text-4xl md:text-8xl font-nebulous-regular uppercase break-all">Characters</h1>
            <div class="grid grid-cols-[repeat(2,_minmax(0px,_1fr))] md:grid-cols-[repeat(4,_minmax(0px,_1fr))] gap-4">
                <RouterLink v-for="character in characters" :key="character.id" :to="`/characters/${character.id}`"
                    class="bg-base-300 shadow-lg overflow-hidden flex flex-col items-center group">
                    <div class="w-full overflow-hidden aspect-[0.75/1]">
                        <img :src="character.image" :alt="character.name"
                            class="w-full h-full object-cover transition-transform group-hover:scale-110 bg-linear-to-t from-neutral/90 to-neutral/60" />
                    </div>
                    <div class="p-4 w-full bg-secondary/50 group-hover:bg-secondary/75 transition-colors">
                        <h2 class="text-2xl font-grest uppercase break-all">{{ character.name }}</h2>
                    </div>
                </RouterLink>
            </div>
        </div>
    </LayoutBasic>
</template>
<script setup lang="ts">
import { useCharacters } from '../composables/useCharacters';
import LayoutBasic from '../layouts/LayoutBasic.vue'

const breadcrumbs = [
    {
        text: 'Characters',
        href: '/characters'
    }
]

const { characters } = useCharacters()
</script>