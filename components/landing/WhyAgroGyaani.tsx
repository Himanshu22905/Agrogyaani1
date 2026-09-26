const benefits = [
  {
    icon: "📍",
    title: "स्थानीय जानकारी",
    description:
      "आपकी लोकेशन और खेती की जरूरत के अनुसार उपयोगी जानकारी तक आसान पहुंच।",
  },
  {
    icon: "🗣️",
    title: "आसान भाषा",
    description:
      "खेती से जुड़ी जानकारी को सरल और समझने योग्य तरीके से प्रस्तुत करने का प्रयास।",
  },
  {
    icon: "🌾",
    title: "किसान केंद्रित",
    description:
      "प्लेटफॉर्म की सेवाएं किसानों की रोजमर्रा की जरूरतों को ध्यान में रखकर बनाई जा रही हैं।",
  },
  {
    icon: "📱",
    title: "मोबाइल फ्रेंडली",
    description:
      "फोन, टैबलेट और कंप्यूटर पर आसानी से इस्तेमाल करने के लिए responsive experience।",
  },
  {
    icon: "🔔",
    title: "व्यक्तिगत अनुभव",
    description:
      "अपनी फसल और लोकेशन चुनकर Dashboard को अपनी खेती के अनुसार उपयोगी बनाएं।",
  },
  {
    icon: "🧩",
    title: "सब कुछ एक जगह",
    description:
      "मौसम, मंडी, फसल, बीज, योजनाएं और कृषि टूल्स के लिए एक ही प्लेटफॉर्म।",
  },
];

export default function WhyAgroGyaani() {
  return (
    <section className="why-section" id="benefits">
      <div className="site-container">
        <div className="landing-section-heading">
          <span className="section-eyebrow">क्यों Agro Gyaani?</span>

          <h2>खेती के फैसलों को आसान बनाने की कोशिश</h2>

          <p>
            हमारा लक्ष्य जानकारी का ढेर देना नहीं, बल्कि खेती से जुड़ी जरूरी
            जानकारी और सेवाओं को सरल तरीके से एक जगह उपलब्ध कराना है।
          </p>
        </div>

        <div className="benefits-grid">
          {benefits.map((benefit) => (
            <article className="benefit-card" key={benefit.title}>
              <div className="benefit-icon">{benefit.icon}</div>

              <div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="trust-strip">
          <div>
            <strong>हिंदी</strong>
            <span>सरल जानकारी</span>
          </div>

          <div>
            <strong>8+</strong>
            <span>कृषि सेवाएं</span>
          </div>

          <div>
            <strong>24×7</strong>
            <span>प्लेटफॉर्म एक्सेस</span>
          </div>

          <div>
            <strong>1</strong>
            <span>एकीकृत प्लेटफॉर्म</span>
          </div>
        </div>
      </div>
    </section>
  );
}