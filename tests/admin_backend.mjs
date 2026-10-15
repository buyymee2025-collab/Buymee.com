import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
const values = new Map()
globalThis.sessionStorage = { getItem: key => values.get(key) || null, setItem: (key, value) => values.set(key, value), removeItem: key => values.delete(key) }
const calls = []
globalThis.fetch = async (url, options = {}) => {
  calls.push({ url, options })
  if (url.includes('token?grant_type=password')) return new Response(JSON.stringify({ access_token: 'short-token', refresh_token: 'refresh-token', expires_at: Math.floor(Date.now() / 1000) + 1, user: { id: 'owner' } }), { status: 200 })
  if (url.includes('token?grant_type=refresh_token')) return new Response(JSON.stringify({ access_token: 'refreshed-token', refresh_token: 'refresh-token-2', expires_in: 3600, user: { id: 'owner' } }), { status: 200 })
  if (url.includes('/denied')) return new Response(JSON.stringify({ message: 'Permission denied' }), { status: 403 })
  return new Response(JSON.stringify([]), { status: 200 })
}
const source = (await readFile(new URL('../src/lib/adminClient.js', import.meta.url), 'utf8')).replaceAll('import.meta.env.VITE_SUPABASE_URL', JSON.stringify('https://test.supabase.co')).replaceAll('import.meta.env.VITE_SUPABASE_ANON_KEY', JSON.stringify('public-test-key'))
const { adminClient, backendRequest } = await import(`data:text/javascript;base64,${Buffer.from(source).toString('base64')}`)
await assert.rejects(backendRequest('/private', {}, true), /sign in/)
await backendRequest('/rest/v1/rpc/public_catalog')
assert.equal(calls.at(-1).options.headers.Authorization, undefined)
await adminClient.auth.signInWithPassword({ email: 'owner@example.com', password: 'test-only' })
await backendRequest('/private', {}, true)
assert.equal(calls.at(-1).options.headers.Authorization, 'Bearer refreshed-token')
assert.equal(calls.filter(call => call.url.includes('grant_type=refresh_token')).length, 1)
await backendRequest('/private', {}, true)
assert.equal(calls.filter(call => call.url.includes('grant_type=refresh_token')).length, 1)
await assert.rejects(backendRequest('/denied', {}, true), /Permission denied/)
await adminClient.auth.signOut()
assert.equal((await adminClient.auth.getSession()).data.session, null)
await assert.rejects(backendRequest('/private', {}, true), /sign in/)
console.log('Backend client checks passed: public reads, protected writes, token refresh, server denial and sign-out. Live RLS still requires a configured Supabase project.')
