import type { Metadata } from "next";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

export const metadata: Metadata = {
  title: "Terms & Conditions | Agro Gyaani",
  description:
    "Agro Gyaani वेबसाइट और किसान सेवाओं के उपयोग से संबंधित नियम और शर्तें पढ़ें।",
};

export default function TermsPage() {
  return (
    <>
      <Header />

      <main>
        <section className="legal-page-hero">
          <div className="site-container legal-page-heading">
            <span className="section-eyebrow">कानूनी जानकारी</span>
            <h1>Terms & Conditions</h1>

            <p>
              Agro Gyaani का उपयोग करने से पहले इन नियमों और शर्तों को
              ध्यान से पढ़ें।
            </p>

            <small>Last updated: 26 July 2026</small>
          </div>
        </section>

        <section className="legal-content-section">
          <div className="site-container legal-single-content">
            <article className="legal-content">
              <section>
                <h2>1. Terms की स्वीकृति</h2>

                <p>
                  Agro Gyaani वेबसाइट, अकाउंट या सेवाओं का उपयोग करके आप इन
                  Terms & Conditions और लागू policies से सहमत होते हैं।
                </p>

                <p>
                  यदि आप इन Terms से सहमत नहीं हैं, तो ऐसी सेवाओं का उपयोग
                  न करें जिनके लिए इन Terms की स्वीकृति आवश्यक है।
                </p>
              </section>

              <section>
                <h2>2. Agro Gyaani क्या है?</h2>

                <p>
                  Agro Gyaani कृषि जानकारी और डिजिटल किसान सेवाएं उपलब्ध
                  कराने वाला स्वतंत्र प्लेटफॉर्म है।
                </p>

                <div className="legal-warning">
                  <strong>महत्वपूर्ण:</strong>
                  <p>
                    Agro Gyaani भारत सरकार, Ministry of Agriculture &
                    Farmers Welfare, किसी राज्य सरकार, IMD, eNAM या किसी
                    अन्य सरकारी विभाग का आधिकारिक portal नहीं है, जब तक
                    किसी specific page पर स्पष्ट रूप से अन्यथा न बताया गया हो।
                  </p>
                </div>
              </section>

              <section>
                <h2>3. उपलब्ध सेवाएं</h2>

                <p>प्लेटफॉर्म पर समय-समय पर निम्न सुविधाएं उपलब्ध हो सकती हैं:</p>

                <ul>
                  <li>फसल संबंधी जानकारी;</li>
                  <li>मंडी और market information;</li>
                  <li>मौसम संबंधी जानकारी;</li>
                  <li>बीज और कृषि input संबंधी जानकारी;</li>
                  <li>सरकारी योजनाओं की जानकारी;</li>
                  <li>कृषि calculators और digital tools;</li>
                  <li>personalized farmer Dashboard;</li>
                  <li>alerts, notifications और अन्य किसान सेवाएं।</li>
                </ul>

                <p>
                  किसी सुविधा का उपलब्ध होना हमेशा guaranteed नहीं है और
                  features को समय-समय पर बदला, जोड़ा या हटाया जा सकता है।
                </p>
              </section>

              <section>
                <h2>4. अकाउंट और Registration</h2>

                <p>
                  Personalized services के लिए account बनाना आवश्यक हो सकता
                  है। Registration के दौरान दी गई जानकारी यथासंभव सही और
                  current होनी चाहिए।
                </p>

                <p>
                  अपने password, OTP और login credentials की confidentiality
                  बनाए रखना user की जिम्मेदारी है।
                </p>

                <p>
                  Unauthorized access का संदेह होने पर user को तुरंत password
                  बदलना और support से संपर्क करना चाहिए।
                </p>
              </section>

              <section>
                <h2>5. स्वीकार्य उपयोग</h2>

                <p>आप Agro Gyaani का उपयोग निम्न गतिविधियों के लिए नहीं करेंगे:</p>

                <ul>
                  <li>किसी गैरकानूनी उद्देश्य के लिए;</li>
                  <li>दूसरे व्यक्ति का account impersonate करने के लिए;</li>
                  <li>false, fraudulent या misleading information देने के लिए;</li>
                  <li>website security को bypass या attack करने के लिए;</li>
                  <li>malware, malicious code या harmful content फैलाने के लिए;</li>
                  <li>
                    automated scraping, bots या systems के माध्यम से platform
                    पर अनुचित load डालने के लिए;
                  </li>
                  <li>advertisements पर artificial clicks या impressions बनाने के लिए;</li>
                  <li>दूसरे users की personal information unauthorized तरीके से लेने के लिए;</li>
                  <li>applicable law या third-party rights का उल्लंघन करने के लिए।</li>
                </ul>
              </section>

              <section>
                <h2>6. कृषि जानकारी</h2>

                <p>
                  Agro Gyaani पर crop practices, irrigation, fertilizer,
                  pests, diseases, seeds या अन्य agricultural topics से
                  संबंधित सामग्री सामान्य informational और educational
                  उद्देश्य से उपलब्ध कराई जाती है।
                </p>

                <p>
                  खेत की मिट्टी, मौसम, crop variety, disease severity,
                  irrigation availability और स्थानीय परिस्थितियां अलग-अलग
                  हो सकती हैं। इसलिए महत्वपूर्ण निर्णय से पहले संबंधित
                  कृषि विशेषज्ञ, कृषि विज्ञान केंद्र, अधिकृत अधिकारी या
                  अन्य उपयुक्त professional source से पुष्टि करें।
                </p>
              </section>

              <section>
                <h2>7. Seeds, Fertilizers और Pesticides</h2>

                <p>
                  Seeds, fertilizers, pesticides, insecticides या अन्य
                  agricultural inputs से संबंधित जानकारी केवल informational
                  purpose के लिए हो सकती है।
                </p>

                <p>
                  किसी regulated agricultural product का उपयोग applicable
                  law, registration/approval, product label, manufacturer
                  instructions और competent authority की guidance के अनुसार
                  किया जाना चाहिए।
                </p>

                <p>
                  Agro Gyaani किसी prohibited, unregistered या unlawfully
                  marketed agricultural chemical के उपयोग को बढ़ावा नहीं देता।
                </p>
              </section>

              <section>
                <h2>8. सरकारी योजनाएं</h2>

                <p>
                  Government schemes की eligibility, benefit amount, deadlines,
                  documents और conditions संबंधित authority द्वारा बदली जा
                  सकती हैं।
                </p>

                <p>
                  Agro Gyaani पर दिखाई गई scheme information सुविधा के लिए
                  है। Application या financial decision से पहले संबंधित
                  official government portal या authority से current details
                  verify करें।
                </p>

                <p>
                  Agro Gyaani किसी government benefit की approval, payment या
                  eligibility guarantee नहीं करता।
                </p>
              </section>

              <section>
                <h2>9. मंडी और Market Data</h2>

                <p>
                  Market और mandi prices समय, location, quality, grade,
                  quantity, demand, source और reporting delay के कारण बदल
                  सकते हैं।
                </p>

                <p>
                  दिखाई गई कीमत किसी buyer द्वारा guaranteed purchase price
                  या Agro Gyaani की तरफ से खरीद/बिक्री offer नहीं है।
                </p>
              </section>

              <section>
                <h2>10. Weather Information</h2>

                <p>
                  Weather forecasts probabilistic होते हैं और actual local
                  conditions forecast से अलग हो सकती हैं।
                </p>

                <p>
                  Severe weather, disaster या safety-related decision के लिए
                  competent government authorities और official warnings को
                  प्राथमिकता दें।
                </p>
              </section>

              <section>
                <h2>11. Third-Party Services और Links</h2>

                <p>
                  Agro Gyaani third-party APIs, websites, government portals,
                  maps, weather services, authentication providers या अन्य
                  external services का उपयोग या link कर सकता है।
                </p>

                <p>
                  Third-party services की availability, accuracy, security और
                  policies संबंधित provider के नियंत्रण में होती हैं।
                </p>
              </section>

              <section>
                <h2>12. Advertising</h2>

                <p>
                  Agro Gyaani पर Google AdSense सहित third-party advertisements
                  दिखाई जा सकती हैं।
                </p>

                <p>
                  किसी advertisement का दिखाई देना Agro Gyaani द्वारा उस
                  advertiser, product या service की recommendation या guarantee
                  नहीं माना जाना चाहिए।
                </p>

                <p>
                  Users advertisements पर केवल genuine interest होने पर ही
                  interact करें। Artificial, automated या incentivized ad
                  interaction prohibited है।
                </p>
              </section>

              <section>
                <h2>13. Intellectual Property</h2>

                <p>
                  Agro Gyaani के original design, branding, software, graphics
                  और original content पर लागू intellectual property rights
                  उनके respective owners के पास रहते हैं।
                </p>

                <p>
                  Third-party trademarks, government names, datasets और content
                  पर उनके संबंधित owners/licensors के अधिकार लागू होते हैं।
                </p>
              </section>

              <section>
                <h2>14. Service Availability</h2>

                <p>
                  हम website को उपलब्ध और reliable रखने का प्रयास करते हैं,
                  लेकिन uninterrupted, error-free या permanently available
                  service की guarantee नहीं देते।
                </p>

                <p>
                  Maintenance, security incidents, third-party outages,
                  network issues या अन्य कारणों से service temporarily
                  unavailable हो सकती है।
                </p>
              </section>

              <section>
                <h2>15. Suspension और Termination</h2>

                <p>
                  Fraud, abuse, security risk, unlawful activity या Terms के
                  गंभीर उल्लंघन की स्थिति में account access को restrict,
                  suspend या terminate किया जा सकता है, subject to applicable
                  law।
                </p>
              </section>

              <section>
                <h2>16. Liability</h2>

                <p>
                  Applicable law द्वारा अनुमत सीमा तक, Agro Gyaani पर उपलब्ध
                  informational content के आधार पर किए गए agricultural,
                  commercial या अन्य निर्णय user की अपनी जिम्मेदारी पर होते हैं।
                </p>

                <p>
                  इन Terms में कोई भी provision ऐसे statutory rights या
                  liability को exclude नहीं करता जिसे applicable law के तहत
                  legally exclude नहीं किया जा सकता।
                </p>
              </section>

              <section>
                <h2>17. Applicable Law</h2>

                <p>
                  इन Terms का interpretation और Agro Gyaani का operation
                  applicable laws of India के अधीन होगा।
                </p>

                <p>
                  Applicable consumer protection, data protection और अन्य
                  statutory rights इन Terms से प्रभावित नहीं होंगे।
                </p>
              </section>

              <section>
                <h2>18. Terms में बदलाव</h2>

                <p>
                  Platform, कानून या services बदलने पर इन Terms को update किया
                  जा सकता है। Updated version इस page पर प्रकाशित किया जाएगा।
                </p>
              </section>

              <section>
                <h2>19. संपर्क</h2>

                <p>
                  Terms या platform से संबंधित प्रश्नों के लिए Contact page
                  का उपयोग करें।
                </p>

                <p>
                  Production launch से पहले Agro Gyaani की responsible legal
                  entity और official contact details यहां प्रकाशित की जाएंगी।
                </p>
              </section>
            </article>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}