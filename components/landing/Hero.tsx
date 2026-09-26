import Link from "next/link";

export default function Hero() {
  return (
    <section className="landing-hero">
      <div className="site-container landing-hero-grid">
        <div className="landing-hero-content">
          <div className="landing-badge">
            <span>🌾</span>
            भारतीय किसानों का डिजिटल साथी
          </div>

          <h1>
            मौसम से मंडी तक,
            <span> हर फैसले में Agro Gyaani</span>
          </h1>

          <p className="landing-hero-description">
            फसल सलाह, स्थानीय मौसम, मंडी भाव, बीज, सरकारी योजनाएं और
            खेती से जुड़ी उपयोगी जानकारी — एक ही डिजिटल प्लेटफॉर्म पर।
          </p>

          <div className="landing-hero-actions">
            <Link href="/register" className="hero-register">
              मुफ्त रजिस्टर करें
              <span aria-hidden="true">→</span>
            </Link>

            <a href="#services" className="hero-services">
              हमारी सेवाएं देखें
            </a>
          </div>

          <div className="hero-trust">
            <span>✓ आसान हिंदी</span>
            <span>✓ किसानों के लिए</span>
            <span>✓ मोबाइल फ्रेंडली</span>
          </div>
        </div>

        <div className="landing-hero-visual" aria-hidden="true">
          <div className="visual-background">
            <span className="visual-farmer">👨‍🌾</span>

            <div className="floating-card weather-float">
              <span>☀️</span>
              <div>
                <strong>मौसम</strong>
                <small>आज 32°C</small>
              </div>
            </div>

            <div className="floating-card mandi-float">
              <span>🌾</span>
              <div>
                <strong>मंडी भाव</strong>
                <small>ताज़ा बाजार जानकारी</small>
              </div>
            </div>

            <div className="floating-card scheme-float">
              <span>🏛️</span>
              <div>
                <strong>योजनाएं</strong>
                <small>सरकारी लाभ जानें</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}