// Done
// import { useState } from "react";

import Navbar from "../Navbar/Navbar";
import EditProductInformation from "./EditProductInformation";
import EditDetailProduct from "./EditDetailProducts";
import EditPrice from "./EditPrice";

export default function EditProduct() {
  return (
    <>
      <section className="section-editProduct">
        <Navbar />
        <div className="w-[1440px] h-[2564px] top-[108px] left-[1px] p-6 gap-[80px]">
          <div className=" text-sm font-normal breadcrumbs text-neutral-40 gap-[1px]">
            <ul className="w-[1392px] h-[20px] mx-auto">
              <li>
                <a href="#" className="w-[79px] h-[20px]">
                  Dashboard
                </a>
              </li>
              <li className="-ml-4 text-center">
                <a href="#" className="w-[117px] h-[20px]">
                  Manage Product
                </a>
              </li>
              <li className="-ml-4 text-center">
                <li className="w-[77px] h-[20px]">Edit Product</li>
              </li>
            </ul>
          </div>
          <div className="w-[1156px] h-[2416px] gap-[50px] mx-auto mt-14 ">
            <h1 className="w-[328px] h-[48px] text-[32px] leading-[48px] font-semibold text-primary-0 mb-10">
              Edit Product
            </h1>
            <EditProductInformation />
            <EditDetailProduct />
            <EditPrice />
          </div>
        </div>
        <div className="flex w-[424px] h-[60px] top-[2705px] left-[875px] gap-[24px]  mx-auto">
          <button className="btn-editProduct-cancel">Cancel</button>
          <button className="btn-editProduct-save">Save</button>
        </div>
      </section>
    </>
  );
}
