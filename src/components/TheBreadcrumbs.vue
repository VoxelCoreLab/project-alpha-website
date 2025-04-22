<template>
    <div class="breadcrumbs text-sm max-w-7xl mx-auto px-8 py-4">
        <ul>
            <li>
                <a href="/">
                    <IconHome class="h-4 w-4" />
                </a>
            </li>
            <li v-for="(item, index) in items" :key="index">
                <a :href="item.href">
                    {{ item.text }}
                </a>
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