<template>
    <LayoutBasic>
        <!-- Checkout Hero Section -->
        <section class="py-12 bg-linear-to-b from-base-300 to-base-200">
            <div class="container mx-auto px-4">
                <div class="max-w-6xl mx-auto scroll-animate" data-animation="fade-up">
                    <h1 class="text-4xl md:text-5xl font-cinzel font-bold italic uppercase text-secondary mb-2">
                        Checkout
                    </h1>
                    <p class="text-base-content/60">Complete your purchase of Shadow Infection</p>
                </div>
            </div>
        </section>

        <!-- Checkout Content -->
        <section class="py-12 bg-base-200">
            <div class="container mx-auto px-4">
                <div class="max-w-6xl mx-auto">
                    <div class="grid lg:grid-cols-3 gap-8">
                        <!-- Left Column - Order Details Form -->
                        <div class="lg:col-span-2 space-y-6">
                            <!-- Error Alert -->
                            <div v-if="errorMessage" class="alert alert-error shadow-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6"
                                    fill="none" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>{{ errorMessage }}</span>
                            </div>

                            <!-- Customer Information -->
                            <div class="card bg-base-100 shadow-xl scroll-animate" data-animation="slide-left"
                                data-delay="100">
                                <div class="card-body">
                                    <h2 class="card-title text-2xl font-cinzel uppercase text-secondary mb-4">
                                        Game Access
                                    </h2>

                                    <!-- Purchase Type Selection -->
                                    <fieldset class="fieldset">
                                        <legend class="fieldset-legend text-sm">Which account will receive the game
                                            access?</legend>
                                        <div class="space-y-3">
                                            <div class="flex items-center">
                                                <input type="radio" id="purchaseSelf" v-model="purchaseType"
                                                    value="self" class="radio radio-primary"
                                                    :disabled="userAlreadyOwnsGame === true || isLoading" />
                                                <label for="purchaseSelf" class="label text-base ml-2"
                                                    :class="{ 'cursor-pointer': userAlreadyOwnsGame === false }">
                                                    <span class="label-text"
                                                        :class="{ 'text-secondary': purchaseType === 'self' }">Buy for
                                                        myself: {{ user?.email }}</span>
                                                    <span v-if="userAlreadyOwnsGame === true"
                                                        class="text-xs text-success ml-2">(You already own the
                                                        game)</span>
                                                </label>
                                            </div>
                                            <div class="flex items-center">
                                                <input type="radio" id="purchaseGift" v-model="purchaseType"
                                                    value="gift" class="radio radio-primary" :disabled="isLoading" />
                                                <label for="purchaseGift" class="label text-base cursor-pointer ml-2"
                                                    :class="{ 'text-secondary': purchaseType === 'gift' }">
                                                    <span class="label-text">Buy as a gift for someone else</span>
                                                </label>
                                            </div>
                                        </div>
                                    </fieldset>

                                    <!-- Recipient Email (for gift) -->
                                    <fieldset v-if="purchaseType === 'gift'" class="fieldset">
                                        <legend class="fieldset-legend">Recipient E-Mail</legend>
                                        <label class="input w-full"
                                            :class="{ 
                                            'input-primary': (!errors.recipientEmail && isRecipientEmailFieldTouched) || !isRecipientEmailFieldTouched,
                                            'input-error': isRecipientEmailFieldTouched && errors.recipientEmail, 'input-success': isRecipientEmailFieldTouched && isRecipientEmailFieldValid }">
                                            <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24">
                                                <g stroke-linejoin="round" stroke-linecap="round" stroke-width="2.5"
                                                    fill="none" stroke="currentColor">
                                                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                                </g>
                                            </svg>
                                            <input class="text-base" type="text" name="recipientEmail"
                                                v-model="recipientEmail" @blur="handleBlurRecipientEmail"
                                                placeholder="recipient.email@example.com" autocomplete="email" :disabled="isLoading" />
                                        </label>
                                        <div v-if="isRecipientEmailFieldTouched && errors.recipientEmail"
                                            class="text-error mt-2" role="alert" aria-live="assertive">
                                            {{ errors.recipientEmail }}
                                        </div>
                                    </fieldset>
                                </div>
                            </div>
                        </div>

                        <!-- Right Column - Order Summary -->
                        <div class="lg:col-span-1">
                            <div class="card bg-base-100 shadow-xl border-2 border-primary sticky top-4 scroll-animate"
                                data-animation="slide-right" data-delay="100">
                                <div class="card-body">
                                    <h2 class="card-title text-2xl font-cinzel uppercase text-secondary mb-4">
                                        Order Summary
                                    </h2>

                                    <!-- Product Details -->
                                    <div class="space-y-4 mb-4">
                                        <div class="flex gap-4">
                                            <div class="w-20 h-20 bg-base-300 rounded-lg overflow-hidden shrink-0">
                                                <img src="../assets/TitelLogoUpdate.png" alt="Shadow Infection"
                                                    class="w-full h-full object-contain p-0.5 bg-white/95" />
                                            </div>
                                            <div class="flex-1">
                                                <h3 class="font-bold text-lg">Shadow Infection</h3>
                                                <p class="text-sm text-base-content/60">Digital Download</p>
                                                <div class="badge badge-success badge-sm mt-1">Early Access - 25% OFF
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="divider"></div>

                                    <!-- Price Preview Selector -->
                                    <label class="form-control w-full mb-3">
                                        <div class="label">
                                            <span class="label-text text-sm">Preview pricing</span>
                                        </div>
                                        <select v-model="selectedCurrency" class="select select-bordered">
                                            <option v-for="option in pricingOptions" :key="option.value"
                                                :value="option.value">
                                                {{ option.label }}
                                            </option>
                                        </select>
                                    </label>

                                    <!-- Price Breakdown -->
                                    <div class="space-y-3">
                                        <div class="flex justify-between text-base-content/80">
                                            <span>Original Price</span>
                                            <span class="line-through">{{ formattedOriginalPrice }}</span>
                                        </div>
                                        <div class="flex justify-between text-success">
                                            <span>Early Access Discount (25%)</span>
                                            <span>-{{ formattedDiscountAmount }}</span>
                                        </div>
                                        <div class="flex justify-between">
                                            <span>Subtotal</span>
                                            <span>{{ formattedSubtotal }}</span>
                                        </div>
                                    </div>

                                    <div class="divider"></div>

                                    <!-- Estimated Total -->
                                    <div class="space-y-2">
                                        <div class="flex justify-between items-center text-xl font-bold">
                                            <span>Estimated Total</span>
                                            <span>{{ formattedSubtotal }}</span>
                                        </div>
                                        <div class="alert bg-transparent text-base-content/50 py-2 px-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                class="stroke-current shrink-0 w-5 h-5">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z">
                                                </path>
                                            </svg>
                                            <span class="text-xs">All prices include applicable taxes.</span>
                                        </div>
                                    </div>

                                    <div class="divider"></div>

                                    <!-- Proceed Button -->
                                    <button @click="handleProceedToPayment" :disabled="isLoading"
                                        class="btn btn-primary btn-lg w-full text-lg uppercase shadow-lg hover:shadow-xl transition-all"
                                    >
                                        <svg v-if="!isLoading" class="w-5 h-5" fill="none" stroke="currentColor"
                                            viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z">
                                            </path>
                                        </svg>
                                        {{ isLoading ? 'Processing...' : 'Proceed to Payment' }}
                                        <span v-if="isLoading" class="loading loading-spinner"></span>
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

                            <!-- Back to Product Link -->
                            <!--
                            <div class="mt-4 text-center">
                                <router-link to="/product" class="link link-hover text-sm">
                                    ← Back to product page
                                </router-link>
                            </div>
                            -->
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </LayoutBasic>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref, computed, watch } from 'vue';
import { useField, useForm, useIsFieldTouched, useIsFieldValid } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import * as zod from 'zod';
import { useAuth } from '@vueuse/firebase/useAuth';
import LayoutBasic from '../layouts/LayoutBasic.vue';
import { getAuth } from 'firebase/auth';
import { useApiInstance } from '../generated';
import axios from 'axios';
import { usePricingPreview } from '../composables/usePricingPreview';

