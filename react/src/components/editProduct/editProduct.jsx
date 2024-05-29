import batik from "../../assets/batik-1.png";
import video from "../../assets/video.png";
import iconPrice from "../../assets/iconprice.png";

const EditProduct = () => {
  return (
    <div className=" bg-primary-100 w-full h-[2518px] top-[1962px] left-[1759px] gap-0 mx-auto font-poppins">
      <nav className="w-full h-[108px] left-[1px]  px-6 py-0 mx-auto navbar bg-primary-100  justify-between  shadow-custom">
        <div className="flex-1">
          <a className="text-2xl  text-secondary-50 font-semibold w-[203px] h-[32px] cursor-pointer">
            Manage Product
          </a>
        </div>
        <div className="flex-none min-w-[192px] h-[40px] gap-10">
          <ul className="menu menu-horizontal ">
            <img
              alt="Tailwind CSS Navbar component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              className="w-10 rounded-full"
            />
            <li className="text-secondary-40 ">
              <details>
                <summary>Admin Nanda</summary>
                <ul className="p-2  rounded w-full bg-primary-100">
                  <li className="hover:text-gray-500">
                    <a>Link 1</a>
                  </li>
                  <li className="hover:text-gray-500">
                    <a>Link 2</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </nav>
      <div className="text-sm font-normal breadcrumbs text-neutral-40 gap-0.5 mt-2">
        <ul className="w-[321px] h-[20px] top-[118px] left-[24px] ">
          <li>
            <a href="#" className="w-[68px] h-[20px] ml-6 mr-2">
              Dashboard
            </a>
          </li>
          <li>
            <a href="#" className="w-[103px] h-[20px] mr-4">
              Manage Product
            </a>
          </li>
          <li className="w-[77px] h-[20px]">Edit Product</li>
        </ul>
      </div>

      <div className="max-w-[198px] h-[48px] top-[212px] mt-[30px] left-[122px] ml-[122px]">
        <h1 className="text-[32px] leading-[48px] font-semibold text-primary-0">
          Edit Product
        </h1>
      </div>
      <div className="w-full md:w-full max-w-[1100px] left-[142px] h-[596px] pt-[24px] pr-[22px] pb-[24px] pl-[22px] gap-[58px] mx-auto p-4 bg-primary-100 rounded-md shadow-sm md:shadow-lg lg:mt-10 mb-20">
        <div className="flex flex-col md:flex-row items-start md:items-center mb-6">
          <h1 className="min-w-[328px] h-[48px] text-[32px] leading-[48px]  font-semibold text-primary-0">
            Product Information
          </h1>
        </div>
        <div className="flex flex-col md:flex-row items-start justify-between mb-6 w-[1127px] max-w-full h-[222px] gap-[149px]">
          <div className="flex flex-col gap-[18px] w-[278px] h-[222px] md:w-1/3 ">
            <div className="flex items-center justify-between w-[278px] h-[44px]">
              <label className="min-w-[176px] h-[36px] text-[24px] leading-9 font-semibold text-neutral-40">
                Product Name
              </label>
              <span className="ml-3 w-[94px] h-[44px] p-2.5 bg-neutral-85 rounded-[5px] gap-2.5 text-neutral-45 text-sm leading-6 flex items-center justify-center">
                Required
              </span>
            </div>
            <div className="text-neutral-40 w-[278px] min-h-[160px] md:mt-0">
              <p className=" text-[14px] font-normal leading-[20px] text-justify">
                Nama produk minimal 40 karakter dengan memasukkan merek, jenis
                produk, warna, bahan, atau tipe.
                <br />
                <br />
                Disarankan untuk tidak menggunakan huruf kapital berlebih,
                memasukkan lebih dari 1 merek, dan kata-kata promosi.
              </p>
            </div>
          </div>
          <div className="flex items-start md:items-center justify-end md:w-3/5 ">
            <input
              type="text"
              placeholder="Batik Pring Sedapur"
              className="input input-md border w-[686px] min-h-[48px] border-base-300 bg-primary-100 rounded-md text-sm text-neutral-40"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start justify-between mb-6 w-[1127px] max-w-full h-[222px] gap-[149px] mt-20 mx-auto">
          <div className="flex flex-col gap-[18px] w-[278px] h-[222px] md:w-1/3 ">
            <div className="flex items-center justify-between w-[278px] h-[44px]">
              <label className="min-w-[176px] h-[36px] text-[24px] leading-9 font-semibold text-neutral-40">
                Category
              </label>
              <span className="ml-3 w-[94px] h-[44px] p-2.5 bg-neutral-85 rounded-[5px] gap-2.5 text-neutral-45 text-sm leading-6 flex items-center justify-center">
                Required
              </span>
            </div>
            <div className="text-neutral-40 w-[278px] min-h-[160px] md:mt-0">
              <p className=" text-[14px] font-normal leading-[20px] text-justify">
                Pilih kategori yang sesuai karena biaya layanan akan tergantung
                pada kategori. Jika pemilihan kategori kurang sesuai, maka
                kategori akan diubah oleh Admin
              </p>
            </div>
          </div>
          <div className="flex items-start md:items-center justify-end w-full  md:w-3/5">
            <select className=" select select-bordered input input-md border w-[686px] min-h-[48px] border-base-300 bg-primary-100 rounded-md text-sm text-neutral-40">
              <option>Batik</option>
              <option>Han Solo</option>
              <option>Greedo</option>
            </select>
          </div>
        </div>
      </div>

      <div className="w-full max-w-[1100px] min-h-[862px] left-[142px]  top-[1008px] pt-[24px] pr-[22px] pb-[24px] pl-[22px] gap-[58px] mx-auto p-4 bg-putih rounded-md shadow-sm md:shadow-lg lg:mt-10 mb-20">
        <div className="flex flex-col md:flex-row items-start md:items-center mb-6">
          <h1 className="w-[230px] h-[48px] text-[32px] leading-[48px]  font-semibold text-primary-0">
            Detail Product
          </h1>
        </div>
        <div className="flex flex-col md:flex-row items-start justify-between mb-6 w-[1127px]  h-[244px] gap-[149px]">
          <div className="flex flex-col gap-[18px] w-[278px] h-[222px] md:w-1/3">
            <div className="flex items-center justify-between w-[278px] h-[44px]">
              <label className="min-w-[176px] h-[36px] text-[24px] leading-9 font-semibold text-primary-0">
                Photo Product
              </label>
              <span className="ml-3 w-[94px] h-[44px] p-2.5 bg-neutral-85 rounded-[5px] gap-2.5 text-neutral-45 text-sm leading-6 flex items-center justify-center">
                Required
              </span>
            </div>
            <div className="text-neutral-40 max-w-[278px] min-h-[160px] md:mt-0">
              <p className=" text-[14px] font-normal leading-[20px] text-justify">
                Format foto harus .jpg, jpeg, png dan ukuran minimal 300 x 300
                px.
                <br />
                <br />
                Pilih foto produk atau tarik dan letakkan hingga 7 foto
                sekaligus di sini. Upload Minimal 5 foto yang menarik dan
                berbeda satu sama lain untuk menarik perhatian pembeli.
              </p>
            </div>
          </div>
          <div className="w-full min-w-[700px]  h-[244px] md:w-2/3 flex flex-wrap gap-[20px] md:mt-0 items-start md:items-center justify-start">
            <div className="border  flex items-center justify-center">
              <img
                src={batik}
                alt="Foto 6"
                className="w-[108px] h-[107px] mx-auto"
              />
            </div>
            <div className="border  flex items-center justify-center">
              <img
                src={batik}
                alt="Foto 6"
                className="w-[108px] h-[107px] mx-auto"
              />
            </div>
            <div className="border  flex items-center justify-center">
              <img
                src={batik}
                alt="Foto 6"
                className="w-[108px] h-[107px] mx-auto"
              />
            </div>
            <div className="border  flex items-center justify-center">
              <img
                src={batik}
                alt="Foto 6"
                className="w-[108px] h-[107px] mx-auto"
              />
            </div>
            <div className="border  flex items-center justify-center">
              <img
                src={batik}
                alt="Foto 6"
                className="w-[108px] h-[107px] mx-auto"
              />
            </div>
            <div className="w-[108px] h-[107px] border  flex items-center justify-center">
              <div className="text-center">
                <span className="block text-zinc-500 dark:text-zinc-400">
                  <svg
                    className="w-10 h-10 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 4v16m8-8H4"></path>
                  </svg>
                </span>
                <span className="block text-zinc-700 dark:text-zinc-300 mt-2">
                  Foto 7
                </span>
              </div>
            </div>
            <div className="w-[108px] h-[107px] border  flex items-center justify-center">
              <div className="text-center">
                <span className="block text-zinc-500 dark:text-zinc-400">
                  <svg
                    className="w-10 h-10 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 4v16m8-8H4"></path>
                  </svg>
                </span>
                <span className="block text-zinc-700 dark:text-zinc-300 mt-2">
                  Foto 7
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between mb-6 w-[1127px] h-[114px] gap-[149px] mt-14 relative">
          <div className="relative flex flex-col gap-[18px] w-[278px] h-[114px] md:w-1/3">
            <div className="flex items-center justify-between w-[278px] h-[44px]">
              <label className="min-w-[172px] h-[36px] text-[24px] leading-9 font-semibold text-primary-0">
                Video Product
              </label>
            </div>
            <div className="text-neutral-40 w-[278px] min-h-[160px] md:mt-0">
              <p className="text-[14px] font-normal leading-[20px] text-justify">
                Format video .mp4 dan mov. Disarankan dirasi maksimal 120 detik
                dan ukuran maks 100MB.
              </p>
            </div>
            <img
              src={video}
              alt="Foto 6"
              className="absolute top-0 right-[-160px] w-[108px] h-[107px] border"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start justify-between mb-6 w-[1127px] max-w-full h-[222px] gap-[149px] mt-20">
          <div className="flex flex-col gap-[18px] w-[278px] h-[222px] md:w-1/3 ">
            <div className="flex items-center justify-between w-[278px] h-[44px]">
              <label className="min-w-[176px] h-[36px] text-[24px] leading-9 font-semibold text-neutral-40">
                Description
              </label>
            </div>
            <div className="text-neutral-40 w-[278px] min-h-[160px] md:mt-0">
              <p className=" text-[14px] font-normal leading-[20px] text-justify">
                Pastikan deskripsi produk memuat penjelasan detail terkait
                produkmu agar pembeli mudah mengerti dan menemukan produkmu.
                <br />
                <br />
                Disarankan untuk tidak memasukkan info nomor HP, e-mail, dsb ke
                dalam deskripsi produk untuk melindungi data pribadimu.
              </p>
            </div>
          </div>
          <div className="flex items-start md:items-center justify-end md:w-3/5 text-neutral-40">
            <textarea
              type="text"
              placeholder={`✔ Batik full tulis murah
✔ motif pring sedapur
✔ Material katun primissima
✔ Size 225 cm x 100 cm
----------------------------------------
✔ warna gambar mungkin agak sedikit berbeda dengan warna aslinya karena faktor kamera atau pencahayaan
✔ Original batik tulis tangan, garansi uang kembali jika produk adalah batik semi tulis, sablon lilin, tulis kombinasi, atau batik cetak`}
              className="input input-md border w-[686px] min-h-[229px] border-base-300 bg-primary-100 rounded-md text-sm text-neutral-40 placeholder:text-neutral-40 text-[16px] leading-[24px] font-normal px-4 py-3 overflow-hidden"
            />
          </div>
        </div>
      </div>

      <div className="w-full max-w-[1100px] left-[142px] h-[345px] pt-[24px] pr-[22px] pb-[24px] pl-[22px] gap-[58px] mx-auto p-4 bg-putih text-primary-0 rounded-md shadow-sm md:shadow-lg lg:mt-10 mb-20">
        <div className="flex flex-col md:flex-row items-start md:items-center mb-6">
          <h1 className="min-w-[81px] h-[48px] text-[32px] leading-[48px] font-semibold text-primary-0">
            Price
          </h1>
        </div>
        <div className="flex flex-col md:flex-row items-start justify-between mb-4 w-[1113px] max-w-full h-[87px] gap-[149px] mx-auto">
          <div className="flex flex-col gap-[18px] w-[278px] h-[222px] md:w-1/3 ">
            <div className="flex items-center justify-between w-[278px] h-[44px]">
              <label className="min-w-[176px] h-[36px] text-[24px] leading-9 font-semibold text-neutral-40">
                Minimum Order
              </label>
            </div>
            <div className="text-neutral-40 w-[278px] min-h-[160px] md:mt-0">
              <p className=" text-[14px] font-normal leading-[20px] text-justify">
                Alur jumlah minimum yang harus dibeli untuk produk ini
              </p>
            </div>
          </div>
          <div className="relative flex items-start md:items-center justify-end md:w-3/5">
            <input
              type="number"
              placeholder="1"
              className="input input-md border w-[686px] min-h-[48px] border-base-300 bg-primary-100 rounded-md text-sm text-neutral-40"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start justify-between w-[1113px] max-w-full h-[46px] gap-[149px] mx-auto mt-20">
          <div className="flex flex-col gap-[18px] w-[278px] h-[222px] md:w-1/3 ">
            <div className="flex items-center justify-between w-[278px] h-[44px]">
              <label className="min-w-[176px] h-[36px] text-[24px] leading-9 font-semibold text-neutral-40">
                Unit Price
              </label>
              <span className="ml-3 w-[94px] h-[44px] p-2.5 bg-neutral-85 rounded-[5px] gap-2.5 text-neutral-45 text-sm leading-6 flex items-center justify-center">
                Required
              </span>
            </div>
          </div>
          <div className="relative flex items-start md:items-center justify-end md:w-3/5 ">
            <input
              type="number"
              placeholder="RP. 100.000"
              className="input input-md border w-[686px] min-h-[48px] border-base-300 bg-primary-100 rounded-md text-sm text-neutral-40 pl-10"
            />
            <img
              src={iconPrice}
              alt="Icon"
              className="absolute inset-y-5 left-4 flex items-center pointer-events-none"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-end min-w-[333px] h-[46px] top-[240px] left-[965px] gap-[21px] pr-[120px]">
        <button className="btn w-[97px] h-[46px] rounded-lg pt-[3.5px] pr-[4px] pb-[3.5px] pl-[4px] gap-[2px] bg-primary-30 border-primary-30 text-base-400 hover:bg-primary-40 hover:border-primary-40">
          Cancel
        </button>
        <button className="btn w-[97px] h-[46px] rounded-lg pt-[3.5px] pr-[4px] pb-[3.5px] pl-[4px] gap-[2px] bg-primary-30 border-primary-30 text-base-400 hover:bg-primary-40 hover:border-primary-40">
          Draft
        </button>
        <button className="btn w-[97px] h-[46px] rounded-lg pt-[3.5px] pr-[4px] pb-[3.5px] pl-[4px] gap-[2px] bg-primary-30 border-primary-30 text-base-400 hover:bg-primary-40 hover:border-primary-40">
          Save
        </button>
      </div>
    </div>
  );
};

export default EditProduct;
