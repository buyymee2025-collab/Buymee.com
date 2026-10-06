import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { useState } from 'react'
import Logo from './Logo'

export default function Footer() {
  const [email, setEmail] = useState('')

  return (
    <footer className="footer-new">
      <style>{`
        .footer-new .footer-new-top > .logo-image {
          width: 200px;
          height: 56px;
          max-width: 100%;
        }

        .footer-new .footer-new-word.footer-brand-logo {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: inherit;
          line-height: normal;
          letter-spacing: normal;
          padding: 36px 0;
        }

        .footer-new .footer-brand-logo > .logo-image {
          width: min(520px, 100%);
          height: clamp(88px, 15vw, 164px);
          max-width: 100%;
        }

        .footer-new .footer-new-top > .logo-image img,
        .footer-new .footer-brand-logo > .logo-image img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: 50% 48%;
          filter: none;
        }
      `}</style>

      <div className="footer-new-top">
        <Logo light />

        <div>
          <span className="eyebrow">THE NEWSLETTER</span>

          <h2>
            Keep your
              

            <em>signal.</em>
          </h2>

          <form
            onSubmit={(e) => {
              e.preventDefault()
              setEmail('You are on the list.')
            }}
          >
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
            />

            <button type="submit">
              JOIN <ArrowUpRight size={15} />
            </button>
          </form>
        </div>
      </div>

      <div className="footer-new-grid">
        <div>
          <span>EXPLORE</span>
          <Link to="/shop">Shop</Link>
          <Link to="/new-in">New in</Link>
          <Link to="/women">Women</Link>
          <Link to="/watches">Watches</Link>
        </div>

        <div>
          <span>STAY CLOSE</span>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <a href="https://www.instagram.com/buyymeestore?stkn=MTQyaXYwNGh2MzJ2eA%3D%3D&utm_source=qr">Instagram ↗</a>
          <a href="#">TikTok ↗</a>
        </div>

        <div>
          <span>DELIVERY</span>
          <a href="#">USA / 5-10 days</a>
          <a href="#">UK / 5-10 days</a>
          <a href="#">Nigeria / 5-10 days</a>
          <a href="#">Worldwide / 7–14 days</a>
        </div>
      </div>

      <div className="footer-new-word footer-brand-logo">
        <Logo light />
      </div>

      <div className="footer-new-bottom">
        <span>© 2026 BUYYMEE.COM</span>
        <span>UNITED STATES / UNITED KINGDOM / CANADA</span>
        <span>USD </span>
      </div>
    </footer>
  )
}
