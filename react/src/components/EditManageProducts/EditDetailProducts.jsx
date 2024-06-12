import { useState } from "react";
import batik1 from "../../assets/imgProduct/batik-1.png";
import batik2 from "../../assets/imgProduct/batik-2.png";
import batik3 from "../../assets/imgProduct/batik-3.png";
import batik4 from "../../assets/imgProduct/batik-4.png";
import batik5 from "../../assets/imgProduct/batik-5.png";
import video from "../../assets/imgProduct/video.png";
import iconimg from "../../assets/imgProduct/iconimg.png";

export default function DetailProduct() {
  const [errorMessageTextarea, setErrorMessageTextarea] = useState("");
  const [textareaValue, setTextareaValue] = useState("");

  // to validasi textearea
  const handleChange = (event) => {
    setTextareaValue(event.target.value);
    if (event.target.value.trim() === "") {
      setErrorMessageTextarea("Textarea is required");
    } else {
      setErrorMessageTextarea("");
    }
  };

  const handleClick = () => {
    document.getElementById("inputGambar").click();
  };

  return (
    <>
      <div className="div-detailProduct  shadow-custom-1 shadow-custom-2">
        <h1 className="max-w-[328px] h-[48px] text-[32px] leading-[48px] font-semibold text-primary-0 mb-14">
          Detail Product
        </h1>
        <div className="flex md:flex-row items-start justify-between mb-6 w-[1112px]  h-[229px] gap-[149px] ">
          <div className="flex flex-col gap-[18px] w-[360px] h-[222px] ">
            <div className="flex items-center justify-between w-[360px] h-[44px]">
              <label className="min-w-[176px] h-[36px] text-[24px] leading-9 font-semibold text-secondary-50">
                Photo Product
              </label>
              <span className="span-editProduct">Required</span>
            </div>
            <div className="text-secondary-50  w-[360px] min-h-[160px]">
              <p className="text-[14px] font-normal leading-[20px] text-justify">
                Format foto harus .jpg, jpeg,png dan ukuran minimal 300 x 300
                px.
              </p>
            </div>
          </div>
          <div className="min-w-[603px] h-[238px] md:w-2/5 flex flex-wrap gap-[24px] items-start md:items-center justify-start">
            <div className="border flex items-center justify-center self-start">
              <img
                src={batik1}
                alt="Foto 6"
                className="w-[108px] h-[107px] mx-auto"
              />
            </div>
            <div className="border flex items-center justify-center self-start">
              <img
                src={batik2}
                alt="Foto 6"
                className="w-[108px] h-[107px] mx-auto"
              />
            </div>
            <div className="border flex items-center justify-center self-start">
              <img
                src={batik3}
                alt="Foto 6"
                className="w-[108px] h-[107px] mx-auto"
              />
            </div>
            <div className="border flex items-center justify-center self-start">
              <img
                src={batik4}
                alt="Foto 6"
                className="w-[108px] h-[107px] mx-auto"
              />
            </div>
            <div className="border flex items-center justify-center self-start ">
              <img
                src={batik5}
                alt="Foto 6"
                className="w-[108px] h-[107px] mx-auto"
              />
            </div>
            <div
              className="w-[108px] h-[107px] border border-dotted border-primary-0  flex items-center justify-center self-start cursor-pointer "
              onClick={handleClick}>
              <div className="text-center">
                <img
                  src={iconimg}
                  alt="Foto 6"
                  className="w-[24px] h-[24px] mx-auto"
                />
                <span className="block w-[74px] h-[15px] mx-auto text-[12px] leading-[14.52px] text-primary-0">
                  Tambah Foto
                </span>
              </div>
              <input type="file" id="inputGambar" className="hidden" />
            </div>
          </div>
        </div>

        <div className="flex  md:flex-row items-start justify-between w-[1112px]  h-[107px] gap-[149px] mt-14">
          <div className="flex flex-col gap-[18px] w-[360px] h-[94px] ">
            <div className="flex items-center justify-between w-[360px] h-[36px] gap-[15px]">
              <label className="min-w-[172px] h-[36px] text-[24px] leading-9 font-semibold text-secondary-50">
                Video Product
              </label>
            </div>
            <div className="text-secondary-50  w-[360px] min-h-[160px]">
              <p className="text-[14px] font-normal leading-[20px] text-justify">
                Format video .mp4 dan mov. Disarankan dirasi maksimal 120 detik
                dan ukuran maks 100MB.
              </p>
            </div>
          </div>
          <div className="w-[700px]  h-[107px] flex flex-wrap gap-[24px]  items-start first-line:justify-start">
            <div className="flex items-center justify-center gap-[24px]">
              <img
                src={video}
                alt="Foto 6"
                className="w-[108px] h-[107px] mx-auto"
              />
              <div
                className="w-[108px] h-[107px] border border-dotted  border-primary-0 flex items-center justify-center cursor-pointer "
                onClick={handleClick}>
                <div className="text-center ">
                  <img
                    src={iconimg}
                    alt="Foto 6"
                    className="w-[24px] h-[24px] mx-auto"
                  />
                  <span className="w-[74px] h-[15px] mx-auto text-[12px] leading-[14.52px] text-primary-0">
                    Upload Video
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row items-start justify-between  w-[1112px] h-[122px] gap-[149px] mt-20 mb-60">
          <div className="flex flex-col gap-[18px] w-[360px] h-[122px] ">
            <div className="flex items-center justify-between w-[360px] h-[44px]">
              <label className="min-w-[176px] h-[36px] text-[24px] leading-9 font-semibold text-secondary-50">
                Description
              </label>
              <span className="span-editProduct">Required</span>
            </div>
            <div className="text-secondary-50 w-[360px] h-[60px]">
              <p className="text-[14px] font-normal leading-[20px] text-justify">
                Pastikan deskripsi produk memuat penjelasan detail terkait
                produkmu agar pembeli mudah mengerti dan menemukan produkmu.
              </p>
            </div>
          </div>
          <div className="flex-col items-center">
            <textarea
              type="text"
              placeholder={`✔ Batik full tulis murah
✔ motif pring sedapur
✔ Material katun primissima
✔ Size 225 cm x 100 cm
----------------------------------------
✔ warna gambar mungkin agak sedikit berbeda dengan warna 
aslinya karena faktor kamera atau pencahayaan
✔ Original batik tulis tangan, garansi uang kembali jika produk adalah batik semi tulis, sablon lilin, tulis kombinasi, atau batik cetak`}
              className={`textarea-editProduct border ${
                errorMessageTextarea ? "border-error-40" : "border-base-300 "
              } p-2 rounded-md block w-full`}
              value={textareaValue}
              onChange={handleChange}
            />
            {errorMessageTextarea && (
              <div className="text-error-40 mt-2">{errorMessageTextarea}</div>
            )}
          </div>
        </div>

        <div className="flex md:flex-row items-start justify-start w-[1112px] h-[229px] gap-[149px] -mt-30">
          <div className="flex flex-col gap-[18px] min-w-[360px] h-[94px]">
            <div className="flex items-center justify-between w-[360px] h-[44px]">
              <label className="min-w-[176px] h-[36px] text-[24px] leading-9 font-semibold text-secondary-50">
                Size & Stock
              </label>
            </div>
            <div className="text-secondary-50 w-[360px] min-h-[160px]">
              <p className="text-[14px] font-normal leading-[20px] text-justify">
                Pastikan memasukan jumlah dari ukuran baju yang tersedia
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-[6px] w-[603px] h-[318px]">
            <div className="flex items-center justify-center w-full max-w-[603px] h-[46px] mx-auto">
              <div className="flex items-center justify-between w-full h-[46px] border border-base-300 rounded-md p-2">
                <p className="text-center mx-auto text-[8px] leading-5 text-base-100 font-semibold">
                  S
                </p>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input border-none w-[547px] h-[18px] text-sm text-base-100 bg-primary-100 rounded-none mx-auto"
                />
              </div>
            </div>
            <div className="flex items-center justify-center w-full max-w-[603px] h-[46px] mx-auto">
              <div className="flex items-center justify-between w-full h-[46px] border border-base-300 rounded-md p-2">
                <p className="text-center mx-auto text-[8px] leading-5 text-base-100 font-semibold">
                  M
                </p>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input border-none w-[547px] h-[18px] text-sm text-base-100 bg-primary-100 rounded-none mx-auto"
                />
              </div>
            </div>
            <div className="flex items-center justify-center w-full max-w-[603px] h-[46px] mx-auto">
              <div className="flex items-center justify-between w-full h-[46px] border border-base-300 rounded-md p-2">
                <p className="text-center mx-auto text-[8px] leading-5 text-base-100 font-semibold">
                  L
                </p>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input border-none w-[547px] h-[18px] text-sm text-base-100 bg-primary-100 rounded-none mx-auto"
                />
              </div>
            </div>
            <div className="flex items-center justify-center w-full max-w-[603px] h-[46px] mx-auto">
              <div className="flex items-center justify-between w-full h-[46px] border border-base-300 rounded-md p-2">
                <p className="text-center mx-auto text-[8px] leading-5 text-base-100 font-semibold">
                  XL
                </p>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input border-none w-[547px] h-[18px] text-sm text-base-100 bg-primary-100 rounded-none mx-auto"
                />
              </div>
            </div>
            <div className="flex items-center justify-center w-full max-w-[603px] h-[46px] mx-auto">
              <div className="flex items-center justify-between w-full h-[46px] border border-base-300 rounded-md p-2">
                <p className="text-center mx-auto text-[8px] leading-5 text-base-100 font-semibold">
                  XXL
                </p>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input border-none w-[547px] h-[18px] text-sm text-base-100 bg-primary-100 rounded-none mx-auto"
                />
              </div>
            </div>
            <div className="flex items-center justify-center w-full max-w-[603px] h-[46px] mx-auto">
              <div className="flex items-center justify-between w-full h-[46px] border border-base-300 rounded-md p-2">
                <p className="text-center mx-auto text-[8px] leading-5 text-base-100 font-semibold">
                  XXXL
                </p>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input border-none w-[547px] h-[18px] text-sm text-base-100 bg-primary-100 rounded-none mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
