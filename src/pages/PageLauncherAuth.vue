<script lang="ts" setup>
const params = new URLSearchParams(window.location.search)
const code = params.get('code')
const state = params.get('state')
const ready = Boolean(code && state)

if (code && state) {
  const target = new URL('shadowinfection-launcher://auth/callback')
  target.searchParams.set('code', code)
  target.searchParams.set('state', state)
  window.location.replace(target.toString())
}
</script>

<template>
  <div class="mx-auto max-w-md px-4 py-16 text-center">
    <p v-if="ready" class="text-lg">Zurück zum Launcher</p>
    <p v-else class="text-lg">This sign-in link is incomplete.</p>
  </div>
</template>
