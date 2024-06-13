import React, { useRef, useState } from "react";
import Breadcrumbs from "../breadcrumb/Breadcrumbs";
import IconDate from "../../assets/imgEvent/iconDate.png";
// import IconLocation from "../../assets/imgEvent/iconLocation.png";
import Photo from "../../assets/imgEvent/photo.png";
import IconTicket from "../../assets/imgEvent/iconTicket.png";

export default function AddEvent() {
  const fileInputRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleFileUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  return (
    <>
      <section className="section-Event mt-4">
        <Breadcrumbs />
        <div className="w-[1156px] h-[1979px] gap-[50px] mx-auto mt-14 font-poppins ">
          <h1 className="w-[242px] h-[48px] text-[32px] leading-[48px] font-semibold text-primary-0">
            Add new event
          </h1>
          <div className="event-information shadow-custom-1 shadow-custom-2 mt-20">
            <h1 className="w-[328px] h-[48px] text-[32px] leading-[48px] font-semibold text-primary-0 mb-10">
              Event Information
            </h1>

            <div className="flex flex-row items-start justify-between w-[1112px] h-[142px] gap-[149px]">
              <div className="flex flex-col gap-[18px] w-[360px] h-[142px] ">
                <div className="flex items-center justify-between w-[360px] h-[44px]">
                  <label className="min-w-[147px] h-[36px] text-[24px] leading-9 font-semibold text-secondary-50">
                    Event Name
                  </label>
                  <span className="span-Event">Required</span>
                </div>
                <div className="text-secondary-50 w-[360px] h-[140px]">
                  <p className="text-[14px] font-normal leading-[20px] text-justify">
                    Nama event maksimal 40 karakter. Disarankan untuk tidak
                    menggunakan huruf kapital berlebih, memasukkan lebih dari 1
                    merek, dan kata kata promosi.
                  </p>
                </div>
              </div>
              <div className="flex items-center opacity-90">
                <input
                  type="text"
                  placeholder="Type here"
                  className="input-Event"
                />
              </div>
            </div>

            <div className="flex md:flex-row items-start justify-between w-[1112px] h-[142px] gap-[149px] mt-16">
              <div className="flex flex-col gap-[18px] w-[360px] h-[142px] ">
                <div className="flex items-center justify-between w-[360px] h-[44px]">
                  <label className="min-w-[115px] h-[36px] text-[24px] leading-9 font-semibold text-secondary-50">
                    Category
                  </label>
                  <span className="span-Event">Required</span>
                </div>
                <div className="text-secondary-50 w-[360px] min-h-[160px]">
                  <p className="text-[14px] font-normal leading-[20px] text-justify">
                    Pilih kategori yang sesuai karena biaya layanan akan
                    tergantung pada kategori. Jika pemilihan kategori kurang
                    sesuai, maka kategori akan diubah oleh Admin
                  </p>
                </div>
              </div>
              <div className="flex items-start md:items-center justify-end md:w-3/5 font-semibold">
                <select className="dropdownInput-Event ">
                  <option disabled selected>
                    Pick your an option
                  </option>
                  <option>Festival</option>
                  <option>Greedo</option>
                </select>
              </div>
            </div>
          </div>

          <div className="div-detailEvent shadow-custom-1 shadow-custom-2">
            <h1 className="w-[328px] h-[48px] text-[32px] leading-[48px] font-semibold text-primary-0 mb-10">
              Detail Event
            </h1>
            <div className="flex flex-row items-start justify-between w-[1112px] h-[122px] gap-[149px]">
              <div className="flex flex-col gap-[18px] w-[360px] h-[122px] ">
                <div className="flex items-center justify-between w-[360px] h-[44px]">
                  <label className="min-w-[176px] h-[36px] text-[24px] leading-9 font-semibold text-secondary-50">
                    Location
                  </label>
                  <span className="span-Event">Required</span>
                </div>
                <div className="text-secondary-50 w-[360px] h-[60px]">
                  <p className="text-[14px] font-normal leading-[20px] text-justify">
                    Pastikan lokasi yang dimasukan akurat agar tidak ada
                    terjadinya kesalah pahaman dengan customer
                  </p>
                </div>
              </div>
              <div className="relative w-[700px] h-[107px] flex flex-wrap gap-[24px] items-start justify-start">
                <div className="flex items-center justify-center gap-[24px]">
                  <div className="w-[603px] h-[46px] flex items-center pt-[14px] pr-[16px] pb-[14px] pl-[16px] gap-[2px] border-secondary-55 bg-primary-100 rounded-lg ">
                    <input
                      type="text"
                      placeholder="Pick a date"
                      className="input input-md border w-[547px] h-[18px] text-base-100 bg-primary-100 rounded-md text-sm font-semibold text-[16px] leading-[24px] opacity-70"
                    />
                    <img
                      src={IconDate}
                      alt="iconDate"
                      className="w-[16px] h-[16px] mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-row items-start justify-between w-[1112px] h-[102px] gap-[149px] mt-10">
              <div className="flex flex-col gap-[18px] w-[360px] h-[102px] ">
                <div className="flex items-center justify-between w-[360px] h-[44px]">
                  <label className="min-w-[176px] h-[36px] text-[24px] leading-9 font-semibold text-secondary-50">
                    Date
                  </label>
                  <span className="span-Event">Required</span>
                </div>
                <div className="text-secondary-50 w-[360px] h-[40px]">
                  <p className="text-[14px] font-normal leading-[20px] text-justify">
                    masukan tanggal event yang berisikan tahun, bulan, hari
                    dengan akurat
                  </p>
                </div>
              </div>
              <div className="w-[700px] h-[107px] flex flex-wrap gap-[24px] items-start justify-start">
                <div className="flex items-center justify-center gap-[24px]">
                  <div className="w-[603px] h-[46px] flex items-center pt-[14px] pr-[16px] pb-[14px] pl-[16px] gap-[2px] border-secondary-55 bg-primary-100 rounded-lg shadow-custom-1">
                    <input
                      type="text"
                      placeholder="Pick a date"
                      className="input input-md w-[547px] h-[18px] text-base-100 bg-primary-100 rounded-md text-sm font-semibold text-[16px] leading-[24px] opacity-70"
                    />
                    <img
                      src={IconDate}
                      alt="iconDate"
                      className="w-[16px] h-[16px] mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex md:flex-row items-start justify-between w-[1112px] h-[202px] gap-[149px] mt-14">
              <div className="flex flex-col gap-[18px] w-[360px] h-[202px] ">
                <div className="flex items-center justify-between w-[360px] h-[44px] gap-[15px]">
                  <label className="min-w-[172px] h-[36px] text-[24px] leading-9 font-semibold text-secondary-50">
                    Photo event
                  </label>
                  <span className="span-Event">Required</span>
                </div>
                <div className="text-secondary-50 w-[360px] min-h-[140px]">
                  <p className="text-[14px] font-normal leading-[20px] text-justify">
                    Format foto harus .jpg, jpeg,png dan ukuran minimal 300 x
                    300 px. <br />
                    <br />
                    Pilih foto produk atau tarik dan letakkan hingga 7 foto
                    sekaligus di sini. Upload Minimal 5 foto yang menarik dan
                    berbeda satu sama lain untuk menarik perhatian pembeli.
                  </p>
                </div>
              </div>
              <div
                className="w-[700px] h-[107px] flex flex-wrap gap-[24px] items-start justify-start cursor-pointer"
                onClick={handleFileUploadClick}>
                <div className="w-[603px] h-[202px] pt-[30px] pr-[21px] pb-[30px] pl-[21px] gap-[10px] border border-dotted border-primary-0 flex items-center justify-center">
                  {selectedImage ? (
                    <img
                      src={selectedImage}
                      alt="Selected"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-center min-w-[69px] h-[47px]">
                      <img
                        src={Photo}
                        alt="photo"
                        className="w-[24px] h-[24px] mx-auto"
                      />
                      <span className="w-[69px] h-[15px] mx-auto text-[12px] leading-[14.52px] text-primary-0">
                        Upload Foto
                      </span>
                    </div>
                  )}
                </div>
              </div>
              <input
                type="file"
                accept="image/png, image/jpeg"
                ref={fileInputRef}
                onChange={handleFileChange}
                style={{ display: "none" }}
              />
            </div>

            <div className="flex flex-row items-start justify-between w-[1112px] h-[229px] gap-[149px] mt-16">
              <div className="flex flex-col gap-[18px] w-[360px] h-[194px] ">
                <div className="flex items-center justify-between w-[360px] h-[44px]">
                  <label className="min-w-[360px] h-[36px] text-[24px] leading-9 font-semibold text-secondary-50 gap-[15px]">
                    Description
                  </label>
                </div>
                <div className="text-secondary-50 w-[360px] h-[140px]">
                  <p className="text-[14px] font-normal leading-[20px] text-justify">
                    Pastikan deskripsi produk memuat penjelasan detail terkait
                    produkmu agar pembeli mudah mengerti dan menemukan produkmu.
                    <br />
                    <br />
                    Disarankan untuk tidak memasukkan info nomor HP, e-mail, dsb
                    ke dalam deskripsi produk untuk melindungi data pribadimu.
                  </p>
                </div>
              </div>
              <div className="flex items-center w-[603px] h-[229px]">
                <textarea
                  type="text"
                  placeholder="Deskripsi"
                  className="textarea-Event"
                />
              </div>
            </div>
          </div>

          <div className="event-Price2 shadow-custom-1 shadow-custom-2">
            <div className="flex flex-col md:flex-row items-start md:items-center mb-4">
              <h1 className="min-w-[81px] h-[48px] text-[32px] leading-[48px] font-semibold text-primary-0">
                Ticket
              </h1>
            </div>
            <div className="flex flex-row items-start justify-between w-[1112px] h-[100px] gap-[149px] mt-14">
              <div className="flex flex-col gap-[18px] w-[360px] h-[122px] ">
                <div className="flex items-center justify-between w-[360px] h-[44px]">
                  <label className="min-w-[176px] h-[36px] text-[24px] leading-9 font-semibold text-secondary-50">
                    Ticket
                  </label>
                  <span className="span-Event">Required</span>
                </div>
                <div className="text-secondary-50 w-[360px] h-[60px]">
                  <p className="text-[14px] font-normal leading-[20px] text-justify">
                    Masukan keterangan ticket dengan teliti agar tidak terjadi
                    kesalahan harga
                  </p>
                </div>
              </div>
              <div className="relative w-[700px] h-[107px] flex flex-wrap gap-[24px] items-start justify-start">
                <div className="flex items-center justify-center gap-[24px]">
                  <div className="w-[603px] h-[46px] flex items-center border border-base-300 bg-primary-100 rounded-lg">
                    <input
                      type="text"
                      placeholder="Insert Ticket Detail"
                      className="input-ticketDetail"
                    />
                    <img
                      src={IconTicket}
                      alt="iconTicket"
                      className="w-[16px] h-[16px] mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end min-w-[424px] h-[60px] top-[2348px] left-[875px] gap-[24px] pr-[135px] mt-32">
          <button className="btn-cancel">Cancel</button>
          <button className="btn-Event">Save</button>
        </div>
      </section>
    </>
  );
}
