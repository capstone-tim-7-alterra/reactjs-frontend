import React from "react";
import awan from "../../assets/awan.png";
import orang1 from "../../assets/orang1.png";
import orang2 from "../../assets/orang2.png";

export default function Testimoni() {
  return (
    <section>
      <div className="container bg-base-150">
        <h1 className="text-3xl text-center">What People Say</h1>
        <div className="mx-auto card w-96 bg-primary-100 shadow-xl">
          <div className="avatar">
            <div className="mx-auto w-24 rounded-full">
              <img src= {orang1} />
            </div>
          </div>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
