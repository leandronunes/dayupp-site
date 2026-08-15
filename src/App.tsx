import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Marketplace } from "./components/Marketplace";
import { HowItWorks } from "./components/HowItWorks";
import { Evolution } from "./components/Evolution";
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
        <Features />
        <Marketplace />
        <HowItWorks />
        <Evolution />
        <BusinessModel />
        <Faq />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
