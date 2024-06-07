/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-comment-textnodes */
// import awan from "../../assets/awan.png";
import orang1 from "../../assets/orang1.png";
// import orang2 from "../../assets/orang2.png";

export default function Testimoni() {
  return (
    <section>
      <div className="flex flex-col bg-base-150 lg:py-[83px]">
        <h1 className="text-[32px] text-center font-bold text-primary-100">What People Say</h1>
        <div className="flex mx-auto justify-center space-x-[68px]">
        <div className="lg:w-[447px]  mt-10 card w-96 bg-primary-100 shadow-xl lg:py-[53px] lg:px-7 space-y-[47.8px]">
            <div className="avatar">
              <div className="mx-auto w-24 rounded-full">
                <img src= {orang1} />
              </div>
            </div>
            <p className="card-body text-center text-[#383A47] p-0 text-base leading-7 font-">
                // eslint-disable-next-line react/no-unescaped-entities
                "Discovering this app was a revelation! It's like having a personal curator for the local art scene right at my fingertips. From uncovering exciting events to finding hidden gems, It's undoubtedly become my favorite go-to app!"              
            </p>
            <div>
              <h2 className="card-title justify-center font-bold  text-[#383A47]">
                  Olivia Esther
              </h2> 
              <h2 className="card-title justify-center font-bold text-tertiary-50 ">
                  Bintang Bintang
              </h2> 
            </div>
          </div>  
          <div className="lg:w-[447px]  mt-10 card w-96 bg-primary-100 shadow-xl lg:py-[53px] lg:px-7 space-y-[47.8px]">
            <div className="avatar">
              <div className="mx-auto w-24 rounded-full">
                <img src= {orang1} />
              </div>
            </div>
            <p className="card-body text-center text-[#383A47] p-0 text-base leading-7 font-">
                "Discovering this app was a revelation! It's like having a personal curator for the local art scene right at my fingertips. From uncovering exciting events to finding hidden gems, It's undoubtedly become my favorite go-to app!"              
            </p>
            <div>
              <h2 className="card-title justify-center font-bold  text-[#383A47]">
                  Olivia Esther
              </h2> 
              <h2 className="card-title justify-center font-bold text-tertiary-50 ">
                  Bintang Bintang
              </h2> 
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
