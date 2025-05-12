<template>
    <div class="drawer">
        <input id="my-drawer" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content grid min-h-svh grid-rows-[auto_1fr_auto]">
            <TheHeader />
            <main>
                <TheBreadcrumbs v-if="breadcrumbs" :items="breadcrumbs" />
                <slot />
            </main>
            <TheFooter />
        </div>
        <div class="drawer-side z-50">
            <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
            <ul class="menu bg-base-200 min-h-full w-80 p-2 pt-3">
                <!-- Sidebar content here -->
                <li class="flex flex-row">
                    <label for="my-drawer" aria-label="close sidebar" class="btn btn-square btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            class="inline-block h-6 w-6 stroke-current">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </label>
                    <a class="btn btn-ghost text-xl" href="/"><img class="h-8 w-8" alt="" src="../assets/logo.png"></a>
                </li>
                <li v-for="link in links" :key="link.name">
                    <RouterLink :to="link.path" activeClass="underline">{{ link.name }}</RouterLink>
                </li>
            </ul>
        </div>
    </div>
</template>
<script setup lang="ts">
import TheHeader from '../components/TheHeader.vue'
import TheFooter from '../components/TheFooter.vue'
import TheBreadcrumbs from '../components/TheBreadcrumbs.vue';
import { useNavigationLinks } from '../composables/useNavigationLinks';

defineProps<{
    breadcrumbs?: {
        text: string
        href: string
    }[]
}>()

const { links } = useNavigationLinks();
</script>