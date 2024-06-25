// src/components/DeleteModal.js
import React from "react";

const DeleteModal = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800 bg-opacity-50">
      <div className="bg-primary-100  shadow-lg p-6 max-w-lg h-[225px] top-[6622px] left-[1672px] rounded-2xl pt-[24px] pr-[24px] pb-[24px] pl-[24px]">
        <h2 className="text-xl font-semibold w-[464px] h-[27px] text-base-100">
          Delete
        </h2>
        <p className=" w-[464px] h-[80px]  pt-[16px] pr-[0px] pb-[16px] pl-[0px] text-[16px] leading-6 font-normal text-base-100">
          This will delete post permanently. You cannot undo this <br></br>
          action
        </p>
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

export default DeleteModal;
