<template>
    <LayoutBasic>
        <!-- Hero -->
        <section class="pt-12 bg-gradient-to-b from-base-300 to-base-200">
            <div class="container mx-auto px-4">
                <div class="max-w-5xl mx-auto text-center scroll-animate" data-animation="fade-up">
                    <h1 class="text-4xl md:text-5xl font-cinzel font-bold italic uppercase text-secondary mb-4">
                        Download Shadow Infection
                    </h1>
                    <p class="text-lg text-base-content/60">Choose your platform and start playing</p>
                </div>
            </div>
        </section>

        <!-- Download Buttons -->
        <section class="py-16 bg-base-200">
            <div class="container mx-auto px-4">
                <div class="max-w-4xl mx-auto">
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <!-- Windows -->
                        <div class="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow scroll-animate" data-animation="slide-left" data-delay="100">
                            <div class="card-body items-center text-center">
                                <IconWindows class="w-16 h-16 mb-4 text-primary" />
                                <h2 class="card-title text-xl uppercase">Windows</h2>
                                <p class="text-sm text-base-content/60 mb-4">Windows 10/11</p>
                                <button class="btn btn-primary btn-block">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                    </svg>
                                    Download
                                </button>
                            </div>
                        </div>

                        <!-- Mac -->
                        <div class="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow scroll-animate" data-animation="fade-up" data-delay="150">
                            <div class="card-body items-center text-center">
                                <IconApple class="w-16 h-16 mb-4 text-primary" />
                                <h2 class="card-title text-xl uppercase">Mac</h2>
                                <p class="text-sm text-base-content/60 mb-4">macOS 10.15+</p>
                                <button class="btn btn-primary btn-block">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                    </svg>
                                    Download
                                </button>
                            </div>
                        </div>

                        <!-- Linux -->
                        <div class="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow scroll-animate" data-animation="slide-right" data-delay="200">
                            <div class="card-body items-center text-center">
                                <IconLinux class="w-16 h-16 mb-4 text-primary" />
                                <h2 class="card-title text-xl uppercase">Linux</h2>
                                <p class="text-sm text-base-content/60 mb-4">Ubuntu 20.04+</p>
                                <button class="btn btn-primary btn-block">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                    </svg>
                                    Download
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- System Requirements -->
                    <div class="mt-12 text-center scroll-animate" data-animation="fade-up" data-delay="300">
                        <div class="divider"></div>
                        <h3 class="text-xl font-cinzel font-bold italic uppercase text-secondary mb-4">System Requirements</h3>
                        <p class="text-sm text-base-content/70 max-w-2xl mx-auto">
                            Make sure your system meets the minimum requirements. 
                            For the best experience, we recommend a dedicated graphics card and at least 8GB of RAM.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </LayoutBasic>
</template>
<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import LayoutBasic from '../layouts/LayoutBasic.vue';
import IconWindows from '../components/IconWindows.vue';
import IconApple from '../components/IconApple.vue';
import IconLinux from '../components/IconLinux.vue';

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
