import React, { useState } from "react";
import IconSearch from "../../assets/icons/IconSearch.png";
import TombolAtas from "../../assets/icons/TombolAtas.png";
import TombolBawah from "../../assets/icons/TombolBawah.png";
import Avatar from "../../assets/icons/navbar/avatar.svg";
import EditSquare from "../../assets/icons/article/Edit.svg";
import Trash from "../../assets/icons/article/Trash.svg"; 
import SidebarDashboard from "./sidebarDashboard"; //pakai dashboardutama
import HeaderDashboard from "./headerDashboard";
import { Link } from "react-router-dom";
export default function dashboard() {
  const [counter, setCounter] = useState(5);

  const handleIncrement = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const handleDecrement = () => {
    setCounter((prevCounter) =>
      prevCounter > 0 ? prevCounter - 1 : prevCounter
    );
  };
  return (
    <>
      {/* <SidebarDashboard />
      <HeaderDashboard /> */}
      <div className="w-[1440px] min-h-[1034px] h-[2000px] top-[552px] left-[157px] bg-primary-100 font-poppins">
        {/* <div className="absolute w-[1056px] h-[20px] top-[125px] left-[324px] gap-[t--space/1] bg-primary-100">
          <div className="text-sm font-normal breadcrumbs text-neutral-40 gap-[1px]">
            <ul className="w-[1056px] h-[20px] left-[324px] gap-[t--space/1]">
              <li>
                <a href="#" className="w-[79px] h-[20px]">
                  Dashboard
                </a>
              </li>
              <li className="">
                <p className="w-[110px] h-[20px] font-semibold ">
                  Manage Admin
                </p>
              </li>
            </ul>
          </div>
        </div> */}
        <div className="absolute w-[1140px] h-[800.79px] top-[171px] left-[300px] gap-[24px]  bg-primary-100 mt-14">
          <div className="flex flex-wrap w-[1056px] h-[121px] gap-[27px] mx-auto">
            <div className="flex w-[1092px] h-[46px] gap-[24px] bg-primary-100">
              <div className="w-[108px] h-[46px] rounded-lg bg-primary-30 pt-[14px] pr-[16px] pb-[14px] pl-[16px] gap-[space-x-2]">
                <Link to="add" className="w-[76px] h-[18px] text-secondary-91 font-semibold text-[12px] leading-[18px] text-center">
                  Add Product
                </Link>
              </div>
              <div className="flex flex-wrap w-[768px] h-[46px] rounded-lg border pt-[14px] pr-[16px] pb-[14px] pl-[16px] gap-[space-x-2] text-base-100 font-semibold text-xs ">
                <div className="w-[16px] h-[18px] opacity-70 flex items-center justify-center ">
                  <img
                    src={IconSearch}
                    alt="Search"
                    className="w-[13.01px] h-[13.01px]"
                  />
                </div>

                <input
                  type="text"
                  placeholder="Search"
                  className="input input-bordered border-none  w-[712px] h-[18px] opacity-40 bg-primary-100 rounded-none mx-auto"
                />
              </div>
            </div>
            <div className="w-[1037px] h-[502px] p-6 mx-auto shadow-custom-3 shadow-custom-4 mt-10">
              <div className="overflow-x-auto ">
                <table className="table">
                  {/* head */}
                  <thead className="mx-auto text-center text-neutral-15 border-none ">
                    <tr className="border-none w-[999px] h-[56px]  pt-[16px] pr-[0px] pb-[16px] pl-[0px] gap-[56px]">
                      <th></th>
                      <th>Username</th>
                      <th>Roles</th>
                      <th>Email</th>
                      <th>Create At</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody className="mx-auto text-center border-t-2  ">
                    {/* row 1 */}
                    <tr className="border-none w-[1003px] h-[64px] pt-[16px] pr-[0px] pb-[16px] pl-[0px] gap-[56px] text-neutral-15 ">
                      <td>
                        <img
                          src={Avatar}
                          alt="avatar"
                          className="w-[32px] h-[32px] "
                        />
                      </td>
                      <td>Inodhi Putra</td>
                      <td>SuperAdmin</td>
                      <td>Example@gmail.com</td>
                      <td>24//05/2024</td>
                      <td className="flex gap-5 ml-10">
                        <img
                          src={EditSquare}
                          alt="editsquare"
                          className="w-[24px] h-[24px]  "
                        />
                         <img
                          src={Trash}
                          alt="Trash"
                          className="w-[24px] h-[24px]"
                        />
                      </td>
                    </tr>
                    {/* row 2 */}
                    <tr className="border-none w-[1003px] h-[64px] pt-[16px] pr-[0px] pb-[16px] pl-[0px] gap-[56px]  text-neutral-15">
                    <td>
                        <img
                          src={Avatar}
                          alt="avatar"
                          className="w-[32px] h-[32px] "
                        />
                      </td>
                      <td>Bessotu Itok</td>
                      <td>SuperAdmin</td>
                      <td>Example@gmail.com</td>
                      <td>24//05/2024</td>
                      <td className="flex gap-5 ml-10">
                        <img
                          src={EditSquare}
                          alt="editsquare"
                          className="w-[24px] h-[24px]  "
                        />
                         <img
                          src={Trash}
                          alt="Trash"
                          className="w-[24px] h-[24px]"
                        />
                      </td>
                    </tr>
                    {/* row 3 */}
                    <tr className="border-none w-[1003px] h-[64px] pt-[16px] pr-[0px] pb-[16px] pl-[0px] gap-[56px]  text-neutral-15 ">
                    <td>
                        <img
                          src={Avatar}
                          alt="avatar"
                          className="w-[32px] h-[32px] "
                        />
                      </td>
                      <td>Mafazan</td>
                      <td>Admin</td>
                      <td>Example@gmail.com</td>
                      <td>24//05/2024</td>
                      <td className="flex gap-5 ml-10">
                        <img
                          src={EditSquare}
                          alt="editsquare"
                          className="w-[24px] h-[24px]  "
                        />
                         <img
                          src={Trash}
                          alt="Trash"
                          className="w-[24px] h-[24px]"
                        />
                      </td>
                    </tr>
                    <tr className="border-none w-[1003px] h-[64px] pt-[16px] pr-[0px] pb-[16px] pl-[0px] gap-[56px]  text-neutral-15 ">
                    <td>
                        <img
                          src={Avatar}
                          alt="avatar"
                          className="w-[32px] h-[32px] "
                        />
                      </td>
                      <td>Putra Senja</td>
                      <td>Admin</td>
                      <td>Example@gmail.com</td>
                      <td>24//05/2024</td>
                      <td className="flex gap-5 ml-10">
                        <img
                          src={EditSquare}
                          alt="editsquare"
                          className="w-[24px] h-[24px]  "
                        />
                         <img
                          src={Trash}
                          alt="Trash"
                          className="w-[24px] h-[24px]"
                        />
                      </td>
                    </tr>
                    <tr className="border-none w-[1003px] h-[64px] pt-[16px] pr-[0px] pb-[16px] pl-[0px] gap-[56px]   text-neutral-15">
                    <td>
                        <img
                          src={Avatar}
                          alt="avatar"
                          className="w-[32px] h-[32px] "
                        />
                      </td>
                      <td>Ananda</td>
                      <td>Admin</td>
                      <td>Example@gmail.com</td>
                      <td>24//05/2024</td>
                      <td className="flex gap-5 ml-10">
                        <img
                          src={EditSquare}
                          alt="editsquare"
                          className="w-[24px] h-[24px]  "
                        />
                         <img
                          src={Trash}
                          alt="Trash"
                          className="w-[24px] h-[24px]"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="flex w-[1092px] h-[48px] gap-[24px] justify-end items-center mt-10">
              <div className="flex w-[196px] h-[31px] gap-[10px] ">
                <p className="w-[42px] h-[24px] bg-primary-100 text-center flex items-center justify-center mt-1 tex-[16px] leading-6 font-normal text-primary-0 ">
                  Show
                </p>
                <div className="flex w-[79px] h-[31px] rounded-[10px] border-2 pt-[2px] pr-[10px] pb-[2px] pl-[10px] gap-[28px] border-primary-0 items-center ">
                  <p className="flex w-[11px] h-[24px] bg-primary-100 text-center items-center justify-center text-[16px] leading-6 font-normal text-primary-0">
                    {counter}
                  </p>
                  <div className="flex flex-col w-[9px] h-[17px] items-center justify-center gap-0.5">
                    <img
                      src={TombolAtas}
                      alt="Tombol Atas"
                      onClick={handleIncrement}
                    />
                    <img
                      src={TombolBawah}
                      alt="Tombol Bawah"
                      onClick={handleDecrement}
                    />
                  </div>
                </div>
                <div className="w-[55px] h-[24px]">
                  <p className="w-[42px] h-[24px] bg-primary-100 text-center flex items-center justify-center mt-1 text-[16px] leading-6 font-normal  text-primary-0">
                    entries
                  </p>
                </div>
              </div>

              <div className="join w-[159px] h-[48px]">
                <button className="join-item  w-[41px] h-[48px] pt-[14px] pr-[16px] pb-[14px] pl-[16px] gap-[space-x-2] bg-base-50 hover:bg-base-70 border-base-50 mx-auto text-primary-0 text-sm hover:text-primary-100">
                  «
                </button>
                <button className="join-item  w-[77px] h-[48px] pt-[14px] pr-[16px] pb-[14px] pl-[16px] gap-[space-x-2] bg-base-50 border-base-50 text-sm leading-5 font-semibold text-base-100 ">
                  Page 1
                </button>
                <button className="join-item  w-[41px] h-[48px] pt-[14px] pr-[16px] pb-[14px] pl-[16px] gap-[space-x-2] bg-base-50 hover:bg-base-70 border-base-50 mx-auto text-primary-0 text-sm hover:text-primary-100">
                  »
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}