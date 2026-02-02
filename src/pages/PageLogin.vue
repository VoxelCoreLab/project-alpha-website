<template>
    <LayoutBasic>
        <!-- Login Content -->
        <section class="py-12 bg-base-200 h-full">
            <div class="container mx-auto px-4">
                <div class="max-w-md mx-auto">
                    <div class="card bg-base-100 shadow-xl">
                        <div class="card-body">
                            <div class="max-w-2xl mb-6">
                                <h1 class="text-4xl md:text-5xl font-cinzel font-bold italic uppercase text-secondary mb-2">
                                    Sign In
                                </h1>
                                <p class="text-base-content/60">Welcome back to Shadow Infection</p>
                            </div>
                            <!-- Login Form -->
                            <form @submit.prevent="handleLogin" class="space-y-6">
                                <!-- Email Field -->
                                <div class="form-control">
                                    <label class="input w-full floating-label"
                                        :class="{ 'input-error': touched.email && errors.email, 'input-success': touched.email && !errors.email && formData.email }">
                                        <span>Email Address</span>
                                        <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24">
                                            <g stroke-linejoin="round" stroke-linecap="round" stroke-width="2.5"
                                                fill="none" stroke="currentColor">
                                                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                            </g>
                                        </svg>
                                        <input class="text-base" type="email" name="email" v-model="formData.email"
                                            @blur="touched.email = true" placeholder="your.email@example.com"
                                            autocomplete="email" require :disabled="isSubmitting" />
                                    </label>
                                    <div v-if="touched.email && errors.email" class="text-error mt-2" role="alert"
                                        aria-live="assertive">
                                        {{ errors.email }}
                                    </div>
                                </div>

                                <!-- Password Field -->
                                <div class="form-control">
                                    <label class="input w-full floating-label"
                                        :class="{ 'input-error': touched.password && errors.password, 'input-success': touched.password && !errors.password && formData.password }">
                                        <span>Password</span>
                                        <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24">
                                            <g stroke-linejoin="round" stroke-linecap="round" stroke-width="2.5"
                                                fill="none" stroke="currentColor">
                                                <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                                                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                                            </g>
                                        </svg>
                                        <input class="text-base" :type="showPassword ? 'text' : 'password'"
                                            name="password" v-model="formData.password" @blur="touched.password = true"
                                            placeholder="Enter your password" autocomplete="current-password"
                                            required :disabled="isSubmitting" />
                                        <button type="button" @click="showPassword = !showPassword"
                                            class="opacity-50 hover:opacity-100 transition-opacity"
                                            aria-label="Toggle password visibility">
                                            <svg v-if="!showPassword" class="h-[1em]" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24">
                                                <g stroke-linejoin="round" stroke-linecap="round" stroke-width="2.5"
                                                    fill="none" stroke="currentColor">
                                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                    <circle cx="12" cy="12" r="3"></circle>
                                                </g>
                                            </svg>
                                            <svg v-else class="h-[1em]" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24">
                                                <g stroke-linejoin="round" stroke-linecap="round" stroke-width="2.5"
                                                    fill="none" stroke="currentColor">
                                                    <path
                                                        d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24">
                                                    </path>
                                                    <line x1="1" y1="1" x2="23" y2="23"></line>
                                                </g>
                                            </svg>
                                        </button>
                                    </label>
                                    <div v-if="touched.password && errors.password" class="text-error mt-2" role="alert"
                                        aria-live="assertive">
                                        {{ errors.password }}
                                    </div>
                                </div>

                                <!-- Remember Me & Forgot Password -->
                                <div class="flex items-center justify-end">
                                    <a href="#" class="link link-primary text-sm" @click.prevent="handleForgotPassword">
                                        Forgot password?
                                    </a>
                                </div>

                                <!-- Submit Button -->
                                <button type="submit"
                                    class="btn btn-primary btn-lg w-full text-lg uppercase shadow-lg hover:shadow-xl transition-all"
                                    :disabled="isSubmitting">
                                    <span v-if="!isSubmitting">Sign In</span>
                                    <svg v-if="!isSubmitting" class="w-5 h-5 rotate-180" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1">
                                        </path>
                                    </svg>
                                    <span v-if="isSubmitting" class="loading loading-spinner"></span>
                                </button>

                                

                            <!-- Sign In with Google -->
                            <div>
                                <button type="button" @click="handleGoogleSignIn" class="btn btn-secondary btn-soft w-full gap-2"
                                    :disabled="isSubmitting">
                                    <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24"
                                        viewBox="0 0 47 48" version="1.1">
                                        <!-- Generator: Sketch 49.2 (51160) - http://www.bohemiancoding.com/sketch -->
                                        <title>Google</title>
                                        <desc>Created with Sketch.</desc>
                                        <defs />
                                        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                            <g id="Social-Icons---Isolated"
                                                transform="translate(-389.000000, -727.000000)">
                                                <g id="Google" transform="translate(389.000000, 727.000000)">
                                                    <path
                                                        d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                                                        id="Fill-1" fill="#FBBC05" />
                                                    <path
                                                        d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                                                        id="Fill-2" fill="#EA4335" />
                                                    <path
                                                        d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                                                        id="Fill-3" fill="#34A853" />
                                                    <path
                                                        d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                                                        id="Fill-4" fill="#4285F4" />
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                    <span>Sign in with Google</span>
                                </button>
                            </div>

                                <!-- Register Link -->
                                <div class="text-center text-base-content/70">
                                    Don't have an account?
                                    <router-link to="/register" class="link link-primary font-semibold">
                                        Create Account
                                    </router-link>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    </LayoutBasic>
