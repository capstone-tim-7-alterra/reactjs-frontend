import React from "react";

const CategoryUpload = () => {
  return (
    <div className="flex justify-center items-center h-screen font-poppins">
      <div className="bg-primary-100 shadow-md  w-[512px] h-[249px] top-[5070px] left-[12726px] rounded-2xl pt-[24px] pr-[24px] pb-[24px] pl-[24px]">
        <h2 className=" w-[424px] h-[27px] text-[18px] leading-7 font-semibold text-base-100 mb-4">
          Category
        </h2>
        <div>
          <label
            className=" label-category"
            htmlFor="category"
          >
            Add category
          </label>
          <div className="flex items-center opacity-90">
            <input
              type="text"
              placeholder="type here"
              className="input-category"
            />
          </div>
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

export default CategoryUpload;
