import React from "react";

const ModalAlamat = () => {
  return (
    <div className="App">
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-secondary-90 font-poppins ">
        <div className="bg-base-402 rounded-lg  w-[499px] h-[632px] top-[3196px] left-[4917px] gap-[40px] p-[24px]">
          <h2 className="text-xl font-bold mb-4 w-[140px] h-[20px]  text-neutralVariant-0 text-left">
            New Address
          </h2>
          <form className="w-[451px] h-[524px] gap-[38px]">
            <div className="mb-4 flex items-center w-[451px] h-[48px] justify-between mt-10">
              <label className="block text-base-140 w-[66px] h-[20px] font-semibold">
                Building
              </label>
              <input
                type="text"
                placeholder="Nama bangunan"
                className="input-building"
              />
            </div>
            <div className="mb-4 flex items-center w-[451px] h-[94px] justify-between mt-10">
              <label className="block text-base-140 w-[66px] h-[20px] font-semibold ">
                Address
              </label>
              <textarea
                placeholder="Masukan nama jalan, rt/rw"
                className="input-address"
              ></textarea>
            </div>
            <div className="mb-4 flex items-center mt-10 w-[451px] h-[48px] justify-between">
              <label className="w-[32px] h-[20px]  text-base-140 font-semibold ">
                City
              </label>
              <select className="input-modalalamat">
                <option disabled selected>
                  Kota/Kabupaten
                </option>
                <option>Kota</option>
                <option>Kabupaten</option>
              </select>
            </div>
            <div className="mb-4 flex items-center  w-[451px] h-[48px] justify-between mt-10">
              <label className=" w-[87px] h-[20px] text-base text-base-140 font-semibold ">
                Subdistrict
              </label>
              <select className="input-modalalamat">
                <option disabled selected>
                  Kecamatan/Kelurahan
                </option>
                <option>Kecamatan</option>
                <option>Kelurahan</option>
              </select>
            </div>
            <div className="mb-4 flex items-center mt-10 w-[451px] h-[48px]">
              <label className="w-[135px] h-[20px] text-base text-base-140 font-semibold">
                Postal Code
              </label>
              <input
                type="text"
                placeholder="Kode Pos"
                className="input-kodepos"
              />
            </div>
            <div className="flex justify-end mt-10 ">
              <button type="submit" className="input-submit">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalAlamat;
