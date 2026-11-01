import About from "../components/About";
import Contact from "../components/Contact";
import CTASection from "../components/CTASection";
import FeatureCards from "../components/FeatureCards";
import FloatingActions from "../components/FloatingActions";
import Footer from "../components/Footer";
import HeroSlider from "../components/HeroSlider";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import VehicleListing from "../components/VehicleListing";
import WhyChooseUs from "../components/WhyChooseUs";

export default function Home({ onBook }) {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-slate-700">
      <Navbar onBook={onBook} />

      <main>
        <HeroSlider onBook={onBook} />

        <About />

        <FeatureCards />

        <Services />

        <VehicleListing onBook={onBook} />

        <WhyChooseUs />

        <CTASection onBook={onBook} />

        <Contact />
      </main>

      {/* FLOATING ACTIONS + CHATBOT */}
      <FloatingActions onBook={onBook} />
    </div>
  );
}