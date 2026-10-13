<script lang="ts" setup>
import { ref } from 'vue'

const params = new URLSearchParams(window.location.search)
const code = params.get('code')
const state = params.get('state')
const oauthError = params.get('error')
const status = ref('Back to the Launcher...')

const apiUrl = (import.meta.env.VITE_API_URL ?? '').replace(/\/$/, '')

if (oauthError || !code || !state || !apiUrl) {
  status.value = 'This sign-in link is incomplete.'
} else {
  void handoff(code, state)
}

async function handoff(code: string, state: string) {
  try {
    const response = await fetch(`${apiUrl}/google-auth/exchange`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ code, state }),
    })
    if (!response.ok) {
      throw new Error('exchange failed')
    }
    const target = new URL('shadowinfection-launcher://auth/callback')
    target.searchParams.set('state', state)
    window.location.replace(target.toString())
  } catch {
    status.value = 'Google sign-in failed. Please try again.'
  }
}
</script>

<template>
  <div class="mx-auto max-w-md px-4 py-16 text-center">
    <p class="text-lg">{{ status }}</p>
  </div>
</template>
