import HeroSection from "../components/LandingPage/HeroSections";
import Nav from "../components/LandingPage/NavbarLP";
import Benefit from "../components/LandingPage/Benefits";
import Appscreen from "../components/LandingPage/Appscreen";
import Testimoni from "../components/LandingPage/Testimonis";
import Footer from "../components/LandingPage/Footers";
export default function HomePage() {
  return (
    <div className="bg-base-170">
      <Nav />
      <HeroSection />
      <Benefit />
      <Appscreen />
      <Testimoni />
      <Footer />
    </div>
  );
}
