"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase/client";

type Profile = {
  full_name: string | null;
  state: string | null;
  district: string | null;
  village: string | null;
  pincode: string | null;
  preferred_language: string | null;
  onboarding_completed: boolean;
};

type FarmerCrop = {
  id: number;
  crop_name: string;
  crop_key: string;
  season: string | null;
};

export default function FarmerDashboard() {
  const router = useRouter();

  const [profile, setProfile] = useState<Profile | null>(null);
  const [crops, setCrops] = useState<FarmerCrop[]>([]);
  const [loading, setLoading] = useState(true);
  const [loggingOut, setLoggingOut] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadDashboard() {
      try {
        const {
          data: { user },
          error: userError,
        } = await supabase.auth.getUser();

        if (userError || !user) {
          router.replace("/login");
          return;
        }

        const { data: profileData, error: profileError } =
          await supabase
            .from("profiles")
            .select(
              "full_name, state, district, village, pincode, preferred_language, onboarding_completed"
            )
            .eq("id", user.id)
            .single();

        if (profileError || !profileData) {
          console.error("Profile error:", profileError);
          setError("आपकी किसान प्रोफाइल लोड नहीं हो पाई।");
          return;
        }

        if (!profileData.onboarding_completed) {
          router.replace("/onboarding");
          return;
        }

        const { data: cropData, error: cropError } =
          await supabase
            .from("farmer_crops")
            .select("id, crop_name, crop_key, season")
            .eq("user_id", user.id)
            .order("created_at", { ascending: true });

        if (cropError) {
          console.error("Crop error:", cropError);
          setError("आपकी फसल की जानकारी लोड नहीं हो पाई।");
          return;
        }

        setProfile(profileData);
        setCrops(cropData ?? []);
      } catch (err) {
        console.error("Dashboard error:", err);
        setError("Dashboard लोड करते समय समस्या आई।");
      } finally {
        setLoading(false);
      }
    }

    loadDashboard();
  }, [router]);

  async function handleLogout() {
    try {
      setLoggingOut(true);

      const { error: logoutError } =
        await supabase.auth.signOut();

      if (logoutError) {
        console.error("Logout error:", logoutError);
        setError("लॉग आउट नहीं हो पाया।");
        return;
      }

      router.replace("/login");
      router.refresh();
    } finally {
      setLoggingOut(false);
    }
  }

  if (loading) {
    return (
      <main className="dashboard-loading">
        <div>
          <span>🌾</span>
          <p>आपका Dashboard तैयार हो रहा है...</p>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="dashboard-loading">
        <div>
          <span>⚠️</span>
          <p>{error}</p>

          <button
            type="button"
            className="dashboard-retry"
            onClick={() => window.location.reload()}
          >
            दोबारा कोशिश करें
          </button>
        </div>
      </main>
    );
  }

  if (!profile) {
    return null;
  }

  const firstName =
    profile.full_name?.trim().split(" ")[0] || "किसान";

  const location = [
    profile.village,
    profile.district,
    profile.state,
  ]
    .filter(Boolean)
    .join(", ");

  return (
    <main className="farmer-dashboard">
      <header className="dashboard-header">
        <button
          type="button"
          className="dashboard-brand"
          onClick={() => router.push("/dashboard")}
        >
          <span>🌾</span>
          <strong>Agro Gyaani</strong>
        </button>

        <div className="dashboard-header-actions">
          <span className="dashboard-location">
            📍 {location || "लोकेशन उपलब्ध नहीं"}
          </span>

          <button
            type="button"
            className="dashboard-logout"
            onClick={handleLogout}
            disabled={loggingOut}
          >
            {loggingOut ? "लॉग आउट..." : "लॉग आउट"}
          </button>
        </div>
      </header>

      <div className="dashboard-container">
        <section className="dashboard-welcome">
          <div>
            <span className="dashboard-eyebrow">
              किसान Dashboard
            </span>

            <h1>नमस्ते, {firstName} 👋</h1>

            <p>
              आपकी फसल और लोकेशन के आधार पर जरूरी कृषि
              जानकारी यहां दिखाई जाएगी।
            </p>
          </div>

          <div className="dashboard-date">
            <span>आज</span>
            <strong>
              {new Intl.DateTimeFormat("hi-IN", {
                day: "numeric",
                month: "long",
                year: "numeric",
              }).format(new Date())}
            </strong>
          </div>
        </section>

        <section className="dashboard-summary-grid">
          <article className="dashboard-summary-card">
            <span className="dashboard-card-icon">🌤️</span>

            <div>
              <small>स्थानीय मौसम</small>
              <strong>जल्द उपलब्ध</strong>
              <p>{profile.district || "आपका जिला"}</p>
            </div>
          </article>

          <article className="dashboard-summary-card">
            <span className="dashboard-card-icon">💰</span>

            <div>
              <small>मंडी भाव</small>
              <strong>जल्द उपलब्ध</strong>
              <p>नजदीकी मंडी</p>
            </div>
          </article>

          <article className="dashboard-summary-card">
            <span className="dashboard-card-icon">🏛️</span>

            <div>
              <small>सरकारी योजनाएं</small>
              <strong>योजनाएं खोजें</strong>
              <p>{profile.state || "आपका राज्य"}</p>
            </div>
          </article>

          <article className="dashboard-summary-card">
            <span className="dashboard-card-icon">🔔</span>

            <div>
              <small>कृषि अलर्ट</small>
              <strong>कोई नया अलर्ट नहीं</strong>
              <p>अपडेट यहां दिखाई देंगे</p>
            </div>
          </article>
        </section>

        <section className="dashboard-section">
          <div className="dashboard-section-heading">
            <div>
              <span>मेरी खेती</span>
              <h2>मेरी फसलें</h2>
            </div>

            <button
              type="button"
              onClick={() =>
                router.push("/onboarding/crops")
              }
            >
              फसलें मैनेज करें →
            </button>
          </div>

          {crops.length > 0 ? (
            <div className="dashboard-crops-grid">
              {crops.map((crop) => (
                <article
                  key={crop.id}
                  className="dashboard-crop-card"
                >
                  <div className="dashboard-crop-icon">
                    🌱
                  </div>

                  <div>
                    <strong>{crop.crop_name}</strong>

                    <span>
                      {crop.season || "Season उपलब्ध नहीं"}
                    </span>
                  </div>

                  <button type="button">
                    देखें →
                  </button>
                </article>
              ))}
            </div>
          ) : (
            <div className="dashboard-empty">
              <span>🌱</span>

              <div>
                <strong>अभी कोई फसल नहीं जोड़ी गई</strong>
                <p>
                  व्यक्तिगत कृषि जानकारी पाने के लिए अपनी
                  फसल जोड़ें।
                </p>
              </div>
            </div>
          )}
        </section>

        <section className="dashboard-services">
          <div className="dashboard-section-heading">
            <div>
              <span>Agro Gyaani</span>
              <h2>आपके लिए सेवाएं</h2>
            </div>
          </div>

          <div className="dashboard-services-grid">
            <button type="button">
              <span>🌦️</span>
              <strong>मौसम</strong>
              <small>स्थानीय पूर्वानुमान</small>
            </button>

            <button type="button">
              <span>💰</span>
              <strong>मंडी भाव</strong>
              <small>फसल के बाजार भाव</small>
            </button>

            <button type="button">
              <span>🏛️</span>
              <strong>योजनाएं</strong>
              <small>सरकारी किसान योजनाएं</small>
            </button>

            <button type="button">
              <span>🧑‍🌾</span>
              <strong>फसल सलाह</strong>
              <small>खेती से जुड़ी जानकारी</small>
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}