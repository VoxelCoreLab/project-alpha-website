<template>
    <LayoutBasic :breadcrumbs="breadcrumbs">
        <div class="m-auto grid h-full max-w-5xl p-4 md:p-8 text-left">
            <div class="grid grid-cols-1 md:grid-cols-2">
                <div class="flex flex-col md:justify-center gap-2 md:gap-4">
                    <h1 class="text-4xl md:text-8xl font-nebulous-regular uppercase">{{ characterName }}</h1>
                    <p class="max-w-md">{{ character?.backstory }}</p>
                </div>
                <div class="flex justify-center items-center">
                    <img :src="character?.image" class="h-full w-full max-h-[50svh] md:h-[50svh] md:max-h-[calc(100svh-20rem)] object-contain" />
                </div>
            </div>
        </div>
    </LayoutBasic>
</template>
<script setup lang="ts">
import LayoutBasic from '../layouts/LayoutBasic.vue'
import { useRoute } from 'vue-router'

import { useCharacters } from '../composables/useCharacters'

const route = useRoute()
const characterId = route.params.characterId as string
const characterName = characterId.charAt(0).toUpperCase() + characterId.slice(1)

const breadcrumbs = [
    {
        text: 'Charaktere',
        href: '/characters'
    },
    {
        text: characterName,
        href: `/characters/${characterId}`,
    }
]

const { characters } = useCharacters()

const character = characters.find(character => character.id === characterId)
</script>