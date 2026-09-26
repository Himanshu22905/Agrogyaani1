import Link from "next/link";

const steps = [
  {
    number: "01",
    icon: "📱",
    title: "मुफ्त अकाउंट बनाएं",
    description:
      "अपने मोबाइल नंबर या ईमेल से Agro Gyaani पर अपना किसान अकाउंट बनाएं।",
  },
  {
    number: "02",
    icon: "📍",
    title: "अपनी जानकारी चुनें",
    description:
      "अपना राज्य, जिला, भाषा और खेती से जुड़ी जरूरी जानकारी दर्ज करें।",
  },
  {
    number: "03",
    icon: "🌾",
    title: "अपनी फसलें जोड़ें",
    description:
      "जिन फसलों की आप खेती करते हैं उन्हें चुनें, ताकि जानकारी आपके लिए उपयोगी बनाई जा सके।",
  },
  {
    number: "04",
    icon: "🎯",
    title: "अपना Dashboard पाएं",
    description:
      "मौसम, मंडी भाव, फसल जानकारी, योजनाएं और दूसरी कृषि सेवाएं एक जगह देखें।",
  },
];

export default function HowItWorks() {
  return (
    <section className="how-section" id="how-it-works">
      <div className="site-container">
        <div className="landing-section-heading">
          <span className="section-eyebrow">शुरुआत करना आसान है</span>

          <h2>Agro Gyaani कैसे काम करता है?</h2>

          <p>
            कुछ आसान चरणों में अपना किसान प्रोफाइल तैयार करें और खेती से
            जुड़ी सेवाओं का उपयोग शुरू करें।
          </p>
        </div>

        <div className="steps-wrapper">
          <div className="steps-line" aria-hidden="true" />

          {steps.map((step) => (
            <article className="step-card" key={step.number}>
              <div className="step-top">
                <span className="step-number">{step.number}</span>
                <div className="step-icon">{step.icon}</div>
              </div>

              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>

        <div className="how-register">
          <div>
            <strong>शुरू करने के लिए तैयार हैं?</strong>
            <span>
              अपना मुफ्त अकाउंट बनाएं और Agro Gyaani का इस्तेमाल शुरू करें।
            </span>
          </div>

          <Link href="/register">
            मुफ्त रजिस्टर करें <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}