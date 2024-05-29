{
  /* <div className="rounded-md shadow-lg w-[1156px] h-auto mt-[34px] ml-[142px] p-[24px] gap-[58px] bg-white">
        <h1 className="text-xl font-poppins font-semibold text-hitam leading-[48px] mb-4">
          Product Information
        </h1>
        <div>
          <h1 className="text-xl font-poppins font-semibold text-hitam leading-[48px] mb-4">
            Product Name
          </h1>
          <p>
            Nama produk minimal 40 karakter dengan memasukkan merek, jenis
            produk, warna, bahan, atau tipe. Disarankan untuk tidak menggunakan
            huruf kapital berlebih, memasukkan lebih dari 1 merek, dan kata kata
            promosi.
          </p>
        </div>
        <div>
          <h1 className="text-xl font-poppins font-semibold text-hitam leading-[48px] mb-4">
            Category
          </h1>
          <p>
            Pilih kategori yang sesuai karena biaya layanan akan tergantung pada
            kategori. Jika pemilihan kategori kurang sesuai, maka kategori akan
            diubah oleh Admin
          </p>
        </div>
      
      </div> */
}

const EditProduct = () => {
  return (
    <div className="bg-putih min-h-screen">
      <div className="W-[296px] h-[20px] top-[118px] ml-[24px]">
        <div className="text-sm breadcrumbs text-abuTua font-roboto">
          <ul className="mt-2">
            <li className="w-[68px] h-[20px]">
              <a href="#">Dashboard</a>
            </li>
            <li>
              <a href="#">Manage Product</a>
            </li>
            <li>Edit Product</li>
          </ul>
        </div>
      </div>

      <div className="w-[198px] h-[48px] mt-[94px] ml-[122px]">
        <h1 className="text-[32px]  leading-[48px] font-poppins font-semibold text-hitam">
          Edit Product
        </h1>
      </div>
      <div className="font-poppins rounded-md shadow-lg w-[1156px] h-auto mt-[34px] ml-[142px] p-[24px] gap-[58px] bg-white">
        <div className="w-[328px] h-[48px] mb-8">
          <h2 className="text-[32px]  leading-[48px]  font-semibold text-hitam">
            Product Information
          </h2>
        </div>
        <div className="w-[1113px] h-[222px] gap-[149px] mb-16">
          <div className="w-[1113px] h-[222px]  gap-[18px]">
            <div className="flex items-center mb-2">
              <label className="block text-[24px] leading-9 font-semibold text-biruMuda w-[176px] h-[36px]">
                Product Name
              </label>
              <div>
                <span className="ml-3 w-44 h-[24px] p-2.5 bg-abuMuda rounded-md text-abu text-sm leading-6">
                  Required
                </span>
              </div>
              <input
                type="text"
                placeholder="Batik Pring Sedapur"
                className="input input-bordered input-md min-w-[686px] h-[44px] ml-32 bg-putih text-biruMuda"
              />
            </div>
            <div className="text-biruMuda ">
              <p className="w-1/5 text-sm mb-4 text-justify ">
                Nama produk minimal 40 karakter dengan memasukkan merek, jenis
                produk, warna, bahan, atau tipe.
              </p>
              <p className="w-1/5 text-sm mb-4 text-justify">
                Disarankan untuk tidak menggunakan huruf kapital berlebih,
                memasukkan lebih dari 1 merek, dan kata-kata promosi.
              </p>
            </div>
          </div>
        </div>
        <div className="w-[1113px] h-[162px] gap-[149px]">
          <div className="flex items-center mb-2">
            <label className="block text-2xl leading-9 font-semibold text-biruMuda">
              Category
            </label>
            <div>
              <span className="ml-16 w-44 h-[24px] p-2.5 bg-abuMuda rounded-md text-abu text-sm leading-6">
                Required
              </span>
            </div>
            <select className="select select-bordered input input-md min-w-[686px] h-[44px] ml-32 bg-putih rounded-md text-abuGelap">
              <option>Batik</option>
              <option>Han Solo</option>
              <option>Greedo</option>
            </select>
          </div>
          <div className="text-biruMuda ">
            <p className="w-1/5 text-sm mb-4 text-justify ">
              Pilih kategori yang sesuai karena biaya layanan akan tergantung
              pada kategori. Jika pemilihan kategori kurang sesuai, maka
              kategori akan diubah oleh Admin.
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-md shadow-lg w-[1156px] h-auto mt-[34px] ml-[142px] p-[24px] gap-[58px] bg-white">
        <h1 className="text-xl font-poppins font-semibold text-hitam leading-[48px] mb-4">
          Detail Product
        </h1>
      </div>
    </div>
  );
};

export default EditProduct;

