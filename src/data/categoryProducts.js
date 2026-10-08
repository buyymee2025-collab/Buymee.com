
const LV_TRAINER_SIZE_CHART = [
  ['4','5','38'],['4.5','5.5','38.5'],['5','6','39'],['5.5','6.5','40'],
  ['6','7','40.5'],['6.5','7.5','41'],['7','8','41.5'],['7.5','8.5','42.5'],
  ['8','9','43'],['8.5','9.5','43.5'],['9','10','44'],['9.5','10.5','45'],
  ['10','11','45.5'],['10.5','11.5','46'],['11','12','46.5'],['11.5','12.5','47.5'],
  ['12','13','48'],['12.5','13.5','48.5'],['13','14','49.5'],
]
const LV_TRAINER_SIZES = LV_TRAINER_SIZE_CHART.map(([uk]) => uk)

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
    {
      id: 121,
      slug: 'lv-trainer-121',
      name: 'Louis Vuitton LV Trainer Crystal Monogram Blue',
      category: 'Sneakers',
      subcategory: 'Sneakers',
      brand: 'Louis Vuitton',
      price: 0,
      priceOnRequest: true,
      compareAt: null,
      currency: 'USD',
      image: 'https://res.cloudinary.com/mdbhqnv7/image/upload/v1791470271/ChatGPT_Image_Oct_8_2026_03_27_19_AM.png',
      secondaryImage: 'https://res.cloudinary.com/mdbhqnv7/image/upload/v1791470267/ChatGPT_Image_Oct_8_2026_03_26_31_AM.png',
      gallery: [
      'https://res.cloudinary.com/mdbhqnv7/image/upload/v1791470271/ChatGPT_Image_Oct_8_2026_03_27_19_AM.png',
      'https://res.cloudinary.com/mdbhqnv7/image/upload/v1791470267/ChatGPT_Image_Oct_8_2026_03_26_31_AM.png',
      'https://res.cloudinary.com/mdbhqnv7/image/upload/v1791470253/ChatGPT_Image_Oct_8_2026_03_28_05_AM.png',
      'https://res.cloudinary.com/mdbhqnv7/image/upload/v1791470249/ChatGPT_Image_Oct_8_2026_03_25_56_AM.png'
      ],
      variants: [
        {
          color: 'Blue',
          image: 'https://res.cloudinary.com/mdbhqnv7/image/upload/v1791470271/ChatGPT_Image_Oct_8_2026_03_27_19_AM.png',
          media: [
          { type: 'image', src: 'https://res.cloudinary.com/mdbhqnv7/image/upload/v1791470271/ChatGPT_Image_Oct_8_2026_03_27_19_AM.png' },
          { type: 'image', src: 'https://res.cloudinary.com/mdbhqnv7/image/upload/v1791470267/ChatGPT_Image_Oct_8_2026_03_26_31_AM.png' },
          { type: 'image', src: 'https://res.cloudinary.com/mdbhqnv7/image/upload/v1791470253/ChatGPT_Image_Oct_8_2026_03_28_05_AM.png' },
          { type: 'image', src: 'https://res.cloudinary.com/mdbhqnv7/image/upload/v1791470249/ChatGPT_Image_Oct_8_2026_03_25_56_AM.png' }
          ]
        }
      ],
      description: 'Louis Vuitton LV Trainer Crystal Monogram Blue — professionally photographed colorway.',
      sizes: LV_TRAINER_SIZES,
      sizeAvailability: { uk: 'EXACT SIZE REQUIRED', us: 'EXACT SIZE REQUIRED', eu: 'EXACT SIZE REQUIRED' },
      sizeChart: LV_TRAINER_SIZE_CHART,
      colors: ['Blue'],
      tags: ['sneakers', 'lv trainer', 'luxury sneakers'],
      inStock: true,
      placeholder: false,
      featured: false,
      newArrival: true,
      sale: false
    },
    {
      id: 122,
      slug: 'lv-trainer-122',
      name: 'Louis Vuitton LV Trainer Denim Blue Red-Lace',
      category: 'Sneakers',
      subcategory: 'Sneakers',
      brand: 'Louis Vuitton',
      price: 0,
      priceOnRequest: true,
      compareAt: null,
      currency: 'USD',
      image: 'https://res.cloudinary.com/mdbhqnv7/image/upload/v1791470267/ChatGPT_Image_Oct_8_2026_03_22_50_AM.png',
      secondaryImage: 'https://res.cloudinary.com/mdbhqnv7/image/upload/v1791470264/ChatGPT_Image_Oct_8_2026_03_20_51_AM.png',
      gallery: [
      'https://res.cloudinary.com/mdbhqnv7/image/upload/v1791470267/ChatGPT_Image_Oct_8_2026_03_22_50_AM.png',
      'https://res.cloudinary.com/mdbhqnv7/image/upload/v1791470264/ChatGPT_Image_Oct_8_2026_03_20_51_AM.png',
      'https://res.cloudinary.com/mdbhqnv7/image/upload/v1791470241/ChatGPT_Image_Oct_8_2026_03_24_46_AM.png',
      'https://res.cloudinary.com/mdbhqnv7/image/upload/v1791470230/ChatGPT_Image_Oct_8_2026_03_23_26_AM.png',
      'https://res.cloudinary.com/mdbhqnv7/image/upload/v1791470227/ChatGPT_Image_Oct_8_2026_03_17_02_AM.png'
      ],
      variants: [
        {
          color: 'Blue / Red',
          image: 'https://res.cloudinary.com/mdbhqnv7/image/upload/v1791470267/ChatGPT_Image_Oct_8_2026_03_22_50_AM.png',
          media: [
          { type: 'image', src: 'https://res.cloudinary.com/mdbhqnv7/image/upload/v1791470267/ChatGPT_Image_Oct_8_2026_03_22_50_AM.png' },
          { type: 'image', src: 'https://res.cloudinary.com/mdbhqnv7/image/upload/v1791470264/ChatGPT_Image_Oct_8_2026_03_20_51_AM.png' },
          { type: 'image', src: 'https://res.cloudinary.com/mdbhqnv7/image/upload/v1791470241/ChatGPT_Image_Oct_8_2026_03_24_46_AM.png' },
          { type: 'image', src: 'https://res.cloudinary.com/mdbhqnv7/image/upload/v1791470230/ChatGPT_Image_Oct_8_2026_03_23_26_AM.png' },
          { type: 'image', src: 'https://res.cloudinary.com/mdbhqnv7/image/upload/v1791470227/ChatGPT_Image_Oct_8_2026_03_17_02_AM.png' }
          ]
        }
      ],
      description: 'Louis Vuitton LV Trainer Denim Blue Red-Lace — professionally photographed colorway.',
      sizes: LV_TRAINER_SIZES,
      sizeAvailability: { uk: 'EXACT SIZE REQUIRED', us: 'EXACT SIZE REQUIRED', eu: 'EXACT SIZE REQUIRED' },
      sizeChart: LV_TRAINER_SIZE_CHART,
      colors: ['Blue / Red'],
      tags: ['sneakers', 'lv trainer', 'luxury sneakers'],
      inStock: true,
      placeholder: false,
      featured: false,
      newArrival: true,
      sale: false
    },
    {
      id: 123,
      slug: 'lv-trainer-123',
      name: 'Louis Vuitton LV Trainer Monogram Black & White',
      category: 'Sneakers',
      subcategory: 'Sneakers',
      brand: 'Louis Vuitton',
      price: 0,
      priceOnRequest: true,
      compareAt: null,
      currency: 'USD',
      image: 'https://res.cloudinary.com/mdbhqnv7/image/upload/v1791470261/ChatGPT_Image_Oct_8_2026_03_53_56_AM.png',
      secondaryImage: 'https://res.cloudinary.com/mdbhqnv7/image/upload/v1791470235/ChatGPT_Image_Oct_8_2026_03_52_29_AM.png',
      gallery: [
      'https://res.cloudinary.com/mdbhqnv7/image/upload/v1791470261/ChatGPT_Image_Oct_8_2026_03_53_56_AM.png',
      'https://res.cloudinary.com/mdbhqnv7/image/upload/v1791470235/ChatGPT_Image_Oct_8_2026_03_52_29_AM.png',
      'https://res.cloudinary.com/mdbhqnv7/image/upload/v1791470235/ChatGPT_Image_Oct_8_2026_03_52_43_AM.png',
      'https://res.cloudinary.com/mdbhqnv7/image/upload/v1791470214/ChatGPT_Image_Oct_8_2026_03_54_42_AM.png'
      ],
      variants: [
        {
          color: 'Black / White',
          image: 'https://res.cloudinary.com/mdbhqnv7/image/upload/v1791470261/ChatGPT_Image_Oct_8_2026_03_53_56_AM.png',
          media: [
          { type: 'image', src: 'https://res.cloudinary.com/mdbhqnv7/image/upload/v1791470261/ChatGPT_Image_Oct_8_2026_03_53_56_AM.png' },
          { type: 'image', src: 'https://res.cloudinary.com/mdbhqnv7/image/upload/v1791470235/ChatGPT_Image_Oct_8_2026_03_52_29_AM.png' },
          { type: 'image', src: 'https://res.cloudinary.com/mdbhqnv7/image/upload/v1791470235/ChatGPT_Image_Oct_8_2026_03_52_43_AM.png' },
          { type: 'image', src: 'https://res.cloudinary.com/mdbhqnv7/image/upload/v1791470214/ChatGPT_Image_Oct_8_2026_03_54_42_AM.png' }
          ]
        }
      ],
      description: 'Louis Vuitton LV Trainer Monogram Black & White — professionally photographed colorway.',
      sizes: LV_TRAINER_SIZES,
      sizeAvailability: { uk: 'EXACT SIZE REQUIRED', us: 'EXACT SIZE REQUIRED', eu: 'EXACT SIZE REQUIRED' },
      sizeChart: LV_TRAINER_SIZE_CHART,
      colors: ['Black / White'],
      tags: ['sneakers', 'lv trainer', 'luxury sneakers'],
      inStock: true,
      placeholder: false,
      featured: false,
      newArrival: true,
      sale: false
    },
    {
      id: 124,
      slug: 'lv-trainer-124',
      name: 'Louis Vuitton LV Trainer Mint & Peach',
      category: 'Sneakers',
      subcategory: 'Sneakers',
      brand: 'Louis Vuitton',
      price: 0,
      priceOnRequest: true,
      compareAt: null,
      currency: 'USD',
      image: 'https://res.cloudinary.com/mdbhqnv7/image/upload/v1791470260/ChatGPT_Image_Oct_8_2026_03_46_36_AM.png',
      secondaryImage: 'https://res.cloudinary.com/mdbhqnv7/image/upload/v1791470255/ChatGPT_Image_Oct_8_2026_03_33_53_AM.png',
      gallery: [
      'https://res.cloudinary.com/mdbhqnv7/image/upload/v1791470260/ChatGPT_Image_Oct_8_2026_03_46_36_AM.png',
      'https://res.cloudinary.com/mdbhqnv7/image/upload/v1791470255/ChatGPT_Image_Oct_8_2026_03_33_53_AM.png',
      'https://res.cloudinary.com/mdbhqnv7/image/upload/v1791470253/ChatGPT_Image_Oct_8_2026_03_32_41_AM.png',
      'https://res.cloudinary.com/mdbhqnv7/image/upload/v1791470243/ChatGPT_Image_Oct_8_2026_03_45_10_AM.png',
      'https://res.cloudinary.com/mdbhqnv7/image/upload/v1791470240/ChatGPT_Image_Oct_8_2026_03_48_15_AM.png'
      ],
      variants: [
        {
          color: 'Mint / Peach',
          image: 'https://res.cloudinary.com/mdbhqnv7/image/upload/v1791470260/ChatGPT_Image_Oct_8_2026_03_46_36_AM.png',
          media: [
          { type: 'image', src: 'https://res.cloudinary.com/mdbhqnv7/image/upload/v1791470260/ChatGPT_Image_Oct_8_2026_03_46_36_AM.png' },
          { type: 'image', src: 'https://res.cloudinary.com/mdbhqnv7/image/upload/v1791470255/ChatGPT_Image_Oct_8_2026_03_33_53_AM.png' },
          { type: 'image', src: 'https://res.cloudinary.com/mdbhqnv7/image/upload/v1791470253/ChatGPT_Image_Oct_8_2026_03_32_41_AM.png' },
          { type: 'image', src: 'https://res.cloudinary.com/mdbhqnv7/image/upload/v1791470243/ChatGPT_Image_Oct_8_2026_03_45_10_AM.png' },
          { type: 'image', src: 'https://res.cloudinary.com/mdbhqnv7/image/upload/v1791470240/ChatGPT_Image_Oct_8_2026_03_48_15_AM.png' }
          ]
        }
      ],
      description: 'Louis Vuitton LV Trainer Mint & Peach — professionally photographed colorway.',
      sizes: LV_TRAINER_SIZES,
      sizeAvailability: { uk: 'EXACT SIZE REQUIRED', us: 'EXACT SIZE REQUIRED', eu: 'EXACT SIZE REQUIRED' },
      sizeChart: LV_TRAINER_SIZE_CHART,
      colors: ['Mint / Peach'],
      tags: ['sneakers', 'lv trainer', 'luxury sneakers'],
      inStock: true,
      placeholder: false,
      featured: false,
      newArrival: true,
      sale: false
    },
    {
      id: 125,
      slug: 'lv-trainer-125',
      name: 'Louis Vuitton LV Trainer White & Green #54',
      category: 'Sneakers',
      subcategory: 'Sneakers',
      brand: 'Louis Vuitton',
      price: 0,
      priceOnRequest: true,
      compareAt: null,
      currency: 'USD',
      image: 'https://res.cloudinary.com/mdbhqnv7/image/upload/v1791470243/ChatGPT_Image_Oct_8_2026_05_12_38_AM.png',
      secondaryImage: 'https://res.cloudinary.com/mdbhqnv7/image/upload/v1791470227/ChatGPT_Image_Oct_8_2026_05_02_14_AM.png',
      gallery: [
      'https://res.cloudinary.com/mdbhqnv7/image/upload/v1791470243/ChatGPT_Image_Oct_8_2026_05_12_38_AM.png',
      'https://res.cloudinary.com/mdbhqnv7/image/upload/v1791470227/ChatGPT_Image_Oct_8_2026_05_02_14_AM.png',
      'https://res.cloudinary.com/mdbhqnv7/image/upload/v1791470224/ChatGPT_Image_Oct_8_2026_05_00_58_AM.png',
      'https://res.cloudinary.com/mdbhqnv7/image/upload/v1791470221/ChatGPT_Image_Oct_8_2026_04_15_14_AM.png',
      'https://res.cloudinary.com/mdbhqnv7/image/upload/v1791470220/ChatGPT_Image_Oct_8_2026_04_13_22_AM.png',
      'https://res.cloudinary.com/mdbhqnv7/image/upload/v1791470213/ChatGPT_Image_Oct_8_2026_04_13_35_AM.png',
      'https://res.cloudinary.com/mdbhqnv7/image/upload/v1791470211/ChatGPT_Image_Oct_8_2026_05_14_55_AM.png',
      'https://res.cloudinary.com/mdbhqnv7/image/upload/v1791470211/ChatGPT_Image_Oct_8_2026_04_18_11_AM.png',
      'https://res.cloudinary.com/mdbhqnv7/image/upload/v1791470255/ChatGPT_Image_Oct_8_2026_04_14_21_AM.png',
      'https://res.cloudinary.com/mdbhqnv7/image/upload/v1791470247/ChatGPT_Image_Oct_8_2026_05_13_35_AM.png'
      ],
      variants: [
        {
          color: 'White / Green',
          image: 'https://res.cloudinary.com/mdbhqnv7/image/upload/v1791470243/ChatGPT_Image_Oct_8_2026_05_12_38_AM.png',
          media: [
          { type: 'image', src: 'https://res.cloudinary.com/mdbhqnv7/image/upload/v1791470243/ChatGPT_Image_Oct_8_2026_05_12_38_AM.png' },
          { type: 'image', src: 'https://res.cloudinary.com/mdbhqnv7/image/upload/v1791470227/ChatGPT_Image_Oct_8_2026_05_02_14_AM.png' },
          { type: 'image', src: 'https://res.cloudinary.com/mdbhqnv7/image/upload/v1791470224/ChatGPT_Image_Oct_8_2026_05_00_58_AM.png' },
          { type: 'image', src: 'https://res.cloudinary.com/mdbhqnv7/image/upload/v1791470221/ChatGPT_Image_Oct_8_2026_04_15_14_AM.png' },
          { type: 'image', src: 'https://res.cloudinary.com/mdbhqnv7/image/upload/v1791470220/ChatGPT_Image_Oct_8_2026_04_13_22_AM.png' },
          { type: 'image', src: 'https://res.cloudinary.com/mdbhqnv7/image/upload/v1791470213/ChatGPT_Image_Oct_8_2026_04_13_35_AM.png' },
          { type: 'image', src: 'https://res.cloudinary.com/mdbhqnv7/image/upload/v1791470211/ChatGPT_Image_Oct_8_2026_05_14_55_AM.png' },
          { type: 'image', src: 'https://res.cloudinary.com/mdbhqnv7/image/upload/v1791470211/ChatGPT_Image_Oct_8_2026_04_18_11_AM.png' },
          { type: 'image', src: 'https://res.cloudinary.com/mdbhqnv7/image/upload/v1791470255/ChatGPT_Image_Oct_8_2026_04_14_21_AM.png' },
          { type: 'image', src: 'https://res.cloudinary.com/mdbhqnv7/image/upload/v1791470247/ChatGPT_Image_Oct_8_2026_05_13_35_AM.png' }
          ]
        }
      ],
      description: 'Louis Vuitton LV Trainer White & Green #54 — professionally photographed colorway.',
      sizes: LV_TRAINER_SIZES,
      sizeAvailability: { uk: 'EXACT SIZE REQUIRED', us: 'EXACT SIZE REQUIRED', eu: 'EXACT SIZE REQUIRED' },
      sizeChart: LV_TRAINER_SIZE_CHART,
      colors: ['White / Green'],
      tags: ['sneakers', 'lv trainer', 'luxury sneakers'],
      inStock: true,
      placeholder: false,
      featured: false,
      newArrival: true,
      sale: false
    },
    {
      id: 126,
      slug: 'lv-trainer-126',
      name: 'Louis Vuitton LV Trainer Aqua & Purple',
      category: 'Sneakers',
      subcategory: 'Sneakers',
      brand: 'Louis Vuitton',
      price: 0,
      priceOnRequest: true,
      compareAt: null,
      currency: 'USD',
      image: 'https://res.cloudinary.com/mdbhqnv7/image/upload/v1791470236/ChatGPT_Image_Oct_8_2026_03_57_15_AM.png',
      secondaryImage: 'https://res.cloudinary.com/mdbhqnv7/image/upload/v1791470221/ChatGPT_Image_Oct_8_2026_03_59_44_AM.png',
      gallery: [
      'https://res.cloudinary.com/mdbhqnv7/image/upload/v1791470236/ChatGPT_Image_Oct_8_2026_03_57_15_AM.png',
      'https://res.cloudinary.com/mdbhqnv7/image/upload/v1791470221/ChatGPT_Image_Oct_8_2026_03_59_44_AM.png',
      'https://res.cloudinary.com/mdbhqnv7/image/upload/v1791470208/ChatGPT_Image_Oct_8_2026_04_01_00_AM.png',
      'https://res.cloudinary.com/mdbhqnv7/image/upload/v1791470222/ChatGPT_Image_Oct_8_2026_03_58_02_AM.png'
      ],
      variants: [
        {
          color: 'Blue / Purple',
          image: 'https://res.cloudinary.com/mdbhqnv7/image/upload/v1791470236/ChatGPT_Image_Oct_8_2026_03_57_15_AM.png',
          media: [
          { type: 'image', src: 'https://res.cloudinary.com/mdbhqnv7/image/upload/v1791470236/ChatGPT_Image_Oct_8_2026_03_57_15_AM.png' },
          { type: 'image', src: 'https://res.cloudinary.com/mdbhqnv7/image/upload/v1791470221/ChatGPT_Image_Oct_8_2026_03_59_44_AM.png' },
          { type: 'image', src: 'https://res.cloudinary.com/mdbhqnv7/image/upload/v1791470208/ChatGPT_Image_Oct_8_2026_04_01_00_AM.png' },
          { type: 'image', src: 'https://res.cloudinary.com/mdbhqnv7/image/upload/v1791470222/ChatGPT_Image_Oct_8_2026_03_58_02_AM.png' }
          ]
        }
      ],
      description: 'Louis Vuitton LV Trainer Aqua & Purple — professionally photographed colorway.',
      sizes: LV_TRAINER_SIZES,
      sizeAvailability: { uk: 'EXACT SIZE REQUIRED', us: 'EXACT SIZE REQUIRED', eu: 'EXACT SIZE REQUIRED' },
      sizeChart: LV_TRAINER_SIZE_CHART,
      colors: ['Blue / Purple'],
      tags: ['sneakers', 'lv trainer', 'luxury sneakers'],
      inStock: true,
      placeholder: false,
      featured: false,
      newArrival: true,
      sale: false
    },
    {
      id: 127,
      slug: 'lv-trainer-127',
      name: 'Louis Vuitton LV Trainer Orange & White',
      category: 'Sneakers',
      subcategory: 'Sneakers',
      brand: 'Louis Vuitton',
      price: 0,
      priceOnRequest: true,
      compareAt: null,
      currency: 'USD',
      image: 'https://res.cloudinary.com/mdbhqnv7/image/upload/v1791470227/ChatGPT_Image_Oct_8_2026_04_02_44_AM.png',
      secondaryImage: 'https://res.cloudinary.com/mdbhqnv7/image/upload/v1791470223/ChatGPT_Image_Oct_8_2026_05_18_30_AM.png',
      gallery: [
      'https://res.cloudinary.com/mdbhqnv7/image/upload/v1791470227/ChatGPT_Image_Oct_8_2026_04_02_44_AM.png',
      'https://res.cloudinary.com/mdbhqnv7/image/upload/v1791470223/ChatGPT_Image_Oct_8_2026_05_18_30_AM.png',
      'https://res.cloudinary.com/mdbhqnv7/image/upload/v1791470222/ChatGPT_Image_Oct_8_2026_04_03_56_AM.png',
      'https://res.cloudinary.com/mdbhqnv7/image/upload/v1791470213/ChatGPT_Image_Oct_8_2026_04_08_52_AM.png',
      'https://res.cloudinary.com/mdbhqnv7/image/upload/v1791470212/ChatGPT_Image_Oct_8_2026_04_01_56_AM.png',
      'https://res.cloudinary.com/mdbhqnv7/image/upload/v1791470209/ChatGPT_Image_Oct_8_2026_04_10_21_AM.png'
      ],
      variants: [
        {
          color: 'Orange / White',
          image: 'https://res.cloudinary.com/mdbhqnv7/image/upload/v1791470227/ChatGPT_Image_Oct_8_2026_04_02_44_AM.png',
          media: [
          { type: 'image', src: 'https://res.cloudinary.com/mdbhqnv7/image/upload/v1791470227/ChatGPT_Image_Oct_8_2026_04_02_44_AM.png' },
          { type: 'image', src: 'https://res.cloudinary.com/mdbhqnv7/image/upload/v1791470223/ChatGPT_Image_Oct_8_2026_05_18_30_AM.png' },
          { type: 'image', src: 'https://res.cloudinary.com/mdbhqnv7/image/upload/v1791470222/ChatGPT_Image_Oct_8_2026_04_03_56_AM.png' },
          { type: 'image', src: 'https://res.cloudinary.com/mdbhqnv7/image/upload/v1791470213/ChatGPT_Image_Oct_8_2026_04_08_52_AM.png' },
          { type: 'image', src: 'https://res.cloudinary.com/mdbhqnv7/image/upload/v1791470212/ChatGPT_Image_Oct_8_2026_04_01_56_AM.png' },
          { type: 'image', src: 'https://res.cloudinary.com/mdbhqnv7/image/upload/v1791470209/ChatGPT_Image_Oct_8_2026_04_10_21_AM.png' }
          ]
        }
      ],
      description: 'Louis Vuitton LV Trainer Orange & White — professionally photographed colorway.',
      sizes: LV_TRAINER_SIZES,
      sizeAvailability: { uk: 'EXACT SIZE REQUIRED', us: 'EXACT SIZE REQUIRED', eu: 'EXACT SIZE REQUIRED' },
      sizeChart: LV_TRAINER_SIZE_CHART,
      colors: ['Orange / White'],
      tags: ['sneakers', 'lv trainer', 'luxury sneakers'],
      inStock: true,
      placeholder: false,
      featured: false,
      newArrival: true,
      sale: false
    },
    {
      id: 128,
      slug: 'lv-trainer-128',
      name: 'Louis Vuitton LV Trainer Blue & Ice',
      category: 'Sneakers',
      subcategory: 'Sneakers',
      brand: 'Louis Vuitton',
      price: 0,
      priceOnRequest: true,
      compareAt: null,
      currency: 'USD',
      image: 'https://res.cloudinary.com/mdbhqnv7/image/upload/v1791470245/ChatGPT_Image_Oct_8_2026_03_11_59_AM.png',
      secondaryImage: 'https://res.cloudinary.com/mdbhqnv7/image/upload/v1791470230/ChatGPT_Image_Oct_8_2026_03_08_28_AM.png',
      gallery: [
      'https://res.cloudinary.com/mdbhqnv7/image/upload/v1791470245/ChatGPT_Image_Oct_8_2026_03_11_59_AM.png',
      'https://res.cloudinary.com/mdbhqnv7/image/upload/v1791470230/ChatGPT_Image_Oct_8_2026_03_08_28_AM.png',
      'https://res.cloudinary.com/mdbhqnv7/image/upload/v1791470255/ChatGPT_Image_Oct_8_2026_03_05_57_AM.png',
      'https://res.cloudinary.com/mdbhqnv7/image/upload/v1791470209/ChatGPT_Image_Oct_8_2026_03_31_25_AM.png'
      ],
      variants: [
        {
          color: 'Blue / Ice',
          image: 'https://res.cloudinary.com/mdbhqnv7/image/upload/v1791470245/ChatGPT_Image_Oct_8_2026_03_11_59_AM.png',
          media: [
          { type: 'image', src: 'https://res.cloudinary.com/mdbhqnv7/image/upload/v1791470245/ChatGPT_Image_Oct_8_2026_03_11_59_AM.png' },
          { type: 'image', src: 'https://res.cloudinary.com/mdbhqnv7/image/upload/v1791470230/ChatGPT_Image_Oct_8_2026_03_08_28_AM.png' },
          { type: 'image', src: 'https://res.cloudinary.com/mdbhqnv7/image/upload/v1791470255/ChatGPT_Image_Oct_8_2026_03_05_57_AM.png' },
          { type: 'image', src: 'https://res.cloudinary.com/mdbhqnv7/image/upload/v1791470209/ChatGPT_Image_Oct_8_2026_03_31_25_AM.png' }
          ]
        }
      ],
      description: 'Louis Vuitton LV Trainer Blue & Ice — professionally photographed colorway.',
      sizes: LV_TRAINER_SIZES,
      sizeAvailability: { uk: 'EXACT SIZE REQUIRED', us: 'EXACT SIZE REQUIRED', eu: 'EXACT SIZE REQUIRED' },
      sizeChart: LV_TRAINER_SIZE_CHART,
      colors: ['Blue / Ice'],
      tags: ['sneakers', 'lv trainer', 'luxury sneakers'],
      inStock: true,
      placeholder: false,
      featured: false,
      newArrival: true,
      sale: false
    },
    {
      id: 129,
      slug: 'lv-trainer-129',
      name: 'Louis Vuitton LV Trainer Grey & Orange',
      category: 'Sneakers',
      subcategory: 'Sneakers',
      brand: 'Louis Vuitton',
      price: 0,
      priceOnRequest: true,
      compareAt: null,
      currency: 'USD',
      image: 'https://res.cloudinary.com/mdbhqnv7/image/upload/v1791470238/ChatGPT_Image_Oct_8_2026_05_20_42_AM.png',
      secondaryImage: 'https://res.cloudinary.com/mdbhqnv7/image/upload/v1791470219/ChatGPT_Image_Oct_8_2026_05_17_29_AM.png',
      gallery: [
      'https://res.cloudinary.com/mdbhqnv7/image/upload/v1791470238/ChatGPT_Image_Oct_8_2026_05_20_42_AM.png',
      'https://res.cloudinary.com/mdbhqnv7/image/upload/v1791470219/ChatGPT_Image_Oct_8_2026_05_17_29_AM.png',
      'https://res.cloudinary.com/mdbhqnv7/image/upload/v1791470210/ChatGPT_Image_Oct_8_2026_05_22_52_AM.png'
      ],
      variants: [
        {
          color: 'Grey / Orange',
          image: 'https://res.cloudinary.com/mdbhqnv7/image/upload/v1791470238/ChatGPT_Image_Oct_8_2026_05_20_42_AM.png',
          media: [
          { type: 'image', src: 'https://res.cloudinary.com/mdbhqnv7/image/upload/v1791470238/ChatGPT_Image_Oct_8_2026_05_20_42_AM.png' },
          { type: 'image', src: 'https://res.cloudinary.com/mdbhqnv7/image/upload/v1791470219/ChatGPT_Image_Oct_8_2026_05_17_29_AM.png' },
          { type: 'image', src: 'https://res.cloudinary.com/mdbhqnv7/image/upload/v1791470210/ChatGPT_Image_Oct_8_2026_05_22_52_AM.png' }
          ]
        }
      ],
      description: 'Louis Vuitton LV Trainer Grey & Orange — professionally photographed colorway.',
      sizes: LV_TRAINER_SIZES,
      sizeAvailability: { uk: 'EXACT SIZE REQUIRED', us: 'EXACT SIZE REQUIRED', eu: 'EXACT SIZE REQUIRED' },
      sizeChart: LV_TRAINER_SIZE_CHART,
      colors: ['Grey / Orange'],
      tags: ['sneakers', 'lv trainer', 'luxury sneakers'],
      inStock: true,
      placeholder: false,
      featured: false,
      newArrival: true,
      sale: false
    }
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
