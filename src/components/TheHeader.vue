<template>
    <header class="bg-base-100 shadow-sm">
        <div class="navbar bg-base-100 max-w-7xl mx-auto">
            <div class="navbar-start w-auto">
                <div class="dropdown">
                    <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabindex="0"
                        class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li v-for="link in links" :key="link.name"><a :href="link.path">{{ link.name }}</a></li>
                    </ul>
                </div>
                <a class="btn btn-ghost text-xl " href="/"><img class="h-8 w-8" alt="" src="../assets/logo.png"></a>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal px-1">
                    <li v-for="link in links" :key="link.name"><a :href="link.path">{{ link.name }}</a></li>
                </ul>
            </div>
        </div>
    </header>
</template>
<script setup lang="ts">

const links = [
    { name: 'Home', path: '/' },
    { name: 'Weltkarte', path: '/world-map' },
    { name: 'Spielverlauf', path: '/game-process' },
    { name: 'Gameplay', path: '/gameplay' },
    { name: 'FAQ', path: '/faq' }
]
</script>