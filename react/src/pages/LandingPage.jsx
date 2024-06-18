import HeroSection from "../components/landingPageC/HeroSections";
import Nav from "../components/landingPageC/NavbarUser";
import Benefit from "../components/landingPageC/Benefits";
import Appscreen from "../components/landingPageC/Appscreen";
import Testimoni from "../components/landingPageC/Testimonis";
import Footer from "../components/landingPageC/Footers";
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