import SiteImage from '../components/SiteImage'
import ShopGrid from '../components/ShopGrid'
import { SectionLabel } from '../components/Primitives'
import { RING_PRODUCTS } from '../data/ringProducts'
import '../luxury-rings.css'

export default function LuxuryRings() {
  return (
    <div className="luxury-rings-page" data-category="men's luxury rings">
      <section className="rings-hero">
        <div className="rings-hero-copy">
          <SectionLabel>MEN'S LUXURY RINGS / THE COLLECTION</SectionLabel>
          <h1>Men’s Luxury<br /><em>Rings.</em></h1>
          <p>A statement in every detail. Discover our collection of signet and stone-set rings.</p>
          <a className="button dark" href="#rings-collection">EXPLORE THE COLLECTION <span aria-hidden="true">↘</span></a>
        </div>
        <div className="rings-hero-image">
          <SiteImage src={RING_PRODUCTS[0].image} alt={RING_PRODUCTS[0].name} loading="eager" imageWidth={1200} />
        </div>
      </section>
      <section id="rings-collection" className="category-new-catalogue section-pad">
        <div className="catalogue-new-intro">
          <div><SectionLabel>THE RING COLLECTION</SectionLabel><h2>The finishing<br /><em>touch.</em></h2></div>
          <p>Explore each ring from the front and side. Contact us for prices and available sizes.</p>
        </div>
        <ShopGrid initial="men's luxury rings" categoryOnly />
      </section>
    </div>
  )
}
