# BUY Y MEE — corrected visibility, navigation and motion

This replacement corrects the hidden-content regression in the previous animation update. It continues from the supplied `buy-y-mee-redesigned-updated.zip`; no original homepage section, category, product, price, size or description has been removed.

## Visibility correction

All page content is **visible by default**. Scroll animations add temporary movement and subtle opacity changes instead of storing `opacity: 0` or a fully closed clip mask on off-screen content. Headline wrappers no longer clip moving or wrapped text. An interrupted animation or a scroll observer that never fires cannot leave those elements hidden. Smooth staggered text/card entrances, image movement, scroll-linked parallax, editorial accent movement, page transitions and reading progress remain.

## Navigation and page transitions

The desktop navbar is Home / Shop / About. New In, Women and Men are inside Shop with the other categories. Mobile uses the slide-in menu and nested Shop accordion, with scroll locking, focus management, Escape, hidden-link tab removal and short-screen scrolling.

Each page navigation, including selecting the current page again, resets destination page-local state and scrolling, closes menus/drawers and replays the entrance. Cart, wishlist and currency persist. This is an application-level refresh/reset, not a forced browser/network reload.

## Images and matching product pages

Existing uploaded Cloudinary photographs are retained and served from optimized local copies. The project includes its image files in `public/images/`; cards, category heroes, logo, galleries and the video poster resolve to those files rather than waiting on remote image hosts.

The Unsplash-backed edits were visually checked. Wrong-category and broken photos were corrected: menswear tailoring instead of women's sportswear, actual loafers instead of a portrait, a working neutral heel photo, a genuine tote for the carryall, working fragrance imagery, and distinct jewellery photographs. Category heroes and cards use a consistent restrained treatment; stock product photographs use `object-fit: contain` so complete silhouettes are not cropped away. Original source records are in `public/image-sources.json` and `public/replacement-image-sources.json`.

All 34 existing products now share one catalog. Category-product links open their own matching image, name and details instead of falling back to an unrelated watch. Category grids do not duplicate products. The supplied logo is unchanged; its UI crop removes only outer whitespace, and the opaque logo is no longer inverted into a blank white block.

## Run and build

Use Node.js 22 or later:

```bash
npm ci
npm run dev
npm run build
npm run preview
```

Deploy the contents of `dist/`. Configure unknown page routes to fall back to `index.html`, while serving real image/assets files normally. The replacement ZIP includes both editable source and the complete production build with bundled images.

## Main editing locations

| File | Purpose |
| --- | --- |
| `src/components/Navbar.jsx` | Desktop dropdown and accessible mobile menu/Shop accordion |
| `src/components/PageShell.jsx` | Page reset, entrance and reading progress |
| `src/components/Primitives.jsx` | Visible-by-default motion primitives and parallax |
| `src/components/ScrollMotion.jsx` | Temporary scroll animations; no persistent hiding |
| `src/motion.css` | Additive navigation, movement, image framing and reduced-motion styles |
| `src/components/SiteImage.jsx` / `src/lib/images.js` | Bundled image resolution and fallback |
| `src/data/imageMap.json` / `public/images/` | Original image URL → local optimized file mapping |
| `src/data/categoryProducts.js` | Existing category products with corrected photo assignments |
| `src/context/StoreContext.jsx` | Unified catalog and persistent shopping state |
| `src/index.css` | Preserved original base design |

## Verified checks

The production build passes. Tests verified visible content and loaded images across all 16 concrete page routes, all 34 matching product-detail routes, no content hiding when scroll observers never fire, and image loading with Unsplash/Cloudinary blocked. The 15 interaction checks also passed for dropdowns, mobile navigation, page resets, reduced motion and shopping-bag preservation.

With the development server on port 3000:

```bash
python3 -m pip install playwright
python3 -m playwright install chromium
python3 tests/content_images.py
python3 tests/navigation_motion.py
```

This remains a frontend storefront, not a newly integrated live checkout/order backend. Stock catalog photos remain illustrative placeholders, as in the supplied category data. The original video source remains remote, with a bundled poster fallback. No paid or watermarked search preview was used for the replacement images.
