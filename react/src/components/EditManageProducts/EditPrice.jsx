import { useState } from "react";

export default function EditPrice() {
  const [inputValue, setInputValue] = useState("");
  const [isInputError, setIsInputError] = useState("");
  const [priceValue, setPriceValue] = useState("");
  const [isPriceError, setIsPriceError] = useState("");
  const [price, setPrice] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (value === "0" || value.includes("-")) {
      setIsInputError(true);
    } else {
      setInputValue(value);
      setIsInputError(false);
    }
  };

  const handlePriceChange = (e) => {
    const price = e.target.value;
    if (isNaN(price)) {
      setIsPriceError(true);
    } else {
      setPriceValue(price);
      setIsPriceError(false);
    }
  };

  const validatePrice = (value) => {
    const number = parseFloat(value);
    if (isNaN(number) || number < 1 || number > 10) {
      setError("Please enter price with number 1 - 10");
    } else {
      setError("");
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setPrice(value);
    validatePrice(value);
  };

  return (
    <>
      <div className="product-Price shadow-custom-1 shadow-custom-2">
        <div className="flex flex-col md:flex-row items-start md:items-center mb-4">
          <h1 className="min-w-[81px] h-[48px] text-[32px] leading-[48px] font-semibold text-primary-0">
            Price
          </h1>
        </div>

        <div className="flex flex-row items-start justify-between w-full max-w-[1112px] h-[87px] gap-[149px]">
          <div className="flex flex-col gap-[18px] w-[360px] h-[87px]">
            <div className="flex items-center justify-between w-[360px] h-[44px]">
              <label className="min-w-[176px] h-[36px] text-[24px] leading-9 font-semibold text-secondary-50">
                Minimum Order
              </label>
            </div>
            <div className="text-secondary-50 w-[360px] h-[40px]">
              <p className="text-[14px] font-normal leading-[20px] text-justify">
                Alur jumlah minimum yang harus dibeli untuk produk ini
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start">
            <input
              required
              type="number"
              placeholder="1"
              className={`input-editProduct ${
                isInputError ? "border-error-40" : "border-base-300 "
              } p-2 border rounded`}
              value={inputValue}
              onChange={handleInputChange}
            />
            {isInputError && (
              <span className="text-error-40 mt-1">
                Please enter Minimum Order with number
              </span>
            )}
          </div>
        </div>

        <div className="flex flex-row items-start justify-between w-full max-w-[1113px] h-[46px] gap-[149px] mt-20">
          <div className="flex flex-col gap-[18px] w-[360px] h-[122px]">
            <div className="flex items-center justify-between w-[360px] h-[44px]">
              <label className="min-w-[176px] h-[36px] text-[24px] leading-9 font-semibold text-secondary-50">
                Unit Price
              </label>
              <span className="span-editProduct">Required</span>
            </div>
            <div className="text-secondary-50 w-[360px] h-[60px]">
              <p className="text-[14px] font-normal leading-[20px] text-justify">
                Masukan harga barang sesuai ketentuan anda
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start">
            <div
              className={`flex items-center justify-between w-[603px] h-[46px] border rounded-md ${
                isPriceError ? "border-error-40" : "border-base-300"
              }`}>
              <p className="text-center mx-auto w-[15px] h-[18px] text-12px leading-[18px] text-base-100 font-semibold">
                Rp
              </p>
              <input
                type="text"
                placeholder="Type here"
                className="input border-none w-[547px] h-[18px] text-sm text-base-100 bg-primary-100 rounded-none mx-auto"
                value={priceValue}
                onChange={handlePriceChange}
              />
            </div>
            {isPriceError && (
              <span className="text-error-40">
                Please enter price with number
              </span>
            )}
          </div>
        </div>
        <div className="flex flex-row items-start justify-between w-full max-w-[1113px] h-[46px] gap-[149px] mt-40">
          <div className="flex flex-col gap-[16px] w-[360px] h-[122px]">
            <div className="items-center justify-between w-[360px] h-[29px] gap-[26px]">
              <label className="w-[104px] h-[29px] text-[24px] leading-9 font-semibold text-secondary-50 ">
                Discount
              </label>
            </div>
            <div className="text-secondary-50 w-[360px] h-[60px]">
              <p className="text-[14px] font-normal leading-[20px] text-justify">
                Masukan discount jika memang ada, dan masukan angka 1 - 100
                persen saja
              </p>
            </div>
          </div>
          <div className="flex-col items-center justify-center w-full max-w-[603px] h-[46px] mx-auto">
            <div
              className={`flex items-center justify-between w-full h-[46px] border rounded-md p-2 ${
                error ? "border-error-40" : "border-base-300"
              }`}>
              <p className="text-center mx-auto">%</p>
              <input
                type="number"
                placeholder="Type here"
                className="input border-none w-[547px] h-[18px] text-sm text-base-100 bg-primary-100 rounded-none mx-auto"
                value={price}
                onChange={handleChange}
              />
            </div>
            {error && <p className="text-error-40 text-xs mt-2">{error}</p>}
          </div>
        </div>
      </div>
    </>
  );
}
