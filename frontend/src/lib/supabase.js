import { createClient } from '@supabase/supabase-js'

const supabaseUrl = String(import.meta.env.VITE_SUPABASE_URL || '').trim()
const supabasePublishableKey = String(import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY || '').trim()

let supabase = null

if (supabaseUrl && supabasePublishableKey) {
  supabase = createClient(supabaseUrl, supabasePublishableKey, {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true
    }
  })
}

export function getSupabaseClient() {
  return supabase
}

export function hasSupabaseConfig() {
  return Boolean(supabase)
}
