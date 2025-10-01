<template>
    <LayoutBasic :breadcrumbs="breadcrumbs">
        <div class="m-auto grid h-full max-w-6xl p-4 md:p-8 text-left">
            <div class="flex flex-col gap-6">
                <h1 class="text-4xl font-bold">Contact</h1>
                <p>E-Mail: voxelcorelab@gmail.com</p>
            </div>
        </div>
    </LayoutBasic>
</template>
<script setup lang="ts">
import LayoutBasic from '../layouts/LayoutBasic.vue'

const breadcrumbs = [
    {
        text: 'Contact',
        href: '/contact'
    }
]
</script>