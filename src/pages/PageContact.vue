<template>
<LayoutBasic :breadcrumbs="breadcrumbs">
    Page Contact
</LayoutBasic>
</template>
<script setup lang="ts">
import LayoutBasic from '../layouts/LayoutBasic.vue'

const breadcrumbs = [
    {
        text: 'Kontakt',
        href: '/contact'
    }
]
</script>