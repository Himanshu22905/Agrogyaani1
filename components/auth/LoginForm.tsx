"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase/client";

export default function LoginForm() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setError("");

    const cleanEmail = email.trim().toLowerCase();

    if (!cleanEmail) {
      setError("कृपया अपना ईमेल पता दर्ज करें।");
      return;
    }

    if (!password) {
      setError("कृपया अपना पासवर्ड दर्ज करें।");
      return;
    }

    try {
      setLoading(true);

      // 1. Login with Supabase
      const { data, error: loginError } =
        await supabase.auth.signInWithPassword({
          email: cleanEmail,
          password,
        });

      if (loginError) {
        const message = loginError.message.toLowerCase();

        if (
          message.includes("invalid login") ||
          message.includes("invalid credentials")
        ) {
          setError("ईमेल या पासवर्ड सही नहीं है।");
          return;
        }

        if (message.includes("email not confirmed")) {
          setError(
            "कृपया पहले अपने ईमेल पर भेजे गए verification link से ईमेल verify करें।"
          );
          return;
        }

        console.error("Login error:", loginError);

        setError(
          "लॉग इन नहीं हो पाया। कृपया अपनी जानकारी जांचें और दोबारा कोशिश करें।"
        );
        return;
      }

      if (!data.user || !data.session) {
        setError(
          "लॉग इन नहीं हो पाया। कृपया दोबारा कोशिश करें।"
        );
        return;
      }

      // 2. Get registration metadata
      const fullName =
        typeof data.user.user_metadata?.full_name === "string"
          ? data.user.user_metadata.full_name
          : null;

      const phone =
        typeof data.user.user_metadata?.phone === "string"
          ? data.user.user_metadata.phone
          : null;

      // 3. Check whether profile already exists
      const { data: existingProfile, error: profileCheckError } =
        await supabase
          .from("profiles")
          .select("id, onboarding_completed")
          .eq("id", data.user.id)
          .maybeSingle();

      if (profileCheckError) {
        console.error(
          "Profile check error:",
          profileCheckError
        );

        setError(
          "लॉग इन हो गया, लेकिन आपकी किसान प्रोफाइल लोड नहीं हो पाई। कृपया दोबारा कोशिश करें।"
        );
        return;
      }

      // 4. Create profile only when one does not exist
      if (!existingProfile) {
        const { error: profileCreateError } = await supabase
          .from("profiles")
          .insert({
            id: data.user.id,
            full_name: fullName,
            phone,
            preferred_language: "hi",
            onboarding_completed: false,
          });

        if (profileCreateError) {
          console.error(
            "Profile creation error:",
            profileCreateError
          );

          setError(
            "लॉग इन हो गया, लेकिन आपकी किसान प्रोफाइल तैयार नहीं हो पाई। कृपया दोबारा कोशिश करें।"
          );
          return;
        }

        // New user must complete onboarding
        router.replace("/onboarding");
        router.refresh();
        return;
      }

      // 5. Existing profile:
      // completed farmer -> dashboard
      // incomplete farmer -> onboarding
      if (existingProfile.onboarding_completed) {
        router.replace("/dashboard");
      } else {
        router.replace("/onboarding");
      }

      router.refresh();

      /*
       * Supabase persists browser sessions by default.
       * We keep this checkbox in the UI for now and can implement
       * different persistence behaviour later.
       */
      void rememberMe;
    } catch (err) {
      console.error("Unexpected login error:", err);

      setError(
        "कुछ गलत हो गया। कृपया इंटरनेट कनेक्शन जांचें और दोबारा कोशिश करें।"
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      className="auth-form"
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

      <div className="auth-field">
        <label htmlFor="email">
          ईमेल पता
        </label>

        <input
          id="email"
          name="email"
          type="email"
          placeholder="name@example.com"
          autoComplete="email"
          value={email}
          onChange={(event) =>
            setEmail(event.target.value)
          }
          disabled={loading}
          required
        />
      </div>

      <div className="auth-field">
        <div className="auth-label-row">
          <label htmlFor="password">
            पासवर्ड
          </label>

          <Link href="/forgot-password">
            पासवर्ड भूल गए?
          </Link>
        </div>

        <input
          id="password"
          name="password"
          type="password"
          placeholder="अपना पासवर्ड दर्ज करें"
          autoComplete="current-password"
          value={password}
          onChange={(event) =>
            setPassword(event.target.value)
          }
          disabled={loading}
          required
        />
      </div>

      <label className="auth-remember">
        <input
          type="checkbox"
          checked={rememberMe}
          onChange={(event) =>
            setRememberMe(event.target.checked)
          }
          disabled={loading}
        />

        <span>मुझे लॉग इन रखें</span>
      </label>

      <button
        type="submit"
        className="auth-primary-button"
        disabled={loading}
      >
        {loading
          ? "लॉग इन हो रहा है..."
          : "लॉग इन करें"}

        {!loading && <span>→</span>}
      </button>

      <div className="auth-divider">
        <span>या</span>
      </div>

      <button
        type="button"
        className="auth-google-button"
        disabled={loading}
      >
        <span className="google-g">G</span>
        Google से जारी रखें
      </button>

      <p className="auth-security">
        🔒 अपने OTP या password को किसी के साथ साझा न करें।
      </p>
    </form>
  );
}