<template>
    <LayoutBasic>
        <!-- Checkout Hero Section -->
        <section class="py-12 bg-gradient-to-b from-base-300 to-base-200">
            <div class="container mx-auto px-4">
                <div class="max-w-5xl mx-auto">
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
                <div class="max-w-5xl mx-auto">
                    <div class="grid lg:grid-cols-3 gap-8">
                        <!-- Left Column - Order Details Form -->
                        <div class="lg:col-span-2 space-y-6">
                            <!-- Customer Information -->
                            <div class="card bg-base-100 shadow-xl">
                                <div class="card-body">
                                    <h2 class="card-title text-2xl font-cinzel uppercase text-secondary mb-4">
                                        Customer Information
                                    </h2>
                                    
                                    <div class="form-control">
                                        <label class="label">
                                            <span class="label-text font-semibold">Email Address</span>
                                        </label>
                                        <input type="email" placeholder="your.email@example.com" 
                                            class="input input-bordered w-full" required />
                                        <label class="label">
                                            <span class="label-text-alt text-base-content/60">
                                                Your game key will be sent to this email
                                            </span>
                                        </label>
                                    </div>

                                    <div class="grid md:grid-cols-2 gap-4">
                                        <div class="form-control">
                                            <label class="label">
                                                <span class="label-text font-semibold">First Name</span>
                                            </label>
                                            <input type="text" placeholder="John" 
                                                class="input input-bordered w-full" required />
                                        </div>

                                        <div class="form-control">
                                            <label class="label">
                                                <span class="label-text font-semibold">Last Name</span>
                                            </label>
                                            <input type="text" placeholder="Doe" 
                                                class="input input-bordered w-full" required />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Billing Address -->
                            <div class="card bg-base-100 shadow-xl">
                                <div class="card-body">
                                    <h2 class="card-title text-2xl font-cinzel uppercase text-secondary mb-4">
                                        Billing Address
                                    </h2>
                                    
                                    <div class="form-control">
                                        <label class="label">
                                            <span class="label-text font-semibold">Country</span>
                                        </label>
                                        <select class="select select-bordered w-full">
                                            <option disabled selected>Select your country</option>
                                            <option>Germany</option>
                                            <option>Austria</option>
                                            <option>Switzerland</option>
                                            <option>United States</option>
                                            <option>United Kingdom</option>
                                            <option>France</option>
                                            <option>Spain</option>
                                            <option>Italy</option>
                                            <option>Netherlands</option>
                                            <option>Belgium</option>
                                            <option>Other</option>
                                        </select>
                                    </div>

                                    <div class="grid md:grid-cols-2 gap-4">
                                        <div class="form-control">
                                            <label class="label">
                                                <span class="label-text font-semibold">City</span>
                                            </label>
                                            <input type="text" placeholder="Berlin" 
                                                class="input input-bordered w-full" required />
                                        </div>

                                        <div class="form-control">
                                            <label class="label">
                                                <span class="label-text font-semibold">Postal Code</span>
                                            </label>
                                            <input type="text" placeholder="10115" 
                                                class="input input-bordered w-full" required />
                                        </div>
                                    </div>

                                    <div class="form-control">
                                        <label class="label">
                                            <span class="label-text font-semibold">Street Address</span>
                                        </label>
                                        <input type="text" placeholder="Main Street 123" 
                                            class="input input-bordered w-full" required />
                                    </div>
                                </div>
                            </div>

                            <!-- Newsletter Opt-in -->
                            <div class="card bg-base-100 shadow-xl">
                                <div class="card-body">
                                    <div class="form-control">
                                        <label class="label cursor-pointer justify-start gap-4">
                                            <input type="checkbox" class="checkbox checkbox-accent" />
                                            <span class="label-text">
                                                Subscribe to our newsletter for game updates and exclusive content.
                                            </span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Right Column - Order Summary -->
                        <div class="lg:col-span-1">
                            <div class="card bg-base-100 shadow-xl border-2 border-accent sticky top-4">
                                <div class="card-body">
                                    <h2 class="card-title text-2xl font-cinzel uppercase text-secondary mb-4">
                                        Order Summary
                                    </h2>

                                    <!-- Product Details -->
                                    <div class="space-y-4 mb-4">
                                        <div class="flex gap-4">
                                            <div class="w-20 h-20 bg-base-300 rounded-lg overflow-hidden flex-shrink-0">
                                                <img src="../assets/TitelLogoUpdate.png" 
                                                    alt="Shadow Infection"
                                                    class="w-full h-full object-contain p-2" />
                                            </div>
                                            <div class="flex-1">
                                                <h3 class="font-bold text-lg">Shadow Infection</h3>
                                                <p class="text-sm text-base-content/60">Digital Download</p>
                                                <div class="badge badge-accent badge-sm mt-1">Early Access - 25% OFF</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="divider"></div>

                                    <!-- Price Breakdown -->
                                    <div class="space-y-3">
                                        <div class="flex justify-between text-base-content/80">
                                            <span>Original Price</span>
                                            <span class="line-through">€20.00</span>
                                        </div>
                                        <div class="flex justify-between text-success">
                                            <span>Early Access Discount (25%)</span>
                                            <span>-€5.00</span>
                                        </div>
                                        <div class="flex justify-between">
                                            <span>Subtotal</span>
                                            <span>€15.00</span>
                                        </div>
                                    </div>

                                    <div class="divider"></div>

                                    <!-- Estimated Total -->
                                    <div class="space-y-2">
                                        <div class="flex justify-between items-center text-xl font-bold">
                                            <span>Estimated Total</span>
                                            <span class="text-accent">€15.00</span>
                                        </div>
                                        <div class="alert alert-info py-2 px-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                                                class="stroke-current shrink-0 w-5 h-5">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                            </svg>
                                            <span class="text-xs">Final tax calculation will be shown on the payment overview</span>
                                        </div>
                                    </div>

                                    <div class="divider"></div>

                                    <!-- What's Included -->
                                    <div class="space-y-2">
                                        <h3 class="font-semibold text-sm uppercase tracking-wide">What's Included:</h3>
                                        <ul class="space-y-2 text-sm">
                                            <li class="flex items-start gap-2">
                                                <svg class="w-4 h-4 text-success mt-0.5 flex-shrink-0" fill="none" 
                                                    stroke="currentColor" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                                        d="M5 13l4 4L19 7"></path>
                                                </svg>
                                                <span>Instant digital download</span>
                                            </li>
                                            <li class="flex items-start gap-2">
                                                <svg class="w-4 h-4 text-success mt-0.5 flex-shrink-0" fill="none" 
                                                    stroke="currentColor" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                                        d="M5 13l4 4L19 7"></path>
                                                </svg>
                                                <span>Early access builds</span>
                                            </li>
                                            <li class="flex items-start gap-2">
                                                <svg class="w-4 h-4 text-success mt-0.5 flex-shrink-0" fill="none" 
                                                    stroke="currentColor" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                                        d="M5 13l4 4L19 7"></path>
                                                </svg>
                                                <span>All future updates</span>
                                            </li>
                                            <li class="flex items-start gap-2">
                                                <svg class="w-4 h-4 text-success mt-0.5 flex-shrink-0" fill="none" 
                                                    stroke="currentColor" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                                        d="M5 13l4 4L19 7"></path>
                                                </svg>
                                                <span>Cross-platform multiplayer</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div class="divider"></div>

                                    <!-- Proceed Button -->
                                    <button @click="handleProceedToPayment"
                                        class="btn btn-accent btn-lg w-full text-lg uppercase shadow-lg hover:shadow-xl transition-all">
                                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z">
                                            </path>
                                        </svg>
                                        Proceed to Payment
                                    </button>

                                    <div class="flex items-center justify-center gap-2 mt-3">
                                        <svg class="w-4 h-4 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z">
                                            </path>
                                        </svg>
                                        <span class="text-xs text-base-content/60">Secure SSL encrypted payment</span>
                                    </div>
                                </div>
                            </div>

                            <!-- Back to Product Link -->
                            <div class="mt-4 text-center">
                                <router-link to="/product" class="link link-hover text-sm">
                                    ← Back to product page
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
import LayoutBasic from '../layouts/LayoutBasic.vue';

const handleProceedToPayment = () => {
    // TODO: Implement actual payment processing
    // This would typically redirect to a payment gateway (Stripe, PayPal, etc.)
    alert('Payment processing coming soon! You will be redirected to a secure payment gateway.');
    
    // Example: Redirect to payment processor
    // window.location.href = 'https://payment-gateway.com/checkout';
    
    // Or handle payment integration here
};
</script>

<style scoped>
/* Custom styles if needed */
</style>
