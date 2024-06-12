import React, { useState, useRef, useEffect } from "react";
import Logo from "../../assets/iconSidebar/Logo.png";
import IconDashboard from "../../assets/iconSidebar/iconDashboard.png";
import IconDashboardActive from "../../assets/iconSidebar/iconDashboardActive.png";
import IconManageEvent from "../../assets/iconSidebar/iconManageEvent.png";
import IconManageEventActive from "../../assets/iconSidebar/iconManageEventActive.png";
import IconManageProduct from "../../assets/iconSidebar/iconManageProduct.png";
import IconManageProductActive from "../../assets/iconSidebar/iconManageProductActive.png";
import IconManageArticle from "../../assets/iconSidebar/iconManageArticle.png";
import IconManageArticleActive from "../../assets/iconSidebar/iconManageArticleActive.png";
import IconManageAdmin from "../../assets/iconSidebar/iconManageAdmin.png";
import IconManageAdminActive from "../../assets/iconSidebar/iconManageAdminActive.png";

export default function SidebarDashboard() {
  const [activeButton, setActiveButton] = useState(null);
  const buttonRef = useRef(null);

  const handleClick = (e) => {
    setActiveButton(e);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (buttonRef.current && !buttonRef.current.contains(event.target)) {
        setActiveButton(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [buttonRef]);
  return (
    <>
      {/* absolute jika ingin mengganti fixed */}
      <nav className="fixed w-[300px] h-[1034px] z-50 bg-primary-100 shadow-custom-1 shadow-custom-2 font-poppins">
        <div className="relative">
          <div className="absolute flex w-[203.59px] h-[86px] top-[22px] left-[53.5px] gap-[12px] mx-auto cursor-pointer">
            <img src={Logo} alt="Logo" className="w-[84.59px] h-[86px]" />
            <div className="flex items-center">
              <h1 className="w-[107px] h-[46px] text-[23px] leading-[23px] text-primary-45">
                Kreasi Nusantara
              </h1>
            </div>
          </div>
        </div>
        <div className="w-[300px] h-[413px] top-[152px] gap-[13px] mt-36">
          <ul>
            {/* Button 1 Dashboard */}
            <li
              ref={buttonRef}
              className={`w-[300px] h-[58px] pt-[17px] pr-[45px] pb-[17px] pl-[45px] ${
                activeButton === "dashboard"
                  ? "flex justify-center items-center bg-primary-30 mx-auto"
                  : "bg-primary-100"
              }`}
              onClick={() => handleClick("dashboard")}>
              <a
                href="#"
                className={`flex w-[167px] h-[24px]  gap-[10px] ${
                  activeButton === "dashboard"
                    ? " gap-[10px] text-white"
                    : " text-secondary-50"
                }`}>
                {activeButton !== "dashboard" ? (
                  <img
                    src={IconDashboard}
                    alt="Dashboard Icon"
                    className="w-6 h-6"
                  />
                ) : (
                  <img
                    src={IconDashboardActive}
                    alt="Active Icon"
                    className="w-6 h-6"
                  />
                )}
                <span>Dashboard</span>
              </a>
            </li>

            {/* Button 2 Manage Event*/}
            <li
              className={`w-[300px] h-[58px] pt-[17px] pr-[45px] pb-[17px] pl-[45px] ${
                activeButton === "ManageEvent"
                  ? "flex justify-center items-center bg-primary-30 mx-auto"
                  : "bg-primary-100"
              }`}
              onClick={() => handleClick("ManageEvent")}>
              <a
                href="#"
                className={`flex w-[167px] h-[24px]  gap-[10px] ${
                  activeButton === "ManageEvent"
                    ? " gap-[10px] text-white"
                    : " text-secondary-50"
                }`}>
                {activeButton !== "ManageEvent" ? (
                  <img
                    src={IconManageEvent}
                    alt="Button ManageEvent Icon"
                    className="w-6 h-6"
                  />
                ) : (
                  <img
                    src={IconManageEventActive}
                    alt="Active Icon"
                    className="w-6 h-6"
                  />
                )}
                <span>Manage Event</span>
              </a>
            </li>

            {/* Button 3 Manage Product*/}
            <li
              className={`w-[300px] h-[58px] pt-[17px] pr-[45px] pb-[17px] pl-[45px] ${
                activeButton === "ManageProduct"
                  ? "flex justify-center items-center bg-primary-30 mx-auto"
                  : "bg-primary-100"
              }`}
              onClick={() => handleClick("ManageProduct")}>
              <a
                href="#"
                className={`flex w-[167px] h-[24px]  gap-[10px] ${
                  activeButton === "ManageProduct"
                    ? " gap-[10px] text-white"
                    : " text-secondary-50"
                }`}>
                {activeButton !== "ManageProduct" ? (
                  <img
                    src={IconManageProduct}
                    alt="Button ManageProduct Icon"
                    className="w-6 h-6"
                  />
                ) : (
                  <img
                    src={IconManageProductActive}
                    alt="Active Icon"
                    className="w-6 h-6"
                  />
                )}
                <span>Manage Product</span>
              </a>
            </li>

            {/* Button 4 Manage Article*/}
            <li
              className={`w-[300px] h-[58px] pt-[17px] pr-[45px] pb-[17px] pl-[45px] ${
                activeButton === "ManageArticle"
                  ? "flex justify-center items-center bg-primary-30 mx-auto"
                  : "bg-primary-100"
              }`}
              onClick={() => handleClick("ManageArticle")}>
              <a
                href="#"
                className={`flex w-[167px] h-[24px]  gap-[10px] ${
                  activeButton === "ManageArticle"
                    ? " gap-[10px] text-white"
                    : " text-secondary-50"
                }`}>
                {activeButton !== "ManageArticle" ? (
                  <img
                    src={IconManageArticle}
                    alt="Button ManageArticle Icon"
                    className="w-6 h-6"
                  />
                ) : (
                  <img
                    src={IconManageArticleActive}
                    alt="Active Icon"
                    className="w-6 h-6"
                  />
                )}
                <span>Manage Article</span>
              </a>
            </li>

            {/* Button 5 Manage Admin*/}
            <li
              className={`w-[300px] h-[58px] pt-[17px] pr-[45px] pb-[17px] pl-[45px] ${
                activeButton === "ManageAdmin"
                  ? "flex justify-center items-center bg-primary-30 mx-auto"
                  : "bg-primary-100"
              }`}
              onClick={() => handleClick("ManageAdmin")}>
              <a
                href="#"
                className={`flex w-[167px] h-[24px]  gap-[10px] ${
                  activeButton === "ManageAdmin"
                    ? " gap-[10px] text-white"
                    : " text-secondary-50"
                }`}>
                {activeButton !== "ManageAdmin" ? (
                  <img
                    src={IconManageAdmin}
                    alt="Button ManageAdmin Icon"
                    className="w-6 h-6"
                  />
                ) : (
                  <img
                    src={IconManageAdminActive}
                    alt="Active Icon"
                    className="w-6 h-6"
                  />
                )}
                <span>Manage Admin</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}