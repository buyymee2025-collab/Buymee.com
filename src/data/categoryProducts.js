import { FRAGRANCE_PRODUCTS } from './fragranceProducts.js'

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
      "id": 121,
      "slug": "lv-trainer-121",
      "name": "Louis Vuitton LV Trainer Crystal Monogram Blue",
      "category": "Sneakers",
      "subcategory": "Sneakers",
      "brand": "Louis Vuitton",
      "price": 0,
      "priceOnRequest": true,
      "compareAt": null,
      "currency": "USD",
      "image": "/images/sneakers/ChatGPT_Image_Oct_8_2026_03_27_19_AM.png",
      "secondaryImage": "/images/sneakers/ChatGPT_Image_Oct_8_2026_03_26_31_AM.png",
      "gallery": [
        "/images/sneakers/ChatGPT_Image_Oct_8_2026_03_27_19_AM.png",
        "/images/sneakers/ChatGPT_Image_Oct_8_2026_03_26_31_AM.png",
        "/images/sneakers/ChatGPT_Image_Oct_8_2026_03_28_05_AM.png",
        "/images/sneakers/ChatGPT_Image_Oct_8_2026_03_25_56_AM.png",
        "/images/sneakers/ChatGPT_Image_Oct_9_2026_06_00_51_AM_qn4vfj.png",
        "/images/sneakers/ChatGPT_Image_Oct_9_2026_06_01_59_AM_yijk6g.png",
        "/images/sneakers/ChatGPT_Image_Oct_9_2026_06_00_25_AM_uhxf2b.png"
      ],
      "variants": [
        {
          "color": "Blue",
          "image": "/images/sneakers/ChatGPT_Image_Oct_8_2026_03_27_19_AM.png",
          "media": [
            {
              "type": "image",
              "src": "/images/sneakers/ChatGPT_Image_Oct_8_2026_03_27_19_AM.png"
            },
            {
              "type": "image",
              "src": "/images/sneakers/ChatGPT_Image_Oct_8_2026_03_26_31_AM.png"
            },
            {
              "type": "image",
              "src": "/images/sneakers/ChatGPT_Image_Oct_8_2026_03_28_05_AM.png"
            },
            {
              "type": "image",
              "src": "/images/sneakers/ChatGPT_Image_Oct_8_2026_03_25_56_AM.png"
            },
            {
              "type": "image",
              "src": "/images/sneakers/ChatGPT_Image_Oct_9_2026_06_00_51_AM_qn4vfj.png"
            },
            {
              "type": "image",
              "src": "/images/sneakers/ChatGPT_Image_Oct_9_2026_06_01_59_AM_yijk6g.png"
            },
            {
              "type": "image",
              "src": "/images/sneakers/ChatGPT_Image_Oct_9_2026_06_00_25_AM_uhxf2b.png"
            }
          ]
        }
      ],
      "description": "Louis Vuitton LV Trainer Crystal Monogram Blue — professionally photographed colorway.",
      "sizes": [
        "4",
        "4.5",
        "5",
        "5.5",
        "6",
        "6.5",
        "7",
        "7.5",
        "8",
        "8.5",
        "9",
        "9.5",
        "10",
        "10.5",
        "11",
        "11.5",
        "12",
        "12.5",
        "13"
      ],
      "sizeAvailability": {
        "uk": "7",
        "us": "8",
        "eu": "41.5"
      },
      "sizeChart": [
        [
          "4",
          "5",
          "38"
        ],
        [
          "4.5",
          "5.5",
          "38.5"
        ],
        [
          "5",
          "6",
          "39"
        ],
        [
          "5.5",
          "6.5",
          "40"
        ],
        [
          "6",
          "7",
          "40.5"
        ],
        [
          "6.5",
          "7.5",
          "41"
        ],
        [
          "7",
          "8",
          "41.5"
        ],
        [
          "7.5",
          "8.5",
          "42.5"
        ],
        [
          "8",
          "9",
          "43"
        ],
        [
          "8.5",
          "9.5",
          "43.5"
        ],
        [
          "9",
          "10",
          "44"
        ],
        [
          "9.5",
          "10.5",
          "45"
        ],
        [
          "10",
          "11",
          "45.5"
        ],
        [
          "10.5",
          "11.5",
          "46"
        ],
        [
          "11",
          "12",
          "46.5"
        ],
        [
          "11.5",
          "12.5",
          "47.5"
        ],
        [
          "12",
          "13",
          "48"
        ],
        [
          "12.5",
          "13.5",
          "48.5"
        ],
        [
          "13",
          "14",
          "49.5"
        ]
      ],
      "colors": [
        "Blue"
      ],
      "tags": [
        "sneakers",
        "lv trainer",
        "luxury sneakers"
      ],
      "inStock": true,
      "placeholder": false,
      "featured": false,
      "newArrival": true,
      "sale": false
    },
    {
      "id": 122,
      "slug": "lv-trainer-122",
      "name": "Louis Vuitton LV Trainer Denim Blue Red-Lace",
      "category": "Sneakers",
      "subcategory": "Sneakers",
      "brand": "Louis Vuitton",
      "price": 0,
      "priceOnRequest": true,
      "compareAt": null,
      "currency": "USD",
      "image": "/images/sneakers/ChatGPT_Image_Oct_8_2026_03_22_50_AM.png",
      "secondaryImage": "/images/sneakers/ChatGPT_Image_Oct_8_2026_03_20_51_AM.png",
      "gallery": [
        "/images/sneakers/ChatGPT_Image_Oct_8_2026_03_22_50_AM.png",
        "/images/sneakers/ChatGPT_Image_Oct_8_2026_03_20_51_AM.png",
        "/images/sneakers/ChatGPT_Image_Oct_8_2026_03_24_46_AM.png",
        "/images/sneakers/ChatGPT_Image_Oct_8_2026_03_23_26_AM.png",
        "/images/sneakers/ChatGPT_Image_Oct_8_2026_03_17_02_AM.png"
      ],
      "variants": [
        {
          "color": "Blue / Red",
          "image": "/images/sneakers/ChatGPT_Image_Oct_8_2026_03_22_50_AM.png",
          "media": [
            {
              "type": "image",
              "src": "/images/sneakers/ChatGPT_Image_Oct_8_2026_03_22_50_AM.png"
            },
            {
              "type": "image",
              "src": "/images/sneakers/ChatGPT_Image_Oct_8_2026_03_20_51_AM.png"
            },
            {
              "type": "image",
              "src": "/images/sneakers/ChatGPT_Image_Oct_8_2026_03_24_46_AM.png"
            },
            {
              "type": "image",
              "src": "/images/sneakers/ChatGPT_Image_Oct_8_2026_03_23_26_AM.png"
            },
            {
              "type": "image",
              "src": "/images/sneakers/ChatGPT_Image_Oct_8_2026_03_17_02_AM.png"
            }
          ]
        }
      ],
      "description": "Louis Vuitton LV Trainer Denim Blue Red-Lace — professionally photographed colorway.",
      "sizes": [
        "4",
        "4.5",
        "5",
        "5.5",
        "6",
        "6.5",
        "7",
        "7.5",
        "8",
        "8.5",
        "9",
        "9.5",
        "10",
        "10.5",
        "11",
        "11.5",
        "12",
        "12.5",
        "13"
      ],
      "sizeAvailability": {
        "uk": "8",
        "us": "9",
        "eu": "43"
      },
      "sizeChart": [
        [
          "4",
          "5",
          "38"
        ],
        [
          "4.5",
          "5.5",
          "38.5"
        ],
        [
          "5",
          "6",
          "39"
        ],
        [
          "5.5",
          "6.5",
          "40"
        ],
        [
          "6",
          "7",
          "40.5"
        ],
        [
          "6.5",
          "7.5",
          "41"
        ],
        [
          "7",
          "8",
          "41.5"
        ],
        [
          "7.5",
          "8.5",
          "42.5"
        ],
        [
          "8",
          "9",
          "43"
        ],
        [
          "8.5",
          "9.5",
          "43.5"
        ],
        [
          "9",
          "10",
          "44"
        ],
        [
          "9.5",
          "10.5",
          "45"
        ],
        [
          "10",
          "11",
          "45.5"
        ],
        [
          "10.5",
          "11.5",
          "46"
        ],
        [
          "11",
          "12",
          "46.5"
        ],
        [
          "11.5",
          "12.5",
          "47.5"
        ],
        [
          "12",
          "13",
          "48"
        ],
        [
          "12.5",
          "13.5",
          "48.5"
        ],
        [
          "13",
          "14",
          "49.5"
        ]
      ],
      "colors": [
        "Blue / Red"
      ],
      "tags": [
        "sneakers",
        "lv trainer",
        "luxury sneakers"
      ],
      "inStock": true,
      "placeholder": false,
      "featured": false,
      "newArrival": true,
      "sale": false
    },
    {
      "id": 123,
      "slug": "lv-trainer-123",
      "name": "Louis Vuitton LV Trainer Monogram Black & White",
      "category": "Sneakers",
      "subcategory": "Sneakers",
      "brand": "Louis Vuitton",
      "price": 0,
      "priceOnRequest": true,
      "compareAt": null,
      "currency": "USD",
      "image": "/images/sneakers/ChatGPT_Image_Oct_8_2026_03_53_56_AM.png",
      "secondaryImage": "/images/sneakers/ChatGPT_Image_Oct_8_2026_03_52_29_AM.png",
      "gallery": [
        "/images/sneakers/ChatGPT_Image_Oct_8_2026_03_53_56_AM.png",
        "/images/sneakers/ChatGPT_Image_Oct_8_2026_03_52_29_AM.png",
        "/images/sneakers/ChatGPT_Image_Oct_8_2026_03_52_43_AM.png",
        "/images/sneakers/ChatGPT_Image_Oct_8_2026_03_54_42_AM.png"
      ],
      "variants": [
        {
          "color": "Black / White",
          "image": "/images/sneakers/ChatGPT_Image_Oct_8_2026_03_53_56_AM.png",
          "media": [
            {
              "type": "image",
              "src": "/images/sneakers/ChatGPT_Image_Oct_8_2026_03_53_56_AM.png"
            },
            {
              "type": "image",
              "src": "/images/sneakers/ChatGPT_Image_Oct_8_2026_03_52_29_AM.png"
            },
            {
              "type": "image",
              "src": "/images/sneakers/ChatGPT_Image_Oct_8_2026_03_52_43_AM.png"
            },
            {
              "type": "image",
              "src": "/images/sneakers/ChatGPT_Image_Oct_8_2026_03_54_42_AM.png"
            }
          ]
        }
      ],
      "description": "Louis Vuitton LV Trainer Monogram Black & White — professionally photographed colorway.",
      "sizes": [
        "4",
        "4.5",
        "5",
        "5.5",
        "6",
        "6.5",
        "7",
        "7.5",
        "8",
        "8.5",
        "9",
        "9.5",
        "10",
        "10.5",
        "11",
        "11.5",
        "12",
        "12.5",
        "13"
      ],
      "sizeAvailability": {
        "uk": "6.5",
        "us": "7.5",
        "eu": "41"
      },
      "sizeChart": [
        [
          "4",
          "5",
          "38"
        ],
        [
          "4.5",
          "5.5",
          "38.5"
        ],
        [
          "5",
          "6",
          "39"
        ],
        [
          "5.5",
          "6.5",
          "40"
        ],
        [
          "6",
          "7",
          "40.5"
        ],
        [
          "6.5",
          "7.5",
          "41"
        ],
        [
          "7",
          "8",
          "41.5"
        ],
        [
          "7.5",
          "8.5",
          "42.5"
        ],
        [
          "8",
          "9",
          "43"
        ],
        [
          "8.5",
          "9.5",
          "43.5"
        ],
        [
          "9",
          "10",
          "44"
        ],
        [
          "9.5",
          "10.5",
          "45"
        ],
        [
          "10",
          "11",
          "45.5"
        ],
        [
          "10.5",
          "11.5",
          "46"
        ],
        [
          "11",
          "12",
          "46.5"
        ],
        [
          "11.5",
          "12.5",
          "47.5"
        ],
        [
          "12",
          "13",
          "48"
        ],
        [
          "12.5",
          "13.5",
          "48.5"
        ],
        [
          "13",
          "14",
          "49.5"
        ]
      ],
      "colors": [
        "Black / White"
      ],
      "tags": [
        "sneakers",
        "lv trainer",
        "luxury sneakers"
      ],
      "inStock": true,
      "placeholder": false,
      "featured": false,
      "newArrival": true,
      "sale": false
    },
    {
      "id": 124,
      "slug": "lv-trainer-124",
      "name": "Louis Vuitton LV Trainer Mint & Peach",
      "category": "Sneakers",
      "subcategory": "Sneakers",
      "brand": "Louis Vuitton",
      "price": 0,
      "priceOnRequest": true,
      "compareAt": null,
      "currency": "USD",
      "image": "/images/sneakers/ChatGPT_Image_Oct_8_2026_03_46_36_AM.png",
      "secondaryImage": "/images/sneakers/ChatGPT_Image_Oct_8_2026_03_33_53_AM.png",
      "gallery": [
        "/images/sneakers/ChatGPT_Image_Oct_8_2026_03_46_36_AM.png",
        "/images/sneakers/ChatGPT_Image_Oct_8_2026_03_33_53_AM.png",
        "/images/sneakers/ChatGPT_Image_Oct_8_2026_03_32_41_AM.png",
        "/images/sneakers/ChatGPT_Image_Oct_8_2026_03_45_10_AM.png",
        "/images/sneakers/ChatGPT_Image_Oct_8_2026_03_48_15_AM.png"
      ],
      "variants": [
        {
          "color": "Mint / Peach",
          "image": "/images/sneakers/ChatGPT_Image_Oct_8_2026_03_46_36_AM.png",
          "media": [
            {
              "type": "image",
              "src": "/images/sneakers/ChatGPT_Image_Oct_8_2026_03_46_36_AM.png"
            },
            {
              "type": "image",
              "src": "/images/sneakers/ChatGPT_Image_Oct_8_2026_03_33_53_AM.png"
            },
            {
              "type": "image",
              "src": "/images/sneakers/ChatGPT_Image_Oct_8_2026_03_32_41_AM.png"
            },
            {
              "type": "image",
              "src": "/images/sneakers/ChatGPT_Image_Oct_8_2026_03_45_10_AM.png"
            },
            {
              "type": "image",
              "src": "/images/sneakers/ChatGPT_Image_Oct_8_2026_03_48_15_AM.png"
            }
          ]
        }
      ],
      "description": "Louis Vuitton LV Trainer Mint & Peach — professionally photographed colorway.",
      "sizes": [
        "4",
        "4.5",
        "5",
        "5.5",
        "6",
        "6.5",
        "7",
        "7.5",
        "8",
        "8.5",
        "9",
        "9.5",
        "10",
        "10.5",
        "11",
        "11.5",
        "12",
        "12.5",
        "13"
      ],
      "sizeAvailability": {
        "uk": "9",
        "us": "10",
        "eu": "44"
      },
      "sizeChart": [
        [
          "4",
          "5",
          "38"
        ],
        [
          "4.5",
          "5.5",
          "38.5"
        ],
        [
          "5",
          "6",
          "39"
        ],
        [
          "5.5",
          "6.5",
          "40"
        ],
        [
          "6",
          "7",
          "40.5"
        ],
        [
          "6.5",
          "7.5",
          "41"
        ],
        [
          "7",
          "8",
          "41.5"
        ],
        [
          "7.5",
          "8.5",
          "42.5"
        ],
        [
          "8",
          "9",
          "43"
        ],
        [
          "8.5",
          "9.5",
          "43.5"
        ],
        [
          "9",
          "10",
          "44"
        ],
        [
          "9.5",
          "10.5",
          "45"
        ],
        [
          "10",
          "11",
          "45.5"
        ],
        [
          "10.5",
          "11.5",
          "46"
        ],
        [
          "11",
          "12",
          "46.5"
        ],
        [
          "11.5",
          "12.5",
          "47.5"
        ],
        [
          "12",
          "13",
          "48"
        ],
        [
          "12.5",
          "13.5",
          "48.5"
        ],
        [
          "13",
          "14",
          "49.5"
        ]
      ],
      "colors": [
        "Mint / Peach"
      ],
      "tags": [
        "sneakers",
        "lv trainer",
        "luxury sneakers"
      ],
      "inStock": true,
      "placeholder": false,
      "featured": false,
      "newArrival": true,
      "sale": false
    },
    {
      "id": 125,
      "slug": "lv-trainer-125",
      "name": "Louis Vuitton LV Trainer White & Green #54",
      "category": "Sneakers",
      "subcategory": "Sneakers",
      "brand": "Louis Vuitton",
      "price": 0,
      "priceOnRequest": true,
      "compareAt": null,
      "currency": "USD",
      "image": "/images/sneakers/ChatGPT_Image_Oct_8_2026_05_12_38_AM.png",
      "secondaryImage": "/images/sneakers/ChatGPT_Image_Oct_8_2026_05_02_14_AM.png",
      "gallery": [
        "/images/sneakers/ChatGPT_Image_Oct_8_2026_05_12_38_AM.png",
        "/images/sneakers/ChatGPT_Image_Oct_8_2026_05_02_14_AM.png",
        "/images/sneakers/ChatGPT_Image_Oct_8_2026_05_00_58_AM.png",
        "/images/sneakers/ChatGPT_Image_Oct_8_2026_05_14_55_AM.png",
        "/images/sneakers/ChatGPT_Image_Oct_8_2026_05_13_35_AM.png"
      ],
      "variants": [
        {
          "color": "White / Green",
          "image": "/images/sneakers/ChatGPT_Image_Oct_8_2026_05_12_38_AM.png",
          "media": [
            {
              "type": "image",
              "src": "/images/sneakers/ChatGPT_Image_Oct_8_2026_05_12_38_AM.png"
            },
            {
              "type": "image",
              "src": "/images/sneakers/ChatGPT_Image_Oct_8_2026_05_02_14_AM.png"
            },
            {
              "type": "image",
              "src": "/images/sneakers/ChatGPT_Image_Oct_8_2026_05_00_58_AM.png"
            },
            {
              "type": "image",
              "src": "/images/sneakers/ChatGPT_Image_Oct_8_2026_05_14_55_AM.png"
            },
            {
              "type": "image",
              "src": "/images/sneakers/ChatGPT_Image_Oct_8_2026_05_13_35_AM.png"
            }
          ]
        }
      ],
      "description": "Louis Vuitton LV Trainer White & Green #54 — professionally photographed colorway.",
      "sizes": [
        "4",
        "4.5",
        "5",
        "5.5",
        "6",
        "6.5",
        "7",
        "7.5",
        "8",
        "8.5",
        "9",
        "9.5",
        "10",
        "10.5",
        "11",
        "11.5",
        "12",
        "12.5",
        "13"
      ],
      "sizeAvailability": {
        "uk": "8.5",
        "us": "9.5",
        "eu": "43.5"
      },
      "sizeChart": [
        [
          "4",
          "5",
          "38"
        ],
        [
          "4.5",
          "5.5",
          "38.5"
        ],
        [
          "5",
          "6",
          "39"
        ],
        [
          "5.5",
          "6.5",
          "40"
        ],
        [
          "6",
          "7",
          "40.5"
        ],
        [
          "6.5",
          "7.5",
          "41"
        ],
        [
          "7",
          "8",
          "41.5"
        ],
        [
          "7.5",
          "8.5",
          "42.5"
        ],
        [
          "8",
          "9",
          "43"
        ],
        [
          "8.5",
          "9.5",
          "43.5"
        ],
        [
          "9",
          "10",
          "44"
        ],
        [
          "9.5",
          "10.5",
          "45"
        ],
        [
          "10",
          "11",
          "45.5"
        ],
        [
          "10.5",
          "11.5",
          "46"
        ],
        [
          "11",
          "12",
          "46.5"
        ],
        [
          "11.5",
          "12.5",
          "47.5"
        ],
        [
          "12",
          "13",
          "48"
        ],
        [
          "12.5",
          "13.5",
          "48.5"
        ],
        [
          "13",
          "14",
          "49.5"
        ]
      ],
      "colors": [
        "White / Green"
      ],
      "tags": [
        "sneakers",
        "lv trainer",
        "luxury sneakers"
      ],
      "inStock": true,
      "placeholder": false,
      "featured": false,
      "newArrival": true,
      "sale": false
    },
    {
      "id": 130,
      "slug": "lv-trainer-130",
      "name": "Louis Vuitton LV Trainer White & Green Monogram #54",
      "category": "Sneakers",
      "subcategory": "Sneakers",
      "brand": "Louis Vuitton",
      "price": 0,
      "priceOnRequest": true,
      "compareAt": null,
      "currency": "USD",
      "image": "/images/sneakers/ChatGPT_Image_Oct_8_2026_04_13_22_AM.png",
      "secondaryImage": "/images/sneakers/ChatGPT_Image_Oct_8_2026_04_13_35_AM.png",
      "gallery": [
        "/images/sneakers/ChatGPT_Image_Oct_8_2026_04_13_22_AM.png",
        "/images/sneakers/ChatGPT_Image_Oct_8_2026_04_13_35_AM.png",
        "/images/sneakers/ChatGPT_Image_Oct_8_2026_04_15_14_AM.png",
        "/images/sneakers/ChatGPT_Image_Oct_8_2026_04_18_11_AM.png",
        "/images/sneakers/ChatGPT_Image_Oct_8_2026_04_14_21_AM.png"
      ],
      "variants": [
        {
          "color": "White / Green",
          "image": "/images/sneakers/ChatGPT_Image_Oct_8_2026_04_13_22_AM.png",
          "media": [
            {
              "type": "image",
              "src": "/images/sneakers/ChatGPT_Image_Oct_8_2026_04_13_22_AM.png"
            },
            {
              "type": "image",
              "src": "/images/sneakers/ChatGPT_Image_Oct_8_2026_04_13_35_AM.png"
            },
            {
              "type": "image",
              "src": "/images/sneakers/ChatGPT_Image_Oct_8_2026_04_15_14_AM.png"
            },
            {
              "type": "image",
              "src": "/images/sneakers/ChatGPT_Image_Oct_8_2026_04_18_11_AM.png"
            },
            {
              "type": "image",
              "src": "/images/sneakers/ChatGPT_Image_Oct_8_2026_04_14_21_AM.png"
            }
          ]
        }
      ],
      "description": "Louis Vuitton LV Trainer White & Green Monogram #54 — professionally photographed colorway.",
      "sizes": [
        "4",
        "4.5",
        "5",
        "5.5",
        "6",
        "6.5",
        "7",
        "7.5",
        "8",
        "8.5",
        "9",
        "9.5",
        "10",
        "10.5",
        "11",
        "11.5",
        "12",
        "12.5",
        "13"
      ],
      "sizeAvailability": {
        "uk": "8.5",
        "us": "9.5",
        "eu": "43.5"
      },
      "sizeChart": [
        [
          "4",
          "5",
          "38"
        ],
        [
          "4.5",
          "5.5",
          "38.5"
        ],
        [
          "5",
          "6",
          "39"
        ],
        [
          "5.5",
          "6.5",
          "40"
        ],
        [
          "6",
          "7",
          "40.5"
        ],
        [
          "6.5",
          "7.5",
          "41"
        ],
        [
          "7",
          "8",
          "41.5"
        ],
        [
          "7.5",
          "8.5",
          "42.5"
        ],
        [
          "8",
          "9",
          "43"
        ],
        [
          "8.5",
          "9.5",
          "43.5"
        ],
        [
          "9",
          "10",
          "44"
        ],
        [
          "9.5",
          "10.5",
          "45"
        ],
        [
          "10",
          "11",
          "45.5"
        ],
        [
          "10.5",
          "11.5",
          "46"
        ],
        [
          "11",
          "12",
          "46.5"
        ],
        [
          "11.5",
          "12.5",
          "47.5"
        ],
        [
          "12",
          "13",
          "48"
        ],
        [
          "12.5",
          "13.5",
          "48.5"
        ],
        [
          "13",
          "14",
          "49.5"
        ]
      ],
      "colors": [
        "White / Green"
      ],
      "tags": [
        "sneakers",
        "lv trainer",
        "luxury sneakers"
      ],
      "inStock": true,
      "placeholder": false,
      "featured": false,
      "newArrival": true,
      "sale": false
    },
    {
      "id": 126,
      "slug": "lv-trainer-126",
      "name": "Louis Vuitton LV Trainer Aqua & Purple",
      "category": "Sneakers",
      "subcategory": "Sneakers",
      "brand": "Louis Vuitton",
      "price": 0,
      "priceOnRequest": true,
      "compareAt": null,
      "currency": "USD",
      "image": "/images/sneakers/ChatGPT_Image_Oct_8_2026_03_57_15_AM.png",
      "secondaryImage": "/images/sneakers/ChatGPT_Image_Oct_8_2026_03_59_44_AM.png",
      "gallery": [
        "/images/sneakers/ChatGPT_Image_Oct_8_2026_03_57_15_AM.png",
        "/images/sneakers/ChatGPT_Image_Oct_8_2026_03_59_44_AM.png",
        "/images/sneakers/ChatGPT_Image_Oct_8_2026_04_01_00_AM.png",
        "/images/sneakers/ChatGPT_Image_Oct_8_2026_03_58_02_AM.png"
      ],
      "variants": [
        {
          "color": "Blue / Purple",
          "image": "/images/sneakers/ChatGPT_Image_Oct_8_2026_03_57_15_AM.png",
          "media": [
            {
              "type": "image",
              "src": "/images/sneakers/ChatGPT_Image_Oct_8_2026_03_57_15_AM.png"
            },
            {
              "type": "image",
              "src": "/images/sneakers/ChatGPT_Image_Oct_8_2026_03_59_44_AM.png"
            },
            {
              "type": "image",
              "src": "/images/sneakers/ChatGPT_Image_Oct_8_2026_04_01_00_AM.png"
            },
            {
              "type": "image",
              "src": "/images/sneakers/ChatGPT_Image_Oct_8_2026_03_58_02_AM.png"
            }
          ]
        }
      ],
      "description": "Louis Vuitton LV Trainer Aqua & Purple — professionally photographed colorway.",
      "sizes": [
        "4",
        "4.5",
        "5",
        "5.5",
        "6",
        "6.5",
        "7",
        "7.5",
        "8",
        "8.5",
        "9",
        "9.5",
        "10",
        "10.5",
        "11",
        "11.5",
        "12",
        "12.5",
        "13"
      ],
      "sizeAvailability": {
        "uk": "7.5",
        "us": "8.5",
        "eu": "42.5"
      },
      "sizeChart": [
        [
          "4",
          "5",
          "38"
        ],
        [
          "4.5",
          "5.5",
          "38.5"
        ],
        [
          "5",
          "6",
          "39"
        ],
        [
          "5.5",
          "6.5",
          "40"
        ],
        [
          "6",
          "7",
          "40.5"
        ],
        [
          "6.5",
          "7.5",
          "41"
        ],
        [
          "7",
          "8",
          "41.5"
        ],
        [
          "7.5",
          "8.5",
          "42.5"
        ],
        [
          "8",
          "9",
          "43"
        ],
        [
          "8.5",
          "9.5",
          "43.5"
        ],
        [
          "9",
          "10",
          "44"
        ],
        [
          "9.5",
          "10.5",
          "45"
        ],
        [
          "10",
          "11",
          "45.5"
        ],
        [
          "10.5",
          "11.5",
          "46"
        ],
        [
          "11",
          "12",
          "46.5"
        ],
        [
          "11.5",
          "12.5",
          "47.5"
        ],
        [
          "12",
          "13",
          "48"
        ],
        [
          "12.5",
          "13.5",
          "48.5"
        ],
        [
          "13",
          "14",
          "49.5"
        ]
      ],
      "colors": [
        "Blue / Purple"
      ],
      "tags": [
        "sneakers",
        "lv trainer",
        "luxury sneakers"
      ],
      "inStock": true,
      "placeholder": false,
      "featured": false,
      "newArrival": true,
      "sale": false
    },
    {
      "id": 127,
      "slug": "lv-trainer-127",
      "name": "Louis Vuitton LV Trainer Orange & White",
      "category": "Sneakers",
      "subcategory": "Sneakers",
      "brand": "Louis Vuitton",
      "price": 0,
      "priceOnRequest": true,
      "compareAt": null,
      "currency": "USD",
      "image": "/images/sneakers/ChatGPT_Image_Oct_8_2026_04_02_44_AM.png",
      "secondaryImage": "/images/sneakers/ChatGPT_Image_Oct_8_2026_04_03_56_AM.png",
      "gallery": [
        "/images/sneakers/ChatGPT_Image_Oct_8_2026_04_02_44_AM.png",
        "/images/sneakers/ChatGPT_Image_Oct_8_2026_04_03_56_AM.png",
        "/images/sneakers/ChatGPT_Image_Oct_8_2026_04_08_52_AM.png",
        "/images/sneakers/ChatGPT_Image_Oct_8_2026_04_01_56_AM.png",
        "/images/sneakers/ChatGPT_Image_Oct_8_2026_04_10_21_AM.png"
      ],
      "variants": [
        {
          "color": "Orange / White",
          "image": "/images/sneakers/ChatGPT_Image_Oct_8_2026_04_02_44_AM.png",
          "media": [
            {
              "type": "image",
              "src": "/images/sneakers/ChatGPT_Image_Oct_8_2026_04_02_44_AM.png"
            },
            {
              "type": "image",
              "src": "/images/sneakers/ChatGPT_Image_Oct_8_2026_04_03_56_AM.png"
            },
            {
              "type": "image",
              "src": "/images/sneakers/ChatGPT_Image_Oct_8_2026_04_08_52_AM.png"
            },
            {
              "type": "image",
              "src": "/images/sneakers/ChatGPT_Image_Oct_8_2026_04_01_56_AM.png"
            },
            {
              "type": "image",
              "src": "/images/sneakers/ChatGPT_Image_Oct_8_2026_04_10_21_AM.png"
            }
          ]
        }
      ],
      "description": "Louis Vuitton LV Trainer Orange & White — professionally photographed colorway.",
      "sizes": [
        "4",
        "4.5",
        "5",
        "5.5",
        "6",
        "6.5",
        "7",
        "7.5",
        "8",
        "8.5",
        "9",
        "9.5",
        "10",
        "10.5",
        "11",
        "11.5",
        "12",
        "12.5",
        "13"
      ],
      "sizeAvailability": {
        "uk": "10",
        "us": "11",
        "eu": "45.5"
      },
      "sizeChart": [
        [
          "4",
          "5",
          "38"
        ],
        [
          "4.5",
          "5.5",
          "38.5"
        ],
        [
          "5",
          "6",
          "39"
        ],
        [
          "5.5",
          "6.5",
          "40"
        ],
        [
          "6",
          "7",
          "40.5"
        ],
        [
          "6.5",
          "7.5",
          "41"
        ],
        [
          "7",
          "8",
          "41.5"
        ],
        [
          "7.5",
          "8.5",
          "42.5"
        ],
        [
          "8",
          "9",
          "43"
        ],
        [
          "8.5",
          "9.5",
          "43.5"
        ],
        [
          "9",
          "10",
          "44"
        ],
        [
          "9.5",
          "10.5",
          "45"
        ],
        [
          "10",
          "11",
          "45.5"
        ],
        [
          "10.5",
          "11.5",
          "46"
        ],
        [
          "11",
          "12",
          "46.5"
        ],
        [
          "11.5",
          "12.5",
          "47.5"
        ],
        [
          "12",
          "13",
          "48"
        ],
        [
          "12.5",
          "13.5",
          "48.5"
        ],
        [
          "13",
          "14",
          "49.5"
        ]
      ],
      "colors": [
        "Orange / White"
      ],
      "tags": [
        "sneakers",
        "lv trainer",
        "luxury sneakers"
      ],
      "inStock": true,
      "placeholder": false,
      "featured": false,
      "newArrival": true,
      "sale": false
    },
    {
      "id": 128,
      "slug": "lv-trainer-128",
      "name": "Louis Vuitton LV Trainer Blue & Ice",
      "category": "Sneakers",
      "subcategory": "Sneakers",
      "brand": "Louis Vuitton",
      "price": 0,
      "priceOnRequest": true,
      "compareAt": null,
      "currency": "USD",
      "image": "/images/sneakers/ChatGPT_Image_Oct_8_2026_03_11_59_AM.png",
      "secondaryImage": "/images/sneakers/ChatGPT_Image_Oct_8_2026_03_08_28_AM.png",
      "gallery": [
        "/images/sneakers/ChatGPT_Image_Oct_8_2026_03_11_59_AM.png",
        "/images/sneakers/ChatGPT_Image_Oct_8_2026_03_08_28_AM.png",
        "/images/sneakers/ChatGPT_Image_Oct_8_2026_03_05_57_AM.png",
        "/images/sneakers/ChatGPT_Image_Oct_8_2026_03_31_25_AM.png"
      ],
      "variants": [
        {
          "color": "Blue / Ice",
          "image": "/images/sneakers/ChatGPT_Image_Oct_8_2026_03_11_59_AM.png",
          "media": [
            {
              "type": "image",
              "src": "/images/sneakers/ChatGPT_Image_Oct_8_2026_03_11_59_AM.png"
            },
            {
              "type": "image",
              "src": "/images/sneakers/ChatGPT_Image_Oct_8_2026_03_08_28_AM.png"
            },
            {
              "type": "image",
              "src": "/images/sneakers/ChatGPT_Image_Oct_8_2026_03_05_57_AM.png"
            },
            {
              "type": "image",
              "src": "/images/sneakers/ChatGPT_Image_Oct_8_2026_03_31_25_AM.png"
            }
          ]
        }
      ],
      "description": "Louis Vuitton LV Trainer Blue & Ice — professionally photographed colorway.",
      "sizes": [
        "4",
        "4.5",
        "5",
        "5.5",
        "6",
        "6.5",
        "7",
        "7.5",
        "8",
        "8.5",
        "9",
        "9.5",
        "10",
        "10.5",
        "11",
        "11.5",
        "12",
        "12.5",
        "13"
      ],
      "sizeAvailability": {
        "uk": "6",
        "us": "7",
        "eu": "40.5"
      },
      "sizeChart": [
        [
          "4",
          "5",
          "38"
        ],
        [
          "4.5",
          "5.5",
          "38.5"
        ],
        [
          "5",
          "6",
          "39"
        ],
        [
          "5.5",
          "6.5",
          "40"
        ],
        [
          "6",
          "7",
          "40.5"
        ],
        [
          "6.5",
          "7.5",
          "41"
        ],
        [
          "7",
          "8",
          "41.5"
        ],
        [
          "7.5",
          "8.5",
          "42.5"
        ],
        [
          "8",
          "9",
          "43"
        ],
        [
          "8.5",
          "9.5",
          "43.5"
        ],
        [
          "9",
          "10",
          "44"
        ],
        [
          "9.5",
          "10.5",
          "45"
        ],
        [
          "10",
          "11",
          "45.5"
        ],
        [
          "10.5",
          "11.5",
          "46"
        ],
        [
          "11",
          "12",
          "46.5"
        ],
        [
          "11.5",
          "12.5",
          "47.5"
        ],
        [
          "12",
          "13",
          "48"
        ],
        [
          "12.5",
          "13.5",
          "48.5"
        ],
        [
          "13",
          "14",
          "49.5"
        ]
      ],
      "colors": [
        "Blue / Ice"
      ],
      "tags": [
        "sneakers",
        "lv trainer",
        "luxury sneakers"
      ],
      "inStock": true,
      "placeholder": false,
      "featured": false,
      "newArrival": true,
      "sale": false
    },
    {
      "id": 129,
      "slug": "lv-trainer-129",
      "name": "Louis Vuitton LV Trainer Grey & Orange",
      "category": "Sneakers",
      "subcategory": "Sneakers",
      "brand": "Louis Vuitton",
      "price": 0,
      "priceOnRequest": true,
      "compareAt": null,
      "currency": "USD",
      "image": "/images/sneakers/ChatGPT_Image_Oct_8_2026_05_20_42_AM.png",
      "secondaryImage": "/images/sneakers/ChatGPT_Image_Oct_8_2026_05_17_29_AM.png",
      "gallery": [
        "/images/sneakers/ChatGPT_Image_Oct_8_2026_05_20_42_AM.png",
        "/images/sneakers/ChatGPT_Image_Oct_8_2026_05_17_29_AM.png",
        "/images/sneakers/ChatGPT_Image_Oct_8_2026_05_22_52_AM.png",
        "/images/sneakers/ChatGPT_Image_Oct_8_2026_05_18_30_AM.png"
      ],
      "variants": [
        {
          "color": "Grey / Orange",
          "image": "/images/sneakers/ChatGPT_Image_Oct_8_2026_05_20_42_AM.png",
          "media": [
            {
              "type": "image",
              "src": "/images/sneakers/ChatGPT_Image_Oct_8_2026_05_20_42_AM.png"
            },
            {
              "type": "image",
              "src": "/images/sneakers/ChatGPT_Image_Oct_8_2026_05_17_29_AM.png"
            },
            {
              "type": "image",
              "src": "/images/sneakers/ChatGPT_Image_Oct_8_2026_05_22_52_AM.png"
            },
            {
              "type": "image",
              "src": "/images/sneakers/ChatGPT_Image_Oct_8_2026_05_18_30_AM.png"
            }
          ]
        }
      ],
      "description": "Louis Vuitton LV Trainer Grey & Orange — professionally photographed colorway.",
      "sizes": [
        "4",
        "4.5",
        "5",
        "5.5",
        "6",
        "6.5",
        "7",
        "7.5",
        "8",
        "8.5",
        "9",
        "9.5",
        "10",
        "10.5",
        "11",
        "11.5",
        "12",
        "12.5",
        "13"
      ],
      "sizeAvailability": {
        "uk": "9.5",
        "us": "10.5",
        "eu": "45"
      },
      "sizeChart": [
        [
          "4",
          "5",
          "38"
        ],
        [
          "4.5",
          "5.5",
          "38.5"
        ],
        [
          "5",
          "6",
          "39"
        ],
        [
          "5.5",
          "6.5",
          "40"
        ],
        [
          "6",
          "7",
          "40.5"
        ],
        [
          "6.5",
          "7.5",
          "41"
        ],
        [
          "7",
          "8",
          "41.5"
        ],
        [
          "7.5",
          "8.5",
          "42.5"
        ],
        [
          "8",
          "9",
          "43"
        ],
        [
          "8.5",
          "9.5",
          "43.5"
        ],
        [
          "9",
          "10",
          "44"
        ],
        [
          "9.5",
          "10.5",
          "45"
        ],
        [
          "10",
          "11",
          "45.5"
        ],
        [
          "10.5",
          "11.5",
          "46"
        ],
        [
          "11",
          "12",
          "46.5"
        ],
        [
          "11.5",
          "12.5",
          "47.5"
        ],
        [
          "12",
          "13",
          "48"
        ],
        [
          "12.5",
          "13.5",
          "48.5"
        ],
        [
          "13",
          "14",
          "49.5"
        ]
      ],
      "colors": [
        "Grey / Orange"
      ],
      "tags": [
        "sneakers",
        "lv trainer",
        "luxury sneakers"
      ],
      "inStock": true,
      "placeholder": false,
      "featured": false,
      "newArrival": true,
      "sale": false
    },
    {
      "id": 201,
      "slug": "louis-vuitton-lv-trainer-ash-orange",
      "name": "Louis Vuitton LV Trainer Ash & Orange",
      "category": "Sneakers",
      "subcategory": "Sneakers",
      "brand": "Louis Vuitton",
      "price": 0,
      "priceOnRequest": true,
      "compareAt": null,
      "currency": "USD",
      "image": "/images/sneakers/ChatGPT_Image_Oct_9_2026_03_47_29_AM_zuqg69.png",
      "secondaryImage": "/images/sneakers/ChatGPT_Image_Oct_9_2026_03_46_51_AM_e0erzv.png",
      "gallery": [
        "/images/sneakers/ChatGPT_Image_Oct_9_2026_03_47_29_AM_zuqg69.png",
        "/images/sneakers/ChatGPT_Image_Oct_9_2026_03_46_51_AM_e0erzv.png",
        "/images/sneakers/ChatGPT_Image_Oct_9_2026_03_47_44_AM_chl5hk.png",
        "/images/sneakers/ChatGPT_Image_Oct_9_2026_03_47_36_AM_yqsrlc.png"
      ],
      "variants": [
        {
          "color": "Ash / Orange",
          "image": "/images/sneakers/ChatGPT_Image_Oct_9_2026_03_47_29_AM_zuqg69.png",
          "media": [
            {
              "type": "image",
              "src": "/images/sneakers/ChatGPT_Image_Oct_9_2026_03_47_29_AM_zuqg69.png"
            },
            {
              "type": "image",
              "src": "/images/sneakers/ChatGPT_Image_Oct_9_2026_03_46_51_AM_e0erzv.png"
            },
            {
              "type": "image",
              "src": "/images/sneakers/ChatGPT_Image_Oct_9_2026_03_47_44_AM_chl5hk.png"
            },
            {
              "type": "image",
              "src": "/images/sneakers/ChatGPT_Image_Oct_9_2026_03_47_36_AM_yqsrlc.png"
            }
          ]
        }
      ],
      "description": "Louis Vuitton LV Trainer Ash & Orange — matching product photos from the supplied collection.",
      "sizes": [],
      "colors": [
        "Ash / Orange"
      ],
      "tags": [
        "sneakers",
        "louis vuitton"
      ],
      "inStock": true,
      "placeholder": false,
      "featured": false,
      "newArrival": true,
      "sale": false
    },
    {
      "id": 202,
      "slug": "louis-vuitton-lv-trainer-dark-purple",
      "name": "Louis Vuitton LV Trainer Dark Purple",
      "category": "Sneakers",
      "subcategory": "Sneakers",
      "brand": "Louis Vuitton",
      "price": 0,
      "priceOnRequest": true,
      "compareAt": null,
      "currency": "USD",
      "image": "/images/sneakers/ChatGPT_Image_Oct_9_2026_03_51_36_AM_ubbiz7.png",
      "secondaryImage": "/images/sneakers/ChatGPT_Image_Oct_9_2026_03_50_49_AM_iisivj.png",
      "gallery": [
        "/images/sneakers/ChatGPT_Image_Oct_9_2026_03_51_36_AM_ubbiz7.png",
        "/images/sneakers/ChatGPT_Image_Oct_9_2026_03_50_49_AM_iisivj.png",
        "/images/sneakers/ChatGPT_Image_Oct_9_2026_03_50_04_AM_ywliwk.png"
      ],
      "variants": [
        {
          "color": "Purple",
          "image": "/images/sneakers/ChatGPT_Image_Oct_9_2026_03_51_36_AM_ubbiz7.png",
          "media": [
            {
              "type": "image",
              "src": "/images/sneakers/ChatGPT_Image_Oct_9_2026_03_51_36_AM_ubbiz7.png"
            },
            {
              "type": "image",
              "src": "/images/sneakers/ChatGPT_Image_Oct_9_2026_03_50_49_AM_iisivj.png"
            },
            {
              "type": "image",
              "src": "/images/sneakers/ChatGPT_Image_Oct_9_2026_03_50_04_AM_ywliwk.png"
            }
          ]
        }
      ],
      "description": "Louis Vuitton LV Trainer Dark Purple — matching product photos from the supplied collection.",
      "sizes": [],
      "colors": [
        "Purple"
      ],
      "tags": [
        "sneakers",
        "louis vuitton"
      ],
      "inStock": true,
      "placeholder": false,
      "featured": false,
      "newArrival": true,
      "sale": false
    },
    {
      "id": 203,
      "slug": "louis-vuitton-lv-trainer-purple-pink",
      "name": "Louis Vuitton LV Trainer Purple & Pink",
      "category": "Sneakers",
      "subcategory": "Sneakers",
      "brand": "Louis Vuitton",
      "price": 0,
      "priceOnRequest": true,
      "compareAt": null,
      "currency": "USD",
      "image": "/images/sneakers/ChatGPT_Image_Oct_9_2026_03_53_59_AM_clzypi.png",
      "secondaryImage": "/images/sneakers/ChatGPT_Image_Oct_9_2026_03_53_21_AM_xgfkfh.png",
      "gallery": [
        "/images/sneakers/ChatGPT_Image_Oct_9_2026_03_53_59_AM_clzypi.png",
        "/images/sneakers/ChatGPT_Image_Oct_9_2026_03_53_21_AM_xgfkfh.png"
      ],
      "variants": [
        {
          "color": "Purple / Pink",
          "image": "/images/sneakers/ChatGPT_Image_Oct_9_2026_03_53_59_AM_clzypi.png",
          "media": [
            {
              "type": "image",
              "src": "/images/sneakers/ChatGPT_Image_Oct_9_2026_03_53_59_AM_clzypi.png"
            },
            {
              "type": "image",
              "src": "/images/sneakers/ChatGPT_Image_Oct_9_2026_03_53_21_AM_xgfkfh.png"
            }
          ]
        }
      ],
      "description": "Louis Vuitton LV Trainer Purple & Pink — matching product photos from the supplied collection.",
      "sizes": [],
      "colors": [
        "Purple / Pink"
      ],
      "tags": [
        "sneakers",
        "louis vuitton"
      ],
      "inStock": true,
      "placeholder": false,
      "featured": false,
      "newArrival": true,
      "sale": false
    },
    {
      "id": 204,
      "slug": "louis-vuitton-lv-trainer-purple-denim-white",
      "name": "Louis Vuitton LV Trainer Purple Denim & White",
      "category": "Sneakers",
      "subcategory": "Sneakers",
      "brand": "Louis Vuitton",
      "price": 0,
      "priceOnRequest": true,
      "compareAt": null,
      "currency": "USD",
      "image": "/images/sneakers/ChatGPT_Image_Oct_9_2026_03_57_58_AM_gvnvaz.png",
      "secondaryImage": "/images/sneakers/ChatGPT_Image_Oct_9_2026_03_56_28_AM_rlt8q2.png",
      "gallery": [
        "/images/sneakers/ChatGPT_Image_Oct_9_2026_03_57_58_AM_gvnvaz.png",
        "/images/sneakers/ChatGPT_Image_Oct_9_2026_03_56_28_AM_rlt8q2.png",
        "/images/sneakers/ChatGPT_Image_Oct_9_2026_03_57_08_AM_kacz38.png",
        "/images/sneakers/ChatGPT_Image_Oct_9_2026_03_59_02_AM_akm8ay.png"
      ],
      "variants": [
        {
          "color": "Purple / White",
          "image": "/images/sneakers/ChatGPT_Image_Oct_9_2026_03_57_58_AM_gvnvaz.png",
          "media": [
            {
              "type": "image",
              "src": "/images/sneakers/ChatGPT_Image_Oct_9_2026_03_57_58_AM_gvnvaz.png"
            },
            {
              "type": "image",
              "src": "/images/sneakers/ChatGPT_Image_Oct_9_2026_03_56_28_AM_rlt8q2.png"
            },
            {
              "type": "image",
              "src": "/images/sneakers/ChatGPT_Image_Oct_9_2026_03_57_08_AM_kacz38.png"
            },
            {
              "type": "image",
              "src": "/images/sneakers/ChatGPT_Image_Oct_9_2026_03_59_02_AM_akm8ay.png"
            }
          ]
        }
      ],
      "description": "Louis Vuitton LV Trainer Purple Denim & White — matching product photos from the supplied collection.",
      "sizes": [],
      "colors": [
        "Purple / White"
      ],
      "tags": [
        "sneakers",
        "louis vuitton"
      ],
      "inStock": true,
      "placeholder": false,
      "featured": false,
      "newArrival": true,
      "sale": false
    },
    {
      "id": 205,
      "slug": "louis-vuitton-lv-trainer-sky-blue",
      "name": "Louis Vuitton LV Trainer Sky Blue",
      "category": "Sneakers",
      "subcategory": "Sneakers",
      "brand": "Louis Vuitton",
      "price": 0,
      "priceOnRequest": true,
      "compareAt": null,
      "currency": "USD",
      "image": "/images/sneakers/ChatGPT_Image_Oct_9_2026_04_02_08_AM_dz6hcy.png",
      "secondaryImage": "/images/sneakers/ChatGPT_Image_Oct_9_2026_04_02_13_AM_gw0uhp.png",
      "gallery": [
        "/images/sneakers/ChatGPT_Image_Oct_9_2026_04_02_08_AM_dz6hcy.png",
        "/images/sneakers/ChatGPT_Image_Oct_9_2026_04_02_13_AM_gw0uhp.png",
        "/images/sneakers/ChatGPT_Image_Oct_9_2026_04_00_10_AM_v8rhbq.png"
      ],
      "variants": [
        {
          "color": "Sky Blue",
          "image": "/images/sneakers/ChatGPT_Image_Oct_9_2026_04_02_08_AM_dz6hcy.png",
          "media": [
            {
              "type": "image",
              "src": "/images/sneakers/ChatGPT_Image_Oct_9_2026_04_02_08_AM_dz6hcy.png"
            },
            {
              "type": "image",
              "src": "/images/sneakers/ChatGPT_Image_Oct_9_2026_04_02_13_AM_gw0uhp.png"
            },
            {
              "type": "image",
              "src": "/images/sneakers/ChatGPT_Image_Oct_9_2026_04_00_10_AM_v8rhbq.png"
            }
          ]
        }
      ],
      "description": "Louis Vuitton LV Trainer Sky Blue — matching product photos from the supplied collection.",
      "sizes": [],
      "colors": [
        "Sky Blue"
      ],
      "tags": [
        "sneakers",
        "louis vuitton"
      ],
      "inStock": true,
      "placeholder": false,
      "featured": false,
      "newArrival": true,
      "sale": false
    },
    {
      "id": 206,
      "slug": "louis-vuitton-white-brown-sneakers",
      "name": "Louis Vuitton White & Brown Sneakers",
      "category": "Sneakers",
      "subcategory": "Sneakers",
      "brand": "Louis Vuitton",
      "price": 0,
      "priceOnRequest": true,
      "compareAt": null,
      "currency": "USD",
      "image": "/images/sneakers/exec-bccd2330-accd-472b-9aae-4b5e5563f7cb_iay7ha.png",
      "secondaryImage": "/images/sneakers/exec-d0e4e1c0-c242-46e8-8cd1-08486802ffdc_xy359r.png",
      "gallery": [
        "/images/sneakers/exec-bccd2330-accd-472b-9aae-4b5e5563f7cb_iay7ha.png",
        "/images/sneakers/exec-d0e4e1c0-c242-46e8-8cd1-08486802ffdc_xy359r.png",
        "/images/sneakers/exec-e06f212c-ab2a-4c06-96f6-022770e27503_v15hyy.png",
        "/images/sneakers/exec-f62f8f14-e666-4117-acd7-0df1f4a05f66_hn5emh.png"
      ],
      "variants": [
        {
          "color": "White / Brown",
          "image": "/images/sneakers/exec-bccd2330-accd-472b-9aae-4b5e5563f7cb_iay7ha.png",
          "media": [
            {
              "type": "image",
              "src": "/images/sneakers/exec-bccd2330-accd-472b-9aae-4b5e5563f7cb_iay7ha.png"
            },
            {
              "type": "image",
              "src": "/images/sneakers/exec-d0e4e1c0-c242-46e8-8cd1-08486802ffdc_xy359r.png"
            },
            {
              "type": "image",
              "src": "/images/sneakers/exec-e06f212c-ab2a-4c06-96f6-022770e27503_v15hyy.png"
            },
            {
              "type": "image",
              "src": "/images/sneakers/exec-f62f8f14-e666-4117-acd7-0df1f4a05f66_hn5emh.png"
            }
          ]
        }
      ],
      "description": "Louis Vuitton White & Brown Sneakers — matching product photos from the supplied collection.",
      "sizes": [],
      "colors": [
        "White / Brown"
      ],
      "tags": [
        "sneakers",
        "louis vuitton"
      ],
      "inStock": true,
      "placeholder": false,
      "featured": false,
      "newArrival": true,
      "sale": false
    },
    {
      "id": 207,
      "slug": "louis-vuitton-lv-trainer-black",
      "name": "Louis Vuitton LV Trainer Black",
      "category": "Sneakers",
      "subcategory": "Sneakers",
      "brand": "Louis Vuitton",
      "price": 0,
      "priceOnRequest": true,
      "compareAt": null,
      "currency": "USD",
      "image": "/images/sneakers/ChatGPT_Image_Oct_9_2026_04_10_02_AM_yscj4e.png",
      "secondaryImage": "/images/sneakers/ChatGPT_Image_Oct_9_2026_04_10_13_AM_nqkf8w.png",
      "gallery": [
        "/images/sneakers/ChatGPT_Image_Oct_9_2026_04_10_02_AM_yscj4e.png",
        "/images/sneakers/ChatGPT_Image_Oct_9_2026_04_10_13_AM_nqkf8w.png",
        "/images/sneakers/exec-ba1a3230-abb6-4a27-85c8-72c9e79d3f4b_ygu4gp.png"
      ],
      "variants": [
        {
          "color": "Black",
          "image": "/images/sneakers/ChatGPT_Image_Oct_9_2026_04_10_02_AM_yscj4e.png",
          "media": [
            {
              "type": "image",
              "src": "/images/sneakers/ChatGPT_Image_Oct_9_2026_04_10_02_AM_yscj4e.png"
            },
            {
              "type": "image",
              "src": "/images/sneakers/ChatGPT_Image_Oct_9_2026_04_10_13_AM_nqkf8w.png"
            },
            {
              "type": "image",
              "src": "/images/sneakers/exec-ba1a3230-abb6-4a27-85c8-72c9e79d3f4b_ygu4gp.png"
            }
          ]
        }
      ],
      "description": "Louis Vuitton LV Trainer Black — matching product photos from the supplied collection.",
      "sizes": [
        "40"
      ],
      "colors": [
        "Black"
      ],
      "tags": [
        "sneakers",
        "louis vuitton"
      ],
      "inStock": true,
      "placeholder": false,
      "featured": false,
      "newArrival": true,
      "sale": false
    },
    {
      "id": 208,
      "slug": "louis-vuitton-lv-trainer-white-green-dots",
      "name": "Louis Vuitton LV Trainer White & Green Dots",
      "category": "Sneakers",
      "subcategory": "Sneakers",
      "brand": "Louis Vuitton",
      "price": 0,
      "priceOnRequest": true,
      "compareAt": null,
      "currency": "USD",
      "image": "/images/sneakers/ChatGPT_Image_Oct_9_2026_04_13_41_AM_kbtkpg.png",
      "secondaryImage": "/images/sneakers/ChatGPT_Image_Oct_9_2026_04_21_24_AM_rktw8q.png",
      "gallery": [
        "/images/sneakers/ChatGPT_Image_Oct_9_2026_04_13_41_AM_kbtkpg.png",
        "/images/sneakers/ChatGPT_Image_Oct_9_2026_04_21_24_AM_rktw8q.png",
        "/images/sneakers/ChatGPT_Image_Oct_9_2026_04_13_58_AM_p92mag.png",
        "/images/sneakers/ChatGPT_Image_Oct_9_2026_04_18_53_AM_or1ot2.png"
      ],
      "variants": [
        {
          "color": "White / Green",
          "image": "/images/sneakers/ChatGPT_Image_Oct_9_2026_04_13_41_AM_kbtkpg.png",
          "media": [
            {
              "type": "image",
              "src": "/images/sneakers/ChatGPT_Image_Oct_9_2026_04_13_41_AM_kbtkpg.png"
            },
            {
              "type": "image",
              "src": "/images/sneakers/ChatGPT_Image_Oct_9_2026_04_21_24_AM_rktw8q.png"
            },
            {
              "type": "image",
              "src": "/images/sneakers/ChatGPT_Image_Oct_9_2026_04_13_58_AM_p92mag.png"
            },
            {
              "type": "image",
              "src": "/images/sneakers/ChatGPT_Image_Oct_9_2026_04_18_53_AM_or1ot2.png"
            }
          ]
        }
      ],
      "description": "Louis Vuitton LV Trainer White & Green Dots — matching product photos from the supplied collection.",
      "sizes": [
        "41"
      ],
      "colors": [
        "White / Green"
      ],
      "tags": [
        "sneakers",
        "louis vuitton"
      ],
      "inStock": true,
      "placeholder": false,
      "featured": false,
      "newArrival": true,
      "sale": false
    },
    {
      "id": 209,
      "slug": "louis-vuitton-lv-trainer-grey-white",
      "name": "Louis Vuitton LV Trainer Grey & White",
      "category": "Sneakers",
      "subcategory": "Sneakers",
      "brand": "Louis Vuitton",
      "price": 0,
      "priceOnRequest": true,
      "compareAt": null,
      "currency": "USD",
      "image": "/images/sneakers/ChatGPT_Image_Oct_9_2026_04_33_13_AM_mnrc7w.png",
      "secondaryImage": "/images/sneakers/ChatGPT_Image_Oct_9_2026_04_50_00_AM_yljruu.png",
      "gallery": [
        "/images/sneakers/ChatGPT_Image_Oct_9_2026_04_33_13_AM_mnrc7w.png",
        "/images/sneakers/ChatGPT_Image_Oct_9_2026_04_50_00_AM_yljruu.png",
        "/images/sneakers/ChatGPT_Image_Oct_9_2026_04_52_57_AM_lscox0.png"
      ],
      "variants": [
        {
          "color": "Grey / White",
          "image": "/images/sneakers/ChatGPT_Image_Oct_9_2026_04_33_13_AM_mnrc7w.png",
          "media": [
            {
              "type": "image",
              "src": "/images/sneakers/ChatGPT_Image_Oct_9_2026_04_33_13_AM_mnrc7w.png"
            },
            {
              "type": "image",
              "src": "/images/sneakers/ChatGPT_Image_Oct_9_2026_04_50_00_AM_yljruu.png"
            },
            {
              "type": "image",
              "src": "/images/sneakers/ChatGPT_Image_Oct_9_2026_04_52_57_AM_lscox0.png"
            }
          ]
        }
      ],
      "description": "Louis Vuitton LV Trainer Grey & White — matching product photos from the supplied collection.",
      "sizes": [
        "45"
      ],
      "colors": [
        "Grey / White"
      ],
      "tags": [
        "sneakers",
        "louis vuitton"
      ],
      "inStock": true,
      "placeholder": false,
      "featured": false,
      "newArrival": true,
      "sale": false
    },
    {
      "id": 210,
      "slug": "green-cream-high-top-sneakers",
      "name": "Green & Cream High-Top Sneakers",
      "category": "Sneakers",
      "subcategory": "Sneakers",
      "brand": "BUYYMEE.com",
      "price": 0,
      "priceOnRequest": true,
      "compareAt": null,
      "currency": "USD",
      "image": "/images/sneakers/ChatGPT_Image_Oct_9_2026_06_41_52_AM_cfhq3s.png",
      "secondaryImage": "/images/sneakers/ChatGPT_Image_Oct_9_2026_06_43_12_AM_x7ljel.png",
      "gallery": [
        "/images/sneakers/ChatGPT_Image_Oct_9_2026_06_41_52_AM_cfhq3s.png",
        "/images/sneakers/ChatGPT_Image_Oct_9_2026_06_43_12_AM_x7ljel.png",
        "/images/sneakers/ChatGPT_Image_Oct_9_2026_06_44_00_AM_vldxpg.png",
        "/images/sneakers/ChatGPT_Image_Oct_9_2026_06_43_38_AM_txlelu.png"
      ],
      "variants": [
        {
          "color": "Green / Cream",
          "image": "/images/sneakers/ChatGPT_Image_Oct_9_2026_06_41_52_AM_cfhq3s.png",
          "media": [
            {
              "type": "image",
              "src": "/images/sneakers/ChatGPT_Image_Oct_9_2026_06_41_52_AM_cfhq3s.png"
            },
            {
              "type": "image",
              "src": "/images/sneakers/ChatGPT_Image_Oct_9_2026_06_43_12_AM_x7ljel.png"
            },
            {
              "type": "image",
              "src": "/images/sneakers/ChatGPT_Image_Oct_9_2026_06_44_00_AM_vldxpg.png"
            },
            {
              "type": "image",
              "src": "/images/sneakers/ChatGPT_Image_Oct_9_2026_06_43_38_AM_txlelu.png"
            }
          ]
        }
      ],
      "description": "Green & Cream High-Top Sneakers — matching product photos from the supplied collection.",
      "sizes": [],
      "colors": [
        "Green / Cream"
      ],
      "tags": [
        "sneakers",
        "buyymee.com"
      ],
      "inStock": true,
      "placeholder": false,
      "featured": false,
      "newArrival": true,
      "sale": false
    },
    {
      "id": 211,
      "slug": "adidas-yeezy-boost-350-black",
      "name": "Adidas Yeezy Boost 350 Black",
      "category": "Sneakers",
      "subcategory": "Sneakers",
      "brand": "Adidas",
      "price": 0,
      "priceOnRequest": true,
      "compareAt": null,
      "currency": "USD",
      "image": "/images/sneakers/ChatGPT_Image_Oct_9_2026_05_04_22_AM_ftv7iu.png",
      "secondaryImage": "/images/sneakers/ChatGPT_Image_Oct_9_2026_05_07_51_AM_vifleo.png",
      "gallery": [
        "/images/sneakers/ChatGPT_Image_Oct_9_2026_05_04_22_AM_ftv7iu.png",
        "/images/sneakers/ChatGPT_Image_Oct_9_2026_05_07_51_AM_vifleo.png",
        "/images/sneakers/ChatGPT_Image_Oct_9_2026_05_06_08_AM_zakpp4.png"
      ],
      "variants": [
        {
          "color": "Black",
          "image": "/images/sneakers/ChatGPT_Image_Oct_9_2026_05_04_22_AM_ftv7iu.png",
          "media": [
            {
              "type": "image",
              "src": "/images/sneakers/ChatGPT_Image_Oct_9_2026_05_04_22_AM_ftv7iu.png"
            },
            {
              "type": "image",
              "src": "/images/sneakers/ChatGPT_Image_Oct_9_2026_05_07_51_AM_vifleo.png"
            },
            {
              "type": "image",
              "src": "/images/sneakers/ChatGPT_Image_Oct_9_2026_05_06_08_AM_zakpp4.png"
            }
          ]
        }
      ],
      "description": "Adidas Yeezy Boost 350 Black — matching product photos from the supplied collection.",
      "sizes": [],
      "colors": [
        "Black"
      ],
      "tags": [
        "sneakers",
        "adidas"
      ],
      "inStock": true,
      "placeholder": false,
      "featured": false,
      "newArrival": true,
      "sale": false
    },
    {
      "id": 212,
      "slug": "adidas-yeezy-700-black-grey",
      "name": "Adidas Yeezy 700 Black & Grey",
      "category": "Sneakers",
      "subcategory": "Sneakers",
      "brand": "Adidas",
      "price": 0,
      "priceOnRequest": true,
      "compareAt": null,
      "currency": "USD",
      "image": "/images/sneakers/ChatGPT_Image_Oct_9_2026_05_14_11_AM_gqanu6.png",
      "secondaryImage": "/images/sneakers/ChatGPT_Image_Oct_9_2026_05_12_58_AM_t9bqmj.png",
      "gallery": [
        "/images/sneakers/ChatGPT_Image_Oct_9_2026_05_14_11_AM_gqanu6.png",
        "/images/sneakers/ChatGPT_Image_Oct_9_2026_05_12_58_AM_t9bqmj.png",
        "/images/sneakers/ChatGPT_Image_Oct_9_2026_05_13_12_AM_e1pijg.png"
      ],
      "variants": [
        {
          "color": "Black / Grey",
          "image": "/images/sneakers/ChatGPT_Image_Oct_9_2026_05_14_11_AM_gqanu6.png",
          "media": [
            {
              "type": "image",
              "src": "/images/sneakers/ChatGPT_Image_Oct_9_2026_05_14_11_AM_gqanu6.png"
            },
            {
              "type": "image",
              "src": "/images/sneakers/ChatGPT_Image_Oct_9_2026_05_12_58_AM_t9bqmj.png"
            },
            {
              "type": "image",
              "src": "/images/sneakers/ChatGPT_Image_Oct_9_2026_05_13_12_AM_e1pijg.png"
            }
          ]
        }
      ],
      "description": "Adidas Yeezy 700 Black & Grey — matching product photos from the supplied collection.",
      "sizes": [
        "48"
      ],
      "colors": [
        "Black / Grey"
      ],
      "tags": [
        "sneakers",
        "adidas"
      ],
      "inStock": true,
      "placeholder": false,
      "featured": false,
      "newArrival": true,
      "sale": false
    },
    {
      "id": 213,
      "slug": "adidas-pink-white-sneakers",
      "name": "Adidas Pink & White Sneakers",
      "category": "Sneakers",
      "subcategory": "Sneakers",
      "brand": "Adidas",
      "price": 0,
      "priceOnRequest": true,
      "compareAt": null,
      "currency": "USD",
      "image": "/images/sneakers/exec-69f6e04f-40b1-40c7-9046-cce8e78f660e_ncixjl.png",
      "secondaryImage": "/images/sneakers/exec-1f72a118-fb8a-4d81-8455-6a8bc978ef95_hu6zey.png",
      "gallery": [
        "/images/sneakers/exec-69f6e04f-40b1-40c7-9046-cce8e78f660e_ncixjl.png",
        "/images/sneakers/exec-1f72a118-fb8a-4d81-8455-6a8bc978ef95_hu6zey.png",
        "/images/sneakers/exec-c24aa495-5099-4b35-a543-57066814c52f_ompylf.png"
      ],
      "variants": [
        {
          "color": "Pink / White",
          "image": "/images/sneakers/exec-69f6e04f-40b1-40c7-9046-cce8e78f660e_ncixjl.png",
          "media": [
            {
              "type": "image",
              "src": "/images/sneakers/exec-69f6e04f-40b1-40c7-9046-cce8e78f660e_ncixjl.png"
            },
            {
              "type": "image",
              "src": "/images/sneakers/exec-1f72a118-fb8a-4d81-8455-6a8bc978ef95_hu6zey.png"
            },
            {
              "type": "image",
              "src": "/images/sneakers/exec-c24aa495-5099-4b35-a543-57066814c52f_ompylf.png"
            }
          ]
        }
      ],
      "description": "Adidas Pink & White Sneakers — matching product photos from the supplied collection.",
      "sizes": [],
      "colors": [
        "Pink / White"
      ],
      "tags": [
        "sneakers",
        "adidas"
      ],
      "inStock": true,
      "placeholder": false,
      "featured": false,
      "newArrival": true,
      "sale": false
    },
    {
      "id": 214,
      "slug": "air-jordan-white-blue-sneakers",
      "name": "Air Jordan White & Blue Sneakers",
      "category": "Sneakers",
      "subcategory": "Sneakers",
      "brand": "Jordan",
      "price": 0,
      "priceOnRequest": true,
      "compareAt": null,
      "currency": "USD",
      "image": "/images/sneakers/exec-e1e8b78f-58be-474a-8127-cf71d3907f0b_effxa2.png",
      "secondaryImage": "/images/sneakers/exec-05b483e9-a412-49ae-8e7f-a17988769703_ob7wpk.png",
      "gallery": [
        "/images/sneakers/exec-e1e8b78f-58be-474a-8127-cf71d3907f0b_effxa2.png",
        "/images/sneakers/exec-05b483e9-a412-49ae-8e7f-a17988769703_ob7wpk.png",
        "/images/sneakers/exec-db13ee37-70b4-4081-ab05-119d1fa55177_lgorhb.png",
        "/images/sneakers/exec-5bae0b63-f5a5-4286-bce5-64711d17df75_obvuk3.png"
      ],
      "variants": [
        {
          "color": "White / Blue",
          "image": "/images/sneakers/exec-e1e8b78f-58be-474a-8127-cf71d3907f0b_effxa2.png",
          "media": [
            {
              "type": "image",
              "src": "/images/sneakers/exec-e1e8b78f-58be-474a-8127-cf71d3907f0b_effxa2.png"
            },
            {
              "type": "image",
              "src": "/images/sneakers/exec-05b483e9-a412-49ae-8e7f-a17988769703_ob7wpk.png"
            },
            {
              "type": "image",
              "src": "/images/sneakers/exec-db13ee37-70b4-4081-ab05-119d1fa55177_lgorhb.png"
            },
            {
              "type": "image",
              "src": "/images/sneakers/exec-5bae0b63-f5a5-4286-bce5-64711d17df75_obvuk3.png"
            }
          ]
        }
      ],
      "description": "Air Jordan White & Blue Sneakers — matching product photos from the supplied collection.",
      "sizes": [],
      "colors": [
        "White / Blue"
      ],
      "tags": [
        "sneakers",
        "jordan"
      ],
      "inStock": true,
      "placeholder": false,
      "featured": false,
      "newArrival": true,
      "sale": false
    },
    {
      "id": 215,
      "slug": "bape-grey-black-sneakers",
      "name": "BAPE Grey & Black Sneakers",
      "category": "Sneakers",
      "subcategory": "Sneakers",
      "brand": "BAPE",
      "price": 0,
      "priceOnRequest": true,
      "compareAt": null,
      "currency": "USD",
      "image": "/images/sneakers/ChatGPT_Image_Oct_9_2026_05_34_55_AM_nl0lh5.png",
      "secondaryImage": "/images/sneakers/ChatGPT_Image_Oct_9_2026_05_32_52_AM_mreu4b.png",
      "gallery": [
        "/images/sneakers/ChatGPT_Image_Oct_9_2026_05_34_55_AM_nl0lh5.png",
        "/images/sneakers/ChatGPT_Image_Oct_9_2026_05_32_52_AM_mreu4b.png",
        "/images/sneakers/ChatGPT_Image_Oct_9_2026_05_34_01_AM_rehbpb.png",
        "/images/sneakers/ChatGPT_Image_Oct_9_2026_05_31_32_AM_p74lui.png"
      ],
      "variants": [
        {
          "color": "Grey / Black",
          "image": "/images/sneakers/ChatGPT_Image_Oct_9_2026_05_34_55_AM_nl0lh5.png",
          "media": [
            {
              "type": "image",
              "src": "/images/sneakers/ChatGPT_Image_Oct_9_2026_05_34_55_AM_nl0lh5.png"
            },
            {
              "type": "image",
              "src": "/images/sneakers/ChatGPT_Image_Oct_9_2026_05_32_52_AM_mreu4b.png"
            },
            {
              "type": "image",
              "src": "/images/sneakers/ChatGPT_Image_Oct_9_2026_05_34_01_AM_rehbpb.png"
            },
            {
              "type": "image",
              "src": "/images/sneakers/ChatGPT_Image_Oct_9_2026_05_31_32_AM_p74lui.png"
            }
          ]
        }
      ],
      "description": "BAPE Grey & Black Sneakers — matching product photos from the supplied collection.",
      "sizes": [
        "43"
      ],
      "colors": [
        "Grey / Black"
      ],
      "tags": [
        "sneakers",
        "bape"
      ],
      "inStock": true,
      "placeholder": false,
      "featured": false,
      "newArrival": true,
      "sale": false
    },
    {
      "id": 216,
      "slug": "bape-black-white-sneakers",
      "name": "BAPE Black & White Sneakers",
      "category": "Sneakers",
      "subcategory": "Sneakers",
      "brand": "BAPE",
      "price": 0,
      "priceOnRequest": true,
      "compareAt": null,
      "currency": "USD",
      "image": "/images/sneakers/download_t4mwnu.jpg",
      "secondaryImage": "/images/sneakers/ChatGPT_Image_Oct_9_2026_05_43_51_AM_tzmekj.png",
      "gallery": [
        "/images/sneakers/download_t4mwnu.jpg",
        "/images/sneakers/ChatGPT_Image_Oct_9_2026_05_43_51_AM_tzmekj.png",
        "/images/sneakers/ChatGPT_Image_Oct_9_2026_05_44_07_AM_zhfal7.png",
        "/images/sneakers/ChatGPT_Image_Oct_9_2026_05_44_01_AM_rakcxi.png"
      ],
      "variants": [
        {
          "color": "Black / White",
          "image": "/images/sneakers/download_t4mwnu.jpg",
          "media": [
            {
              "type": "image",
              "src": "/images/sneakers/download_t4mwnu.jpg"
            },
            {
              "type": "image",
              "src": "/images/sneakers/ChatGPT_Image_Oct_9_2026_05_43_51_AM_tzmekj.png"
            },
            {
              "type": "image",
              "src": "/images/sneakers/ChatGPT_Image_Oct_9_2026_05_44_07_AM_zhfal7.png"
            },
            {
              "type": "image",
              "src": "/images/sneakers/ChatGPT_Image_Oct_9_2026_05_44_01_AM_rakcxi.png"
            }
          ]
        }
      ],
      "description": "BAPE Black & White Sneakers — matching product photos from the supplied collection.",
      "sizes": [],
      "colors": [
        "Black / White"
      ],
      "tags": [
        "sneakers",
        "bape"
      ],
      "inStock": true,
      "placeholder": false,
      "featured": false,
      "newArrival": true,
      "sale": false
    },
    {
      "id": 217,
      "slug": "converse-black-white-high-top-sneakers",
      "name": "Converse Black & White High-Top Sneakers",
      "category": "Sneakers",
      "subcategory": "Sneakers",
      "brand": "Converse",
      "price": 0,
      "priceOnRequest": true,
      "compareAt": null,
      "currency": "USD",
      "image": "/images/sneakers/ChatGPT_Image_Oct_9_2026_05_47_14_AM_xgqwhe.png",
      "secondaryImage": "/images/sneakers/ChatGPT_Image_Oct_9_2026_05_47_04_AM_ysvr2h.png",
      "gallery": [
        "/images/sneakers/ChatGPT_Image_Oct_9_2026_05_47_14_AM_xgqwhe.png",
        "/images/sneakers/ChatGPT_Image_Oct_9_2026_05_47_04_AM_ysvr2h.png",
        "/images/sneakers/ChatGPT_Image_Oct_9_2026_05_47_59_AM_hjl3k4.png"
      ],
      "variants": [
        {
          "color": "Black / White",
          "image": "/images/sneakers/ChatGPT_Image_Oct_9_2026_05_47_14_AM_xgqwhe.png",
          "media": [
            {
              "type": "image",
              "src": "/images/sneakers/ChatGPT_Image_Oct_9_2026_05_47_14_AM_xgqwhe.png"
            },
            {
              "type": "image",
              "src": "/images/sneakers/ChatGPT_Image_Oct_9_2026_05_47_04_AM_ysvr2h.png"
            },
            {
              "type": "image",
              "src": "/images/sneakers/ChatGPT_Image_Oct_9_2026_05_47_59_AM_hjl3k4.png"
            }
          ]
        }
      ],
      "description": "Converse Black & White High-Top Sneakers — matching product photos from the supplied collection.",
      "sizes": [],
      "colors": [
        "Black / White"
      ],
      "tags": [
        "sneakers",
        "converse"
      ],
      "inStock": true,
      "placeholder": false,
      "featured": false,
      "newArrival": true,
      "sale": false
    },
    {
      "id": 218,
      "slug": "golden-goose-white-brown-sneakers",
      "name": "Golden Goose White & Brown Sneakers",
      "category": "Sneakers",
      "subcategory": "Sneakers",
      "brand": "Golden Goose",
      "price": 0,
      "priceOnRequest": true,
      "compareAt": null,
      "currency": "USD",
      "image": "/images/sneakers/exec-8acaf730-be4a-4fd5-9d3c-140c0bd7893e_utfcwy.png",
      "secondaryImage": "/images/sneakers/exec-edb8d939-1db5-4aaa-bc2c-0d6668bed252_trrj74.png",
      "gallery": [
        "/images/sneakers/exec-8acaf730-be4a-4fd5-9d3c-140c0bd7893e_utfcwy.png",
        "/images/sneakers/exec-edb8d939-1db5-4aaa-bc2c-0d6668bed252_trrj74.png",
        "/images/sneakers/ChatGPT_Image_Oct_9_2026_05_54_30_AM_j8ctsi.png",
        "/images/sneakers/ChatGPT_Image_Oct_9_2026_05_52_10_AM_gnltla.png"
      ],
      "variants": [
        {
          "color": "White / Brown",
          "image": "/images/sneakers/exec-8acaf730-be4a-4fd5-9d3c-140c0bd7893e_utfcwy.png",
          "media": [
            {
              "type": "image",
              "src": "/images/sneakers/exec-8acaf730-be4a-4fd5-9d3c-140c0bd7893e_utfcwy.png"
            },
            {
              "type": "image",
              "src": "/images/sneakers/exec-edb8d939-1db5-4aaa-bc2c-0d6668bed252_trrj74.png"
            },
            {
              "type": "image",
              "src": "/images/sneakers/ChatGPT_Image_Oct_9_2026_05_54_30_AM_j8ctsi.png"
            },
            {
              "type": "image",
              "src": "/images/sneakers/ChatGPT_Image_Oct_9_2026_05_52_10_AM_gnltla.png"
            }
          ]
        }
      ],
      "description": "Golden Goose White & Brown Sneakers — matching product photos from the supplied collection.",
      "sizes": [],
      "colors": [
        "White / Brown"
      ],
      "tags": [
        "sneakers",
        "golden goose"
      ],
      "inStock": true,
      "placeholder": false,
      "featured": false,
      "newArrival": true,
      "sale": false
    },
    {
      "id": 219,
      "slug": "nike-cream-army-green-sneakers",
      "name": "Nike Cream & Army Green Sneakers",
      "category": "Sneakers",
      "subcategory": "Sneakers",
      "brand": "Nike",
      "price": 0,
      "priceOnRequest": true,
      "compareAt": null,
      "currency": "USD",
      "image": "/images/sneakers/ChatGPT_Image_Oct_9_2026_06_08_54_AM_rv4ckk.png",
      "secondaryImage": "/images/sneakers/ChatGPT_Image_Oct_9_2026_06_07_31_AM_osylae.png",
      "gallery": [
        "/images/sneakers/ChatGPT_Image_Oct_9_2026_06_08_54_AM_rv4ckk.png",
        "/images/sneakers/ChatGPT_Image_Oct_9_2026_06_07_31_AM_osylae.png",
        "/images/sneakers/ChatGPT_Image_Oct_9_2026_06_07_21_AM_nxrv7x.png"
      ],
      "variants": [
        {
          "color": "Cream / Army Green",
          "image": "/images/sneakers/ChatGPT_Image_Oct_9_2026_06_08_54_AM_rv4ckk.png",
          "media": [
            {
              "type": "image",
              "src": "/images/sneakers/ChatGPT_Image_Oct_9_2026_06_08_54_AM_rv4ckk.png"
            },
            {
              "type": "image",
              "src": "/images/sneakers/ChatGPT_Image_Oct_9_2026_06_07_31_AM_osylae.png"
            },
            {
              "type": "image",
              "src": "/images/sneakers/ChatGPT_Image_Oct_9_2026_06_07_21_AM_nxrv7x.png"
            }
          ]
        }
      ],
      "description": "Nike Cream & Army Green Sneakers — matching product photos from the supplied collection.",
      "sizes": [
        "44"
      ],
      "colors": [
        "Cream / Army Green"
      ],
      "tags": [
        "sneakers",
        "nike"
      ],
      "inStock": true,
      "placeholder": false,
      "featured": false,
      "newArrival": true,
      "sale": false
    },
    {
      "id": 220,
      "slug": "nike-white-blue-sneakers",
      "name": "Nike White & Blue Sneakers",
      "category": "Sneakers",
      "subcategory": "Sneakers",
      "brand": "Nike",
      "price": 0,
      "priceOnRequest": true,
      "compareAt": null,
      "currency": "USD",
      "image": "/images/sneakers/ChatGPT_Image_Oct_9_2026_06_12_25_AM_lavcnb.png",
      "secondaryImage": "/images/sneakers/ChatGPT_Image_Oct_9_2026_06_12_35_AM_zrwl6x.png",
      "gallery": [
        "/images/sneakers/ChatGPT_Image_Oct_9_2026_06_12_25_AM_lavcnb.png",
        "/images/sneakers/ChatGPT_Image_Oct_9_2026_06_12_35_AM_zrwl6x.png",
        "/images/sneakers/ChatGPT_Image_Oct_9_2026_06_13_49_AM_a36rp7.png",
        "/images/sneakers/ChatGPT_Image_Oct_9_2026_06_14_18_AM_jwrqwx.png"
      ],
      "variants": [
        {
          "color": "White / Blue",
          "image": "/images/sneakers/ChatGPT_Image_Oct_9_2026_06_12_25_AM_lavcnb.png",
          "media": [
            {
              "type": "image",
              "src": "/images/sneakers/ChatGPT_Image_Oct_9_2026_06_12_25_AM_lavcnb.png"
            },
            {
              "type": "image",
              "src": "/images/sneakers/ChatGPT_Image_Oct_9_2026_06_12_35_AM_zrwl6x.png"
            },
            {
              "type": "image",
              "src": "/images/sneakers/ChatGPT_Image_Oct_9_2026_06_13_49_AM_a36rp7.png"
            },
            {
              "type": "image",
              "src": "/images/sneakers/ChatGPT_Image_Oct_9_2026_06_14_18_AM_jwrqwx.png"
            }
          ]
        }
      ],
      "description": "Nike White & Blue Sneakers — matching product photos from the supplied collection.",
      "sizes": [
        "45"
      ],
      "colors": [
        "White / Blue"
      ],
      "tags": [
        "sneakers",
        "nike"
      ],
      "inStock": true,
      "placeholder": false,
      "featured": false,
      "newArrival": true,
      "sale": false
    },
    {
      "id": 221,
      "slug": "nike-brown-white-sneakers",
      "name": "Nike Brown & White Sneakers",
      "category": "Sneakers",
      "subcategory": "Sneakers",
      "brand": "Nike",
      "price": 0,
      "priceOnRequest": true,
      "compareAt": null,
      "currency": "USD",
      "image": "/images/sneakers/ChatGPT_Image_Oct_9_2026_06_22_04_AM_jdvktj.png",
      "secondaryImage": "/images/sneakers/ChatGPT_Image_Oct_9_2026_06_18_58_AM_goq3nw.png",
      "gallery": [
        "/images/sneakers/ChatGPT_Image_Oct_9_2026_06_22_04_AM_jdvktj.png",
        "/images/sneakers/ChatGPT_Image_Oct_9_2026_06_18_58_AM_goq3nw.png",
        "/images/sneakers/ChatGPT_Image_Oct_9_2026_06_18_03_AM_xwlvvp.png",
        "/images/sneakers/ChatGPT_Image_Oct_9_2026_06_21_44_AM_haocbn.png"
      ],
      "variants": [
        {
          "color": "Brown / White",
          "image": "/images/sneakers/ChatGPT_Image_Oct_9_2026_06_22_04_AM_jdvktj.png",
          "media": [
            {
              "type": "image",
              "src": "/images/sneakers/ChatGPT_Image_Oct_9_2026_06_22_04_AM_jdvktj.png"
            },
            {
              "type": "image",
              "src": "/images/sneakers/ChatGPT_Image_Oct_9_2026_06_18_58_AM_goq3nw.png"
            },
            {
              "type": "image",
              "src": "/images/sneakers/ChatGPT_Image_Oct_9_2026_06_18_03_AM_xwlvvp.png"
            },
            {
              "type": "image",
              "src": "/images/sneakers/ChatGPT_Image_Oct_9_2026_06_21_44_AM_haocbn.png"
            }
          ]
        }
      ],
      "description": "Nike Brown & White Sneakers — matching product photos from the supplied collection.",
      "sizes": [],
      "colors": [
        "Brown / White"
      ],
      "tags": [
        "sneakers",
        "nike"
      ],
      "inStock": true,
      "placeholder": false,
      "featured": false,
      "newArrival": true,
      "sale": false
    },
    {
      "id": 222,
      "slug": "nike-navy-blue-white-sneakers",
      "name": "Nike Navy Blue & White Sneakers",
      "category": "Sneakers",
      "subcategory": "Sneakers",
      "brand": "Nike",
      "price": 0,
      "priceOnRequest": true,
      "compareAt": null,
      "currency": "USD",
      "image": "/images/sneakers/ChatGPT_Image_Oct_9_2026_06_27_30_AM_jmchua.png",
      "secondaryImage": "/images/sneakers/ChatGPT_Image_Oct_9_2026_06_28_20_AM_jszjwc.png",
      "gallery": [
        "/images/sneakers/ChatGPT_Image_Oct_9_2026_06_27_30_AM_jmchua.png",
        "/images/sneakers/ChatGPT_Image_Oct_9_2026_06_28_20_AM_jszjwc.png",
        "/images/sneakers/ChatGPT_Image_Oct_9_2026_06_26_06_AM_ja3zzz.png"
      ],
      "variants": [
        {
          "color": "Navy Blue / White",
          "image": "/images/sneakers/ChatGPT_Image_Oct_9_2026_06_27_30_AM_jmchua.png",
          "media": [
            {
              "type": "image",
              "src": "/images/sneakers/ChatGPT_Image_Oct_9_2026_06_27_30_AM_jmchua.png"
            },
            {
              "type": "image",
              "src": "/images/sneakers/ChatGPT_Image_Oct_9_2026_06_28_20_AM_jszjwc.png"
            },
            {
              "type": "image",
              "src": "/images/sneakers/ChatGPT_Image_Oct_9_2026_06_26_06_AM_ja3zzz.png"
            }
          ]
        }
      ],
      "description": "Nike Navy Blue & White Sneakers — matching product photos from the supplied collection.",
      "sizes": [],
      "colors": [
        "Navy Blue / White"
      ],
      "tags": [
        "sneakers",
        "nike"
      ],
      "inStock": true,
      "placeholder": false,
      "featured": false,
      "newArrival": true,
      "sale": false
    },
    {
      "id": 223,
      "slug": "nike-white-grey-sneakers",
      "name": "Nike White & Grey Sneakers",
      "category": "Sneakers",
      "subcategory": "Sneakers",
      "brand": "Nike",
      "price": 0,
      "priceOnRequest": true,
      "compareAt": null,
      "currency": "USD",
      "image": "/images/sneakers/ChatGPT_Image_Oct_9_2026_06_32_54_AM_krgqhv.png",
      "secondaryImage": "/images/sneakers/ChatGPT_Image_Oct_9_2026_06_34_41_AM_zvjltg.png",
      "gallery": [
        "/images/sneakers/ChatGPT_Image_Oct_9_2026_06_32_54_AM_krgqhv.png",
        "/images/sneakers/ChatGPT_Image_Oct_9_2026_06_34_41_AM_zvjltg.png",
        "/images/sneakers/ChatGPT_Image_Oct_9_2026_06_33_10_AM_iz7pyu.png",
        "/images/sneakers/ChatGPT_Image_Oct_9_2026_06_40_36_AM_xefpyk.png"
      ],
      "variants": [
        {
          "color": "White / Grey",
          "image": "/images/sneakers/ChatGPT_Image_Oct_9_2026_06_32_54_AM_krgqhv.png",
          "media": [
            {
              "type": "image",
              "src": "/images/sneakers/ChatGPT_Image_Oct_9_2026_06_32_54_AM_krgqhv.png"
            },
            {
              "type": "image",
              "src": "/images/sneakers/ChatGPT_Image_Oct_9_2026_06_34_41_AM_zvjltg.png"
            },
            {
              "type": "image",
              "src": "/images/sneakers/ChatGPT_Image_Oct_9_2026_06_33_10_AM_iz7pyu.png"
            },
            {
              "type": "image",
              "src": "/images/sneakers/ChatGPT_Image_Oct_9_2026_06_40_36_AM_xefpyk.png"
            }
          ]
        }
      ],
      "description": "Nike White & Grey Sneakers — matching product photos from the supplied collection.",
      "sizes": [],
      "colors": [
        "White / Grey"
      ],
      "tags": [
        "sneakers",
        "nike"
      ],
      "inStock": true,
      "placeholder": false,
      "featured": false,
      "newArrival": true,
      "sale": false
    }
  ],
  fragrance: FRAGRANCE_PRODUCTS,
  accessories: [
    makeProduct({ id: 151, slug: 'accessory-edit-1', name: 'Fine Line', category: 'Accessories', subcategory: 'Jewellery', price: 78, imageUrl: 'photo-1515562141207-7a88fb7ce338', description: 'A small finishing detail with a clear point of view.', sizes: ['OS'] }),
    makeProduct({ id: 152, slug: 'accessory-edit-2', name: 'Soft Gold', category: 'Accessories', subcategory: 'Jewellery', price: 86, imageUrl: '/images/accessory-gold-chain.webp', description: 'A warm accent made for everyday wear.', sizes: ['OS'] }),
    makeProduct({ id: 153, slug: 'accessory-edit-3', name: 'The Detail', category: 'Accessories', subcategory: 'Jewellery', price: 92, imageUrl: 'photo-1611652022419-a9419f74343d', description: 'The final detail that makes the whole look feel intentional.', sizes: ['OS'] }),
  ],
}