const purchaseType = ref<'self' | 'gift'>('self');
const {
    pricingOptions,
    selectedCurrency,
    formattedOriginalPrice,
    formattedDiscountAmount,
    formattedSubtotal,
} = usePricingPreview();
const auth = getAuth();
const { user } = useAuth(auth);
const apiInstance = useApiInstance();

const userAlreadyOwnsGame = ref<boolean | null>(null);

watch(userAlreadyOwnsGame, async (newValue) => {
    if (newValue === true) {
        purchaseType.value = 'gift'
    }
});

const loadMyGameLicence = async () => {
    const result = await apiInstance.gameLicences.gameLicencesControllerGetMyLicence();
    userAlreadyOwnsGame.value = result.data;
}

loadMyGameLicence();

const buyForMyselfSchema = zod.object({
    recipientEmail: zod.string().optional(),
});

const emailsAlreadyOwningGame = ref(new Set<string>());

const buyAsGiftSchema = zod.object({
    recipientEmail: zod.string({
        required_error: 'Enter a valid E-Mail: example@mail.com'
    }).email({ message: 'Enter a valid E-Mail: example@mail.com' })
        .refine((val) => !emailsAlreadyOwningGame.value.has(val), {
            message: 'The recipient already owns this game.',
        }),
});

const validationSchema = computed(() => toTypedSchema(
    purchaseType.value === 'gift' ? buyAsGiftSchema : buyForMyselfSchema
));

