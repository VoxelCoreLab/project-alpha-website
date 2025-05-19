<template>
    <div class="breadcrumbs text-sm max-w-7xl mx-auto px-4 md:px-8 py-2 md:py-4">
        <ul>
            <li>
                <RouterLink to="/">
                    <IconHome class="h-4 w-4" />
                </RouterLink>
            </li>
            <li v-for="(item, index) in items" :key="index">
                <RouterLink :to="item.href">
                    {{ item.text }}
                </RouterLink>
            </li>
        </ul>
    </div>
</template>
<script setup lang="ts">
import IconHome from './IconHome.vue';

defineProps<{
    items: {
        text: string;
        href: string;
    }[];
}>();
</script>