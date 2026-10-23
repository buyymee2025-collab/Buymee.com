// Owner-approved rebuild: retain the first eight cards, retire the other legacy listings,
// and append visually matched Cloudinary styles. Galleries start with the side view.
// Retained product 129 has only a front view available; do not invent missing angles.
export const RETAINED_SNEAKER_IDS = [47, 126, 127, 128, 48, 49, 50, 129]
const retiredSneakerIds = new Set(["51", "52", "130", "131", "53", "54", "55", "132", "56", "57", "58", "133", "134", "59", "135", "136", "60", "61", "62", "63", "64", "137", "65", "66", "138", "139", "140", "141", "142", "143", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "100", "101", "102", "103", "104", "105", "106", "107", "108", "109"])
const retainedStudioViews = {
  "47": [
    "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4484_edited",
    "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4483_edited",
    "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4485_edited",
    "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4486_edited"
  ],
  "126": [
    "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4458_edited",
    "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4457_edited",
    "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4459_edited",
    "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4460_edited"
  ],
  "127": [
    "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4429_edited",
    "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4428_edited",
    "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4430_4_edited",
    "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4430_edited"
  ],
  "128": [
    "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4412_edited",
    "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4411_edited",
    "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4413_edited",
    "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4414_edited"
  ],
  "48": [
    "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4298_edited",
    "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4300_edited",
    "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4299_edited",
    "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4301_edited"
  ],
  "49": [
    "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4396_edited",
    "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4395_edited",
    "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4397_edited",
    "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4398_edited"
  ],
  "50": [
    "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4421_edited",
    "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4420_edited",
    "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4422_edited",
    "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4423_edited"
  ],
  "129": [
    "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4333_edited"
  ]
}

export function isRetiredSneaker(product) {
  return product.category === 'Sneakers' && retiredSneakerIds.has(String(product.id))
}

export function refreshRetainedSneaker(product) {
  const gallery = product.category === 'Sneakers' && retainedStudioViews[product.id]
  if (!gallery) return product
  const color = product.colors?.[0] || 'As shown'
  const image = gallery[0]
  const media = gallery.map(src => ({ type: 'image', src, color }))
  return { ...product, image, secondaryImage: gallery[1] || image,
    gallery, images: gallery, media,
    variants: [{ ...product.variants?.[0], color, image, media }],
    mediaRevision: 'sneakers-rebuild-2026-10-23' }
}

