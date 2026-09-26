import type { Metadata } from "next";
import CropOnboarding from "@/components/onboarding/CropOnboarding";

export const metadata: Metadata = {
  title: "अपनी फसल चुनें | Agro Gyaani",
  description:
    "अपनी फसलें चुनें ताकि Agro Gyaani आपको अधिक उपयोगी कृषि जानकारी दे सके।",
};

export default function CropsPage() {
  return <CropOnboarding />;
}