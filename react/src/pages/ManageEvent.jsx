/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Batik from "../assets/imgProduct/batik-1.png";
import EditSquare from "../assets/icons/article/Edit.svg";
import Trash from "..//assets/icons/article/Trash.svg";
import IconBukteProduct from "../assets/icons/iconBasketProduct.png";
import IconDollarProduct from "../assets/icons/iconDollarProduct.png";
import IconBusketTiket from "../assets/icons/iconBasketTiket.png";
import IconDollarTiket from "../assets/icons/iconDollarEvent.png";
import IconSearch from "../assets/icons/IconSearch.png";
import TombolAtas from "../assets/icons/TombolAtas.png";
import TombolBawah from "../assets/icons/TombolBawah.png";
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
      <div className="w-[1140px] h-[800.79px] top-[171px] left-[300px] gap-[24px] grid grid-cols-4 bg-primary-100">
        <div className="flex flex-wrap w-[1056px] h-[121px] gap-[27px] mx-auto">
          <div className="w-[243.75px h-[121px] rounded-[10px] p-[30px] bg-primary-100 shadow-custom-3 shadow-custom-4">
            <div className="flex flex-wrap w-[161px] h-[61px] gap-[20px]">
              <div className=" relative w-[50px] h-[50px] top-[5.5px] rounded-xl bg-base-401">
                <img
                  src={IconBukteProduct}
                  alt="Tailwind CSS Navbar component"
                  className="relative w-[24px] h-[24px] top-[15px]  left-[13.5px] rounded-full "
                />
              </div>
              <div className="w-[91px] h-[61px] ">
                <p className="w-[91px] h-[21px]  text-[14px] leading-[21px] font-bold text-secondary-65">
                  Product Sold
                </p>
                <p className="w-[19px] h-[30px] text-[20px] leading-[30px] font-bold text-neutral-35">
                  12
                </p>
              </div>
            </div>
          </div>
          <div className="w-[243.75px h-[121px] rounded-[10px] p-[30px] bg-primary-100 shadow-custom-3 shadow-custom-4">
            <div className="flex flex-wrap  w-[191px] h-[61px] gap-[20px]">
              <div className=" relative w-[50px] h-[50px] top-[5.5px] rounded-xl bg-base-401">
                <img
                  src={IconDollarProduct}
                  alt="Tailwind CSS Navbar component"
                  className="relative w-[24px] h-[24px] top-[15px]  left-[13.5px] rounded-full "
                />
              </div>
              <div className="w-[91px] h-[61px] ">
                <p className="w-[99px] h-[21px]  text-[14px] leading-[21px] font-bold text-secondary-65">
                  Product Profit
                </p>
                <p className="w-[121px] h-[30px] text-[20px] leading-[30px] font-bold text-neutral-35">
                  IDR 589.000
                </p>
              </div>
            </div>
          </div>
          <div className="w-[243.75px h-[121px] rounded-[10px] p-[30px] bg-primary-100 shadow-custom-3 shadow-custom-4">
            <div className="flex flex-wrap  min-w-[149px] h-[61px] gap-[20px]">
              <div className=" relative w-[50px] h-[50px] top-[5.5px] rounded-xl bg-base-401">
                <img
                  src={IconBusketTiket}
                  alt="Tailwind CSS Navbar component"
                  className="relative w-[24px] h-[24px] top-[15px]  left-[13.5px] rounded-full "
                />
              </div>
              <div className="w-[91px] h-[61px] ">
                <p className="w-[78px] h-[21px] text-[14px] leading-[21px] font-bold text-secondary-65">
                  Ticket Sold
                </p>
                <p className="w-[37px] h-[30px] text-[20px] leading-[30px] font-bold text-neutral-35">
                  320
                </p>
              </div>
            </div>
          </div>
          <div className="w-[243.75px h-[121px] rounded-[10px] p-[30px] bg-primary-100 shadow-custom-3 shadow-custom-4">
            <div className="flex flex-wrap w-[199px] h-[61px] gap-[20px]">
              <div className=" relative w-[50px] h-[50px] top-[5.5px] rounded-xl bg-base-401">
                <img
                  src={IconDollarTiket}
                  alt="Tailwind CSS Navbar component"
                  className="relative w-[24px] h-[24px] top-[15px]  left-[13.5px] rounded-full "
                />
              </div>
              <div className="w-[91px] h-[61px] ">
                <p className="w-[129px] h-[21px] text-[14px] leading-[21px] font-bold text-secondary-65">
                  Event Ticket Profit
                </p>
                <p className="min-w-[150px] h-[30px] text-[20px] leading-[30px] font-bold text-neutral-35">
                  IDR 712.000
                </p>
              </div>
            </div>
          </div>
          <div className="flex w-[1092px] h-[46px] gap-[24px] bg-primary-100">
            <div className="w-[108px] h-[46px] rounded-lg bg-primary-30 pt-[14px] pr-[16px] pb-[14px] pl-[16px] gap-[space-x-2]">
              <Link
                to="add"
                className="w-[76px] h-[18px] text-secondary-91 font-semibold text-[12px] leading-[18px] text-center">
                Add Event
              </Link>
            </div>
            <div className="flex flex-wrap w-[768px] h-[46px] rounded-lg border pt-[14px] pr-[16px] pb-[14px] pl-[16px] gap-[space-x-2]mx-auto">
              <div className="w-[16px] h-[18px] opacity-70 flex items-center justify-center">
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
          <div className="w-[1051px] h-[472px] p-6 mx-auto shadow-custom-3 shadow-custom-4 mt-10">
            <div className="overflow-x-auto ">
              <table className="table">
                {/* head */}
                <thead className="mx-auto text-center  text-neutral-15 border-none ">
                  <tr className="border-none w-[999px] h-[56px]  pt-[16px] pr-[0px] pb-[16px] pl-[0px] gap-[56px]">
                    <th>Event</th>
                    <th>Address</th>
                    <th>Status</th>
                    <th>Jenis Ticket</th>
                    <th>Tanggal</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody className="mx-auto text-center  border-t-2  ">
                  {/* row 1 */}
                  <tr className="border-none w-[1003px] h-[64px] pt-[16px] pr-[0px] pb-[16px] pl-[0px] gap-[56px] text-neutral-15  ">
                    <td className="flex gap-4">
                      <img
                        src={Batik}
                        alt="Batik"
                        className="w-[32px] h-[32px] "
                      />
                      Festival Sekala Bekhak
                    </td>
                    <td>Jakarta Timur</td>
                    <td>Active</td>
                    <td>20-12-2024</td>
                    <td>Regular/VIP</td>
                    <td className="flex justify-center gap-5 mx-auto">
                      <Link to="./edit">
                        <img
                          src={EditSquare}
                          alt="editsquare"
                          className="w-[24px] h-[24px]"
                        />
                      </Link>
                      <Link>
                        <img
                          src={Trash}
                          alt="Trash"
                          className="w-[24px] h-[24px]"
                        />
                      </Link>
                    </td>
                  </tr>
                  {/* row 2 */}
                  <tr className="border-none w-[1003px] h-[64px] pt-[16px] pr-[0px] pb-[16px] pl-[0px] gap-[56px]  text-neutral-15">
                    <td className="flex gap-4">
                      <img
                        src={Batik}
                        alt="Batik"
                        className="w-[32px] h-[32px] "
                      />
                      Festival Sekala Bekhak
                    </td>
                    <td>Jakarta Timur</td>
                    <td>Active</td>
                    <td>20-12-2024</td>
                    <td>Regular/VIP</td>
                    <td className="flex justify-center gap-5 mx-auto ">
                      <img
                        src={EditSquare}
                        alt="editsquare"
                        className="w-[24px] h-[24px]   "
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
                    <td className="flex gap-4">
                      <img
                        src={Batik}
                        alt="Batik"
                        className="w-[32px] h-[32px] "
                      />
                      Festival Sekala Bekhak
                    </td>
                    <td>Jakarta Timur</td>
                    <td>Active</td>
                    <td>20-12-2024</td>
                    <td>Regular/VIP</td>
                    <td className="flex justify-center gap-5 mx-auto">
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
                    <td className="flex gap-4">
                      <img
                        src={Batik}
                        alt="Batik"
                        className="w-[32px] h-[32px] "
                      />
                      Festival Sekala Bekhak
                    </td>
                    <td>Jakarta Timur</td>
                    <td>Active</td>
                    <td>20-12-2024</td>
                    <td>Regular/VIP</td>
                    <td className="flex justify-center gap-5 mx-auto">
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
                    <td className="flex gap-4">
                      <img
                        src={Batik}
                        alt="Batik"
                        className="w-[32px] h-[32px] "
                      />
                      Festival Sekala Bekhak
                    </td>
                    <td>Jakarta Timur</td>
                    <td>Active</td>
                    <td>20-12-2024</td>
                    <td>Regular/VIP</td>
                    <td className="flex justify-center gap-5 mx-auto">
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
          <div className="flex w-[1092px] h-[48px] gap-[24px] justify-end items-center">
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
              <button className="join-item  w-[41px] h-[48px] pt-[14px] pr-[16px] pb-[14px] pl-[16px] gap-[space-x-2] bg-base-50 hover:bg-base-25 border-base-50 mx-auto text-primary-0 text-sm hover:text-primary-100">
                «
              </button>
              <button className="join-item  w-[77px] h-[48px] pt-[14px] pr-[16px] pb-[14px] pl-[16px] gap-[space-x-2] bg-base-50 border-base-50 text-sm leading-5 font-semibold text-base-100 ">
                Page 1
              </button>
              <button className="join-item  w-[41px] h-[48px] pt-[14px] pr-[16px] pb-[14px] pl-[16px] gap-[space-x-2] bg-base-50 hover:bg-base-25 border-base-50 mx-auto text-primary-0 text-sm hover:text-primary-100">
                »
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
