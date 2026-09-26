import Link from "next/link";

export default function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="site-container testimonials-grid">
        <div className="testimonial-heading">
          <span className="section-eyebrow">किसानों की राय</span>

          <h2>
            Agro Gyaani को बेहतर बनाने में
            <span> आपकी राय महत्वपूर्ण है।</span>
          </h2>

          <p>
            हम किसानों के अनुभव और सुझावों के आधार पर प्लेटफॉर्म को लगातार
            बेहतर बनाना चाहते हैं। Agro Gyaani इस्तेमाल करने के बाद अपना
            अनुभव हमारे साथ साझा करें।
          </p>

          <Link href="/register">
            Agro Gyaani से जुड़ें <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="testimonial-placeholder">
          <div className="quote-mark">“</div>

          <p>
            यहां Agro Gyaani इस्तेमाल करने वाले किसानों के सत्यापित अनुभव
            और सुझाव दिखाए जाएंगे।
          </p>

          <div className="testimonial-status">
            <span>🌾</span>

            <div>
              <strong>किसान समुदाय</strong>
              <small>Verified testimonials coming soon</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}