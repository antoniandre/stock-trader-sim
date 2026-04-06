<template lang="pug">
.auth-panel
  .auth-panel__header
    p.auth-panel__eyebrow TradeDeck access
    h3.auth-panel__title {{ isSignUp ? 'Create your account' : 'Sign in' }}
    p.auth-panel__copy Email and password auth via Supabase.

  form.auth-panel__form(@submit.prevent="submit")
    w-input(v-model.trim="email" label="Email" type="email" required autocomplete="email")
    w-input(v-model="password" label="Password" type="password" required autocomplete="current-password")

    p.auth-panel__notice(v-if="authState.notice") {{ authState.notice }}
    p.auth-panel__error(v-if="errorMessage") {{ errorMessage }}

    .auth-panel__actions
      w-button(:loading="authState.loading" type="submit") {{ isSignUp ? 'Create account' : 'Sign in' }}
      w-button(type="button" text @click="isSignUp = !isSignUp")
        | {{ isSignUp ? 'Already have an account?' : 'Need an account?' }}

</template>

<script setup>
import { computed, ref } from 'vue'
import { authState, signInWithPassword, signUpWithPassword } from '@/stores/auth'

const email = ref('')
const password = ref('')
const isSignUp = ref(false)
const localError = ref('')

const errorMessage = computed(() => localError.value || authState.error)

async function submit() {
  localError.value = ''

  try {
    if (isSignUp.value) await signUpWithPassword({ email: email.value, password: password.value })
    else await signInWithPassword({ email: email.value, password: password.value })
  }
  catch (error) {
    localError.value = error.message || 'Authentication failed.'
  }
}
</script>

<style lang="scss" scoped>
.auth-panel {
  display: grid;
  gap: 1rem;
  padding: 1.1rem;
  border: 1px solid color-mix(in srgb, var(--w-contrast-bg-color) 8%, transparent);
  border-radius: 20px;
  background: color-mix(in srgb, var(--w-base-bg-color) 92%, transparent);
}

.auth-panel__header {
  display: grid;
  gap: 0.25rem;
}

.auth-panel__eyebrow {
  margin: 0;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--w-primary-color);
}

.auth-panel__title,
.auth-panel__copy,
.auth-panel__notice,
.auth-panel__error {
  margin: 0;
}

.auth-panel__copy,
.auth-panel__notice {
  color: var(--w-text-light-color);
}

.auth-panel__error {
  color: var(--w-error-color);
}

.auth-panel__form {
  display: grid;
  gap: 0.9rem;
}

.auth-panel__actions {
  display: flex;
  gap: 0.65rem;
  align-items: center;
  flex-wrap: wrap;
}
</style>
