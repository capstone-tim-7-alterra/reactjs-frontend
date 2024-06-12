import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Gambar from "../../assets/iconSidebar/Logo.png";

const LoginDashboard = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const adminEmail = "kreasinusantara@gmail.com";
    const adminPassword = "admin123";

    if (email === adminEmail && password === adminPassword) {
      navigate("/dashboard");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="bg-neutral-96 min-w-[1440px] h-[1024px] py-[105px] px-[147px] mx-auto font-poppins">
      <div className="flex overflow-hidden flex-wrap justify-center items-center min-w-[1145px] h-[814px] mx-auto">
        {/* Login */}
        <div className="flex flex-col items-center justify-center card shadow-2xl w-[572.5px] h-[814px] p-[126px] pr-[109px] pb-[116px] pl-[109px] bg-primary-100 rounded-tr-none rounded-br-none rounded-3xl">
          <div className="min-w-[204px] h-[156px] gap-[24px] text-center">
            <img
              src={Gambar}
              className="block mx-auto w-[61px] h-[62px] gap-[12px]"
              alt="Logo"
            />
            <div className="w-[204px] h-[70px] mt-5">
              <h1 className="min-w-[157px] h-[26px] text-[20px] font-semibold leading-6 tracking-normal text-secondary-5 text-center">
                Welcome Back!
              </h1>
              <p className="w-[204px] h-[24px] text-[14px] font-normal leading-6 tracking-normal text-base-110 text-center">
                Please Sign In to Continue
              </p>
            </div>
          </div>
          <form className="w-[340px] h-[260px] gap-[24px]" onSubmit={handleLogin}>
            <div className="w-[96px] h-[364px] p-8 space-y-2 bg-primary-100">
              <div className="form-control w-[320px] h-[80px]">
                <label className="label w-[320px] h-[34px] py-2 px-1 gap-0 justify-between">
                  <span className="label-text w-10 h-5 text-base-120 text-[12px] leading-5 tracking-normal font-semibold">
                    Email
                  </span>
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email"
                  className="input input-bordered w-[320px] min-h-[46px] px-3 py-2 gap-2 rounded-lg text-sm font-normal leading-5 tracking-normal text-base-100 bg-primary-100 border-base-300"
                  required
                />
              </div>
              <div className="form-control w-[320px] h-[80px] mt-5">
                <label className="label w-[320px] h-[34px] py-2 px-1 gap-0 justify-between">
                  <span className="label-text w-10 h-5 text-base-120 text-[12px] leading-5 tracking-normal font-semibold">
                    Password
                  </span>
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="password"
                  className="input input-bordered w-[320px] min-h-[46px] px-3 py-2 gap-2 rounded-lg text-sm font-normal leading-5 tracking-normal text-base-100 bg-primary-100 border-base-300"
                  required
                />
              </div>
              <div className="form-control mt-10">
                <label className="label cursor-pointer w-[320px] h-[40px]">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="checkbox mr-4 w-[20px] h-[20px] rounded-lg border py-1 px-1 opacity-20 hover:bg-base-180 border-base-120"
                  />
                  <span className="label-text text-base-100 text-left font-semibold leading-[18px] w-[280px] h-[18px]">
                    Remember me
                  </span>
                </label>
              </div>
              <div className="form-control mt-6 text-base font-semibold leading-6 text-center">
                <button type="submit" className="w-[320px] h-[52px] gap-[10px] text-primary-100 bg-primary-30 rounded-md opacity-[1] mt-4">
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* Join Our Community */}
        <div className="flex flex-col justify-center items-start w-[572.5px] h-[814px] p-10 relative bg-primary-30 rounded-r-3xl shadow-2xl">
          <h1 className="text-left absolute top-[332px] ml-[20px] text-primary-100 text-[36px] font-semibold leading-[46px] tracking-normal w-[313px] h-[46px]">
            Hello!
          </h1>
          <p className="text-left absolute top-[390px] ml-[20px] text-primary-100 text-[20px] leading-[26px] tracking-normal w-[483px] h-[52px] font-normal mt-1">
            Stay Connected. Log in now and see what they're sharing today
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginDashboard;
