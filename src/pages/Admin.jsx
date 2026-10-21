import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { adminClient, backendRequest } from '../lib/adminClient'
import { productCategories, validateEyewearColors } from '../lib/catalog'
import { saveProduct, uploadMedia } from '../lib/catalogService'
import { originalProducts, useStore } from '../context/StoreContext'
import '../admin.css'

const ownerEmail = import.meta.env.VITE_ADMIN_EMAIL || 'buyymee2025@gmail.com'
const blank = (category = 'Men') => ({ id: crypto.randomUUID(), name: '', slug: '', category, subcategory: category === 'Luxury Women Silk' ? 'Nightwear' : '', price: 0, compareAt: '', description: '', image: '', images: [], media: [], sizes: ['OS'], colors: ['Standard'], inStock: true, newArrival: false })
const mediaOf = product => product.variants?.some(variant => variant.media?.length) ? product.variants.flatMap(variant => (variant.media || [{ type: 'image', src: variant.image }]).filter(item => item.src).map(item => ({ ...item, color: variant.color }))) : product.media?.length ? product.media : (product.images?.length ? product.images : [product.image]).filter(Boolean).map(src => ({ type: 'image', src }))

const coverOf = product => product.media.find(item => item.type === 'image' && item.src === product.image) || product.media.find(item => item.type === 'image')

