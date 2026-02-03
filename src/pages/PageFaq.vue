<template>
    <LayoutBasic :breadcrumbs="breadcrumbs">
        <div class="max-w-2xl mx-auto p-4 md:p-8">
            <h1 class="text-4xl md:text-5xl font-cinzel font-bold italic uppercase text-secondary mb-2">FAQ</h1>
            <p class="text-sm">Here you can find the most frequently asked questions and answers about the game.</p>
            <div class="mt-4 grid gap-2">
                <div v-for="(faq, index) in faqs" :key="index" tabindex="0"
                    class="collapse collapse-arrow bg-base-100 border-secondary/40 border">
                    <div class="collapse-title font-semibold">{{ faq.question }}</div>
                    <div class="collapse-content text-sm">
                        {{ faq.answer }}
                    </div>
                </div>
            </div>
        </div>
    </LayoutBasic>
</template>
<script setup lang="ts">
import LayoutBasic from '../layouts/LayoutBasic.vue'

const breadcrumbs = [
    {
        text: 'FAQ',
        href: '/faq'
    }
]

const faqs: { question: string, answer: string }[] = [
    {
        question: 'What genre is the game?',
        answer: 'The game is a co-op pve and pvp online arena survival game.'
    },
    {
        question: 'How many players can join?',
        answer: 'The PvE mode is designed for 1–5 players. The PvP mode is designed for 2–12 players.'
    },
    {
        question: 'How long does a round last?',
        answer: 'A round lasts about 30 minutes.'
    },
    {
        question: 'How many maps are there?',
        answer: 'There are 3 different maps planned for the start.'
    },
    {
        question: 'What controls are used in Shadow Infection?',
        answer: 'The game is played with mouse and keyboard.'
    },
    {
        question: 'Which operating system is required?',
        answer: 'The game runs on Windows, Linux and MacOS.'
    },
    /*
    {
        question: 'When will the game be released?',
        answer: 'The game is expected to be released in 2026.'
    }
    */
]

</script>