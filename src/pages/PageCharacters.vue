<template>
    <LayoutBasic :breadcrumbs="breadcrumbs">
        <div class="max-w-7xl mx-auto p-4 md:p-8">
            <h1 class="text-4xl md:text-8xl font-nebulous-regular uppercase">Charaktere</h1>
        </div>
    </LayoutBasic>
</template>
<script setup lang="ts">
import LayoutBasic from '../layouts/LayoutBasic.vue'

const breadcrumbs = [
    {
        text: 'Charaktere',
        href: '/characters'
    }
]
</script>