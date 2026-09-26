export default function Introduction() {
  return (
    <section className="intro-section" id="about">
      <div className="site-container intro-grid">
        <div className="intro-copy">
          <span className="section-eyebrow">Agro Gyaani क्या है?</span>

          <h2>
            खेती की जानकारी को
            <span> आसान और उपयोगी बनाना।</span>
          </h2>

          <p>
            Agro Gyaani भारतीय किसानों के लिए बनाया गया एक डिजिटल कृषि
            प्लेटफॉर्म है, जहां खेती से जुड़ी जरूरी जानकारी एक ही जगह
            आसानी से उपलब्ध कराने का हमारा प्रयास है।
          </p>

          <p>
            मौसम, मंडी भाव, फसल जानकारी, बीज और सरकारी योजनाओं से लेकर
            व्यक्तिगत खेती सेवाओं तक — हमारा लक्ष्य किसान को सही समय पर
            उपयोगी जानकारी तक पहुंचाना है।
          </p>

          <div className="intro-points">
            <div>
              <strong>🌾 किसान केंद्रित</strong>
              <span>किसानों की वास्तविक जरूरतों को ध्यान में रखकर</span>
            </div>

            <div>
              <strong>🇮🇳 भारत के लिए</strong>
              <span>स्थानीय खेती और भारतीय कृषि व्यवस्था के अनुसार</span>
            </div>

            <div>
              <strong>🗣️ आसान भाषा</strong>
              <span>तकनीकी जानकारी को सरल तरीके से समझें</span>
            </div>
          </div>
        </div>

        <div className="intro-visual">
          <div className="intro-visual-main">
            <span className="intro-main-icon">🌱</span>
            <strong>एक प्लेटफॉर्म</strong>
            <p>खेती की कई जरूरी सेवाएं</p>
          </div>

          <div className="intro-stat intro-stat-one">
            <strong>8+</strong>
            <span>कृषि सेवाएं</span>
          </div>

          <div className="intro-stat intro-stat-two">
            <strong>24×7</strong>
            <span>जानकारी तक पहुंच</span>
          </div>
        </div>
      </div>
    </section>
  );
}