<template>
    <LayoutBasic :breadcrumbs="breadcrumbs">
        <section class="mx-auto max-w-[1200px] px-4 pb-16 pt-6 md:pb-24 md:pt-10">
            <!-- Header -->
            <h1 class="font-cinzel text-4xl font-black uppercase italic text-secondary md:text-6xl">Skill library</h1>
            <p class="mt-6 max-w-2xl text-base leading-relaxed text-base-content/80 md:text-lg">
                Every skill can be combined freely with any weapon. Pick one passive, three skills and one ultimate
                to create your own build.
                <RouterLink to="/builds" class="link link-accent">See example builds</RouterLink>
            </p>

            <BuildSlotFormula class="mt-10 md:mt-14" />

            <!-- Filter -->
            <div class="mt-10 flex flex-wrap items-center justify-between gap-4 md:mt-14">
                <div class="flex flex-wrap gap-2" role="group" aria-label="Filter by skill type">
                    <button v-for="option in filterOptions" :key="option.value" type="button"
                        :aria-pressed="filterSkillType === option.value"
                        class="cursor-pointer border px-4 py-2 font-cinzel text-sm font-black uppercase tracking-wider transition"
                        :class="filterSkillType === option.value
                            ? 'border-accent bg-accent text-accent-content'
                            : 'border-base-300 bg-base-200 text-base-content/70 hover:border-accent/60 hover:text-base-content'"
                        @click="filterSkillType = option.value">
                        {{ option.label }}
                        <span class="ml-1 font-merriweather-sans text-xs opacity-70">{{ countByType(option.value) }}</span>
                    </button>
                </div>
                <p class="text-sm text-base-content/60">Showing {{ skillsSorted.length }} of {{ skills.length }}</p>
            </div>

            <!-- Skill grid -->
            <ul class="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <li v-for="skill in skillsSorted" :key="skill.id"
                    class="flex gap-4 border border-base-300 bg-base-200 p-4"
                    :class="{ 'border-l-3 border-l-accent': skill.type === 'Ultimate' }">
                    <img :src="skill.image" alt="" width="80" height="80" loading="lazy"
                        class="aspect-square w-16 shrink-0 self-start border border-[#3a3a3a] bg-base-300 md:w-20" />
                    <div class="min-w-0">
                        <p class="font-cinzel text-[11px] font-black uppercase tracking-[0.25em] text-accent">{{ skill.type }}</p>
                        <h2 class="mt-0.5 font-cinzel text-lg font-black">{{ skill.name }}</h2>
                        <p class="mt-1 text-sm leading-snug text-base-content/75">{{ skill.description }}</p>
                        <!-- Cooldown and charges are hidden for now, the data is still kept in src/data/skills.ts
                        <p v-if="skill.cooldown || skill.maxCharges" class="mt-2 flex gap-4 text-xs text-base-content/55">
                            <span v-if="skill.cooldown">Cooldown {{ skill.cooldown }}s</span>
                            <span v-if="skill.maxCharges">Charges {{ skill.maxCharges }}</span>
                        </p>
                        -->
                    </div>
                </li>
            </ul>
        </section>
    </LayoutBasic>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import LayoutBasic from '../layouts/LayoutBasic.vue'
import BuildSlotFormula from '../components/builds/BuildSlotFormula.vue'
import { skills, type SkillType } from '../data/skills'

const breadcrumbs = [
    {
        text: 'Skill library',
        href: '/skills',
    },
]

const filterOptions: { label: string, value: SkillType | '' }[] = [
    { label: 'All', value: '' },
    { label: 'Passive', value: 'Passive' },
    { label: 'Normal', value: 'Normal' },
    { label: 'Ultimate', value: 'Ultimate' },
]

const filterSkillType = ref<SkillType | ''>('')

function countByType(type: SkillType | '') {
    return type === '' ? skills.length : skills.filter(skill => skill.type === type).length
}

const skillsSorted = computed(() =>
    skills
        .filter(skill => filterSkillType.value === '' || skill.type === filterSkillType.value)
        .sort((a, b) => a.name.localeCompare(b.name)),
)
</script>
