<template>
    <LayoutBasic :breadcrumbs="breadcrumbs">
        <div class="max-w-7xl mx-auto px-8 py-8">
            <h1 class="text-4xl md:text-8xl font-bold font-nebulous-regular">Fertigkeiten</h1>
            <div class="mt-4 grid gap-4 gird-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <div v-for="skill in skillsSorted" :key="skill.name"
                    class="bg-base-100 border-secondary/40 border @container">
                    <div class="grid grid-cols-1 @lg:grid-cols-[1fr_2fr]">
                        <div class="aspect-square"><img :src="skill.image" class="aspect-square" /></div>
                        <div class="p-4">
                            <div class="flex justify-between">
                                <h2 class="text-2xl font-semibold">{{ skill.name }}</h2>
                                <div class="badge" :class="{
                                    'badge-neutral': skill.type == 'Passive',
                                    'badge-secondary': skill.type == 'Normal',
                                    'badge-warning': skill.type == 'Ultimate'
                                }">{{ skill.type }}</div>
                            </div>
                            <p class="text-base py-2">{{ skill.description }}</p>
                            <p class="text-sm" v-if="skill.maxCharges">Maximale Ladungen: {{ skill.maxCharges }}</p>
                            <p class="text-sm" v-if="skill.cooldown">Abklingzeit: {{ skill.cooldown }}s</p>
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
import imgShieldGuard from '../assets/iconSkills/monk_force_shield.jpg'
import imgShieldingHands from '../assets/iconSkills/monk_hands.jpg'
import imgHealingLeaf from '../assets/iconSkills/monk_healing_leaf.jpg'
import imgResurrection from '../assets/iconSkills/monk_resurrection.jpg'
import imgRuneOfHealing from '../assets/iconSkills/monk_rune_of_healing.jpg'
import imgMinionOfTheDead from '../assets/iconSkills/necro_minion_of_the_dead.jpg'
import imgBlessingOfTheLion from '../assets/iconSkills/ritual_blessing_of_the_lion.jpg'
import imgPreservation from '../assets/iconSkills/ritual_ghost_healing.jpg'
import imgBloodsong from '../assets/iconSkills/ritual_ghost.jpg'
import imgEssenceStrike from '../assets/iconSkills/ritual_lighting_strike.jpg'
import imgSouldMend from '../assets/iconSkills/ritual_soul_mend.jpg'
import imgBarrier from '../assets/iconSkills/wizard_barrier.jpg'
import imgConeOfCold from '../assets/iconSkills/wizard_ConeOfCold.jpg'
import imgIceBlast from '../assets/iconSkills/wizard_ice_blast.jpg'
import { computed } from 'vue'

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
        description: 'Heilt für 60. Du opfert 20% deiner Lebenspunkte. Du opferst keine Lebenspunkte, wenn du dich in Hörweite eines Geists befindest.',
        image: imgSpiritBlessing,
        cooldown: 30,
        maxCharges: 1,
        type: 'Normal'
    },
    {
        name: 'Shadow Form',
        description: 'Du bewegst dich 15 Sekunden lang 10% schneller und erleidest nur 50% des eingehenden Schadens.',
        image: imgShadowForm,
        cooldown: 70,
        maxCharges: 1,
        type: 'Ultimate'
    },
    {
        name: 'Apply Poison',
        description: 'Deine Fernkampfangriffe vergiften den Gegner 5 Sekunden lang und verursachen 2 Schaden pro Sekunde.',
        image: imgPoision,
        cooldown: 0,
        maxCharges: 0,
        type: 'Passive'
    },
    {
        name: 'Shield Guard',
        description: 'Schildert einen Spieler für 25.',
        image: imgShieldGuard,
        cooldown: 30,
        maxCharges: 1,
        type: 'Normal'
    },
    {
        name: 'Shielding Hands',
        description: 'Reduziert 20 Sekunden lang den eingehenden Schaden um 3.',
        image: imgShieldingHands,
        cooldown: 40,
        maxCharges: 2,
        type: 'Normal'
    },
    {
        name: 'Healing Leaf',
        description: 'Beschreibung der Fähigkeit 7',
        image: imgHealingLeaf,
        cooldown: 0,
        maxCharges: 0,
        type: 'Normal'
    },
    {
        name: 'Resurrection',
        description: 'Belebt einen verbündeten Spieler mit voller Gesundheit wieder.',
        image: imgResurrection,
        cooldown: 120,
        maxCharges: 1,
        type: 'Ultimate'
    },
    {
        name: 'Rune of Healing',
        description: 'Heilt 30 Lebenspunkte. Heilt 60 weitere Lebenspunkte über 5 Sekunden, wenn das Ziel unter 50% Gesundheit hat.',
        image: imgRuneOfHealing,
        cooldown: 60,
        maxCharges: 1,
        type: 'Ultimate'
    },
    {
        name: 'Minion of the Dead',
        description: 'Beschreibung der Fähigkeit 10',
        image: imgMinionOfTheDead,
        cooldown: 0,
        maxCharges: 0,
        type: 'Normal'
    },
    {
        name: 'Blessing of the Lion',
        description: 'Gewinne jede Sekunde, die du dich bewegst, 1 Schild bis zu 20.',
        image: imgBlessingOfTheLion,
        cooldown: 0,
        maxCharges: 0,
        type: 'Passive'
    },
    {
        name: 'Preservation',
        description: 'Beschwört einen Geist, der Verbündete in der Nähe alle 10 Sekunden über 5 Sekunden um 20 Lebenspunkte heilt.',
        image: imgPreservation,
        cooldown: 0,
        maxCharges: 0,
        type: 'Ultimate'
    },
    {
        name: 'Bloodsong',
        description: 'Ruft einen Geist herbei, der Gegner in der Nähe angreift.',
        image: imgBloodsong,
        cooldown: 60,
        maxCharges: 1,
        type: 'Normal'
    },
    {
        name: 'Essence Strike',
        description: 'Wirke einen Blitz, der 30 Schaden verursacht.',
        image: imgEssenceStrike,
        cooldown: 35,
        maxCharges: 1,
        type: 'Normal'
    },
    {
        name: 'Soul Mend',
        description: 'Heilt für 40. Entfernt einen Zustand für jeden Geist in Hörweite.',
        image: imgSouldMend,
        cooldown: 40,
        maxCharges: 1,
        type: 'Normal'
    },
    {
        name: 'Barrier',
        description: 'Platziert eine solide Wand über 40 Sekunden.',
        image: imgBarrier,
        cooldown: 60,
        maxCharges: 1,
        type: 'Normal'
    },
    {
        name: 'Cone of Cold',
        description: 'Beschreibung der Fähigkeit 17',
        image: imgConeOfCold,
        cooldown: 0,
        maxCharges: 0,
        type: 'Normal'
    },
    {
        name: 'Ice Blast',
        description: 'Beschreibung der Fähigkeit 18',
        image: imgIceBlast,
        cooldown: 0,
        maxCharges: 0,
        type: 'Normal'
    }
]

const skillsSorted = computed(() => {
    return skills.sort((a, b) => {
        if (a.type === b.type) {
            return a.name.localeCompare(b.name)
        }
        return a.type.localeCompare(b.type)
    })
})
</script>