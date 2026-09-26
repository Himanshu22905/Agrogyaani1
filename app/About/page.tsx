import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

export const metadata: Metadata = {
  title: "हमारे बारे में",
  description:
    "Agro Gyaani के बारे में जानें — भारतीय किसानों के लिए कृषि जानकारी और डिजिटल सेवाओं को सरल और उपयोगी बनाने वाला प्लेटफॉर्म।",
};

export default function AboutPage() {
  return (
    <>
      <Header />

      <main>
        <section className="inner-page-hero">
          <div className="site-container inner-page-hero-content">
            <span className="section-eyebrow">हमारे बारे में</span>

            <h1>
              भारतीय किसानों के लिए
              <span> एक डिजिटल कृषि साथी।</span>
            </h1>

            <p>
              Agro Gyaani का उद्देश्य खेती से जुड़ी जानकारी और डिजिटल
              सेवाओं को किसानों के लिए आसान, उपयोगी और सुलभ बनाना है।
            </p>
          </div>
        </section>

        <section className="about-story-section">
          <div className="site-container about-story-grid">
            <div>
              <span className="section-eyebrow">Agro Gyaani</span>

              <h2>हम क्या बना रहे हैं?</h2>

              <p>
                खेती से जुड़ी जानकारी कई अलग-अलग जगहों पर उपलब्ध होती है।
                मौसम की जानकारी कहीं और, मंडी भाव कहीं और, सरकारी योजनाएं
                किसी दूसरे पोर्टल पर और फसल से जुड़ी जानकारी अलग स्रोतों पर।
              </p>

              <p>
                Agro Gyaani इन सेवाओं और जानकारी को एक आसान डिजिटल
                प्लेटफॉर्म पर व्यवस्थित करने का प्रयास है ताकि किसान अपनी
                जरूरत की जानकारी आसानी से खोज सकें।
              </p>
            </div>

            <div className="about-highlight">
              <span>🌾</span>

              <h3>हमारा उद्देश्य</h3>

              <p>
                तकनीक का उपयोग करके किसानों के लिए कृषि जानकारी तक पहुंच को
                सरल बनाना और खेती से जुड़े निर्णयों में उपयोगी डिजिटल
                सेवाएं उपलब्ध कराना।
              </p>
            </div>
          </div>
        </section>

        <section className="about-values-section">
          <div className="site-container">
            <div className="landing-section-heading">
              <span className="section-eyebrow">हमारी सोच</span>
              <h2>Agro Gyaani किन सिद्धांतों पर बन रहा है?</h2>
            </div>

            <div className="about-values-grid">
              <article>
                <span>🗣️</span>
                <h3>सरलता</h3>
                <p>
                  कृषि जानकारी को ऐसी भाषा और तरीके में प्रस्तुत करना जिसे
                  आसानी से समझा जा सके।
                </p>
              </article>

              <article>
                <span>📍</span>
                <h3>प्रासंगिकता</h3>
                <p>
                  किसान की लोकेशन, फसल और जरूरत के अनुसार जानकारी को अधिक
                  उपयोगी बनाना।
                </p>
              </article>

              <article>
                <span>🤝</span>
                <h3>विश्वसनीयता</h3>
                <p>
                  महत्वपूर्ण जानकारी के लिए विश्वसनीय और आधिकारिक स्रोतों को
                  प्राथमिकता देना।
                </p>
              </article>

              <article>
                <span>📱</span>
                <h3>पहुंच</h3>
                <p>
                  मोबाइल और वेब के माध्यम से कृषि सेवाओं तक आसान पहुंच
                  उपलब्ध कराना।
                </p>
              </article>
            </div>

            <div className="about-page-cta">
              <div>
                <h2>Agro Gyaani से जुड़ें</h2>
                <p>
                  अपना किसान अकाउंट बनाएं और हमारी डिजिटल कृषि सेवाओं का
                  उपयोग शुरू करें।
                </p>
              </div>

              <Link href="/register">
                मुफ्त रजिस्टर करें <span>→</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}