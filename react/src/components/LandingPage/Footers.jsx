import Logo from "../../assets/iconSidebar/Logo.png";
import gplay from "../../assets/imgLandingpage/gplay.png";
import appstore from "../../assets/imgLandingpage/appstore.png";
export default function Footer() {
  return (
    <section className="container mx-auto bg-base-170 relative mt-10">
      <footer className="footer">
  <aside className='flex'>
    <img src={Logo} alt="Logo" className="w-[84.59px] h-[86px]" />
    <p className='text-xl ml-3 mt-3 text-base-150'>Kreasi<br/>Nusantara</p>
  </aside> 
  <nav className="text-base-180">
    <h6 className="footer-title">Product</h6> 
    <a className="link link-hover">Pricing</a>
    <a className="link link-hover">Overview</a>
    <a className="link link-hover">Browse</a>
    <a className="link link-hover">Accessibility</a>
    <a className="link link-hover">Five</a>
  </nav> 
  <nav className="text-base-180">
    <h6 className="footer-title">Solutions</h6> 
    <a className="link link-hover">Brainstorming</a>
    <a className="link link-hover">Ideation</a>
    <a className="link link-hover">Wireframing</a>
    <a className="link link-hover">Research</a>
  </nav> 
  <nav className="text-base-180">
    <h6 className="footer-title">Resource</h6> 
    <a className="link link-hover">Help Center</a>
    <a className="link link-hover">Blog</a>
    <a className="link link-hover">Tutorial</a>
  </nav>
  <nav className="text-base-180">
    <h6 className="footer-title">Get The App</h6> 
    <img src={gplay} alt="gplay" className="w-[119px]"/>
    <img src={appstore} alt="appstore" className="w-[119px]"/>
  </nav>
</footer>
    </section>
  )
}
