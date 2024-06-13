/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import IconBukteProduct from "../assets/icons/iconBasketProduct.png";
import IconDollarProduct from "../assets/icons/iconDollarProduct.png";
import IconBusketTiket from "../assets/icons/iconBasketTiket.png";
import IconDollarTiket from "../assets/icons/iconDollarEvent.png";
import ImgArticel1 from "../assets/imgDashboard/imgArticel-1.png";
import ImgArticel2 from "../assets/imgDashboard/imgArticel-2.png";
import FotoProfile from "../assets/imgDashboard/fotoProfile-1.png";
import IconComment from "../assets/icons/iconComment.png";
import IconLove from "../assets/icons/iconLove.png";
import IconLoveArticle from "../assets/icons/iconLoveActive.png";

export default function dashboard() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <>
      <div className="relative">
        <div className="w-[1140px] h-[918px] top-[108px] left-[300px] gap-[24px] grid grid-cols-4 bg-primary-100">
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
            <div className="mx-auto">
              {/* Nanti https nya di taroh aja di file .env */}
              <iframe
                className="w-[1065px] h-[300px] gap-[27px]"
                src="https://lookerstudio.google.com/embed/reporting/69e7d653-7753-4180-8c43-45330d219825/page/6zXD"></iframe>
            </div>

            <div className="w-[1060px] h-[392px] gap-[16px]">
              <h2 className="w-[197px] h-[55px] font-[500] text-[32px] leading-6 text-center text-secondary-35">
                New Article
              </h2>
              <div className="flex w-[1060px] h-[321px] gap-[27px]">
                <div className="w-[519px] h-[321px] rounded-[20px]  ">
                  <img
                    src={ImgArticel1}
                    alt="New Article"
                    className="w-[519px] h-[101px] rounded-t-[20px]"
                  />
                  <div className="w-[469px] h-[182px] top-[117px] left-[25px] gap-[24px] mx-auto bg-primary-100 mt-5">
                    <div className="w-[469px] h-[118px] gap-[8px]">
                      <div className="w-[110px] h-[40px] p-[5px] gap-[5px]">
                        <button className="w-[100px] h-[30px] rounded-[20px] border-[2px] border-primary-75  text-center bg-primary-100 text-primary-36">
                          Tari
                        </button>
                      </div>
                      <div className="w-[469px] h-[70px] gap-[8px] mt-5">
                        <p className="w-[469px] h-[31px] text-[14px] leading-6 text-primary-0 font-semibold">
                          Mengenal Sejarah dan Asal Tari Kecak - Kreasi
                          Nusantara
                        </p>
                        <p className="w-[469px] h-[31px] text-[14px] leading-6 text-primary-0 ">
                          Budaya Indonesia sangatlah beragam jenisnya, bahkan
                          keanekaragamannya telah terkenal sampai ke berbagai
                          dunia...
                        </p>
                      </div>
                      <div className="flex w-[469px] h-[40px] gap-[169px] items-center mt-5">
                        <div className="flex  w-[138px] h-[40px] gap-[8px] items-center">
                          <img
                            src={FotoProfile}
                            alt="New Article"
                            className="w-[40px] h-[40px]"
                          />
                          <p className="w-[90px] h-[18px] text-center mx-auto">
                            Admin Nanda
                          </p>
                        </div>
                        <div className="flex w-[162px] h-[32px] gap-[16px] items-center mx-auto">
                          <div className="flex w-[73px] h-[32px]  items-center">
                            <div className="flex w-[32px] h-[32px] gap-3 items-center mx-auto">
                              <img
                                src={isClicked ? IconLoveArticle : IconLove}
                                alt="Love"
                                className="w-[26px] h-[26px] top-[3px] left-[3px] cursor-pointer"
                                onClick={handleClick}
                              />
                              <p className="w-[90px] h-[18px] text-center mx-auto">
                                1304
                              </p>
                            </div>
                          </div>
                          <div className="flex w-[73px] h-[32px]  items-center">
                            <div className="flex w-[32px] h-[32px] gap-3 items-center mx-auto">
                              <img
                                src={IconComment}
                                alt="New Article"
                                className="w-[26px] h-[26px] top-[3px] left-[3px] cursor-pointer"
                              />
                              <p className="w-[90px] h-[18px] text-center mx-auto">
                                673
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[519px] h-[321px] rounded-[20px]  ">
                  <img
                    src={ImgArticel2}
                    alt="New Article"
                    className="w-[519px] h-[101px] rounded-t-[20px]"
                  />
                  <div className="w-[469px] h-[182px] top-[117px] left-[25px] gap-[24px] mx-auto bg-primary-100 mt-5">
                    <div className="w-[469px] h-[118px] gap-[8px]">
                      <div className="w-[110px] h-[40px] p-[5px] gap-[5px]">
                        <button className="w-[100px] h-[30px] rounded-[20px] border-[2px] border-primary-75  text-center bg-primary-100 text-primary-36">
                          Wayang
                        </button>
                      </div>
                      <div className="w-[469px] h-[70px] gap-[8px] mt-5">
                        <p className="w-[469px] h-[31px] text-[14px] leading-6 text-primary-0 font-semibold">
                          Mengenal Sejarah dan Asal Tari Kecak - Kreasi
                          Nusantara
                        </p>
                        <p className="w-[469px] h-[31px] text-[14px] leading-6 text-primary-0 ">
                          Budaya Indonesia sangatlah beragam jenisnya, bahkan
                          keanekaragamannya telah terkenal sampai ke berbagai
                          dunia...
                        </p>
                      </div>
                      <div className="flex w-[469px] h-[40px] gap-[169px] items-center mt-5">
                        <div className="flex  w-[138px] h-[40px] gap-[8px] items-center">
                          <img
                            src={FotoProfile}
                            alt="New Article"
                            className="w-[40px] h-[40px]"
                          />
                          <p className="w-[90px] h-[18px] text-center mx-auto">
                            Admin Nanda
                          </p>
                        </div>
                        <div className="flex w-[162px] h-[32px] gap-[16px] items-center mx-auto">
                          <div className="flex w-[73px] h-[32px]  items-center">
                            <div className="flex w-[32px] h-[32px] gap-3 items-center mx-auto">
                              <img
                                src={IconLove}
                                alt="New Article"
                                className="w-[26px] h-[26px] top-[3px] left-[3px] cursor-pointer"
                              />
                              <p className="w-[90px] h-[18px] text-center mx-auto">
                                873
                              </p>
                            </div>
                          </div>
                          <div className="flex w-[73px] h-[32px]  items-center">
                            <div className="flex w-[32px] h-[32px] gap-3 items-center mx-auto">
                              <img
                                src={IconComment}
                                alt="New Article"
                                className="w-[26px] h-[26px] top-[3px] left-[3px] cursor-pointer"
                              />
                              <p className="w-[90px] h-[18px] text-center mx-auto">
                                187
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
