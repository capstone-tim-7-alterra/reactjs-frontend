import React from "react";
import Logo from "../../assets/logokn.png";
const Nav = () => {
  return (
    <section>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <img className="w-10" src={Logo} alt="logo" />
          <div className="dropdown"></div>
          <p className="text-medium ml-3">Kreasi Nusantara</p>
        </div>
        <div className="navbar bg-base-100">
          <div className="navbar-start"></div>
          <div className="navbar-center flex">
            <ul className="menu menu-horizontal px-25 gap-5">
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Benefit</a>
              </li>
              <li>
                <a>Product</a>
              </li>
              <li>
                <a>Testimoni</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-end">
          <a className="btn text-white bg-red-700 hover:bg-red-500">
            Get The App
          </a>
        </div>
      </div>
    </section>
  );
};

export default Nav;
