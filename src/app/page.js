'use client';

import FeaturesSection from "@/components/Features";
import PricingSection from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import HowItWorks from "@/components/HowItWorks";
import Navbar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <FeaturesSection />
      <HowItWorks />
      <PricingSection />
      <FAQ />
      <Footer />
    </div>
  )
}

export default Home