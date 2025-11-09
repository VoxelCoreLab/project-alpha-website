<template>
    <LayoutBasic>
        <!-- Registration Hero Section -->
        <section class="py-12 bg-gradient-to-b from-base-300 to-base-200">
            <div class="container mx-auto px-4">
                <div class="max-w-6xl mx-auto">
                    <h1 class="text-4xl md:text-5xl font-cinzel font-bold italic uppercase text-secondary mb-2">
                        Create Account
                    </h1>
                    <p class="text-base-content/60">Join the Shadow Infection community</p>
                </div>
            </div>
        </section>

        <!-- Registration Content -->
        <section class="py-12 bg-base-200">
            <div class="container mx-auto px-4">
                <div class="max-w-2xl mx-auto">
                    <div class="card bg-base-100 shadow-xl">
                        <div class="card-body">
                            <form @submit.prevent="handleRegister" class="space-y-6">
                                <!-- Email Field -->
                                <div class="form-control">
                                    <label class="input w-full floating-label"
                                        :class="{ 'input-error': touched.email && errors.email, 'input-success': touched.email && !errors.email && formData.email }">
                                        <span>Email Address</span>
                                        <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <g stroke-linejoin="round" stroke-linecap="round" stroke-width="2.5" fill="none" stroke="currentColor">
                                                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                            </g>
                                        </svg>
                                        <input 
                                            class="text-base" 
                                            type="email" 
                                            name="email" 
                                            v-model="formData.email" 
                                            @blur="touched.email = true"
                                            placeholder="your.email@example.com" 
                                            autocomplete="email"
                                            required
                                        />
                                    </label>
                                    <div v-if="touched.email && errors.email" class="text-error mt-2" role="alert" aria-live="assertive">
                                        {{ errors.email }}
                                    </div>
                                </div>

                                <!-- Username Field -->
                                <div class="form-control">
                                    <label class="input w-full floating-label"
                                        :class="{ 'input-error': touched.username && errors.username, 'input-success': touched.username && !errors.username && formData.username }">
                                        <span>Username</span>
                                        <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <g stroke-linejoin="round" stroke-linecap="round" stroke-width="2.5" fill="none" stroke="currentColor">
                                                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                                                <circle cx="12" cy="7" r="4"></circle>
                                            </g>
                                        </svg>
                                        <input 
                                            class="text-base" 
                                            type="text" 
                                            name="username" 
                                            v-model="formData.username" 
                                            @blur="touched.username = true"
                                            placeholder="Choose a username" 
                                            autocomplete="username"
                                            required
                                        />
                                    </label>
                                    <div v-if="touched.username && errors.username" class="text-error mt-2" role="alert" aria-live="assertive">
                                        {{ errors.username }}
                                    </div>
                                </div>

                                <!-- Password Field -->
                                <div class="form-control">
                                    <label class="input w-full floating-label"
                                        :class="{ 'input-error': touched.password && errors.password, 'input-success': touched.password && !errors.password && formData.password }">
                                        <span>Password</span>
                                        <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <g stroke-linejoin="round" stroke-linecap="round" stroke-width="2.5" fill="none" stroke="currentColor">
                                                <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                                                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                                            </g>
                                        </svg>
                                        <input 
                                            class="text-base" 
                                            :type="showPassword ? 'text' : 'password'" 
                                            name="password" 
                                            v-model="formData.password" 
                                            @blur="touched.password = true"
                                            placeholder="Enter your password" 
                                            autocomplete="new-password"
                                            required
                                        />
                                        <button 
                                            type="button" 
                                            @click="showPassword = !showPassword"
                                            class="opacity-50 hover:opacity-100 transition-opacity"
                                            aria-label="Toggle password visibility"
                                        >
                                            <svg v-if="!showPassword" class="h-[1em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <g stroke-linejoin="round" stroke-linecap="round" stroke-width="2.5" fill="none" stroke="currentColor">
                                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                    <circle cx="12" cy="12" r="3"></circle>
                                                </g>
                                            </svg>
                                            <svg v-else class="h-[1em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <g stroke-linejoin="round" stroke-linecap="round" stroke-width="2.5" fill="none" stroke="currentColor">
                                                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                                                    <line x1="1" y1="1" x2="23" y2="23"></line>
                                                </g>
                                            </svg>
                                        </button>
                                    </label>
                                    <div v-if="touched.password && errors.password" class="text-error mt-2" role="alert" aria-live="assertive">
                                        {{ errors.password }}
                                    </div>
                                    <div v-else class="text-base-content/60 text-sm mt-2">
                                        Password must be at least 8 characters long
                                    </div>
                                </div>

                                <!-- Confirm Password Field -->
                                <div class="form-control">
                                    <label class="input w-full floating-label"
                                        :class="{ 'input-error': touched.confirmPassword && errors.confirmPassword, 'input-success': touched.confirmPassword && !errors.confirmPassword && formData.confirmPassword }">
                                        <span>Confirm Password</span>
                                        <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <g stroke-linejoin="round" stroke-linecap="round" stroke-width="2.5" fill="none" stroke="currentColor">
                                                <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                                                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                                            </g>
                                        </svg>
                                        <input 
                                            class="text-base" 
                                            :type="showConfirmPassword ? 'text' : 'password'" 
                                            name="confirmPassword" 
                                            v-model="formData.confirmPassword" 
                                            @blur="touched.confirmPassword = true"
                                            placeholder="Confirm your password" 
                                            autocomplete="new-password"
                                            required
                                        />
                                        <button 
                                            type="button" 
                                            @click="showConfirmPassword = !showConfirmPassword"
                                            class="opacity-50 hover:opacity-100 transition-opacity"
                                            aria-label="Toggle password visibility"
                                        >
                                            <svg v-if="!showConfirmPassword" class="h-[1em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <g stroke-linejoin="round" stroke-linecap="round" stroke-width="2.5" fill="none" stroke="currentColor">
                                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                    <circle cx="12" cy="12" r="3"></circle>
                                                </g>
                                            </svg>
                                            <svg v-else class="h-[1em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <g stroke-linejoin="round" stroke-linecap="round" stroke-width="2.5" fill="none" stroke="currentColor">
                                                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                                                    <line x1="1" y1="1" x2="23" y2="23"></line>
                                                </g>
                                            </svg>
                                        </button>
                                    </label>
                                    <div v-if="touched.confirmPassword && errors.confirmPassword" class="text-error mt-2" role="alert" aria-live="assertive">
                                        {{ errors.confirmPassword }}
                                    </div>
                                </div>

                                <!-- Terms and Conditions -->
                                <div class="form-control">
                                    <label class="label cursor-pointer justify-start gap-4">
                                        <input 
                                            type="checkbox" 
                                            class="checkbox checkbox-primary" 
                                            v-model="formData.acceptTerms"
                                            required
                                        />
                                        <span class="label-text">
                                            I agree to the 
                                            <router-link to="/general-terms-and-conditions" class="link link-primary">
                                                Terms and Conditions
                                            </router-link>
                                            and 
                                            <router-link to="/privacy-policy" class="link link-primary">
                                                Privacy Policy
                                            </router-link>
                                        </span>
                                    </label>
                                </div>

                                <div class="divider"></div>

                                <!-- Submit Button -->
                                <button 
                                    type="submit" 
                                    class="btn btn-primary btn-lg w-full text-lg uppercase shadow-lg hover:shadow-xl transition-all"
                                    :disabled="isSubmitting || !isFormValid"
                                >
                                    <svg v-if="!isSubmitting" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z">
                                        </path>
                                    </svg>
                                    <span v-if="!isSubmitting">Create Account</span>
                                    <span v-else class="loading loading-spinner"></span>
                                </button>

                                <!-- Login Link -->
                                <div class="text-center text-base-content/70">
                                    Already have an account? 
                                    <router-link to="/login" class="link link-primary font-semibold">
                                        Sign In
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

