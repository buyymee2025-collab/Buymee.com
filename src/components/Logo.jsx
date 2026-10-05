import SiteImage from './SiteImage'
import { Link } from 'react-router-dom'
import { uploadedLogo } from '../data/assets'

export default function Logo({ light = false, onClick }) {
  return (
    <Link to="/" onClick={onClick} className={`logo-image ${light ? 'logo-image-light' : ''}`} aria-label="BUY Y MEE home">
      <SiteImage src={uploadedLogo} alt="BUY Y MEE" />
    </Link>
  )
}