</template>

<script setup lang="ts">
import { ref, computed, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { z } from 'zod'
import LayoutBasic from '../layouts/LayoutBasic.vue'
import { getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'

const auth = getAuth()

const router = useRouter()

// Zod validation schema
const loginSchema = z.object({
    email: z
        .string()
        .min(1, 'Email is required')
        .email('Please enter a valid email address'),
    password: z
        .string()
        .min(1, 'Password is required'),
})

const formData = reactive({
    email: '',
    password: '',
    rememberMe: false
})

const touched = reactive({
    email: false,
    password: false
})

const showPassword = ref(false)
const isSubmitting = ref(false)

const errors = computed(() => {
    const err: Record<string, string> = {}

    if (touched.email || touched.password) {
        const result = loginSchema.safeParse({
            email: formData.email,
            password: formData.password,
        })

        if (!result.success) {
            result.error.errors.forEach((error) => {
                const field = error.path[0] as string
                if (touched[field as keyof typeof touched]) {
                    err[field] = error.message
                }
            })
        }
    }

    return err
})

const isFormValid = computed(() => {
    const result = loginSchema.safeParse({
        email: formData.email,
        password: formData.password,
    })
    return result.success
})

const handleLogin = async () => {
    // Mark all fields as touched
    touched.email = true
    touched.password = true

    if (!isFormValid.value) {
        return
    }

    isSubmitting.value = true

    try {
        await signInWithEmailAndPassword(auth, formData.email, formData.password)

        router.push('/')
    } catch (error) {
        console.error('Login failed:', error)

        isSubmitting.value = false
        // TODO: Show error message to user
    } finally {
    }
}

const handleGoogleSignIn = async () => {
    try {
        await signInWithPopup(auth, new GoogleAuthProvider())
        isSubmitting.value = true
        router.push('/')
    } catch (error) {
        isSubmitting.value = false
    } finally {
    }
}

const handleForgotPassword = () => {
    // TODO: Implement forgot password functionality
    console.log('Forgot password clicked')
    alert('Password reset functionality will be implemented soon. Please contact support at voxelcorelab@gmail.com')
}
</script>
