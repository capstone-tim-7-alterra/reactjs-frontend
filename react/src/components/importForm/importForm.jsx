import React from "react";

const ImportCSV = () => {
  return (
    <div className="flex justify-center items-center h-screen font-poppins">
      <div className="bg-primary-100 shadow-custom-1 rounded-2xl p-8 w-[512px] h-[284px] top-[2407px] left-[1683px] pt-[24px] pr-[24px] pb-[24px] pl-[24px]">
        <h2 className="text-xl font-semibold text-base-100">Import CSV</h2>
        <p className="text-base-404  w-[464px] h-[56px] pt-[16px] pr-[0px] pb-[16px] pl-[0px] text-base font-normal">
          Select a file and click upload
        </p>
        <div>
          <div className="div-nameimport">
            <span className="w-[40px] h-[20px] text-sm font-bold leading-5 text-base-100">
              Name
            </span>
            <input
              type="text"
              placeholder=".csv"
              className="input-csv"
            />
          </div>
          <button
            className=" bg-base-405 text-base-406  font-semibold -p-10 gap-[10px] rounded-sm  focus:outline-none focus:shadow-outline text-xs w-[76px] h-[23px]"
            type="button"
          >
            Browse...
          </button>
        </div>
        <div className="flex justify-end min-w-[464px] h-[70px] pt-[24px] pr-[0px] pb-[24px] pl-[0px] gap-[8px]">
          <button className="button-cancel">
            Cancel
          </button>
          <button className="button-upload">
            Upload
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImportCSV;
