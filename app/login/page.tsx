import type { Metadata } from "next";
import Link from "next/link";
import LoginForm from "@/components/auth/LoginForm";

export const metadata: Metadata = {
  title: "लॉग इन | Agro Gyaani",
  description:
    "अपने Agro Gyaani किसान अकाउंट में लॉग इन करें और Dashboard तथा व्यक्तिगत कृषि सेवाओं का उपयोग करें।",
};

export default function LoginPage() {
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
              वापस स्वागत है
            </span>

            <h1>
              आपकी खेती,
              <span> आपका Dashboard।</span>
            </h1>

            <p>
              अपने किसान अकाउंट में लॉग इन करके अपनी फसल, मौसम, मंडी और
              अन्य व्यक्तिगत सेवाओं तक पहुंचें।
            </p>

            <div className="login-preview-card">
              <div>
                <span>🌾</span>
                <small>मेरी फसल</small>
              </div>

              <div>
                <span>☀️</span>
                <small>मौसम</small>
              </div>

              <div>
                <span>💰</span>
                <small>मंडी</small>
              </div>

              <div>
                <span>🔔</span>
                <small>अलर्ट</small>
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
              <span>किसान अकाउंट</span>

              <h2>लॉग इन करें</h2>

              <p>
                नया अकाउंट चाहिए?{" "}
                <Link href="/register">
                  मुफ्त रजिस्टर करें
                </Link>
              </p>
            </div>

            <LoginForm />

          </div>
        </section>

      </div>
    </main>
  );
}