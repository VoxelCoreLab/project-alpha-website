<template>
    <LayoutBasic :breadcrumbs="breadcrumbs">
        Page Game Process
    </LayoutBasic>
</template>
<script setup lang="ts">
import LayoutBasic from '../layouts/LayoutBasic.vue'

const breadcrumbs = [
    {
        text: 'Spielverlauf',
        href: '/game-process'
    }
]
</script>