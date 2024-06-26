import Photo from "../../assets/images/imgEvent/photo.png";
import Photo1 from "../../assets/images/imgEvent/photo1.png";
import IconTicket from "../../assets/images/imgEvent/iconTicket.png";
import XCircle from "../../assets/images/imgEvent/xCircle.png";
import Clock from "../../assets/images/imgEvent/clock.png";
import Button from "../../assets/images/imgEvent/button.png";
import DateEvent from "../../assets/images/imgEvent/dateEvent.png";
import Location from "../../assets/images/imgEvent/location.png";
import Breadcrumb from "../breadcrumbAdmin/Breadcrumbs";

export default function EditEvent() {
  
  const [imageBlob, setImageBlob] = useState("");
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  async function fetchAdmin() {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.get(
        "https://kreasinusantara.shop/api/v1/admin/search?limit=5&offset=0&item=" +
          username,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // setResData(response.data);
      setFormData(response.data.data[0]); // data adalah array admin
      setImageBlob(response.data.data[0].photo);
    } catch (error) {
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
    }
  }

  useEffect(() => {
    fetchAdmin();
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      const r = new FileReader();
      r.onload = function (e) {
        setImageBlob(r.result);
      };
      r.readAsDataURL(files[0]);

      console.log("File selected:", files);
      setFormData({
        ...formData,
        image: files[0], // Store the selected file
      });
    } else if (name === "is_super_admin") {
      setFormData({
        ...formData,
        is_super_admin: value === "SuperAdmin", // Set boolean based on selection
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleCancel = () => {
    navigate("/dashboard/manage-admin");
  };

  return (
    <>
      <section className="section-Event">
        <Breadcrumb />

        <div className="w-[1156px] min-h-[2071px] gap-[50px] mx-auto mt-14 font-poppins ">
          <h1 className="w-[160px] h-[48px] text-[32px] leading-[48px] font-semibold text-primary-0">
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
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder="Festival Sekala Bekhak"
                  className="input-Event"
                />
              </div>
            </div>

            <div className="flex  md:flex-row items-start justify-between  w-[1112px] h-[142px] gap-[149px] mt-16">
              <div className="flex flex-col gap-[18px] w-[360px] h-[142px] ">
                <div className="flex items-center justify-between w-[360px] h-[44px]">
                  <label className="min-w-[176px] h-[36px] text-[24px] leading-9 font-semibold text-secondary-50">
                    Category
                  </label>
                  <span className="span-Event">Required</span>
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
                <select className="dropdownInput-Event ">
                  <option disabled selected>
                    Pick your an option
                  </option>
                  <option>Festival</option>
                  <option>Greedo</option>
                </select>
                <img
                  src={Button}
                  alt="button"
                  className="w-[56px] h-[52px] rounded-lg ga-[8px] mx-auto "
                />
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
                  <span className="span-Event">Required</span>
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
                  <div className="w-[603px] h-[46px] items-center flex border border-base-300 bg-primary-100 rounded-lg">
                    <input
                      type="text"
                      placeholder="Lamban Pancasila, X3J6+GG3, Way Mengaku, Lampung Barat, Balik Bukit 34874"
                      className="input input-md w-[547px] h-[18px] bg-primary-100 text-sm text-base-100 items-center justify-center font-semibold rounded-none mx-auto opacity-70 ml-2"
                    ></input>
                    <img
                      src={Location}
                      alt="location"
                      className="w-[16px] h-[16px] mx-auto mr-5"
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
                  <span className="span-Event">Required</span>
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
                  <div className="w-[603px] h-[46px] items-center flex border border-base-300 bg-primary-100 rounded-lg">
                    <input
                      type="text"
                      placeholder="18/06/2024 | 06:00 - 12:00"
                      className="input input-md w-[547px] h-[18px] bg-primary-100 text-sm text-base-100 items-center justify-center font-semibold rounded-none mx-auto opacity-70 ml-2"
                    ></input>
                    <img
                      src={DateEvent}
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
                  <span className="span-Event">Required</span>
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
              <div className="flex items-center w-[603px] h-[229px]">
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
                  className=" textarea-Event"
                />
              </div>
            </div>
          </div>

          <div className="event-Price shadow-custom-1 shadow-custom-2">
            <div className="flex flex-col md:flex-row items-start md:items-center mb-4">
              <h1 className="min-w-[98px] h-[48px] text-[32px] leading-[48px] font-semibold text-primary-0">
                Ticket
              </h1>
            </div>
            <div className="flex flex-row items-start justify-between w-[1112px] h-[188px] gap-[149px] mt-14">
              <div className="flex flex-col gap-[16px] w-[360px] h-[100px]">
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
              <div className="relative w-[603px] h-[118px] flex flex-wrap gap-[14px] items-start first-line:justify-start">
                <div className="flex items-center justify-center gap-[24px]">
                  <div className="w-[603px] h-[46px] items-center flex border border-base-300 bg-primary-100 rounded-lg">
                    <input
                      type="text"
                      placeholder="Insert Ticket Detail"
                      className="input-ticketDetail"
                    ></input>
                    <img
                      src={IconTicket}
                      alt="iconTicket"
                      className="w-[16px] h-[16px] mx-auto mr-5"
                    />
                  </div>
                </div>

                <div className="carousel carousel-center rounded-box min-w-[615px] min-h-[128px] ">
                  <div className="carousel-item min-w-[354.38px] h-[131.78px] gap-[12px] pt-[0px] pr-[5px] pb-[5px] pl-[5px] rounded-md bg-base-405 border shadow-custom-1 flex-col ml-1">
                    <div className="min-h-[92px] pt-[6px] pr-[0px] pb-[6px] pl-[0px] gap-[10px] flex flex-col border-b border-t  border-secondary-0">
                      <div className="w-full h-[24px] justify-between mt-2 flex">
                        <h3 className="w-[62px] h-[42px] text-base leading-6">
                          Regular
                        </h3>
                        <img
                          src={XCircle}
                          alt="xCircle"
                          className="w-[19.5px] h-[19.5px] ml-10"
                        />
                      </div>

                      <div className="w-full h-[18px] gap-[10px] flex items-center mt-5">
                        <div className="flex items-center">
                          <img
                            src={Clock}
                            alt="clock"
                            className="w-[12px] h-[12px]"
                          />
                          <h3 className="text-[10px] leading-[18px] text-error-30 ml-1">
                            Berakhir 17 Juni 2024 • 12:00 WIB
                          </h3>
                        </div>
                      </div>
                    </div>

                    <div className="w-full flex justify-start mt-2">
                      <h3 className="text-[10px] leading-[18px] font-semibold">
                        Rp.100.000
                      </h3>
                    </div>
                  </div>

                  <div className="carousel-item min-w-[354.38px] h-[131.78px] gap-[12px] pt-[0px] pr-[5px] pb-[5px] pl-[5px] rounded-md bg-base-405 border shadow-custom-1 flex-col ml-1">
                    <div className="min-h-[92px] pt-[6px] pr-[0px] pb-[6px] pl-[0px] gap-[10px] flex flex-col border-b border-t  border-secondary-0">
                      <div className="w-full h-[24px] justify-between mt-2 flex">
                        <h3 className="w-[62px] h-[42px] text-base leading-6">
                          Regular
                        </h3>
                        <img
                          src={XCircle}
                          alt="xCircle"
                          className="w-[19.5px] h-[19.5px] ml-10"
                        />
                      </div>

                      <div className="w-full h-[18px] gap-[10px] flex items-center mt-5">
                        <div className="flex items-center">
                          <img
                            src={Clock}
                            alt="clock"
                            className="w-[12px] h-[12px]"
                          />
                          <h3 className="text-[10px] leading-[18px] text-error-30 ml-1">
                            Berakhir 17 Juni 2024 • 12:00 WIB
                          </h3>
                        </div>
                      </div>
                    </div>

                    <div className="w-full flex justify-start mt-2">
                      <h3 className="text-[10px] leading-[18px] font-semibold">
                        Rp.100.000
                      </h3>
                    </div>
                  </div>

                  <div className="carousel-item min-w-[354.38px] h-[131.78px] gap-[12px] pt-[0px] pr-[5px] pb-[5px] pl-[5px] rounded-md bg-base-405 border shadow-custom-1 flex-col ml-1">
                    <div className="min-h-[92px] pt-[6px] pr-[0px] pb-[6px] pl-[0px] gap-[10px] flex flex-col border-b border-secondary-0 border-t ">
                      <div className="w-full h-[24px] justify-between mt-2 flex">
                        <h3 className="w-[62px] h-[42px] text-base leading-6">
                          Regular
                        </h3>
                        <img
                          src={XCircle}
                          alt="xCircle"
                          className="w-[19.5px] h-[19.5px] ml-10"
                        />
                      </div>

                      <div className="w-full h-[18px] gap-[10px] flex items-center mt-5">
                        <div className="flex items-center">
                          <img
                            src={Clock}
                            alt="clock"
                            className="w-[12px] h-[12px]"
                          />
                          <h3 className="text-[10px] leading-[18px] text-error-30 ml-1">
                            Berakhir 17 Juni 2024 • 12:00 WIB
                          </h3>
                        </div>
                      </div>
                    </div>

                    <div className="w-full flex justify-start mt-2">
                      <h3 className="text-[10px] leading-[18px] font-semibold">
                        Rp.100.000
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end min-w-[424px] h-[60px] top-[2348px] left-[875px] gap-[24px] pr-[135px] mt-20">
          <button className="btn-cancel">Cancel</button>
          <button className="btn-Event">Save</button>
        </div>
      </section>
    </>
  );
}
