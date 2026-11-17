<template>
    <LayoutBasic :breadcrumbs="breadcrumbs">
        <BuildShowcase v-model:build="buildId" heading-tag="h1" class="pt-6! md:pt-10!" />
    </LayoutBasic>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import LayoutBasic from '../layouts/LayoutBasic.vue'
import BuildShowcase from '../components/builds/BuildShowcase.vue'
import { defaultBuildId, findBuild } from '../data/builds'

const breadcrumbs = [
    {
        text: 'Builds',
        href: '/builds',
    },
]

const route = useRoute()
const router = useRouter()

// The selected example build is kept in the URL (/builds?build=bow-hunter) so it can be shared.
const buildId = computed({
    get: () => findBuild(route.query.build)?.id ?? defaultBuildId,
    set: (id: string) => {
        router.replace({ query: { ...route.query, build: id } })
    },
})
</script>
