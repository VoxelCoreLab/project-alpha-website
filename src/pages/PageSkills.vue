<template>
    <LayoutBasic :breadcrumbs="breadcrumbs">
        <div class="max-w-7xl mx-auto px-8 py-8">
            <h1 class="text-4xl md:text-8xl font-bold font-nebulous-regular">Fertigkeiten</h1>
            <div class="mt-4 grid gap-4 gird-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <div v-for="skill in skills" :key="skill.name" class="bg-base-100 border-secondary/40 border @container">
                    <div class="grid grid-cols-1 @lg:grid-cols-[1fr_2fr]">
                    <div class="aspect-square"><img :src="skill.image" class="aspect-square" /></div>
                    <div class="p-4">
                        <h2 class="text-2xl font-semibold">{{ skill.name }}</h2>
                        <div class="badge"
                            :class="{ 
                                'badge-neutral': skill.type == 'Passive',
                                'badge-secondary': skill.type == 'Normal',
                                'badge-warning': skill.type == 'Ultimate'
                            }">{{ skill.type }}</div>
                        <p class="text-sm">Maximale Ladungen: {{ skill.maxCharges }}</p>
                        <p class="text-sm">Cooldown: {{ skill.cooldown }}s</p>
                        <p class="text-sm">{{ skill.description }}</p>
                    </div>
                </div>
                </div>
            </div>

        </div>
    </LayoutBasic>
</template>
<script setup lang="ts">
import LayoutBasic from '../layouts/LayoutBasic.vue'

import imgSkillSwiftness from '../assets/iconSkills/swiftness.jpg'
import imgSpiritBlessing from '../assets/iconSkills/spirit_blessing.jpg'
import imgShadowForm from '../assets/iconSkills/assassin_shadow_form.jpg'
import imgPoision from '../assets/iconSkills/passive_poison.jpg'

const breadcrumbs = [
    {
        text: 'Fähigkeiten',
        href: '/skills'
    }
]

const skills: { name: string, description: string, image: string, cooldown: number, maxCharges: number, type: 'Passive' | 'Normal' | 'Ultimate' }[] = [
    {
        name: 'Swiftness',
        description: 'Du bewegst dich 3 Sekunden lang 50% schneller.',
        image: imgSkillSwiftness,
        cooldown: 30,
        maxCharges: 2,
        type: 'Normal'
    },
    {
        name: 'Spirit Blessing',
        description: 'Beschreibung der Fähigkeit 2',
        image: imgSpiritBlessing,
        cooldown: 15,
        maxCharges: 3,
        type: 'Normal'
    },
    {
        name: 'Shadow Form',
        description: 'Beschreibung der Fähigkeit 3',
        image: imgShadowForm,
        cooldown: 60,
        maxCharges: 1,
        type: 'Ultimate'
    },
    {
        name: 'Apply Poison',
        description: 'Beschreibung der Fähigkeit 4',
        image: imgPoision,
        cooldown: 0,
        maxCharges: 0,
        type: 'Passive'
    }

]
</script>