<template>
    <LayoutBasic :breadcrumbs="breadcrumbs">
        <div class="mx-4">
            <div class="relative max-w-6xl mx-auto">
                <img alt="" src="../assets/world-map.jpg" class="w-full" />

                <div v-for="point in points" :key="point.id" class="absolute"
                    :style="{ left: point.x + '%', top: point.y + '%' }">
                    <div class="absolute transform -translate-x-1/2 -translate-y-1/2">
                        <div class="dropdown dropdown-center group">
                            <div tabindex="0" role="button"
                                class="bg-white/60 w-8 h-8 rounded-full grid justify-center items-center cursor-pointer group-focus-within:border-2 group-focus-within:border-neutral">
                                <div class="w-5 h-5 bg-white/70 rounded-full"></div>
                            </div>
                            <div tabindex="0" role="button" class="absolute whitespace-nowrap cursor-pointer [inset-inline-end:_calc(1/2_*_100%)] translate-x-[50%] bg-base-100/70 group-focus-within:bg-base-100/90 px-1 mt-1 rounded-xs">{{ point.name}}</div>
                            <div tabindex="0" class="dropdown-content card card-sm bg-base-300 z-1 w-64 shadow-lg mt-8">
                                <div class="card-body">
                                    <p class="font-bold">{{ point.name }}</p>
                                    <p>This is a card. You can use any element as a dropdown.</p>
                                </div>
                                <button class="btn btn-neutral btn-sm btn-circle btn-ghost absolute right-2 top-2" onclick="document.activeElement.blur()">✕</button>
                            </div>
                        </div>
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
        text: 'Weltkarte',
        href: '/world-map'
    }
]

const points = [
    { id: 1, x: 78, y: 52, name: 'Ruins of Marado' },
    { id: 2, x: 58.5, y: 55, name: 'Another point' },
    { id: 3, x: 30, y: 10, name: 'Another point' },
    { id: 3, x: 38, y: 86, name: 'Another point' }
]
</script>