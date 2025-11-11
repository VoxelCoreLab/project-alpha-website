<template>
    <LayoutBasic>
        <!-- Hero -->
        <section class="py-12 bg-gradient-to-b from-base-300 to-base-200">
            <div class="container mx-auto px-4">
                <div class="max-w-5xl mx-auto scroll-animate" data-animation="fade-up">
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
                    <div class="card bg-base-100 shadow-xl border-2 border-success scroll-animate" data-animation="fade-up" data-delay="100">
                        <div class="card-body items-center text-center">
                            <div class="mb-4 scroll-animate" data-animation="fade-up" data-delay="200">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-16 h-16 text-success">
                                    <path fill="currentColor" d="M12 2a10 10 0 1 0 10 10A10.012 10.012 0 0 0 12 2m-1 15l-5-5l1.414-1.414L11 13.172l6.586-6.586L17 8z" />
                                </svg>
                            </div>
                            <h2 class="text-2xl font-bold scroll-animate" data-animation="fade-up" data-delay="300">Thank you for your support!</h2>
                            <p class="text-base-content/70 mt-2 scroll-animate" data-animation="fade-up" data-delay="400">
                                Your payment was processed successfully. You now have access to download and play
                                <span class="font-semibold">Shadow Infection</span>.
                            </p>

                            <div class="mt-6 flex flex-col sm:flex-row gap-3 justify-center scroll-animate" data-animation="fade-up" data-delay="500">
                                <router-link
                                    to="/download"
                                    class="btn btn-primary btn-lg uppercase shadow-lg hover:shadow-xl">
                                    Go to Download
                                </router-link>
                            </div>

                            <div class="mt-6 text-xs text-base-content/60 scroll-animate" data-animation="fade-up" data-delay="600">
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
import { onMounted, onUnmounted } from 'vue';
import LayoutBasic from '../layouts/LayoutBasic.vue';

let observer: IntersectionObserver | null = null;

onMounted(() => {
    // Create intersection observer for scroll animations
    observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target as HTMLElement;
                const delay = element.dataset.delay || '0';
                
                setTimeout(() => {
                    element.classList.add('visible');
                }, parseInt(delay));
                
                // Unobserve after animation triggers
                observer?.unobserve(element);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Observe all elements with scroll-animate class
    const animatedElements = document.querySelectorAll('.scroll-animate');
    animatedElements.forEach(el => observer?.observe(el));
});

onUnmounted(() => {
    observer?.disconnect();
});
</script>

<style scoped>
/* Scroll Animations */
.scroll-animate {
    opacity: 0;
    transition: all 0.8s ease-out;
}

.scroll-animate.visible {
    opacity: 1;
}

/* Slide from left */
.scroll-animate[data-animation="slide-left"] {
    transform: translateX(-25px);
}

.scroll-animate[data-animation="slide-left"].visible {
    transform: translateX(0);
}

/* Slide from right */
.scroll-animate[data-animation="slide-right"] {
    transform: translateX(25px);
}

.scroll-animate[data-animation="slide-right"].visible {
    transform: translateX(0);
}

/* Fade up */
.scroll-animate[data-animation="fade-up"] {
    transform: translateY(15px);
}

.scroll-animate[data-animation="fade-up"].visible {
    transform: translateY(0);
}

/* Smooth Scrolling */
html {
    scroll-behavior: smooth;
}
</style>
