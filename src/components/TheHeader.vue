<template>
    <header class="bg-base-100 shadow-sm sticky top-0 z-20 border-b border-base-300">
        <div class="navbar bg-base-100 max-w-7xl mx-auto">
            <div class="navbar-start w-auto">
                <div class="flex-none md:hidden">
                    <label for="my-drawer" aria-label="open sidebar" class="btn btn-square rounded btn-ghost" role="button" tabindex="0"
                        @keydown.enter.prevent="openDrawer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            class="inline-block h-6 w-6 stroke-current">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </label>
                </div>
                <a class="btn btn-ghost text-xl rounded" href="/"><img class="h-8 w-8" alt="" src="../assets/logo.png"></a>
            </div>
            <div class="navbar-center hidden md:flex">
                <ul class="menu menu-horizontal px-1">
                    <li class="rounded" v-for="link in links" :key="link.name">
                        <RouterLink :to="link.path" class="uppercase font-bold rounded" activeClass="text-primary">{{ link.name }}</RouterLink>
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>
<script setup lang="ts">
import { useNavigationLinks } from '../composables/useNavigationLinks';

const { links } = useNavigationLinks();

function openDrawer() {
    const drawer = document.getElementById('my-drawer') as HTMLInputElement | null;
    if (drawer) drawer.checked = true;
}
</script>