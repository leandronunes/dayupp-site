import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { BenefitsStrip } from "./components/BenefitsStrip";
import { Features } from "./components/Features";
import { ForProfessional } from "./components/ForProfessional";
import { ForStudent } from "./components/ForStudent";
import { Marketplace } from "./components/Marketplace";
import { HowItWorks } from "./components/HowItWorks";
import { BrandConcept } from "./components/BrandConcept";
import { Stats } from "./components/Stats";
import { BusinessModel } from "./components/BusinessModel";
import { Faq } from "./components/Faq";
import { CtaBand } from "./components/CtaBand";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <BenefitsStrip />
        <Features />
        <ForProfessional />
        <ForStudent />
        <Marketplace />
        <HowItWorks />
        <BrandConcept />
        <Stats />
        <BusinessModel />
        <Faq />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
