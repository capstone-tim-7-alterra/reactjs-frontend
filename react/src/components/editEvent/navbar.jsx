import React from "react";

export default function navbar() {
  return (
    <header className="header-navbar shadow-custom-1 shadow-custom-2">
      <div className="flex-1">
        <a className="text-2xl  text-secondary-50 font-semibold w-[203px] h-[32px] cursor-pointer">
          Manage Event
        </a>
      </div>
      <div className="flex-none min-w-[192px] h-[40px] gap-10">
        <ul className="menu menu-horizontal">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            className="w-10 rounded-full"
          />
          <li className="text-secondary-40 ">
            <details>
              <summary>Admin Nanda</summary>
              <ul className="p-2  rounded w-full bg-primary-100">
                <li className="hover:text-gray-500">
                  <a>Link 1</a>
                </li>
                <li className="hover:text-gray-500">
                  <a>Link 2</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </header>
  );
}