// Remote-only footage: no video files are stored in the project.
// Pexels licence: https://www.pexels.com/license/
// Source pages and creators are retained here for maintenance and attribution.
const pexels = (id, file, slug, creator) => ({
  src: `https://videos.pexels.com/video-files/${id}/${file}.mp4`,
  source: `https://www.pexels.com/video/${slug}-${id}/`,
  creator,
})

export const categoryHeroVideos = {
  '/new-in': pexels(10558372, '10558372-uhd_4096_2160_25fps', 'a-man-hanging-a-white-t-shirt-on-a-clothing-rack', 'Ron Lach'),
  '/men': pexels(8377877, '8377877-hd_1920_1080_24fps', 'a-man-posing-wearing-a-black-suit', 'PNW Production'),
  '/women': pexels(5822803, '5822803-hd_1920_1080_25fps', 'woman-walking-and-modeling-in-a-train-station', 'cottonbro studio'),
  '/shoes': pexels(18513397, '18513397-hd_1920_1080_24fps', 'a-woman-s-feet-in-high-heels-are-shown', 'Khanh Hoang Minh 2'),
  '/sneakers': pexels(853820, '853820-hd_1920_1080_25fps', 'man-tying-shoelace', 'Coverr'),
  '/eye-wears': pexels(5241167, '5241167-hd_1920_1080_25fps', 'close-up-video-of-sunglasses', 'Kaboompics'),
  '/fragrance': pexels(8447362, '8447362-uhd_4096_2160_25fps', 'a-bottle-of-a-perfume', 'MART PRODUCTION'),
  '/accessories': pexels(9583626, '9583626-hd_1920_1080_30fps', 'beautiful-necklace-of-a-woman', 'ALTECH Studio'),
  '/watches': { src: 'https://res.cloudinary.com/mdbhqnv7/video/upload/v1791313609/1006_4.mp4', source: 'Existing BUYYMEE watch hero' },
}
