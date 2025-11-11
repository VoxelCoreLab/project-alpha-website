<template>
    <LayoutBasic>
        <!-- Product Hero Section -->
        <section class="product-hero relative bg-gradient-to-b from-base-300 to-base-200 py-20">
            <div class="container mx-auto px-4">
                <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start scroll-animate"
                    data-animation="fade-up">
                    <!-- Left Side - Product Image/Media -->
                    <div class="relative scroll-animate" data-animation="slide-left">
                        <div class="aspect-[3/4] bg-base-300 rounded-xl overflow-hidden shadow-2xl">
                            <img src="../assets/LandscapeWithTitle4_3_v2.png" alt="Shadow Infection"
                                class="w-full h-full object-cover object-top border-accent/10 border-4 rounded-xl" />
                        </div>
                        <!-- Platforms Badge -->
                        <h2 class="mt-4 text-center font-cinzel font-bold italic">Supported Platforms</h2>
                        <div class="mt-2 flex gap-2 justify-center">
                            <div class="badge rounded-xl badge-lg gap-2 p-4">
                                <IconWindows class="w-5 h-5 p-0.5" />
                                <span>Windows</span>
                            </div>
                            <div class="badge rounded-xl badge-lg gap-2 p-4">
                                <IconApple class="w-5 h-5" />
                                <span>macOS</span>
                            </div>
                            <div class="badge rounded-xl badge-lg gap-2 p-4">
                                <IconLinux class="w-5 h-5" />
                                <span>Linux</span>
                            </div>
                        </div>
                    </div>

                    <!-- Right Side - Product Info & Pricing -->
                    <div class="space-y-6 scroll-animate" data-animation="slide-right">
                        <!-- Pricing Card -->
                        <div class="card bg-base-100 shadow-xl border-2 border-primary">
                            <div class="card-body">
                                <div>
                                    <h1
                                        class="text-4xl md:text-5xl font-cinzel font-bold italic uppercase text-base-content mb-4">
                                        Shadow Infection
                                    </h1>
                                    <p class="text-xl text-base-content/80">
                                        A co-op PvE and PvP online action arena game
                                    </p>

                                </div>
                                <div class="divider"></div>
                                <div class="flex items-center justify-between mb-4">
                                    <div>
                                        <div class="badge badge-success badge-lg mb-2">
                                            Early Access - 25% OFF
                                        </div>
                                        <div class="flex items-baseline gap-3">
                                            <span class="text-4xl font-bold">€15.00</span>
                                            <span class="text-2xl text-base-content/50 line-through">€20.00</span>
                                        </div>
                                    </div>
                                </div>

                                <div class="divider"></div>

                                <div class="space-y-3">
                                    <div class="flex items-center gap-2">
                                        <svg class="w-5 h-5 text-success" fill="none" stroke="currentColor"
                                            viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M5 13l4 4L19 7"></path>
                                        </svg>
                                        <span>Instant digital download</span>
                                    </div>
                                    <div class="flex items-center gap-2">
                                        <svg class="w-5 h-5 text-success" fill="none" stroke="currentColor"
                                            viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M5 13l4 4L19 7"></path>
                                        </svg>
                                        <span>Early access to development builds</span>
                                    </div>
                                    <div class="flex items-center gap-2">
                                        <svg class="w-5 h-5 text-success" fill="none" stroke="currentColor"
                                            viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M5 13l4 4L19 7"></path>
                                        </svg>
                                        <span>All future updates included</span>
                                    </div>
                                    <!--                                    <div class="flex items-center gap-2">
                                        <svg class="w-5 h-5 text-success" fill="none" stroke="currentColor"
                                            viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M5 13l4 4L19 7"></path>
                                        </svg>
                                        <span>Cross-platform multiplayer</span>
                                    </div>
                                    -->
                                </div>

                                <div class="divider"></div>

                                <button @click="handleCheckout"
                                    class="btn btn-primary btn-lg w-full text-xl uppercase shadow-lg hover:shadow-xl transition-all">
                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z">
                                        </path>
                                    </svg>
                                    Proceed to Checkout
                                </button>
                                <div class="flex items-center justify-center gap-2 mt-3">
                                    <svg class="w-4 h-4 text-success" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z">
                                        </path>
                                    </svg>
                                    <span class="text-xs text-base-content/60">Secure SSL encrypted payment</span>
                                </div>
                            </div>
                        </div>

                        <!-- Early Access Notice -->
                        <div class="alert alert-info scroll-animate" data-animation="fade-up" data-delay="200">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                class="stroke-current shrink-0 w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <span>This game is currently in development. Purchase now at a discounted price and get all
                                future updates!</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- About the Game Section -->
        <section class="py-20 bg-base-200">
            <div class="container mx-auto px-4">
                <div class="max-w-4xl mx-auto">
                    <h2 class="text-4xl font-cinzel font-bold italic uppercase text-secondary mb-8 text-center scroll-animate"
                        data-animation="fade-up">About
                        the Game</h2>

                    <div class="prose prose-lg max-w-none">
                        <p class="text-base-content/80 text-lg leading-relaxed mb-6 scroll-animate"
                            data-animation="fade-up" data-delay="100">
                            Shadow Infection is an intense co-op PvE and PvP online action arena game set in a dark
                            fantasy world
                            consumed by mysterious shadows. Team up with friends to survive waves of enemies or compete
                            against
                            other players in thrilling multiplayer modes.
                        </p>

                        <div class="grid md:grid-cols-2 gap-6 mt-8">
                            <div class="card bg-base-100 shadow-lg scroll-animate" data-animation="slide-left"
                                data-delay="200">
                                <div class="card-body">
                                    <h3 class="card-title text-secondary">
                                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z">
                                            </path>
                                        </svg>
                                        Co-op PvE
                                    </h3>
                                    <p>Work together with friends to survive increasingly difficult waves of shadow
                                        creatures.</p>
                                </div>
                            </div>

                            <div class="card bg-base-100 shadow-lg scroll-animate" data-animation="slide-right"
                                data-delay="200">
                                <div class="card-body">
                                    <h3 class="card-title text-secondary">
                                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z">
                                            </path>
                                        </svg>
                                        PvP Modes
                                    </h3>
                                    <p>Compete in Deathmatch, Conquest, and Castle Siege modes against other players.
                                    </p>
                                </div>
                            </div>

                            <div class="card bg-base-100 shadow-lg scroll-animate" data-animation="slide-left"
                                data-delay="300">
                                <div class="card-body">
                                    <h3 class="card-title text-secondary">
                                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01">
                                            </path>
                                        </svg>
                                        Unique Characters
                                    </h3>
                                    <p>Choose from diverse characters, each with unique abilities and playstyles.</p>
                                </div>
                            </div>

                            <div class="card bg-base-100 shadow-lg scroll-animate" data-animation="slide-right"
                                data-delay="300">
                                <div class="card-body">
                                    <h3 class="card-title text-secondary">
                                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z">
                                            </path>
                                        </svg>
                                        Vast World
                                    </h3>
                                    <p>Explore atmospheric locations from Dusterhafen to the Mausoleum.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- System Requirements Section -->
        <section class="py-20 bg-base-200">
            <div class="container mx-auto px-4">
                <div class="max-w-4xl mx-auto">
                    <h2 class="text-4xl font-cinzel font-bold italic uppercase text-secondary mb-8 text-center scroll-animate"
                        data-animation="fade-up">
                        System Requirements
                    </h2>

                    <div class="grid md:grid-cols-3 gap-6">
                        <div class="card bg-base-100 shadow-lg scroll-animate" data-animation="slide-left"
                            data-delay="100">
                            <div class="card-body">
                                <h3 class="card-title text-xl mb-4 flex items-center gap-2">
                                    <IconWindows class="w-6 h-6 p-0.5" />
                                    Windows
                                </h3>
                                <ul class="space-y-2 text-sm">
                                    <li><strong>OS:</strong> Windows 10 64-bit</li>
                                    <li><strong>Processor:</strong> Intel Core i5</li>
                                    <li><strong>Memory:</strong> 8 GB RAM</li>
                                    <li><strong>Graphics:</strong> GTX 1060 / RX 580</li>
                                    <li><strong>Storage:</strong> 15 GB</li>
                                </ul>
                            </div>
                        </div>

                        <div class="card bg-base-100 shadow-lg scroll-animate" data-animation="fade-up"
                            data-delay="200">
                            <div class="card-body">
                                <h3 class="card-title text-xl mb-4 flex items-center gap-2">
                                    <IconApple class="w-6 h-6" />
                                    macOS
                                </h3>
                                <ul class="space-y-2 text-sm">
                                    <li><strong>OS:</strong> macOS 10.15+</li>
                                    <li><strong>Processor:</strong> Intel Core i5</li>
                                    <li><strong>Memory:</strong> 8 GB RAM</li>
                                    <li><strong>Graphics:</strong> Metal-capable GPU</li>
                                    <li><strong>Storage:</strong> 15 GB</li>
                                </ul>
                            </div>
                        </div>

                        <div class="card bg-base-100 shadow-lg scroll-animate" data-animation="slide-right"
                            data-delay="300">
                            <div class="card-body">
                                <h3 class="card-title text-xl mb-4 flex items-center gap-2">
                                    <IconLinux class="w-6 h-6" />
                                    Linux
                                </h3>
                                <ul class="space-y-2 text-sm">
                                    <li><strong>OS:</strong> Ubuntu 20.04+</li>
                                    <li><strong>Processor:</strong> Intel Core i5</li>
                                    <li><strong>Memory:</strong> 8 GB RAM</li>
                                    <li><strong>Graphics:</strong> GTX 1060 / RX 580</li>
                                    <li><strong>Storage:</strong> 15 GB</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Final CTA Section -->
        <!--
        <section class="py-20 bg-gradient-to-b from-base-200 to-base-300">
            <div class="container mx-auto px-4 text-center">
                <h2 class="text-4xl font-cinzel font-bold italic uppercase text-secondary mb-6">
                    Ready to Enter the World of Shadow Infection?
                </h2>
                <p class="text-xl text-base-content/80 mb-8 max-w-2xl mx-auto">
                    Purchase now at an early access discount and help shape the future of the game!
                </p>
                <button @click="handleCheckout"
                    class="btn btn-accent btn-lg text-xl px-12 uppercase shadow-xl hover:shadow-2xl transition-all">
                    Buy Now - €15.00 <span class="line-through">€20.00</span>
                </button>
            </div>
        </section>
        -->
    </LayoutBasic>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import IconApple from '../components/IconApple.vue';
import IconLinux from '../components/IconLinux.vue';
import IconWindows from '../components/IconWindows.vue';
import LayoutBasic from '../layouts/LayoutBasic.vue';

const router = useRouter();

const handleCheckout = () => {
    router.push('/checkout');
};

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
