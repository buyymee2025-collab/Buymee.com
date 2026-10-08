export const CLD_BASE = 'https://res.cloudinary.com/mdbhqnv7/image/upload/'
export const cld = (src, w=800) => src?.startsWith('http') ? src : `${CLD_BASE}f_auto,q_auto,w_${w}/${src}`
