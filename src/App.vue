<template>
      <div class="drawer">
        <input id="my-drawer" type="checkbox" class="drawer-toggle" v-model="isDrawerOpen" inert="true" />
        <div class="drawer-side z-50">
            <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
            <ul class="menu bg-base-200 min-h-full w-80 p-0">
                <!-- Sidebar content here -->
                <li class="flex flex-row px-2 py-3">
                    <label for="my-drawer" aria-label="close sidebar" class="btn btn-square btn-ghost" role="button" tabindex="0"
                        @keydown.enter.prevent="() => closeDrawer()">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            class="inline-block h-6 w-6 stroke-current">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </label>
                    <a class="btn btn-ghost text-xl" href="/"><img class="h-8 w-8" alt="" src="./assets/logo_accent.svg"></a>
                </li>
                <hr class="text-secondary/50 pb-3" />
                <li v-for="link in links" :key="link.name">
                    <RouterLink class="py-2 text-lg mx-2" :to="link.path" activeClass="bg-secondary/25" @click="() => closeDrawer()">{{ link.name }}</RouterLink>
                </li>
            </ul>
        </div>
        <div class="drawer-content">
          <RouterView :key="$route.path" />
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { useNavigationLinks } from './composables/useNavigationLinks';

const { links } = useNavigationLinks();

const isDrawerOpen = ref(false);

function closeDrawer() {
    const drawer = document.getElementById('my-drawer') as HTMLInputElement | null;
    if (drawer) drawer.checked = false;
}
</script>
