import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

export const metadata: Metadata = {
  title: "किसान सेवाएं",
  description:
    "Agro Gyaani की कृषि सेवाएं देखें — फसल जानकारी, मौसम, मंडी भाव, बीज, सरकारी योजनाएं, कृषि कैलकुलेटर और व्यक्तिगत किसान सेवाएं।",
};

const services = [
  {
    icon: "🌾",
    title: "फसल जानकारी",
    description:
      "फसलों की बुवाई, देखभाल, सिंचाई, पोषण, रोग और खेती से जुड़ी उपयोगी जानकारी।",
    href: "/crops",
  },
  {
    icon: "💰",
    title: "मंडी भाव",
    description:
      "फसलों के बाजार और मंडी भाव देखकर अपनी उपज से जुड़े फैसलों के लिए जानकारी पाएं।",
    href: "/mandi",
  },
  {
    icon: "🌤️",
    title: "मौसम",
    description:
      "स्थानीय मौसम और पूर्वानुमान देखकर खेती के काम की बेहतर योजना बनाने में मदद पाएं।",
    href: "/weather",
  },
  {
    icon: "🌱",
    title: "बीज जानकारी",
    description:
      "अलग-अलग फसलों के बीज और किस्मों से जुड़ी उपयोगी जानकारी देखें।",
    href: "/seeds",
  },
  {
    icon: "🏛️",
    title: "सरकारी योजनाएं",
    description:
      "किसानों के लिए उपलब्ध सरकारी योजनाओं, पात्रता और लाभ से जुड़ी जानकारी।",
    href: "/schemes",
  },
  {
    icon: "🧮",
    title: "कृषि कैलकुलेटर",
    description:
      "खेती से जुड़ी जरूरी गणनाओं के लिए आसान डिजिटल कैलकुलेटर और टूल्स।",
    href: "/calculator",
  },
  {
    icon: "🔔",
    title: "भाव अलर्ट",
    description:
      "चुनी हुई फसलों के भाव पर नजर रखने और महत्वपूर्ण बदलाव की जानकारी पाने की सुविधा।",
    href: "/register",
  },
  {
    icon: "🎯",
    title: "मेरी फसल",
    description:
      "अपनी फसलें चुनें और Agro Gyaani के अनुभव को अपनी खेती के अनुसार व्यक्तिगत बनाएं।",
    href: "/register",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />

      <main>
        <section className="inner-page-hero">
          <div className="site-container inner-page-hero-content">
            <span className="section-eyebrow">किसान सेवाएं</span>

            <h1>
              खेती की जरूरी सेवाएं,
              <span> एक प्लेटफॉर्म पर।</span>
            </h1>

            <p>
              मौसम से मंडी और फसल से सरकारी योजनाओं तक, Agro Gyaani
              किसानों के लिए उपयोगी डिजिटल कृषि सेवाओं को एक जगह लाने का
              प्रयास है।
            </p>
          </div>
        </section>

        <section className="services-page-section">
          <div className="site-container services-page-grid">
            {services.map((service) => (
              <article className="services-page-card" key={service.title}>
                <div className="services-page-icon">{service.icon}</div>

                <h2>{service.title}</h2>
                <p>{service.description}</p>

                <Link href={service.href}>
                  {service.href === "/register"
                    ? "रजिस्टर करके शुरू करें"
                    : "जानकारी देखें"}{" "}
                  →
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}