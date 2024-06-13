/* eslint-disable react/no-unescaped-entities */
import awan from "../../assets/imgLandingpage/awan.png";
import orang1 from "../../assets/imgLandingpage/orang1.png";
import orang2 from "../../assets/imgLandingpage/orang2.png";
import star from "../../assets/imgLandingpage/star.png";

export default function Testimoni() {
  return (
    <section id="testimoni"
    className="container mx-auto bg-base-150 relative min-h-[800px]">
        <h1 className="text-[32px] text-center font-bold text-primary-100 mt-5">
          What People Say
        </h1>
        <img src={awan} className="absolute w-[194px] left-[8%] top-[8%]" />
        <img src={awan} className="absolute w-[194px] right-[8%] top-[25%]" />
        <img src={awan} className="absolute w-[194px] bottom-[3%] left-[27%] " />
        <div className="flex mx-auto justify-center space-x-[68px]">
          <div className="lg:w-[447px]  mt-10 card w-96 bg-primary-100 shadow-xl lg:py-[53px] lg:px-7 space-y-[47.8px]">
            <div className="avatar">
              <div className="mx-auto w-24 rounded-full">
                <img src={orang1} />
              </div>
            </div>
            <p className="card-body text-center text-[#383A47] p-0 text-base leading-7 font-">
              "Wow, this app is a gem! It's like having a personal guide to the
              local art scene right in my pocket. From finding exciting events
              to discovering hidden gems, it's made exploring my city's culture
              so much fun. Definitely my favorite go-to app!"
            </p>
            <div>
              <h2 className="card-title justify-center font-bold  text-[#383A47]">
                Lucas John
              </h2>
              <div className="flex justify-center gap-1 mt-2">
                <img src={star} className="w-[15px]" />
                <img src={star} className="w-[15px]" />
                <img src={star} className="w-[15px]" />
                <img src={star} className="w-[15px]" />
                <img src={star} className="w-[15px] opacity-[0.2]" />
              </div>
            </div>
          </div>

          {/*testi orang 2  */}
          <div className="lg:w-[447px]  mt-10 card w-96 bg-primary-100 shadow-xl lg:py-[53px] lg:px-7 space-y-[47.8px]">
            <div className="avatar">
              <div className="mx-auto w-24 rounded-full">
                <img src={orang2} />
              </div>
            </div>
            <p className="card-body text-center text-[#383A47] p-0 text-base leading-7 font-">
              "Discovering this app was a revelation! It's like having a
              personal curator for the local art scene right at my fingertips.
              From uncovering exciting events to finding hidden gems, It's
              undoubtedly become my favorite go-to app!"
            </p>
            <div>
              <h2 className="card-title justify-center font-bold  text-[#383A47]">
                Olivia Esther
              </h2>
              <div className="flex justify-center gap-1 mt-2">
                <img src={star} className="w-[15px]" />
                <img src={star} className="w-[15px]" />
                <img src={star} className="w-[15px]" />
                <img src={star} className="w-[15px]" />
                <img src={star} className="w-[15px] opacity-[0.2]" />
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}
