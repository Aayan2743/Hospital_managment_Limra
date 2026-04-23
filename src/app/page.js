import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import DoctorSection from "./components/DoctorSection";
import ProcessSection from "./components/ProcessSection";
import AboutSection from "./components/AboutSection";

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />

      <HeroSection />
      <AboutSection />
      <ProcessSection />
      <DoctorSection />

      <Footer />
    </div>
  );
}
