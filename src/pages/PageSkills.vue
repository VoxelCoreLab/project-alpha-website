<template>
    <LayoutBasic :breadcrumbs="breadcrumbs">
        <div class="max-w-7xl mx-auto p-4 md:p-8">
            <h1 class="text-4xl md:text-8xl font-nebulous-regular uppercase">Skills</h1>
            <div class="filter mt-2">
                <input v-model="filterSkillType" class="btn filter-reset" value="" type="radio" name="skillType" aria-label="All"/>
                <input v-model="filterSkillType" class="btn" type="radio" value="Passive" name="skillType" aria-label="Passive"/>
                <input v-model="filterSkillType" class="btn" type="radio" value="Normal" name="skillType" aria-label="Normal"/>
                <input v-model="filterSkillType" class="btn" type="radio" value="Ultimate" name="skillType" aria-label="Ultimate"/>
            </div>
            <div class="text-lg mt-4">Visible {{ skillsSorted.length }} of {{ skills.length }}</div>
            <div class="mt-2 grid gap-4 gird-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <div v-for="skill in skillsSorted" :key="skill.name"
                    class="bg-base-100 border-secondary/40 border @container">
                    <div class="grid grid-cols-1 @lg:grid-cols-[1fr_2fr]">
                        <div class="aspect-square"><img :src="skill.image" class="aspect-square bg-base-300 skeleton" /></div>
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
        text: 'Skills',
        href: '/skills'
    }
]

const skills: { name: string, description: string, image: string, cooldown: number, maxCharges: number, type: 'Passive' | 'Normal' | 'Ultimate' }[] = [
    {
        name: 'Swiftness',
        description: 'You move 50% faster for 3 seconds.',
        image: imgSkillSwiftness,
        cooldown: 30,
        maxCharges: 2,
        type: 'Normal'
    },
    {
        name: 'Spiritual Blessing',
        description: 'Heals for 60. You sacrifice 20% of your health. You do not sacrifice health if you are within earshot of a spirit.',
        image: imgSpiritBlessing,
        cooldown: 30,
        maxCharges: 1,
        type: 'Normal'
    },
    {
        name: 'Shadow Form',
        description: 'You move 10% faster for 15 seconds and take only 50% of incoming damage.',
        image: imgShadowForm,
        cooldown: 70,
        maxCharges: 1,
        type: 'Ultimate'
    },
    {
        name: 'Apply Poison',
        description: 'Your ranged attacks poison the target for 5 seconds, dealing 2 damage per second.',
        image: imgPoision,
        cooldown: 0,
        maxCharges: 0,
        type: 'Passive'
    },
    {
        name: 'Sentinel',
        description: 'Shields a player for 25.',
        image: imgShieldGuard,
        cooldown: 30,
        maxCharges: 1,
        type: 'Normal'
    },
    {
        name: 'Protective Hands',
        description: 'Reduces incoming damage by 3 for 20 seconds.',
        image: imgShieldingHands,
        cooldown: 40,
        maxCharges: 2,
        type: 'Normal'
    },
    {
        name: 'Healing Leaf',
        description: 'Heals the target for 15 health every 3 seconds over 9 seconds.',
        image: imgHealingLeaf,
        cooldown: 30,
        maxCharges: 2,
        type: 'Normal'
    },
    {
        name: 'Resurrection',
        description: 'Revives an allied player with full health.',
        image: imgResurrection,
        cooldown: 120,
        maxCharges: 1,
        type: 'Ultimate'
    },
    {
        name: 'Rune of Healing',
        description: 'Heals 30 health. Heals an additional 60 health over 5 seconds if the target is below 50% health.',
        image: imgRuneOfHealing,
        cooldown: 60,
        maxCharges: 1,
        type: 'Ultimate'
    },
    {
        name: 'Minion of the Dead',
        description: 'Summons an undead minion from a nearby corpse to fight by your side.',
        image: imgMinionOfTheDead,
        cooldown: 40,
        maxCharges: 1,
        type: 'Normal'
    },
    {
        name: 'Blessing of the Lion',
        description: 'Gain 1 shield per second while moving, up to 20.',
        image: imgBlessingOfTheLion,
        cooldown: 0,
        maxCharges: 0,
        type: 'Passive'
    },
    {
        name: 'Preservation',
        description: 'Summons a spirit for 60 seconds that heals nearby allies for 20 health over 5 seconds every 10 seconds.',
        image: imgPreservation,
        cooldown: 70,
        maxCharges: 1,
        type: 'Ultimate'
    },
    {
        name: 'Bloodsong',
        description: 'Summons a spirit that attacks nearby enemies.',
        image: imgBloodsong,
        cooldown: 60,
        maxCharges: 1,
        type: 'Normal'
    },
    {
        name: 'Essence Strike',
        description: 'Casts a lightning bolt dealing 30 damage.',
        image: imgEssenceStrike,
        cooldown: 35,
        maxCharges: 1,
        type: 'Normal'
    },
    {
        name: 'Soul Mend',
        description: 'Heals for 40. Removes one condition for each spirit within earshot.',
        image: imgSouldMend,
        cooldown: 40,
        maxCharges: 1,
        type: 'Normal'
    },
    {
        name: 'Barrier',
        description: 'Places a solid wall for 40 seconds.',
        image: imgBarrier,
        cooldown: 60,
        maxCharges: 1,
        type: 'Normal'
    },
    {
        name: 'Cone of Cold',
        description: 'Slows enemies in a cone in front of you by 50% for 5 seconds and deals 20 damage.',
        image: imgConeOfCold,
        cooldown: 40,
        maxCharges: 1,
        type: 'Normal'
    },
    {
        name: 'Ice Blast',
        description: 'Fires a long beam dealing 50 damage to all enemies hit.',
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