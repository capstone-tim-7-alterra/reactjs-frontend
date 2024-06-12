// import Footer from "../components/LandingPage/Footer";
import HeroSection from "../components/landingPage/HeroSection";
import Nav from "../components/landingPage/NavbarLP";
import Benefit from "../components/landingPage/Benefit";
import Appscreen from "../components/landingPage/Appscreen";
import Testimoni from "../components/landingPage/Testimoni";
import Footer from "../components/landingPage/Footer";
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