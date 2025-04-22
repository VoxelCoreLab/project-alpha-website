<template>
    <LayoutBasic :breadcrumbs="breadcrumbs">
        Page Privacy Policy
    </LayoutBasic>
</template>
<script setup lang="ts">
import LayoutBasic from '../layouts/LayoutBasic.vue'

const breadcrumbs = [
    {
        text: 'Datenschutzerklärung',
        href: '/privacy-policy'
    }
]
</script>