import SiteImage from '../components/SiteImage'
import { useEffect, useRef } from 'react'
import { useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Check } from 'lucide-react'
import { categories } from '../data/categories'
import products from '../data/products'
import { uploadedVideo, dressAssets, watchAssets } from '../data/assets'
import ProductCard from '../components/ProductCard'
import {
  AnimatedHeading,
  EditorialNumber,
  Reveal,
  ScrollAccent,
  ScrollImage,
  SectionLabel,
} from '../components/Primitives'

const editorialProducts = products.slice(0, 6)
const heroVideo = uploadedVideo.replace(/\.mov(?=[?#]|$)/i, '.mp4')

const markets = [
  { name: 'UNITED STATES', label: 'US' },
  { name: 'UNITED KINGDOM', label: 'UK' },
  { name: 'CANADA', label: 'CA' },
]

export default function Home() {
  const reduced = useReducedMotion()
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    video.muted = true
    video.defaultMuted = true

    if (reduced) {
      video.pause()
    } else {
      video.play().catch(() => {})
    }

    return () => {
      video.pause()
    }
  }, [reduced])

  return (
    <div className="home-redesign">
      <style>{`
        @media (max-width: 767px) {
          .home-redesign .locations-new .location-logo {
            transform: translateX(-16px);
          }
        }

        @media (min-width: 901px) {
          .home-redesign .hero-new .hero-new-rail {
            position: absolute;
            top: 50%;
            right: clamp(24px, 5vw, 80px);
            bottom: auto;
            left: auto;
            z-index: 3;
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            gap: 16px;
            width: max-content;
            writing-mode: horizontal-tb;
            text-orientation: mixed;
            transform: translateY(-50%);
            text-align: right;
            font-size: clamp(9px, 0.8vw, 12px);
            line-height: 1.6;
            letter-spacing: 0.12em;
          }

          .home-redesign .hero-new .hero-new-rail span {
            display: block;
            writing-mode: horizontal-tb;
            text-orientation: mixed;
            transform: none;
            white-space: nowrap;
          }
        }
      `}</style>

      <section
        className="hero-new"
        style={{
          position: 'relative',
          isolation: 'isolate',
          overflow: 'hidden',
          backgroundImage: 'none',
          backgroundColor: '#050f1e',
        }}
      >
        <video
          ref={videoRef}
          autoPlay={!reduced}
          muted
          loop={!reduced}
          playsInline
          preload="auto"
          aria-hidden="true"
          tabIndex={-1}
          onCanPlay={(event) => {
            if (!reduced) {
              event.currentTarget.play().catch(() => {})
            }
          }}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            display: 'block',
            opacity: 1,
            zIndex: 0,
            pointerEvents: 'none',
          }}
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        <div
          className="hero-new-overlay"
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 1,
            pointerEvents: 'none',
          }}
        />

        <div
          className="hero-new-grid"
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 2,
            pointerEvents: 'none',
          }}
        />

        <div
          className="hero-new-copy"
          style={{ position: 'relative', zIndex: 3 }}
        >
          <span className="hero-index">/ 001 — THE FIRST EDIT</span>

          <AnimatedHeading
            as="h1"
            delay={0.12}
            lines={[
              'Find',
              <i key="your">your</i>,
              <>
                signal<span>.</span>
              </>,
            ]}
          />

          <p>
            Watches and dresses chosen for people with somewhere to go.
          </p>

          <div className="hero-new-actions">
            <Link to="/shop" className="button orange">
              ENTER THE EDIT <ArrowUpRight size={17} />
            </Link>

            <Link to="/about" className="hero-text-link">
              The story / 02
            </Link>
          </div>
        </div>

        <div className="hero-new-rail" style={{ zIndex: 3 }}>
          <span>BUYYMEE</span>
          <span>GLOBAL FASHION / LIFESTYLE</span>
          <span>UNITED STATES / UNITED KINGDOM / CANADA</span>
        </div>

        <div className="hero-new-caption" style={{ zIndex: 3 }}>
          <b>01</b>
          <span>PLAYING NOW</span>
          <small>THE BUYYMEE WORLD</small>
        </div>
      </section>

      <section className="manifesto-strip">
        <ScrollAccent
          className="manifesto-mark"
          rotation={8}
          distance={22}
        >
          ↘
        </ScrollAccent>

        <div>
          <span className="eyebrow">A SHARP POINT OF VIEW</span>

          <AnimatedHeading
            lines={[
              'Good style',
              <em key="travels">travels.</em>,
            ]}
          />
        </div>

        <p>
          One tight edit of real watches and dresses. No noise, no filler
          — just pieces with enough presence to become yours.
        </p>

        <Link to="/about" className="circle-link">
          OUR
            

          STORY <ArrowUpRight size={17} />
        </Link>
      </section>

      <section className="category-constellation section-pad">
        <div className="asym-heading">
          <div>
            <SectionLabel number="01">
              THE CURRENT WORLD
            </SectionLabel>

            <AnimatedHeading
              lines={[
                'Choose',
                <em key="angle">your angle.</em>,
              ]}
            />
          </div>

          <EditorialNumber>01</EditorialNumber>

          <p>
            Two categories. Infinite ways to make them feel like you.
          </p>
        </div>

        <div className="constellation-grid">
          {categories.slice(0, 4).map((cat, index) => (
            <Reveal
              className={`constellation-card c-${index + 1}`}
              variant="image"
              delay={index * 0.085}
              key={cat.name}
            >
              <Link to={cat.path}>
                <SiteImage
                  src={cat.image}
                  alt={cat.name}
                  loading="lazy"
                />

                <div className="constellation-overlay">
                  <span>{cat.number} /</span>
                  <h3>{cat.name}</h3>

                  <b>
                    Open the edit <ArrowUpRight size={15} />
                  </b>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="new-in-new section-pad">
        <div className="asym-heading">
          <div>
            <SectionLabel number="02">THE DROP</SectionLabel>

            <AnimatedHeading
              lines={[
                'Right',
                <em key="now">now.</em>,
              ]}
            />
          </div>

          <p>
            Small quantities, strong point of view.
              

            Prices from $73 to $250.
          </p>

          <Link to="/new-in" className="arrow-link">
            See all new in <span>↗</span>
          </Link>
        </div>

        <div className="new-in-stage">
          <div className="stage-note">
            <span>THE CURRENT EDIT</span>
            <strong>04 / 06</strong>
            <i>↘</i>
          </div>

          <div className="product-stage-grid">
            {editorialProducts.slice(0, 4).map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="feature-split-new">
        <Reveal className="feature-visual" variant="image">
          <ScrollImage
            src={watchAssets[13]}
            alt="Tissot-inspired watch from the uploaded edit"
            distance={30}
            rotate={3}
            loading="lazy"
          />

          <span className="feature-vertical">
            WATCH EDIT / A.M. TO P.M.
          </span>
        </Reveal>

        <div className="feature-copy">
          <SectionLabel number="03">
            TIME, RECONSIDERED
          </SectionLabel>

          <AnimatedHeading
            lines={[
              'Wear',
              <em key="moment">the moment.</em>,
            ]}
          />

          <p>
            Clean faces. Exact lines. The quiet confidence of a watch
            that does not need to announce itself.
          </p>

          <Reveal variant="right" delay={0.1}>
            <Link to="/watches" className="button dark">
              SHOP WATCHES <ArrowUpRight size={17} />
            </Link>
          </Reveal>

          <div className="feature-foot">
            <span>01</span>
            <span>08</span>
            <div />
          </div>
        </div>
      </section>

      <section className="dress-story-new">
        <div className="dress-story-copy">
          <SectionLabel number="04">
            THE DRESS EDIT
          </SectionLabel>

          <AnimatedHeading
            lines={[
              'Make an',
              <em key="entrance">entrance.</em>,
            ]}
          />

          <p>
            Silhouettes for the version of you that has already decided.
          </p>

          <Reveal variant="left">
            <Link to="/women" className="arrow-link">
              Open the women's edit <span>↗</span>
            </Link>
          </Reveal>
        </div>

        <Reveal
          className="dress-story-image"
          variant="image"
          delay={0.05}
        >
          <ScrollImage
            src={dressAssets[5]}
            alt="Uploaded dress editorial"
            distance={28}
            loading="lazy"
          />

          <span>02 / 17</span>
        </Reveal>

        <Reveal
          className="dress-story-small"
          variant="image"
          delay={0.2}
        >
          <ScrollImage
            src={dressAssets[8]}
            alt="Uploaded dress detail"
            distance={18}
            loading="lazy"
          />

          <span>THE AFTER HOURS SET</span>
        </Reveal>
      </section>

      <section className="locations-new section-pad">
        <div className="location-copy">
          <img
            className="location-logo"
            src="https://res.cloudinary.com/mdbhqnv7/image/upload/v1791228199/65efa3b8-253a-4101-949d-a5357341efc9.png"
            alt="Buyymee.com"
            width={2172}
            height={724}
            loading="lazy"
            style={{
              display: 'block',
              width: '420px',
              maxWidth: '100%',
              height: 'auto',
              marginBottom: '24px',
            }}
          />

          <AnimatedHeading
            lines={[<em key="world">To The World</em>]}
          />

          <p>
            A considered edit for the United States, the United Kingdom,
            and Canada. Watches and dresses with a global point of view.
          </p>

          <Link to="/contact" className="arrow-link">
            Say hello <span>↗</span>
          </Link>
        </div>

        <div className="location-list">
          {markets.map((market, index) => (
            <div key={market.name}>
              <span>0{index + 1}</span>
              <b>{market.name}</b>
              <small>{market.label}</small>
              <Check size={18} />
            </div>
          ))}
        </div>
      </section>

      <section className="closing-new">
        <ScrollAccent
          className="closing-ghost"
          rotation={-12}
          distance={60}
        >
          Y
        </ScrollAccent>

        <span className="eyebrow">THE LAST WORD</span>

        <AnimatedHeading
          lines={[
            'Keep',
            <em key="looking">looking.</em>,
          ]}
        />

        <Reveal delay={0.12}>
          <Link to="/shop" className="button orange">
            SHOP BUYYMEE <ArrowUpRight size={17} />
          </Link>
        </Reveal>
      </section>
    </div>
  )
}
