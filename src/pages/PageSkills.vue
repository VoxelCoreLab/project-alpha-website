<template>
    <LayoutBasic :breadcrumbs="breadcrumbs">
        <div class="max-w-7xl mx-auto px-8 py-8">
            <h1 class="text-4xl md:text-8xl font-nebulous-regular uppercase">Fertigkeiten</h1>
            <div class="filter mt-2">
                <input v-model="filterSkillType" class="btn filter-reset" value="" type="radio" name="skillType" aria-label="All"/>
                <input v-model="filterSkillType" class="btn" type="radio" value="Passive" name="skillType" aria-label="Passive"/>
                <input v-model="filterSkillType" class="btn" type="radio" value="Normal" name="skillType" aria-label="Normal"/>
                <input v-model="filterSkillType" class="btn" type="radio" value="Ultimate" name="skillType" aria-label="Ultimate"/>
            </div>
            <div class="text-lg mt-4">Sichtbar {{ skillsSorted.length }} von {{ skills.length }}</div>
            <div class="mt-2 grid gap-4 gird-cols-1 md:grid-cols-2 lg:grid-cols-3">
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
import { computed, ref } from 'vue'

const breadcrumbs = [
    {
        text: 'Fähigkeiten',
        href: '/skills'
    }
]

const skills: { name: string, description: string, image: string, cooldown: number, maxCharges: number, type: 'Passive' | 'Normal' | 'Ultimate' }[] = [
    {
        name: 'Schnelligkeit',
        description: 'Du bewegst dich 3 Sekunden lang 50% schneller.',
        image: imgSkillSwiftness,
        cooldown: 30,
        maxCharges: 2,
        type: 'Normal'
    },
    {
        name: 'Geistiger Segen',
        description: 'Heilt für 60. Du opfert 20% deiner Lebenspunkte. Du opferst keine Lebenspunkte, wenn du dich in Hörweite eines Geists befindest.',
        image: imgSpiritBlessing,
        cooldown: 30,
        maxCharges: 1,
        type: 'Normal'
    },
    {
        name: 'Schattenform',
        description: 'Du bewegst dich 15 Sekunden lang 10% schneller und erleidest nur 50% des eingehenden Schadens.',
        image: imgShadowForm,
        cooldown: 70,
        maxCharges: 1,
        type: 'Ultimate'
    },
    {
        name: 'Gift anwenden',
        description: 'Deine Fernkampfangriffe vergiften den Gegner 5 Sekunden lang und verursachen 2 Schaden pro Sekunde.',
        image: imgPoision,
        cooldown: 0,
        maxCharges: 0,
        type: 'Passive'
    },
    {
        name: 'Schildwache',
        description: 'Schildet einen Spieler für 25.',
        image: imgShieldGuard,
        cooldown: 30,
        maxCharges: 1,
        type: 'Normal'
    },
    {
        name: 'Schützende Hände',
        description: 'Reduziert 20 Sekunden lang den eingehenden Schaden um 3.',
        image: imgShieldingHands,
        cooldown: 40,
        maxCharges: 2,
        type: 'Normal'
    },
    {
        name: 'Heilendes Blatt',
        description: 'Beschreibung der Fähigkeit 7',
        image: imgHealingLeaf,
        cooldown: 0,
        maxCharges: 0,
        type: 'Normal'
    },
    {
        name: 'Auferstehung',
        description: 'Belebt einen verbündeten Spieler mit voller Gesundheit wieder.',
        image: imgResurrection,
        cooldown: 120,
        maxCharges: 1,
        type: 'Ultimate'
    },
    {
        name: 'Rune der Heilung',
        description: 'Heilt 30 Lebenspunkte. Heilt 60 weitere Lebenspunkte über 5 Sekunden, wenn das Ziel unter 50% Gesundheit hat.',
        image: imgRuneOfHealing,
        cooldown: 60,
        maxCharges: 1,
        type: 'Ultimate'
    },
    {
        name: 'Lakai der Toten',
        description: 'Beschreibung der Fähigkeit 10',
        image: imgMinionOfTheDead,
        cooldown: 0,
        maxCharges: 0,
        type: 'Normal'
    },
    {
        name: 'Segen des Löwen',
        description: 'Gewinne jede Sekunde, die du dich bewegst, 1 Schild bis zu 20.',
        image: imgBlessingOfTheLion,
        cooldown: 0,
        maxCharges: 0,
        type: 'Passive'
    },
    {
        name: 'Bewahrung',
        description: 'Beschwört einen Geist für 60 Sekunden, der Verbündete in der Nähe alle 10 Sekunden über 5 Sekunden um 20 Lebenspunkte heilt.',
        image: imgPreservation,
        cooldown: 70,
        maxCharges: 1,
        type: 'Ultimate'
    },
    {
        name: 'Blutgesang',
        description: 'Ruft einen Geist herbei, der Gegner in der Nähe angreift.',
        image: imgBloodsong,
        cooldown: 60,
        maxCharges: 1,
        type: 'Normal'
    },
    {
        name: 'Essenz-Schlag',
        description: 'Wirke einen Blitz, der 30 Schaden verursacht.',
        image: imgEssenceStrike,
        cooldown: 35,
        maxCharges: 1,
        type: 'Normal'
    },
    {
        name: 'Seelenheilung',
        description: 'Heilt für 40. Entfernt einen Zustand für jeden Geist in Hörweite.',
        image: imgSouldMend,
        cooldown: 40,
        maxCharges: 1,
        type: 'Normal'
    },
    {
        name: 'Barriere',
        description: 'Platziert eine solide Wand über 40 Sekunden.',
        image: imgBarrier,
        cooldown: 60,
        maxCharges: 1,
        type: 'Normal'
    },
    {
        name: 'Frostkegel',
        description: 'Verlangsamt Gegner in einem Kegel vor dir 5 Sekunden lang um 50% und fügt ihnen 20 Schaden zu.',
        image: imgConeOfCold,
        cooldown: 40,
        maxCharges: 1,
        type: 'Normal'
    },
    {
        name: 'Eissprengung',
        description: 'Feuert einen langen Strahl ab, der allen getroffenen Gegnern 50 Schaden zufügt.',
        image: imgIceBlast,
        cooldown: 45,
        maxCharges: 1,
        type: 'Normal'
    }
]

const filterSkillType = ref('')

const skillsSorted = computed(() => {
    var skillsFiltered = skills.filter(skill => {
        if (filterSkillType.value === '') {
            return true
        }
        return skill.type === filterSkillType.value
    })
    return skillsFiltered.sort((a, b) => {
        return a.name.localeCompare(b.name)
    })
})
</script>