import Navbar from "./navbar";
import IconDate from "../../assets/iconDate.png";
import IconLocation from "../../assets/iconLocation.png";
import Photo from "../../assets/photo.png";
import Photo1 from "../../assets/photo1.png";

export default function eventError() {
  return (
    <>
      <section className="section-addEvent">
        <Navbar />
        <div className=" text-sm font-normal breadcrumbs text-neutral-40 gap-[1px]">
          <ul className="w-[1391px] h-[20px] mx-auto">
            <li>
              <a href="#" className="w-[79px] h-[20px]">
                Dashboard
              </a>
            </li>
            <li>
              <a href="#" className="w-[100px] h-[20px] mr-4">
                Manage Event
              </a>
            </li>
            <li className="w-[106px] h-[20px]">Edit event</li>
          </ul>
        </div>

        <div className="w-[1156px] min-h-[2242px] gap-[50px] mx-auto mt-14 ">
          <h1 className="w-[290px] h-[48px] text-[32px] leading-[48px] font-semibold text-primary-0">
            Edit event
          </h1>
          <div className="event-information shadow-custom-1 shadow-custom-2 mt-10">
            <h1 className="w-[290px] h-[48px] text-[32px] leading-[48px] font-semibold text-primary-0 mb-10">
              Event Information
            </h1>

            <div className="flex flex-row items-start justify-between  w-[1112px] h-[142px] gap-[149px]">
              <div className="flex flex-col gap-[18px] w-[360px] h-[142px] ">
                <div className="flex items-center justify-between w-[360px] h-[44px]">
                  <label className="min-w-[176px] h-[36px] text-[24px] leading-9 font-semibold text-secondary-50">
                    Event Name
                  </label>
                  <span className="span-addEvent">Required</span>
                </div>
                <div className="text-secondary-50 w-[360px] h-[140px]">
                  <p className="text-[14px] font-normal leading-[20px] text-justify">
                    Nama event maksimal 40 karakter. Disarankan untuk tidak
                    menggunakan huruf kapital berlebih, memasukkan lebih dari 1
                    merek, dan kata kata promosi.
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder="Type here"
                  className="input-addEvent"
                />
              </div>
            </div>

            <div className="flex  md:flex-row items-start justify-between  w-[1112px] h-[142px] gap-[149px] mt-16">
              <div className="flex flex-col gap-[18px] w-[360px] h-[142px] ">
                <div className="flex items-center justify-between w-[360px] h-[44px]">
                  <label className="min-w-[176px] h-[36px] text-[24px] leading-9 font-semibold text-secondary-50">
                    Category
                  </label>
                  <span className="span-addEvent">Required</span>
                </div>
                <div className="text-secondary-50  w-[360px] min-h-[160px]">
                  <p className="text-[14px] font-normal leading-[20px] text-justify">
                    Pilih kategori yang sesuai karena biaya layanan akan
                    tergantung pada kategori. Jika pemilihan kategori kurang
                    sesuai, maka kategori akan diubah oleh Admin
                  </p>
                </div>
              </div>
              <div className="flex items-start md:items-center justify-end  md:w-3/5 font-semibold">
                <select className="dropdownInput-addEvent ">
                  <option disabled selected>
                    Pick your an option
                  </option>
                  <option>Festival</option>
                  <option>Greedo</option>
                </select>
              </div>
            </div>
          </div>

          <div className="div-detailEvent  shadow-custom-1 shadow-custom-2 ">
            <h1 className="w-[192px] h-[48px] text-[32px] leading-[48px] font-semibold text-primary-0 mb-10">
              Detail Event
            </h1>
            <div className="flex flex-row items-start justify-between  w-[1112px] h-[122px] gap-[149px]">
              <div className="flex flex-col gap-[18px] w-[360px] h-[122px] ">
                <div className="flex items-center justify-between w-[360px] h-[44px]">
                  <label className="min-w-[176px] h-[36px] text-[24px] leading-9 font-semibold text-secondary-50">
                    Location
                  </label>
                  <span className="span-addEvent">Required</span>
                </div>
                <div className="text-secondary-50 w-[360px] h-[60px]">
                  <p className="text-[14px] font-normal leading-[20px] text-justify">
                    Pastikan lokasi yang dimasukan akurat agar tidak ada
                    terjadinya kesalah pahaman dengan customer
                  </p>
                </div>
              </div>
              <div className="w-[700px]  h-[107px] flex flex-wrap gap-[24px]  items-start first-line:justify-start">
                <div className="flex items-center justify-center gap-[24px]">
                  <div className="w-[320px] h-[82px] items-center flex border-secondary-55 bg-primary-100 rounded-lg shadow-custom-1">
                    <input
                      type="text"
                      placeholder=" 
Lamban Pancasila, X3J6+GG3, Way
Mengaku, Lampung Barat,Balik Bukit 34874"
                      className=" input input-md w-[264px] h-[54px] text-base-100 bg-primary-100 rounded-md text-sm font-semibold  text-[16px] leading-[24px] overflow-hidden gap-[space-x-2]  opacity-70"
                    ></input>
                    <img
                      src={IconLocation}
                      alt="iconLocation"
                      className="w-[16px] h-[16px] mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-row items-start justify-between  w-[1112px] h-[102px] gap-[149px] mt-10">
              <div className="flex flex-col gap-[18px] w-[360px] h-[102px] ">
                <div className="flex items-center justify-between w-[360px] h-[44px]">
                  <label className="min-w-[176px] h-[36px] text-[24px] leading-9 font-semibold text-secondary-50">
                    Date
                  </label>
                  <span className="span-addEvent">Required</span>
                </div>
                <div className="text-secondary-50 w-[360px] h-[40px]">
                  <p className="text-[14px] font-normal leading-[20px] text-justify">
                    masukan tanggal event yang berisikan tahun, bulan, hari
                    dengan akurat
                  </p>
                </div>
              </div>
              <div className="w-[700px]  h-[107px] flex flex-wrap gap-[24px]  items-start first-line:justify-start">
                <div className="flex items-center justify-center gap-[24px]">
                  <div className="w-[320px] h-[46px] items-center flex border-secondary-55 bg-primary-100 rounded-lg shadow-custom-1">
                    <input
                      type="text"
                      placeholder="18/06/2024"
                      className="input input-md w-[264px] h-[20px] bg-primary-100 text-sm text-base-100 items-center justify-center  rounded-none mx-auto opacity-70 font-semibold"
                    ></input>
                    <img
                      src={IconDate}
                      alt="iconDate"
                      className="w-[16px] h-[16px] mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex  md:flex-row items-start justify-between w-[1112px]  h-[202px] gap-[149px] mt-14 ">
              <div className="flex flex-col gap-[18px] w-[360px] h-[202px] ">
                <div className="flex items-center justify-between w-[360px] h-[44px] gap-[15px]">
                  <label className="min-w-[172px] h-[36px] text-[24px] leading-9 font-semibold text-secondary-50">
                    Photo event
                  </label>
                  <span className="span-addEvent">Required</span>
                </div>
                <div className="text-secondary-50  w-[360px] min-h-[140px]">
                  <p className="text-[14px] font-normal leading-[20px] text-justify">
                    Format foto harus .jpg, jpeg,png dan ukuran minimal 300 x
                    300 px. <br></br> <br></br>
                    Pilih foto produk atau tarik dan letakkan hingga 7 foto
                    sekaligus di sini. Upload Minimal 5 foto yang menarik dan
                    berbeda satu sama lain untuk menarik perhatian pembeli.
                  </p>
                </div>
              </div>
              <div className="w-[700px]  h-[107px] flex flex-wrap gap-[24px]  items-start first-line:justify-start">
                <div className="flex items-center justify-center gap-[24px]">
                  <div className=" border-primary-0 flex items-center justify-center">
                    <div className="text-center">
                      <img
                        src={Photo1}
                        alt="photo1"
                        className="w-[106px] h-[107px] mx-auto"
                      />
                      <span className="w-[74px] h-[15px] mx-auto text-[12px] leading-[14.52px] text-primary-0"></span>
                    </div>
                  </div>
                </div>
                <div className="w-[108px] h-[107px] border border-dotted  border-primary-0 flex items-center justify-center">
                  <div className="text-center min-w-[69px] h-[47px]">
                    <img
                      src={Photo}
                      alt="photo"
                      className="w-[18px] h-[18px] mx-auto"
                    />
                    <span className="w-[69px] h-[15px] mx-auto text-[12px] leading-[14.52px] text-primary-0">
                      Tambah Foto
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-row items-start justify-between  w-[1112px] min-h-[229px] mt-10  gap-[149px] ">
              <div className="flex flex-col gap-[18px] w-[360px] h-[194px] ">
                <div className="flex items-center justify-between w-[360px] h-[44px]">
                  <label className="min-w-[360px] h-[36px] text-[24px] leading-9 font-semibold text-secondary-50 gap-[15px]">
                    Description
                  </label>
                </div>
                <div className="text-secondary-50 w-[360px] h-[140px]">
                  <p className="text-[14px] font-normal leading-[20px] text-justify">
                    Pastikan deskripsi produk memuat penjelasan detail terkait
                    produkmu agar pembeli mudah mengerti dan menemukan produkmu.{" "}
                    <br></br> <br></br>
                    Disarankan untuk tidak memasukkan info nomor HP, e-mail, dsb
                    ke dalam deskripsi produk untuk melindungi data pribadimu.
                  </p>
                </div>
              </div>
              <div className="flex items-center w-[603px] h-[229px] shadow-custom-1">
                <textarea
                  type="text"
                  placeholder="Karisma Event Nusantara Festival Budaya Sekala Bekhak ke 10 Tahun 2024 yang digelar Pemerintah Kabupaten Lampung Barat melalui Dinas Kepemudaan Olahraga dan Pariwisata (Disporapar) resmi dibuka, Minggu (18/6) di pelataran Gedung Budaya yang diberi nama Lamban Pancasila. 

Event yang dikemas dengan budaya tersebut, di buka langsung oleh Penjabat (Pj) Bupati Lampung Barat Drs. Nukman M.M melalui ketua Tim Penggerak Pemberdayaan Kesejahteraan Keluarga (TP-PKK) Dra. Zelda Naturi M.M didampingi sejumlah kepala Perangkat Daerah ditandai dengan pemukulan gong.
                  
Diketahui, Festival budaya Sekala Bekhak digelar salah satu tujuannya guna melestarikan seni budaya yang berada di Lampung Barat melalui berbagai perlombaan budaya, seperti nyambai, orkes gambus hingga ngelemang bebakhong.
                  
Pada Event yang bertajuk “Sekura” tersebut, ketua TP-PKK Lampung Barat bersama sejumlah ibu Pembina Kesejahteraan Keluarga (PKK) mengikuti langsung nari nyambai bersama siswa-siswi Tk Negeri 2 Liwa sebagai pembuka awal kegiatan lomba nyambai.
                  
Dalam sambutannya, Pj. Bupati Lampung Barat yang dibacakan kepala Dinas Kepemudaan Olahraga dan Pariwisata Drs. Dahlin M.Pd mengatakan, perhelatan seni dan budaya yang dikemas dalam Festival Sekala Bekhak merupakan event kepariwisataan yang akan menambah serta meningkatkan motivasi hingga semangat dalam menumbuhkembangkan dunia kepariwisataan Lampung Barat.
                  
“Tujuannya agar dunia pariwisata ke depannya lebih baik lagi serta mampu mengangkat nama Lampung Barat di kancah Nasional, regional bahkan mancanegara,” ungkapnya.
                  
Selain itu, Festival budaya Sekala Bekhak juga mempunyai makna pelestarian dan pembinaan terhadap aset serta potensi seni budaya di Lampung Barat, yang menurutnya memiliki nilai sangat tinggi.
                  
“Sehingga dengan Festival Sekala Bekhak ini diharapkan dapat menarik wisatawan berkunjung ke Kabupaten Lampung Barat dan dapat menarik investor dalam menanamkan modalnya dibidang kepariwisataan serta bidang lain yang berdampak pada kemajuan daerah,” Harapnya.
                  
Oleh karena itu, Dahlin berharap, agar ke depannya Event tahunan tersebut perlu ditingkatkan dan dikembangkan."
                  className="textarea-addEvent"
                />
              </div>
            </div>
          </div>

          <div className="w-[1156px] h-[517px] pt-[24px] pr-[22px] pb-[24px] pl-[22px] gap-[58px] mx-auto bg-primary-100 text-primary-0 mt-20 shadow-custom-1 shadow-custom-2">
            <div className="flex flex-col md:flex-row items-start md:items-center mb-4">
              <h1 className="min-w-[81px] h-[48px] text-[32px] leading-[48px] font-semibold text-primary-0">
                Price
              </h1>
            </div>
            <div className="flex flex-row items-start justify-between  w-[1112px] h-[87px] gap-[149px] mt-10">
              <div className="flex flex-col gap-[18px] w-[360px] h-[87px] ">
                <div className="flex items-center justify-between w-[360px] h-[44px]">
                  <label className="min-w-[360px] h-[29px] text-[24px] leading-[29.05px] font-semibold text-secondary-50">
                    Max Ticket
                  </label>
                </div>
                <div className="text-secondary-50 w-[360px] h-[40px]">
                  <p className="text-[14px] font-normal leading-[20px] text-justify">
                    Alur jumlah maksimal ticket yang tersedia untuk event ini
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <input
                  type="number"
                  placeholder="100"
                  className="input-addEvent"
                />
              </div>
            </div>

            <div className="flex md:flex-row items-start justify-between w-[1112px]  h-[48px] gap-[149px] mx-auto mt-16">
              <div className="flex flex-col gap-[18px] w-[360px] h-[122px] ">
                <div className="flex items-center justify-between w-[277px] h-[36px]">
                  <label className="min-w-[174px] h-[39px] text-[24px] leading-9 font-semibold text-secondary-50">
                    Regular Ticket
                  </label>
                  <span className="span-addEvent">Required</span>
                </div>
              </div>
              <div className="relative flex items-start md:items-center justify-end ">
                <input
                  type="number"
                  placeholder="   100.000"
                  className="input-addEvent placeholder:text-secondary-55 opacity-50"
                />
                <span className="absolute inset-y-5 left-2 flex items-center pointer-events-none text-[12px] leading-[18px] text-base-100 font-semibold">
                  RP.
                </span>
              </div>
            </div>
            <div className="flex md:flex-row items-start justify-between w-[1112px]  h-[48px] gap-[149px] mx-auto mt-16">
              <div className="flex flex-col gap-[18px] w-[360px] h-[122px] ">
                <div className="flex items-center justify-between w-[277px] h-[36px]">
                  <label className="min-w-[168px] h-[39px] text-[24px] leading-9 font-semibold text-secondary-50">
                    VIP Ticket
                  </label>
                  <span className="span-addEvent">Required</span>
                </div>
              </div>
              <div className="relative flex items-start md:items-center justify-end ">
                <input
                  type="number"
                  placeholder="   200.000"
                  className="input-addEvent placeholder:text-secondary-55 opacity-50"
                />
                <span className="absolute inset-y-5 left-2 flex items-center pointer-events-none text-[12px] leading-[18px] text-base-100 font-semibold ">
                  RP.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end min-w-[333px] h-[46px] top-[2550px] left-[966px] gap-[21px] pr-[135px] mt-10">
          <button className="btn-addEvent">Cancel</button>
          <button className="btn-addEvent">Draft</button>
          <button className="btn-addEvent">Save</button>
        </div>
      </section>
    </>
  );
}
