import Link from "next/link";

export default function DashboardPreview() {
  return (
    <section className="dashboard-preview-section">
      <div className="site-container dashboard-preview-grid">
        <div className="dashboard-preview-copy">
          <span className="section-eyebrow">आपका किसान Dashboard</span>

          <h2>
            आपकी खेती की जानकारी,
            <span> आपके हिसाब से।</span>
          </h2>

          <p>
            रजिस्टर करने के बाद अपनी लोकेशन और फसलें चुनें। Agro Gyaani
            आपके Dashboard पर खेती से जुड़ी जरूरी सेवाओं और जानकारी को
            एक जगह व्यवस्थित करता है।
          </p>

          <div className="dashboard-features">
            <div>
              <span>🌾</span>
              <div>
                <strong>मेरी फसल</strong>
                <p>अपनी चुनी हुई फसलों की जानकारी देखें।</p>
              </div>
            </div>

            <div>
              <span>🌤️</span>
              <div>
                <strong>स्थानीय मौसम</strong>
                <p>अपनी लोकेशन के अनुसार मौसम की जानकारी पाएं।</p>
              </div>
            </div>

            <div>
              <span>💰</span>
              <div>
                <strong>मंडी और भाव अलर्ट</strong>
                <p>बाजार भाव देखें और जरूरी बदलाव पर नजर रखें।</p>
              </div>
            </div>

            <div>
              <span>🏛️</span>
              <div>
                <strong>योजनाएं और सलाह</strong>
                <p>खेती से जुड़ी उपयोगी योजनाएं और जानकारी देखें।</p>
              </div>
            </div>
          </div>

          <Link href="/register" className="dashboard-register-button">
            अपना Dashboard बनाएं <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="dashboard-demo">
          <div className="demo-window">
            <div className="demo-topbar">
              <div className="demo-brand">
                <span>🌾</span>
                <strong>Agro Gyaani</strong>
              </div>

              <div className="demo-avatar">क</div>
            </div>

            <div className="demo-content">
              <div className="demo-welcome">
                <div>
                  <small>नमस्ते किसान 👋</small>
                  <h3>आज खेती कैसी चल रही है?</h3>
                  <span>📍 मुजफ्फरनगर, उत्तर प्रदेश</span>
                </div>

                <div className="demo-weather">
                  <span>☀️</span>
                  <strong>32°C</strong>
                  <small>साफ मौसम</small>
                </div>
              </div>

              <div className="demo-section">
                <div className="demo-section-title">
                  <strong>मेरी फसल</strong>
                  <span>सभी देखें</span>
                </div>

                <div className="demo-crops">
                  <div>
                    <span>🌾</span>
                    <strong>गेहूं</strong>
                    <small>फसल सलाह</small>
                  </div>

                  <div>
                    <span>🌱</span>
                    <strong>गन्ना</strong>
                    <small>फसल सलाह</small>
                  </div>

                  <div>
                    <span>🌿</span>
                    <strong>सरसों</strong>
                    <small>फसल सलाह</small>
                  </div>
                </div>
              </div>

              <div className="demo-bottom-grid">
                <div className="demo-market">
                  <div className="demo-section-title">
                    <strong>मंडी भाव</strong>
                    <span>आज</span>
                  </div>

                  <div className="market-row">
                    <span>गेहूं</span>
                    <strong>₹2,425</strong>
                  </div>

                  <div className="market-row">
                    <span>सरसों</span>
                    <strong>₹5,650</strong>
                  </div>

                  <div className="market-row">
                    <span>गन्ना</span>
                    <strong>₹370</strong>
                  </div>
                </div>

                <div className="demo-tip">
                  <span>💡 आज की सलाह</span>
                  <strong>फसल की नियमित निगरानी करें</strong>
                  <p>
                    मौसम और खेत की स्थिति देखकर सिंचाई की योजना बनाएं।
                  </p>
                </div>
              </div>
            </div>

            <div className="demo-navigation">
              <span>⌂<small>होम</small></span>
              <span>🌾<small>फसल</small></span>
              <span>💰<small>मंडी</small></span>
              <span>☀️<small>मौसम</small></span>
            </div>
          </div>

          <span className="preview-label">Dashboard Preview</span>
        </div>
      </div>
    </section>
  );
}