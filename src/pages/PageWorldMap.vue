<template>
    <LayoutBasic :breadcrumbs="breadcrumbs">
        Page World Map
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
</script>