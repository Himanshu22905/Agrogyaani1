import type { Metadata } from "next";
import FarmerDashboard from "@/components/dashboard/FarmerDashboard";

export const metadata: Metadata = {
  title: "किसान Dashboard | Agro Gyaani",
  description:
    "अपनी फसल, मौसम, मंडी भाव और कृषि सेवाओं को Agro Gyaani Dashboard से देखें।",
};

export default function DashboardPage() {
  return <FarmerDashboard />;
}