import Breadcrumbs from "../breadcrumb/Breadcrumbs";
import uploadImage from "../../assets/icons/form/Picture.svg";
import uploadVideo from "../../assets/icons/form/Video.svg";
import percent from "../../assets/icons/form/Percent.svg";

export default function AddProduct() {
  return (
    <>
      <section className="container">
        <Breadcrumbs />
        <form className="form-primary">
          <h1 className="title-form">Add Product</h1>

          <article className="form-card">
            <h2 className="form-card-title">Product Information</h2>

            <div className="form-card-box">
              <div className="question-box">
                <label className="w-full sm: xl:w-[360px] justify-between items-center inline-flex">
                  <span className="text-slate-500 sm:text-[16px] lg:text-[20px] xl:text-2xl font-semibold">
                    Product Name
                  </span>
                  <div className="sm:p-1 xl:p-2.5 bg-stone-300 rounded-[5px] justify-center items-center xl:gap-2.5 flex">
                    <span className="text-zinc-500 sm:text-[14px] text-base font-semibold">
                      Required
                    </span>
                  </div>
                </label>
                <p className="md:w-[222px] xl:w-[360px] text-justify text-slate-500 sm:text-[12px] lg:text-sm font-normal leading-tight font-poppins tracking-wider">
                  Nama produk minimal 40 karakter dengan memasukkan merek, jenis
                  produk, warna, bahan, atau tipe.
                </p>
              </div>
              <div className="question-input">
                <input
                  type="text"
                  placeholder="Type here"
                  className="sm:w-[248px] md:w-[360px] lg:w-[500px] xl:w-[603px] xl:h-[46px] self-stretch input input-bordered bg-primary-100"
                />
              </div>
            </div>

            <div className="form-card-box">
              <div className="question-box">
                <label className="w-full sm: xl:w-[360px] justify-between items-center inline-flex">
                  <div className="text-slate-500 sm:text-[16px] lg:text-[20px] xl:text-2xl font-semibold">
                    Category
                  </div>
                  <div className="sm:p-1 xl:p-2.5 bg-stone-300 rounded-[5px] justify-center items-center xl:gap-2.5 flex">
                    <div className="text-zinc-500 sm:text-[14px] text-base font-semibold">
                      Required
                    </div>
                  </div>
                </label>
                <p className="md:w-[222px] xl:w-[360px] text-justify text-slate-500 sm:text-[12px] lg:text-sm font-normal leading-tight font-poppins tracking-wider">
                  Pilih kategori yang sesuai karena biaya layanan akan
                  tergantung pada kategori. Jika pemilihan kategori kurang
                  sesuai, maka kategori akan diubah oleh Admin
                </p>
              </div>
              <div className="question-input">
                <select className="select select-bordered sm:w-[248px] md:w-[360px] lg:w-[500px] xl:w-[603px] xl:h-[46px] self-stretch bg-primary-100 lg:font-semibold text-xs text-primary-0">
                  <option disabled selected>
                    Pick Your Option
                  </option>
                  <option>Han Solo</option>
                  <option>Greedo</option>
                </select>
              </div>
            </div>
          </article>

          <article className="form-card">
            <h2 className="form-card-title">Detail Product</h2>

            <div className="form-card-box">
              <div className="question-box">
                <label className="w-full sm: xl:w-[360px] justify-between items-center inline-flex">
                  <div className="text-slate-500 sm:text-[16px] lg:text-[20px] xl:text-2xl font-semibold">
                    Photo Product
                  </div>
                  <div className="sm:p-1 xl:p-2.5 bg-stone-300 rounded-[5px] justify-center items-center xl:gap-2.5 flex">
                    <div className="text-zinc-500 sm:text-[14px] text-base font-semibold">
                      Required
                    </div>
                  </div>
                </label>
                <p className="md:w-[222px] xl:w-[360px] text-justify text-slate-500 sm:text-[12px] lg:text-sm font-normal leading-tight font-poppins tracking-wider">
                  Format foto harus .jpg, jpeg,png dan ukuran minimal 300 x 300
                  px.
                </p>
              </div>
              <div className="media-input">
                <label
                  htmlFor="file-upload"
                  className="cursor-pointer gap-2 mx-auto">
                  <img
                    src={uploadImage}
                    alt="upload-icon"
                    className="xl:w-6 xl:h-6 mx-auto"
                  />
                  <span className="text-black text-xs font-light">
                    Upload Foto
                  </span>
                </label>
                <input
                  id="file-upload"
                  type="file"
                  accept="image/*"
                  className="hidden"
                />
              </div>
            </div>

            <div className="form-card-box">
              <div className="question-box">
                <label className="w-full sm: xl:w-[360px] justify-between items-center inline-flex">
                  <div className="text-slate-500 sm:text-[16px] lg:text-[20px] xl:text-2xl font-semibold">
                    Video Product
                  </div>
                </label>
                <p className="md:w-[222px] xl:w-[360px] text-justify text-slate-500 sm:text-[12px] lg:text-sm font-normal leading-tight font-poppins tracking-wider">
                  Format video .mp4 dan mov. Disarankan dirasi maksimal 120
                  detik dan ukuran maks 100MB.
                </p>
              </div>
              <div className="media-input">
                <label
                  htmlFor="file-upload"
                  className="cursor-pointer gap-2 mx-auto">
                  <img
                    src={uploadVideo}
                    alt="upload-icon"
                    className="xl:w-6 xl:h-6 mx-auto"
                  />
                  <span className="text-black text-xs font-light">
                    Upload Video
                  </span>
                </label>
                <input
                  id="file-upload"
                  type="file"
                  accept="image/*"
                  className="hidden"
                />
              </div>
            </div>

            <div className="form-card-box">
              <div className="question-box">
                <label className="w-full sm: xl:w-[360px] justify-between items-center inline-flex">
                  <div className="text-slate-500 sm:text-[16px] lg:text-[20px] xl:text-2xl font-semibold">
                    Description
                  </div>
                  <div className="sm:p-1 xl:p-2.5 bg-stone-300 rounded-[5px] justify-center items-center xl:gap-2.5 flex">
                    <div className="text-zinc-500 sm:text-[14px] text-base font-semibold">
                      Required
                    </div>
                  </div>
                </label>
                <p className="md:w-[222px] xl:w-[360px] text-justify text-slate-500 sm:text-[12px] lg:text-sm font-normal leading-tight font-poppins tracking-wider">
                  Pastikan deskripsi produk memuat penjelasan detail terkait
                  produkmu agar pembeli mudah mengerti dan menemukan produkmu.
                </p>
              </div>
              <div className="question-input">
                <textarea
                  className=" sm:w-[248px] md:w-[360px] lg:w-[500px] xl:w-[603px] xl:h-[229px] resize-none self-stretch textarea textarea-bordered bg-primary-100"
                  placeholder="Bio"></textarea>
              </div>
            </div>

            <div className="form-card-box">
              <div className="question-box">
                <label className="w-full sm: xl:w-[360px] justify-between items-center inline-flex">
                  <div className="text-slate-500 sm:text-[16px] lg:text-[20px] xl:text-2xl font-semibold">
                    Size
                  </div>
                  <div className="sm:p-1 xl:p-2.5 bg-stone-300 rounded-[5px] justify-center items-center xl:gap-2.5 flex">
                    <div className="text-zinc-500 sm:text-[14px] text-base font-semibold">
                      Required
                    </div>
                  </div>
                </label>
                <p className="md:w-[222px] xl:w-[360px] text-justify text-slate-500 sm:text-[12px] lg:text-sm font-normal leading-tight font-poppins tracking-wider">
                  Pastikan memilih checkbox untuk ukuran baju yang tersedia,
                  jika tidak ada ukuran tidak diwajibkan mengisi
                </p>
              </div>
              <div className="question-input w-full flex justify-between sm:w-[248px] md:w-[360px] lg:w-[500px] xl:w-[603px] xl:h-[229px]">
                <div className="form-control shadow md:w-[95px] sm:px-1">
                  <label className="label cursor-pointer">
                    <span className="label-text font-bold text-primary-0">
                      S
                    </span>
                    <input
                      type="checkbox"
                      defaultChecked
                      className="checkbox"
                    />
                  </label>
                </div>
                <div className="form-control shadow md:w-[95px] sm:px-1">
                  <label className="label cursor-pointer">
                    <span className="label-text font-bold text-primary-0">
                      M
                    </span>
                    <input
                      type="checkbox"
                      defaultChecked
                      className="checkbox"
                    />
                  </label>
                </div>
                <div className="form-control shadow md:w-[95px] sm:px-1">
                  <label className="label cursor-pointer">
                    <span className="label-text font-bold text-primary-0">
                      L
                    </span>
                    <input
                      type="checkbox"
                      defaultChecked
                      className="checkbox"
                    />
                  </label>
                </div>
                <div className="form-control shadow md:w-[95px] sm:px-1">
                  <label className="label cursor-pointer">
                    <span className="label-text font-bold text-primary-0">
                      XL
                    </span>
                    <input
                      type="checkbox"
                      defaultChecked
                      className="checkbox"
                    />
                  </label>
                </div>
                <div className="form-control shadow md:w-[95px] sm:px-1">
                  <label className="label cursor-pointer">
                    <span className="label-text font-bold text-primary-0">
                      XXL
                    </span>
                    <input
                      type="checkbox"
                      defaultChecked
                      className="checkbox"
                    />
                  </label>
                </div>
                <div className="form-control shadow md:w-[95px] sm:px-1">
                  <label className="label cursor-pointer">
                    <span className="label-text font-bold text-primary-0">
                      XXXL
                    </span>
                    <input
                      type="checkbox"
                      defaultChecked
                      className="checkbox"
                    />
                  </label>
                </div>
              </div>
            </div>
          </article>

          <article className="form-card">
            <h2 className="form-card-title">Price</h2>

            <div className="form-card-box">
              <div className="question-box">
                <label className="w-full sm: xl:w-[360px] justify-between items-center inline-flex">
                  <div className="text-slate-500 sm:text-[16px] lg:text-[20px] xl:text-2xl font-semibold">
                    Minimum Order
                  </div>
                </label>
                <p className="md:w-[222px] xl:w-[360px] text-justify text-slate-500 sm:text-[12px] lg:text-sm font-normal leading-tight font-poppins tracking-wider">
                  Alur jumlah minimum yang harus dibeli untuk produk ini
                </p>
              </div>
              <div className="question-input">
                <input
                  type="text"
                  placeholder="Type here"
                  className="sm:w-[248px] md:w-[360px] lg:w-[500px] xl:w-[603px] xl:h-[46px] self-stretch input input-bordered bg-primary-100"
                />
              </div>
            </div>

            <div className="form-card-box">
              <div className="question-box">
                <label className="w-full sm: xl:w-[360px] justify-between items-center inline-flex">
                  <div className="text-slate-500 sm:text-[16px] lg:text-[20px] xl:text-2xl font-semibold">
                    Unit Price
                  </div>
                  <div className="sm:p-1 xl:p-2.5 bg-stone-300 rounded-[5px] justify-center items-center xl:gap-2.5 flex">
                    <div className="text-zinc-500 sm:text-[14px] text-base font-semibold">
                      Required
                    </div>
                  </div>
                </label>
                <p className="md:w-[222px] xl:w-[360px] text-justify text-slate-500 sm:text-[12px] lg:text-sm font-normal leading-tight font-poppins tracking-wider">
                  Masukan harga barang sesuai ketentuan anda
                </p>
              </div>
              <div className="question-input-icon input input-bordered bg-primary-100 lg:font-semibold text-xs">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 15 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M5.148 9L3.3 5.736H2.508V9H0.828V0.624H3.972C4.62 0.624 5.172 0.74 5.628 0.972C6.084 1.196 6.424 1.504 6.648 1.896C6.88 2.28 6.996 2.712 6.996 3.192C6.996 3.744 6.836 4.244 6.516 4.692C6.196 5.132 5.72 5.436 5.088 5.604L7.092 9H5.148ZM2.508 4.476H3.912C4.368 4.476 4.708 4.368 4.932 4.152C5.156 3.928 5.268 3.62 5.268 3.228C5.268 2.844 5.156 2.548 4.932 2.34C4.708 2.124 4.368 2.016 3.912 2.016H2.508V4.476ZM14.6235 3.216C14.6235 3.664 14.5155 4.084 14.2995 4.476C14.0915 4.868 13.7595 5.184 13.3035 5.424C12.8555 5.664 12.2875 5.784 11.5995 5.784H10.1955V9H8.5155V0.624H11.5995C12.2475 0.624 12.7995 0.736 13.2555 0.96C13.7115 1.184 14.0515 1.492 14.2755 1.884C14.5075 2.276 14.6235 2.72 14.6235 3.216ZM11.5275 4.428C11.9915 4.428 12.3355 4.324 12.5595 4.116C12.7835 3.9 12.8955 3.6 12.8955 3.216C12.8955 2.4 12.4395 1.992 11.5275 1.992H10.1955V4.428H11.5275Z"
                    fill="#1F2937"
                  />
                </svg>
                <input type="text" placeholder="Type here" className="grow" />
              </div>
            </div>

            <div className="form-card-box">
              <div className="question-box">
                <label className="w-full sm: xl:w-[360px] justify-between items-center inline-flex">
                  <div className="text-slate-500 sm:text-[16px] lg:text-[20px] xl:text-2xl font-semibold">
                    Discount
                  </div>
                </label>
                <p className="md:w-[222px] xl:w-[360px] text-justify text-slate-500 sm:text-[12px] lg:text-sm font-normal leading-tight font-poppins tracking-wider">
                  Masukan discount jika memang ada, dan masukan angka 1 - 100
                  persen saja
                </p>
              </div>
              <div className="question-input-icon input lg:font-semibold text-xs input-bordered bg-primary-100">
                <img src={percent} alt="" className="w-4 " />
                <input type="text" placeholder="Type here" className="grow" />
              </div>
            </div>
          </article>

          <div className="w-full inline-flex sm:gap-6 xl:gap-[21px] sm:justify-center md:justify-end">
            <button className="btn btn-color-secondary btn-form-primary">
              Cancel
            </button>
            <button className="btn btn-color-primary btn-form-primary">
              Save
            </button>
          </div>

          <br />
        </form>
      </section>
    </>
  );
}
