import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

export const metadata: Metadata = {
  title: "मदद और FAQ",
  description:
    "Agro Gyaani के बारे में अक्सर पूछे जाने वाले सवाल और प्लेटफॉर्म इस्तेमाल करने से संबंधित सहायता।",
};

const faqs = [
  {
    question: "Agro Gyaani क्या है?",
    answer:
      "Agro Gyaani भारतीय किसानों के लिए कृषि जानकारी और डिजिटल सेवाओं को एक जगह उपलब्ध कराने वाला प्लेटफॉर्म है।",
  },
  {
    question: "क्या Agro Gyaani इस्तेमाल करने के लिए अकाउंट जरूरी है?",
    answer:
      "वेबसाइट की सार्वजनिक जानकारी बिना अकाउंट के देखी जा सकेगी। व्यक्तिगत Dashboard, मेरी फसल, भाव अलर्ट और अन्य personalized सुविधाओं के लिए अकाउंट आवश्यक होगा।",
  },
  {
    question: "मैं अपना अकाउंट कैसे बना सकता हूं?",
    answer:
      "रजिस्ट्रेशन पेज पर जाकर ईमेल या उपलब्ध मोबाइल verification विकल्प के माध्यम से अकाउंट बनाया जा सकेगा।",
  },
  {
    question: "मेरी फसल सुविधा क्या है?",
    answer:
      "इस सुविधा में किसान अपनी फसलें चुन सकता है ताकि Dashboard और संबंधित सेवाओं को उसकी खेती के अनुसार अधिक उपयोगी बनाया जा सके।",
  },
  {
    question: "मंडी भाव कहां से मिलेंगे?",
    answer:
      "Agro Gyaani पर उपलब्ध मंडी सेक्शन में समर्थित फसलों और क्षेत्रों के बाजार भाव दिखाए जाएंगे। डेटा स्रोत और अपडेट समय संबंधित पेज पर स्पष्ट रूप से बताया जाएगा।",
  },
  {
    question: "क्या Agro Gyaani कृषि विशेषज्ञ की सलाह का विकल्प है?",
    answer:
      "नहीं। Agro Gyaani जानकारी और डिजिटल सहायता उपलब्ध कराने वाला प्लेटफॉर्म है। महत्वपूर्ण कृषि, वित्तीय या सरकारी योजना संबंधी निर्णय से पहले संबंधित विशेषज्ञ या आधिकारिक स्रोत से जानकारी सत्यापित करनी चाहिए।",
  },
];

export default function HelpPage() {
  return (
    <>
      <Header />

      <main>
        <section className="inner-page-hero">
          <div className="site-container inner-page-hero-content">
            <span className="section-eyebrow">मदद और FAQ</span>

            <h1>
              आपके सवालों के
              <span> आसान जवाब।</span>
            </h1>

            <p>
              Agro Gyaani और हमारी सेवाओं से जुड़े सामान्य सवालों के जवाब
              यहां देखें।
            </p>
          </div>
        </section>

        <section className="faq-section">
          <div className="site-container faq-layout">
            <div className="faq-heading">
              <span className="section-eyebrow">FAQ</span>
              <h2>अक्सर पूछे जाने वाले सवाल</h2>

              <p>
                जवाब नहीं मिला? आप हमारी support team से संपर्क कर सकते हैं।
              </p>

              <Link href="/contact">
                संपर्क करें <span>→</span>
              </Link>
            </div>

            <div className="faq-list">
              {faqs.map((faq) => (
                <details className="faq-item" key={faq.question}>
                  <summary>
                    <span>{faq.question}</span>
                    <span className="faq-plus">+</span>
                  </summary>

                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}