const EditProduct = () => {
  return (
    <div className="bg-putih min-h-screen">
      <div className="p-[24px]">
        <div className="text-sm breadcrumbs text-abuTua font-roboto">
          <ul className="W-[296px] h-[20px] top-[118px] left-[24px] gap-1">
            <li className="w-[68px] h-[20px]">
              <a href="#">Dashboard</a>
            </li>
            <li>
              <a href="#">Manage Product</a>
            </li>
            <li>Edit Product</li>
          </ul>
        </div>
      </div>
      <div className="w-[198px] h-[48px] mt-[50px] ml-[80px] mb-10">
        <h1 className="text-[32px] leading-[48px] font-poppins font-semibold text-hitam">
          Edit Product
        </h1>
      </div>
      <div className="font-poppins rounded-md shadow-lg w-[1156px] h-[596px] pt-[24px] pr-[22px] pb-[24px] pl-[22px] gap-[58px] bg-white mx-auto top-[340px]">
        <div className="w-[328px] h-[48px] mb-8">
          <h2 className="text-[32px]  leading-[48px]  font-semibold text-hitam">
            Product Information
          </h2>
        </div>
        <div className="w-[1113px] h-[222px] gap-[149px] mb-16">
          <div className="flex items-center mb-2">
            <label className="block text-[24px] leading-9 font-semibold text-biruMuda w-[176px] h-[36px]">
              Product Name
            </label>
            <div>
              <span className="ml-3 w-44 h-[24px] p-2.5 bg-abuMuda rounded-md text-abu text-sm leading-6">
                Required
              </span>
            </div>
            <input
              type="text"
              placeholder="Batik Pring Sedapur"
              className="input input-md border- border-abuMuda w-[686px] h-[44px] ml-6 bg-putih rounded-md text-abuGelap"
            />
          </div>
          <div className="text-biruMuda w-[278px] h-[160px] ">
            <p className="text-sm mb-4 text-justify">
              Nama produk minimal 40 karakter dengan memasukkan merek, jenis
              produk, warna, bahan, atau tipe.
            </p>
            <p className="text-sm mb-4 text-justify">
              Disarankan untuk tidak menggunakan huruf kapital berlebih,
              memasukkan lebih dari 1 merek, dan kata-kata promosi.
            </p>
          </div>
        </div>
        <div className="w-[1113px] h-[162px] gap-[149px]">
          <div className="w-[1113px] h-[222px] gap-[149px] mb-16">
            <div className="flex items-center mb-2">
              <label className="block text-[24px] leading-9 font-semibold text-biruMuda w-[176px] h-[36px]">
                Category
              </label>
              <div>
                <span className="ml-3 w-44 h-[24px] p-2.5 bg-abuMuda rounded-md text-abu text-sm leading-6">
                  Required
                </span>
              </div>
              <select className=" select select-bordered input input-md w-[686px] h-[44px] ml-6 bg-putih rounded-md text-abuGelap text-sm">
                <option>Batik</option>
                <option>Han Solo</option>
                <option>Greedo</option>
              </select>
            </div>
            <div className="text-biruMuda w-[278px] h-[160px] ">
              <p className="text-sm mb-4 text-justify">
                Pilih kategori yang sesuai karena biaya layanan akan tergantung
                pada kategori. Jika pemilihan kategori kurang sesuai, maka
                kategori akan diubah oleh Admin
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-md shadow-lg max-w-[1156px] h-auto mt-[34px] ml-[142px] p-[24px] gap-[58px] bg-white">
        <h1 className="text-xl font-poppins font-semibold text-hitam leading-[48px] mb-4">
          Detail Product
        </h1>
      </div>
    </div>
  );
};

export default EditProduct;



<div className="w-[108px] h-[107px] py-[30px] px-[21px] border-t border-2 flex items-center justify-center">
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
    Foto Kategori
  </span>
</div>
</div>



        <div className="w-full md:w-2/3 p-4 flex flex-wrap gap-2 md:mt-0 lg:mt-[70px]">
          <div className="w-[108px] h-[107px] py-[30px] px-[21px] border-t border-2 flex items-center justify-center">
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
                Foto 6
              </span>
            </div>
          </div>
          <div className="w-[108px] h-[107px] py-[30px] px-[21px] border-t border-2 flex items-center justify-center">
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
          <div className="w-[108px] h-[107px] py-[30px] px-[21px] border-t border-2 flex items-center justify-center">
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
                Foto 6
              </span>
            </div>
          </div>
          <div className="w-[108px] h-[107px] py-[30px] px-[21px] border-t border-2 flex items-center justify-center">
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
          <div className="w-[108px] h-[107px] py-[30px] px-[21px] border-t border-2 flex items-center justify-center">
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
                Foto 6
              </span>
            </div>
          </div>
          <div className="w-[108px] h-[107px] py-[30px] px-[21px] border-t border-2 flex items-center justify-center">
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



iNputan berupa gamabr

<div className="w-full md:w-2/3 p-4 flex flex-wrap gap-2 md:mt-0 lg:mt-[70px]">
<div className="w-[108px] h-[107px] py-[30px] px-[21px] border-t border-2 flex items-center justify-center">
  <input type="file" accept="image/*" className="w-full h-full opacity-0 absolute cursor-pointer" />
  <div className="text-center relative">
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
      Upload Foto 6
    </span>
  </div>
</div>
<div className="w-[108px] h-[107px] py-[30px] px-[21px] border-t border-2 flex items-center justify-center">
  <input type="file" accept="image/*" className="w-full h-full opacity-0 absolute cursor-pointer" />
  <div className="text-center relative">
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
      Upload Foto 7
    </span>
  </div>
</div>
<div className="w-[108px] h-[107px] py-[30px] px-[21px] border-t border-2 flex items-center justify-center">
  <input type="file" accept="image/*" className="w-full h-full opacity-0 absolute cursor-pointer" />
  <div className="text-center relative">
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
      Upload Foto 6
    </span>
  </div>
</div>
<div className="w-[108px] h-[107px] py-[30px] px-[21px] border-t border-2 flex items-center justify-center">
  <input type="file" accept="image/*" className="w-full h-full opacity-0 absolute cursor-pointer" />
  <div className="text-center relative">
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
      Upload Foto 7
    </span>
  </div>
</div>
<div className="w-[108px] h-[107px] py-[30px] px-[21px] border-t border-2 flex items-center justify-center">
  <input type="file" accept="image/*" className="w-full h-full opacity-0 absolute cursor-pointer" />
  <div className="text-center relative">
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
      Upload Foto 6
    </span>
  </div>
</div>
<div className="w-[108px] h-[107px] py-[30px] px-[21px] border-t border-2 flex items-center justify-center">
  <input type="file" accept="image/*" className="w-full h-full opacity-0 absolute cursor-pointer" />
  <div className="text-center relative">
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
      Upload Foto 7
    </span>
  </div>
</div>
</div>


<textarea
              className="text-biruMuda w-[654px] h-[504px] opacity-40 font-poppins text-[16px] leading-[24px] font-normal text-justify"
              readOnly
              value={`✔ Batik full tulis murah
✔ motif pring sedapur
✔ Material katun primissima
✔ Size 225 cm x 100 cm
----------------------------------------
✔ warna gambar mungkin agak sedikit berbeda dengan warna aslinya karena faktor kamera atau pencahayaan
✔ Original batik tulis tangan, garansi uang kembali jika produk adalah batik semi tulis, sablon lilin, tulis kombinasi, atau batik cetak`}
            />



