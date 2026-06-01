<template>
    <LayoutBasic>
        <section class="py-12 bg-base-200 h-full">
            <div class="container mx-auto px-4">
                <div class="max-w-md mx-auto">
                    <div class="card bg-base-100 shadow-xl">
                        <div class="card-body">
                            <div class="max-w-2xl mb-6">
                                <h1 class="text-4xl md:text-5xl font-cinzel font-bold italic uppercase text-secondary mb-2">
                                    Reset Password
                                </h1>
                                <p class="text-base-content/60">Enter your email and we'll send you a reset link.</p>
                            </div>

                            <div v-if="resetError" class="alert alert-error shadow-lg mb-4" role="alert" aria-live="assertive">
                                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>{{ resetError }}</span>
                            </div>

                            <div v-if="resetSuccess" class="alert alert-success shadow-lg mb-4" role="status" aria-live="polite">
                                <svg class="shrink-0 h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 12.6111L8.92308 17.5L20 6.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <div>
                                    <p>{{ resetSuccess }}</p>
                                    <p class="text-sm mt-1 opacity-80">Check your spam folder if you don't see it within a few minutes.</p>
                                </div>
                            </div>

                            <form v-if="!resetSuccess" @submit.prevent="handleSendPasswordReset" class="space-y-6">
                                <!-- Email Field -->
                                <div class="form-control">
                                    <label class="input w-full floating-label"
                                        :class="{ 'input-error': touched && emailError, 'input-success': touched && !emailError && email }">
                                        <span>Email Address</span>
                                        <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <g stroke-linejoin="round" stroke-linecap="round" stroke-width="2.5" fill="none" stroke="currentColor">
                                                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                            </g>
                                        </svg>
                                        <input class="text-base" type="email" name="email" v-model="email"
                                            @blur="touched = true" placeholder="your.email@example.com"
                                            autocomplete="email" required :disabled="isSubmitting" />
                                    </label>
                                    <div v-if="touched && emailError" class="text-error mt-2" role="alert" aria-live="assertive">
                                        {{ emailError }}
                                    </div>
                                </div>

                                <!-- Submit Button -->
                                <button type="submit"
                                    class="btn btn-primary btn-lg w-full text-lg uppercase shadow-lg hover:shadow-xl transition-all"
                                    :disabled="isSubmitting">
                                    <span v-if="!isSubmitting">Send reset link</span>
                                    <span v-if="isSubmitting" class="loading loading-spinner"></span>
                                </button>

                                <div class="text-center text-base-content/70">
                                    Remembered it?
                                    <router-link to="/login" class="link link-primary font-semibold">
                                        Back to Sign In
                                    </router-link>
                                </div>
                            </form>

                            <!-- Post-success actions -->
                            <div v-if="resetSuccess" class="flex flex-col gap-3 mt-2">
                                <button type="button" class="btn btn-primary btn-lg w-full uppercase"
                                    @click="handleResend" :disabled="isSubmitting || resendCooldown > 0">
                                    <span v-if="isSubmitting" class="loading loading-spinner"></span>
                                    <span v-else-if="resendCooldown > 0">Resend in {{ resendCooldown }}s</span>
                                    <span v-else>Resend email</span>
                                </button>
                                <router-link to="/login" class="btn btn-ghost w-full">
                                    Back to Sign In
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </LayoutBasic>
</template>

<script setup lang="ts">
import { ref, computed, onUnmounted } from 'vue'
import { z } from 'zod'
import LayoutBasic from '../layouts/LayoutBasic.vue'
import { getAuth, sendPasswordResetEmail } from 'firebase/auth'

const auth = getAuth()

const emailSchema = z.string().min(1, 'Email is required').email('Please enter a valid email address')

const email = ref('')
const touched = ref(false)
const isSubmitting = ref(false)
const resetError = ref('')
const resetSuccess = ref('')
const resendCooldown = ref(0)
let cooldownTimer: ReturnType<typeof setInterval> | null = null

const emailError = computed(() => {
    const result = emailSchema.safeParse(email.value)
    return result.success ? '' : result.error.errors[0].message
})

const mapAuthError = (error: unknown) => {
    const code = typeof error === 'object' && error !== null && 'code' in error
        ? (error as { code?: string }).code
        : undefined

    switch (code) {
        case 'auth/user-not-found':
            return 'No account was found with that email address.'
        case 'auth/invalid-email':
            return 'Please enter a valid email address.'
        case 'auth/too-many-requests':
            return 'Too many attempts. Please wait a moment before trying again.'
        default:
            return error instanceof Error ? error.message : 'Something went wrong. Please try again.'
    }
}

const startCooldown = () => {
    resendCooldown.value = 60
    cooldownTimer = setInterval(() => {
        resendCooldown.value -= 1
        if (resendCooldown.value <= 0 && cooldownTimer) {
            clearInterval(cooldownTimer)
            cooldownTimer = null
        }
    }, 1000)
}

const sendReset = async () => {
    isSubmitting.value = true
    resetError.value = ''

    try {
        await sendPasswordResetEmail(auth, email.value)
        resetSuccess.value = `A password reset link has been sent to ${email.value}.`
        startCooldown()
    } catch (error) {
        resetError.value = mapAuthError(error)
        console.error('Password reset failed:', error)
    } finally {
        isSubmitting.value = false
    }
}

const handleSendPasswordReset = async () => {
    touched.value = true
    if (emailError.value) return
    await sendReset()
}

const handleResend = async () => {
    if (resendCooldown.value > 0) return
    resetSuccess.value = ''
    await sendReset()
    if (!resetError.value) {
        resetSuccess.value = `A new reset link has been sent to ${email.value}.`
    }
}

onUnmounted(() => {
    if (cooldownTimer) clearInterval(cooldownTimer)
})
</script>
