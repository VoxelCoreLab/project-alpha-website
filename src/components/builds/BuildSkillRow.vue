<template>
    <div class="flex items-start gap-4">
        <img :src="skill.image" alt="" loading="lazy" :width="ultimate ? 84 : 56" :height="ultimate ? 84 : 56"
            class="aspect-square shrink-0 self-start"
            :class="ultimate ? 'w-[72px] border-2 border-(--build-color) shadow-[0_0_28px_color-mix(in_srgb,var(--build-color)_70%,transparent)] lg:w-[84px]' : 'w-14 border border-[#3a3a3a]'" />
        <div :class="ultimate ? 'pt-1' : ''">
            <h4 class="font-cinzel font-black" :class="ultimate ? 'text-xl' : 'text-base'">{{ skill.name }}</h4>
            <p class="mt-0.5 text-[13px] leading-snug text-base-content/70">{{ skill.description }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Skill } from '../../data/skills'

defineProps<{
    skill: Skill
    ultimate?: boolean
}>()
</script>
