
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
  sneakers: (() => {
    const cloud = (id) => `https://res.cloudinary.com/dnvgl9k4i/image/upload/${id}`
    const product = (id, slug, name, brand, color, photos) => {
      const gallery = [...new Set(photos)].map(cloud)
      return {
        id, slug, name, category: 'Sneakers', subcategory: 'Sneakers', brand,
        price: 0, priceOnRequest: true, compareAt: null, currency: 'USD',
        image: gallery[0], secondaryImage: gallery[1] || gallery[0], gallery,
        variants: [{ color, image: gallery[0], media: gallery.map(src => ({ type: 'image', src })) }],
        description: `${brand} sneaker in ${color.toLowerCase()}. Contact us to confirm sizes and availability.`,
        sizes: ['40', '41', '42', '43', '44'], sizeAvailability: { uk: '8', us: '9', eu: '43' },
        colors: [color], tags: ['sneakers', brand.toLowerCase(), color.toLowerCase()],
        inStock: true, placeholder: false, featured: false, newArrival: true, sale: false,
      }
    }
    return [
      product(121, 'lv-trainer-denim-blue', 'Louis Vuitton LV Trainer — Blue Denim', 'Louis Vuitton', 'Blue denim', ['ChatGPT_Image_Oct_9_2026_06_00_51_AM_qn4vfj','ChatGPT_Image_Oct_9_2026_06_01_59_AM_yijk6g','ChatGPT_Image_Oct_9_2026_06_00_25_AM_uh1nvb','ChatGPT_Image_Oct_8_2026_03_26_31_AM_vubfkn','ChatGPT_Image_Oct_8_2026_03_28_05_AM_qjfbe9','ChatGPT_Image_Oct_8_2026_03_25_56_AM_lb33hr','ChatGPT_Image_Oct_8_2026_03_24_46_AM_zjaprp','ChatGPT_Image_Oct_8_2026_03_17_02_AM_j06vxy','ChatGPT_Image_Oct_8_2026_03_23_26_AM_qjysal']),
      product(122, 'lv-trainer-blue', 'Louis Vuitton LV Trainer — Blue', 'Louis Vuitton', 'Blue', ['ChatGPT_Image_Oct_8_2026_03_05_57_AM_jotlml','ChatGPT_Image_Oct_8_2026_03_11_59_AM_vfuqyq','ChatGPT_Image_Oct_8_2026_03_11_59_AM_qdekmp','ChatGPT_Image_Oct_8_2026_03_08_28_AM_eadgzi','ChatGPT_Image_Oct_8_2026_03_08_28_AM_com1wu','ChatGPT_Image_Oct_8_2026_03_08_28_AM_w1cmne','ChatGPT_Image_Oct_8_2026_03_05_57_AM_aqbexg','ChatGPT_Image_Oct_8_2026_03_05_57_AM_i67eud']),
      product(123, 'lv-trainer-black-white', 'Louis Vuitton LV Trainer — Black / White', 'Louis Vuitton', 'Black and white', ['ChatGPT_Image_Oct_8_2026_03_53_56_AM_u8j2em','ChatGPT_Image_Oct_8_2026_03_52_29_AM_hwvkkl','ChatGPT_Image_Oct_8_2026_03_52_43_AM_qqhsxu']),
      product(124, 'lv-trainer-orange-green', 'Louis Vuitton LV Trainer — Orange / Light Green', 'Louis Vuitton', 'Orange and light green', ['ChatGPT_Image_Oct_8_2026_03_46_36_AM_uwpzca','ChatGPT_Image_Oct_8_2026_03_33_53_AM_hz1bql','ChatGPT_Image_Oct_8_2026_03_32_41_AM_wvqvn7','ChatGPT_Image_Oct_8_2026_03_48_15_AM_lbhjxq','ChatGPT_Image_Oct_8_2026_03_45_10_AM_plovxw']),
      product(125, 'lv-trainer-white-green', 'Louis Vuitton LV Trainer — White / Green', 'Louis Vuitton', 'White and green', ['ChatGPT_Image_Oct_8_2026_05_14_55_AM_mmeeke','ChatGPT_Image_Oct_8_2026_04_18_11_AM_wmrwer','ChatGPT_Image_Oct_8_2026_04_14_21_AM_y0fpsd','ChatGPT_Image_Oct_8_2026_05_12_38_AM_qu3rwg','ChatGPT_Image_Oct_8_2026_05_13_35_AM_gjl6ug','ChatGPT_Image_Oct_8_2026_05_02_14_AM_dmqgtn','ChatGPT_Image_Oct_8_2026_05_00_58_AM_fopchl']),
      product(126, 'lv-trainer-purple-blue', 'Louis Vuitton LV Trainer — Purple / Blue', 'Louis Vuitton', 'Light purple and sea blue', ['ChatGPT_Image_Oct_8_2026_04_01_00_AM_fzcsmj','ChatGPT_Image_Oct_8_2026_03_57_15_AM_aecnit']),
      product(127, 'lv-trainer-orange-ash', 'Louis Vuitton LV Trainer — Orange / Ash', 'Louis Vuitton', 'Orange and ash grey', ['ChatGPT_Image_Oct_8_2026_05_20_42_AM_uoxxvj','ChatGPT_Image_Oct_8_2026_05_22_52_AM_qyijt5','ChatGPT_Image_Oct_8_2026_05_17_29_AM_zsnvkm']),
      product(128, 'lv-trainer-orange', 'Louis Vuitton LV Trainer — Orange', 'Louis Vuitton', 'Orange', ['ChatGPT_Image_Oct_8_2026_04_10_21_AM_lyfp2w','ChatGPT_Image_Oct_8_2026_04_02_44_AM_hdey5d','ChatGPT_Image_Oct_8_2026_04_03_56_AM_y6ikbm']),
      product(129, 'lv-trainer-purple-white', 'Louis Vuitton LV Trainer — Purple / White', 'Louis Vuitton', 'Purple and white', ['ChatGPT_Image_Oct_9_2026_03_56_28_AM_rlt8q2','ChatGPT_Image_Oct_9_2026_03_51_36_AM_ubbiz7']),
      product(160, 'bape-sneaker-white-black', 'BAPE Sneaker — White / Black', 'BAPE', 'White and black', ['download_t4mwnu','ChatGPT_Image_Oct_9_2026_05_34_55_AM_nl0lh5','ChatGPT_Image_Oct_9_2026_05_34_01_AM_rehbpb','ChatGPT_Image_Oct_9_2026_05_31_32_AM_p74lui','ChatGPT_Image_Oct_9_2026_05_44_01_AM_rakcxi']),
      product(161, 'adidas-sneaker-pink-white', 'adidas Sneaker — Pink / White', 'adidas', 'Pink and white', ['exec-69f6e04f-40b1-40c7-9046-cce8e78f660e_ncixjl','exec-1f72a118-fb8a-4d81-8455-6a8bc978ef95_hu6zey','exec-c24aa495-5099-4b35-a543-57066814c52f_ompylf']),
      product(162, 'adidas-sneaker-black', 'adidas Sneaker — Black', 'adidas', 'Black', ['ChatGPT_Image_Oct_9_2026_05_14_11_AM_gqanu6','ChatGPT_Image_Oct_9_2026_05_12_58_AM_t9bqmj','ChatGPT_Image_Oct_9_2026_05_13_12_AM_e1pijg']),
      product(163, 'golden-goose-white-brown', 'Golden Goose Sneaker — White / Brown', 'Golden Goose', 'White and brown', ['exec-8acaf730-be4a-4fd5-9d3c-140c0bd7893e_utfcwy','ChatGPT_Image_Oct_9_2026_05_52_10_AM_gnltla','ChatGPT_Image_Oct_9_2026_05_54_30_AM_j8ctsi']),
      product(164, 'yeezy-boost-black', 'Yeezy Boost — Black', 'adidas Yeezy', 'Black', ['ChatGPT_Image_Oct_9_2026_05_07_51_AM_vifleo','ChatGPT_Image_Oct_9_2026_05_06_08_AM_zakpp4','ChatGPT_Image_Oct_9_2026_05_04_22_AM_ftv7iu']),
      product(165, 'air-sneaker-white-blue', 'Nike Air Sneaker — White / Blue', 'Nike', 'White and blue', ['exec-e1e8b78f-58be-474a-8127-cf71d3907f0b_effxa2','exec-05b483e9-a412-49ae-8e7f-a17988769703_ob7wpk','exec-db13ee37-70b4-4081-ab05-119d1fa55177_lgorhb']),
      product(166, 'nike-white-grey', 'Nike Sneaker — White / Grey', 'Nike', 'White and grey', ['ChatGPT_Image_Oct_9_2026_06_32_54_AM_krgqhv']),
      product(167, 'nike-navy-white', 'Nike Sneaker — Navy / White', 'Nike', 'Navy and white', ['ChatGPT_Image_Oct_9_2026_06_28_20_AM_jszjwc','ChatGPT_Image_Oct_9_2026_06_27_30_AM_jmchua','ChatGPT_Image_Oct_9_2026_06_26_06_AM_ja3zzz']),
      product(168, 'nike-brown-white', 'Nike Sneaker — Brown / White', 'Nike', 'Brown and white', ['ChatGPT_Image_Oct_9_2026_06_22_04_AM_jdvktj','ChatGPT_Image_Oct_9_2026_06_18_58_AM_goq3nw','ChatGPT_Image_Oct_9_2026_06_18_03_AM_xwlvvp']),
      product(169, 'runner-army-green-milk', 'Runner Sneaker — Army Green / Milk', 'Runner', 'Army green and milk', ['ChatGPT_Image_Oct_9_2026_06_43_12_AM_x7ljel','ChatGPT_Image_Oct_9_2026_06_44_00_AM_vldxpg']),
      product(170, 'converse-black-white', 'Converse Sneaker — Black / White', 'Converse', 'Black and white', ['ChatGPT_Image_Oct_9_2026_05_47_14_AM_xgqwhe','ChatGPT_Image_Oct_9_2026_05_47_04_AM_ysvr2h']),
      product(171, 'nike-milk-army-green', 'Nike Sneaker — Milk / Army Green', 'Nike', 'Milk and army green', ['ChatGPT_Image_Oct_9_2026_06_07_31_AM_osylae']),
      product(172, 'lv-trainer-grey-white', 'Louis Vuitton LV Trainer — Grey / White', 'Louis Vuitton', 'Grey and white', ['ChatGPT_Image_Oct_9_2026_04_50_00_AM_yljruu']),
      product(173, 'lv-trainer-sky-blue', 'Louis Vuitton LV Trainer — Sky Blue', 'Louis Vuitton', 'Sky blue', ['ChatGPT_Image_Oct_9_2026_04_02_13_AM_gw0uhp']),
    ]
  })(),

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
