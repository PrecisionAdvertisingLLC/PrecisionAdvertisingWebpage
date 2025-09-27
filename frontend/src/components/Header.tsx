import Link from 'next/link'
import '../styles/layout.css'

export default function Header() {
  return (
    <header className="header">
      <nav className="nav-links">
        <Link href="/">Home</Link>
        <Link href="/ads">Ads</Link>
        <Link href="/#pricing">Pricing</Link>
        <Link href="/#contact">Contact</Link>
      </nav>
    </header>
  )
}
