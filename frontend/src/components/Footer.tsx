import '../styles/layout.css'

export default function Footer() {
  return (
    <footer className="footer">
      © {new Date().getFullYear()} Precision Advertising LLC
    </footer>
  )
}
