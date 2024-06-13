import { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/icons/Logo.png";
import IconDashboard from "../../assets/icons/sidebar/Category.svg";
import IconDashboardActive from "../../assets/icons/sidebar/CategoryActive.svg";
import IconManageEvent from "../../assets/icons/sidebar/Event.svg";
import IconManageEventActive from "../../assets/icons/sidebar/TicketActive.svg";
import IconManageProduct from "../../assets/icons/sidebar/Cube.svg";
import IconManageProductActive from "../../assets/icons/sidebar/CubeActive.svg";
import IconManageArticle from "../../assets/icons/sidebar/Globe.svg";
import IconManageArticleActive from "../../assets/icons/sidebar/GlobeActive.svg";
import IconManageAdmin from "../../assets/icons/sidebar/GearSix.svg";
import IconManageAdminActive from "../../assets/icons/sidebar/GearSixActive.svg";

export default function SidebarDashboard() {
  const [activeButton, setActiveButton] = useState(null);
  const buttonRef = useRef(null);

  const handleClick = (e) => {
    setActiveButton(e);
  };

  return (
    <>
      <nav className="fixed w-[300px] h-[1034px] z-50 bg-primary-100 shadow-custom-1 shadow-custom-2 font-poppins">
        <div className="relative">
          <NavLink
            className="absolute flex w-[203.59px] h-[86px] top-[22px] left-[53.5px] gap-[12px] mx-auto cursor-pointer"
            to="/dashboard">
            <img src={Logo} alt="Logo" className="w-[84.59px] h-[86px]" />
            <div className="flex items-center">
              <h1 className="w-[107px] h-[46px] text-[23px] leading-[23px] text-primary-45">
                Kreasi Nusantara
              </h1>
            </div>
          </NavLink>
        </div>
        <div className="w-[300px] h-[413px] top-[152px] gap-[13px] mt-40">
          <ul>
            {/* Button 1 Dashboard */}
            <li
              ref={buttonRef}
              className={`w-[300px] h-[58px] pt-[17px] pr-[45px] pb-[17px] pl-[45px]  ${
                activeButton === "dashboard"
                  ? "flex justify-center items-center bg-primary-30 mx-auto"
                  : "bg-primary-100"
              }`}
              onClick={() => handleClick("dashboard")}>
              <NavLink
                to="/dashboard"
                className={`flex w-[167px] h-[24px] gap-[10px] items-center ${
                  activeButton === "dashboard"
                    ? "gap-[10px] text-white"
                    : "text-secondary-50"
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
              </NavLink>
            </li>

            {/* Button 2 Manage Event */}
            <li
              className={`w-[300px] h-[58px] pt-[17px] pr-[45px] pb-[17px] pl-[45px] ${
                activeButton === "ManageEvent"
                  ? "flex justify-center items-center bg-primary-30 mx-auto"
                  : "bg-primary-100"
              }`}
              onClick={() => handleClick("ManageEvent")}>
              <NavLink
                to="/dashboard/manage-event"
                className={`flex w-[167px] h-[24px] gap-[10px] items-center ${
                  activeButton === "ManageEvent"
                    ? "gap-[10px] text-white"
                    : "text-secondary-50"
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
              </NavLink>
            </li>

            {/* Button 3 Manage Product */}
            <li
              className={`w-[300px] h-[58px] pt-[17px] pr-[45px] pb-[17px] pl-[45px] ${
                activeButton === "ManageProduct"
                  ? "flex justify-center items-center bg-primary-30 mx-auto"
                  : "bg-primary-100"
              }`}
              onClick={() => handleClick("ManageProduct")}>
              <NavLink
                to="/dashboard/manage-product"
                className={`flex w-[167px] h-[24px] gap-[10px] items-center ${
                  activeButton === "ManageProduct"
                    ? "gap-[10px] text-white"
                    : "text-secondary-50"
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
              </NavLink>
            </li>

            {/* Button 4 Manage Article */}
            <li
              className={`w-[300px] h-[58px] pt-[17px] pr-[45px] pb-[17px] pl-[45px] ${
                activeButton === "ManageArticle"
                  ? "flex justify-center items-center bg-primary-30 mx-auto"
                  : "bg-primary-100"
              }`}
              onClick={() => handleClick("ManageArticle")}>
              <NavLink
                to="/dashboard/manage-article"
                className={`flex w-[167px] h-[24px] gap-[10px] items-center ${
                  activeButton === "ManageArticle"
                    ? "gap-[10px] text-white"
                    : "text-secondary-50"
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
              </NavLink>
            </li>

            {/* Button 5 Manage Admin */}
            <li
              className={`w-[300px] h-[58px] pt-[17px] pr-[45px] pb-[17px] pl-[45px] ${
                activeButton === "ManageAdmin"
                  ? "flex justify-center items-center bg-primary-30 mx-auto"
                  : "bg-primary-100"
              }`}
              onClick={() => handleClick("ManageAdmin")}>
              <NavLink
                to="/dashboard/manage-admin"
                className={`flex w-[167px] h-[24px] gap-[10px] items-center ${
                  activeButton === "ManageAdmin"
                    ? "gap-[10px] text-white"
                    : "text-secondary-50"
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
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
