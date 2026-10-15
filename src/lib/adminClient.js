const url = (import.meta.env.VITE_SUPABASE_URL || '').replace(/\/$/, '')
const key = import.meta.env.VITE_SUPABASE_ANON_KEY
const sessionKey = 'buyymee-owner-session'
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
async function authRequest(path, body, token) {
  const response = await fetch(`${url}/auth/v1/${path}`, { method: 'POST', headers: { apikey: key, 'Content-Type': 'application/json', ...(token ? { Authorization: `Bearer ${token}` } : {}) }, body: body ? JSON.stringify(body) : undefined })
  const data = await response.json().catch(() => ({}))
  if (!response.ok) throw new Error(data.msg || data.error_description || data.message || 'Authentication failed.')
  return data
}
async function getSession() {
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
    onAuthStateChange(listener) { listeners.add(listener); return { data: { subscription: { unsubscribe: () => listeners.delete(listener) } } } },
    async signInWithPassword(credentials) {
      try { remember(await authRequest('token?grant_type=password', credentials)); return {} }
      catch (error) { return { error } }
    },
    async signOut() {
      const token = session?.access_token
      remember(null)
      if (token) await authRequest('logout', null, token).catch(() => {})
      return {}
    },
  },
} : null
