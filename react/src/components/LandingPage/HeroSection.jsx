/* eslint-disable react/no-unescaped-entities */
import Awan from "../../assets/imgLandingpage/awan.png";
import Gambar from "../../assets/imgLandingpage/handphone.png";
import Oval from "../../assets/imgLandingpage/oval.png";
import Logokn1 from "../../assets/imgLandingpage/logokn.png";
import dot from "../../assets/imgLandingpage/Dot.png";

export default function HeroSection() { 
  return (
    <section className="container mx-auto overflow-x-hidden xl:px-[51px]">
      <div className="grid grid-cols-1 md:grid-cols-2 md:mt-10 items-center text-left">
        <article className="text-xl px-2 mb-40">
          <h1 className="lg:text-[40px] font-bold text-primary-0 leading-[56px]">
            Embrace Local Creativity with<br/>
            <span className="text-base-150 font-bold">Kreasi Nusantara</span>
          </h1>
          <p className="mt-3 font-light text-base-160 text-2xl">
            Discover, Connect, and Celebrate Indonesia's<br/> Diverse Art and Culture
          </p>
          <button className="bg-base-150 hover:bg-primary-40 text-white font-normal py-1 px-4 rounded-xl mt-5">
            Download Now →
          </button>
        </article>
        
        <div className="relative">
          <img src={Awan} className="absolute w-[194px] top-[20%] -left-10" />
          <img src={Oval} className="w-[97%]" />
          <img src={Awan} className="absolute w-[194px] top-[50%] left-20" />
          <img src={Awan} className="absolute w-[194px] bottom-[3%] -left-10" />
          <img
            src={Logokn1}
            className="absolute w-[60%] bottom-[10%] -right-[10%]"
          />
          <img
            src={Gambar}
            className="absolute w-[60%] bottom-0 left-0 translate-x-1/2"
          />
          <img src={dot} className="absolute w-[207px] top-12 -left-5" />
          <img src={dot} className="absolute w-[207px] bottom-0 right-1" />
        </div>
      </div>
    </section>
  );
}
