<template>
    <LayoutBasic>
        <!-- Product Hero Section -->
        <section class="product-hero relative bg-gradient-to-b from-base-300 to-base-200 py-20">
            <div class="container mx-auto px-4">
                <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <!-- Left Side - Product Image/Media -->
                    <div class="relative">
                        <div class="aspect-video bg-base-300 rounded-xl overflow-hidden shadow-2xl">
                            <img src="../assets/TitelLogoUpdate.png" alt="Shadow Infection" 
                                class="w-full h-full object-contain p-8" />
                        </div>
                        <!-- Platforms Badge -->
                        <div class="mt-6 flex gap-4 justify-center">
                            <div class="badge badge-lg badge-outline gap-2 p-4">
                                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/>
                                </svg>
                                <span>Windows</span>
                            </div>
                            <div class="badge badge-lg badge-outline gap-2 p-4">
                                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 14.703c-2.657 0-4.595 1.413-5.784 4.237-.901-.144-1.942-.299-2.216-.37V5.568c.935-.146 2.519-.428 3.344-.536 1.86-.246 3.492-.248 5.06.105-.01.087-.02.173-.03.26-.348 3.08.22 5.926 1.536 8.306h-1.91zm2.544-11.362a8.43 8.43 0 0 1-3.002-.522C9.943 2.61 8.306 2.477 6.24 2.74c-.912.116-2.596.402-3.676.574a.528.528 0 0 0-.447.524v13.07c0 .265.199.491.459.524 0 0 2.243.348 3.07.475 1.379.212 2.833-.059 3.828-1.152.863-1.158 1.69-2.795 3.527-2.795h2.536c1.14.001 1.807-.678 2.398-1.498.766-1.063 1.202-2.428 1.46-3.872.325-1.872.158-3.766-.473-5.196-.733-1.663-1.968-2.707-3.918-2.707a6.174 6.174 0 0 0-1.46.173M21.78 14.94c-1.119 0-1.994.895-1.994 2.032 0 1.138.875 2.032 1.995 2.032 1.119 0 1.994-.894 1.994-2.032 0-1.137-.875-2.031-1.994-2.031z"/>
                                </svg>
                                <span>macOS</span>
                            </div>
                            <div class="badge badge-lg badge-outline gap-2 p-4">
                                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.84-.415 1.791-.415 2.844 0 1.052.137 2.003.415 2.844C6.967 23.983 9.504 24 12.504 24c3 0 5.537-.017 7.416-4.396.278-.841.415-1.792.415-2.844 0-1.053-.137-2.004-.415-2.844-.589-1.771-1.831-3.47-2.715-4.521-.75-1.067-.975-1.928-1.051-3.02-.065-1.491 1.056-5.965-3.17-6.298-.165-.013-.325-.021-.48-.021zm-.002 1.5c.09 0 .18.006.27.015 2.154.172 2.227 2.805 2.27 3.798.088 1.396.367 2.536 1.315 3.876.948 1.341 2.04 2.82 2.55 4.354.204.612.305 1.31.305 2.097s-.101 1.485-.305 2.097c-1.647 4.923-5.993 4.763-6.403 4.763s-4.756.16-6.403-4.763c-.204-.612-.305-1.31-.305-2.097s.101-1.485.305-2.097c.51-1.534 1.602-3.013 2.55-4.354.948-1.34 1.227-2.48 1.315-3.876.043-.993.116-3.626 2.27-3.798.09-.009.18-.015.27-.015z"/>
                                </svg>
                                <span>Linux</span>
                            </div>
                        </div>
                    </div>

                    <!-- Right Side - Product Info & Pricing -->
                    <div class="space-y-6">
                        <div>
                            <h1 class="text-5xl md:text-6xl font-cinzel font-bold italic uppercase text-secondary mb-4">
                                Shadow Infection
                            </h1>
                            <p class="text-xl text-base-content/80">
                                A co-op PvE and PvP online action arena game
                            </p>
                        </div>

                        <!-- Pricing Card -->
                        <div class="card bg-base-100 shadow-xl border-2 border-accent">
                            <div class="card-body">
                                <div class="flex items-center justify-between mb-4">
                                    <div>
                                        <div class="badge badge-accent badge-lg mb-2">
                                            Early Access - 25% OFF
                                        </div>
                                        <div class="flex items-baseline gap-3">
                                            <span class="text-4xl font-bold text-accent">€15.00</span>
                                            <span class="text-2xl text-base-content/50 line-through">€20.00</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="divider"></div>
                                
                                <div class="space-y-3">
                                    <div class="flex items-center gap-2">
                                        <svg class="w-5 h-5 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                        <span>Instant digital download</span>
                                    </div>
                                    <div class="flex items-center gap-2">
                                        <svg class="w-5 h-5 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                        <span>Early access to development builds</span>
                                    </div>
                                    <div class="flex items-center gap-2">
                                        <svg class="w-5 h-5 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                        <span>All future updates included</span>
                                    </div>
                                    <div class="flex items-center gap-2">
                                        <svg class="w-5 h-5 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                        <span>Cross-platform multiplayer</span>
                                    </div>
                                </div>

                                <div class="divider"></div>

                                <button @click="handleCheckout" 
                                    class="btn btn-accent btn-lg w-full text-xl uppercase shadow-lg hover:shadow-xl transition-all">
                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                    </svg>
                                    Proceed to Checkout
                                </button>

                                <p class="text-sm text-center text-base-content/60 mt-2">
                                    Secure payment processing
                                </p>
                            </div>
                        </div>

                        <!-- Early Access Notice -->
                        <div class="alert alert-info">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <span>This game is currently in development. Purchase now at a discounted price and get all future updates!</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- About the Game Section -->
        <section class="py-20 bg-base-200">
            <div class="container mx-auto px-4">
                <div class="max-w-4xl mx-auto">
                    <h2 class="text-4xl font-cinzel font-bold italic uppercase text-secondary mb-8 text-center">
                        About the Game
                    </h2>
                    
                    <div class="prose prose-lg max-w-none">
                        <p class="text-base-content/80 text-lg leading-relaxed mb-6">
                            Shadow Infection is an intense co-op PvE and PvP online action arena game set in a dark fantasy world 
                            consumed by mysterious shadows. Team up with friends to survive waves of enemies or compete against 
                            other players in thrilling multiplayer modes.
                        </p>
                        
                        <div class="grid md:grid-cols-2 gap-6 mt-8">
                            <div class="card bg-base-100 shadow-lg">
                                <div class="card-body">
                                    <h3 class="card-title text-secondary">
                                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                        </svg>
                                        Co-op PvE
                                    </h3>
                                    <p>Work together with friends to survive increasingly difficult waves of shadow creatures.</p>
                                </div>
                            </div>

                            <div class="card bg-base-100 shadow-lg">
                                <div class="card-body">
                                    <h3 class="card-title text-secondary">
                                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                                        </svg>
                                        PvP Modes
                                    </h3>
                                    <p>Compete in Deathmatch, Conquest, and Castle Siege modes against other players.</p>
                                </div>
                            </div>

                            <div class="card bg-base-100 shadow-lg">
                                <div class="card-body">
                                    <h3 class="card-title text-secondary">
                                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                                d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>
                                        </svg>
                                        Unique Characters
                                    </h3>
                                    <p>Choose from diverse characters, each with unique abilities and playstyles.</p>
                                </div>
                            </div>

                            <div class="card bg-base-100 shadow-lg">
                                <div class="card-body">
                                    <h3 class="card-title text-secondary">
                                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                                d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
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
        <section class="py-20 bg-base-300">
            <div class="container mx-auto px-4">
                <div class="max-w-4xl mx-auto">
                    <h2 class="text-4xl font-cinzel font-bold italic uppercase text-secondary mb-8 text-center">
                        System Requirements
                    </h2>
                    
                    <div class="grid md:grid-cols-3 gap-6">
                        <div class="card bg-base-100 shadow-lg">
                            <div class="card-body">
                                <h3 class="card-title text-xl mb-4 flex items-center gap-2">
                                    <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/>
                                    </svg>
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

                        <div class="card bg-base-100 shadow-lg">
                            <div class="card-body">
                                <h3 class="card-title text-xl mb-4 flex items-center gap-2">
                                    <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 14.703c-2.657 0-4.595 1.413-5.784 4.237-.901-.144-1.942-.299-2.216-.37V5.568c.935-.146 2.519-.428 3.344-.536 1.86-.246 3.492-.248 5.06.105-.01.087-.02.173-.03.26-.348 3.08.22 5.926 1.536 8.306h-1.91zm2.544-11.362a8.43 8.43 0 0 1-3.002-.522C9.943 2.61 8.306 2.477 6.24 2.74c-.912.116-2.596.402-3.676.574a.528.528 0 0 0-.447.524v13.07c0 .265.199.491.459.524 0 0 2.243.348 3.07.475 1.379.212 2.833-.059 3.828-1.152.863-1.158 1.69-2.795 3.527-2.795h2.536c1.14.001 1.807-.678 2.398-1.498.766-1.063 1.202-2.428 1.46-3.872.325-1.872.158-3.766-.473-5.196-.733-1.663-1.968-2.707-3.918-2.707a6.174 6.174 0 0 0-1.46.173M21.78 14.94c-1.119 0-1.994.895-1.994 2.032 0 1.138.875 2.032 1.995 2.032 1.119 0 1.994-.894 1.994-2.032 0-1.137-.875-2.031-1.994-2.031z"/>
                                    </svg>
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

                        <div class="card bg-base-100 shadow-lg">
                            <div class="card-body">
                                <h3 class="card-title text-xl mb-4 flex items-center gap-2">
                                    <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.84-.415 1.791-.415 2.844 0 1.052.137 2.003.415 2.844C6.967 23.983 9.504 24 12.504 24c3 0 5.537-.017 7.416-4.396.278-.841.415-1.792.415-2.844 0-1.053-.137-2.004-.415-2.844-.589-1.771-1.831-3.47-2.715-4.521-.75-1.067-.975-1.928-1.051-3.02-.065-1.491 1.056-5.965-3.17-6.298-.165-.013-.325-.021-.48-.021zm-.002 1.5c.09 0 .18.006.27.015 2.154.172 2.227 2.805 2.27 3.798.088 1.396.367 2.536 1.315 3.876.948 1.341 2.04 2.82 2.55 4.354.204.612.305 1.31.305 2.097s-.101 1.485-.305 2.097c-1.647 4.923-5.993 4.763-6.403 4.763s-4.756.16-6.403-4.763c-.204-.612-.305-1.31-.305-2.097s.101-1.485.305-2.097c.51-1.534 1.602-3.013 2.55-4.354.948-1.34 1.227-2.48 1.315-3.876.043-.993.116-3.626 2.27-3.798.09-.009.18-.015.27-.015z"/>
                                    </svg>
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
                    Buy Now - €15.00
                </button>
            </div>
        </section>
    </LayoutBasic>
</template>

<script setup lang="ts">
import LayoutBasic from '../layouts/LayoutBasic.vue';

const handleCheckout = () => {
    // TODO: Implement checkout functionality
    // This would typically redirect to a payment processor or checkout page
    alert('Checkout functionality coming soon! The game will be available for €15.00 (25% off the regular €20.00 price)');
    
    // Example: Redirect to checkout page
    // window.location.href = '/checkout';
    
    // Or use Vue Router
    // import { useRouter } from 'vue-router';
    // const router = useRouter();
    // router.push('/checkout');
};
</script>

<style scoped>
/* Animation classes if needed */
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
</style>
