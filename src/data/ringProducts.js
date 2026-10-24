// Visually matched front and side views from the owner's Cloudinary uploads, October 23–24, 2026.
const cloud = 'https://res.cloudinary.com/hobndbjx/image/upload/'
const ringPairs = [
  {
    "code": "RG-001",
    "name": "YELLOW RECTANGULAR STONE ORNATE SIGNET RING",
    "color": "Gold / Yellow",
    "front": "exec-d629f45c-3618-47cc-9c07-f7fb99fcb523",
    "side": "exec-50b2ef9e-d3a2-42d9-b78e-731128fa3712"
  },
  {
    "code": "RG-002",
    "name": "BLUE RECTANGULAR STONE FLEUR-DE-LIS RING",
    "color": "Silver / Blue",
    "front": "exec-8f264bc4-c7a2-4a96-8c70-213587f16dff",
    "side": "exec-8d38c2a6-7b6c-42c0-97c1-7069b99be919"
  },
  {
    "code": "RG-003",
    "name": "CHAMPIONSHIP NUMBER ONE SIGNET RING",
    "color": "Gold / Black / Red",
    "front": "exec-4bd87a7e-70e0-4b1e-937b-ad8cc6ba65bc",
    "side": "exec-68d3a8ae-ded0-477a-9d32-009c44b34038"
  },
  {
    "code": "RG-004",
    "name": "GREY SQUARE STONE GEOMETRIC SIGNET RING",
    "color": "Silver / Gold / Grey",
    "front": "exec-318b416f-52d0-4bcc-887c-27ddf4d66a46",
    "side": "exec-fd78682d-5377-4223-9faa-6494c0db5ad0"
  },
  {
    "code": "RG-005",
    "name": "CHAMPAGNE BAGUETTE STONE SIGNET RING",
    "color": "Gold / Champagne",
    "front": "exec-f3668687-6ef4-4f33-b5b8-020cfca5f06c",
    "side": "exec-e7fbd028-7153-48a8-883b-99dc02e49c0f"
  },
  {
    "code": "RG-006",
    "name": "GREEN OVAL STONE CHAMPIONSHIP SIGNET RING",
    "color": "Silver / Green",
    "front": "exec-62112cf5-b420-45eb-8515-07b893a50914",
    "side": "exec-5f4e5b15-89de-4708-b1fe-38821ef64e06"
  },
  {
    "code": "RG-007",
    "name": "YELLOW RECTANGULAR STONE TEXTURED GOLD-TONE SIGNET RING",
    "color": "Gold / Yellow",
    "front": "exec-f3b94a34-7718-40be-9baa-074b053e44cf",
    "side": "exec-c7f3c7e4-2598-4604-8be3-040b0a5cd074"
  },
  {
    "code": "RG-008",
    "name": "GOLD-TONE SCROLL HEXAGONAL SIGNET RING",
    "color": "Silver / Gold / Black",
    "front": "exec-c165782a-bbed-4faa-96a8-1a34d3e38d47",
    "side": "exec-427420fc-a3b0-4875-9719-6cd70f20f4dd"
  },
  {
    "code": "RG-009",
    "name": "CLEAR RECTANGULAR STONE GREEK-KEY SIGNET RING",
    "color": "Silver / Clear",
    "front": "exec-cc73a272-4d22-4193-bc5e-6ade0413c716",
    "side": "exec-194ec4f1-f18d-436e-bf95-37048eeea40f"
  },
  {
    "code": "RG-010",
    "name": "RED OVAL STONE ORNATE GOLD-TONE RING",
    "color": "Gold / Red / Black",
    "front": "exec-acc3a694-5cae-4cae-ad8c-237d210f4581",
    "side": "exec-070437ad-9010-4449-883f-eb8c45a386d5"
  },
  {
    "code": "RG-011",
    "name": "BLACK OVAL STONE TEXTURED GOLD-TONE SIGNET RING",
    "color": "Gold / Black",
    "front": "exec-f7fe4da2-5efd-4889-981b-0b011b9b100d",
    "side": "exec-17e3e838-c3ec-4398-8c39-f1a86e7b0b71"
  },
  {
    "code": "RG-012",
    "name": "BLUE RECTANGULAR STONE CREST SIGNET RING",
    "color": "Gold / Blue",
    "front": "exec-9be5fdff-3957-4678-9346-a6091cabdb83",
    "side": "exec-b1c46fb3-1bd5-413f-bd73-7f5791fbaf3c"
  },
  {
    "code": "RG-013",
    "name": "WHITE OVAL STONE ORNATE SIGNET RING",
    "color": "Silver / White",
    "front": "exec-d877689e-4db7-4107-badc-3cfad203066a",
    "side": "exec-9df9c2bd-a0c9-4e92-906f-d78bd7f6dac1"
  },
  {
    "code": "RG-014",
    "name": "RED RECTANGULAR STONE FLEUR-DE-LIS RING",
    "color": "Silver / Red",
    "front": "exec-a3aa74a3-59f9-4925-bc07-0844d7e6f627",
    "side": "exec-d9cc7444-6c96-4c91-9ad3-261f7b1f5ddf"
  },
  {
    "code": "RG-015",
    "name": "EAGLE LATTICE SIGNET RING",
    "color": "Gold / Silver / Black",
    "front": "exec-4b0a06f2-2e15-44c7-a3cd-b9355c086cb7",
    "side": "exec-5b399b32-e83f-481e-9b83-dcc362fc83ef"
  },
  {
    "code": "RG-016",
    "name": "GREEN RECTANGULAR STONE FLEUR-DE-LIS RING",
    "color": "Gold / Green / Black",
    "front": "exec-ef88802d-33ce-4813-a878-8a29e3f3a13b",
    "side": "exec-d8eab842-a886-4eea-8131-ced2e317e4df"
  },
  {
    "code": "RG-017",
    "name": "RED OVAL STONE CLASSIC GOLD-TONE RING",
    "color": "Gold / Red",
    "front": "exec-0ae8a044-8b8e-4506-b2be-7612fa695ed1",
    "side": "exec-0430f8b6-f486-4837-976c-de811d2682ea"
  },
  {
    "code": "RG-018",
    "name": "BLUE SQUARE STONE GREEK-KEY SIGNET RING",
    "color": "Gold / Blue",
    "front": "exec-28d17fba-c05f-4338-8292-d576718339dc",
    "side": "exec-0e85ebe1-8241-4b5b-a368-3a0270c23728"
  },
  {
    "code": "RG-019",
    "name": "BROWN SQUARE STONE ORNATE SIGNET RING",
    "color": "Gold / Brown / Black",
    "front": "exec-82dd6a0e-c0e1-4c35-bb18-a1b46ab54f07",
    "side": "exec-fcac40b6-9962-44dd-a93c-0f2f3b144620"
  }
]
export const RING_PRODUCTS = ringPairs.map((ring, index) => {
  const gallery = [ring.front, ring.side].map(id => cloud + id)
  const media = gallery.map(src => ({ type: 'image', src, color: ring.color }))
  return {
    id: 70001 + index, parentProductId: 70001 + index,
    productCode: ring.code, slug: 'luxury-rings-' + ring.code.toLowerCase(),
    name: ring.name, familyName: ring.name, category: "Men's Luxury Rings", subcategory: 'Rings',
    brand: 'BUYYMEE.com', currency: 'USD', price: 50, priceOnRequest: false, compareAt: 100,
    discountPricingVersion: 1, priceRevision: 'rings-owner-prices-2026-10-23-v1',
    image: gallery[0], secondaryImage: gallery[1], gallery, images: gallery, media,
    variants: [{ color: ring.color, image: gallery[0], media, price: 50 }], colors: [ring.color],
    sizes: [], tags: ['luxury rings', 'rings', 'signet rings'],
    description: ring.name + '. Contact BUYYMEE for available sizes and delivery details.',
    inStock: true, placeholder: false, featured: false, newArrival: true, sale: true,
    mediaRevision: 'rings-cloudinary-2026-10-23-v1'
  }
})
