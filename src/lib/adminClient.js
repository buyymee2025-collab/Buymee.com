const url = (import.meta.env.VITE_SUPABASE_URL || '').replace(/\/$/, '')
const key = import.meta.env.VITE_SUPABASE_ANON_KEY
const sessionKey = 'buyymee-owner-session'
const recoveryKey = 'buyymee-password-recovery'
let session = null
try { session = JSON.parse(sessionStorage.getItem(sessionKey) || 'null') } catch { /* No active session. */ }
const listeners = new Set()
let refreshing
function remember(value) {
  if (value && !value.expires_at && value.expires_in) value.expires_at = Math.floor(Date.now() / 1000) + value.expires_in
  session = value
  if (value) sessionStorage.setItem(sessionKey, JSON.stringify(value))
  else sessionStorage.removeItem(sessionKey)
  listeners.forEach(listener => listener(value ? 'SIGNED_IN' : 'SIGNED_OUT', value))
}
async function authRequest(path, body, token, method = 'POST') {
  const response = await fetch(`${url}/auth/v1/${path}`, { method, headers: { apikey: key, 'Content-Type': 'application/json', ...(token ? { Authorization: `Bearer ${token}` } : {}) }, body: body ? JSON.stringify(body) : undefined })
  const data = await response.json().catch(() => ({}))
  if (!response.ok) throw new Error(data.msg || data.error_description || data.message || 'Authentication failed.')
  return data
}
// Verify emailed recovery sessions with Auth before using them. Remove tokens
// from the address bar immediately so they cannot be copied with a page link.
const recoveryReady = (async () => {
  if (typeof window === 'undefined' || window.location.pathname !== '/admin') return
  const hash = new URLSearchParams(window.location.hash.slice(1))
  if (!hash.has('access_token') && !hash.has('error_description')) return
  window.history.replaceState(null, '', window.location.pathname + window.location.search)
  if (hash.has('error_description')) throw new Error('This reset link has expired. Request a new password reset below.')
  if (hash.get('type') !== 'recovery' || !hash.get('refresh_token')) return
  const token = hash.get('access_token')
  const user = await authRequest('user', null, token, 'GET')
  sessionStorage.setItem(recoveryKey, 'true')
  remember({ access_token: token, refresh_token: hash.get('refresh_token'), expires_in: Number(hash.get('expires_in')) || 3600, user })
})()
// getSession reports recovery failures to the page; avoid an unhandled rejection
// if the lazy admin page has not mounted yet.
recoveryReady.catch(() => {})
let recoveryChecked = false
async function getSession() {
  if (!recoveryChecked) {
    try { await recoveryReady } finally { recoveryChecked = true }
  }
  if (session && session.expires_at * 1000 < Date.now() + 60000) {
    if (!refreshing) refreshing = authRequest('token?grant_type=refresh_token', { refresh_token: session.refresh_token }).then(remember).catch(error => { remember(null); throw error }).finally(() => { refreshing = null })
    await refreshing
  }
  return { data: { session } }
}
export async function backendRequest(path, options = {}, authenticated = false) {
  if (!url || !key) throw new Error('The store database has not been connected.')
  let token
  if (authenticated) { await getSession(); token = session?.access_token; if (!token) throw new Error('Please sign in again.') }
  const response = await fetch(`${url}${path}`, { ...options, headers: { apikey: key, ...(token ? { Authorization: `Bearer ${token}` } : {}), ...options.headers } })
  const data = await response.json().catch(() => null)
  if (!response.ok) throw new Error(data?.message || data?.error_description || data?.error || 'The request could not be completed.')
  return data
}
export const adminClient = url && key ? {
  auth: {
    getSession,
    isPasswordRecovery() { return sessionStorage.getItem(recoveryKey) === 'true' },
    async resetPasswordForEmail(email) {
      try { await authRequest(`recover?redirect_to=${encodeURIComponent(window.location.origin + '/admin')}`, { email }); return {} }
      catch (error) { return { error } }
    },
    async updatePassword(password) {
      try {
        await getSession()
        if (!session?.access_token) throw new Error('Request a new password reset link.')
        const user = await authRequest('user', { password }, session.access_token, 'PUT')
        sessionStorage.removeItem(recoveryKey)
        remember({ ...session, user })
        return {}
      } catch (error) { return { error } }
    },
    onAuthStateChange(listener) { listeners.add(listener); return { data: { subscription: { unsubscribe: () => listeners.delete(listener) } } } },
    async signInWithPassword(credentials) {
      try { remember(await authRequest('token?grant_type=password', credentials)); return {} }
      catch (error) { return { error } }
    },
    async signOut() {
      const token = session?.access_token
      sessionStorage.removeItem(recoveryKey)
      remember(null)
      if (token) await authRequest('logout', null, token).catch(() => {})
      return {}
    },
  },
} : null
