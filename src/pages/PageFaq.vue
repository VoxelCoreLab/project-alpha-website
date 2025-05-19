<template>
    <LayoutBasic :breadcrumbs="breadcrumbs">
        <div class="max-w-2xl mx-auto p-4 md:p-8">
            <h1 class="text-4xl md:text-8xl font-nebulous-regular uppercase">FAQ</h1>
            <p class="text-sm">Hier findest du die häufigsten Fragen und Antworten zu unserem Spiel.</p>
            <div class="mt-4 grid gap-2">
                <div v-for="(faq, index) in faqs" :key="index" tabindex="0" class="collapse collapse-arrow bg-base-100 border-secondary/40 border">
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
        question: 'Was für ein Genre ist das Spiel?',
        answer: 'Das Spiel ist ein Co-op Online Arena Survival Game.'
    },
    {
        question: 'Wie viele Spieler können mitspielen?',
        answer: 'Das Spiel ist für 1-5 Spieler ausgelegt.'
    },
    {
        question: 'Wie lange dauert eine Runde?',
        answer: 'Eine Runde dauert etwa 30 Minuten'
    },
    {
        question: 'Wie viele Karten gibt es?',
        answer: 'Es gibt 3 verschiedene Karten'
    },
    {
        question: 'Welche Steuerung wird in Shadow Infection verwendet?',
        answer: 'Das Spiel wird mit Maus und Tastatur gespielt.'
    },
    {
        question: 'Weleches Betriebssystem wird benötigt?',
        answer: 'Das Spiel läuft auf Windows 11'
    },
    {
        question: 'Wann wird das Spiel veröffentlicht?',
        answer: 'Das Spiel wird voraussichtlich im Jahr 2026 veröffentlicht.'
    }
]
</script>