import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="final-cta-section">
      <div className="site-container">
        <div className="final-cta-box">
          <div className="final-cta-content">
            <span className="final-cta-label">🌾 Agro Gyaani से जुड़ें</span>

            <h2>
              खेती की जानकारी और डिजिटल सेवाएं,
              <span> अब एक जगह।</span>
            </h2>

            <p>
              अपना मुफ्त किसान अकाउंट बनाएं, अपनी लोकेशन और फसलें चुनें और
              Agro Gyaani की सेवाओं का उपयोग शुरू करें।
            </p>

            <div className="final-cta-actions">
              <Link href="/register" className="final-register">
                मुफ्त रजिस्टर करें
                <span aria-hidden="true">→</span>
              </Link>

              <Link href="/login" className="final-login">
                पहले से अकाउंट है? लॉग इन करें
              </Link>
            </div>

            <div className="final-cta-trust">
              <span>✓ आसान रजिस्ट्रेशन</span>
              <span>✓ हिंदी में</span>
              <span>✓ मोबाइल फ्रेंडली</span>
            </div>
          </div>

          <div className="final-cta-visual" aria-hidden="true">
            <div className="cta-circle">
              <span>👨‍🌾</span>
            </div>

            <div className="cta-floating cta-weather">
              <span>🌤️</span>
              <small>मौसम</small>
            </div>

            <div className="cta-floating cta-crop">
              <span>🌾</span>
              <small>मेरी फसल</small>
            </div>

            <div className="cta-floating cta-market">
              <span>💰</span>
              <small>मंडी भाव</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}