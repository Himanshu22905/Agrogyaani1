import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Introduction from "@/components/landing/Introduction";
import Services from "@/components/landing/Services";
import HowItWorks from "@/components/landing/HowItWorks";
import DashboardPreview from "@/components/landing/DashboardPreview";
import WhyAgroGyaani from "@/components/landing/WhyAgroGyaani";
import Testimonials from "@/components/landing/Testimonials";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Introduction />
        <Services />
        <HowItWorks />
        <DashboardPreview />
        <WhyAgroGyaani />
        <Testimonials />
        <FinalCTA />
      </main>

      <Footer />
    </>
  );
}