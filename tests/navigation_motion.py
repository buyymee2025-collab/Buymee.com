"""Run with: python3 tests/navigation_motion.py (requires Python Playwright)."""
import json
from pathlib import Path
from playwright.sync_api import sync_playwright, expect

BASE = 'http://localhost:3000'
OUT = Path(__file__).resolve().parents[1] / '.test-results'
OUT.mkdir(exist_ok=True)
results = []


def record(name, details=True):
    results.append({'check': name, 'passed': True, 'details': details})
    print('PASS:', name, flush=True)


with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    errors = []
    desktop = browser.new_page(viewport={'width': 1440, 'height': 950})
    desktop.on('pageerror', lambda e: errors.append(str(e)))
    desktop.goto(BASE, wait_until='domcontentloaded')
    desktop.wait_for_timeout(1300)
    assert desktop.locator('.desktop-nav a').all_text_contents() == ['Home', 'Shop', 'About']
    assert not desktop.get_by_role('button', name='Open menu').is_visible()
    record('Only Home, Shop and About are top-level desktop links')
    desktop.locator('.shop-nav-item').hover()
    expect(desktop.locator('#desktop-shop-menu')).to_be_visible()
    desktop.wait_for_timeout(650)
    for label in ['New In', 'Women', 'Men']:
        path = {'New In': '/new-in', 'Women': '/women', 'Men': '/men'}[label]
        expect(desktop.locator(f'.mega-links a[href="{path}"]')).to_be_visible()
    desktop.screenshot(path=str(OUT / 'desktop-shop.png'))
    record('Desktop Shop dropdown opens and contains New In, Women and Men')
    desktop.keyboard.press('Escape')
    desktop.wait_for_timeout(350)
    expect(desktop.locator('#desktop-shop-menu')).to_have_count(0)
    expect(desktop.get_by_role('button', name='Browse shop categories')).to_be_focused()
    record('Desktop Escape closes the dropdown and restores focus')

    # Confirm that copy below the fold really animates when it enters the viewport.
    paragraph = desktop.locator('.manifesto-strip p')
    expect(paragraph).to_have_class('scroll-reveal')
    assert float(paragraph.evaluate('(el) => getComputedStyle(el).opacity')) == 1
    desktop.evaluate("document.querySelector('.manifesto-strip').scrollIntoView({behavior:'instant', block:'center'})")
    desktop.wait_for_timeout(160)
    opacity = float(paragraph.evaluate('(el) => getComputedStyle(el).opacity'))
    assert 0.7 <= opacity < 1, opacity
    desktop.wait_for_timeout(1300)
    assert float(paragraph.evaluate('(el) => getComputedStyle(el).opacity')) == 1
    record('Content is visible before scrolling and remains visible throughout its smooth entrance')

    desktop.goto(BASE + '/shop', wait_until='domcontentloaded')
    desktop.wait_for_timeout(500)
    desktop.get_by_role('textbox', name='Search the edit').fill('Tissot')
    desktop.get_by_role('combobox', name='Sort products').select_option('high')
    desktop.evaluate('window.scrollTo({top: 1200, behavior: "instant"})')
    desktop.locator('.desktop-nav a[href="/shop"]').click()
    desktop.wait_for_timeout(650)
    assert desktop.evaluate('window.scrollY') == 0
    expect(desktop.get_by_role('textbox', name='Search the edit')).to_have_value('')
    expect(desktop.get_by_role('combobox', name='Sort products')).to_have_value('featured')
    record('Same-page Shop click resets scroll, search and sorting')

    desktop.mouse.move(1000, 100)
    desktop.locator('.shop-nav-item').hover()
    desktop.locator('.mega-links a[href="/women"]').click()
    desktop.wait_for_timeout(650)
    women_meta = desktop.locator('.product-meta > span').all_text_contents()
    assert women_meta and all('women' in text.lower() for text in women_meta)
    desktop.locator('.shop-nav-item').hover()
    desktop.locator('.mega-links a[href="/men"]').click()
    desktop.wait_for_timeout(650)
    men_meta = desktop.locator('.product-meta > span').all_text_contents()
    assert men_meta and all('men' in text.lower() and 'women' not in text.lower() for text in men_meta), men_meta
    assert desktop.evaluate('window.scrollY') == 0
    record('Women → Men starts a fresh correctly filtered category page')

    mobile = browser.new_page(viewport={'width': 390, 'height': 844}, is_mobile=True, has_touch=True)
    mobile.on('pageerror', lambda e: errors.append(str(e)))
    mobile.goto(BASE, wait_until='domcontentloaded')
    mobile.wait_for_timeout(1000)
    mobile.get_by_role('button', name='Open menu').click()
    mobile.wait_for_timeout(700)
    expect(mobile.get_by_role('dialog', name='Mobile navigation')).to_be_visible()
    assert mobile.evaluate('document.body.style.overflow') == 'hidden'
    expect(mobile.get_by_role('button', name='Close menu')).to_be_focused()
    assert mobile.locator('.mobile-menu-nav > div > a').all_text_contents() == ['01Home↗', '03About↗', '04Contact↗']
    record('Mobile panel opens smoothly, locks the background and focuses its close control')
    toggle = mobile.get_by_role('button', name='02 Shop')
    toggle.click()
    mobile.wait_for_timeout(700)
    expect(toggle).to_have_attribute('aria-expanded', 'true')
    for label in ['New In', 'Women', 'Men']:
        expect(mobile.locator('.mobile-shop-links').get_by_role('link', name=label, exact=True)).to_be_visible()
    assert mobile.locator('.mobile-shop-links a').count() == 10
    mobile.screenshot(path=str(OUT / 'mobile-shop.png'))
    assert mobile.evaluate('document.documentElement.scrollWidth <= window.innerWidth')
    record('Mobile Shop expands with all categories and no horizontal overflow')
    toggle.click()
    mobile.wait_for_timeout(650)
    expect(toggle).to_have_attribute('aria-expanded', 'false')
    assert mobile.locator('.mobile-shop-links a').evaluate_all('(links) => links.every(a => a.tabIndex === -1)')
    record('Closed mobile Shop removes hidden links from keyboard tab order')
    mobile.keyboard.press('Escape')
    mobile.wait_for_timeout(500)
    expect(mobile.locator('#mobile-navigation')).to_have_count(0)
    expect(mobile.get_by_role('button', name='Open menu')).to_be_focused()
    assert mobile.evaluate('document.body.style.overflow') != 'hidden'
    assert mobile.evaluate('!document.querySelector("main").inert && !document.querySelector("footer").inert')
    record('Mobile Escape restores focus, scrolling and background accessibility')

    mobile.get_by_role('button', name='Open menu').click()
    mobile.wait_for_timeout(650)
    mobile.get_by_role('button', name='02 Shop').click()
    mobile.wait_for_timeout(650)
    mobile.locator('.mobile-shop-links a[href="/women"]').click()
    mobile.wait_for_timeout(700)
    assert mobile.url.endswith('/women')
    assert mobile.evaluate('window.scrollY') == 0
    expect(mobile.locator('#mobile-navigation')).to_have_count(0)
    assert mobile.evaluate('document.body.style.overflow') != 'hidden'
    record('Mobile category navigation closes menus and starts destination at the top')

    # The entire expanded menu must remain usable on small/short devices.
    mobile.set_viewport_size({'width': 320, 'height': 568})
    mobile.get_by_role('button', name='Open menu').click()
    mobile.wait_for_timeout(650)
    mobile.get_by_role('button', name='02 Shop').click()
    mobile.wait_for_timeout(650)
    mobile.locator('.mobile-menu-nav a[href="/contact"]').click()
    mobile.wait_for_timeout(650)
    assert mobile.url.endswith('/contact')
    assert mobile.evaluate('document.documentElement.scrollWidth <= window.innerWidth')
    record('Expanded menu remains scrollable and navigable at 320 × 568')

    reduced = browser.new_page(viewport={'width': 390, 'height': 844}, reduced_motion='reduce')
    reduced.on('pageerror', lambda e: errors.append(str(e)))
    reduced.goto(BASE, wait_until='domcontentloaded')
    reduced.wait_for_timeout(500)
    assert reduced.locator('.route-refresh').count() == 0
    assert reduced.locator('.scroll-reveal').count() == 0
    assert float(reduced.locator('main').evaluate('(el) => getComputedStyle(el).opacity')) == 1
    reduced.get_by_role('button', name='Open menu').click()
    reduced.get_by_role('button', name='02 Shop').click()
    expect(reduced.locator('.mobile-shop-links a[href="/men"]')).to_be_visible()
    record('Reduced motion keeps content visible and all navigation functional')

    # Existing shopping state must survive a fresh page reset.
    desktop.goto(BASE + '/shop', wait_until='domcontentloaded')
    desktop.wait_for_timeout(700)
    card = desktop.locator('.product-card').first
    card.hover()
    card.get_by_role('button', name='ADD TO BAG').click()
    expect(desktop.locator('.cart-drawer')).to_be_visible()
    cart_before = desktop.evaluate('localStorage.getItem("bym-cart")')
    desktop.evaluate("document.querySelector('.drawer-backdrop').click()")
    desktop.locator('.desktop-nav a[href="/about"]').click()
    desktop.wait_for_timeout(600)
    assert desktop.evaluate('localStorage.getItem("bym-cart")') == cart_before
    expect(desktop.locator('.cart-drawer')).to_have_count(0)
    record('Fresh page preserves shopping bag and closes transient drawers')

    assert not errors, errors
    record('No application runtime errors', errors)
    browser.close()

(OUT / 'results.json').write_text(json.dumps(results, indent=2) + '\n')
print(f'{len(results)} checks passed. Results: {OUT / "results.json"}')
