import './globals.css'
import '../styles/layout.css'

export const metadata = {
  title: 'Precision Advertising',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="container">
        <header>
          <div className="title-bar">
            <div className="icon">{/* *Temporary Icon* */}</div>
            Precision Advertising: Get more Real Clicks and Real Results
          </div>
          <nav className="menu-tabs">
            <ul>
              <li><a href="#">Create Your Own Ads</a></li>
              <li><a href="#">Targeted Ads</a></li>
              <li><a href="#">Register Ad Spaces</a></li>
              <li><a href="#">Results</a></li>
              <li><a href="#">Account Information</a></li>
            </ul>
          </nav>
        </header>

        <div className="content-area">
          <main>{children}</main>

          <aside>
            <h2>AI Chat Support</h2>
            <p>Have questions? Our AI assistant is here to help.</p>
            <button className="chat-button">Chat Now</button>
          </aside>
        </div>

        <footer>
          <p>© {new Date().getFullYear()} Precision Advertising LLC</p>
          <p>Contact: info@precisionads.com • (123) 456-7890</p>
        </footer>
      </body>
    </html>
  )
}
