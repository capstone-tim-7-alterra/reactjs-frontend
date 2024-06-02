// Done
import batik1 from "../../assets/batik-1.png";
import batik2 from "../../assets/batik-2.png";
import batik3 from "../../assets/batik-3.png";
import batik4 from "../../assets/batik-4.png";
import batik5 from "../../assets/batik-5.png";
import video from "../../assets/video.png";
import iconimg from "../../assets/iconimg.png";
import Navbar from "./navbar";

export default function EditProduct() {
  return (
    <>
      <section className="section-editProduct">
        <Navbar />
        <div className=" text-sm font-normal breadcrumbs text-neutral-40 gap-[1px]">
          <ul className="w-[1392px] h-[20px] mx-auto">
            <li>
              <a href="#" className="w-[79px] h-[20px]">
                Dashboard
              </a>
            </li>
            <li>
              <a href="#" className="w-[117px] h-[20px] mr-4">
                Manage Product
              </a>
            </li>
            <li className="w-[77px] h-[20px]">Edit Product</li>
          </ul>
        </div>

        <div className="w-[1156px] h-[1897px] gap-[50px] mx-auto mt-14 ">
          <h1 className="w-[1156px] h-[48px] text-[32px] leading-[48px] font-semibold text-primary-0 mx-auto">
            Edit Product
          </h1>
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
                    Nama produk minimal 40 karakter dengan memasukkan merek,
                    jenis produk, warna, bahan, atau tipe.
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder="Batik Pring Sedapur"
                  className="input-editProduct"
                />
              </div>
            </div>

            <div className="flex  md:flex-row items-start justify-between  w-[1112px] h-[142px] gap-[149px] mt-14">
              <div className="flex flex-col gap-[18px] w-[360px] h-[142px] ">
                <div className="flex items-center justify-between w-[360px] h-[44px]">
                  <label className="min-w-[176px] h-[36px] text-[24px] leading-9 font-semibold text-secondary-50">
                    Category
                  </label>
                  <span className="span-editProduct">Required</span>
                </div>
                <div className="text-secondary-50  w-[360px] min-h-[160px]">
                  <p className="text-[14px] font-normal leading-[20px] text-justify">
                    Pilih kategori yang sesuai karena biaya layanan akan
                    tergantung pada kategori. Jika pemilihan kategori kurang
                    sesuai, maka kategori akan diubah oleh Admin
                  </p>
                </div>
              </div>
              <div className="flex items-start md:items-center justify-end  md:w-3/5">
                <select className="dropdownInput-editProduct">
                  <option>Batik</option>
                  <option>Han Solo</option>
                  <option>Greedo</option>
                </select>
              </div>
            </div>
          </div>

          <div className="div-detailProduct  shadow-custom-1 shadow-custom-2">
            <h1 className="w-[328px] h-[48px] text-[32px] leading-[48px] font-semibold text-primary-0 mb-10">
              Detail Product
            </h1>
            <div className="flex md:flex-row items-start justify-between mb-6 w-[1112px]  h-[238px] gap-[149px]">
              <div className="flex flex-col gap-[18px] w-[360px] h-[222px] ">
                <div className="flex items-center justify-between w-[360px] h-[44px]">
                  <label className="min-w-[176px] h-[36px] text-[24px] leading-9 font-semibold text-secondary-50">
                    Photo Product
                  </label>
                  <span className="span-editProduct">Required</span>
                </div>
                <div className="text-secondary-50  w-[360px] min-h-[160px]">
                  <p className="text-[14px] font-normal leading-[20px] text-justify">
                    Format foto harus .jpg, jpeg,png dan ukuran minimal 300 x
                    300 px.
                  </p>
                </div>
              </div>
              <div className=" min-w-[603px]  h-[238px] md:w-2/5 flex flex-wrap gap-[24px]  items-start md:items-center justify-start ">
                <div className="border  flex items-center justify-center ">
                  <img
                    src={batik1}
                    alt="Foto 6"
                    className="w-[108px] h-[107px] border  mx-auto "
                  />
                </div>
                <div className="border  flex items-center justify-center">
                  <img
                    src={batik2}
                    alt="Foto 6"
                    className="w-[108px] h-[107px] mx-auto"
                  />
                </div>
                <div className="border  flex items-center justify-center">
                  <img
                    src={batik3}
                    alt="Foto 6"
                    className="w-[108px] h-[107px] mx-auto"
                  />
                </div>
                <div className="border  flex items-center justify-center">
                  <img
                    src={batik4}
                    alt="Foto 6"
                    className="w-[108px] h-[107px] mx-auto"
                  />
                </div>
                <div className="border  flex items-center justify-center">
                  <img
                    src={batik5}
                    alt="Foto 6"
                    className="w-[108px] h-[107px] mx-auto"
                  />
                </div>
                <div className="w-[108px] h-[107px] border border-dotted  border-primary-0 flex items-center justify-center">
                  <div className="text-center">
                    <img
                      src={iconimg}
                      alt="Foto 6"
                      className="w-[24px] h-[24px] mx-auto"
                    />
                    <span className="w-[74px] h-[15px] mx-auto text-[12px] leading-[14.52px] text-primary-0">
                      Tambah Foto
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex  md:flex-row items-start justify-between w-[1112px]  h-[107px] gap-[149px] mt-14 ">
              <div className="flex flex-col gap-[18px] w-[360px] h-[94px] ">
                <div className="flex items-center justify-between w-[360px] h-[36px] gap-[15px]">
                  <label className="min-w-[172px] h-[36px] text-[24px] leading-9 font-semibold text-secondary-50">
                    Video Product
                  </label>
                </div>
                <div className="text-secondary-50  w-[360px] min-h-[160px]">
                  <p className="text-[14px] font-normal leading-[20px] text-justify">
                    Format video .mp4 dan mov. Disarankan dirasi maksimal 120
                    detik dan ukuran maks 100MB.
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
                  <div className="w-[108px] h-[107px] border border-dotted  border-primary-0 flex items-center justify-center">
                    <div className="text-center">
                      <img
                        src={iconimg}
                        alt="Foto 6"
                        className="w-[24px] h-[24px] mx-auto"
                      />
                      <span className="w-[74px] h-[15px] mx-auto text-[12px] leading-[14.52px] text-primary-0">
                        Tambah Foto
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-row items-start justify-between  w-[1112px] h-[122px] gap-[149px] mt-10">
              <div className="flex flex-col gap-[18px] w-[360px] h-[122px] ">
                <div className="flex items-center justify-between w-[360px] h-[44px]">
                  <label className="min-w-[176px] h-[36px] text-[24px] leading-9 font-semibold text-secondary-50">
                    Product Name
                  </label>
                  <span className="span-editProduct">Required</span>
                </div>
                <div className="text-secondary-50 w-[360px] h-[60px]">
                  <p className="text-[14px] font-normal leading-[20px] text-justify">
                    Nama produk minimal 40 karakter dengan memasukkan merek,
                    jenis produk, warna, bahan, atau tipe.
                  </p>
                </div>
              </div>
              <div className="flex items-center">
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
                  className="textarea-editProduct"
                />
              </div>
            </div>
          </div>

          <div className="product-Price shadow-custom-1 shadow-custom-2">
            <div className="flex flex-col md:flex-row items-start md:items-center mb-4">
              <h1 className="min-w-[81px] h-[48px] text-[32px] leading-[48px] font-semibold text-primary-0">
                Price
              </h1>
            </div>
            <div className="flex flex-row items-start justify-between  w-[1112px] h-[87px] gap-[149px]">
              <div className="flex flex-col gap-[18px] w-[360px] h-[87px] ">
                <div className="flex items-center justify-between w-[360px] h-[44px]">
                  <label className="min-w-[360px] h-[29px] text-[24px] leading-[29.05px] font-semibold text-secondary-50">
                    Product Name
                  </label>
                </div>
                <div className="text-secondary-50 w-[360px] h-[40px]">
                  <p className="text-[14px] font-normal leading-[20px] text-justify">
                    Alur jumlah minimum yang harus dibeli untuk produk ini
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <input
                  type="number"
                  placeholder="Type here"
                  className="input-editProduct"
                />
              </div>
            </div>

            <div className="flex md:flex-row items-start justify-between w-[1113px]  h-[46px] gap-[149px] mx-auto mt-20">
              <div className="flex flex-col gap-[18px] w-[360px] h-[122px] ">
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
              <div className="relative flex items-start md:items-center justify-end ">
                <input
                  type="number"
                  placeholder="   Type here"
                  className="input-editProduct placeholder:text-secondary-55"
                />
                <span
                  className="absolute inset-y-5 left-2 flex items-center pointer-events-none text-[12px] leading-[18px] text-base-100 font-semibold
              ">
                  RP.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end min-w-[333px] h-[46px] top-[2230px] left-[965px] gap-[21px] pr-[135px]">
          <button className="btn-editProduct">Cancel</button>
          <button className="btn-editProduct">Draft</button>
          <button className="btn-editProduct">Save</button>
        </div>
      </section>
    </>
  );
}