const { errors, validate } = useForm({
    validationSchema,
});

const { value: recipientEmail, handleBlur: handleBlurRecipientEmail, setTouched: setRecipientEmailTouched } = useField<string>('recipientEmail');
const isRecipientEmailFieldTouched = useIsFieldTouched('recipientEmail');
const isRecipientEmailFieldValid = useIsFieldValid('recipientEmail');

const errorMessage = ref<string | null>(null);
const isLoading = ref(false);

const handleProceedToPayment = async () => {
    errorMessage.value = null;
    isLoading.value = true;

    try {
        // If buying for myself, skip validation and proceed directly
        if (purchaseType.value === 'self') {
            const stripeEmail = user.value?.email;
            if (!stripeEmail) {
                errorMessage.value = 'No email available for your account.';
                return;
            }

            const response = await apiInstance.stripe.stripeControllerCreateCheckoutSession({ recipientEmail: stripeEmail });
            window.location.href = response.data.url;
            return;
        }

        // For gifts, validate the recipient email
        setRecipientEmailTouched(true);
        const result = await validate();

        if (!result.valid) {

            isLoading.value = false;
            return;
        }

        const response = await apiInstance.stripe.stripeControllerCreateCheckoutSession({ recipientEmail: recipientEmail.value! });
        window.location.href = response.data.url;
    } catch (error) {
        console.error('Error creating checkout session:', error);

        if (axios.isAxiosError(error) && error.response) {
            // Check if recipient already owns the game and trigger validation
            if (error.response.data?.message?.includes('already owns') && purchaseType.value === 'gift' && recipientEmail.value) {
                emailsAlreadyOwningGame.value.add(recipientEmail.value);
                await validate();
            } else {
                // Extract error message from backend response
                errorMessage.value = error.response.data?.message || 'Failed to create checkout session. Please try again.';
            }
        } else {
            errorMessage.value = 'An unexpected error occurred. Please try again.';
        }
        isLoading.value = false;
    } finally {
    }
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
