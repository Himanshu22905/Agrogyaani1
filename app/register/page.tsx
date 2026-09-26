import type { Metadata } from "next";
import Link from "next/link";
import RegisterForm from "@/components/auth/RegisterForm";

export const metadata: Metadata = {
  title: "मुफ्त रजिस्टर करें | Agro Gyaani",
  description:
    "Agro Gyaani पर मुफ्त किसान अकाउंट बनाएं और व्यक्तिगत कृषि सेवाओं का उपयोग शुरू करें।",
};

export default function RegisterPage() {
  return (
    <main className="auth-page">
      <div className="auth-layout">
        <section className="auth-brand-panel">
          <Link href="/" className="auth-logo">
            <span>🌾</span>
            <strong>Agro Gyaani</strong>
          </Link>

          <div className="auth-brand-content">
            <span className="auth-eyebrow">
              किसान का डिजिटल साथी
            </span>

            <h1>
              अपनी खेती को बनाएं
              <span> और अधिक स्मार्ट।</span>
            </h1>

            <p>
              अपना मुफ्त किसान अकाउंट बनाएं और अपनी फसल, लोकेशन और जरूरत के
              अनुसार Agro Gyaani की सेवाओं का उपयोग करें।
            </p>

            <div className="auth-benefits">
              <div>
                <span>🌾</span>
                <p>
                  <strong>मेरी फसल</strong>
                  अपनी फसलों के अनुसार जानकारी पाएं।
                </p>
              </div>

              <div>
                <span>🌤️</span>
                <p>
                  <strong>स्थानीय मौसम</strong>
                  अपनी लोकेशन के अनुसार मौसम देखें।
                </p>
              </div>

              <div>
                <span>💰</span>
                <p>
                  <strong>मंडी भाव</strong>
                  बाजार और मंडी की जानकारी तक आसान पहुंच।
                </p>
              </div>

              <div>
                <span>🏛️</span>
                <p>
                  <strong>किसान योजनाएं</strong>
                  उपयोगी सरकारी योजनाओं की जानकारी देखें।
                </p>
              </div>
            </div>
          </div>

          <p className="auth-brand-footer">
            खेती की जानकारी, आपकी भाषा में।
          </p>
        </section>

        <section className="auth-form-side">
          <div className="auth-form-container">
            <Link href="/" className="auth-mobile-logo">
              🌾 <strong>Agro Gyaani</strong>
            </Link>

            <div className="auth-form-heading">
              <span>मुफ्त किसान अकाउंट</span>

              <h2>रजिस्टर करें</h2>

              <p>
                पहले से अकाउंट है?{" "}
                <Link href="/login">लॉग इन करें</Link>
              </p>
            </div>

            <RegisterForm />
          </div>
        </section>
      </div>
    </main>
  );
}