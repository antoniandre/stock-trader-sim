<template lang="pug">
.auth-panel
  .auth-panel__header
    h3.auth-panel__title {{ panelTitle }}
    p.auth-panel__copy {{ panelCopy }}

  form.auth-panel__form(@submit.prevent="submit")
    w-input(
      v-if="isSignUp"
      v-model.trim="displayName"
      label="Display name (optional)"
      type="text"
      autocomplete="nickname"
      :maxlength="120")

    w-input(
      v-model.trim="email"
      label="Email"
      type="email"
      required
      autocomplete="email")

    .w-flex.align-center.gap2
      w-input.xs6(
        v-model="password"
        :label="isSignUp ? 'Create password' : 'Password'"
        type="password"
        required
        :autocomplete="isSignUp ? 'new-password' : 'current-password'")
      w-input.xs6(
        v-if="isSignUp"
        v-model="confirmPassword"
        label="Confirm password"
        type="password"
        required
        autocomplete="new-password")

    p.caption(v-if="isSignUp") Password should be at least 8 characters.
    w-alert.auth-panel__notice(v-if="authState.notice" info) {{ authState.notice }}
    p.auth-panel__error(v-if="errorMessage") {{ errorMessage }}

    .auth-panel__actions.mt4.justify-end
      w-button(type="button" text @click="toggleMode") {{ switchLabel }}
      w-button(:loading="authState.loading" type="submit") {{ submitLabel }}
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import { authState, signInWithPassword, signUpWithPassword } from '@/stores/auth'

const props = defineProps({
  mode: { type: String, default: 'signin' }
})

const emit = defineEmits(['mode-change'])

const email = ref('')
const displayName = ref('')
const password = ref('')
const confirmPassword = ref('')
const isSignUp = ref(props.mode === 'signup')
const localError = ref('')

watch(() => props.mode, value => {
  isSignUp.value = value === 'signup'
  localError.value = ''
  if (value !== 'signup') displayName.value = ''
})

const panelTitle = computed(() => isSignUp.value ? 'Create your account' : 'Sign in')
const panelCopy = computed(() => isSignUp.value
  ? 'Create a TradeDeck login with your email and password, then jump straight into the app.'
  : 'Sign in with your email and password to continue.')
const submitLabel = computed(() => isSignUp.value ? 'Create account' : 'Sign in')
const switchLabel = computed(() => isSignUp.value ? 'Already have an account?' : 'Need an account?')
const errorMessage = computed(() => localError.value || authState.error)

function toggleMode() {
  const nextMode = isSignUp.value ? 'signin' : 'signup'
  isSignUp.value = nextMode === 'signup'
  confirmPassword.value = ''
  displayName.value = ''
  localError.value = ''
  emit('mode-change', nextMode)
}

async function submit() {
  localError.value = ''

  if (isSignUp.value && password.value.length < 8) {
    localError.value = 'Password must be at least 8 characters.'
    return
  }

  if (isSignUp.value && password.value !== confirmPassword.value) {
    localError.value = 'Passwords do not match.'
    return
  }

  try {
    if (isSignUp.value) {
      await signUpWithPassword({
        email: email.value,
        password: password.value,
        displayName: displayName.value
      })
    }
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
}

.auth-panel__header {
  display: grid;
  gap: 0.25rem;
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

.auth-panel__error {color: var(--w-error-color);}

.auth-panel__form {
  display: grid;
  gap: 0.9rem;
}

.auth-panel__signed-in,
.auth-panel__hint {
  color: var(--w-text-light-color);
}

.auth-panel__hint {
  margin: -0.2rem 0 0;
  font-size: 0.85rem;
}

.auth-panel__hint--tight {margin: -0.55rem 0 0;}

.auth-panel__actions {
  display: flex;
  gap: 0.65rem;
  align-items: center;
  flex-wrap: wrap;
}
</style>
