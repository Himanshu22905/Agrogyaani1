"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase/client";

type Crop = {
  id: string;
  slug: string;
  name_hi: string;
  icon: string;
  season: string | null;
};

export default function CropOnboarding() {
  const router = useRouter();

  const [crops, setCrops] = useState<Crop[]>([]);
  const [selected, setSelected] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [checking, setChecking] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function initialize() {
      try {
        const {
          data: { user },
        } = await supabase.auth.getUser();

        if (!user) {
          router.replace("/login");
          return;
        }

        const { data: profile, error: profileError } =
          await supabase
            .from("profiles")
            .select(
              "state, district, pincode, onboarding_completed"
            )
            .eq("id", user.id)
            .single();

        if (profileError) {
          console.error(
            "Profile loading error:",
            profileError
          );

          setError(
            "प्रोफाइल जानकारी लोड नहीं हो पाई। कृपया दोबारा कोशिश करें।"
          );

          setChecking(false);
          return;
        }

        if (!profile) {
          router.replace("/onboarding");
          return;
        }

        if (profile.onboarding_completed) {
          router.replace("/dashboard");
          return;
        }

        if (
          !profile.state ||
          !profile.district ||
          !profile.pincode
        ) {
          router.replace("/onboarding");
          return;
        }

        /*
         * Load active crops from crops_catalog.
         */
        const {
          data: cropCatalog,
          error: cropCatalogError,
        } = await supabase
          .from("crops_catalog")
          .select(
            "id, slug, name_hi, icon, season"
          )
          .eq("is_active", true)
          .order("sort_order", {
            ascending: true,
          });

        if (cropCatalogError) {
          console.error(
            "Crop catalog error:",
            cropCatalogError
          );

          setError(
            "फसल की जानकारी लोड नहीं हो पाई। कृपया दोबारा कोशिश करें।"
          );

          setChecking(false);
          return;
        }

        setCrops(cropCatalog ?? []);

        /*
         * Load crops already selected by the farmer.
         */
        const { data: existingCrops, error: existingCropError } =
          await supabase
            .from("farmer_crops")
            .select("crop_key")
            .eq("user_id", user.id);

        if (existingCropError) {
          console.error(
            "Existing crops loading error:",
            existingCropError
          );
        }

        if (existingCrops) {
          setSelected(
            existingCrops.map(
              (crop) => crop.crop_key
            )
          );
        }

        setChecking(false);
      } catch (err) {
        console.error(
          "Onboarding initialization error:",
          err
        );

        setError(
          "कुछ गलत हो गया। कृपया दोबारा कोशिश करें।"
        );

        setChecking(false);
      }
    }

    initialize();
  }, [router]);

  function toggleCrop(cropKey: string) {
    setSelected((current) => {
      if (current.includes(cropKey)) {
        return current.filter(
          (key) => key !== cropKey
        );
      }

      return [...current, cropKey];
    });
  }

  async function finishOnboarding() {
    setError("");

    if (selected.length === 0) {
      setError("कम से कम एक फसल चुनें।");
      return;
    }

    try {
      setLoading(true);

      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        router.replace("/login");
        return;
      }

      /*
       * Get selected crops from crops_catalog.
       */
      const selectedCrops = crops.filter((crop) =>
        selected.includes(crop.slug)
      );

      /*
       * Prepare rows for farmer_crops table.
       */
      const cropRows = selectedCrops.map(
        (crop) => ({
          user_id: user.id,
          catalog_crop_id: crop.id,
          crop_name: crop.name_hi,
          crop_key: crop.slug,
          season: crop.season,
          growth_stage: "sowing",
        })
      );

      /*
       * Save / update selected crops.
       */
      const { error: cropError } = await supabase
        .from("farmer_crops")
        .upsert(cropRows, {
          onConflict: "user_id,crop_key",
        });

      if (cropError) {
        console.error(
          "Crop save error:",
          cropError
        );

        setError(
          "फसलें सेव नहीं हो पाईं। कृपया दोबारा कोशिश करें।"
        );

        return;
      }

      /*
       * Remove crops that were previously selected
       * but are now deselected.
       */
      const { data: storedCrops, error: storedCropError } =
        await supabase
          .from("farmer_crops")
          .select("id, crop_key")
          .eq("user_id", user.id);

      if (storedCropError) {
        console.error(
          "Stored crops loading error:",
          storedCropError
        );

        setError(
          "फसल की जानकारी अपडेट नहीं हो पाई। कृपया दोबारा कोशिश करें।"
        );

        return;
      }

      const cropsToDelete =
        storedCrops?.filter(
          (crop) =>
            !selected.includes(crop.crop_key)
        ) ?? [];

      if (cropsToDelete.length > 0) {
        const ids = cropsToDelete.map(
          (crop) => crop.id
        );

        const { error: deleteError } =
          await supabase
            .from("farmer_crops")
            .delete()
            .in("id", ids);

        if (deleteError) {
          console.error(
            "Crop deletion error:",
            deleteError
          );

          setError(
            "फसल की जानकारी पूरी तरह अपडेट नहीं हो पाई।"
          );

          return;
        }
      }

      /*
       * Mark onboarding as completed.
       */
      const { error: profileError } =
        await supabase
          .from("profiles")
          .update({
            onboarding_completed: true,
          })
          .eq("id", user.id);

      if (profileError) {
        console.error(
          "Onboarding completion error:",
          profileError
        );

        setError(
          "प्रोफाइल पूरी नहीं हो पाई। कृपया दोबारा कोशिश करें।"
        );

        return;
      }

      /*
       * Everything completed successfully.
       */
      router.push("/dashboard");
      router.refresh();
    } catch (err) {
      console.error(
        "Finish onboarding error:",
        err
      );

      setError(
        "कुछ गलत हो गया। कृपया दोबारा कोशिश करें।"
      );
    } finally {
      setLoading(false);
    }
  }

  if (checking) {
    return (
      <main className="onboarding-loading">
        <div>
          <span>🌾</span>
          <p>
            आपकी फसल जानकारी लोड हो रही है...
          </p>
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
            चरण 2 / 2
          </span>
        </header>

        <section className="onboarding-card">
          <div className="onboarding-progress">
            <span className="onboarding-progress-full" />
          </div>

          <div className="onboarding-heading">
            <span className="section-eyebrow">
              मेरी फसल
            </span>

            <h1>
              आप कौन-सी फसल उगाते हैं?
            </h1>

            <p>
              एक या अधिक फसलें चुनें। इनके आधार पर
              हम आगे मौसम, मंडी भाव, सलाह और alerts
              को personalize करेंगे।
            </p>
          </div>

          <div className="crop-onboarding-content">
            {error && (
              <div
                className="auth-message auth-message-error"
                role="alert"
              >
                {error}
              </div>
            )}

            {crops.length === 0 && !error && (
              <div className="auth-message">
                अभी कोई फसल उपलब्ध नहीं है।
              </div>
            )}

            <div className="crop-selection-grid">
              {crops.map((crop) => {
                const isSelected =
                  selected.includes(crop.slug);

                return (
                  <button
                    key={crop.id}
                    type="button"
                    className={`crop-selection-card ${
                      isSelected
                        ? "crop-selection-card-selected"
                        : ""
                    }`}
                    onClick={() =>
                      toggleCrop(crop.slug)
                    }
                    disabled={loading}
                  >
                    <span className="crop-selection-check">
                      {isSelected ? "✓" : ""}
                    </span>

                    <span className="crop-selection-emoji">
                      {crop.icon}
                    </span>

                    <strong>
                      {crop.name_hi}
                    </strong>

                    <small>
                      {crop.season ?? "अन्य"}
                    </small>
                  </button>
                );
              })}
            </div>

            <div className="crop-selection-footer">
              <p>
                {selected.length > 0
                  ? `${selected.length} फसल चुनी गई`
                  : "अभी कोई फसल नहीं चुनी गई"}
              </p>

              <button
                type="button"
                className="auth-primary-button"
                onClick={finishOnboarding}
                disabled={
                  loading ||
                  selected.length === 0
                }
              >
                {loading
                  ? "प्रोफाइल तैयार हो रही है..."
                  : "Agro Gyaani शुरू करें"}

                {!loading && (
                  <span>→</span>
                )}
              </button>
            </div>
          </div>
        </section>

        <p className="onboarding-privacy">
          आप Dashboard से बाद में अपनी फसलें
          बदल सकेंगे।
        </p>
      </div>
    </main>
  );
}