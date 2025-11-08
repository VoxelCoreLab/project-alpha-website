<template>
    <LayoutBasic>
        <!-- Hero -->
        <section class="py-12 bg-gradient-to-b from-base-300 to-base-200">
            <div class="container mx-auto px-4">
                <div class="max-w-5xl mx-auto">
                    <h1 class="text-4xl md:text-5xl font-cinzel font-bold italic uppercase text-secondary mb-2">
                        Payment Successful
                    </h1>
                    <p class="text-base-content/60">Congrats on purchasing Shadow Infection!</p>
                </div>
            </div>
        </section>

        <!-- Content -->
        <section class="py-12 bg-base-200">
            <div class="container mx-auto px-4">
                <div class="max-w-3xl mx-auto">
                    <div class="card bg-base-100 shadow-xl border-2 border-success">
                        <div class="card-body items-center text-center">
                            <div class="mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-16 h-16 text-success">
                                    <path fill="currentColor" d="M12 2a10 10 0 1 0 10 10A10.012 10.012 0 0 0 12 2m-1 15l-5-5l1.414-1.414L11 13.172l6.586-6.586L19 8z" />
                                </svg>
                            </div>
                            <h2 class="text-2xl font-bold">Thank you for your support!</h2>
                            <p class="text-base-content/70 mt-2">
                                Your payment was processed successfully. You now have access to download and play
                                <span class="font-semibold">Shadow Infection</span>.
                            </p>

                            <div class="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                                <router-link
                                    to="/download"
                                    class="btn btn-primary btn-lg uppercase shadow-lg hover:shadow-xl">
                                    Go to Download
                                </router-link>
                            </div>

                            <div class="mt-6 text-xs text-base-content/60">
                                Tip: We also sent a confirmation to your email. Keep it for your records.
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