const router = useRouter()

// Zod validation schema
const registerSchema = z.object({
    email: z
        .string()
        .min(1, 'Email is required')
        .email('Please enter a valid email address'),
    username: z
        .string()
        .min(3, 'Username must be at least 3 characters long')
        .max(20, 'Username must be less than 20 characters')
        .regex(/^[a-zA-Z0-9_-]+$/, 'Username can only contain letters, numbers, hyphens, and underscores'),
    password: z
        .string()
        .min(8, 'Password must be at least 8 characters long'),
    confirmPassword: z
        .string()
        .min(1, 'Please confirm your password'),
}).refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
})

const formData = reactive({
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false
})

const touched = reactive({
    email: false,
    username: false,
    password: false,
    confirmPassword: false
})

const showPassword = ref(false)
const showConfirmPassword = ref(false)
const isSubmitting = ref(false)

const errors = computed(() => {
    const err: Record<string, string> = {}
    
    if (touched.email || touched.username || touched.password || touched.confirmPassword) {
        const result = registerSchema.safeParse({
            email: formData.email,
            username: formData.username,
            password: formData.password,
            confirmPassword: formData.confirmPassword,
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
    const result = registerSchema.safeParse({
        email: formData.email,
        username: formData.username,
        password: formData.password,
        confirmPassword: formData.confirmPassword,
    })
    return result.success && formData.acceptTerms
})

const handleRegister = async () => {
    // Mark all fields as touched
    touched.email = true
    touched.username = true
    touched.password = true
    touched.confirmPassword = true
    
    if (!isFormValid.value) {
        return
    }
    
    isSubmitting.value = true
    
    try {
        // TODO: Implement actual registration logic
        console.log('Registration data:', {
            email: formData.email,
            username: formData.username
        })
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500))
        
        // On success, redirect to appropriate page
        // For now, redirect to home or login
        router.push('/')
    } catch (error) {
        console.error('Registration failed:', error)
        // TODO: Show error message to user
    } finally {
        isSubmitting.value = false
    }
}
</script>
