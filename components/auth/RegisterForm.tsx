"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase/client";

export default function RegisterForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setError("");
    setSuccess("");

    const cleanName = fullName.trim();
    const cleanEmail = email.trim().toLowerCase();
    const cleanMobile = mobile.replace(/\D/g, "");

    if (!cleanName) {
      setError("कृपया अपना पूरा नाम दर्ज करें।");
      return;
    }

    if (!cleanEmail) {
      setError("कृपया अपना ईमेल पता दर्ज करें।");
      return;
    }

    if (cleanMobile && !/^[6-9]\d{9}$/.test(cleanMobile)) {
      setError("कृपया सही 10 अंकों का भारतीय मोबाइल नंबर दर्ज करें।");
      return;
    }

    if (password.length < 8) {
      setError("पासवर्ड कम से कम 8 characters का होना चाहिए।");
      return;
    }

    if (!termsAccepted) {
      setError(
        "अकाउंट बनाने के लिए Terms & Conditions और Privacy Policy स्वीकार करें।"
      );
      return;
    }

    try {
      setLoading(true);

      const { data, error: signUpError } =
        await supabase.auth.signUp({
          email: cleanEmail,
          password,
          options: {
            data: {
              full_name: cleanName,
              phone: cleanMobile
                ? `+91${cleanMobile}`
                : null,
            },
          },
        });

      if (signUpError) {
        setError(signUpError.message);
        return;
      }

      if (!data.user) {
        setError(
          "अकाउंट नहीं बन पाया। कृपया दोबारा कोशिश करें।"
        );
        return;
      }

      /*
       * Email verification enabled:
       * user exists but authenticated session may not exist yet.
       */

      if (!data.session) {
        setSuccess(
          "अकाउंट बन गया है। आपके ईमेल पर verification link भेजा गया है। ईमेल verify करने के बाद लॉग इन करें।"
        );

        setPassword("");
        return;
      }

      /*
       * If email verification is disabled,
       * session is available immediately.
       */

      const { error: profileError } = await supabase
        .from("profiles")
        .upsert(
          {
            id: data.user.id,
            full_name: cleanName,
            phone: cleanMobile
              ? `+91${cleanMobile}`
              : null,
          },
          {
            onConflict: "id",
          }
        );

      if (profileError) {
        console.error(
          "Profile creation error:",
          profileError
        );

        setSuccess(
          "अकाउंट बन गया है। किसान प्रोफाइल लॉग इन करने के बाद पूरी की जाएगी।"
        );

        return;
      }

      setSuccess(
        "अकाउंट सफलतापूर्वक बन गया है। अब आप लॉग इन कर सकते हैं।"
      );

      setFullName("");
      setEmail("");
      setMobile("");
      setPassword("");
      setTermsAccepted(false);

    } catch (err) {
      console.error("Registration error:", err);

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

      {success && (
        <div
          className="auth-message auth-message-success"
          role="status"
        >
          {success}
        </div>
      )}

      {/* FULL NAME */}

      <div className="auth-field">
        <label htmlFor="name">
          पूरा नाम
        </label>

        <input
          id="name"
          name="name"
          type="text"
          placeholder="अपना नाम दर्ज करें"
          autoComplete="name"
          value={fullName}
          onChange={(event) =>
            setFullName(event.target.value)
          }
          disabled={loading}
          required
        />
      </div>

      {/* EMAIL */}

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

      {/* MOBILE */}

      <div className="auth-field">
        <label htmlFor="mobile">
          मोबाइल नंबर{" "}
          <span>वैकल्पिक</span>
        </label>

        <div className="mobile-input">
          <span>+91</span>

          <input
            id="mobile"
            name="mobile"
            type="tel"
            inputMode="numeric"
            placeholder="10 अंकों का मोबाइल नंबर"
            autoComplete="tel"
            maxLength={10}
            value={mobile}
            onChange={(event) =>
              setMobile(
                event.target.value
                  .replace(/\D/g, "")
                  .slice(0, 10)
              )
            }
            disabled={loading}
          />
        </div>
      </div>

      {/* PASSWORD */}

      <div className="auth-field">
        <label htmlFor="password">
          पासवर्ड
        </label>

        <input
          id="password"
          name="password"
          type="password"
          placeholder="कम से कम 8 characters"
          autoComplete="new-password"
          minLength={8}
          value={password}
          onChange={(event) =>
            setPassword(event.target.value)
          }
          disabled={loading}
          required
        />

        <small>
          कम से कम 8 characters का मजबूत password रखें।
        </small>
      </div>

      {/* TERMS */}

      <div className="auth-consent">
        <input
          id="terms"
          name="terms"
          type="checkbox"
          checked={termsAccepted}
          onChange={(event) =>
            setTermsAccepted(event.target.checked)
          }
          disabled={loading}
        />

        <label htmlFor="terms">
          मैं Agro Gyaani की{" "}
          <Link href="/terms">
            Terms & Conditions
          </Link>{" "}
          और{" "}
          <Link href="/privacy">
            Privacy Policy
          </Link>{" "}
          से सहमत हूं।
        </label>
      </div>

      {/* SUBMIT */}

      <button
        type="submit"
        className="auth-primary-button"
        disabled={loading}
      >
        {loading
          ? "अकाउंट बनाया जा रहा है..."
          : "मुफ्त अकाउंट बनाएं"}

        {!loading && <span>→</span>}
      </button>

      <p className="auth-security">
        🔒 आपकी जानकारी सुरक्षित रखने के लिए उचित security
        measures का उपयोग किया जाता है।
      </p>

    </form>
  );
}