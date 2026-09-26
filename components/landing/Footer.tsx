import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="main-footer">
      <div className="site-container">
        <div className="footer-main">
          <div className="footer-about">
            <Link href="/" className="footer-logo">
              <span>🌾</span>
              <strong>Agro Gyaani</strong>
            </Link>

            <p>
              भारतीय किसानों के लिए कृषि जानकारी और डिजिटल सेवाओं को सरल
              तरीके से एक जगह उपलब्ध कराने का प्रयास।
            </p>

            <span className="footer-tagline">
              खेती की जानकारी, आपकी भाषा में।
            </span>
          </div>

          <div className="footer-column">
            <h3>Agro Gyaani</h3>

            <nav>
              <Link href="/about">हमारे बारे में</Link>
              <Link href="/services">हमारी सेवाएं</Link>
              <Link href="/contact">संपर्क करें</Link>
              <Link href="/help">मदद और FAQ</Link>
            </nav>
          </div>

          <div className="footer-column">
            <h3>किसान सेवाएं</h3>

            <nav>
              <Link href="/crops">फसल जानकारी</Link>
              <Link href="/mandi">मंडी भाव</Link>
              <Link href="/weather">मौसम</Link>
              <Link href="/schemes">सरकारी योजनाएं</Link>
              <Link href="/seeds">बीज जानकारी</Link>
            </nav>
          </div>

          <div className="footer-column">
            <h3>अकाउंट</h3>

            <nav>
              <Link href="/register">मुफ्त रजिस्टर करें</Link>
              <Link href="/login">लॉग इन</Link>
            </nav>

            <h3 className="footer-legal-heading">कानूनी</h3>

            <nav>
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms & Conditions</Link>
              <Link href="/disclaimer">Disclaimer</Link>
            </nav>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {year} Agro Gyaani. All rights reserved.</p>

          <p>
            कृषि संबंधी महत्वपूर्ण निर्णय लेने से पहले संबंधित विशेषज्ञ या
            आधिकारिक स्रोत से जानकारी सत्यापित करें।
          </p>
        </div>
      </div>
    </footer>
  );
}