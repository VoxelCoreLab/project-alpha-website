<template>
    <LayoutBasic>
        <!-- Login Hero Section -->
        <section class="py-12 bg-gradient-to-b from-base-300 to-base-200">
            <div class="container mx-auto px-4">
                <div class="max-w-6xl mx-auto">
                    <h1 class="text-4xl md:text-5xl font-cinzel font-bold italic uppercase text-secondary mb-2">
                        Sign In
                    </h1>
                    <p class="text-base-content/60">Welcome back to Shadow Infection</p>
                </div>
            </div>
        </section>

        <!-- Login Content -->
        <section class="py-12 bg-base-200">
            <div class="container mx-auto px-4">
                <div class="max-w-2xl mx-auto">
                    <div class="card bg-base-100 shadow-xl">
                        <div class="card-body">
                            <form @submit.prevent="handleLogin" class="space-y-6">
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
                                            autocomplete="current-password"
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
                                </div>

                                <!-- Remember Me & Forgot Password -->
                                <div class="flex items-center justify-between">
                                    <label class="label cursor-pointer gap-2">
                                        <input 
                                            type="checkbox" 
                                            class="checkbox checkbox-sm checkbox-primary" 
                                            v-model="formData.rememberMe"
                                        />
                                        <span class="label-text">Remember me</span>
                                    </label>
                                    <a href="#" class="link link-primary text-sm" @click.prevent="handleForgotPassword">
                                        Forgot password?
                                    </a>
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
                                            d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1">
                                        </path>
                                    </svg>
                                    <span v-if="!isSubmitting">Sign In</span>
                                    <span v-else class="loading loading-spinner"></span>
                                </button>

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
        // TODO: Implement actual login logic
        console.log('Login data:', {
            email: formData.email,
            rememberMe: formData.rememberMe
        })
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500))
        
        // On success, redirect to appropriate page
        // For now, redirect to home or download page
        router.push('/download')
    } catch (error) {
        console.error('Login failed:', error)
        // TODO: Show error message to user
    } finally {
        isSubmitting.value = false
    }
}

const handleForgotPassword = () => {
    // TODO: Implement forgot password functionality
    console.log('Forgot password clicked')
    alert('Password reset functionality will be implemented soon. Please contact support at voxelcorelab@gmail.com')
}
</script>
