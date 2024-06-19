import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Breadcrumb from "../breadcrumbAdmin/Breadcrumbs";
import Photo from "../../assets/images/imgEvent/photo.png";
import IconEye from "../../assets/icons/article/Eye.svg";

export default function AddAdmin({fetchAdmins}) {
  const [formData, setFormData] = useState({
    image: null,
    email: "",
    username: "",
    first_name: "",
    last_name: "",
    is_super_admin: true,
    password: "",
  });

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  
  const handleCancel = () => {
    navigate("/dashboard/manage-admin");
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      console.log('File selected:', files[0]);
      setFormData({
        ...formData,
        image: files[0], // Store the selected file
      });
    } else if (name === 'is_super_admin') {
      setFormData({
        ...formData,
        is_super_admin: value === 'SuperAdmin', // Set boolean based on selection
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };
  //validation form
  const validateFormData = (data) => {
    if (!(data.image instanceof File)) {
      return "Image must be a file";
    }
    if (typeof data.email !== "string" || !/^\S+@\S+\.\S+$/.test(data.email)) {
      return "Invalid email format";
    }
    if (typeof data.username !== "string" || data.username.trim() === "") {
      return "Username must be a non-empty string";
    }
    if (typeof data.first_name !== "string" || data.first_name.trim() === "") {
      return "First name must be a non-empty string";
    }
    if (typeof data.last_name !== "string" || data.last_name.trim() === "") {
      return "Last name must be a non-empty string";
    }
    if (typeof data.password !== "string" || data.password.trim().length < 8) {
      return "Password must be at least 8 characters";
    }
    if (typeof data.is_super_admin !== "boolean") {
      return "isSuperAdmin must be a boolean";
    }
    return null;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationError = validateFormData(formData);
    if (validationError) {
      console.error("Validation Error:", validationError);
      return;
    }
    const data = new FormData();
    data.append("image", formData.image);
    data.append("email", formData.email);
    data.append("username", formData.username);
    data.append("first_name", formData.first_name);
    data.append("last_name", formData.last_name);
    data.append("is_super_admin", formData.is_super_admin);
    data.append("password", formData.password);

    try {
      const response = await axios.post(
        "https://kreasinusantara.shop/api/v1/admin/register",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Success:", response.data,response);

      fetchAdmins(); //refresh list admin 
      
      navigate("/dashboard/manage-admin");
    } catch (error) {
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <>
      <section className="w-[1440px] h-[2032px] top-[3668px] left-[14883px] bg-primary-100">
        <Breadcrumb />

        <div className="w-[1156px] h-[1634px] gap-[50px] mx-auto mt-14 font-poppins ">
          <h1 className="w-[258px] h-[48px] text-[32px] leading-[48px] font-semibold text-primary-0 mb-10">
            Add new admin
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="w-[1156px] h-[1536px] pt-[24px] pr-[22px] pb-[24px] pl-[22px] gap-[58px] shadow-custom-1">
              <h1 className="w-[302px] h-[48px] text-[32px] leading-[48px] font-semibold text-primary-0 mb-10 mt-5">
                Profile Information
              </h1>
              <div className="flex md:flex-row items-start justify-between w-[629px] h-[202px] gap-[149px] mt-14 ">
                <div className="flex flex-col gap-[18px] w-[278px] h-[94px] ">
                  <div className="flex items-center justify-between w-[360px] h-[44px] gap-[15px]">
                    <label className="min-w-[172px] h-[36px] text-[24px] leading-9 font-semibold text-secondary-50">
                      Photo profile
                    </label>
                  </div>
                  <div className="text-secondary-50 w-[360px] min-h-[140px]">
                    <p className="text-[14px] font-normal leading-[20px] text-justify">
                      Format foto harus .jpg, jpeg,png dan <br />
                      ukuran minimal 300 x 300 px.
                    </p>
                  </div>
                </div>
                <div className="w-[700px] h-[107px] flex flex-wrap gap-[24px] items-start justify-start">
                  <div className="w-[225px] h-[202px] pt-[30px] pr-[21px] pb-[30px] pl-[21px] gap-[10px] border border-dotted border-primary-0 flex items-center justify-center">
                    <div className="text-center min-w-[69px] h-[47px]">
                      <input
                        type="file"
                        name="image"
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="upload-photo" className="cursor-pointer">
                        <img
                          src={Photo}
                          alt="photo"
                          className="w-[24px] h-[24px] mx-auto"
                        />
                        <span className="w-[69px] h-[15px] mx-auto text-[12px] leading-[14.52px] text-primary-0">
                          Upload Foto
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-row items-start justify-between w-[1113px] h-[102px] gap-[149px] mt-14">
                <div className="flex flex-col gap-[18px] w-[278px] h-[102px] ">
                  <div className="flex items-center justify-between w-[278px] h-[44px]">
                    <label className="min-w-[147px] h-[36px] text-[24px] leading-9 font-semibold text-secondary-50">
                      Email
                    </label>
                    <span className="span-Event">Required</span>
                  </div>
                  <div className="text-secondary-50 w-[360px] h-[140px]">
                    <p className="text-[14px] font-normal leading-[20px] text-justify w-[278px] h-[40px]">
                      Masukan Email terdaftar untuk melakukan verifikasi atau
                      yang lainnya.
                    </p>
                  </div>
                </div>
                <div className="flex items-center opacity-90">
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    required
                    className="bg-primary-100 border rounded-[10px] border-primary-500 pl-5 w-[629px] h-[70px] text-secondary-50 focus:outline-none focus:border-primary-500"
                    placeholder="Masukan email..."
                  />
                </div>
              </div>

              <div className="flex flex-row items-start justify-between w-[1113px] h-[102px] gap-[149px] mt-14">
                <div className="flex flex-col gap-[18px] w-[278px] h-[102px] ">
                  <div className="flex items-center justify-between w-[278px] h-[44px]">
                    <label className="min-w-[147px] h-[36px] text-[24px] leading-9 font-semibold text-secondary-50 ">
                      Username
                    </label>
                    <span className="span-Event">Required</span>
                  </div>
                  <div className="text-secondary-50 w-[360px] h-[140px]">
                    <p className="text-[14px] font-normal leading-[20px] text-justify w-[278px] h-[40px]">
                      Masukan username dengan ketentuan menggunakan huruf kecil
                      dan tidak ada spasi.
                    </p>
                  </div>
                </div>
                <div className="flex items-center opacity-90">
                  <input
                    type="text"
                    name="username"
                    onChange={handleChange}
                    required
                    className="bg-primary-100 border rounded-[10px] border-primary-500 pl-5 w-[629px] h-[70px] text-secondary-50 focus:outline-none focus:border-primary-500"
                    placeholder="Masukan username..."
                  />
                </div>
              </div>

              <div className="flex flex-row items-start justify-between w-[1113px] h-[102px] gap-[149px] mt-14">
                <div className="flex flex-col gap-[18px] w-[278px] h-[102px] ">
                  <div className="flex items-center justify-between w-[278px] h-[44px]">
                    <label className="min-w-[147px] h-[36px] text-[24px] leading-9 font-semibold text-secondary-50 ">
                      First Name
                    </label>
                    <span className="span-Event">Required</span>
                  </div>
                  <div className="text-secondary-50 w-[360px] h-[140px]">
                    <p className="text-[14px] font-normal leading-[20px] text-justify w-[278px] h-[40px]">
                      Masukan first name dengan ketentuan menggunakan huruf
                      kapital dan tidak ada spasi.
                    </p>
                  </div>
                </div>
                <div className="flex items-center opacity-90">
                  <input
                    type="text"
                    name="first_name"
                    onChange={handleChange}
                    required
                    className="bg-primary-100 border rounded-[10px] border-primary-500 pl-5 w-[629px] h-[70px] text-secondary-50 focus:outline-none focus:border-primary-500"
                    placeholder="Masukan first name..."
                  />
                </div>
              </div>

              <div className="flex flex-row items-start justify-between w-[1113px] h-[102px] gap-[149px] mt-14">
                <div className="flex flex-col gap-[18px] w-[278px] h-[102px] ">
                  <div className="flex items-center justify-between w-[278px] h-[44px]">
                    <label className="min-w-[147px] h-[36px] text-[24px] leading-9 font-semibold text-secondary-50 ">
                      Last Name
                    </label>
                    <span className="span-Event">Required</span>
                  </div>
                  <div className="text-secondary-50 w-[360px] h-[140px]">
                    <p className="text-[14px] font-normal leading-[20px] text-justify w-[278px] h-[40px]">
                      Masukan last name dengan ketentuan menggunakan huruf
                      kapital dan tidak ada spasi.
                    </p>
                  </div>
                </div>
                <div className="flex items-center opacity-90">
                  <input
                    type="text"
                    name="last_name"
                    onChange={handleChange}
                    required
                    className="bg-primary-100 border rounded-[10px] border-primary-500 pl-5 w-[629px] h-[70px] text-secondary-50 focus:outline-none focus:border-primary-500"
                    placeholder="Masukan last name..."
                  />
                </div>
              </div>

              <div className="flex flex-row items-start justify-between w-[1113px] h-[102px] gap-[149px] mt-14">
                <div className="flex flex-col gap-[18px] w-[278px] h-[102px] ">
                  <div className="flex items-center justify-between w-[278px] h-[44px]">
                    <label className="min-w-[147px] h-[36px] text-[24px] leading-9 font-semibold text-secondary-50 ">
                      Role
                    </label>
                    <span className="span-Event">Required</span>
                  </div>
                  <div className="text-secondary-50 w-[360px] h-[140px]">
                    <p className="text-[14px] font-normal leading-[20px] text-justify w-[278px] h-[40px]">
                      Pilih role sebagai admin atau superadmin.
                    </p>
                  </div>
                </div>
                <div className="flex items-center opacity-90">
                  <select
                    name="is_super_admin"
                    onChange={handleChange}
                    required
                    className="bg-primary-100 border rounded-[10px] border-primary-500 pl-5 w-[629px] h-[70px] text-secondary-50 focus:outline-none focus:border-primary-500"
                  >
                    <option value="Admin">Admin</option>
                    <option value="SuperAdmin">SuperAdmin</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-row items-start justify-between w-[1113px] h-[102px] gap-[149px] mt-14">
                <div className="flex flex-col gap-[18px] w-[278px] h-[102px] ">
                  <div className="flex items-center justify-between w-[278px] h-[44px]">
                    <label className="min-w-[147px] h-[36px] text-[24px] leading-9 font-semibold text-secondary-50 ">
                      Password
                    </label>
                    <span className="span-Event">Required</span>
                  </div>
                  <div className="text-secondary-50 w-[360px] h-[140px]">
                    <p className="text-[14px] font-normal leading-[20px] text-justify w-[278px] h-[40px]">
                      Masukan password dengan minimal 8 karakter.
                    </p>
                  </div>
                </div>
                <div className="flex items-center opacity-90">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    onChange={handleChange}
                    required
                    className="bg-primary-100 border rounded-[10px] border-primary-500 pl-5 w-[629px] h-[70px] text-secondary-50 focus:outline-none focus:border-primary-500"
                    placeholder="Masukan password..."
                  />
                  <img
                    src={IconEye}
                    alt="Toggle Password"
                    onClick={handleTogglePassword}
                    className={`absolute w-[24px] h-[24px] right-[50px] cursor-pointer ${showPassword ? 'opacity-20' : ''}`}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-row items-center justify-center gap-[20px] mt-[100px] mb-[50px]">
              <button
                type="button"
                onClick={handleCancel}
                className="w-[180px] h-[60px] bg-secondary-500 rounded-[10px] text-[20px] leading-[30px] font-semibold text-primary-0"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="w-[180px] h-[60px] bg-base-150 rounded-[10px] text-[20px] leading-[30px] font-semibold text-primary-100"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
