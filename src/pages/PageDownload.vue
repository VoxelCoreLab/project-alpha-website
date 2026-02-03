<template>
    <LayoutBasic :breadcrumbs="breadcrumbs">
        <!-- Hero -->
        <section class="pt-12 bg-base-100">
            <div class="container mx-auto px-4">
                <div class="max-w-5xl mx-auto text-center scroll-animate" data-animation="fade-up">
                    <h1 class="text-4xl md:text-5xl font-cinzel font-bold italic uppercase text-secondary mb-4">
                        Download Shadow Infection
                    </h1>
                    <p class="text-lg text-base-content/60">Choose your platform and start playing</p>
                </div>
            </div>
        </section>

        <!-- No License Modal -->
        <div v-if="showNoLicenseModal" class="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div class="modal modal-open">
                <div class="modal-box max-w-md">
                    <h3 class="font-bold text-2xl text-secondary mb-4 font-cinzel italic uppercase">
                        Game Access Required
                    </h3>
                    <p class="py-4 text-base-content/80">
                        You need to purchase Shadow Infection to download the game. 
                        Get your copy now and start your adventure!
                    </p>
                    <div class="modal-action">
                        <button @click="showNoLicenseModal = false" class="btn btn-ghost">
                            Close
                        </button>
                        <button @click="goToCheckout" class="btn btn-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Download Buttons -->
        <section class="py-16 bg-base-100 h-full" :class="{ 'blur-sm pointer-events-none': showNoLicenseModal }">
            <div class="container mx-auto px-4">
                <div class="max-w-4xl mx-auto">
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <!-- Windows -->
                        <div class="card bg-base-300 shadow-xl hover:shadow-2xl transition-shadow scroll-animate" data-animation="slide-left" data-delay="100">
                            <div class="card-body items-center text-center">
                                <IconWindows class="w-16 h-16 mb-4 text-primary" />
                                <h2 class="card-title text-xl uppercase">Windows</h2>
                                <p class="text-sm text-base-content/60 mb-4">Windows 10/11</p>
                                <button @click="handleDownload('windows')" 
                                    :disabled="!userOwnsGame || isCheckingLicense"
                                    class="btn btn-primary btn-block"
                                    :class="{ 'loading': isCheckingLicense }">
                                    <svg v-if="!isCheckingLicense" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                    </svg>
                                    {{ isCheckingLicense ? 'Checking...' : 'Download' }}
                                </button>
                            </div>
                        </div>

                        <!-- Mac -->
                        <div class="card bg-base-300 shadow-xl hover:shadow-2xl transition-shadow scroll-animate" data-animation="fade-up" data-delay="150">
                            <div class="card-body items-center text-center">
                                <IconApple class="w-16 h-16 mb-4 text-primary" />
                                <h2 class="card-title text-xl uppercase">Mac</h2>
                                <p class="text-sm text-base-content/60 mb-4">macOS 10.15+</p>
                                <button @click="handleDownload('mac')" 
                                    :disabled="!userOwnsGame || isCheckingLicense"
                                    class="btn btn-primary btn-block"
                                    :class="{ 'loading': isCheckingLicense }">
                                    <svg v-if="!isCheckingLicense" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                    </svg>
                                    {{ isCheckingLicense ? 'Checking...' : 'Download' }}
                                </button>
                            </div>
                        </div>

                        <!-- Linux -->
                        <div class="card bg-base-300 shadow-xl hover:shadow-2xl transition-shadow scroll-animate" data-animation="slide-right" data-delay="200">
                            <div class="card-body items-center text-center">
                                <IconLinux class="w-16 h-16 mb-4 text-primary" />
                                <h2 class="card-title text-xl uppercase">Linux</h2>
                                <p class="text-sm text-base-content/60 mb-4">Ubuntu 20.04+</p>
                                <button @click="handleDownload('linux')" 
                                    :disabled="!userOwnsGame || isCheckingLicense"
                                    class="btn btn-primary btn-block"
                                    :class="{ 'loading': isCheckingLicense }">
                                    <svg v-if="!isCheckingLicense" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                    </svg>
                                    {{ isCheckingLicense ? 'Checking...' : 'Download' }}
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
import { onMounted, onUnmounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import LayoutBasic from '../layouts/LayoutBasic.vue';
import IconWindows from '../components/IconWindows.vue';
import IconApple from '../components/IconApple.vue';
import IconLinux from '../components/IconLinux.vue';
import { useApiInstance } from '../generated';

const breadcrumbs = [
    {
        text: 'Download',
        href: '/download'
    }
]

const apiInstance = useApiInstance();
const router = useRouter();

const userOwnsGame = ref<boolean | null>(null);
const showNoLicenseModal = ref(false);
const isCheckingLicense = ref(true);

const checkGameLicense = async () => {
    try {
        const result = await apiInstance.gameLicences.gameLicencesControllerGetMyLicence();
        userOwnsGame.value = result.data;
        
        if (!result.data) {
            showNoLicenseModal.value = true;
        }
    } catch (error) {
        console.error('Error checking game license:', error);
        userOwnsGame.value = false;
        showNoLicenseModal.value = true;
    } finally {
        isCheckingLicense.value = false;
    }
};

const handleDownload = async (platform: 'windows' | 'mac' | 'linux') => {
    if (!userOwnsGame.value) {
        showNoLicenseModal.value = true;
        return;
    }
    
    try {
        // Get the download URL for the platform
        let response;
        if (platform === 'windows') {
            response = await apiInstance.gameDownloads.gameDownloadsControllerGetWindowsDownloadUrl();
        } else if (platform === 'mac') {
            response = await apiInstance.gameDownloads.gameDownloadsControllerGetMacOsDownloadUrl();
        } else {
            response = await apiInstance.gameDownloads.gameDownloadsControllerGetLinuxDownloadUrl();
        }
        
        // Trigger download by opening the URL
        window.location.href = response.data.url;
    } catch (error) {
        console.error('Error downloading game:', error);
        // Show error to user
        alert('Failed to download the game. Please try again later or contact support.');
    }
};

const goToCheckout = () => {
    router.push('/checkout');
};

onMounted(() => {
    checkGameLicense();

    // Create intersection observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
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
    // Cleanup if needed
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