export default function Admin() {
  const { products, refreshCatalog } = useStore()
  const [session, setSession] = useState(null)
  const [access, setAccess] = useState('checking')
  const [password, setPassword] = useState('')
  const [confirmation, setConfirmation] = useState('')
  const [recovering, setRecovering] = useState(false)
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState('All categories')
  const [draft, setDraft] = useState(null)
  const [busy, setBusy] = useState(false)
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [mediaUrl, setMediaUrl] = useState('')
  const [mediaType, setMediaType] = useState('image')

  useEffect(() => {
    if (!adminClient) return
    let alive = true
    const check = async current => {
      if (!alive) return
      setSession(current); setRecovering(adminClient.auth.isPasswordRecovery()); setAccess(current ? 'checking' : 'signed-out')
      if (current) {
        try {
          const data = await backendRequest(`/rest/v1/admin_members?select=user_id&user_id=eq.${encodeURIComponent(current.user.id)}`, {}, true)
          if (alive) setAccess(data?.length ? 'allowed' : 'denied')
        } catch { if (alive) setAccess('denied') }
      }
    }
    adminClient.auth.getSession().then(({ data }) => check(data.session)).catch(error => { if (alive) { setAccess('signed-out'); setError(error.message) } })
    const { data } = adminClient.auth.onAuthStateChange((_event, current) => { setTimeout(() => check(current), 0) })
    return () => { alive = false; data.subscription.unsubscribe() }
  }, [])

  const run = async action => {
    setBusy(true); setError(''); setMessage('')
    try { await action() } catch (e) { setError(e.message || 'Something went wrong. Please try again.') }
    finally { setBusy(false) }
  }
  const login = event => {
    event.preventDefault()
    run(async () => {
      const { error } = await adminClient.auth.signInWithPassword({ email: ownerEmail, password })
      setPassword('')
      if (error) throw error
    })
  }
  const requestReset = () => run(async () => {
    const { error } = await adminClient.auth.resetPasswordForEmail(ownerEmail)
    if (error) throw error
    setMessage('Check your admin Gmail inbox for the password reset link. Check Spam too.')
  })
  const resetPassword = event => {
    event.preventDefault()
    run(async () => {
      if (password !== confirmation) throw new Error('The two passwords do not match.')
      const { error } = await adminClient.auth.updatePassword(password)
      setPassword(''); setConfirmation('')
      if (error) throw error
      setRecovering(false)
      setMessage('Password updated. Your dashboard is ready.')
    })
  }
  const edit = product => { const media = [...mediaOf(product)]; if (product.image && !media.some(item => item.type === 'image' && item.src === product.image)) media.unshift({ type: 'image', src: product.image }); setDraft({ ...product, media }); setError(''); setMessage(''); setMediaUrl(''); window.scrollTo(0, 0) }
  const change = (key, value) => setDraft(previous => ({ ...previous, [key]: value }))
  const append = items => setDraft(previous => ({ ...previous, media: [...previous.media, ...items] }))
  const upload = files => run(async () => {
    // Add each successful file immediately, even if a later upload fails.
    for (const file of files) append([await uploadMedia(file)])
    setMessage('Pictures uploaded. Fill in the details, then click Apply to publish.')
  })
  const save = event => {
    event.preventDefault()
    run(async () => {
      validateEyewearColors(draft)
      if (draft.price === '') throw new Error('Enter a price.')
      const cover = coverOf(draft)
      const coverIndex = draft.media.indexOf(cover)
      const media = cover ? [cover, ...draft.media.filter((_, index) => index !== coverIndex)] : draft.media
      const imageItems = media.filter(item => item.type === 'image')
      const product = { ...draft, media, slug: draft.slug || draft.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''), name: draft.name.trim(), subcategory: draft.subcategory.trim() || draft.category, price: Number(draft.price), compareAt: draft.compareAt == null || String(draft.compareAt).trim() === '' ? null : Number(draft.compareAt), sizes: draft.sizes.map(value => value.trim()).filter(Boolean).length ? draft.sizes.map(value => value.trim()).filter(Boolean) : ['OS'], colors: draft.colors.map(value => value.trim()).filter(Boolean).length ? draft.colors.map(value => value.trim()).filter(Boolean) : ['Standard'], image: imageItems[0]?.src || '', secondaryImage: imageItems[1]?.src || imageItems[0]?.src || '', images: imageItems.map(item => item.src) }
      if ([...originalProducts, ...products].some(item => String(item.id) !== String(product.id) && item.slug === product.slug)) throw new Error('That product link already exists. Choose a different link.')
      if (product.category === 'Eye Wears') product.gallery = product.images
      if (product.variants?.length) product.variants = [{ color: product.colors[0], image: product.image, media: product.media }]
      await saveProduct(product)
      setDraft(null)
      try { await refreshCatalog(); setMessage('Applied. Your product is now on the website.') }
      catch { setMessage('Product saved. Refresh the page to reload the catalogue.') }
    })
  }
  const hide = product => {
    if (!window.confirm(`Remove “${product.name}” from the storefront?`)) return
    run(async () => { await saveProduct(product, true); await refreshCatalog(); setMessage('Product removed from the storefront.') })
  }

  return <main className="admin-page">
    <header className="admin-header"><Link to="/" className="admin-brand">BUYYMEE<span>OWNER STUDIO</span></Link><div><Link to="/shop">View store ↗</Link>{session && <button disabled={busy} onClick={() => run(async () => { const { error } = await adminClient.auth.signOut(); if (error) throw error; setDraft(null) })}>Sign out</button>}</div></header>
    {!adminClient ? <section className="admin-login"><span className="admin-eyebrow">ADMIN SETUP</span><h1>Your store.<br/>In your hands.</h1><p>The dashboard is built. Connect the store database to activate owner login, media uploads and product updates.</p><p>Setup instructions are in <strong>docs/admin-setup.md</strong> in the repository.</p><Link to="/shop">Return to the store ↗</Link></section> : access === 'checking' ? <p role="status">Checking your access…</p> : access === 'allowed' && recovering ? <section className="admin-login"><span className="admin-eyebrow">SET YOUR ADMIN PASSWORD</span><h1>A fresh start.</h1><form onSubmit={resetPassword}><label>New password<input type="password" autoComplete="new-password" minLength={8} required value={password} onChange={event => setPassword(event.target.value)} /></label><label>Confirm new password<input type="password" autoComplete="new-password" minLength={8} required value={confirmation} onChange={event => setConfirmation(event.target.value)} /></label><button className="admin-primary" disabled={busy}>{busy ? 'Saving…' : 'Save password →'}</button></form></section> : access !== 'allowed' ? <section className="admin-login"><span className="admin-eyebrow">ENTER YOUR ADMIN PASSWORD</span><h1>Welcome<br/>behind the scenes.</h1>{access === 'denied' ? <p>Your account does not have owner access. Ask the website administrator to approve it.</p> : <form onSubmit={login}><label>Password<input type="password" autoComplete="current-password" required value={password} onChange={event => setPassword(event.target.value)} /></label><button className="admin-primary" disabled={busy}>{busy ? 'Signing in…' : 'Enter dashboard →'}</button><button type="button" disabled={busy} onClick={requestReset}>Forgot password?</button></form>}</section> : <>
      <section className="admin-heading"><div><span className="admin-eyebrow">THE CATALOGUE / OWNER STUDIO</span><h1>{draft ? 'Shape the details.' : 'Keep your store current.'}</h1><p>{draft ? 'Choose pictures from your device, enter the product details, then click Apply.' : `${products.length} products · Prices are entered in USD`}</p></div>{!draft && <button className="admin-primary" disabled={busy} onClick={() => edit(blank(filter === 'All categories' ? 'Men' : filter))}>＋ Upload product</button>}</section>
      {draft ? <form className="admin-editor" onSubmit={save}>
        <fieldset disabled={busy}><div className="admin-panel"><h2>Product details</h2><label>Product name<input required value={draft.name} onChange={event => { const name = event.target.value; setDraft(previous => ({ ...previous, name, slug: previous.slug })) }} /></label><label>Product link<input pattern="[a-z0-9]+(-[a-z0-9]+)*" value={draft.slug} onChange={event => change('slug', event.target.value)} /><small>/product/{draft.slug || 'your-product-name'}</small></label><div className="admin-columns"><label>Category<select value={draft.category} onChange={event => change('category', event.target.value)}>{productCategories.map(category => <option key={category}>{category}</option>)}</select></label><label>Subcategory<input value={draft.subcategory} onChange={event => change('subcategory', event.target.value)} /></label></div><div className="admin-columns"><label>Current price (USD)<input required type="number" min="0" step="0.01" value={draft.price} onChange={event => change('price', event.target.value)} /></label><label>Original price (USD)<input type="number" min="0" step="0.01" value={draft.compareAt ?? ''} onChange={event => change('compareAt', event.target.value)} /><small>Optional. A higher original price appears crossed out beside the current price.</small></label><label>Product code<input value={draft.productCode || ''} onChange={event => change('productCode', event.target.value)} /></label></div><label>Description<textarea rows="5" value={draft.description} onChange={event => change('description', event.target.value)} /></label><div className="admin-columns"><label>Sizes, separated by commas<input value={(draft.sizes || []).join(',')} onChange={event => change('sizes', event.target.value.split(','))} /></label><label>{draft.category === 'Eye Wears' ? 'Color — one color per product card' : 'Colours, separated by commas'}<input value={(draft.colors || []).join(',')} onChange={event => change('colors', event.target.value.split(','))} /></label></div><label className="admin-check"><input type="checkbox" checked={draft.inStock !== false} onChange={event => change('inStock', event.target.checked)} />Available in stock</label><label className="admin-check"><input type="checkbox" checked={!!draft.newArrival} onChange={event => change('newArrival', event.target.checked)} />Show in New In</label><label className="admin-check"><input type="checkbox" checked={!!draft.priceOnRequest} onChange={event => change('priceOnRequest', event.target.checked)} />Price on request</label></div></fieldset>
        <fieldset disabled={busy}><div className="admin-panel"><h2>Upload pictures from your device</h2><p>Choose “Set as cover” on the image you want customers to see before opening the product. The selected image also opens first in the gallery. JPG, PNG, WebP, AVIF, MP4 or WebM; up to 50 MB per file.</p><label className="admin-upload">＋ Choose pictures or videos<input type="file" multiple accept="image/jpeg,image/png,image/webp,image/avif,video/mp4,video/webm" onChange={event => { const files = [...event.target.files]; event.target.value = ''; upload(files) }} /></label><div className="admin-url"><select aria-label="Media type" value={mediaType} onChange={event => setMediaType(event.target.value)}><option value="image">Image</option><option value="video">Video</option></select><input aria-label="Existing media URL" placeholder="Or paste an https:// media link" value={mediaUrl} onChange={event => setMediaUrl(event.target.value)} /><button type="button" onClick={() => { if (!/^https:\/\//.test(mediaUrl.trim())) { setError('Enter an HTTPS media link.'); return } append([{ type: mediaType, src: mediaUrl.trim() }]); setMediaUrl('') }}>Add</button></div><div className="admin-media">{draft.media.map((item, index) => <div key={`${index}-${item.src}`}>{item.type === 'video' ? <video src={item.src} controls preload="metadata" /> : <img src={item.src} alt={`Product view ${index + 1}`} loading="lazy" />}<div><span>{index + 1} / {item.type}</span>{item.type === 'image' && <button type="button" aria-pressed={item === coverOf(draft)} onClick={() => change('image', item.src)}>{item === coverOf(draft) ? '✓ Cover image' : 'Set as cover'}</button>}<button type="button" disabled={index === 0} aria-label={`Move media ${index + 1} earlier`} onClick={() => { const items = [...draft.media]; [items[index - 1], items[index]] = [items[index], items[index - 1]]; change('media', items) }}>↑</button><button type="button" onClick={() => change('media', draft.media.filter((_, position) => position !== index))}>Remove</button></div></div>)}</div>{!!draft.variants?.length && <p>{draft.category === 'Eye Wears' ? 'Only matching front and side views of this exact frame and lens color belong here. Add other colors as separate products.' : 'Saving combines the existing colour views into this single gallery. Arrange every colour here before publishing.'}</p>}</div></fieldset><div className="admin-editor-actions"><button type="button" disabled={busy} onClick={() => { if(window.confirm('Discard unsaved changes?')) setDraft(null) }}>Cancel</button><button className="admin-primary" disabled={busy}>{busy ? 'Working…' : 'Apply →'}</button></div>
      </form> : <section className="admin-panel"><div className="admin-tools"><Link to="/luxury-women-silk">View Luxury Women Silk ↗</Link><input aria-label="Search products" placeholder="Search name or product code…" value={query} onChange={event => setQuery(event.target.value)} /><select aria-label="Filter category" value={filter} onChange={event => setFilter(event.target.value)}>{['All categories', ...productCategories].map(category => <option key={category}>{category}</option>)}</select></div><div className="admin-table"><table><thead><tr><th>Product</th><th>Category</th><th>Sizes</th><th>USD</th><th>Stock</th><th>Manage</th></tr></thead><tbody>{products.filter(product => (filter === 'All categories' || product.category === filter) && `${product.name} ${product.productCode || ''}`.toLowerCase().includes(query.toLowerCase())).map(product => <tr key={product.id}><td><div className="admin-product"><img src={product.image} alt="" loading="lazy" /><span>{product.name}<small>{product.productCode || product.slug}</small></span></div></td><td>{product.category}</td><td>{product.sizes?.length ? product.sizes.join(' / ') : 'On request'}</td><td>{product.priceOnRequest ? 'On request' : Number(product.price).toFixed(2)}</td><td>{product.inStock === false ? 'Sold out' : 'Available'}</td><td><button disabled={busy} onClick={() => edit(product)}>Edit</button><button disabled={busy} onClick={() => hide(product)}>Remove</button></td></tr>)}</tbody></table></div></section>}
    </>}
    <div className="admin-status" aria-live="polite">{busy && <p>Working…</p>}{message && <p role="status">{message}</p>}{error && <p role="alert" className="admin-error">{error}</p>}</div>
  </main>
}
