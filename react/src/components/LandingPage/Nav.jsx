import React from "react";
import Logo from "../../assets/logokn.png";
export default function Nav() {
  return (
    <nav className="mx-auto container bg-base-170 w-full flex justify-between items-center">
        <div className="navbar bg-base-170">
          <div className="navbar-start">
          <img className="w-16" src={Logo} alt="logo" />
          <div className="dropdown"></div>
          <p className="text-left text-lg ml-2 text-base-150 font-medium">
            Kreasi<br></br>Nusantara
          </p>
          </div>
          <div className="navbar-end">
            <ul className="menu menu-horizontal px-25 gap-5 flex items-center">
              <li>
                <a className="text-base-150 font-bold">Home</a>
              </li>
              <li className="text-primary-0">
                <a>Benefit</a>
              </li>
              <li className="text-primary-0">
                <a>Product</a>
              </li>
              <li className="text-primary-0">
                <a>Testimoni</a>
              </li>
              <li>
                <a className="btn bg-base-150 font-medium text-primary-100 rounded-xl hover:bg-primary-40 px-8 ">
                  Get The App
                </a>
              </li>
            </ul>
          </div>
        </div>
    </nav>
  );
}