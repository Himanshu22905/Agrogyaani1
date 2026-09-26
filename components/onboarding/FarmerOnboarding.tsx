"use client";

import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase/client";

const states = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi",
  "Jammu and Kashmir",
  "Ladakh",
  "Lakshadweep",
  "Puducherry",
];

export default function FarmerOnboarding() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [checkingSession, setCheckingSession] = useState(true);

  const [fullName, setFullName] = useState("");
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const [village, setVillage] = useState("");
  const [pincode, setPincode] = useState("");
  const [language, setLanguage] = useState("hi");

  const [error, setError] = useState("");

  useEffect(() => {
    async function loadProfile() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        router.replace("/login");
        return;
      }

      const { data: profile, error: profileError } = await supabase
        .from("profiles")
        .select(
          "full_name, state, district, village, pincode, preferred_language, onboarding_completed"
        )
        .eq("id", user.id)
        .single();

      if (profileError) {
        console.error("Profile loading error:", profileError);
        setError("आपकी प्रोफाइल लोड नहीं हो पाई।");
        setCheckingSession(false);
        return;
      }

      if (profile.onboarding_completed) {
        router.replace("/dashboard");
        return;
      }

      setFullName(profile.full_name ?? "");
      setState(profile.state ?? "");
      setDistrict(profile.district ?? "");
      setVillage(profile.village ?? "");
      setPincode(profile.pincode ?? "");
      setLanguage(profile.preferred_language ?? "hi");

      setCheckingSession(false);
    }

    loadProfile();
  }, [router]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setError("");

    const cleanName = fullName.trim();
    const cleanDistrict = district.trim();
    const cleanVillage = village.trim();
    const cleanPincode = pincode.replace(/\D/g, "");

    if (!cleanName) {
      setError("कृपया अपना नाम दर्ज करें।");
      return;
    }

    if (!state) {
      setError("कृपया अपना राज्य चुनें।");
      return;
    }

    if (!cleanDistrict) {
      setError("कृपया अपना जिला दर्ज करें।");
      return;
    }

    if (!/^\d{6}$/.test(cleanPincode)) {
      setError("कृपया सही 6 अंकों का PIN code दर्ज करें।");
      return;
    }

    try {
      setLoading(true);

      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();

      if (userError || !user) {
        router.replace("/login");
        return;
      }

      const { error: updateError } = await supabase
        .from("profiles")
        .update({
          full_name: cleanName,
          state,
          district: cleanDistrict,
          village: cleanVillage || null,
          pincode: cleanPincode,
          preferred_language: language,
          onboarding_completed: false,
        })
        .eq("id", user.id);

      if (updateError) {
        console.error("Onboarding update error:", updateError);
        setError(
          "प्रोफाइल सेव नहीं हो पाई। कृपया दोबारा कोशिश करें।"
        );
        return;
      }

      router.push("/onboarding/crops");
      router.refresh();
    } catch (err) {
      console.error("Onboarding error:", err);

      setError(
        "कुछ गलत हो गया। कृपया दोबारा कोशिश करें।"
      );
    } finally {
      setLoading(false);
    }
  }

  if (checkingSession) {
    return (
      <main className="onboarding-loading">
        <div>
          <span>🌾</span>
          <p>आपकी किसान प्रोफाइल तैयार की जा रही है...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="onboarding-page">
      <div className="onboarding-shell">
        <header className="onboarding-header">
          <button
            type="button"
            className="onboarding-logo"
            onClick={() => router.push("/")}
          >
            <span>🌾</span>
            <strong>Agro Gyaani</strong>
          </button>

          <span className="onboarding-step">
            प्रोफाइल सेटअप
          </span>
        </header>

        <section className="onboarding-card">
          <div className="onboarding-progress">
            <span />
          </div>

          <div className="onboarding-heading">
            <span className="section-eyebrow">
              किसान प्रोफाइल
            </span>

            <h1>
              अपनी खेती के बारे में थोड़ा बताएं
            </h1>

            <p>
              आपकी लोकेशन के आधार पर Agro Gyaani मौसम,
              मंडी और कृषि जानकारी को अधिक उपयोगी बना सकेगा।
            </p>
          </div>

          <form
            className="onboarding-form"
            onSubmit={handleSubmit}
          >
            {error && (
              <div
                className="auth-message auth-message-error"
                role="alert"
              >
                {error}
              </div>
            )}

            <div className="onboarding-field">
              <label htmlFor="fullName">
                आपका नाम
              </label>

              <input
                id="fullName"
                type="text"
                value={fullName}
                onChange={(event) =>
                  setFullName(event.target.value)
                }
                disabled={loading}
                required
              />
            </div>

            <div className="onboarding-grid">
              <div className="onboarding-field">
                <label htmlFor="state">
                  राज्य
                </label>

                <select
                  id="state"
                  value={state}
                  onChange={(event) =>
                    setState(event.target.value)
                  }
                  disabled={loading}
                  required
                >
                  <option value="">
                    अपना राज्य चुनें
                  </option>

                  {states.map((stateName) => (
                    <option
                      key={stateName}
                      value={stateName}
                    >
                      {stateName}
                    </option>
                  ))}
                </select>
              </div>

              <div className="onboarding-field">
                <label htmlFor="district">
                  जिला
                </label>

                <input
                  id="district"
                  type="text"
                  placeholder="जैसे: Muzaffarnagar"
                  value={district}
                  onChange={(event) =>
                    setDistrict(event.target.value)
                  }
                  disabled={loading}
                  required
                />
              </div>
            </div>

            <div className="onboarding-grid">
              <div className="onboarding-field">
                <label htmlFor="village">
                  गांव / शहर
                </label>

                <input
                  id="village"
                  type="text"
                  placeholder="अपना गांव या शहर"
                  value={village}
                  onChange={(event) =>
                    setVillage(event.target.value)
                  }
                  disabled={loading}
                />
              </div>

              <div className="onboarding-field">
                <label htmlFor="pincode">
                  PIN Code
                </label>

                <input
                  id="pincode"
                  type="text"
                  inputMode="numeric"
                  maxLength={6}
                  placeholder="6 अंकों का PIN"
                  value={pincode}
                  onChange={(event) =>
                    setPincode(
                      event.target.value
                        .replace(/\D/g, "")
                        .slice(0, 6)
                    )
                  }
                  disabled={loading}
                  required
                />
              </div>
            </div>

            <div className="onboarding-field">
              <label htmlFor="language">
                पसंदीदा भाषा
              </label>

              <select
                id="language"
                value={language}
                onChange={(event) =>
                  setLanguage(event.target.value)
                }
                disabled={loading}
              >
                <option value="hi">हिन्दी</option>
                <option value="en">English</option>
              </select>
            </div>

            <button
              type="submit"
              className="auth-primary-button"
              disabled={loading}
            >
              {loading
                ? "प्रोफाइल सेव हो रही है..."
                : "आगे बढ़ें"}

              {!loading && <span>→</span>}
            </button>
          </form>
        </section>

        <p className="onboarding-privacy">
          आपकी जानकारी का उपयोग Agro Gyaani सेवाओं को
          personalize करने के लिए किया जाता है।
        </p>
      </div>
    </main>
  );
}