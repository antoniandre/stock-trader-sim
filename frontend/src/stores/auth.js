import { reactive, readonly } from 'vue'
import { getSupabaseClient, hasSupabaseConfig } from '@/lib/supabase'

const REDIRECT_STORAGE_KEY = 'tradedeck.auth.redirect'

const state = reactive({
  ready: false,
  enabled: hasSupabaseConfig(),
  loading: false,
  session: null,
  user: null,
  error: '',
  notice: ''
})

function applySession(session) {
  state.session = session || null
  state.user = session?.user || null
}

export async function initAuth() {
  const supabase = getSupabaseClient()
  state.enabled = hasSupabaseConfig()

  if (!supabase) {
    state.ready = true
    return null
  }

  const { data, error } = await supabase.auth.getSession()
  if (error) state.error = error.message
  applySession(data?.session || null)
  state.ready = true

  const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
    applySession(session)
    state.error = ''
  })

  return () => listener.subscription.unsubscribe()
}

export async function signInWithPassword({ email, password }) {
  const supabase = getSupabaseClient()
  if (!supabase) throw new Error('Supabase auth is not configured.')

  state.loading = true
  state.error = ''
  state.notice = ''
  try {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) throw error
    applySession(data.session)
    return data
  }
  finally {
    state.loading = false
  }
}

export async function signUpWithPassword({ email, password }) {
  const supabase = getSupabaseClient()
  if (!supabase) throw new Error('Supabase auth is not configured.')

  state.loading = true
  state.error = ''
  state.notice = ''
  try {
    const { data, error } = await supabase.auth.signUp({ email, password })
    if (error) throw error
    applySession(data.session)
    state.notice = data.session ? 'Account created.' : 'Check your email to confirm your account.'
    return data
  }
  finally {
    state.loading = false
  }
}

export async function signOut() {
  const supabase = getSupabaseClient()
  if (!supabase) return

  state.loading = true
  state.error = ''
  try {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
    applySession(null)
  }
  finally {
    state.loading = false
  }
}

export async function getAccessToken() {
  const supabase = getSupabaseClient()
  if (!supabase) return ''
  const { data } = await supabase.auth.getSession()
  return data?.session?.access_token || ''
}

export function requiresAuth() {
  return state.enabled
}

export function isAuthenticated() {
  return Boolean(state.user)
}

export function rememberAuthRedirect(target) {
  if (typeof window === 'undefined' || !target) return
  window.localStorage.setItem(REDIRECT_STORAGE_KEY, target)
}

export function consumeAuthRedirect() {
  if (typeof window === 'undefined') return ''
  const target = window.localStorage.getItem(REDIRECT_STORAGE_KEY) || ''
  if (target) window.localStorage.removeItem(REDIRECT_STORAGE_KEY)
  return target
}

export const authState = readonly(state)
