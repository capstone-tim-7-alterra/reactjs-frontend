import React from "react";
import people from "../../assets/imgLandingpage/people.png";
import info from "../../assets/imgLandingpage/info.png";
import puzzle from "../../assets/imgLandingpage/puzzle.png";
import rocket from "../../assets/imgLandingpage/rocket.png";
import awan1 from "../../assets/imgLandingpage/awan1.png";
import dot from "../../assets/imgLandingpage/Dot.png";
import circle from "../../assets/imgLandingpage/circle.png";

export default function Benefit() {
  return (
    <section id="benefit" className="container mx-auto bg-base-170 relative">
      <img src={awan1} alt="awan1" className="absolute w-[194px] top-[5%]" />
      <img
        src={awan1}
        alt="awan1"
        className="absolute w-[194px] -top-[8%] -right-8"
      />
      <img
        src={awan1}
        alt="awan1"
        className="absolute w-[194px] -bottom-[5%] right-[45%] "
      />
      <img
        src={awan1}
        alt="awan1"
        className="absolute w-[194px] bottom-[21.5%] left-[-4%]"
      />
      <img
        src={dot}
        alt="dot"
        className="absolute w-[207px] -top-[9%] left-[47%]"
      />
      <img
        src={dot}
        alt="dot"
        className="absolute w-[207px] -bottom-10 -right-[2%]"
      />
      <img
        src={circle}
        alt="circle"
        className="absolute w-[300px] top-[25%] right-[15%]"
      />

      <div className=" grid grid-cols-1 md:grid-cols-2 mt-44 items-center text-left justify-between">
        <article className="text-xl mt-20 px-2 mb-40">
          <h1 className="text-5xl font-bold text-primary-0 text-left">
            Discover the Benefits of
          </h1>
          <h1 className="text-5xl font-bold text-base-150 text-left">
            Kreasi Nusantara
          </h1>
          <p className="mt-10 mb-5 font-light text-base-160 text-2xl text-left">
            "Explore, Experience, and Enjoy<br></br> Indonesia's Unique Creative
            Offerings<br></br> Today!"<br></br>
          </p>
          <button className="bg-base-150 hover:bg-primary-40 text-white font-normal py-1 px-4 rounded-xl mt-5">
            Download Now →
          </button>
        </article>

        {/* card people */}
        <div className="grid grid-cols-2 gap-4">
          <div className="card card-compact max-w-96 bg-base-150 shadow-xl rounded-xl rounded-tl-[60px]">
            <figure className="bg-primary-100 w-[15%] rounded-lg p-1">
              <img className="w-full" src={people} alt="people" />
            </figure>
            <div className="card-body !pl-0">
              <h2 className="card-title text-2xl text-white">
                Support Local Community
              </h2>
              <p className="text-white text-xl">
                Your purchases directly<br></br> contribute to the livelihoods
                <br></br> of local artisans and<br></br> creators.
              </p>
              <div className="card-actions justify-end"></div>
            </div>
          </div>

          {/* card rocket */}
          <div className="card card-compact max-w-96 bg-white shadow-xl rounded-xl rounded-tr-[60px]">
            <figure className="bg-base-150 w-[15%] rounded-lg p-1">
              <img className="w-full" src={rocket} alt="rocket" />
            </figure>
            <div className="card-body !pl-0">
              <h2 className="card-title text-2xl text-primary-0">
                Explore Local Artisty
              </h2>
              <p className="text-xl text-base-160">
                Dive into a world of<br></br> indigenous crafts, fashion,
                <br></br> and culture right at your<br></br> fingertips.
              </p>
            </div>
          </div>

          {/* card info */}
          <div className="card card-compact  max-w-96 bg-white shadow-xl rounded-xl rounded-bl-[60px]">
            <figure className="bg-base-150 w-[15%] rounded-lg p-1">
              <img className="w-full" src={info} alt="info" />
            </figure>
            <div className="card-body !pl-0">
              <h2 className="card-title text-2xl text-primary-0">
                Stay Informed
              </h2>
              <p className="text-xl text-base-160">
                Get updates on upcoming<br></br>cultural events and<br></br>
                exhibitions in your area.
              </p>
            </div>
          </div>

          {/* card puzzle */}
          <div className="card card-compact max-w-96 bg-white shadow-xl rounded-xl rounded-br-[60px]">
            <figure className="bg-base-150 w-[15%] rounded-lg p-1">
              <img className="w-full" src={puzzle} alt="puzzle" />
            </figure>
            <div className="card-body !pl-0">
              <h2 className="card-title text-2xl text-primary-0">
                Find Unique Products
              </h2>
              <p className="text-xl text-base-160">
                Shop for one-of-a-kind<br></br>items, from clothing to<br></br>
                handcrafted jewelry, that<br></br>reflect the richness of
                <br></br>Indonesian heritage.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
