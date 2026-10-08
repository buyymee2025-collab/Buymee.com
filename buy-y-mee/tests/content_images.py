"""Run against a dev server on port 3000: python3 tests/content_images.py."""
import json
import subprocess
from pathlib import Path
from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / '.test-results'
OUT.mkdir(exist_ok=True)
BASE = 'http://localhost:3000'
products = json.loads(subprocess.check_output([
    'node', '--input-type=module', '-e',
    "import p from './src/data/products.js'; import {categoryProducts as c} from './src/data/categoryProducts.js'; console.log(JSON.stringify([...p,...Object.values(c).flat()]))"
], cwd=ROOT, text=True))
routes = [r['path'] for r in json.loads((ROOT / 'public/manus-routes.json').read_text())['routes'] if ':' not in r['path']]
results = []

CHECK_CONTENT = """() => {
 const hidden = [];
 const nodes = document.querySelectorAll('main h1, main h2, main h3, main p, main .product-card, main .constellation-card, main img, footer h2');
 for (const node of nodes) {
  for (let el = node; el && el.tagName !== 'BODY'; el = el.parentElement) {
   const s = getComputedStyle(el);
   if (+s.opacity < .05 || s.visibility === 'hidden' || s.display === 'none' || s.clipPath.includes('100%')) {
    hidden.push({text:(node.innerText||node.alt||node.className).slice(0,70),reason:s.opacity+' / '+s.clipPath}); break;
   }
  }
 }
 return hidden;
}"""

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page(viewport={'width': 1440, 'height': 950})
    errors = []
    page.on('pageerror', lambda e: errors.append(str(e)))
    # Prove that rendered image elements work without Unsplash or Cloudinary access.
    page.route('https://images.unsplash.com/**', lambda route: route.abort())
    page.route('https://res.cloudinary.com/**', lambda route: route.abort())
    for path in routes:
        page.goto(BASE + path, wait_until='domcontentloaded')
        page.wait_for_timeout(650)
        assert not page.evaluate(CHECK_CONTENT), (path, page.evaluate(CHECK_CONTENT))
        page.evaluate("document.querySelectorAll('img').forEach(img => img.loading = 'eager')")
        page.wait_for_function("[...document.querySelectorAll('img')].every(img => img.complete && img.naturalWidth > 0)", timeout=12000)
        page.evaluate("async () => { await Promise.all([...document.querySelectorAll('img')].map(img => img.decode())); }")
        assert page.locator('.heading-mask').evaluate_all("nodes => nodes.every(el => getComputedStyle(el).overflow === 'visible')")
        images = page.locator('img').count()
        results.append({'route': path, 'visible_content': True, 'loaded_images': images})
        print(f'PASS: {path} content visible; all {images} images load with external image hosts blocked.', flush=True)
        if path == '/':
            assert page.locator('main section').count() == 8
            assert page.locator('.constellation-card').count() == 4
            assert page.locator('.product-stage-grid .product-card').count() == 4
            page.screenshot(path=str(OUT / 'home-restored.png'))
            page.locator('.feature-split-new').screenshot(path=str(OUT / 'watch-restored.png'))
            page.locator('.dress-story-new').screenshot(path=str(OUT / 'dress-restored.png'))
        if path in ['/shoes', '/bags', '/accessories']:
            page.locator('.category-new-catalogue').screenshot(path=str(OUT / (path[1:] + '-consistent.png')))
        if path == '/shop':
            assert page.locator('.product-card').count() == len(products) == 34
    for product in products:
        page.goto(BASE + '/product/' + product['slug'], wait_until='domcontentloaded')
        page.wait_for_function("document.querySelector('.detail-info h1') !== null")
        assert page.locator('.detail-info h1').inner_text() == product['name']
        assert page.locator('.detail-gallery > .bag-frame img').get_attribute('data-image-source') == product['image']
        page.wait_for_function("document.querySelector('.detail-gallery > .bag-frame img').naturalWidth > 0")
    print('PASS: All 34 product details use the correct product name and matching loaded image.', flush=True)
    page.goto(BASE + '/product/nonexistent-product', wait_until='domcontentloaded')
    assert page.locator('.not-found').is_visible()
    assert page.locator('.detail-info').count() == 0
    print('PASS: Unknown product slugs show NotFound rather than an unrelated product.', flush=True)

    # Simulate an observer that never sends an entry (the previous visibility failure).
    stalled = browser.new_page(viewport={'width': 390, 'height': 844})
    stalled.add_init_script("window.IntersectionObserver = class { constructor() {} observe() {} unobserve() {} disconnect() {} takeRecords() { return [] } }")
    stalled.goto(BASE, wait_until='domcontentloaded')
    stalled.wait_for_timeout(1000)
    assert not stalled.evaluate(CHECK_CONTENT), stalled.evaluate(CHECK_CONTENT)
    print('PASS: Mobile content remains visible even when scroll observers never fire.', flush=True)
    stalled.screenshot(path=str(OUT / 'mobile-visible-default.png'))
    assert not errors, errors
    browser.close()

(OUT / 'content-images.json').write_text(json.dumps({'routes': results, 'product_details': len(products), 'stalled_observer_visible': True, 'runtime_errors': errors}, indent=2) + '\n')
print(f'PASS: {len(routes)} routes, {len(products)} product details, all images and fail-open visibility verified.', flush=True)
