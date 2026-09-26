import type { Metadata } from "next";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Agro Gyaani",
  description:
    "जानें कि Agro Gyaani आपकी व्यक्तिगत जानकारी, cookies, analytics और advertising data को कैसे संभालता है।",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />

      <main>
        <section className="legal-page-hero">
          <div className="site-container legal-page-heading">
            <span className="section-eyebrow">कानूनी जानकारी</span>
            <h1>Privacy Policy</h1>

            <p>
              Agro Gyaani आपकी privacy का सम्मान करता है। यह नीति बताती है
              कि हमारी वेबसाइट और सेवाओं का उपयोग करते समय जानकारी कैसे
              एकत्र, उपयोग, संग्रहीत और साझा की जा सकती है।
            </p>

            <small>Last updated: 26 July 2026</small>
          </div>
        </section>

        <section className="legal-content-section">
          <div className="site-container legal-layout">
            <aside className="legal-sidebar">
              <strong>Privacy Policy</strong>

              <nav>
                <a href="#scope">दायरा</a>
                <a href="#information">हम कौन-सी जानकारी लेते हैं</a>
                <a href="#purpose">जानकारी का उपयोग</a>
                <a href="#consent">सहमति</a>
                <a href="#cookies">Cookies और advertising</a>
                <a href="#sharing">Data sharing</a>
                <a href="#retention">Data retention</a>
                <a href="#rights">आपके अधिकार</a>
                <a href="#children">बच्चों की privacy</a>
                <a href="#security">Data security</a>
                <a href="#contact">संपर्क</a>
              </nav>
            </aside>

            <article className="legal-content">
              <section id="scope">
                <h2>1. इस Privacy Policy का दायरा</h2>

                <p>
                  यह Privacy Policy Agro Gyaani वेबसाइट, किसान अकाउंट,
                  Dashboard और Agro Gyaani द्वारा उपलब्ध कराई जाने वाली
                  संबंधित डिजिटल सेवाओं पर लागू होती है।
                </p>

                <p>
                  Agro Gyaani भारत में उपयोगकर्ताओं को सेवाएं उपलब्ध कराने
                  वाला स्वतंत्र डिजिटल कृषि प्लेटफॉर्म है। जहां लागू हो,
                  व्यक्तिगत डेटा का प्रबंधन भारत के लागू data protection
                  और information technology कानूनों के अनुसार किया जाएगा।
                </p>
              </section>

              <section id="information">
                <h2>2. हम कौन-सी जानकारी एकत्र कर सकते हैं?</h2>

                <p>
                  आपके द्वारा इस्तेमाल की गई सुविधा के आधार पर हम निम्न
                  जानकारी एकत्र कर सकते हैं:
                </p>

                <ul>
                  <li>नाम और प्रोफाइल जानकारी;</li>
                  <li>ईमेल पता;</li>
                  <li>मोबाइल नंबर;</li>
                  <li>राज्य, जिला या आपके द्वारा चुनी गई लोकेशन;</li>
                  <li>भाषा संबंधी प्राथमिकता;</li>
                  <li>आपके द्वारा चुनी गई फसलें और कृषि संबंधी प्राथमिकताएं;</li>
                  <li>अकाउंट और verification से संबंधित तकनीकी जानकारी;</li>
                  <li>वेबसाइट उपयोग, pages viewed और feature interactions;</li>
                  <li>
                    browser, device, IP address और सामान्य diagnostic/security
                    information;
                  </li>
                  <li>
                    cookies, analytics या advertising technologies से मिलने
                    वाली जानकारी, जहां लागू हो।
                  </li>
                </ul>

                <div className="legal-note">
                  <strong>महत्वपूर्ण:</strong>
                  <p>
                    Agro Gyaani को ऐसी व्यक्तिगत या संवेदनशील जानकारी न भेजें
                    जिसकी किसी सुविधा के लिए स्पष्ट रूप से आवश्यकता न हो।
                  </p>
                </div>
              </section>

              <section id="purpose">
                <h2>3. हम जानकारी का उपयोग क्यों करते हैं?</h2>

                <p>जानकारी का उपयोग निम्न उद्देश्यों के लिए किया जा सकता है:</p>

                <ul>
                  <li>अकाउंट बनाने और authentication के लिए;</li>
                  <li>आपकी प्रोफाइल और Dashboard उपलब्ध कराने के लिए;</li>
                  <li>
                    लोकेशन और फसल के आधार पर सेवाओं को अधिक प्रासंगिक बनाने
                    के लिए;
                  </li>
                  <li>मंडी, मौसम, फसल, योजना और alert सुविधाएं देने के लिए;</li>
                  <li>support requests और feedback का जवाब देने के लिए;</li>
                  <li>security, fraud prevention और abuse detection के लिए;</li>
                  <li>website performance और user experience सुधारने के लिए;</li>
                  <li>
                    analytics और advertising के लिए, जहां लागू हो और जहां
                    आवश्यक हो वहां आपकी सहमति के अनुसार;
                  </li>
                  <li>कानूनी या regulatory obligations पूरी करने के लिए।</li>
                </ul>
              </section>

              <section id="consent">
                <h2>4. सहमति और आपकी पसंद</h2>

                <p>
                  जहां applicable law के अंतर्गत consent आवश्यक है, Agro
                  Gyaani स्पष्ट notice देकर संबंधित उद्देश्य के लिए आपकी
                  सहमति प्राप्त करने का प्रयास करेगा।
                </p>

                <p>
                  आप जहां उपलब्ध हो वहां अपनी privacy, communication और
                  cookie preferences बदल सकेंगे। सहमति वापस लेने से withdrawal
                  से पहले lawful processing प्रभावित नहीं होती।
                </p>

                <p>
                  यदि किसी सुविधा को उपलब्ध कराने के लिए कुछ जानकारी आवश्यक
                  है और आप वह जानकारी नहीं देना चाहते, तो संबंधित सुविधा
                  उपलब्ध न हो पाना संभव है।
                </p>
              </section>

              <section id="cookies">
                <h2>5. Cookies, Analytics और Google Advertising</h2>

                <p>
                  Agro Gyaani cookies, local storage और समान technologies का
                  उपयोग authentication, security, preferences, analytics और
                  advertising जैसे उद्देश्यों के लिए कर सकता है।
                </p>

                <p>
                  वेबसाइट पर Google AdSense या अन्य Google advertising
                  services का उपयोग होने पर Google और उसके advertising
                  partners cookies या अन्य technologies का उपयोग ads serve,
                  measure और, जहां अनुमति हो, personalize करने के लिए कर
                  सकते हैं।
                </p>

                <p>
                  जहां कानून या Google policies के तहत आवश्यक होगा, users को
                  consent या privacy controls उपलब्ध कराए जाएंगे। कुछ
                  jurisdictions में personalized advertising से पहले अतिरिक्त
                  consent requirements लागू हो सकती हैं।
                </p>

                <p>
                  Browser settings के माध्यम से भी cookies को सीमित या delete
                  किया जा सकता है, लेकिन इससे website की कुछ functionality
                  प्रभावित हो सकती है।
                </p>
              </section>

              <section id="sharing">
                <h2>6. जानकारी किसके साथ साझा हो सकती है?</h2>

                <p>
                  Agro Gyaani आपकी व्यक्तिगत जानकारी को केवल आवश्यक परिस्थितियों
                  में service providers या अन्य parties के साथ साझा कर सकता है,
                  जैसे:
                </p>

                <ul>
                  <li>hosting और cloud infrastructure providers;</li>
                  <li>authentication और database providers;</li>
                  <li>email या OTP communication providers;</li>
                  <li>analytics providers;</li>
                  <li>advertising providers, जहां लागू हो;</li>
                  <li>
                    कानून, न्यायालय या competent authority द्वारा आवश्यक होने
                    पर संबंधित सरकारी या regulatory authority।
                  </li>
                </ul>

                <p>
                  हम व्यक्तिगत डेटा को केवल advertising revenue के उद्देश्य
                  से किसी third party को बेचने की नीति नहीं रखते।
                </p>
              </section>

              <section id="retention">
                <h2>7. Data Retention</h2>

                <p>
                  व्यक्तिगत जानकारी को उतनी अवधि तक रखा जाएगा जितनी संबंधित
                  सेवा, सुरक्षा, dispute resolution, legal obligation या
                  legitimate operational purpose के लिए आवश्यक हो।
                </p>

                <p>
                  जब जानकारी की आवश्यकता नहीं रहती, तो applicable requirements
                  के अनुसार उसे delete, anonymize या securely dispose करने का
                  प्रयास किया जाएगा।
                </p>
              </section>

              <section id="rights">
                <h2>8. आपके Privacy अधिकार</h2>

                <p>
                  लागू कानून और उपलब्ध functionality के अनुसार आप अपनी
                  व्यक्तिगत जानकारी के संबंध में access, correction, update
                  या erasure जैसे अधिकारों का उपयोग कर सकते हैं।
                </p>

                <p>
                  जहां processing consent पर आधारित है, वहां आप consent वापस
                  लेने का अनुरोध कर सकते हैं। आप grievance या privacy-related
                  concern भी प्रस्तुत कर सकते हैं।
                </p>

                <p>
                  इन requests को पूरा करने से पहले identity verification की
                  आवश्यकता हो सकती है।
                </p>
              </section>

              <section id="children">
                <h2>9. बच्चों की Privacy</h2>

                <p>
                  यदि किसी उपयोगकर्ता को लागू भारतीय कानून के तहत child माना
                  जाता है, तो personal data processing के लिए लागू parental
                  consent और अन्य legal requirements का पालन किया जाएगा।
                </p>

                <p>
                  जब तक आवश्यक age/consent controls लागू न हों, बच्चों को
                  स्वतंत्र रूप से ऐसी personalized account services इस्तेमाल
                  नहीं करनी चाहिए जिनमें personal data processing आवश्यक हो।
                </p>
              </section>

              <section id="security">
                <h2>10. Data Security</h2>

                <p>
                  हम व्यक्तिगत जानकारी की सुरक्षा के लिए उचित technical और
                  organizational safeguards अपनाने का प्रयास करते हैं।
                  हालांकि इंटरनेट पर transmission या electronic storage की
                  कोई भी प्रणाली पूर्ण रूप से risk-free नहीं होती।
                </p>

                <p>
                  Users अपने password, OTP और account credentials को सुरक्षित
                  रखने के लिए जिम्मेदार हैं।
                </p>
              </section>

              <section>
                <h2>11. Third-Party Links</h2>

                <p>
                  Agro Gyaani पर सरकारी portals, weather services, agricultural
                  resources या अन्य external websites के links हो सकते हैं।
                  उन websites की privacy practices और content पर उनकी अपनी
                  policies लागू होती हैं।
                </p>
              </section>

              <section>
                <h2>12. Policy में बदलाव</h2>

                <p>
                  कानून, services या data practices में बदलाव होने पर इस
                  Privacy Policy को update किया जा सकता है। महत्वपूर्ण बदलाव
                  होने पर उचित notice दिया जा सकता है।
                </p>
              </section>

              <section id="contact">
                <h2>13. Privacy और Grievance संपर्क</h2>

                <p>
                  Privacy request, account data request या grievance के लिए
                  हमारे Contact page का उपयोग करें।
                </p>

                <p>
                  Production launch से पहले यहां Agro Gyaani के responsible
                  entity का legal name, postal address, privacy/grievance
                  contact और applicable contact details प्रकाशित की जाएंगी।
                </p>
              </section>
            </article>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}