fghjg







const EditProduct = () => {
  return (
    <div className="bg-putih min-h-screen mx-auto">
      <div className="p-[10px]">
        <div className="text-sm breadcrumbs text-abuTua font-roboto">
          <ul className="W-[296px] h-[20px] top-[118px] left-[24px] gap-1">
            <li>
              <a href="#" className="w-[68px] h-[20px]">
                Dashboard
              </a>
            </li>
            <li>
              <a href="#" className="w-[103px] h-[20px]">
                Manage Product
              </a>
            </li>
            <li className="w-[77px] h-[20px]">Edit Product</li>
          </ul>
        </div>
      </div>
      <div className="w-[198px] h-[48px] mt-[30px] left-[122px] ml-[95px] mb-10">
        <h1 className="text-xl1 font-poppins font-semibold text-hitam">
          Edit Product
        </h1>
      </div>
      <div className=" w-full max-w-[1156px] left-[142px] max-h-[596px] pt-[24px] pr-[22px] pb-[24px] pl-[22px] gap-[58px] mx-auto p-4 bg-putih text-hitam font-poppins rounded-md shadow-sm md:shadow-lg  lg:mt-10 mb-20">
        <div className="flex flex-col md:flex-row items-start md:items-center mb-6">
          <div className="min-w-[328px] h-[48px] text-xl1  font-semibold text-hitam">
            Product Information
          </div>
        </div>
        <div className="md:flex-row flex flex-col ">
          <div className="w-full md:w-1/3 p-4">
            <div className="w-[278px] h-[222px] gap-[18px]">
              <div className="w-[278px] h-[44px] space-between flex flex-col md:flex-row items-start md:items-center mb-6">
                <label className="text-[24px] leading-9 font-semibold text-biruMuda w-[176px] h-[36px]">
                  Product Name
                </label>
                <div className="mt-2 md:mt-0">
                  <span className="ml-0 md:ml-3 w-44 h-[24px] p-2.5 bg-abuMuda rounded-md text-abu text-sm leading-6">
                    Required
                  </span>
                </div>
              </div>
              <div className="text-biruMuda max-w-[278px] h-[160px] md:mt-0 mt-10">
                <p className="font-poppins text-[14px] font-normal leading-[20px] text-justify mb-4">
                  Nama produk minimal 40 karakter dengan memasukkan merek, jenis
                  produk, warna, bahan, atau tipe.
                </p>
                <p className="font-poppins text-[14px] font-normal leading-[20px] text-justify mb-4">
                  Disarankan untuk tidak menggunakan huruf kapital berlebih,
                  memasukkan lebih dari 1 merek, dan kata-kata promosi.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-2/3 p-4 flex flex-wrap gap-2 md:mt-0 text-biruMuda">
            <input
              type="text"
              placeholder="Batik Pring Sedapur"
              className="input input-md w-[686px] h-[44px] border border-abuMuda ml-6 bg-putih rounded-md  text-sm"
            />
          </div>
        </div>
        <div className="md:flex-row flex flex-col ">
          <div className="w-full md:w-1/3 p-4">
            <div className="w-[278px] h-[162px] gap-[18px]">
              <div className="w-[278px] h-[44px] space-between flex flex-col md:flex-row items-start md:items-center mb-6">
                <label className="text-[24px] leading-9 font-semibold text-biruMuda w-[176px] h-[36px]">
                  Category
                </label>
                <div className="mt-2 md:mt-0">
                  <span className="ml-0 md:ml-3 w-44 h-[24px] p-2.5 bg-abuMuda rounded-md text-abu text-sm leading-6">
                    Required
                  </span>
                </div>
              </div>
              <div className="text-biruMuda max-w-[278px] h-[160px] md:mt-0 mt-10">
                <p className="font-poppins text-[14px] font-normal leading-[20px] text-justify mb-4">
                  Pilih kategori yang sesuai karena biaya layanan akan
                  tergantung pada kategori. Jika pemilihan kategori kurang
                  sesuai, maka kategori akan diubah oleh Admin
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-2/3 p-4 flex flex-wrap gap-2 md:mt-0 text-biruMuda">
            <select className="select select-bordered input input-md border border-abuMuda  w-[686px] h-[44px] ml-6 bg-putih rounded-md  text-sm">
              <option>Batik</option>
              <option>Han Solo</option>
              <option>Greedo</option>
            </select>
          </div>
        </div>
      </div>

      <div className="min-h-screen w-full  max-w-[1156px] left-[142px] max-h-[596px] pt-[24px] pr-[22px] pb-[24px] pl-[22px] gap-[58px] mx-auto p-4 bg-putih text-hitam font-poppins rounded-md shadow-sm md:shadow-lg  lg:mt-10 mb-20">
        <div className="flex flex-col md:flex-row items-start md:items-center mb-6">
          <div className="min-w-[172px] h-[36px] text-[24px] leading-9 font-semibold text-hitam">
            Detail Product
          </div>
        </div>
        <div className="md:flex-row flex flex-col ">
          <div className="w-full md:w-1/3 p-4">
            <div className="w-[278px] h-[222px] gap-[18px]">
              <div className="w-[278px] h-[44px] space-between flex flex-col md:flex-row items-start md:items-center mb-6">
                <label className="text-[24px] leading-9 font-semibold text-biruMuda w-[176px] h-[36px]">
                  Photo Product
                </label>
                <div className="mt-2 md:mt-0">
                  <span className="ml-0 md:ml-3 w-44 h-[24px] p-2.5 bg-abuMuda rounded-md text-abu text-sm leading-6">
                    Required
                  </span>
                </div>
              </div>
              <div className="text-biruMuda max-w-[278px] h-[160px] md:mt-0 mt-10">
                <p className="font-poppins text-[14px] font-normal leading-[20px] text-justify mb-4">
                  Nama produk minimal 40 karakter dengan memasukkan merek, jenis
                  produk, warna, bahan, atau tipe.
                </p>
                <p className="font-poppins text-[14px] font-normal leading-[20px] text-justify mb-4">
                  Disarankan untuk tidak menggunakan huruf kapital berlebih,
                  memasukkan lebih dari 1 merek, dan kata-kata promosi.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-2/3 p-4 flex flex-wrap gap-2 md:mt-0 text-biruMuda">
            <input
              type="text"
              placeholder="Batik Pring Sedapur"
              className="input input-md w-[686px] h-[44px] border border-abuMuda ml-6 bg-putih rounded-md  text-sm"
            />
          </div>
        </div>

        <div className="md:flex-row flex flex-col ">
          <div className="w-full md:w-1/3 p-4">
            <div className="w-[278px] h-[162px] gap-[18px]">
              <div className="w-[278px] h-[44px] space-between flex flex-col md:flex-row items-start md:items-center mb-6">
                <label className="text-[24px] leading-9 font-semibold text-biruMuda w-[176px] h-[36px]">
                  Video Product
                </label>
                <div className="mt-2 md:mt-0">
                  <span className="ml-0 md:ml-3 w-44 h-[24px] p-2.5 bg-abuMuda rounded-md text-abu text-sm leading-6">
                    Required
                  </span>
                </div>
              </div>
              <div className="text-biruMuda max-w-[278px] h-[160px] md:mt-0 mt-10">
                <p className="font-poppins text-[14px] font-normal leading-[20px] text-justify mb-4">
                  Pilih kategori yang sesuai karena biaya layanan akan
                  tergantung pada kategori. Jika pemilihan kategori kurang
                  sesuai, maka kategori akan diubah oleh Admin
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-2/3 p-4 flex flex-wrap gap-2 md:mt-0 text-biruMuda">
            <select className="select select-bordered input input-md border border-abuMuda  w-[686px] h-[44px] ml-6 bg-putih rounded-md  text-sm">
              <option>Batik</option>
              <option>Han Solo</option>
              <option>Greedo</option>
            </select>
          </div>
        </div>

        <div className="md:flex-row flex flex-col ">
          <div className="w-full md:w-1/3 p-4">
            <div className="w-[278px] h-[162px] gap-[18px]">
              <div className="w-[278px] h-[44px] space-between flex flex-col md:flex-row items-start md:items-center mb-6">
                <label className="text-[24px] leading-9 font-semibold text-biruMuda w-[176px] h-[36px]">
                  Description
                </label>
                <div className="mt-2 md:mt-0">
                  <span className="ml-0 md:ml-3 w-44 h-[24px] p-2.5 bg-abuMuda rounded-md text-abu text-sm leading-6">
                    Required
                  </span>
                </div>
              </div>
              <div className="text-biruMuda max-w-[278px] h-[160px] md:mt-0 mt-10">
                <p className="font-poppins text-[14px] font-normal leading-[20px] text-justify mb-4">
                  Pilih kategori yang sesuai karena biaya layanan akan
                  tergantung pada kategori. Jika pemilihan kategori kurang
                  sesuai, maka kategori akan diubah oleh Admin
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-2/3 p-4 flex flex-wrap gap-2 md:mt-0 text-biruMuda">
            <select className="select select-bordered input input-md border border-abuMuda  w-[686px] h-[44px] ml-6 bg-putih rounded-md  text-sm">
              <option>Batik</option>
              <option>Han Solo</option>
              <option>Greedo</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;



















khdjoashd


<div className="min-h-screen w-full  max-w-[1156px] left-[142px] max-h-[596px] pt-[24px] pr-[22px] pb-[24px] pl-[22px] gap-[58px] mx-auto p-4 bg-putih text-hitam font-poppins rounded-md shadow-sm md:shadow-lg  lg:mt-10 mb-20">
<div className="flex flex-col md:flex-row items-start md:items-center mb-6 ">
  <h1 className="min-w-[230px] h-[36px] ml-4 text-[24px] leading-9 font-semibold text-hitam">
    Detail Product
  </h1>
</div>
<div className="flex flex-col md:flex-row items-start md:items-center mb-6 w-[1127px] h-[244px]">
  <div className=" md:w-1/3 p-4">
    <div className="w-[278px] h-[222px] gap-[18px]">
      <div className="w-[278px] h-[44px] space-between flex flex-col md:flex-row items-start md:items-center mb-6">
        <label className="text-[24px] leading-9 font-semibold text-biruMuda w-[176px] h-[36px]">
          Photo Product
        </label>
        <div className="mt-2 md:mt-0">
          <span className="ml-0 md:ml-3 w-44 h-[24px] p-2.5 bg-abuMuda rounded-md text-abu text-sm leading-6">
            Required
          </span>
        </div>
      </div>
      <div className="text-biruMuda max-w-[278px] h-[160px] md:mt-0 mt-10">
        <p className="font-poppins text-[14px] font-normal leading-[20px] text-justify mb-4">
          Nama produk minimal 40 karakter dengan memasukkan merek, jenis
          produk, warna, bahan, atau tipe.
        </p>
        <p className="font-poppins text-[14px] font-normal leading-[20px] text-justify mb-4">
          Disarankan untuk tidak menggunakan huruf kapital berlebih,
          memasukkan lebih dari 1 merek, dan kata-kata promosi.
        </p>
      </div>
    </div>
  </div>
  <div className=" md:w-2/3 p-4 flex flex-wrap gap-2 md:mt-0 text-biruMuda">
    <div className="flex flex-wrap gap-4">
      <img
        src="path/to/image1.jpg"
        alt="Foto 1"
        className="w-[100px] h-[100px]"
      />
      <img
        src="path/to/image2.jpg"
        alt="Foto 2"
        className="w-[100px] h-[100px]"
      />
      <img
        src="path/to/image3.jpg"
        alt="Foto 3"
        className="w-[100px] h-[100px]"
      />
      <img
        src="path/to/image4.jpg"
        alt="Foto 4"
        className="w-[100px] h-[100px]"
      />
      <img
        src="path/to/image5.jpg"
        alt="Foto 5"
        className="w-[100px] h-[100px]"
      />
      <div className="w-[100px] h-[100px] border border-dashed border-gray-400 flex items-center justify-center">
        <span>Foto 6</span>
      </div>
      <div className="w-[100px] h-[100px] border border-dashed border-gray-400 flex items-center justify-center">
        <span>Foto 7</span>
      </div>
    </div>
  </div>
</div>

<div className="md:flex-row flex flex-col ">
  <div className="w-full md:w-1/3 p-4">
    <div className="w-[278px] h-[162px] gap-[18px]">
      <div className="w-[278px] h-[44px] space-between flex flex-col md:flex-row items-start md:items-center mb-6">
        <label className="text-[24px] leading-9 font-semibold text-biruMuda w-[176px] h-[36px]">
          Video Product
        </label>
        <div className="mt-2 md:mt-0">
          <span className="ml-0 md:ml-3 w-44 h-[24px] p-2.5 bg-abuMuda rounded-md text-abu text-sm leading-6">
            Required
          </span>
        </div>
      </div>
      <div className="text-biruMuda max-w-[278px] h-[160px] md:mt-0 mt-10">
        <p className="font-poppins text-[14px] font-normal leading-[20px] text-justify mb-4">
          Pilih kategori yang sesuai karena biaya layanan akan
          tergantung pada kategori. Jika pemilihan kategori kurang
          sesuai, maka kategori akan diubah oleh Admin
        </p>
      </div>
    </div>
  </div>
  <div className="w-full md:w-2/3 p-4 flex flex-wrap gap-2 md:mt-0 text-biruMuda">
    <select className="select select-bordered input input-md border border-abuMuda  w-[686px] h-[44px] ml-6 bg-putih rounded-md  text-sm">
      <option>Batik</option>
      <option>Han Solo</option>
      <option>Greedo</option>
    </select>
  </div>
</div>

<div className="md:flex-row flex flex-col ">
  <div className="w-full md:w-1/3 p-4">
    <div className="w-[278px] h-[162px] gap-[18px]">
      <div className="w-[278px] h-[44px] space-between flex flex-col md:flex-row items-start md:items-center mb-6">
        <label className="text-[24px] leading-9 font-semibold text-biruMuda w-[176px] h-[36px]">
          Description
        </label>
        <div className="mt-2 md:mt-0">
          <span className="ml-0 md:ml-3 w-44 h-[24px] p-2.5 bg-abuMuda rounded-md text-abu text-sm leading-6">
            Required
          </span>
        </div>
      </div>
      <div className="text-biruMuda max-w-[278px] h-[160px] md:mt-0 mt-10">
        <p className="font-poppins text-[14px] font-normal leading-[20px] text-justify mb-4">
          Pilih kategori yang sesuai karena biaya layanan akan
          tergantung pada kategori. Jika pemilihan kategori kurang
          sesuai, maka kategori akan diubah oleh Admin
        </p>
      </div>
    </div>
  </div>
  <div className="w-full md:w-2/3 p-4 flex flex-wrap gap-2 md:mt-0 text-biruMuda">
    <select className="select select-bordered input input-md border border-abuMuda  w-[686px] h-[44px] ml-6 bg-putih rounded-md  text-sm">
      <option>Batik</option>
      <option>Han Solo</option>
      <option>Greedo</option>
    </select>
  </div>
</div>
</div>

<div className=" w-full max-w-[1156px] left-[142px] max-h-[596px] pt-[24px] pr-[22px] pb-[24px] pl-[22px] gap-[58px] mx-auto p-4 bg-putih text-hitam font-poppins rounded-md shadow-sm md:shadow-lg  lg:mt-10 mb-20">
<div className="flex flex-col md:flex-row items-start md:items-center mb-6">
  <h1 className="min-w-[172px] h-[36px] ml-4 text-[24px] leading-9 font-semibold text-hitam">
    Price
  </h1>
</div>
<div className="md:flex-row flex flex-col ">
  <div className="w-full md:w-1/3 p-4">
    <div className="w-[278px] h-[222px] gap-[18px]">
      <div className=" flex flex-col md:flex-row items-start md:items-center mb-6">
        <label className="text-[24px] leading-9 font-semibold text-biruMuda min-w-[176px] h-[36px]">
          Minimum Order
        </label>
      </div>
      <div className="text-biruMuda max-w-[278px] h-[160px] md:mt-0 mt-10">
        <p className="font-poppins text-[14px] font-normal leading-[20px] text-justify mb-4">
          Alur jumlah minimum yang harus dibeli untuk produk ini
        </p>
      </div>
    </div>
  </div>
  <div className="w-full md:w-2/3 p-4 flex flex-wrap gap-2 md:mt-0 text-biruMuda">
    <input
      type="text"
      placeholder="Batik Pring Sedapur"
      className="input input-md border border-abuMuda  w-[686px] h-[44px] ml-6 bg-putih rounded-md  text-sm"
    />
  </div>
</div>
<div className="md:flex-row flex flex-col ">
  <div className="w-full md:w-1/3 p-4">
    <div className="w-[278px] h-[162px] gap-[18px]">
      <div className="w-[278px] h-[44px] space-between flex flex-col md:flex-row items-start md:items-center mb-6">
        <label className="text-[24px] leading-9 font-semibold text-biruMuda w-[176px] h-[36px]">
          Unit Price
        </label>
        <div className="mt-2 md:mt-0">
          <span className="ml-0 md:ml-3 w-44 h-[24px] p-2.5 bg-abuMuda rounded-md text-abu text-sm leading-6">
            Required
          </span>
        </div>
      </div>
    </div>
  </div>
  <div className="w-full md:w-2/3 p-4 flex flex-wrap gap-2 md:mt-0 text-biruMuda">
    <select className="select select-bordered input input-md border border-abuMuda  w-[686px] h-[44px] ml-6 bg-putih rounded-md  text-sm">
      <option>Batik</option>
      <option>Han Solo</option>
      <option>Greedo</option>
    </select>
  </div>
</div>
{/* // </div> */}

Ini adalah contoh penggunaan input untuk menentukan unit price. Jika Anda memiliki
import batik from "../../assets/batik-1.png";
import video from "../../assets/video.png";

const EditProduct = () => {
  return (
    <div className="bg-putih max-w-[1440px] h-[2518px] top-[1962px] left-[1759px] gap-0 mx-auto">
      <div className="text-sm breadcrumbs text-abuTua font-roboto p-4">
        <ul className="w-[296px] h-[20px] top-[118px] left-[24px] gap-[var(--t--spacing1)]">
          <li>
            <a href="#" className="w-[68px] h-[20px]">
              Dashboard
            </a>
          </li>
          <li>
            <a href="#" className="w-[103px] h-[20px]">
              Manage Product
            </a>
          </li>
          <li className="w-[77px] h-[20px]">Edit Product</li>
        </ul>
      </div>

      <div className="max-w-[198px] h-[48px] mt-[30px] left-[122px] ml-[100px] mb-10">
        <h1 className="text-xl1 font-poppins font-semibold text-hitam">
          Edit Product
        </h1>
      </div>
      <div className="w-full max-w-[1156px] left-[142px] h-[596px] pt-[24px] pr-[22px] pb-[24px] pl-[22px] gap-[58px] mx-auto p-4 bg-putih text-hitam font-poppins rounded-md shadow-sm md:shadow-lg lg:mt-10 mb-20">
        <div className="flex flex-col md:flex-row items-start md:items-center mb-6">
          <h1 className="min-w-[328px] h-[48px] text-xl1 font-semibold text-hitam">
            Product Information
          </h1>
        </div>
        <div className="flex flex-col md:flex-row items-start justify-between mb-6 w-[1127px] max-w-full h-[222px] gap-[20px]">
          <div className="flex flex-col gap-[18px] w-[278px] h-[222px] md:w-1/3 ">
            <div className="flex items-center justify-between w-[278px] h-[44px]">
              <label className="min-w-[176px] h-[36px] text-[24px] leading-9 font-semibold text-biruMuda">
                Product Name
              </label>
              <span className="ml-3 w-[94px] h-[44px] p-2.5 bg-abuMuda rounded-[5px] gap-2.5 text-abu text-sm leading-6 flex items-center justify-center">
                Required
              </span>
            </div>
            <div className="text-biruMuda w-[278px] min-h-[160px] md:mt-0">
              <p className="font-poppins text-[14px] font-normal leading-[20px] text-justify">
                Nama produk minimal 40 karakter dengan memasukkan merek, jenis
                produk, warna, bahan, atau tipe.
                <br />
                <br />
                Disarankan untuk tidak menggunakan huruf kapital berlebih,
                memasukkan lebih dari 1 merek, dan kata-kata promosi.
              </p>
            </div>
          </div>
          <div className="flex items-start md:items-center justify-end w-full md:w-2/3 ">
            <input
              type="text"
              placeholder="Batik Pring Sedapur"
              className="input input-md border w-full max-w-[686px] min-h-[48px] border-abuMuda bg-putih rounded-md text-sm text-biruMuda"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start justify-between mb-6 w-[1127px] max-w-full h-[222px] gap-[20px] mt-20 mx-auto">
          <div className="flex flex-col gap-[18px] w-[278px] h-[222px] md:w-1/3 ">
            <div className="flex items-center justify-between w-[278px] h-[44px]">
              <label className="min-w-[176px] h-[36px] text-[24px] leading-9 font-semibold text-biruMuda">
                Category
              </label>
              <span className="ml-3 w-[94px] h-[44px] p-2.5 bg-abuMuda rounded-[5px] gap-2.5 text-abu text-sm leading-6 flex items-center justify-center">
                Required
              </span>
            </div>
            <div className="text-biruMuda w-[278px] min-h-[160px] md:mt-0">
              <p className="font-poppins text-[14px] font-normal leading-[20px] text-justify">
                Pilih kategori yang sesuai karena biaya layanan akan tergantung
                pada kategori. Jika pemilihan kategori kurang sesuai, maka
                kategori akan diubah oleh Admin
              </p>
            </div>
          </div>
          <div className="flex items-start md:items-center justify-end w-full  md:w-2/3">
            <select className=" select select-bordered input input-md border w-full max-w-[686px] min-h-[48px] border-abuMuda bg-putih rounded-md text-sm text-biruMuda">
              <option>Batik</option>
              <option>Han Solo</option>
              <option>Greedo</option>
            </select>
          </div>
        </div>
      </div>

      <div className="w-full max-w-[1156px] min-h-[862px] left-[142px]  top-[1008px] pt-[24px] pr-[22px] pb-[24px] pl-[22px] gap-[58px] mx-auto p-4 bg-putih text-hitam font-poppins rounded-md shadow-sm md:shadow-lg lg:mt-10 mb-20">
        <div className="flex flex-col md:flex-row items-start md:items-center mb-6">
          <h1 className="w-[230px] h-[48px] text-xl1 font-semibold text-hitam">
            Detail Product
          </h1>
        </div>
        <div className="flex flex-col md:flex-row items-start justify-between mb-6 w-[1127px]  h-[244px] gap-[149px]">
          <div className="flex flex-col gap-[18px] w-[278px] h-[222px] md:w-1/3">
            <div className="flex items-center justify-between w-[278px] h-[44px]">
              <label className="min-w-[176px] h-[36px] text-[24px] leading-9 font-semibold text-hitam">
                Photo Product
              </label>
              <span className="ml-3 w-[94px] h-[44px] p-2.5 bg-abuMuda rounded-[5px] gap-2.5 text-abu text-sm leading-6 flex items-center justify-center">
                Required
              </span>
            </div>
            <div className="text-biruMuda w-[278px] min-h-[160px] md:mt-0">
              <p className="font-poppins text-[14px] font-normal leading-[20px] text-justify">
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
          <div className="w-full min-w-[700px]  h-[244px] md:w-2/3 flex flex-wrap gap-[36px] md:mt-0 items-start md:items-center justify-start">
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

        <div className="flex flex-col md:flex-row justify-between mb-6 w-[1127px] h-[114px] gap-[149px] mt-14">
          <div className="flex flex-col gap-[18px] w-[278px] h-[114px] md:w-1/3">
            <div className="flex items-center justify-between w-[278px] h-[44px]">
              <label className="min-w-[172px] h-[36px] text-[24px] leading-9 font-semibold text-hitam">
                Video Product
              </label>
            </div>
            <div className="text-biruMuda w-[278px] min-h-[160px] md:mt-0">
              <p className="font-poppins text-[14px] font-normal leading-[20px] text-justify">
                Format video .mp4 dan mov. Disarankan dirasi maksimal 120 detik
                dan ukuran maks 100MB.
              </p>
            </div>
          </div>
          <div className="relative flex flex-row justify-start mb-6 gap-[36px] w-[1127px] ">
            <img
              src={video}
              alt="Foto 6"
              className="w-[108px] h-[107px] border"
            />
            <img src={batik} alt="Foto 6" className="w-[108px] h-[107px]" />
          </div>
        </div>

        <div className=" w-[1113px]  h-[234px] gap-[149px] flex flex-col md:flex-row items-start justify-between mb-6 mt-14">
          <div className="flex flex-col gap-[18px] w-[278px] h-[114px] md:w-1/3">
            <div className="flex items-center justify-between w-[278px] h-[44px]">
              <label className="min-w-[172px] h-[36px] text-[24px] leading-9 font-semibold text-hitam">
                Description
              </label>
            </div>
            <div className="text-biruMuda w-[278px] min-h-[160px] md:mt-0">
              <p className="font-poppins text-[14px] font-normal leading-[20px] text-justify">
                Pastikan deskripsi produk memuat penjelasan detail terkait
                produkmu agar pembeli mudah mengerti dan menemukan produkmu.
                <br />
                <br />
                Disarankan untuk tidak memasukkan info nomor HP, e-mail, dsb ke
                dalam deskripsi produk untuk melindungi data pribadimu.
              </p>
            </div>
          </div>
          <textarea
            className="border border-abuMuda min-w-[686px] h-[229px] flex flex-wrap gap-[1px] md:mt-0  rounded-lg bg-putih opacity-40 text-biruMuda font-poppins text-[16px] leading-[24px] font-normal px-4 py-4 overflow-hidden"
            value={`✔ Batik full tulis murah
✔ motif pring sedapur
✔ Material katun primissima
✔ Size 225 cm x 100 cm
----------------------------------------
✔ warna gambar mungkin agak sedikit berbeda dengan warna aslinya karena faktor kamera atau pencahayaan
✔ Original batik tulis tangan, garansi uang kembali jika produk adalah batik semi tulis, sablon lilin, tulis kombinasi, atau batik cetak`}></textarea>
        </div>
      </div>

      <div className="w-full max-w-[1156px] left-[142px] h-[596px] pt-[24px] pr-[22px] pb-[24px] pl-[22px] gap-[58px] mx-auto p-4 bg-putih text-hitam font-poppins rounded-md shadow-sm md:shadow-lg lg:mt-10 mb-20">
        <div className="flex flex-col md:flex-row items-start md:items-center mb-6">
          <h1 className="min-w-[328px] h-[48px] text-xl1 ml-4 font-semibold text-hitam">
            Product Information
          </h1>
        </div>
        <div className="flex flex-col md:flex-row items-start justify-between mb-6 w-[1127px] max-w-full h-[222px] gap-[20px]">
          <div className="flex flex-col gap-[18px] w-[278px] h-[222px] md:w-1/3 p-4 -mt-[14px]">
            <div className="flex items-center justify-between w-[278px] h-[44px]">
              <label className="min-w-[176px] h-[36px] text-[24px] leading-9 font-semibold text-biruMuda">
                Product Name
              </label>
              <span className="ml-3 w-[94px] h-[44px] p-2.5 bg-abuMuda rounded-[5px] gap-2.5 text-abu text-sm leading-6 flex items-center justify-center">
                Required
              </span>
            </div>
            <div className="text-biruMuda w-[278px] min-h-[160px] md:mt-0">
              <p className="font-poppins text-[14px] font-normal leading-[20px] text-justify">
                Nama produk minimal 40 karakter dengan memasukkan merek, jenis
                produk, warna, bahan, atau tipe.
                <br />
                <br />
                Disarankan untuk tidak menggunakan huruf kapital berlebih,
                memasukkan lebih dari 1 merek, dan kata-kata promosi.
              </p>
            </div>
          </div>
          <div className="flex items-start md:items-center justify-end w-full md:w-2/3 pr-[22px] ">
            <input
              type="text"
              placeholder="Batik Pring Sedapur"
              className="input input-md border w-full max-w-[686px] min-h-[48px] border-abuMuda bg-putih rounded-md text-sm text-biruMuda"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start justify-between mb-6 w-[1127px] max-w-full h-[222px] gap-[20px] mt-16">
          <div className="flex flex-col gap-[18px] w-[278px] h-[222px] md:w-1/3 p-4 -mt-[10px]">
            <div className="flex items-center justify-between w-[278px] h-[44px]">
              <label className="min-w-[176px] h-[36px] text-[24px] leading-9 font-semibold text-biruMuda">
                Category
              </label>
              <span className="ml-3 w-[94px] h-[44px] p-2.5 bg-abuMuda rounded-[5px] gap-2.5 text-abu text-sm leading-6 flex items-center justify-center">
                Required
              </span>
            </div>
            <div className="text-biruMuda w-[278px] min-h-[160px] md:mt-0">
              <p className="font-poppins text-[14px] font-normal leading-[20px] text-justify">
                Pilih kategori yang sesuai karena biaya layanan akan tergantung
                pada kategori. Jika pemilihan kategori kurang sesuai, maka
                kategori akan diubah oleh Admin
              </p>
            </div>
          </div>
          <div className="flex items-start md:items-center justify-end w-full  md:w-2/3 pr-[22px] ">
            <select className=" select select-bordered input input-md border w-full max-w-[686px] min-h-[48px] border-abuMuda bg-putih rounded-md text-sm text-biruMuda">
              <option>Batik</option>
              <option>Han Solo</option>
              <option>Greedo</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;


frc





import batik from "../../assets/batik-1.png";
import video from "../../assets/video.png";
import iconPrice from "../../assets/iconprice.png";

const EditProduct = () => {
  return (
    <div className=" bg-primary-100 w-full h-[2518px] top-[1962px] left-[1759px] gap-0 mx-auto font-poppins">
      <nav className="w-full h-[108px] left-[1px] px-6 py-0 mx-auto navbar bg-primary-100  justify-between  shadow-custom">
        <div className="flex-1">
          <a className="text-2xl text-secondary-50 font-semibold w-[203px] h-[32px] cursor-pointer">
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
      <div className="text-sm breadcrumbs text-neutral-40 p-2 gap-0.5">
        <ul className="w-[321px] h-[20px] top-[118px] left-[24px] ">
          <li>
            <a href="#" className="w-[68px] h-[20px] ml-4 mr-1">
              Dashboard
            </a>
          </li>
          <li>
            <a href="#" className="w-[103px] h-[20px] mr-3">
              Manage Product
            </a>
          </li>
          <li className="w-[77px] h-[20px]">Edit Product</li>
        </ul>
      </div>

      <div className="max-w-[198px] h-[48px] top-[212px] mt-[30px] left-[122px] ml-[100px]">
        <h1 className="text-[32px] leading-[48px] font-semibold text-primary-0">
          Edit Product
        </h1>
      </div>
      <div className="w-full max-w-[1156px] left-[142px] h-[596px] pt-[24px] pr-[22px] pb-[24px] pl-[22px] gap-[58px] mx-auto p-4 bg-primary-100 rounded-md shadow-sm md:shadow-lg lg:mt-10 mb-20">
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
          <div className="flex items-start md:items-center justify-end w-full md:w-2/3 ">
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
          <div className="flex items-start md:items-center justify-end w-full  md:w-2/3">
            <select className=" select select-bordered input input-md border w-[686px] min-h-[48px] border-base-300 bg-primary-100 rounded-md text-sm text-neutral-40">
              <option>Batik</option>
              <option>Han Solo</option>
              <option>Greedo</option>
            </select>
          </div>
        </div>
      </div>

      <div className="w-full max-w-[1156px] min-h-[862px] left-[142px]  top-[1008px] pt-[24px] pr-[22px] pb-[24px] pl-[22px] gap-[58px] mx-auto p-4 bg-putih rounded-md shadow-sm md:shadow-lg lg:mt-10 mb-20">
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
          <div className="w-full min-w-[700px]  h-[244px] md:w-2/3 flex flex-wrap gap-[36px] md:mt-0 items-start md:items-center justify-start">
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

        <div className=" w-[1113px]  h-[234px] gap-[149px] flex flex-col md:flex-row items-start justify-between mb-6 mt-14">
          <div className="flex flex-col gap-[18px] w-[278px] h-[114px] md:w-1/3">
            <div className="flex items-center justify-between w-[278px] h-[44px]">
              <label className="min-w-[172px] h-[36px] text-[24px] leading-9 font-semibold text-primary-0">
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
          <textarea
            className="border border-base-300 min-w-[686px] h-[229px] flex flex-wrap gap-[1px] md:mt-0  rounded-lg bg-primary-100 opacity-40 text-neutral-40 text-[16px] leading-[24px] font-normal px-4 py-4 overflow-hidden"
            value={`✔ Batik full tulis murah
✔ motif pring sedapur
✔ Material katun primissima
✔ Size 225 cm x 100 cm
----------------------------------------
✔ warna gambar mungkin agak sedikit berbeda dengan warna aslinya karena faktor kamera atau pencahayaan
✔ Original batik tulis tangan, garansi uang kembali jika produk adalah batik semi tulis, sablon lilin, tulis kombinasi, atau batik cetak`}></textarea>
        </div>
      </div>

      <div className="w-full max-w-[1156px] left-[142px] h-[345px] pt-[24px] pr-[22px] pb-[24px] pl-[22px] gap-[58px] mx-auto p-4 bg-putih text-primary-0 rounded-md shadow-sm md:shadow-lg lg:mt-10 mb-20">
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
          <div className="flex items-start md:items-center justify-end w-full md:w-2/3 ">
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
          <div className="relative">
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
      <div className="flex justify-end min-w-[333px] h-[46px] top-[240px] left-[965px] gap-[21px] pr-[80px]">
        <button className="btn w-[97px] h-[46px] rounded-lg pt-[3.5px] pr-[4px] pb-[3.5px] pl-[4px] gap-[2px] bg-primary-30 border-primary-30 text-base-400">
          Cancel
        </button>
        <button className="btn w-[97px] h-[46px] rounded-lg pt-[3.5px] pr-[4px] pb-[3.5px] pl-[4px] gap-[2px] bg-primary-30 border-primary-30 text-base-400">
          Draft
        </button>
        <button className="btn w-[97px] h-[46px] rounded-lg pt-[3.5px] pr-[4px] pb-[3.5px] pl-[4px] gap-[2px] bg-primary-30 border-primary-30 text-base-400">
          Save
        </button>
      </div>
    </div>
  );
};

export default EditProduct;
