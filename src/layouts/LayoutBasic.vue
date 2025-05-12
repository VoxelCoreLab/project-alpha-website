<template>
    <div class="grid min-h-svh grid-rows-[auto_1fr_auto]">
        <TheHeader />
        <main>
            <TheBreadcrumbs v-if="breadcrumbs" :items="breadcrumbs" />
            <slot />
        </main>
        <TheFooter />
    </div>
</template>
<script setup lang="ts">
import TheHeader from '../components/TheHeader.vue'
import TheFooter from '../components/TheFooter.vue'
import TheBreadcrumbs from '../components/TheBreadcrumbs.vue';

defineProps<{
    breadcrumbs?: {
        text: string
        href: string
    }[]
}>()
</script>