export const NEW_STUDIO_SNEAKERS = [
  {
    "productCode": "SN009",
    "category": "Sneakers",
    "brand": "BUYYMEE.com",
    "price": null,
    "priceOnRequest": true,
    "compareAt": null,
    "currency": "USD",
    "description": "NIKE RUNNING SNEAKERS \u2014 GREEN / WHITE. CONTACT BUYYMEE FOR AVAILABLE SIZES AND PRICE.",
    "sizes": [],
    "inStock": true,
    "placeholder": false,
    "featured": false,
    "sale": false,
    "slug": "sneakers-studio-sn009",
    "familyName": "NIKE RUNNING SNEAKERS \u2014 GREEN / WHITE",
    "subcategory": "Sneakers",
    "tags": [
      "footwear",
      "sneakers",
      "sneakers"
    ],
    "newArrival": true,
    "id": 60001,
    "parentProductId": 60001,
    "name": "NIKE RUNNING SNEAKERS \u2014 GREEN / WHITE",
    "image": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4305_edited",
    "secondaryImage": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4303_edited",
    "gallery": [
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4305_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4303_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4306_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4307_edited"
    ],
    "media": [
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4305_edited",
        "color": "Green / White"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4303_edited",
        "color": "Green / White"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4306_edited",
        "color": "Green / White"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4307_edited",
        "color": "Green / White"
      }
    ],
    "variants": [
      {
        "color": "Green / White",
        "image": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4305_edited",
        "media": [
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4305_edited",
            "color": "Green / White"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4303_edited",
            "color": "Green / White"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4306_edited",
            "color": "Green / White"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4307_edited",
            "color": "Green / White"
          }
        ]
      }
    ],
    "colors": [
      "Green / White"
    ],
    "images": [
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4305_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4303_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4306_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4307_edited"
    ],
    "mediaRevision": "sneakers-rebuild-2026-10-23"
  },
  {
    "productCode": "SN010",
    "category": "Sneakers",
    "brand": "BUYYMEE.com",
    "price": null,
    "priceOnRequest": true,
    "compareAt": null,
    "currency": "USD",
    "description": "CONVERSE LOW-TOP SNEAKERS \u2014 BLACK / WHITE. CONTACT BUYYMEE FOR AVAILABLE SIZES AND PRICE.",
    "sizes": [],
    "inStock": true,
    "placeholder": false,
    "featured": false,
    "sale": false,
    "slug": "sneakers-studio-sn010",
    "familyName": "CONVERSE LOW-TOP SNEAKERS",
    "subcategory": "Sneakers",
    "tags": [
      "footwear",
      "sneakers",
      "sneakers"
    ],
    "newArrival": true,
    "id": 60002,
    "parentProductId": 60002,
    "name": "CONVERSE LOW-TOP SNEAKERS \u2014 BLACK / WHITE",
    "image": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4309_edited",
    "secondaryImage": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4308_edited",
    "gallery": [
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4309_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4308_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4310_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4311_edited"
    ],
    "media": [
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4309_edited",
        "color": "Black / White"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4308_edited",
        "color": "Black / White"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4310_edited",
        "color": "Black / White"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4311_edited",
        "color": "Black / White"
      }
    ],
    "variants": [
      {
        "color": "Black / White",
        "image": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4309_edited",
        "media": [
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4309_edited",
            "color": "Black / White"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4308_edited",
            "color": "Black / White"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4310_edited",
            "color": "Black / White"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4311_edited",
            "color": "Black / White"
          }
        ]
      }
    ],
    "colors": [
      "Black / White"
    ],
    "images": [
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4309_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4308_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4310_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4311_edited"
    ],
    "mediaRevision": "sneakers-rebuild-2026-10-23"
  },
  {
    "productCode": "SN011",
    "category": "Sneakers",
    "brand": "BUYYMEE.com",
    "price": null,
    "priceOnRequest": true,
    "compareAt": null,
    "currency": "USD",
    "description": "NIKE AIR MAX PLUS SNEAKERS \u2014 BLUE / BLACK. CONTACT BUYYMEE FOR AVAILABLE SIZES AND PRICE.",
    "sizes": [],
    "inStock": true,
    "placeholder": false,
    "featured": false,
    "sale": false,
    "slug": "sneakers-studio-sn011",
    "familyName": "NIKE AIR MAX PLUS SNEAKERS",
    "subcategory": "Sneakers",
    "tags": [
      "footwear",
      "sneakers",
      "sneakers"
    ],
    "newArrival": true,
    "id": 60003,
    "parentProductId": 60003,
    "name": "NIKE AIR MAX PLUS SNEAKERS \u2014 BLUE / BLACK",
    "image": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4314_edited",
    "secondaryImage": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4312_edited",
    "gallery": [
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4314_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4312_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4315_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4316_4_edited"
    ],
    "media": [
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4314_edited",
        "color": "Blue / Black"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4312_edited",
        "color": "Blue / Black"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4315_edited",
        "color": "Blue / Black"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4316_4_edited",
        "color": "Blue / Black"
      }
    ],
    "variants": [
      {
        "color": "Blue / Black",
        "image": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4314_edited",
        "media": [
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4314_edited",
            "color": "Blue / Black"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4312_edited",
            "color": "Blue / Black"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4315_edited",
            "color": "Blue / Black"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4316_4_edited",
            "color": "Blue / Black"
          }
        ]
      }
    ],
    "colors": [
      "Blue / Black"
    ],
    "images": [
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4314_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4312_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4315_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4316_4_edited"
    ],
    "mediaRevision": "sneakers-rebuild-2026-10-23"
  },
  {
    "productCode": "SN012",
    "category": "Sneakers",
    "brand": "BUYYMEE.com",
    "price": null,
    "priceOnRequest": true,
    "compareAt": null,
    "currency": "USD",
    "description": "ADIDAS LOW-TOP SNEAKERS \u2014 WHITE / RED. CONTACT BUYYMEE FOR AVAILABLE SIZES AND PRICE.",
    "sizes": [],
    "inStock": true,
    "placeholder": false,
    "featured": false,
    "sale": false,
    "slug": "sneakers-studio-sn012",
    "familyName": "ADIDAS LOW-TOP SNEAKERS",
    "subcategory": "Sneakers",
    "tags": [
      "footwear",
      "sneakers",
      "sneakers"
    ],
    "newArrival": true,
    "id": 60004,
    "parentProductId": 60004,
    "name": "ADIDAS LOW-TOP SNEAKERS \u2014 WHITE / RED",
    "image": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4400_edited",
    "secondaryImage": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4399_edited",
    "gallery": [
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4400_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4399_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4401_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4402_edited"
    ],
    "media": [
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4400_edited",
        "color": "White / Red"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4399_edited",
        "color": "White / Red"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4401_edited",
        "color": "White / Red"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4402_edited",
        "color": "White / Red"
      }
    ],
    "variants": [
      {
        "color": "White / Red",
        "image": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4400_edited",
        "media": [
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4400_edited",
            "color": "White / Red"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4399_edited",
            "color": "White / Red"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4401_edited",
            "color": "White / Red"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4402_edited",
            "color": "White / Red"
          }
        ]
      }
    ],
    "colors": [
      "White / Red"
    ],
    "images": [
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4400_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4399_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4401_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4402_edited"
    ],
    "mediaRevision": "sneakers-rebuild-2026-10-23"
  },
  {
    "productCode": "SN013",
    "category": "Sneakers",
    "brand": "BUYYMEE.com",
    "price": null,
    "priceOnRequest": true,
    "compareAt": null,
    "currency": "USD",
    "description": "JORDAN 4 SNEAKERS \u2014 BLACK. CONTACT BUYYMEE FOR AVAILABLE SIZES AND PRICE.",
    "sizes": [],
    "inStock": true,
    "placeholder": false,
    "featured": false,
    "sale": false,
    "slug": "sneakers-studio-sn013",
    "familyName": "JORDAN 4 SNEAKERS",
    "subcategory": "Sneakers",
    "tags": [
      "footwear",
      "sneakers",
      "sneakers"
    ],
    "newArrival": true,
    "id": 60005,
    "parentProductId": 60005,
    "name": "JORDAN 4 SNEAKERS \u2014 BLACK",
    "image": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4372_edited",
    "secondaryImage": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4371_edited",
    "gallery": [
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4372_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4371_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4373_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4374_edited"
    ],
    "media": [
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4372_edited",
        "color": "Black"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4371_edited",
        "color": "Black"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4373_edited",
        "color": "Black"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4374_edited",
        "color": "Black"
      }
    ],
    "variants": [
      {
        "color": "Black",
        "image": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4372_edited",
        "media": [
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4372_edited",
            "color": "Black"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4371_edited",
            "color": "Black"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4373_edited",
            "color": "Black"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4374_edited",
            "color": "Black"
          }
        ]
      }
    ],
    "colors": [
      "Black"
    ],
    "images": [
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4372_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4371_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4373_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4374_edited"
    ],
    "mediaRevision": "sneakers-rebuild-2026-10-23"
  },
  {
    "productCode": "SN014",
    "category": "Sneakers",
    "brand": "BUYYMEE.com",
    "price": null,
    "priceOnRequest": true,
    "compareAt": null,
    "currency": "USD",
    "description": "NIKE AIR MAX PLUS SNEAKERS \u2014 BLACK. CONTACT BUYYMEE FOR AVAILABLE SIZES AND PRICE.",
    "sizes": [],
    "inStock": true,
    "placeholder": false,
    "featured": false,
    "sale": false,
    "slug": "sneakers-studio-sn014",
    "familyName": "NIKE AIR MAX PLUS SNEAKERS",
    "subcategory": "Sneakers",
    "tags": [
      "footwear",
      "sneakers",
      "sneakers"
    ],
    "newArrival": true,
    "id": 60006,
    "parentProductId": 60006,
    "name": "NIKE AIR MAX PLUS SNEAKERS \u2014 BLACK",
    "image": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4392_edited",
    "secondaryImage": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4391_edited",
    "gallery": [
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4392_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4391_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4393_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4394_edited"
    ],
    "media": [
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4392_edited",
        "color": "Black"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4391_edited",
        "color": "Black"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4393_edited",
        "color": "Black"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4394_edited",
        "color": "Black"
      }
    ],
    "variants": [
      {
        "color": "Black",
        "image": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4392_edited",
        "media": [
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4392_edited",
            "color": "Black"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4391_edited",
            "color": "Black"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4393_edited",
            "color": "Black"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4394_edited",
            "color": "Black"
          }
        ]
      }
    ],
    "colors": [
      "Black"
    ],
    "images": [
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4392_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4391_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4393_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4394_edited"
    ],
    "mediaRevision": "sneakers-rebuild-2026-10-23"
  },
  {
    "productCode": "SN015",
    "category": "Sneakers",
    "brand": "BUYYMEE.com",
    "price": null,
    "priceOnRequest": true,
    "compareAt": null,
    "currency": "USD",
    "description": "NIKE BASKETBALL SNEAKERS \u2014 GREEN / YELLOW. CONTACT BUYYMEE FOR AVAILABLE SIZES AND PRICE.",
    "sizes": [],
    "inStock": true,
    "placeholder": false,
    "featured": false,
    "sale": false,
    "slug": "sneakers-studio-sn015",
    "familyName": "NIKE BASKETBALL SNEAKERS \u2014 GREEN / YELLOW",
    "subcategory": "Sneakers",
    "tags": [
      "footwear",
      "sneakers",
      "sneakers"
    ],
    "newArrival": true,
    "id": 60007,
    "parentProductId": 60007,
    "name": "NIKE BASKETBALL SNEAKERS \u2014 GREEN / YELLOW",
    "image": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4380_edited",
    "secondaryImage": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4379_edited",
    "gallery": [
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4380_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4379_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4381_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4382_edited"
    ],
    "media": [
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4380_edited",
        "color": "Green / Yellow"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4379_edited",
        "color": "Green / Yellow"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4381_edited",
        "color": "Green / Yellow"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4382_edited",
        "color": "Green / Yellow"
      }
    ],
    "variants": [
      {
        "color": "Green / Yellow",
        "image": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4380_edited",
        "media": [
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4380_edited",
            "color": "Green / Yellow"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4379_edited",
            "color": "Green / Yellow"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4381_edited",
            "color": "Green / Yellow"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4382_edited",
            "color": "Green / Yellow"
          }
        ]
      }
    ],
    "colors": [
      "Green / Yellow"
    ],
    "images": [
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4380_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4379_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4381_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4382_edited"
    ],
    "mediaRevision": "sneakers-rebuild-2026-10-23"
  },
  {
    "productCode": "SN016",
    "category": "Sneakers",
    "brand": "BUYYMEE.com",
    "price": null,
    "priceOnRequest": true,
    "compareAt": null,
    "currency": "USD",
    "description": "JORDAN 4 SNEAKERS \u2014 WHITE / GREY. CONTACT BUYYMEE FOR AVAILABLE SIZES AND PRICE.",
    "sizes": [],
    "inStock": true,
    "placeholder": false,
    "featured": false,
    "sale": false,
    "slug": "sneakers-studio-sn016",
    "familyName": "JORDAN 4 SNEAKERS",
    "subcategory": "Sneakers",
    "tags": [
      "footwear",
      "sneakers",
      "sneakers"
    ],
    "newArrival": true,
    "id": 60008,
    "parentProductId": 60008,
    "name": "JORDAN 4 SNEAKERS \u2014 WHITE / GREY",
    "image": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4385_edited",
    "secondaryImage": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4384_edited",
    "gallery": [
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4385_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4384_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4383_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4386_edited"
    ],
    "media": [
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4385_edited",
        "color": "White / Grey"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4384_edited",
        "color": "White / Grey"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4383_edited",
        "color": "White / Grey"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4386_edited",
        "color": "White / Grey"
      }
    ],
    "variants": [
      {
        "color": "White / Grey",
        "image": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4385_edited",
        "media": [
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4385_edited",
            "color": "White / Grey"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4384_edited",
            "color": "White / Grey"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4383_edited",
            "color": "White / Grey"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4386_edited",
            "color": "White / Grey"
          }
        ]
      }
    ],
    "colors": [
      "White / Grey"
    ],
    "images": [
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4385_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4384_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4383_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4386_edited"
    ],
    "mediaRevision": "sneakers-rebuild-2026-10-23"
  },
  {
    "productCode": "SN017",
    "category": "Sneakers",
    "brand": "BUYYMEE.com",
    "price": null,
    "priceOnRequest": true,
    "compareAt": null,
    "currency": "USD",
    "description": "JORDAN 4 SNEAKERS \u2014 WHITE / BLACK. CONTACT BUYYMEE FOR AVAILABLE SIZES AND PRICE.",
    "sizes": [],
    "inStock": true,
    "placeholder": false,
    "featured": false,
    "sale": false,
    "slug": "sneakers-studio-sn017",
    "familyName": "JORDAN 4 SNEAKERS",
    "subcategory": "Sneakers",
    "tags": [
      "footwear",
      "sneakers",
      "sneakers"
    ],
    "newArrival": true,
    "id": 60009,
    "parentProductId": 60009,
    "name": "JORDAN 4 SNEAKERS \u2014 WHITE / BLACK",
    "image": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4388_edited",
    "secondaryImage": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4387_edited",
    "gallery": [
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4388_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4387_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4389_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4390_edited"
    ],
    "media": [
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4388_edited",
        "color": "White / Black"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4387_edited",
        "color": "White / Black"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4389_edited",
        "color": "White / Black"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4390_edited",
        "color": "White / Black"
      }
    ],
    "variants": [
      {
        "color": "White / Black",
        "image": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4388_edited",
        "media": [
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4388_edited",
            "color": "White / Black"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4387_edited",
            "color": "White / Black"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4389_edited",
            "color": "White / Black"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4390_edited",
            "color": "White / Black"
          }
        ]
      }
    ],
    "colors": [
      "White / Black"
    ],
    "images": [
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4388_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4387_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4389_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4390_edited"
    ],
    "mediaRevision": "sneakers-rebuild-2026-10-23"
  },
  {
    "productCode": "SN018",
    "category": "Sneakers",
    "brand": "BUYYMEE.com",
    "price": null,
    "priceOnRequest": true,
    "compareAt": null,
    "currency": "USD",
    "description": "NIKE BUBBLE-SOLE SNEAKERS \u2014 BLACK. CONTACT BUYYMEE FOR AVAILABLE SIZES AND PRICE.",
    "sizes": [],
    "inStock": true,
    "placeholder": false,
    "featured": false,
    "sale": false,
    "slug": "sneakers-studio-sn018",
    "familyName": "NIKE BUBBLE-SOLE SNEAKERS",
    "subcategory": "Sneakers",
    "tags": [
      "footwear",
      "sneakers",
      "sneakers"
    ],
    "newArrival": true,
    "id": 60010,
    "parentProductId": 60010,
    "name": "NIKE BUBBLE-SOLE SNEAKERS \u2014 BLACK",
    "image": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4404_edited",
    "secondaryImage": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4403_edited",
    "gallery": [
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4404_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4403_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4405_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4406_edited"
    ],
    "media": [
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4404_edited",
        "color": "Black"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4403_edited",
        "color": "Black"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4405_edited",
        "color": "Black"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4406_edited",
        "color": "Black"
      }
    ],
    "variants": [
      {
        "color": "Black",
        "image": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4404_edited",
        "media": [
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4404_edited",
            "color": "Black"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4403_edited",
            "color": "Black"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4405_edited",
            "color": "Black"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4406_edited",
            "color": "Black"
          }
        ]
      }
    ],
    "colors": [
      "Black"
    ],
    "images": [
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4404_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4403_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4405_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4406_edited"
    ],
    "mediaRevision": "sneakers-rebuild-2026-10-23"
  },
  {
    "productCode": "SN019",
    "category": "Sneakers",
    "brand": "BUYYMEE.com",
    "price": null,
    "priceOnRequest": true,
    "compareAt": null,
    "currency": "USD",
    "description": "NIKE AIR MAX PLUS SNEAKERS \u2014 RED / BLACK. CONTACT BUYYMEE FOR AVAILABLE SIZES AND PRICE.",
    "sizes": [],
    "inStock": true,
    "placeholder": false,
    "featured": false,
    "sale": false,
    "slug": "sneakers-studio-sn019",
    "familyName": "NIKE AIR MAX PLUS SNEAKERS",
    "subcategory": "Sneakers",
    "tags": [
      "footwear",
      "sneakers",
      "sneakers"
    ],
    "newArrival": true,
    "id": 60011,
    "parentProductId": 60011,
    "name": "NIKE AIR MAX PLUS SNEAKERS \u2014 RED / BLACK",
    "image": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4408_edited",
    "secondaryImage": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4407_edited",
    "gallery": [
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4408_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4407_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4409_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4410_edited"
    ],
    "media": [
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4408_edited",
        "color": "Red / Black"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4407_edited",
        "color": "Red / Black"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4409_edited",
        "color": "Red / Black"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4410_edited",
        "color": "Red / Black"
      }
    ],
    "variants": [
      {
        "color": "Red / Black",
        "image": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4408_edited",
        "media": [
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4408_edited",
            "color": "Red / Black"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4407_edited",
            "color": "Red / Black"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4409_edited",
            "color": "Red / Black"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4410_edited",
            "color": "Red / Black"
          }
        ]
      }
    ],
    "colors": [
      "Red / Black"
    ],
    "images": [
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4408_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4407_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4409_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4410_edited"
    ],
    "mediaRevision": "sneakers-rebuild-2026-10-23"
  },
  {
    "productCode": "SN020",
    "category": "Sneakers",
    "brand": "BUYYMEE.com",
    "price": null,
    "priceOnRequest": true,
    "compareAt": null,
    "currency": "USD",
    "description": "LOUIS VUITTON CHUNKY SNEAKERS \u2014 WHITE / BLACK. CONTACT BUYYMEE FOR AVAILABLE SIZES AND PRICE.",
    "sizes": [],
    "inStock": true,
    "placeholder": false,
    "featured": false,
    "sale": false,
    "slug": "sneakers-studio-sn020",
    "familyName": "LOUIS VUITTON CHUNKY SNEAKERS",
    "subcategory": "Sneakers",
    "tags": [
      "footwear",
      "sneakers",
      "sneakers"
    ],
    "newArrival": true,
    "id": 60012,
    "parentProductId": 60012,
    "name": "LOUIS VUITTON CHUNKY SNEAKERS \u2014 WHITE / BLACK",
    "image": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4417_edited",
    "secondaryImage": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4416_edited",
    "gallery": [
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4417_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4416_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4418_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4419_edited"
    ],
    "media": [
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4417_edited",
        "color": "White / Black"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4416_edited",
        "color": "White / Black"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4418_edited",
        "color": "White / Black"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4419_edited",
        "color": "White / Black"
      }
    ],
    "variants": [
      {
        "color": "White / Black",
        "image": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4417_edited",
        "media": [
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4417_edited",
            "color": "White / Black"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4416_edited",
            "color": "White / Black"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4418_edited",
            "color": "White / Black"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4419_edited",
            "color": "White / Black"
          }
        ]
      }
    ],
    "colors": [
      "White / Black"
    ],
    "images": [
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4417_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4416_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4418_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4419_edited"
    ],
    "mediaRevision": "sneakers-rebuild-2026-10-23"
  },
  {
    "productCode": "SN021",
    "category": "Sneakers",
    "brand": "BUYYMEE.com",
    "price": null,
    "priceOnRequest": true,
    "compareAt": null,
    "currency": "USD",
    "description": "JORDAN HIGH-TOP SNEAKERS \u2014 BLACK / GREY. CONTACT BUYYMEE FOR AVAILABLE SIZES AND PRICE.",
    "sizes": [],
    "inStock": true,
    "placeholder": false,
    "featured": false,
    "sale": false,
    "slug": "sneakers-studio-sn021",
    "familyName": "JORDAN HIGH-TOP SNEAKERS \u2014 BLACK / GREY",
    "subcategory": "Sneakers",
    "tags": [
      "footwear",
      "sneakers",
      "sneakers"
    ],
    "newArrival": true,
    "id": 60013,
    "parentProductId": 60013,
    "name": "JORDAN HIGH-TOP SNEAKERS \u2014 BLACK / GREY",
    "image": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4425_edited",
    "secondaryImage": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4424_edited",
    "gallery": [
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4425_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4424_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4426_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4427_edited"
    ],
    "media": [
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4425_edited",
        "color": "Black / Grey"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4424_edited",
        "color": "Black / Grey"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4426_edited",
        "color": "Black / Grey"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4427_edited",
        "color": "Black / Grey"
      }
    ],
    "variants": [
      {
        "color": "Black / Grey",
        "image": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4425_edited",
        "media": [
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4425_edited",
            "color": "Black / Grey"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4424_edited",
            "color": "Black / Grey"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4426_edited",
            "color": "Black / Grey"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4427_edited",
            "color": "Black / Grey"
          }
        ]
      }
    ],
    "colors": [
      "Black / Grey"
    ],
    "images": [
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4425_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4424_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4426_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4427_edited"
    ],
    "mediaRevision": "sneakers-rebuild-2026-10-23"
  },
  {
    "productCode": "SN022",
    "category": "Sneakers",
    "brand": "BUYYMEE.com",
    "price": null,
    "priceOnRequest": true,
    "compareAt": null,
    "currency": "USD",
    "description": "MONOGRAM LOW-TOP SNEAKERS \u2014 WHITE / NAVY. CONTACT BUYYMEE FOR AVAILABLE SIZES AND PRICE.",
    "sizes": [],
    "inStock": true,
    "placeholder": false,
    "featured": false,
    "sale": false,
    "slug": "sneakers-studio-sn022",
    "familyName": "MONOGRAM LOW-TOP SNEAKERS",
    "subcategory": "Sneakers",
    "tags": [
      "footwear",
      "sneakers",
      "sneakers"
    ],
    "newArrival": true,
    "id": 60014,
    "parentProductId": 60014,
    "name": "MONOGRAM LOW-TOP SNEAKERS \u2014 WHITE / NAVY",
    "image": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4434_edited",
    "secondaryImage": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4433_edited",
    "gallery": [
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4434_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4433_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4435_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4436_edited"
    ],
    "media": [
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4434_edited",
        "color": "White / Navy"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4433_edited",
        "color": "White / Navy"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4435_edited",
        "color": "White / Navy"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4436_edited",
        "color": "White / Navy"
      }
    ],
    "variants": [
      {
        "color": "White / Navy",
        "image": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4434_edited",
        "media": [
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4434_edited",
            "color": "White / Navy"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4433_edited",
            "color": "White / Navy"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4435_edited",
            "color": "White / Navy"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4436_edited",
            "color": "White / Navy"
          }
        ]
      }
    ],
    "colors": [
      "White / Navy"
    ],
    "images": [
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4434_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4433_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4435_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4436_edited"
    ],
    "mediaRevision": "sneakers-rebuild-2026-10-23"
  },
  {
    "productCode": "SN023",
    "category": "Sneakers",
    "brand": "BUYYMEE.com",
    "price": null,
    "priceOnRequest": true,
    "compareAt": null,
    "currency": "USD",
    "description": "KNIT SNEAKERS \u2014 BEIGE / GREY. CONTACT BUYYMEE FOR AVAILABLE SIZES AND PRICE.",
    "sizes": [],
    "inStock": true,
    "placeholder": false,
    "featured": false,
    "sale": false,
    "slug": "sneakers-studio-sn023",
    "familyName": "KNIT SNEAKERS",
    "subcategory": "Sneakers",
    "tags": [
      "footwear",
      "sneakers",
      "sneakers"
    ],
    "newArrival": true,
    "id": 60015,
    "parentProductId": 60015,
    "name": "KNIT SNEAKERS \u2014 BEIGE / GREY",
    "image": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4442_edited",
    "secondaryImage": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4441_edited",
    "gallery": [
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4442_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4441_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4443_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4444_edited"
    ],
    "media": [
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4442_edited",
        "color": "Beige / Grey"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4441_edited",
        "color": "Beige / Grey"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4443_edited",
        "color": "Beige / Grey"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4444_edited",
        "color": "Beige / Grey"
      }
    ],
    "variants": [
      {
        "color": "Beige / Grey",
        "image": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4442_edited",
        "media": [
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4442_edited",
            "color": "Beige / Grey"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4441_edited",
            "color": "Beige / Grey"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4443_edited",
            "color": "Beige / Grey"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4444_edited",
            "color": "Beige / Grey"
          }
        ]
      }
    ],
    "colors": [
      "Beige / Grey"
    ],
    "images": [
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4442_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4441_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4443_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4444_edited"
    ],
    "mediaRevision": "sneakers-rebuild-2026-10-23"
  },
  {
    "productCode": "SN024",
    "category": "Sneakers",
    "brand": "BUYYMEE.com",
    "price": null,
    "priceOnRequest": true,
    "compareAt": null,
    "currency": "USD",
    "description": "BALENCIAGA SOCK TRAINERS \u2014 BLACK. CONTACT BUYYMEE FOR AVAILABLE SIZES AND PRICE.",
    "sizes": [],
    "inStock": true,
    "placeholder": false,
    "featured": false,
    "sale": false,
    "slug": "sneakers-studio-sn024",
    "familyName": "BALENCIAGA SOCK TRAINERS",
    "subcategory": "Sock trainers",
    "tags": [
      "footwear",
      "sneakers",
      "sock trainers"
    ],
    "newArrival": true,
    "id": 60016,
    "parentProductId": 60016,
    "name": "BALENCIAGA SOCK TRAINERS \u2014 BLACK",
    "image": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4450_edited",
    "secondaryImage": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4449_edited",
    "gallery": [
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4450_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4449_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4451_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4452_edited"
    ],
    "media": [
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4450_edited",
        "color": "Black"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4449_edited",
        "color": "Black"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4451_edited",
        "color": "Black"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4452_edited",
        "color": "Black"
      }
    ],
    "variants": [
      {
        "color": "Black",
        "image": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4450_edited",
        "media": [
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4450_edited",
            "color": "Black"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4449_edited",
            "color": "Black"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4451_edited",
            "color": "Black"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4452_edited",
            "color": "Black"
          }
        ]
      }
    ],
    "colors": [
      "Black"
    ],
    "images": [
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4450_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4449_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4451_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4452_edited"
    ],
    "mediaRevision": "sneakers-rebuild-2026-10-23"
  },
  {
    "productCode": "SN025",
    "category": "Sneakers",
    "brand": "BUYYMEE.com",
    "price": null,
    "priceOnRequest": true,
    "compareAt": null,
    "currency": "USD",
    "description": "LOUIS VUITTON TRAINERS \u2014 PURPLE. CONTACT BUYYMEE FOR AVAILABLE SIZES AND PRICE.",
    "sizes": [],
    "inStock": true,
    "placeholder": false,
    "featured": false,
    "sale": false,
    "slug": "sneakers-studio-sn025",
    "familyName": "LOUIS VUITTON TRAINERS",
    "subcategory": "Sneakers",
    "tags": [
      "footwear",
      "sneakers",
      "sneakers"
    ],
    "newArrival": true,
    "id": 60017,
    "parentProductId": 60017,
    "name": "LOUIS VUITTON TRAINERS \u2014 PURPLE",
    "image": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4454_edited",
    "secondaryImage": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4453_edited",
    "gallery": [
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4454_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4453_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4455_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4456_edited"
    ],
    "media": [
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4454_edited",
        "color": "Purple"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4453_edited",
        "color": "Purple"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4455_edited",
        "color": "Purple"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4456_edited",
        "color": "Purple"
      }
    ],
    "variants": [
      {
        "color": "Purple",
        "image": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4454_edited",
        "media": [
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4454_edited",
            "color": "Purple"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4453_edited",
            "color": "Purple"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4455_edited",
            "color": "Purple"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4456_edited",
            "color": "Purple"
          }
        ]
      }
    ],
    "colors": [
      "Purple"
    ],
    "images": [
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4454_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4453_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4455_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4456_edited"
    ],
    "mediaRevision": "sneakers-rebuild-2026-10-23"
  },
  {
    "productCode": "SN026",
    "category": "Sneakers",
    "brand": "BUYYMEE.com",
    "price": null,
    "priceOnRequest": true,
    "compareAt": null,
    "currency": "USD",
    "description": "LOUIS VUITTON LOW-TOP SNEAKERS \u2014 ORANGE / WHITE. CONTACT BUYYMEE FOR AVAILABLE SIZES AND PRICE.",
    "sizes": [],
    "inStock": true,
    "placeholder": false,
    "featured": false,
    "sale": false,
    "slug": "sneakers-studio-sn026",
    "familyName": "LOUIS VUITTON LOW-TOP SNEAKERS",
    "subcategory": "Sneakers",
    "tags": [
      "footwear",
      "sneakers",
      "sneakers"
    ],
    "newArrival": true,
    "id": 60018,
    "parentProductId": 60018,
    "name": "LOUIS VUITTON LOW-TOP SNEAKERS \u2014 ORANGE / WHITE",
    "image": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4462_edited",
    "secondaryImage": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4461_edited",
    "gallery": [
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4462_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4461_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4463_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4464_edited"
    ],
    "media": [
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4462_edited",
        "color": "Orange / White"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4461_edited",
        "color": "Orange / White"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4463_edited",
        "color": "Orange / White"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4464_edited",
        "color": "Orange / White"
      }
    ],
    "variants": [
      {
        "color": "Orange / White",
        "image": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4462_edited",
        "media": [
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4462_edited",
            "color": "Orange / White"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4461_edited",
            "color": "Orange / White"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4463_edited",
            "color": "Orange / White"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4464_edited",
            "color": "Orange / White"
          }
        ]
      }
    ],
    "colors": [
      "Orange / White"
    ],
    "images": [
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4462_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4461_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4463_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4464_edited"
    ],
    "mediaRevision": "sneakers-rebuild-2026-10-23"
  },
  {
    "productCode": "SN027",
    "category": "Sneakers",
    "brand": "BUYYMEE.com",
    "price": null,
    "priceOnRequest": true,
    "compareAt": null,
    "currency": "USD",
    "description": "LOUIS VUITTON LOW-TOP SNEAKERS \u2014 BLACK. CONTACT BUYYMEE FOR AVAILABLE SIZES AND PRICE.",
    "sizes": [],
    "inStock": true,
    "placeholder": false,
    "featured": false,
    "sale": false,
    "slug": "sneakers-studio-sn027",
    "familyName": "LOUIS VUITTON LOW-TOP SNEAKERS",
    "subcategory": "Sneakers",
    "tags": [
      "footwear",
      "sneakers",
      "sneakers"
    ],
    "newArrival": true,
    "id": 60019,
    "parentProductId": 60019,
    "name": "LOUIS VUITTON LOW-TOP SNEAKERS \u2014 BLACK",
    "image": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4467_edited",
    "secondaryImage": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4466_edited",
    "gallery": [
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4467_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4466_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4468_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4469_edited"
    ],
    "media": [
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4467_edited",
        "color": "Black"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4466_edited",
        "color": "Black"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4468_edited",
        "color": "Black"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4469_edited",
        "color": "Black"
      }
    ],
    "variants": [
      {
        "color": "Black",
        "image": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4467_edited",
        "media": [
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4467_edited",
            "color": "Black"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4466_edited",
            "color": "Black"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4468_edited",
            "color": "Black"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4469_edited",
            "color": "Black"
          }
        ]
      }
    ],
    "colors": [
      "Black"
    ],
    "images": [
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4467_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4466_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4468_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4469_edited"
    ],
    "mediaRevision": "sneakers-rebuild-2026-10-23"
  },
  {
    "productCode": "SN028",
    "category": "Sneakers",
    "brand": "BUYYMEE.com",
    "price": null,
    "priceOnRequest": true,
    "compareAt": null,
    "currency": "USD",
    "description": "LOUIS VUITTON TRAINERS \u2014 BLUE / WHITE / TEAL. CONTACT BUYYMEE FOR AVAILABLE SIZES AND PRICE.",
    "sizes": [],
    "inStock": true,
    "placeholder": false,
    "featured": false,
    "sale": false,
    "slug": "sneakers-studio-sn028",
    "familyName": "LOUIS VUITTON TRAINERS",
    "subcategory": "Sneakers",
    "tags": [
      "footwear",
      "sneakers",
      "sneakers"
    ],
    "newArrival": true,
    "id": 60020,
    "parentProductId": 60020,
    "name": "LOUIS VUITTON TRAINERS \u2014 BLUE / WHITE / TEAL",
    "image": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4520_edited",
    "secondaryImage": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4519_edited",
    "gallery": [
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4520_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4519_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4521_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4522_edited"
    ],
    "media": [
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4520_edited",
        "color": "Blue / White / Teal"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4519_edited",
        "color": "Blue / White / Teal"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4521_edited",
        "color": "Blue / White / Teal"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4522_edited",
        "color": "Blue / White / Teal"
      }
    ],
    "variants": [
      {
        "color": "Blue / White / Teal",
        "image": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4520_edited",
        "media": [
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4520_edited",
            "color": "Blue / White / Teal"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4519_edited",
            "color": "Blue / White / Teal"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4521_edited",
            "color": "Blue / White / Teal"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4522_edited",
            "color": "Blue / White / Teal"
          }
        ]
      }
    ],
    "colors": [
      "Blue / White / Teal"
    ],
    "images": [
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4520_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4519_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4521_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4522_edited"
    ],
    "mediaRevision": "sneakers-rebuild-2026-10-23"
  },
  {
    "productCode": "SN029",
    "category": "Sneakers",
    "brand": "BUYYMEE.com",
    "price": null,
    "priceOnRequest": true,
    "compareAt": null,
    "currency": "USD",
    "description": "LOUIS VUITTON LOGO LOW-TOP SNEAKERS \u2014 WHITE / GREEN. CONTACT BUYYMEE FOR AVAILABLE SIZES AND PRICE.",
    "sizes": [],
    "inStock": true,
    "placeholder": false,
    "featured": false,
    "sale": false,
    "slug": "sneakers-studio-sn029",
    "familyName": "LOUIS VUITTON LOGO LOW-TOP SNEAKERS",
    "subcategory": "Sneakers",
    "tags": [
      "footwear",
      "sneakers",
      "sneakers"
    ],
    "newArrival": true,
    "id": 60021,
    "parentProductId": 60021,
    "name": "LOUIS VUITTON LOGO LOW-TOP SNEAKERS \u2014 WHITE / GREEN",
    "image": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4477_edited",
    "secondaryImage": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4476_edited",
    "gallery": [
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4477_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4476_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4478_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4481_edited"
    ],
    "media": [
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4477_edited",
        "color": "White / Green"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4476_edited",
        "color": "White / Green"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4478_edited",
        "color": "White / Green"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4481_edited",
        "color": "White / Green"
      }
    ],
    "variants": [
      {
        "color": "White / Green",
        "image": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4477_edited",
        "media": [
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4477_edited",
            "color": "White / Green"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4476_edited",
            "color": "White / Green"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4478_edited",
            "color": "White / Green"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4481_edited",
            "color": "White / Green"
          }
        ]
      }
    ],
    "colors": [
      "White / Green"
    ],
    "images": [
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4477_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4476_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4478_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4481_edited"
    ],
    "mediaRevision": "sneakers-rebuild-2026-10-23"
  },
  {
    "productCode": "SN030",
    "category": "Sneakers",
    "brand": "BUYYMEE.com",
    "price": null,
    "priceOnRequest": true,
    "compareAt": null,
    "currency": "USD",
    "description": "LOUIS VUITTON DENIM TRAINERS \u2014 DENIM / RED. CONTACT BUYYMEE FOR AVAILABLE SIZES AND PRICE.",
    "sizes": [],
    "inStock": true,
    "placeholder": false,
    "featured": false,
    "sale": false,
    "slug": "sneakers-studio-sn030",
    "familyName": "LOUIS VUITTON DENIM TRAINERS",
    "subcategory": "Sneakers",
    "tags": [
      "footwear",
      "sneakers",
      "sneakers"
    ],
    "newArrival": true,
    "id": 60022,
    "parentProductId": 60022,
    "name": "LOUIS VUITTON DENIM TRAINERS \u2014 DENIM / RED",
    "image": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4488_edited",
    "secondaryImage": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4487_edited",
    "gallery": [
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4488_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4487_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4489_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4490_edited"
    ],
    "media": [
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4488_edited",
        "color": "Denim / Red"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4487_edited",
        "color": "Denim / Red"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4489_edited",
        "color": "Denim / Red"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4490_edited",
        "color": "Denim / Red"
      }
    ],
    "variants": [
      {
        "color": "Denim / Red",
        "image": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4488_edited",
        "media": [
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4488_edited",
            "color": "Denim / Red"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4487_edited",
            "color": "Denim / Red"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4489_edited",
            "color": "Denim / Red"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4490_edited",
            "color": "Denim / Red"
          }
        ]
      }
    ],
    "colors": [
      "Denim / Red"
    ],
    "images": [
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4488_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4487_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4489_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4490_edited"
    ],
    "mediaRevision": "sneakers-rebuild-2026-10-23"
  },
  {
    "productCode": "SN031",
    "category": "Sneakers",
    "brand": "BUYYMEE.com",
    "price": null,
    "priceOnRequest": true,
    "compareAt": null,
    "currency": "USD",
    "description": "JORDAN 4 SNEAKERS \u2014 BLACK / YELLOW. CONTACT BUYYMEE FOR AVAILABLE SIZES AND PRICE.",
    "sizes": [],
    "inStock": true,
    "placeholder": false,
    "featured": false,
    "sale": false,
    "slug": "sneakers-studio-sn031",
    "familyName": "JORDAN 4 SNEAKERS",
    "subcategory": "Sneakers",
    "tags": [
      "footwear",
      "sneakers",
      "sneakers"
    ],
    "newArrival": true,
    "id": 60023,
    "parentProductId": 60023,
    "name": "JORDAN 4 SNEAKERS \u2014 BLACK / YELLOW",
    "image": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4492_edited",
    "secondaryImage": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4491_edited",
    "gallery": [
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4492_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4491_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4493_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4494_edited"
    ],
    "media": [
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4492_edited",
        "color": "Black / Yellow"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4491_edited",
        "color": "Black / Yellow"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4493_edited",
        "color": "Black / Yellow"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4494_edited",
        "color": "Black / Yellow"
      }
    ],
    "variants": [
      {
        "color": "Black / Yellow",
        "image": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4492_edited",
        "media": [
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4492_edited",
            "color": "Black / Yellow"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4491_edited",
            "color": "Black / Yellow"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4493_edited",
            "color": "Black / Yellow"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4494_edited",
            "color": "Black / Yellow"
          }
        ]
      }
    ],
    "colors": [
      "Black / Yellow"
    ],
    "images": [
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4492_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4491_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4493_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4494_edited"
    ],
    "mediaRevision": "sneakers-rebuild-2026-10-23"
  },
  {
    "productCode": "SN032",
    "category": "Sneakers",
    "brand": "BUYYMEE.com",
    "price": null,
    "priceOnRequest": true,
    "compareAt": null,
    "currency": "USD",
    "description": "LOUIS VUITTON TRAINERS \u2014 GREY / ORANGE. CONTACT BUYYMEE FOR AVAILABLE SIZES AND PRICE.",
    "sizes": [],
    "inStock": true,
    "placeholder": false,
    "featured": false,
    "sale": false,
    "slug": "sneakers-studio-sn032",
    "familyName": "LOUIS VUITTON TRAINERS",
    "subcategory": "Sneakers",
    "tags": [
      "footwear",
      "sneakers",
      "sneakers"
    ],
    "newArrival": true,
    "id": 60024,
    "parentProductId": 60024,
    "name": "LOUIS VUITTON TRAINERS \u2014 GREY / ORANGE",
    "image": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4505_edited",
    "secondaryImage": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4504_edited",
    "gallery": [
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4505_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4504_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4506_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4507_edited"
    ],
    "media": [
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4505_edited",
        "color": "Grey / Orange"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4504_edited",
        "color": "Grey / Orange"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4506_edited",
        "color": "Grey / Orange"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4507_edited",
        "color": "Grey / Orange"
      }
    ],
    "variants": [
      {
        "color": "Grey / Orange",
        "image": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4505_edited",
        "media": [
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4505_edited",
            "color": "Grey / Orange"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4504_edited",
            "color": "Grey / Orange"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4506_edited",
            "color": "Grey / Orange"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4507_edited",
            "color": "Grey / Orange"
          }
        ]
      }
    ],
    "colors": [
      "Grey / Orange"
    ],
    "images": [
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4505_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4504_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4506_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4507_edited"
    ],
    "mediaRevision": "sneakers-rebuild-2026-10-23"
  },
  {
    "productCode": "SN033",
    "category": "Sneakers",
    "brand": "BUYYMEE.com",
    "price": null,
    "priceOnRequest": true,
    "compareAt": null,
    "currency": "USD",
    "description": "LOUIS VUITTON PATTERNED LOW-TOP SNEAKERS \u2014 WHITE / GREEN. CONTACT BUYYMEE FOR AVAILABLE SIZES AND PRICE.",
    "sizes": [],
    "inStock": true,
    "placeholder": false,
    "featured": false,
    "sale": false,
    "slug": "sneakers-studio-sn033",
    "familyName": "LOUIS VUITTON PATTERNED LOW-TOP SNEAKERS",
    "subcategory": "Sneakers",
    "tags": [
      "footwear",
      "sneakers",
      "sneakers"
    ],
    "newArrival": true,
    "id": 60025,
    "parentProductId": 60025,
    "name": "LOUIS VUITTON PATTERNED LOW-TOP SNEAKERS \u2014 WHITE / GREEN",
    "image": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4509_edited",
    "secondaryImage": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4508_edited",
    "gallery": [
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4509_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4508_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4510_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4511_edited"
    ],
    "media": [
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4509_edited",
        "color": "White / Green"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4508_edited",
        "color": "White / Green"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4510_edited",
        "color": "White / Green"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4511_edited",
        "color": "White / Green"
      }
    ],
    "variants": [
      {
        "color": "White / Green",
        "image": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4509_edited",
        "media": [
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4509_edited",
            "color": "White / Green"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4508_edited",
            "color": "White / Green"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4510_edited",
            "color": "White / Green"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4511_edited",
            "color": "White / Green"
          }
        ]
      }
    ],
    "colors": [
      "White / Green"
    ],
    "images": [
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4509_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4508_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4510_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4511_edited"
    ],
    "mediaRevision": "sneakers-rebuild-2026-10-23"
  },
  {
    "productCode": "SN034",
    "category": "Sneakers",
    "brand": "BUYYMEE.com",
    "price": null,
    "priceOnRequest": true,
    "compareAt": null,
    "currency": "USD",
    "description": "LOUIS VUITTON CRYSTAL MONOGRAM TRAINERS \u2014 CRYSTAL / BLUE. CONTACT BUYYMEE FOR AVAILABLE SIZES AND PRICE.",
    "sizes": [],
    "inStock": true,
    "placeholder": false,
    "featured": false,
    "sale": false,
    "slug": "sneakers-studio-sn034",
    "familyName": "LOUIS VUITTON CRYSTAL MONOGRAM TRAINERS",
    "subcategory": "Sneakers",
    "tags": [
      "footwear",
      "sneakers",
      "sneakers"
    ],
    "newArrival": true,
    "id": 60026,
    "parentProductId": 60026,
    "name": "LOUIS VUITTON CRYSTAL MONOGRAM TRAINERS \u2014 CRYSTAL / BLUE",
    "image": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4514_edited",
    "secondaryImage": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4513_edited",
    "gallery": [
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4514_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4513_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4515_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4516_edited"
    ],
    "media": [
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4514_edited",
        "color": "Crystal / Blue"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4513_edited",
        "color": "Crystal / Blue"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4515_edited",
        "color": "Crystal / Blue"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4516_edited",
        "color": "Crystal / Blue"
      }
    ],
    "variants": [
      {
        "color": "Crystal / Blue",
        "image": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4514_edited",
        "media": [
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4514_edited",
            "color": "Crystal / Blue"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4513_edited",
            "color": "Crystal / Blue"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4515_edited",
            "color": "Crystal / Blue"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4516_edited",
            "color": "Crystal / Blue"
          }
        ]
      }
    ],
    "colors": [
      "Crystal / Blue"
    ],
    "images": [
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4514_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4513_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4515_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4516_edited"
    ],
    "mediaRevision": "sneakers-rebuild-2026-10-23"
  },
  {
    "productCode": "SN035",
    "category": "Sneakers",
    "brand": "BUYYMEE.com",
    "price": null,
    "priceOnRequest": true,
    "compareAt": null,
    "currency": "USD",
    "description": "LOUIS VUITTON PANELLED TRAINERS \u2014 GREEN / WHITE. CONTACT BUYYMEE FOR AVAILABLE SIZES AND PRICE.",
    "sizes": [],
    "inStock": true,
    "placeholder": false,
    "featured": false,
    "sale": false,
    "slug": "sneakers-studio-sn035",
    "familyName": "LOUIS VUITTON PANELLED TRAINERS",
    "subcategory": "Sneakers",
    "tags": [
      "footwear",
      "sneakers",
      "sneakers"
    ],
    "newArrival": true,
    "id": 60027,
    "parentProductId": 60027,
    "name": "LOUIS VUITTON PANELLED TRAINERS \u2014 GREEN / WHITE",
    "image": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4524_edited",
    "secondaryImage": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4523_edited",
    "gallery": [
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4524_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4523_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4525_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4526_edited"
    ],
    "media": [
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4524_edited",
        "color": "Green / White"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4523_edited",
        "color": "Green / White"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4525_edited",
        "color": "Green / White"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4526_edited",
        "color": "Green / White"
      }
    ],
    "variants": [
      {
        "color": "Green / White",
        "image": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4524_edited",
        "media": [
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4524_edited",
            "color": "Green / White"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4523_edited",
            "color": "Green / White"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4525_edited",
            "color": "Green / White"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4526_edited",
            "color": "Green / White"
          }
        ]
      }
    ],
    "colors": [
      "Green / White"
    ],
    "images": [
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4524_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4523_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4525_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4526_edited"
    ],
    "mediaRevision": "sneakers-rebuild-2026-10-23"
  },
  {
    "productCode": "SN036",
    "category": "Sneakers",
    "brand": "BUYYMEE.com",
    "price": null,
    "priceOnRequest": true,
    "compareAt": null,
    "currency": "USD",
    "description": "LOUIS VUITTON TRAINERS \u2014 GREY / BLACK / ORANGE. CONTACT BUYYMEE FOR AVAILABLE SIZES AND PRICE.",
    "sizes": [],
    "inStock": true,
    "placeholder": false,
    "featured": false,
    "sale": false,
    "slug": "sneakers-studio-sn036",
    "familyName": "LOUIS VUITTON TRAINERS",
    "subcategory": "Sneakers",
    "tags": [
      "footwear",
      "sneakers",
      "sneakers"
    ],
    "newArrival": true,
    "id": 60028,
    "parentProductId": 60028,
    "name": "LOUIS VUITTON TRAINERS \u2014 GREY / BLACK / ORANGE",
    "image": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4530_edited",
    "secondaryImage": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4529_edited",
    "gallery": [
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4530_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4529_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4531_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4532_edited"
    ],
    "media": [
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4530_edited",
        "color": "Grey / Black / Orange"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4529_edited",
        "color": "Grey / Black / Orange"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4531_edited",
        "color": "Grey / Black / Orange"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4532_edited",
        "color": "Grey / Black / Orange"
      }
    ],
    "variants": [
      {
        "color": "Grey / Black / Orange",
        "image": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4530_edited",
        "media": [
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4530_edited",
            "color": "Grey / Black / Orange"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4529_edited",
            "color": "Grey / Black / Orange"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4531_edited",
            "color": "Grey / Black / Orange"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4532_edited",
            "color": "Grey / Black / Orange"
          }
        ]
      }
    ],
    "colors": [
      "Grey / Black / Orange"
    ],
    "images": [
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4530_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4529_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4531_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4532_edited"
    ],
    "mediaRevision": "sneakers-rebuild-2026-10-23"
  },
  {
    "productCode": "SN037",
    "category": "Sneakers",
    "brand": "BUYYMEE.com",
    "price": null,
    "priceOnRequest": true,
    "compareAt": null,
    "currency": "USD",
    "description": "BIRKENSTOCK LINED CLOGS \u2014 TAN. CONTACT BUYYMEE FOR AVAILABLE SIZES AND PRICE.",
    "sizes": [],
    "inStock": true,
    "placeholder": false,
    "featured": false,
    "sale": false,
    "slug": "sneakers-studio-sn037",
    "familyName": "BIRKENSTOCK LINED CLOGS",
    "subcategory": "Clogs",
    "tags": [
      "footwear",
      "sneakers",
      "clogs"
    ],
    "newArrival": true,
    "id": 60029,
    "parentProductId": 60029,
    "name": "BIRKENSTOCK LINED CLOGS \u2014 TAN",
    "image": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4534_edited",
    "secondaryImage": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4533_edited",
    "gallery": [
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4534_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4533_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4535_edited"
    ],
    "media": [
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4534_edited",
        "color": "Tan"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4533_edited",
        "color": "Tan"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4535_edited",
        "color": "Tan"
      }
    ],
    "variants": [
      {
        "color": "Tan",
        "image": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4534_edited",
        "media": [
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4534_edited",
            "color": "Tan"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4533_edited",
            "color": "Tan"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4535_edited",
            "color": "Tan"
          }
        ]
      }
    ],
    "colors": [
      "Tan"
    ],
    "images": [
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4534_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4533_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4535_edited"
    ],
    "mediaRevision": "sneakers-rebuild-2026-10-23"
  },
  {
    "productCode": "SN038",
    "category": "Sneakers",
    "brand": "BUYYMEE.com",
    "price": null,
    "priceOnRequest": true,
    "compareAt": null,
    "currency": "USD",
    "description": "LOUIS VUITTON TRAINERS \u2014 LIGHT BLUE. CONTACT BUYYMEE FOR AVAILABLE SIZES AND PRICE.",
    "sizes": [],
    "inStock": true,
    "placeholder": false,
    "featured": false,
    "sale": false,
    "slug": "sneakers-studio-sn038",
    "familyName": "LOUIS VUITTON TRAINERS",
    "subcategory": "Sneakers",
    "tags": [
      "footwear",
      "sneakers",
      "sneakers"
    ],
    "newArrival": true,
    "id": 60030,
    "parentProductId": 60030,
    "name": "LOUIS VUITTON TRAINERS \u2014 LIGHT BLUE",
    "image": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4539_edited",
    "secondaryImage": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4538_edited",
    "gallery": [
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4539_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4538_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4540_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4541_edited"
    ],
    "media": [
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4539_edited",
        "color": "Light Blue"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4538_edited",
        "color": "Light Blue"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4540_edited",
        "color": "Light Blue"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4541_edited",
        "color": "Light Blue"
      }
    ],
    "variants": [
      {
        "color": "Light Blue",
        "image": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4539_edited",
        "media": [
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4539_edited",
            "color": "Light Blue"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4538_edited",
            "color": "Light Blue"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4540_edited",
            "color": "Light Blue"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4541_edited",
            "color": "Light Blue"
          }
        ]
      }
    ],
    "colors": [
      "Light Blue"
    ],
    "images": [
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4539_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4538_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4540_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4541_edited"
    ],
    "mediaRevision": "sneakers-rebuild-2026-10-23"
  },
  {
    "productCode": "SN039",
    "category": "Sneakers",
    "brand": "BUYYMEE.com",
    "price": null,
    "priceOnRequest": true,
    "compareAt": null,
    "currency": "USD",
    "description": "JORDAN PATENT HIGH-TOP SNEAKERS \u2014 BLACK. CONTACT BUYYMEE FOR AVAILABLE SIZES AND PRICE.",
    "sizes": [],
    "inStock": true,
    "placeholder": false,
    "featured": false,
    "sale": false,
    "slug": "sneakers-studio-sn039",
    "familyName": "JORDAN PATENT HIGH-TOP SNEAKERS",
    "subcategory": "Sneakers",
    "tags": [
      "footwear",
      "sneakers",
      "sneakers"
    ],
    "newArrival": true,
    "id": 60031,
    "parentProductId": 60031,
    "name": "JORDAN PATENT HIGH-TOP SNEAKERS \u2014 BLACK",
    "image": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4543_edited",
    "secondaryImage": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4542_edited",
    "gallery": [
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4543_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4542_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4544_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4545_edited"
    ],
    "media": [
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4543_edited",
        "color": "Black"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4542_edited",
        "color": "Black"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4544_edited",
        "color": "Black"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4545_edited",
        "color": "Black"
      }
    ],
    "variants": [
      {
        "color": "Black",
        "image": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4543_edited",
        "media": [
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4543_edited",
            "color": "Black"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4542_edited",
            "color": "Black"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4544_edited",
            "color": "Black"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4545_edited",
            "color": "Black"
          }
        ]
      }
    ],
    "colors": [
      "Black"
    ],
    "images": [
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4543_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4542_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4544_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4545_edited"
    ],
    "mediaRevision": "sneakers-rebuild-2026-10-23"
  },
  {
    "productCode": "SN040",
    "category": "Sneakers",
    "brand": "BUYYMEE.com",
    "price": null,
    "priceOnRequest": true,
    "compareAt": null,
    "currency": "USD",
    "description": "LOUIS VUITTON TRAINERS \u2014 MINT / CORAL. CONTACT BUYYMEE FOR AVAILABLE SIZES AND PRICE.",
    "sizes": [],
    "inStock": true,
    "placeholder": false,
    "featured": false,
    "sale": false,
    "slug": "sneakers-studio-sn040",
    "familyName": "LOUIS VUITTON TRAINERS",
    "subcategory": "Sneakers",
    "tags": [
      "footwear",
      "sneakers",
      "sneakers"
    ],
    "newArrival": true,
    "id": 60032,
    "parentProductId": 60032,
    "name": "LOUIS VUITTON TRAINERS \u2014 MINT / CORAL",
    "image": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4547_edited",
    "secondaryImage": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4546_edited",
    "gallery": [
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4547_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4546_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4548_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4549_edited"
    ],
    "media": [
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4547_edited",
        "color": "Mint / Coral"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4546_edited",
        "color": "Mint / Coral"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4548_edited",
        "color": "Mint / Coral"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4549_edited",
        "color": "Mint / Coral"
      }
    ],
    "variants": [
      {
        "color": "Mint / Coral",
        "image": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4547_edited",
        "media": [
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4547_edited",
            "color": "Mint / Coral"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4546_edited",
            "color": "Mint / Coral"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4548_edited",
            "color": "Mint / Coral"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4549_edited",
            "color": "Mint / Coral"
          }
        ]
      }
    ],
    "colors": [
      "Mint / Coral"
    ],
    "images": [
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4547_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4546_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4548_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4549_edited"
    ],
    "mediaRevision": "sneakers-rebuild-2026-10-23"
  },
  {
    "productCode": "SN041",
    "category": "Sneakers",
    "brand": "BUYYMEE.com",
    "price": null,
    "priceOnRequest": true,
    "compareAt": null,
    "currency": "USD",
    "description": "JORDAN 1 LOW SNEAKERS \u2014 WHITE. CONTACT BUYYMEE FOR AVAILABLE SIZES AND PRICE.",
    "sizes": [],
    "inStock": true,
    "placeholder": false,
    "featured": false,
    "sale": false,
    "slug": "sneakers-studio-sn041",
    "familyName": "JORDAN 1 LOW SNEAKERS",
    "subcategory": "Sneakers",
    "tags": [
      "footwear",
      "sneakers",
      "sneakers"
    ],
    "newArrival": true,
    "id": 60033,
    "parentProductId": 60033,
    "name": "JORDAN 1 LOW SNEAKERS \u2014 WHITE",
    "image": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4322_edited",
    "secondaryImage": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4321_edited",
    "gallery": [
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4322_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4321_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4323_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4324_edited"
    ],
    "media": [
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4322_edited",
        "color": "White"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4321_edited",
        "color": "White"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4323_edited",
        "color": "White"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4324_edited",
        "color": "White"
      }
    ],
    "variants": [
      {
        "color": "White",
        "image": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4322_edited",
        "media": [
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4322_edited",
            "color": "White"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4321_edited",
            "color": "White"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4323_edited",
            "color": "White"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4324_edited",
            "color": "White"
          }
        ]
      }
    ],
    "colors": [
      "White"
    ],
    "images": [
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4322_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4321_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4323_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4324_edited"
    ],
    "mediaRevision": "sneakers-rebuild-2026-10-23"
  },
  {
    "productCode": "SN042",
    "category": "Sneakers",
    "brand": "BUYYMEE.com",
    "price": null,
    "priceOnRequest": true,
    "compareAt": null,
    "currency": "USD",
    "description": "JORDAN PATENT HIGH-TOP SNEAKERS \u2014 GREY. CONTACT BUYYMEE FOR AVAILABLE SIZES AND PRICE.",
    "sizes": [],
    "inStock": true,
    "placeholder": false,
    "featured": false,
    "sale": false,
    "slug": "sneakers-studio-sn042",
    "familyName": "JORDAN PATENT HIGH-TOP SNEAKERS",
    "subcategory": "Sneakers",
    "tags": [
      "footwear",
      "sneakers",
      "sneakers"
    ],
    "newArrival": true,
    "id": 60034,
    "parentProductId": 60034,
    "name": "JORDAN PATENT HIGH-TOP SNEAKERS \u2014 GREY",
    "image": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4326_edited",
    "secondaryImage": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4325_edited",
    "gallery": [
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4326_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4325_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4327_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4328_edited"
    ],
    "media": [
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4326_edited",
        "color": "Grey"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4325_edited",
        "color": "Grey"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4327_edited",
        "color": "Grey"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4328_edited",
        "color": "Grey"
      }
    ],
    "variants": [
      {
        "color": "Grey",
        "image": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4326_edited",
        "media": [
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4326_edited",
            "color": "Grey"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4325_edited",
            "color": "Grey"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4327_edited",
            "color": "Grey"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4328_edited",
            "color": "Grey"
          }
        ]
      }
    ],
    "colors": [
      "Grey"
    ],
    "images": [
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4326_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4325_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4327_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4328_edited"
    ],
    "mediaRevision": "sneakers-rebuild-2026-10-23"
  },
  {
    "productCode": "SN043",
    "category": "Sneakers",
    "brand": "BUYYMEE.com",
    "price": null,
    "priceOnRequest": true,
    "compareAt": null,
    "currency": "USD",
    "description": "BLACK STUDDED LUG-SOLE BOOTS \u2014 BLACK. CONTACT BUYYMEE FOR AVAILABLE SIZES AND PRICE.",
    "sizes": [],
    "inStock": true,
    "placeholder": false,
    "featured": false,
    "sale": false,
    "slug": "sneakers-studio-sn043",
    "familyName": "BLACK STUDDED LUG-SOLE BOOTS",
    "subcategory": "Boots",
    "tags": [
      "footwear",
      "sneakers",
      "boots"
    ],
    "newArrival": true,
    "id": 60035,
    "parentProductId": 60035,
    "name": "BLACK STUDDED LUG-SOLE BOOTS \u2014 BLACK",
    "image": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4330_edited",
    "secondaryImage": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4329_edited",
    "gallery": [
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4330_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4329_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4331_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4332_edited"
    ],
    "media": [
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4330_edited",
        "color": "Black"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4329_edited",
        "color": "Black"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4331_edited",
        "color": "Black"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4332_edited",
        "color": "Black"
      }
    ],
    "variants": [
      {
        "color": "Black",
        "image": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4330_edited",
        "media": [
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4330_edited",
            "color": "Black"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4329_edited",
            "color": "Black"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4331_edited",
            "color": "Black"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4332_edited",
            "color": "Black"
          }
        ]
      }
    ],
    "colors": [
      "Black"
    ],
    "images": [
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4330_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4329_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4331_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4332_edited"
    ],
    "mediaRevision": "sneakers-rebuild-2026-10-23"
  },
  {
    "productCode": "SN044",
    "category": "Sneakers",
    "brand": "BUYYMEE.com",
    "price": null,
    "priceOnRequest": true,
    "compareAt": null,
    "currency": "USD",
    "description": "NIKE RUNNING SNEAKERS \u2014 WHITE / SILVER. CONTACT BUYYMEE FOR AVAILABLE SIZES AND PRICE.",
    "sizes": [],
    "inStock": true,
    "placeholder": false,
    "featured": false,
    "sale": false,
    "slug": "sneakers-studio-sn044",
    "familyName": "NIKE RUNNING SNEAKERS \u2014 WHITE / SILVER",
    "subcategory": "Sneakers",
    "tags": [
      "footwear",
      "sneakers",
      "sneakers"
    ],
    "newArrival": true,
    "id": 60036,
    "parentProductId": 60036,
    "name": "NIKE RUNNING SNEAKERS \u2014 WHITE / SILVER",
    "image": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4334_edited",
    "secondaryImage": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4335_edited",
    "gallery": [
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4334_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4335_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4336_edited"
    ],
    "media": [
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4334_edited",
        "color": "White / Silver"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4335_edited",
        "color": "White / Silver"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4336_edited",
        "color": "White / Silver"
      }
    ],
    "variants": [
      {
        "color": "White / Silver",
        "image": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4334_edited",
        "media": [
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4334_edited",
            "color": "White / Silver"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4335_edited",
            "color": "White / Silver"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4336_edited",
            "color": "White / Silver"
          }
        ]
      }
    ],
    "colors": [
      "White / Silver"
    ],
    "images": [
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4334_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4335_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4336_edited"
    ],
    "mediaRevision": "sneakers-rebuild-2026-10-23"
  },
  {
    "productCode": "SN045",
    "category": "Sneakers",
    "brand": "BUYYMEE.com",
    "price": null,
    "priceOnRequest": true,
    "compareAt": null,
    "currency": "USD",
    "description": "JORDAN 4 SNEAKERS \u2014 WHITE / NAVY. CONTACT BUYYMEE FOR AVAILABLE SIZES AND PRICE.",
    "sizes": [],
    "inStock": true,
    "placeholder": false,
    "featured": false,
    "sale": false,
    "slug": "sneakers-studio-sn045",
    "familyName": "JORDAN 4 SNEAKERS",
    "subcategory": "Sneakers",
    "tags": [
      "footwear",
      "sneakers",
      "sneakers"
    ],
    "newArrival": true,
    "id": 60037,
    "parentProductId": 60037,
    "name": "JORDAN 4 SNEAKERS \u2014 WHITE / NAVY",
    "image": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4338_edited",
    "secondaryImage": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4337_edited",
    "gallery": [
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4338_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4337_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4339_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4340_edited"
    ],
    "media": [
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4338_edited",
        "color": "White / Navy"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4337_edited",
        "color": "White / Navy"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4339_edited",
        "color": "White / Navy"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4340_edited",
        "color": "White / Navy"
      }
    ],
    "variants": [
      {
        "color": "White / Navy",
        "image": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4338_edited",
        "media": [
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4338_edited",
            "color": "White / Navy"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4337_edited",
            "color": "White / Navy"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4339_edited",
            "color": "White / Navy"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4340_edited",
            "color": "White / Navy"
          }
        ]
      }
    ],
    "colors": [
      "White / Navy"
    ],
    "images": [
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4338_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4337_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4339_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4340_edited"
    ],
    "mediaRevision": "sneakers-rebuild-2026-10-23"
  },
  {
    "productCode": "SN046",
    "category": "Sneakers",
    "brand": "BUYYMEE.com",
    "price": null,
    "priceOnRequest": true,
    "compareAt": null,
    "currency": "USD",
    "description": "JORDAN 1 LOW SNEAKERS \u2014 BLACK / PURPLE / TEAL. CONTACT BUYYMEE FOR AVAILABLE SIZES AND PRICE.",
    "sizes": [],
    "inStock": true,
    "placeholder": false,
    "featured": false,
    "sale": false,
    "slug": "sneakers-studio-sn046",
    "familyName": "JORDAN 1 LOW SNEAKERS",
    "subcategory": "Sneakers",
    "tags": [
      "footwear",
      "sneakers",
      "sneakers"
    ],
    "newArrival": true,
    "id": 60038,
    "parentProductId": 60038,
    "name": "JORDAN 1 LOW SNEAKERS \u2014 BLACK / PURPLE / TEAL",
    "image": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4342_edited",
    "secondaryImage": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4341_edited",
    "gallery": [
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4342_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4341_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4344_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4345_edited"
    ],
    "media": [
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4342_edited",
        "color": "Black / Purple / Teal"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4341_edited",
        "color": "Black / Purple / Teal"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4344_edited",
        "color": "Black / Purple / Teal"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4345_edited",
        "color": "Black / Purple / Teal"
      }
    ],
    "variants": [
      {
        "color": "Black / Purple / Teal",
        "image": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4342_edited",
        "media": [
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4342_edited",
            "color": "Black / Purple / Teal"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4341_edited",
            "color": "Black / Purple / Teal"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4344_edited",
            "color": "Black / Purple / Teal"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4345_edited",
            "color": "Black / Purple / Teal"
          }
        ]
      }
    ],
    "colors": [
      "Black / Purple / Teal"
    ],
    "images": [
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4342_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4341_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4344_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4345_edited"
    ],
    "mediaRevision": "sneakers-rebuild-2026-10-23"
  },
  {
    "productCode": "SN047",
    "category": "Sneakers",
    "brand": "BUYYMEE.com",
    "price": null,
    "priceOnRequest": true,
    "compareAt": null,
    "currency": "USD",
    "description": "JORDAN 3 SNEAKERS \u2014 WHITE / BLUE. CONTACT BUYYMEE FOR AVAILABLE SIZES AND PRICE.",
    "sizes": [],
    "inStock": true,
    "placeholder": false,
    "featured": false,
    "sale": false,
    "slug": "sneakers-studio-sn047",
    "familyName": "JORDAN 3 SNEAKERS \u2014 WHITE / BLUE",
    "subcategory": "Sneakers",
    "tags": [
      "footwear",
      "sneakers",
      "sneakers"
    ],
    "newArrival": true,
    "id": 60039,
    "parentProductId": 60039,
    "name": "JORDAN 3 SNEAKERS \u2014 WHITE / BLUE",
    "image": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4347_edited",
    "secondaryImage": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4346_edited",
    "gallery": [
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4347_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4346_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4348_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4349_edited"
    ],
    "media": [
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4347_edited",
        "color": "White / Blue"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4346_edited",
        "color": "White / Blue"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4348_edited",
        "color": "White / Blue"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4349_edited",
        "color": "White / Blue"
      }
    ],
    "variants": [
      {
        "color": "White / Blue",
        "image": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4347_edited",
        "media": [
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4347_edited",
            "color": "White / Blue"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4346_edited",
            "color": "White / Blue"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4348_edited",
            "color": "White / Blue"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4349_edited",
            "color": "White / Blue"
          }
        ]
      }
    ],
    "colors": [
      "White / Blue"
    ],
    "images": [
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4347_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4346_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4348_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4349_edited"
    ],
    "mediaRevision": "sneakers-rebuild-2026-10-23"
  },
  {
    "productCode": "SN048",
    "category": "Sneakers",
    "brand": "BUYYMEE.com",
    "price": null,
    "priceOnRequest": true,
    "compareAt": null,
    "currency": "USD",
    "description": "OFF-WHITE LOW-TOP SNEAKERS \u2014 BLACK / WHITE. CONTACT BUYYMEE FOR AVAILABLE SIZES AND PRICE.",
    "sizes": [],
    "inStock": true,
    "placeholder": false,
    "featured": false,
    "sale": false,
    "slug": "sneakers-studio-sn048",
    "familyName": "OFF-WHITE LOW-TOP SNEAKERS",
    "subcategory": "Sneakers",
    "tags": [
      "footwear",
      "sneakers",
      "sneakers"
    ],
    "newArrival": true,
    "id": 60040,
    "parentProductId": 60040,
    "name": "OFF-WHITE LOW-TOP SNEAKERS \u2014 BLACK / WHITE",
    "image": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4352_edited",
    "secondaryImage": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4351_edited",
    "gallery": [
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4352_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4351_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4353_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4354_edited"
    ],
    "media": [
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4352_edited",
        "color": "Black / White"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4351_edited",
        "color": "Black / White"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4353_edited",
        "color": "Black / White"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4354_edited",
        "color": "Black / White"
      }
    ],
    "variants": [
      {
        "color": "Black / White",
        "image": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4352_edited",
        "media": [
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4352_edited",
            "color": "Black / White"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4351_edited",
            "color": "Black / White"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4353_edited",
            "color": "Black / White"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4354_edited",
            "color": "Black / White"
          }
        ]
      }
    ],
    "colors": [
      "Black / White"
    ],
    "images": [
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4352_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4351_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4353_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4354_edited"
    ],
    "mediaRevision": "sneakers-rebuild-2026-10-23"
  },
  {
    "productCode": "SN049",
    "category": "Sneakers",
    "brand": "BUYYMEE.com",
    "price": null,
    "priceOnRequest": true,
    "compareAt": null,
    "currency": "USD",
    "description": "NIKE AIR-CUSHIONED SNEAKERS \u2014 WHITE. CONTACT BUYYMEE FOR AVAILABLE SIZES AND PRICE.",
    "sizes": [],
    "inStock": true,
    "placeholder": false,
    "featured": false,
    "sale": false,
    "slug": "sneakers-studio-sn049",
    "familyName": "NIKE AIR-CUSHIONED SNEAKERS \u2014 WHITE",
    "subcategory": "Sneakers",
    "tags": [
      "footwear",
      "sneakers",
      "sneakers"
    ],
    "newArrival": true,
    "id": 60041,
    "parentProductId": 60041,
    "name": "NIKE AIR-CUSHIONED SNEAKERS \u2014 WHITE",
    "image": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4356_edited",
    "secondaryImage": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4355_edited",
    "gallery": [
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4356_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4355_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4357_edited"
    ],
    "media": [
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4356_edited",
        "color": "White"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4355_edited",
        "color": "White"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4357_edited",
        "color": "White"
      }
    ],
    "variants": [
      {
        "color": "White",
        "image": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4356_edited",
        "media": [
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4356_edited",
            "color": "White"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4355_edited",
            "color": "White"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4357_edited",
            "color": "White"
          }
        ]
      }
    ],
    "colors": [
      "White"
    ],
    "images": [
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4356_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4355_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4357_edited"
    ],
    "mediaRevision": "sneakers-rebuild-2026-10-23"
  },
  {
    "productCode": "SN050",
    "category": "Sneakers",
    "brand": "BUYYMEE.com",
    "price": null,
    "priceOnRequest": true,
    "compareAt": null,
    "currency": "USD",
    "description": "KNIT SNEAKERS \u2014 BLACK. CONTACT BUYYMEE FOR AVAILABLE SIZES AND PRICE.",
    "sizes": [],
    "inStock": true,
    "placeholder": false,
    "featured": false,
    "sale": false,
    "slug": "sneakers-studio-sn050",
    "familyName": "KNIT SNEAKERS",
    "subcategory": "Sneakers",
    "tags": [
      "footwear",
      "sneakers",
      "sneakers"
    ],
    "newArrival": true,
    "id": 60042,
    "parentProductId": 60042,
    "name": "KNIT SNEAKERS \u2014 BLACK",
    "image": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4359_edited",
    "secondaryImage": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4358_edited",
    "gallery": [
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4359_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4358_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4360_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4361_edited"
    ],
    "media": [
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4359_edited",
        "color": "Black"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4358_edited",
        "color": "Black"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4360_edited",
        "color": "Black"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4361_edited",
        "color": "Black"
      }
    ],
    "variants": [
      {
        "color": "Black",
        "image": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4359_edited",
        "media": [
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4359_edited",
            "color": "Black"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4358_edited",
            "color": "Black"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4360_edited",
            "color": "Black"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4361_edited",
            "color": "Black"
          }
        ]
      }
    ],
    "colors": [
      "Black"
    ],
    "images": [
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4359_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4358_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4360_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4361_edited"
    ],
    "mediaRevision": "sneakers-rebuild-2026-10-23"
  },
  {
    "productCode": "SN051",
    "category": "Sneakers",
    "brand": "BUYYMEE.com",
    "price": null,
    "priceOnRequest": true,
    "compareAt": null,
    "currency": "USD",
    "description": "JORDAN 4 SNEAKERS \u2014 WHITE / ROYAL BLUE. CONTACT BUYYMEE FOR AVAILABLE SIZES AND PRICE.",
    "sizes": [],
    "inStock": true,
    "placeholder": false,
    "featured": false,
    "sale": false,
    "slug": "sneakers-studio-sn051",
    "familyName": "JORDAN 4 SNEAKERS",
    "subcategory": "Sneakers",
    "tags": [
      "footwear",
      "sneakers",
      "sneakers"
    ],
    "newArrival": true,
    "id": 60043,
    "parentProductId": 60043,
    "name": "JORDAN 4 SNEAKERS \u2014 WHITE / ROYAL BLUE",
    "image": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4364_edited",
    "secondaryImage": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4363_edited",
    "gallery": [
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4364_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4363_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4365_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4366_edited"
    ],
    "media": [
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4364_edited",
        "color": "White / Royal Blue"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4363_edited",
        "color": "White / Royal Blue"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4365_edited",
        "color": "White / Royal Blue"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4366_edited",
        "color": "White / Royal Blue"
      }
    ],
    "variants": [
      {
        "color": "White / Royal Blue",
        "image": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4364_edited",
        "media": [
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4364_edited",
            "color": "White / Royal Blue"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4363_edited",
            "color": "White / Royal Blue"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4365_edited",
            "color": "White / Royal Blue"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4366_edited",
            "color": "White / Royal Blue"
          }
        ]
      }
    ],
    "colors": [
      "White / Royal Blue"
    ],
    "images": [
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4364_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4363_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4365_edited",
      "https://res.cloudinary.com/hobndbjx/image/upload/IMG_4366_edited"
    ],
    "mediaRevision": "sneakers-rebuild-2026-10-23"
  },
  {
    "productCode": "SN052",
    "category": "Sneakers",
    "brand": "BUYYMEE.com",
    "price": null,
    "priceOnRequest": true,
    "compareAt": null,
    "currency": "USD",
    "description": "LOUIS VUITTON TRAINERS \u2014 BLUE / PURPLE. CONTACT BUYYMEE FOR AVAILABLE SIZES AND PRICE.",
    "sizes": [],
    "inStock": true,
    "placeholder": false,
    "featured": false,
    "sale": false,
    "slug": "sneakers-studio-sn052",
    "familyName": "LOUIS VUITTON TRAINERS",
    "subcategory": "Sneakers",
    "tags": [
      "footwear",
      "sneakers",
      "sneakers"
    ],
    "newArrival": true,
    "id": 60044,
    "parentProductId": 60044,
    "name": "LOUIS VUITTON TRAINERS \u2014 BLUE / PURPLE",
    "image": "https://res.cloudinary.com/hobndbjx/image/upload/6b669de2-5b2b-4750-964b-e81ba99886fe",
    "secondaryImage": "https://res.cloudinary.com/hobndbjx/image/upload/289098b7-9c53-4298-9e19-139d72437a59",
    "gallery": [
      "https://res.cloudinary.com/hobndbjx/image/upload/6b669de2-5b2b-4750-964b-e81ba99886fe",
      "https://res.cloudinary.com/hobndbjx/image/upload/289098b7-9c53-4298-9e19-139d72437a59",
      "https://res.cloudinary.com/hobndbjx/image/upload/43d66533-5b23-4b5c-9433-edf9400d03e0",
      "https://res.cloudinary.com/hobndbjx/image/upload/c212b375-9864-40dd-983d-acf6966584aa"
    ],
    "media": [
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/6b669de2-5b2b-4750-964b-e81ba99886fe",
        "color": "Blue / Purple"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/289098b7-9c53-4298-9e19-139d72437a59",
        "color": "Blue / Purple"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/43d66533-5b23-4b5c-9433-edf9400d03e0",
        "color": "Blue / Purple"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/c212b375-9864-40dd-983d-acf6966584aa",
        "color": "Blue / Purple"
      }
    ],
    "variants": [
      {
        "color": "Blue / Purple",
        "image": "https://res.cloudinary.com/hobndbjx/image/upload/6b669de2-5b2b-4750-964b-e81ba99886fe",
        "media": [
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/6b669de2-5b2b-4750-964b-e81ba99886fe",
            "color": "Blue / Purple"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/289098b7-9c53-4298-9e19-139d72437a59",
            "color": "Blue / Purple"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/43d66533-5b23-4b5c-9433-edf9400d03e0",
            "color": "Blue / Purple"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/c212b375-9864-40dd-983d-acf6966584aa",
            "color": "Blue / Purple"
          }
        ]
      }
    ],
    "colors": [
      "Blue / Purple"
    ],
    "images": [
      "https://res.cloudinary.com/hobndbjx/image/upload/6b669de2-5b2b-4750-964b-e81ba99886fe",
      "https://res.cloudinary.com/hobndbjx/image/upload/289098b7-9c53-4298-9e19-139d72437a59",
      "https://res.cloudinary.com/hobndbjx/image/upload/43d66533-5b23-4b5c-9433-edf9400d03e0",
      "https://res.cloudinary.com/hobndbjx/image/upload/c212b375-9864-40dd-983d-acf6966584aa"
    ],
    "mediaRevision": "sneakers-rebuild-2026-10-23"
  },
  {
    "productCode": "SN053",
    "category": "Sneakers",
    "brand": "BUYYMEE.com",
    "price": null,
    "priceOnRequest": true,
    "compareAt": null,
    "currency": "USD",
    "description": "ALEXANDER MCQUEEN SNEAKERS \u2014 WHITE / BLACK. CONTACT BUYYMEE FOR AVAILABLE SIZES AND PRICE.",
    "sizes": [],
    "inStock": true,
    "placeholder": false,
    "featured": false,
    "sale": false,
    "slug": "sneakers-studio-sn053",
    "familyName": "ALEXANDER MCQUEEN SNEAKERS",
    "subcategory": "Sneakers",
    "tags": [
      "footwear",
      "sneakers",
      "sneakers"
    ],
    "newArrival": true,
    "id": 60045,
    "parentProductId": 60045,
    "name": "ALEXANDER MCQUEEN SNEAKERS \u2014 WHITE / BLACK",
    "image": "https://res.cloudinary.com/hobndbjx/image/upload/e2448b16-aeed-4e23-a7e6-ba358505bf0e",
    "secondaryImage": "https://res.cloudinary.com/hobndbjx/image/upload/b283dfd3-c4f1-427d-8219-f4935d4fbfb8",
    "gallery": [
      "https://res.cloudinary.com/hobndbjx/image/upload/e2448b16-aeed-4e23-a7e6-ba358505bf0e",
      "https://res.cloudinary.com/hobndbjx/image/upload/b283dfd3-c4f1-427d-8219-f4935d4fbfb8",
      "https://res.cloudinary.com/hobndbjx/image/upload/fdcbc6a6-aed5-47ef-be55-b91f04905632",
      "https://res.cloudinary.com/hobndbjx/image/upload/b582a2e6-2c09-48fa-868a-ba120610e0df"
    ],
    "media": [
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/e2448b16-aeed-4e23-a7e6-ba358505bf0e",
        "color": "White / Black"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/b283dfd3-c4f1-427d-8219-f4935d4fbfb8",
        "color": "White / Black"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/fdcbc6a6-aed5-47ef-be55-b91f04905632",
        "color": "White / Black"
      },
      {
        "type": "image",
        "src": "https://res.cloudinary.com/hobndbjx/image/upload/b582a2e6-2c09-48fa-868a-ba120610e0df",
        "color": "White / Black"
      }
    ],
    "variants": [
      {
        "color": "White / Black",
        "image": "https://res.cloudinary.com/hobndbjx/image/upload/e2448b16-aeed-4e23-a7e6-ba358505bf0e",
        "media": [
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/e2448b16-aeed-4e23-a7e6-ba358505bf0e",
            "color": "White / Black"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/b283dfd3-c4f1-427d-8219-f4935d4fbfb8",
            "color": "White / Black"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/fdcbc6a6-aed5-47ef-be55-b91f04905632",
            "color": "White / Black"
          },
          {
            "type": "image",
            "src": "https://res.cloudinary.com/hobndbjx/image/upload/b582a2e6-2c09-48fa-868a-ba120610e0df",
            "color": "White / Black"
          }
        ]
      }
    ],
    "colors": [
      "White / Black"
    ],
    "images": [
      "https://res.cloudinary.com/hobndbjx/image/upload/e2448b16-aeed-4e23-a7e6-ba358505bf0e",
      "https://res.cloudinary.com/hobndbjx/image/upload/b283dfd3-c4f1-427d-8219-f4935d4fbfb8",
      "https://res.cloudinary.com/hobndbjx/image/upload/fdcbc6a6-aed5-47ef-be55-b91f04905632",
      "https://res.cloudinary.com/hobndbjx/image/upload/b582a2e6-2c09-48fa-868a-ba120610e0df"
    ],
    "mediaRevision": "sneakers-rebuild-2026-10-23"
  }
]
