import { useState } from "react";

export default function ProductInformation() {
  const [inputValue, setInputValue] = useState("");
  const [isInputError, setIsInputError] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const [isSelectError, setIsSelectError] = useState(false);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setIsInputError(value.length < 10 || value.length > 40);
  };

  const handleSelectChange = (e) => {
    const value = e.target.value;
    setSelectedValue(value);
    setIsSelectError(value === "");
  };

  const handleSelectError = () => {
    setIsSelectError(selectedValue === "");
  };

  return (
    <>
      <div className="product-information shadow-custom-1 shadow-custom-2">
        <h1 className="w-[328px] h-[48px] text-[32px] leading-[48px] font-semibold text-primary-0 mb-10">
          Product Information
        </h1>

        <div className="flex flex-row items-start justify-between  w-[1112px] h-[122px] gap-[149px]">
          <div className="flex flex-col gap-[18px] w-[360px] h-[122px] ">
            <div className="flex items-center justify-between w-[360px] h-[44px]">
              <label className="min-w-[176px] h-[36px] text-[24px] leading-9 font-semibold text-secondary-50">
                Product Name
              </label>
              <span className="span-editProduct">Required</span>
            </div>
            <div className="text-secondary-50 w-[360px] h-[60px]">
              <p className="text-[14px] font-normal leading-[20px] text-justify">
                Nama produk maximal 40 karakter dengan memasukkan merek, jenis
                produk, warna, bahan, atau tipe.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start">
            <input
              required
              type="text"
              placeholder="Batik Pring Sedapur"
              className={`input-editProduct ${
                isInputError ? "border-error-40" : "border-base-300 "
              } p-2 border rounded`}
              minLength="10"
              maxLength="40"
              value={inputValue}
              onChange={handleInputChange}
            />
            {isInputError && (
              <span className="text-error-40 mt-1">
                Input must be between 10 and 40 characters.
              </span>
            )}
          </div>
        </div>

        <div className="flex  md:flex-row items-start justify-between  w-[1112px] h-[142px] gap-[149px] mt-14">
          <div className="flex flex-col gap-[18px] w-[360px] h-[142px] ">
            <div className="flex items-center justify-between w-[360px] h-[44px]">
              <label className="max-w-[176px] h-[36px] text-[24px] leading-9 font-semibold text-secondary-50">
                Category
              </label>
              <span className="span-editProduct">Required</span>
            </div>
            <div className="text-secondary-50  w-[360px] min-h-[160px]">
              <p className="text-[14px] font-normal leading-[20px] text-justify">
                Pilih kategori yang sesuai karena biaya layanan akan tergantung
                pada kategori. Jika pemilihan kategori kurang sesuai, maka
                kategori akan diubah oleh Admin
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start">
            <select
              className={`dropdownInput-editProduct  ${
                isSelectError ? "border-error-40" : "border-base-300 "
              } p-2 border rounded`}
              value={selectedValue}
              onChange={handleSelectChange}
              onBlur={handleSelectError}>
              <option value="" disabled>
                Pick your an option
              </option>
              <option value="Batik">Batik</option>
              <option value="Han Solo">Han Solo</option>
              <option value="Greedo">Greedo</option>
            </select>
            {isSelectError && (
              <span className="text-error-40 mt-1">
                Please select an option.
              </span>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
