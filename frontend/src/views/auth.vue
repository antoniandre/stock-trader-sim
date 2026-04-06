<template lang="pug">
.auth-view
  .auth-view__hero
    trade-deck-logo(size="md")
    p.auth-view__eyebrow TradeDeck access
    h1.title1.auth-view__title {{ heading }}
    p.auth-view__copy
      | Sign in to manage your portfolio, place trades, and unlock your account workspace.
    ul.auth-view__benefits
      li Live portfolio and market views
      li Auth-aware trading workspace
      li Fast access to TradeDeck from any signed-in device

  .auth-view__status(v-if="statusMessage")
    icon(icon="mdi:information-outline")
    span {{ statusMessage }}

  .auth-view__card

  .auth-view__card
    auth-panel(
      :mode="mode"
      :show-sign-out="Boolean(authState.user)"
      @mode-change="handleModeChange")

    .auth-view__footer(v-if="authState.user")
      w-button(route="/" round) Go to dashboard
      w-button(text round @click="handleSignOut") Sign out
</template>

<script setup>
import { computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import AuthPanel from '@/components/auth-panel.vue'
import TradeDeckLogo from '@/components/app-logo.vue'
import { authState, consumeAuthRedirect, signOut } from '@/stores/auth'

const route = useRoute()
const router = useRouter()

const mode = computed(() => route.query.mode === 'signup' ? 'signup' : 'signin')
const heading = computed(() => mode.value === 'signup' ? 'Create your account' : 'Welcome back')
const statusMessage = computed(() => {
  if (authState.user) return 'You are already signed in.'
  if (mode.value === 'signup') return 'Create an account to unlock the TradeDeck workspace.'
  return 'Sign in to continue where you left off.'
})

watch(() => authState.user, user => {
  if (!user) return
  const redirectTarget = consumeAuthRedirect()
  router.replace(redirectTarget || '/')
})

function handleModeChange(nextMode) {
  router.replace({
    name: 'auth',
    query: nextMode === 'signup' ? { mode: 'signup' } : {}
  })
}

async function handleSignOut() {
  await signOut()
}
</script>

<style lang="scss" scoped>
.auth-view {
  min-height: calc(100vh - 8rem);
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(320px, 420px);
  gap: 2rem;
  align-items: center;
}

.auth-view__hero,
.auth-view__card {
  border: 1px solid color-mix(in srgb, var(--w-contrast-bg-color) 8%, transparent);
  background: color-mix(in srgb, var(--w-base-bg-color) 92%, transparent);
  border-radius: 28px;
  padding: 2rem;
}

.auth-view__hero {
  display: grid;
  gap: 1rem;
  min-height: 100%;
  align-content: center;
}

.auth-view__eyebrow {
  margin: 0;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--w-primary-color);
}

.auth-view__title,
.auth-view__copy {
  margin: 0;
}

.auth-view__copy {
  max-width: 36rem;
  color: var(--w-text-light-color);
  line-height: 1.6;
}

.auth-view__card {
  display: grid;
  gap: 1rem;
}

.auth-view__footer {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.auth-view__benefits {
  margin: 0;
  padding-left: 1.1rem;
  color: var(--w-text-light-color);
  display: grid;
  gap: 0.55rem;
}

.auth-view__status {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.9rem 1rem;
  border-radius: 16px;
  background: color-mix(in srgb, var(--w-primary-color) 10%, transparent);
  color: var(--w-text-light-color);
}

@media (max-width: 960px) {
  .auth-view {
    grid-template-columns: 1fr;
  }
}
</style>
