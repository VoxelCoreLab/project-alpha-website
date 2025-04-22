<template>
    <LayoutBasic :breadcrumbs="breadcrumbs">
        Page Faq
    </LayoutBasic>
</template>
<script setup lang="ts">
import LayoutBasic from '../layouts/LayoutBasic.vue'

const breadcrumbs = [
    {
        text: 'FAQ',
        href: '/faq'
    }
]
</script>