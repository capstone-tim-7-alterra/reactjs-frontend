import hp1 from "../../assets/imgLandingpage/hp1.png";
import hp2 from "../../assets/imgLandingpage/hp2.png";
import hp3 from "../../assets/imgLandingpage/hp3.png";
import hp4 from "../../assets/imgLandingpage/hp4.png";
import hp5 from "../../assets/imgLandingpage/hp5.png";
import awan1 from "../../assets/imgLandingpage/awan1.png";
import dot from "../../assets/imgLandingpage/Dot.png";

export default function Appscreen() {
  return (
    <section id="product" className="mx-auto mt-44 text-left xl:px-[51px]">
      <div className=" flex justify-between items-start ">
        <div>
          <h1 className="text-[38px] font-bold text-primary-0 text-left leading-[45px]">
            Apps Screens -{" "}
            <span className="text-[38px] font-bold text-base-150 text-left">
              &nbsp;Kreasi Nusantara
            </span>
          </h1>
          <p className="mt-10 mb-5 font-light text-base-160 text-2xl text-left">
            Experience the Richness of Indonesian<br></br> Culture at Your
            Fingertips
          </p>
        </div>
        <button className="lg:w-[194px] bg-base-150 hover:bg-base-150 text-white font-normal px-4 h-[40px] !pt-0 rounded-xl">
          Download Now →
        </button>
      </div>

      <div className="relative flex justify-center min-h-[618px]">
        <img src={awan1} className="absolute w-[194px] bottom-[33%] right-[24%]" />
        <img src={dot} className="absolute w-[207px] bottom-[22%] right-[38%]" />
        <img src={hp1} className="absolute w-[30%] top-[10%] left-[15%]" />
        <img src={hp2} className="absolute w-[350px] left-[27%] " />
        <img src={hp5} className="absolute w-[30%] top-[10%] right-[15%]" />
        <img src={hp4} className="absolute w-[350px] top-[3%] right-[26%]" />
        <img src={hp3} className="absolute w-[240px] " />
        <img src={awan1} className="absolute w-[194px] bottom-[25%] -left-[4%]" />
        <img src={awan1} className="absolute w-[194px] top-[25%] right-[4%]" />
        <img src={dot} className="absolute w-[207px] top-0 left-[25%]" />
      </div>
    </section>
  );
}
