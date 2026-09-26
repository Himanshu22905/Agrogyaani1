import type { Metadata } from "next";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

export const metadata: Metadata = {
  title: "संपर्क करें",
  description:
    "Agro Gyaani से संपर्क करें। सुझाव, सहायता, तकनीकी समस्या या कृषि प्लेटफॉर्म से जुड़े सवालों के लिए हमसे जुड़ें।",
};

export default function ContactPage() {
  return (
    <>
      <Header />

      <main>
        <section className="inner-page-hero">
          <div className="site-container inner-page-hero-content">
            <span className="section-eyebrow">संपर्क करें</span>

            <h1>
              हम आपकी
              <span> मदद के लिए यहां हैं।</span>
            </h1>

            <p>
              Agro Gyaani से जुड़ा कोई सवाल, सुझाव या समस्या है? हमें बताएं।
              आपका feedback प्लेटफॉर्म को बेहतर बनाने में मदद करता है।
            </p>
          </div>
        </section>

        <section className="contact-section">
          <div className="site-container contact-grid">
            <div className="contact-info">
              <span className="section-eyebrow">Agro Gyaani Support</span>

              <h2>हमसे कैसे संपर्क करें?</h2>

              <p>
                प्लेटफॉर्म, अकाउंट, कृषि सेवाओं या किसी तकनीकी समस्या से
                संबंधित सहायता के लिए हमें संदेश भेजें।
              </p>

              <div className="contact-methods">
                <article>
                  <span>💬</span>
                  <div>
                    <strong>सामान्य सहायता</strong>
                    <p>
                      Agro Gyaani इस्तेमाल करने से संबंधित सवाल और सहायता।
                    </p>
                  </div>
                </article>

                <article>
                  <span>💡</span>
                  <div>
                    <strong>सुझाव और Feedback</strong>
                    <p>
                      नई सुविधा, सुधार या अपने अनुभव के बारे में हमें बताएं।
                    </p>
                  </div>
                </article>

                <article>
                  <span>⚙️</span>
                  <div>
                    <strong>तकनीकी समस्या</strong>
                    <p>
                      Login, Dashboard या किसी सेवा में समस्या होने पर
                      जानकारी साझा करें।
                    </p>
                  </div>
                </article>
              </div>
            </div>

            <div className="contact-form-card">
              <h2>संदेश भेजें</h2>

              <p>
                नीचे जानकारी भरें। Contact form backend हम अगले चरण में
                जोड़ेंगे।
              </p>

              <form>
                <div className="form-field">
                  <label htmlFor="name">नाम</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="अपना नाम"
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="email">ईमेल</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="example@email.com"
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="subject">विषय</label>
                  <select id="subject" name="subject" defaultValue="">
                    <option value="" disabled>
                      विषय चुनें
                    </option>
                    <option value="support">सामान्य सहायता</option>
                    <option value="technical">तकनीकी समस्या</option>
                    <option value="feedback">सुझाव / Feedback</option>
                    <option value="other">अन्य</option>
                  </select>
                </div>

                <div className="form-field">
                  <label htmlFor="message">संदेश</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="अपना संदेश लिखें..."
                  />
                </div>

                <button type="button" className="contact-submit">
                  संदेश भेजें
                </button>

                <small className="form-notice">
                  अभी यह form केवल UI है। Backend connection अगले चरण में
                  जोड़ा जाएगा।
                </small>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}