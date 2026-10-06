const image = (id) =>
  id.startsWith('/') || id.startsWith('https://')
    ? id
    : `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=85`

const makeProduct = ({
  id,
  slug,
  name,
  category,
  subcategory,
  price,
  imageUrl,
  description,
  sizes = ['OS'],
}) => ({
  id,
  slug,
  name,
  category,
  subcategory,
  brand: 'BUYYMEE.com',
  price,
  compareAt: null,
  currency: 'USD',
  image: image(imageUrl),
  secondaryImage: image(imageUrl),
  gallery: [image(imageUrl)],
  description,
  sizes,
  colors: ['As shown'],
  tags: [category.toLowerCase(), subcategory.toLowerCase()],
  inStock: true,
  placeholder: true,
  featured: false,
  newArrival: false,
  sale: false,
})

export const categoryProducts = {
  men: [
    makeProduct({ id: 101, slug: 'men-edit-1', name: 'The Oxford Layer', category: 'Men', subcategory: 'Shirts', price: 128, imageUrl: 'photo-1603252109303-2751441dd157', description: 'A clean menswear layer with an easy line and considered weight.', sizes: ['S', 'M', 'L', 'XL'] }),
    makeProduct({ id: 102, slug: 'men-edit-2', name: 'Quiet Tailoring', category: 'Men', subcategory: 'Tailoring', price: 198, imageUrl: '/images/stock-tailoring.webp', description: 'Relaxed tailoring for a sharper everyday rotation.', sizes: ['S', 'M', 'L', 'XL'] }),
    makeProduct({ id: 103, slug: 'men-edit-3', name: 'After Dark', category: 'Men', subcategory: 'Outerwear', price: 214, imageUrl: 'photo-1551488831-00ddcb6c6bd3', description: 'A confident outer layer designed for the evening shift.', sizes: ['S', 'M', 'L', 'XL'] }),
  ],
  shoes: [
    makeProduct({ id: 111, slug: 'shoe-edit-1', name: 'The Point', category: 'Shoes', subcategory: 'Heels', price: 164, imageUrl: 'photo-1543163521-1bf539c55dd2', description: 'A precise shoe with a clean line and a little attitude.', sizes: ['36', '37', '38', '39', '40', '41'] }),
    makeProduct({ id: 112, slug: 'shoe-edit-2', name: 'Soft Step', category: 'Shoes', subcategory: 'Heels', price: 142, imageUrl: '/images/stock-heels.webp', description: 'Easy, polished, and ready for long days that turn into nights.', sizes: ['36', '37', '38', '39', '40', '41'] }),
    makeProduct({ id: 113, slug: 'shoe-edit-3', name: 'City Sole', category: 'Shoes', subcategory: 'Loafers', price: 176, imageUrl: '/images/stock-loafers.webp', description: 'A grounded loafer with a sharper city profile.', sizes: ['36', '37', '38', '39', '40', '41'] }),
  ],
  sneakers: [
    makeProduct({ id: 121, slug: 'sneaker-edit-1', name: 'Signal Runner', category: 'Sneakers', subcategory: 'Sneakers', price: 118, imageUrl: 'photo-1542291026-7eec264c27ff', description: 'A bright, everyday runner built for movement.', sizes: ['36', '37', '38', '39', '40', '41'] }),
    makeProduct({ id: 122, slug: 'sneaker-edit-2', name: 'Low Profile', category: 'Sneakers', subcategory: 'Sneakers', price: 124, imageUrl: 'photo-1525966222134-fcfa99b8ae77', description: 'Clean lines, low profile, no unnecessary noise.', sizes: ['36', '37', '38', '39', '40', '41'] }),
    makeProduct({ id: 123, slug: 'sneaker-edit-3', name: 'Daily Pace', category: 'Sneakers', subcategory: 'Sneakers', price: 108, imageUrl: 'photo-1552346154-21d32810aba3', description: 'A considered everyday sneaker with a little more energy.', sizes: ['36', '37', '38', '39', '40', '41'] }),
  ],
  bags: [
    makeProduct({ id: 131, slug: 'bag-edit-1', name: 'The Carryall', category: 'Bags', subcategory: 'Totes', price: 186, imageUrl: '/images/stock-tote.webp', description: 'A generous carryall for the full day and everything after it.', sizes: ['OS'] }),
    makeProduct({ id: 132, slug: 'bag-edit-2', name: 'The Mini', category: 'Bags', subcategory: 'Shoulder bags', price: 154, imageUrl: 'photo-1584917865442-de89df76afd3', description: 'A compact shoulder bag with a considered point of view.', sizes: ['OS'] }),
    makeProduct({ id: 133, slug: 'bag-edit-3', name: 'Soft Structure', category: 'Bags', subcategory: 'Handbags', price: 202, imageUrl: 'photo-1594223274512-ad4803739b7c', description: 'Soft structure, exact proportions, easy to carry.', sizes: ['OS'] }),
  ],
  fragrance: [
    makeProduct({ id: 141, slug: 'fragrance-edit-1', name: 'First Light', category: 'Fragrance', subcategory: 'Eau de parfum', price: 96, imageUrl: 'photo-1541643600914-78b084683601', description: 'A quiet fragrance with a clear, memorable trail.', sizes: ['50ml'] }),
    makeProduct({ id: 142, slug: 'fragrance-edit-2', name: 'After Rain', category: 'Fragrance', subcategory: 'Eau de parfum', price: 112, imageUrl: '/images/stock-perfume.webp', description: 'Fresh, close, and designed to stay with you.', sizes: ['50ml'] }),
    makeProduct({ id: 143, slug: 'fragrance-edit-3', name: 'Night Signal', category: 'Fragrance', subcategory: 'Eau de parfum', price: 128, imageUrl: 'photo-1594035910387-fea47794261f', description: 'A deeper, warmer scent for the later hours.', sizes: ['50ml'] }),
  ],
  accessories: [
    makeProduct({ id: 151, slug: 'accessory-edit-1', name: 'Fine Line', category: 'Accessories', subcategory: 'Jewellery', price: 78, imageUrl: 'photo-1515562141207-7a88fb7ce338', description: 'A small finishing detail with a clear point of view.', sizes: ['OS'] }),
    makeProduct({ id: 152, slug: 'accessory-edit-2', name: 'Soft Gold', category: 'Accessories', subcategory: 'Jewellery', price: 86, imageUrl: '/images/accessory-gold-chain.webp', description: 'A warm accent made for everyday wear.', sizes: ['OS'] }),
    makeProduct({ id: 153, slug: 'accessory-edit-3', name: 'The Detail', category: 'Accessories', subcategory: 'Jewellery', price: 92, imageUrl: 'photo-1611652022419-a9419f74343d', description: 'The final detail that makes the whole look feel intentional.', sizes: ['OS'] }),
  ],
}
