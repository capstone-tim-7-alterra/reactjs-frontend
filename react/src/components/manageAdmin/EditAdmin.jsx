// import Navbar from "./navbar";
import Breadcrumb from "../breadcrumb/Breadcrumbs";
import Photo from "../../assets/imgEvent/photo.png";
import IconEye from "../../assets/icons/article/Eye.svg";

export default function AddAdmin() {
  return (
    <>
      <section className="section-editProduct mt-4">
        <Breadcrumb />
        <div className="w-[1156px] h-[1634px] gap-[50px] mx-auto mt-14 font-poppins ">
          <h1 className="w-[258px] h-[48px] text-[32px] leading-[48px] font-semibold text-primary-0 mb-10">
            Add new admin
          </h1>
          <div className="w-[1156px] h-[1536px] pt-[24px] pr-[22px] pb-[24px] pl-[22px] gap-[58px] shadow-custom-1">
            <h1 className="w-[302px] h-[48px] text-[32px] leading-[48px] font-semibold text-primary-0 mb-10 mt-5">
              Profile Information
            </h1>
            <div className="flex  md:flex-row items-start justify-between w-[629px]  h-[202px] gap-[149px] mt-14 ">
              <div className="flex flex-col gap-[18px] w-[278px] h-[94px] ">
                <div className="flex items-center justify-between w-[360px] h-[44px] gap-[15px]">
                  <label className="min-w-[172px] h-[36px] text-[24px] leading-9 font-semibold text-secondary-50">
                    Photo profile
                  </label>
                </div>
                <div className="text-secondary-50  w-[360px] min-h-[140px]">
                  <p className="text-[14px] font-normal leading-[20px] text-justify">
                    Format foto harus .jpg, jpeg,png dan <br></br>
                    ukuran minimal 300 x 300 px.
                  </p>
                </div>
              </div>
              <div className="w-[700px]  h-[107px] flex flex-wrap gap-[24px]  items-start first-line:justify-start">
                <div className="w-[202px] h-[202px] pt-[30px] pr-[21px] pb-[30px] pl-[21px] gap-[10px] border border-dotted  border-primary-0 flex items-center justify-center">
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
                </div>
              </div>
            </div>

            <div className="flex flex-row items-start justify-between  w-[1113px] h-[102px] gap-[149px] mt-14">
              <div className="flex flex-col gap-[18px] w-[278px] h-[102px] ">
                <div className="flex items-center justify-between w-[278px] h-[44px]">
                  <label className="min-w-[147px] h-[36px] text-[24px] leading-9 font-semibold text-secondary-50 ">
                    Email
                  </label>
                  <span className="span-Event">Required</span>
                </div>
                <div className="text-secondary-50 w-[360px] h-[140px]">
                  <p className="text-[14px] font-normal leading-[20px] text-justify w-[278px] h-[40px]">
                    Masukan Email terdaftar untuk melakukan verifikasi atau yang
                    lainnya.
                  </p>
                </div>
              </div>
              <div className="flex items-center opacity-90">
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-md border w-[686px] h-[48px] border-base-300 bg-primary-100 rounded-md text-sm text-base-100 font-semibold opacity-70"
                />
              </div>
            </div>

            <div className="flex flex-row items-start justify-between  w-[1113px] h-[162px] gap-[149px] mt-14">
              <div className="flex flex-col gap-[18px] w-[278px] h-[162px] ">
                <div className="flex items-center justify-between w-[278px] h-[44px]">
                  <label className="min-w-[127px] h-[36px] text-[24px] leading-9 font-semibold text-secondary-50 ">
                    Username
                  </label>
                  <span className="span-Event">Required</span>
                </div>
                <div className="text-secondary-50 w-[360px] h-[140px]">
                  <p className="text-[14px] font-normal leading-[20px] text-justify w-[278px] h-[100px]">
                    Nama username maximal 100 karakter dan jangan menggunakan
                    simbol <br></br> <br></br>
                    Disarankan untuk tidak menggunakan huruf kapital berlebih.
                  </p>
                </div>
              </div>
              <div className="flex items-center opacity-90">
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-md border w-[686px] h-[48px] border-base-300 bg-primary-100 rounded-md text-sm text-base-100 font-semibold opacity-70"
                />
              </div>
            </div>

            <div className="flex flex-row items-start justify-between w-[1113px] h-[162px] gap-[149px] mt-14">
              <div className="flex flex-col gap-[18px] w-[278px] h-[162px] ">
                <div className="flex items-center justify-between w-[278px] h-[44px]">
                  <label className="min-w-[147px] h-[36px] text-[24px] leading-9 font-semibold text-secondary-50 ">
                    First Name
                  </label>
                  <span className="span-Event">Required</span>
                </div>
                <div className="text-secondary-50 w-[360px] h-[140px]">
                  <p className="text-[14px] font-normal leading-[20px] text-justify w-[278px] h-[100px]">
                    Nama username maximal 100 karakter dan jangan menggunakan
                    simbol <br></br> <br></br>Disarankan untuk tidak menggunakan
                    huruf kapital berlebih.
                  </p>
                </div>
              </div>
              <div className="flex items-center opacity-90">
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-md border w-[686px] h-[48px] border-base-300 bg-primary-100 rounded-md text-sm text-base-100 font-semibold opacity-70"
                />
              </div>
            </div>

            <div className="flex flex-row items-start justify-between w-[1113px] h-[162px] gap-[149px] mt-14">
              <div className="flex flex-col gap-[18px] w-[278px] h-[162px] ">
                <div className="flex items-center justify-between w-[278px] h-[44px]">
                  <label className="min-w-[147px] h-[36px] text-[24px] leading-9 font-semibold text-secondary-50 ">
                    Last Name
                  </label>
                  <span className="span-Event">Required</span>
                </div>
                <div className="text-secondary-50 w-[360px] h-[140px]">
                  <p className="text-[14px] font-normal leading-[20px] text-justify w-[278px] h-[100px]">
                    Nama username maximal 100 karakter dan jangan menggunakan
                    simbol <br></br> <br></br>Disarankan untuk tidak menggunakan
                    huruf kapital berlebih.
                  </p>
                </div>
              </div>
              <div className="flex items-center opacity-90">
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-md border w-[686px] h-[48px] border-base-300 bg-primary-100 rounded-md text-sm text-base-100 font-semibold opacity-70"
                />
              </div>
            </div>

            <div className="flex  md:flex-row items-start justify-between  w-[1113px] h-[102px] gap-[149px] mt-14">
              <div className="flex flex-col gap-[18px] w-[278px] h-[102px] ">
                <div className="flex items-center justify-between w-[278px] h-[44px]">
                  <label className="min-w-[82px] h-[36px] text-[24px] leading-9 font-semibold text-secondary-50">
                    Admin
                  </label>
                  <span className="span-Event">Required</span>
                </div>
                <div className="text-secondary-50  w-[360px] min-h-[160px]">
                  <p className="text-[14px] font-normal leading-[20px] text-justify w-[278px] h-[40px]">
                    Pilih Admin yang sesuai karena super admin dan admin berbeda
                    fungsi
                  </p>
                </div>
              </div>
              <div className="flex items-start md:items-center justify-end  font-semibold">
                <select className="select select-bordered border w-[686px] h-[48px] border-base-300 bg-primary-100 rounded-md text-sm text-base-100">
                  <option disabled selected>
                    Pick your an option
                  </option>
                  <option>SuperAdmin</option>
                  <option>Admin</option>
                </select>
              </div>
            </div>

            <div className="flex flex-row items-start justify-between w-[1113px] h-[142px] gap-[149px] mt-14">
              <div className="flex flex-col gap-[18px] w-[278px] h-[142px] ">
                <div className="flex items-center justify-between w-[278px] h-[44px]">
                  <label className="min-w-[119px] h-[36px] text-[24px] leading-9 font-semibold text-secondary-50 ">
                    Password
                  </label>
                  <span className="span-Event">Required</span>
                </div>
                <div className="text-secondary-50 w-[360px] h-[140px]">
                  <p className="text-[14px] font-normal leading-[20px] text-justify w-[278px] h-[80px]">
                    masukan password dengan minimal 1 huruf kapital, wajib
                    menggunakan angka dan jangan menggunakan simbol
                  </p>
                </div>
              </div>
              <div className="relative flex items-center opacity-90">
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-md border w-[686px] h-[48px] border-base-300 bg-primary-100 rounded-md text-sm text-base-100 font-semibold opacity-70 pr-10"
                />
                <img
                  src={IconEye}
                  alt="iconeye"
                  className="absolute right-3 w-[16px] h-[16px]"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end min-w-[424px] h-[60px] top-[2348px] left-[875px] gap-[24px] pr-[135px] mt-10">
          <button className="btn-cancel">Cancel</button>
          <button className="btn-Event">Save</button>
        </div>
      </section>
    </>
  );
}
