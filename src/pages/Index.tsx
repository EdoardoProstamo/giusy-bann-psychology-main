import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import Strengths from "@/components/Strengths";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import ContactSection from "@/components/ContactSection";

export default function Index() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ServicesGrid preview />
        <Strengths />
        <Reviews />
        <FAQ />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
