export const currencies = { USD:{symbol:'$', rate:1, locale:'en-US'}, GBP:{symbol:'£', rate:0.78, locale:'en-GB'}, NGN:{symbol:'₦', rate:1550, locale:'en-NG'} }
export const formatPrice = (price, code='USD') => { const c=currencies[code]||currencies.USD; return new Intl.NumberFormat(c.locale,{style:'currency',currency:code,maximumFractionDigits:code==='NGN'?0:0}).format(price*c.rate) }
