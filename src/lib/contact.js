export const CONTACT_EMAIL = 'buyymee2025@gmail.com'
export const WHATSAPP_NUMBER = '2348035575665'

export function purchaseUrl(product, { color, size, origin = '' } = {}) {
  const message = [
    'Hello BUYYMEE, I would like to purchase:',
    product.name,
    product.productCode && `Product code: ${product.productCode}`,
    color && `Colour: ${color}`,
    size && `Size: ${size}`,
    product.slug && origin && `${origin}/product/${product.slug}`,
    'Please confirm the price, availability and delivery details.',
  ].filter(Boolean).join('\n')
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export function cartPurchaseUrl(cart, origin = '') {
  const lines = cart.flatMap(item => [
    `${item.qty} × ${item.name}${item.size ? ` — Size: ${item.size}` : ''}`,
    item.productCode && `Code: ${item.productCode}`,
    item.slug && origin && `${origin}/product/${item.slug}`,
  ].filter(Boolean))
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(['Hello BUYYMEE, I would like to order:', ...lines, 'Please confirm pricing, availability and delivery.'].join('\n'))}`
}

export function contactEmailUrl(form) {
  const body = [`Name: ${form.name}`, `Email: ${form.email}`, `Reason: ${form.reason}`, '', form.message].join('\n')
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(`BUYYMEE Contact — ${form.reason}`)}&body=${encodeURIComponent(body)}`
}
