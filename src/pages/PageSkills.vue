<template>
    <LayoutBasic :breadcrumbs="breadcrumbs">
        Page Fähigkeiten
    </LayoutBasic>
</template>
<script setup lang="ts">
import LayoutBasic from '../layouts/LayoutBasic.vue'

const breadcrumbs = [
    {
        text: 'Fähigkeiten',
        href: '/skills'
    }
]
</script>