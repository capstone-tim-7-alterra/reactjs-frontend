import Gambar from "../../assets/handphone.png";
import Oval from "../../assets/oval.png";
import Logokn1 from "../../assets/logokn1.png"
import Awan from "../../assets/awan.png"
export default function HeroSection () {
    return (
      <section className="mx-auto container bg-base-170">
        <div className="grid grid-cols-1 md:grid-cols-2 mt-10 items-center text-left">
          <article className="text-xl px-2 mb-40"> 
            <h1 className="text-5xl font-bold text-primary-0">Embrace Local Creativity with<br></br><span className="text-base-150 font-bold">Kreasi Nusantara</span></h1> 
            <p className="mt-3 font-light text-base-160 text-2xl">Discover, Connect, and Celebrate Indonesia's<br></br> Diverse Art and Culture</p>
            <button className="bg-base-150 hover:bg-primary-40 text-white font-normal py-1 px-4 rounded-xl mt-5">
              Download Now →
            </button>
          </article>
          <div className="relative w-full ">
            <img src={Oval} className="w-[97%]"/>
            <img src={Awan} className="absolute top-[20%] -left-10" />
            <img src={Awan} className="absolute top-[50%] left-20" />
            <img src={Awan} className="absolute bottom-[3%] -left-10" />
            <img src={Logokn1} className="absolute w-[70%] bottom-[10%] -right-[10%]" />
            <img src={Gambar} className="absolute w-[60%] bottom-0 left-0 translate-x-1/2" />
          </div>
        </div>
        </section>
      );
}