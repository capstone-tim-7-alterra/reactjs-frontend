import React from 'react'
import Logo from "../../assets/iconSidebar/Logo.png";
export default function Footer() {
  return (
    <section className="container mx-auto bg-base-170 relative mt-10">
      <footer className="footer">
  <aside className='flex'>
    <img src={Logo} alt="Logo" className="w-[84.59px] h-[86px]" />
    <p className='text-xl ml-3 mt-3 text-base-150'>Kreasi<br/>Nusantara</p>
  </aside> 
  <nav className="text-base-180">
    <h6 className="footer-title">Services</h6> 
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav className="text-base-180">
    <h6 className="footer-title">Company</h6> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav className="text-base-180">
    <h6 className="footer-title">Legal</h6> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
    </section>
  )
}
