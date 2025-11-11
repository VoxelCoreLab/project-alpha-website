<template>
    <LayoutBasic>
        <!-- Hero Section with Video Background -->
        <section class="hero-section relative min-h-[80vh] flex items-center justify-center overflow-hidden">
            <!-- Video Background -->
            <div class="absolute inset-0 w-full h-full overflow-hidden z-0">
                <video autoplay muted loop playsinline class="absolute min-w-full min-h-full object-cover top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <source src="../assets/video/video-background.mp4" type="video/mp4" />
                    <!--<source src="/video/hero-background.webm" type="video/webm" />-->
                </video>
                <!-- Overlay for better text readability -->
                <div class="absolute inset-0 bg-black/60"></div>
            </div>

            <!-- Hero Content -->
            <div class="relative z-10 text-center px-4 py-20">
                <!-- Game Title Image -->
                <div class="animate-fade-in">
                    <img src="../assets/TitelLogoUpdate.png" alt="Shadow Infection Logo"
                        class="mx-auto max-w-2xl w-full drop-shadow-2xl"
                        style="filter: drop-shadow(0 0 30px rgba(0, 0, 0, 0.3));" />
                </div>

                <!-- Call to Action -->
                <div class="animate-fade-in-delay">
                    <p class="mb-12 font-cinzel font-black italic uppercase text-base-content text-xl">
                        Shadow Infection – is a co-op PvE and PvP<br /> online action arena game in development.
                    </p>
                    <RouterLink to="/product"
                        class="btn btn-accent btn-xl shadow-2xl uppercase">
                        Buy Now
                    </RouterLink>
                </div>
            </div>

            <!-- Scroll Indicator -->
            <!--
            <div class="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
                <svg class="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
            </div>
            -->
        </section>

        <!-- Game Features Section -->
        <section class="features-section py-20 bg-base-200">
            <div class="container mx-auto px-4">
                <div class="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
                    <!-- Left Side - Features Content -->
                    <div class="space-y-6 scroll-animate" data-animation="slide-left">
                        <h2 class="text-5xl font-cinzel font-bold italic uppercase text-secondary mb-8">
                            Game Features
                        </h2>
                        <!--

                        <p class="text-lg text-base-content/90 leading-relaxed">
                            Enter a world consumed by darkness, where survival depends on your wits and courage. 
                            Shadow Infection delivers an immersive experience that will keep you on the edge of your seat.
                        </p>
                        -->

                        <div class="space-y-4 mt-8">
                            <div class="feature-item flex items-start gap-4 scroll-animate" data-animation="slide-left" data-delay="100">
                                <div
                                    class="flex-shrink-0 w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center">
                                    <svg class="w-6 h-6 text-secondary" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h3 class="text-xl font-bold text-secondary mb-1">Intense Gameplay</h3>
                                    <p class="text-base-content/80">Experience action and strategic combat in a
                                        atmospheric, fantasy world.</p>
                                </div>
                            </div>

                            <div class="feature-item flex items-start gap-4 scroll-animate" data-animation="slide-left" data-delay="200">
                                <div
                                    class="flex-shrink-0 w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center">
                                    <svg class="w-6 h-6 text-secondary" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01">
                                        </path>
                                    </svg>
                                </div>
                                <div>
                                    <h3 class="text-xl font-bold text-secondary mb-1">Unique Abilities</h3>
                                    <p class="text-base-content/80">Master diverse character abilities and create your
                                        own playstyle to overcome challenges.</p>
                                </div>
                            </div>

                            <!--

                            <div class="feature-item flex items-start gap-4">
                                <div class="flex-shrink-0 w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center">
                                    <svg class="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h3 class="text-xl font-bold text-secondary mb-1">Vast World to Explore</h3>
                                    <p class="text-base-content/80">Discover mysterious locations from Dusterhafen to the Mausoleum, each with unique challenges.</p>
                                </div>
                            </div>

                            -->

                            <div class="feature-item flex items-start gap-4 scroll-animate" data-animation="slide-left" data-delay="300">
                                <div
                                    class="flex-shrink-0 w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center">
                                    <svg class="w-6 h-6 text-secondary" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z">
                                        </path>
                                    </svg>
                                </div>
                                <div>
                                    <h3 class="text-xl font-bold text-secondary mb-1">Multiplayer Experience</h3>
                                    <p class="text-base-content/80">Team up with friends or face the darkness alone -
                                        the choice is yours.</p>
                                </div>
                            </div>

                            <div class="feature-item flex items-start gap-4 scroll-animate" data-animation="slide-left" data-delay="400">
                                <div
                                    class="flex-shrink-0 w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center">
                                    <svg class="w-6 h-6 text-secondary" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z">
                                        </path>
                                    </svg>
                                </div>
                                <div>
                                    <h3 class="text-xl font-bold text-secondary mb-1">Game Modes</h3>
                                    <p class="text-base-content/80">Co-op Wave Survival and PvP Deathmatch, Conquest, Castle Siege.</p>
                                </div>
                            </div>
                            <!-- Call To Action inside Features -->
                            <RouterLink to="/product" class="btn btn-accent btn-lg uppercase scroll-animate" data-animation="fade-up" data-delay="500">
                                Buy Now
                            </RouterLink>
                        </div>
                    </div>

                    <!-- Right Side - Screenshot -->
                    <div class="relative scroll-animate" data-animation="slide-right">
                        <div class="relative rounded-lg overflow-hidden shadow-2xl border-4 border-accent/10">
                            <img src="../assets/screenshots_ingame/shot_06.webp" alt="Shadow Infection Gameplay Screenshot"
                                class="w-full h-auto" />
                            <!-- Glow Effect -->
                            <div
                                class="absolute inset-0 bg-gradient-to-t from-base-300/20 to-transparent pointer-events-none">
                            </div>
                        </div>
                        <!-- Floating Badge -->
                        <!--
                        <div
                            class="absolute -top-6 -right-6 bg-secondary text-secondary-content px-6 py-3 rounded-lg shadow-xl font-bold text-lg rotate-3">
                            Ingame Screenshot
                        </div>
                        -->
                    </div>
                </div>
            </div>
        </section>

        <!-- Newsletter Section -->
        <section class="newsletter-section py-20 bg-base-100 relative overflow-hidden">
            <!-- Background Pattern -->
            <div class="absolute inset-0 opacity-5">
                <div class="absolute inset-0"
                    style="background-image: repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px);">
                </div>
            </div>

            <div class="container mx-auto px-4 relative z-10">
                <div class="max-w-2xl mx-auto text-center scroll-animate" data-animation="fade-up">
                    <h2 class="text-4xl md:text-5xl font-cinzel font-bold italic uppercase text-secondary mb-6">
                        Newsletter
                    </h2>
                    <p class="text-lg text-base-content/80 mb-8">
                        Subscribe to our newsletter and be the first to know about updates,
                        exclusive content, and special events in the world of Shadow Infection.
                    </p>

                    <!-- Newsletter Form Component -->
                    <div class="flex justify-center">
                        <NewsletterForm />
                    </div>

                    <!-- Social Proof -->
                    <div class="mt-12 flex flex-col md:flex-row items-center justify-center gap-8 text-base-content/60">
                        <div class="text-center">
                            <div class="text-2xl font-bold text-secondary">Follow</div>
                            <div class="text-sm">The Journey</div>
                        </div>
                        <div class="w-px h-12 bg-base-content/20"></div>
                        <div class="text-center">
                            <div class="text-2xl font-bold text-secondary">Weekly</div>
                            <div class="text-sm">Dev Updates</div>
                        </div>
                        <div class="w-px h-12 bg-base-content/20"></div>
                        <div class="text-center">
                            <div class="text-2xl font-bold text-secondary">Exclusive</div>
                            <div class="text-sm">Content</div>
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
import NewsletterForm from '../components/NewsletterForm.vue';

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
/* Animations */
@keyframes fade-in {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-fade-in {
    animation: fade-in 1s ease-out;
}

.animate-fade-in-delay {
    animation: fade-in 1s ease-out 0.3s both;
}

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
    transform: translateX(-50px);
}

.scroll-animate[data-animation="slide-left"].visible {
    transform: translateX(0);
}

/* Slide from right */
.scroll-animate[data-animation="slide-right"] {
    transform: translateX(50px);
}

.scroll-animate[data-animation="slide-right"].visible {
    transform: translateX(0);
}

/* Fade up */
.scroll-animate[data-animation="fade-up"] {
    transform: translateY(30px);
}

.scroll-animate[data-animation="fade-up"].visible {
    transform: translateY(0);
}

/* Video Background Styling */
.hero-section video {
    opacity: 0.8;
}

/* Feature Items Hover Effect */
.feature-item {
    transition: transform 0.3s ease;
}

.feature-item:hover {
    transform: translateX(10px);
}

/* Smooth Scrolling */
html {
    scroll-behavior: smooth;
}
</style>