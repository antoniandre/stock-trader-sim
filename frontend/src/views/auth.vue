<template lang="pug">
.auth-view(:class="viewClasses")
  .auth-view__halo
  .auth-view__boxes
    .auth-view__hero
      logo
      .w-divider
      p.auth-view__eyebrow TradeDeck access
      h1.title1.auth-view__title {{ heading }}
      p.auth-view__copy(v-if="!authState.user")
        | Sign in to manage your portfolio, place trades, and unlock your account workspace.
      .auth-view__copy.auth-view__notice(v-else)
        | You&apos;re signed in as
        strong.mx1 {{ authState.user.email || authState.user.id }}
        | and ready to go.
        .auth-view__actions.w-flex.justify-center.gap2.wrap.mt6
          w-button(route="/" round) Open dashboard
          w-button(
            @click="handleSignOut"
            text
            color="error"
            round) Sign out

      ul.auth-view__benefits(v-if="!authState.user")
        li Live portfolio and market views
        li Auth-aware trading workspace
        li Fast access to TradeDeck from any signed-in device

    .auth-view__card(v-if="!authState.user")
      auth-panel(
        :mode="mode"
        @mode-change="handleModeChange")
</template>

<script setup>
import { computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import AuthPanel from '@/components/auth-panel.vue'
import Logo from '@/components/app-logo.vue'
import { authState, consumeAuthRedirect, signOut } from '@/stores/auth'

const route = useRoute()
const router = useRouter()

const mode = computed(() => route.query.mode === 'signup' ? 'signup' : 'signin')
const heading = computed(() => {
  if (authState.user) return 'Welcome back'
  return mode.value === 'signup' ? 'Create your account' : 'Sign in'
})

const viewClasses = computed(() => ({
  'auth-view--signup': mode.value === 'signup',
  'auth-view--solo': Boolean(authState.user)
}))

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
  router.replace({ name: 'auth', query: { mode: 'signin' } })
}
</script>

<style lang="scss" scoped>
$bdrs: 28px;

.auth-view {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

/* ── animated halo ── */
.auth-view__halo {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;

  &::before,
  &::after {
    content: '';
    position: absolute;
    border-radius: 50%;
    filter: blur(100px);
    opacity: 0.45;
    will-change: transform;
  }

  &::before {
    width: 520px;
    height: 520px;
    background: radial-gradient(circle, var(--w-primary-color) 0%, transparent 70%);
    top: 15%;
    left: 20%;
    animation: halo-drift-a 14s ease-in-out infinite alternate;
  }

  &::after {
    width: 480px;
    height: 480px;
    background: radial-gradient(circle, #24c7a3 0%, #90ffb0 40%, transparent 70%);
    bottom: 10%;
    right: 15%;
    animation: halo-drift-b 16s ease-in-out infinite alternate;
  }
}

@keyframes halo-drift-a {
  0%   { transform: translate(0, 0) scale(1); }
  50%  { transform: translate(60px, -40px) scale(1.12); }
  100% { transform: translate(-30px, 50px) scale(0.95); }
}

@keyframes halo-drift-b {
  0%   { transform: translate(0, 0) scale(1); }
  50%  { transform: translate(-50px, 30px) scale(1.1); }
  100% { transform: translate(40px, -60px) scale(0.92); }
}

/* ── layout: two boxes ── */
.auth-view__boxes {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: stretch;
  justify-content: center;
  gap: 1rem;
  max-width: 900px;
  width: 100%;
  padding: 2rem;
  transition: max-width 0.35s ease;
}

/* ── layout: solo (signed in) ── */
.auth-view--solo .auth-view__boxes {
  max-width: 520px;
}

/* ── glass cards ── */
.auth-view__hero,
.auth-view__card {
  border: 1px solid color-mix(in srgb, var(--w-contrast-bg-color) 10%, transparent);
  background: color-mix(in srgb, var(--w-base-bg-color) 72%, transparent);
  backdrop-filter: blur(28px);
  -webkit-backdrop-filter: blur(28px);
  padding: 2rem;
  transition: flex-basis 0.35s ease;
}

/* hero: round left corners only */
.auth-view__hero {
  display: grid;
  gap: 1rem;
  align-content: start;
  border-radius: $bdrs 0 0 $bdrs;
  flex: 1 1 auto;
  min-width: 320px;
}

/* card: round right corners only */
.auth-view__card {
  display: grid;
  gap: 1rem;
  align-content: start;
  border-radius: 0 $bdrs $bdrs 0;
  flex: 1 1 auto;
  min-width: 280px;
}

/* sign-in: hero wider, card narrower */
.auth-view:not(.auth-view--signup) {
  .auth-view__hero { flex-basis: 55%; }
  .auth-view__card { flex-basis: 45%; }
}

/* sign-up: card wider (extra field), hero narrower */
.auth-view--signup {
  .auth-view__hero { flex-basis: 50%; }
  .auth-view__card { flex-basis: 50%; }
}

/* solo hero gets all corners back */
.auth-view--solo .auth-view__hero {
  border-radius: $bdrs;
}

/* ── text styles ── */
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

.auth-view__benefits {
  margin: 0;
  padding-left: 1.1rem;
  color: var(--w-text-light-color);
  display: grid;
  gap: 0.55rem;
}

/* ── responsive ── */
@media (max-width: 820px) {
  .auth-view__boxes {
    flex-direction: column;
    max-width: 460px;
  }

  .auth-view__hero,
  .auth-view__card {
    border-radius: $bdrs;
    flex-basis: auto !important;
    min-width: 0;
  }
}
</style>
