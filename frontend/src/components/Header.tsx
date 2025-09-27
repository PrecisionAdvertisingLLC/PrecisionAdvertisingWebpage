// src/components/Header.tsx

export default function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <img
          src="/temp.png"
          alt="Temporary Icon"
          className="header-icon"
          width={48}
          height={48}
        />
        <div className="header-text">
          <h1 className="header-title">Precision Advertising LLC</h1>
          <h2 className="header-slogan">Get Real Clicks and Real Results</h2>
        </div>
      </div>
    </header>
  )