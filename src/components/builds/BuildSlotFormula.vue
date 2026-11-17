<template>
    <div class="grid grid-cols-2 gap-3 lg:flex lg:items-stretch lg:gap-0">
        <template v-for="(slot, index) in slots" :key="slot.label">
            <div
                class="flex items-center gap-4 border border-base-300 border-l-3 border-l-accent bg-base-200 p-4 lg:flex-1 lg:gap-5 lg:px-7 lg:py-5">
                <span class="font-merriweather-sans text-4xl font-extrabold leading-none text-accent lg:text-5xl">
                    {{ slot.count }}
                </span>
                <span>
                    <span class="block font-cinzel text-base font-black uppercase lg:text-xl">{{ slot.label }}</span>
                    <span class="block text-xs text-base-content/60 lg:text-sm">{{ slot.hint }}</span>
                </span>
            </div>
            <span v-if="index < slots.length - 1" aria-hidden="true"
                class="hidden w-8 shrink-0 items-center justify-center font-cinzel text-2xl text-accent/70 lg:flex">+</span>
        </template>
    </div>
</template>

<script setup lang="ts">
const slots = [
    { count: 1, label: 'Weapon', hint: 'Any weapon you like' },
    { count: 1, label: 'Passive', hint: 'Always active' },
    { count: 3, label: 'Skills', hint: 'Mix and match freely' },
    { count: 1, label: 'Ultimate', hint: 'Your game changer' },
]
</script>
