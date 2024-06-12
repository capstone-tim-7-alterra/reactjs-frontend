import React from "react";
import awan from "../../assets/imgLandingpage/awan.png";
import orang1 from "../../assets/imgLandingpage/orang1.png";
import orang2 from "../../assets/imgLandingpage/orang2.png";

export default function Testimoni() {
  return (
    <section>
      <div className="container grid grid-cols-2 bg-base-150">
        <h1 className="text-3xl text-center">What People Say</h1>
        <div className="mx-auto mt-10 card w-96 bg-primary-100 shadow-xl">
          <div className="avatar">
            <div className="mx-auto w-24 rounded-full">
              <img src= {orang1} />
            </div>
          </div>
          <div className="card-body text-justify text-base-180">
            <p>"Wow, this app is a gem! It's like having a personal guide to the local art scene right in my pocket. From finding exciting events to discovering hidden gems, it's made exploring my city's culture so much fun. Definitely my favorite go-to app!"</p>
            <h2 className="card-title justify-center font-bold text text- text-base-180">Lucas John</h2>
          </div>
        </div>
      </div>
    </section>
  );
}
