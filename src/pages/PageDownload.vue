<template>
    <LayoutBasic>
        <!-- Hero -->
        <section class="py-12 bg-gradient-to-b from-base-300 to-base-200">
            <div class="container mx-auto px-4">
                <div class="max-w-5xl mx-auto">
                    <h1 class="text-4xl md:text-5xl font-cinzel font-bold italic uppercase text-secondary mb-2">
                        Download Shadow Infection
                    </h1>
                    <p class="text-base-content/60">Get the latest build and start playing.</p>
                </div>
            </div>
        </section>

        <!-- Content -->
        <section class="py-12 bg-base-200">
            <div class="container mx-auto px-4">
                <div class="max-w-3xl mx-auto space-y-8">
                    <div class="card bg-base-100 shadow-xl">
                        <div class="card-body">
                            <h2 class="card-title text-2xl font-cinzel uppercase text-secondary">Available Builds</h2>
                            <p class="text-base-content/70">Below you'll find the latest downloadable versions. Keep an eye on updates for new features and fixes.</p>

                            <div class="alert alert-info mt-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>Coming soon: Direct build downloads will appear here once early access distribution is enabled.</span>
                            </div>

                            <div class="mt-6">
                                <h3 class="font-semibold mb-2">Next Steps</h3>
                                <ul class="list-disc list-inside space-y-1 text-sm text-base-content/70">
                                    <li>Check your email for any activation instructions.</li>
                                    <li>Join our community (Discord link placeholder) for patch notes.</li>
                                    <li>Report bugs and feedback to help improve Shadow Infection.</li>
                                </ul>
                            </div>

                            <div class="mt-8 flex gap-3">
                                <router-link to="/product" class="btn btn-ghost">Back to Product</router-link>
                                <router-link to="/skills" class="btn btn-outline">View Game Features</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </LayoutBasic>
</template>
<script setup lang="ts">
import LayoutBasic from '../layouts/LayoutBasic.vue'
</script>
