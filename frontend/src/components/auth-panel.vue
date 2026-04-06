<template lang="pug">
.auth-panel
  .auth-panel__header
    p.auth-panel__eyebrow TradeDeck access
    h3.auth-panel__title {{ panelTitle }}
    p.auth-panel__copy {{ panelCopy }}

  form.auth-panel__form(@submit.prevent="submit")
    w-input(v-model.trim="email" label="Email" type="email" required autocomplete="email")
    w-input(
      v-model="password"
      :label="isSignUp ? 'Create password' : 'Password'"
      type="password"
      required
      :autocomplete="isSignUp ? 'new-password' : 'current-password'")

    w-input(
      v-if="isSignUp"
      v-model="confirmPassword"
      label="Confirm password"
      type="password"
      required
      autocomplete="new-password")

    p.auth-panel__notice(v-if="authState.notice") {{ authState.notice }}
    p.auth-panel__error(v-if="errorMessage") {{ errorMessage }}

    .auth-panel__actions
      w-button(:loading="authState.loading" type="submit") {{ submitLabel }}
      w-button(type="button" text @click="toggleMode")
        | {{ switchLabel }}
      w-button(v-if="showSignOut" type="button" text color="error" @click="handleSignOut") Sign out

</template>

<script setup>
import { computed, ref, watch } from 'vue'
import { authState, signInWithPassword, signOut, signUpWithPassword } from '@/stores/auth'

const props = defineProps({
  mode: {
    type: String,
    default: 'signin'
  },
  showSignOut: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['mode-change'])

const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const isSignUp = ref(props.mode === 'signup')
const localError = ref('')

watch(() => props.mode, value => {
  isSignUp.value = value === 'signup'
  localError.value = ''
})

const panelTitle = computed(() => isSignUp.value ? 'Create your account' : 'Sign in')
const panelCopy = computed(() => isSignUp.value
  ? 'Create a TradeDeck login with your email and password.'
  : 'Sign in with your email and password to continue.')
const submitLabel = computed(() => isSignUp.value ? 'Create account' : 'Sign in')
const switchLabel = computed(() => isSignUp.value ? 'Already have an account?' : 'Need an account?')
const errorMessage = computed(() => localError.value || authState.error)

function toggleMode() {
  const nextMode = isSignUp.value ? 'signin' : 'signup'
  isSignUp.value = nextMode === 'signup'
  confirmPassword.value = ''
  localError.value = ''
  emit('mode-change', nextMode)
}

async function handleSignOut() {
  await signOut()
}

async function submit() {
  localError.value = ''

  if (isSignUp.value && password.value !== confirmPassword.value) {
    localError.value = 'Passwords do not match.'
    return
  }

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
