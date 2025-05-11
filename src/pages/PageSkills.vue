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
    },
    {
        name: 'Shield Guard',
        description: 'Beschreibung der Fähigkeit 5',
        image: imgShieldGuard,
        cooldown: 0,
        maxCharges: 0,
        type: 'Normal'
    },
    {
        name: 'Shielding Hands',
        description: 'Beschreibung der Fähigkeit 6',
        image: imgShieldingHands,
        cooldown: 0,
        maxCharges: 0,
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
        description: 'Beschreibung der Fähigkeit 8',
        image: imgResurrection,
        cooldown: 0,
        maxCharges: 0,
        type: 'Ultimate'
    },
    {
        name: 'Rune of Healing',
        description: 'Beschreibung der Fähigkeit 9',
        image: imgRuneOfHealing,
        cooldown: 0,
        maxCharges: 0,
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
        description: 'Beschreibung der Fähigkeit 11',
        image: imgBlessingOfTheLion,
        cooldown: 0,
        maxCharges: 0,
        type: 'Passive'
    },
    {
        name: 'Preservation',
        description: 'Beschreibung der Fähigkeit 12',
        image: imgPreservation,
        cooldown: 0,
        maxCharges: 0,
        type: 'Ultimate'
    },
    {
        name: 'Bloodsong',
        description: 'Beschreibung der Fähigkeit 13',
        image: imgBloodsong,
        cooldown: 0,
        maxCharges: 0,
        type: 'Normal'
    },
    {
        name: 'Essence Strike',
        description: 'Beschreibung der Fähigkeit 14',
        image: imgEssenceStrike,
        cooldown: 0,
        maxCharges: 0,
        type: 'Normal'
    },
    {
        name: 'Soul Mend',
        description: 'Beschreibung der Fähigkeit 15',
        image: imgSouldMend,
        cooldown: 0,
        maxCharges: 0,
        type: 'Normal'
    },
    {
        name: 'Barrier',
        description: 'Beschreibung der Fähigkeit 16',
        image: imgBarrier,
        cooldown: 0,
        maxCharges: 0,
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
</script>