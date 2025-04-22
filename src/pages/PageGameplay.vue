<template>
    <LayoutBasic :breadcrumbs="breadcrumbs">
        Page Gameplay
    </LayoutBasic>
</template>
<script setup lang="ts">
import LayoutBasic from '../layouts/LayoutBasic.vue'

const breadcrumbs = [
    {
        text: 'Gameplay',
        href: '/gameplay'
    }
]
</script>