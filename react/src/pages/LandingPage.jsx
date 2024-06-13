// import Footer from "../components/LandingPage/Footer";
import HeroSection from "../components/LandingPage/HeroSection";
import Nav from "../components/LandingPage/NavbarLP";
import Benefit from "../components/LandingPage/Benefit";
import Appscreen from "../components/LandingPage/Appscreen";
import Testimoni from "../components/LandingPage/Testimoni";
import Footer from "../components/LandingPage/Footer";
export default function HomePage() {
    return (
        <div className='bg-base-170'>
            <Nav/>
            <HeroSection/>
            <Benefit/>
            <Appscreen/>
            <Testimoni/>
            <Footer/>
        </div>
    )
} 