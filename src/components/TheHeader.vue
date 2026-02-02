<template>
    <header class="bg-base-100 shadow-sm sticky top-0 z-20 border-b border-base-300">
        <div class="navbar bg-base-100 max-w-7xl mx-auto">
            <div class="navbar-start w-auto flex-1 md:flex-none">
                <div class="flex-none md:hidden">
                    <label for="my-drawer" aria-label="open sidebar" class="btn btn-square rounded btn-ghost"
                        role="button" tabindex="0" @keydown.enter.prevent="openDrawer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            class="inline-block h-6 w-6 stroke-current">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </label>
                </div>
                <a class="btn btn-ghost text-xl rounded" href="/"><img class="h-8 w-8" alt=""
                        src="../assets/logo_accent.svg"></a>
            </div>
            <div class="navbar-center hidden md:flex md:flex-1">
                <ul class="menu menu-horizontal px-1">
                    <li class="rounded" v-for="link in links" :key="link.name">
                        <RouterLink :to="link.path" class="uppercase font-bold rounded" activeClass="text-primary">{{
                            link.name }}</RouterLink>
                    </li>
                </ul>
            </div>
            <div class="flex gap-2 items-center">
                <RouterLink to="/product" class="btn btn-xs text-sm btn-outline btn-accent">Buy now</RouterLink>
                <div v-if="isAuthenticated" class="dropdown dropdown-end">
                    <div tabindex="0" role="button" class="btn btn-ghost btn-sm btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                    </div>
                    <ul tabindex="-1" class="menu dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li>
                            <RouterLink to="/download">Download</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/logout">Logout</RouterLink>
                        </li>
                    </ul>
                </div>
                <div v-if="!isAuthenticated">
                    <RouterLink to="/login" class="btn btn-ghost btn-xs text-sm">Sign In</RouterLink>
                </div>
            </div>
        </div>
    </header>
</template>
<script setup lang="ts">
import { getAuth } from 'firebase/auth';
import { useNavigationLinks } from '../composables/useNavigationLinks';
import { useAuth } from '@vueuse/firebase';

const auth = getAuth();

const { isAuthenticated, user } = useAuth(auth);

const { links } = useNavigationLinks();

function openDrawer() {
    const drawer = document.getElementById('my-drawer') as HTMLInputElement | null;
    if (drawer) drawer.checked = true;
}
</script>