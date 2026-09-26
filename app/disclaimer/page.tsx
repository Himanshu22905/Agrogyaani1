import type { Metadata } from "next";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

export const metadata: Metadata = {
  title: "Disclaimer | Agro Gyaani",
  description:
    "Agro Gyaani पर उपलब्ध कृषि, मौसम, मंडी, सरकारी योजना और अन्य जानकारी से संबंधित महत्वपूर्ण disclaimer।",
};

export default function DisclaimerPage() {
  return (
    <>
      <Header />

      <main>
        <section className="legal-page-hero">
          <div className="site-container legal-page-heading">
            <span className="section-eyebrow">महत्वपूर्ण जानकारी</span>
            <h1>Disclaimer</h1>

            <p>
              Agro Gyaani इस्तेमाल करने से पहले कृषि, मौसम, मंडी, सरकारी
              योजनाओं और अन्य जानकारी से संबंधित इन सीमाओं को समझें।
            </p>

            <small>Last updated: 26 July 2026</small>
          </div>
        </section>

        <section className="legal-content-section">
          <div className="site-container legal-single-content">
            <article className="legal-content">
              <div className="legal-warning legal-warning-large">
                <strong>Agro Gyaani एक स्वतंत्र सूचना प्लेटफॉर्म है।</strong>

                <p>
                  यह भारत सरकार, Ministry of Agriculture & Farmers Welfare,
                  किसी राज्य सरकार, India Meteorological Department (IMD),
                  eNAM, किसी मंडी बोर्ड या अन्य सरकारी संस्था की आधिकारिक
                  website नहीं है और किसी affiliation या endorsement का दावा
                  नहीं करता, जब तक स्पष्ट रूप से अन्यथा न बताया गया हो।
                </p>
              </div>

              <section>
                <h2>1. सामान्य जानकारी</h2>

                <p>
                  Agro Gyaani पर उपलब्ध content और digital tools सामान्य
                  informational और educational purposes के लिए हैं।
                </p>

                <p>
                  हम उपयोगी और current information उपलब्ध कराने का प्रयास
                  करते हैं, लेकिन सभी information के हर समय complete,
                  error-free, current या हर local situation के लिए suitable
                  होने की guarantee नहीं दी जा सकती।
                </p>
              </section>

              <section>
                <h2>2. कृषि सलाह</h2>

                <p>
                  Crop, soil, fertilizer, irrigation, pest, disease, seed,
                  harvesting या अन्य farming-related information को
                  individualized professional agricultural advice नहीं माना
                  जाना चाहिए।
                </p>

                <p>
                  कृषि परिणाम मिट्टी, मौसम, location, variety, input quality,
                  irrigation, disease pressure और farming practices सहित कई
                  factors पर निर्भर करते हैं।
                </p>

                <p>
                  किसी महत्वपूर्ण treatment, chemical application या crop
                  management decision से पहले qualified agriculture expert,
                  Krishi Vigyan Kendra, agricultural university, competent
                  government authority या अन्य appropriate expert से सलाह लें।
                </p>
              </section>

              <section>
                <h2>3. Pesticides और Agricultural Chemicals</h2>

                <p>
                  किसी pesticide, insecticide, fertilizer या agricultural
                  chemical का उल्लेख recommendation, guarantee या unrestricted
                  authorization नहीं माना जाना चाहिए।
                </p>

                <p>
                  केवल applicable law के तहत permitted/registered products का
                  उपयोग करें और label instructions, dosage, safety precautions,
                  waiting periods तथा competent authority की directions का पालन
                  करें।
                </p>

                <p>
                  Product misuse, excessive dosage, prohibited use या label के
                  विपरीत इस्तेमाल से होने वाले परिणामों की जिम्मेदारी
                  Agro Gyaani नहीं ले सकता।
                </p>
              </section>

              <section>
                <h2>4. Seed Information</h2>

                <p>
                  Seed variety, suitability, germination, yield या performance
                  से संबंधित information सामान्य guidance के लिए है।
                </p>

                <p>
                  Actual performance climate, soil, seed quality, farming
                  practices और local conditions के कारण अलग हो सकती है।
                  Seeds खरीदते समय applicable certification, label और authorized
                  seller information verify करें।
                </p>
              </section>

              <section>
                <h2>5. मौसम</h2>

                <p>
                  Weather information और forecasts third-party या official data
                  sources पर आधारित हो सकते हैं और scientific forecasts में
                  inherent uncertainty होती है।
                </p>

                <p>
                  Actual weather conditions forecast से अलग हो सकती हैं।
                  Extreme weather, flood, storm, heatwave, lightning या अन्य
                  safety-critical situations में IMD और संबंधित competent
                  authorities की official alerts और instructions को प्राथमिकता दें।
                </p>
              </section>

              <section>
                <h2>6. मंडी भाव और Market Information</h2>

                <p>
                  Agro Gyaani पर दिखाए गए mandi prices और market information
                  source, reporting time और उपलब्ध data पर आधारित हो सकते हैं।
                </p>

                <p>
                  वास्तविक transaction price commodity quality, grade,
                  quantity, location, buyer, seller, demand और transaction time
                  के अनुसार अलग हो सकती है।
                </p>

                <p>
                  किसी displayed price को guaranteed sale price, purchase offer,
                  investment advice या future price guarantee न समझें।
                </p>
              </section>

              <section>
                <h2>7. सरकारी योजनाएं</h2>

                <p>
                  Government scheme information किसानों की सुविधा के लिए
                  summarized form में उपलब्ध कराई जा सकती है।
                </p>

                <p>
                  Eligibility, application process, benefit amount, documents,
                  deadlines और scheme status संबंधित government authority
                  द्वारा बदले जा सकते हैं।
                </p>

                <p>
                  आवेदन करने से पहले संबंधित official government website,
                  notification या competent authority से latest information
                  verify करें।
                </p>

                <p>
                  Agro Gyaani किसी scheme में selection, approval, subsidy,
                  loan, payment या benefit की guarantee नहीं करता।
                </p>
              </section>

              <section>
                <h2>8. Calculators और Estimates</h2>

                <p>
                  Agro Gyaani calculators द्वारा दिए गए परिणाम user द्वारा
                  entered data और programmed formulas पर आधारित estimates हो
                  सकते हैं।
                </p>

                <p>
                  इन्हें guaranteed agricultural, financial या commercial
                  result नहीं माना जाना चाहिए।
                </p>
              </section>

              <section>
                <h2>9. External Sources और Links</h2>

                <p>
                  Agro Gyaani third-party websites, government portals, APIs,
                  data providers या external resources को link या reference कर
                  सकता है।
                </p>

                <p>
                  External website का link केवल convenience/reference के लिए
                  हो सकता है और इससे endorsement या affiliation स्वतः स्थापित
                  नहीं होती।
                </p>

                <p>
                  External services के content, availability और privacy/security
                  practices उनके संबंधित operators की जिम्मेदारी हैं।
                </p>
              </section>

              <section>
                <h2>10. Advertisements</h2>

                <p>
                  वेबसाइट पर Google AdSense या अन्य advertising platforms के
                  advertisements दिखाई दे सकते हैं।
                </p>

                <p>
                  Ads third-party advertisers द्वारा उपलब्ध कराए जा सकते हैं।
                  किसी advertisement की presence को Agro Gyaani की endorsement,
                  certification या recommendation न समझें।
                </p>

                <p>
                  किसी advertised product या service को खरीदने या इस्तेमाल
                  करने से पहले user को अपनी स्वतंत्र जांच करनी चाहिए।
                </p>
              </section>

              <section>
                <h2>11. No Guaranteed Results</h2>

                <p>
                  Agro Gyaani crop yield, income, profit, market price,
                  government benefit, weather outcome या किसी अन्य agricultural
                  result की guarantee नहीं देता।
                </p>
              </section>

              <section>
                <h2>12. Emergencies</h2>

                <p>
                  Agro Gyaani emergency response service नहीं है।
                </p>

                <p>
                  Human safety, poisoning, pesticide exposure, fire, severe
                  weather, animal emergency या अन्य urgent situation में
                  संबंधित official emergency service, medical professional,
                  poison/safety authority या competent government authority से
                  तुरंत सहायता लें।
                </p>
              </section>

              <section>
                <h2>13. उपयोगकर्ता की जिम्मेदारी</h2>

                <p>
                  किसी महत्वपूर्ण agricultural, financial, legal, safety या
                  commercial decision से पहले information को relevant official
                  या professional source से verify करना user की जिम्मेदारी है।
                </p>
              </section>

              <section>
                <h2>14. Disclaimer में बदलाव</h2>

                <p>
                  Services, data sources या applicable requirements बदलने पर
                  इस Disclaimer को update किया जा सकता है।
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