<template>
    <LayoutBasic :breadcrumbs="breadcrumbs">
        <div class="m-auto grid h-full max-w-5xl p-8 text-left">
            <div class="grid grid-cols-1 md:grid-cols-2">
                <div class="flex flex-col justify-center gap-2 md:gap-4">
                    <h1 class="text-4xl md:text-8xl font-nebulous-regular uppercase">{{ characterName }}</h1>
                    <p class="max-w-md">{{ character?.backstory }}</p>
                </div>
                <div class="flex justify-center items-center">
                    <img :src="character?.image" class="h-full w-full max-h-[50svh] md:max-h-[calc(100svh-20rem)] object-contain" />
                </div>
            </div>
        </div>
    </LayoutBasic>
</template>
<script setup lang="ts">
import LayoutBasic from '../layouts/LayoutBasic.vue'
import { useRoute } from 'vue-router'

import imgSelira from '../assets/characters/feather-girl.webp'
import imgKael from '../assets/characters/bounty-hunter.webp'
import imgVelmon from '../assets/characters/ghost.webp'
import imgVareth from '../assets/characters/prince-of-death.webp'

const route = useRoute()
const characterId = route.params.characterId as string
const characterName = characterId.charAt(0).toUpperCase() + characterId.slice(1)

const breadcrumbs = [
    {
        text: characterName,
        href: `/characters/${characterId}`,
    }
]

const characters: { id: string, backstory: string, image: string }[] = [
    {
        id: 'selira',
        backstory: 'Eine Assassinin aus dem Schattenzirkel. Hinterlässt silberne Dornen bei ihren Opfern.',
        image: imgSelira
    },
    {
        id: 'kael',
        backstory: 'Ein maskierter Kopfgeldjäger mit Jagdgewehr. Redet nicht. Verfehlt nie. Seine Liste ist persönlich und tödlich.',
        image: imgKael
    },
    {
        id: 'velmon',
        backstory: 'Ein ruheloser Geist. Einst Sternenweise, jetzt Bote dunkler Vorzeichen. Flüstert Warnungen.',
        image: imgVelmon
    },
    {
        id: 'vareth',
        backstory: 'Verfluchter Prinz eines toten Reiches. Halb lebendig, halb Tod. Jeder Schlag bringt ihn seinem göttlichen Erbe näher.',
        image: imgVareth
    }
]

const character = characters.find(character => character.id === characterId)
</script>