import Link from "next/link";

export default function Header() {
  return (
    <header className="landing-header">
      <div className="site-container landing-header-inner">

        {/* Logo */}
        <Link href="/" className="brand" aria-label="Agro Gyaani Home">
          <span className="brand-icon" aria-hidden="true">
            🌾
          </span>
          <span>Agro Gyaani</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="landing-nav" aria-label="मुख्य नेविगेशन">
          <Link href="/services">सेवाएं</Link>

          <Link href="/#how-it-works">
            कैसे काम करता है
          </Link>

          <Link href="/#benefits">
            क्यों Agro Gyaani
          </Link>

          <Link href="/about">
            हमारे बारे में
          </Link>
        </nav>

        {/* Authentication */}
        <div className="landing-header-actions">
          <Link href="/login" className="header-login">
            लॉग इन
          </Link>

          <Link href="/register" className="header-register">
            मुफ्त रजिस्टर करें
          </Link>
        </div>

      </div>
    </header>
  );
}