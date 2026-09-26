import type { Metadata } from "next";
import FarmerOnboarding from "@/components/onboarding/FarmerOnboarding";

export const metadata: Metadata = {
  title: "अपनी प्रोफाइल पूरी करें | Agro Gyaani",
  description:
    "अपनी लोकेशन और कृषि प्राथमिकताएं जोड़कर Agro Gyaani किसान प्रोफाइल पूरी करें।",
};

export default function OnboardingPage() {
  return <FarmerOnboarding />;
}