import Link from "next/link";

const services = [
  {
    icon: "🌾",
    title: "फसल सलाह",
    description:
      "फसल की बुवाई, देखभाल, सिंचाई, पोषण और खेती से जुड़ी उपयोगी जानकारी।",
    href: "/fasal",
  },
  {
    icon: "🌤️",
    title: "स्थानीय मौसम",
    description:
      "अपने क्षेत्र के मौसम का पूर्वानुमान देखकर खेती के काम की बेहतर योजना बनाएं।",
    href: "/mausam",
  },
  {
    icon: "💰",
    title: "मंडी भाव",
    description:
      "फसलों के बाजार भाव देखें और अपनी उपज बेचने से पहले जरूरी जानकारी पाएं।",
    href: "/mandi",
  },
  {
    icon: "🌱",
    title: "बीज जानकारी",
    description:
      "अलग-अलग फसलों के बीज, किस्मों और खेती से जुड़ी जानकारी एक जगह देखें।",
    href: "/seeds",
  },
  {
    icon: "🏛️",
    title: "सरकारी योजनाएं",
    description:
      "किसानों के लिए उपलब्ध सरकारी योजनाओं, पात्रता और लाभ की जानकारी समझें।",
    href: "/yojana",
  },
  {
    icon: "🧮",
    title: "कृषि कैलकुलेटर",
    description:
      "खेती से जुड़ी जरूरी गणनाओं को आसान बनाने वाले उपयोगी डिजिटल टूल।",
    href: "/calculator",
  },
  {
    icon: "🔔",
    title: "भाव अलर्ट",
    description:
      "अपनी फसल के भाव पर नजर रखें और महत्वपूर्ण बदलाव की सूचना पाएं।",
    href: "/register",
  },
  {
    icon: "🎯",
    title: "मेरी फसल",
    description:
      "अपनी फसलें चुनकर उनसे जुड़ी जानकारी और सेवाओं को व्यक्तिगत बनाएं।",
    href: "/register",
  },
];

export default function Services() {
  return (
    <section className="services-landing-section" id="services">
      <div className="site-container">
        <div className="landing-section-heading">
          <span className="section-eyebrow">हमारी सेवाएं</span>

          <h2>एक जगह, खेती की जरूरी सेवाएं</h2>

          <p>
            Agro Gyaani का उद्देश्य अलग-अलग कृषि जानकारी और डिजिटल टूल्स
            को एक आसान प्लेटफॉर्म पर उपलब्ध कराना है।
          </p>
        </div>

        <div className="landing-services-grid">
          {services.map((service) => (
            <Link
              href={service.href}
              className="landing-service-card"
              key={service.title}
            >
              <div className="landing-service-icon">{service.icon}</div>

              <h3>{service.title}</h3>
              <p>{service.description}</p>

              <span className="service-link">
                {service.href === "/register"
                  ? "रजिस्टर करके शुरू करें"
                  : "और जानें"}{" "}
                →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}