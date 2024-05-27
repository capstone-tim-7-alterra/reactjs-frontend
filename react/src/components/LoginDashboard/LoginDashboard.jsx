import React from "react";
import Gambar from "../../assets/Logo.png";

const LoginDashboard = () => {
  return (
    <div className=" bg-gray-200 min-w-[1440px] h-[1024px] top-[5420px] left-[608px] py-[105px] px-[147px]">
      <div className="flex  overflow-hidden flex-wrap justify-center items-center min-w-[1145px] h-[814px] top-[105px] left-[147px] gap-0  mx-auto">
        {/* Bagian Login */}
        <div className="flex flex-col items-center justify-center card shadow-2xl w-[572.5px] h-[814px] p-[126px] pr-[109px] pb-[116px] pl-[109px] gap-[48px] bg-gray-100 rounded-tr-none rounded-br-none rounded-3xl">
          <div className="min-w-[178px] h-[146px] font-poppins text-center">
            <img
              src={Gambar}
              className="block mx-auto w-[61px] h-[62px] gap-[12px]"
            />
            <div className="w-[178px] h-[60px] mt-5">
              <h1 className="w-[110px] h-[20px] text-sm font-medium leading-5 tracking-normal text-gray-900 ml-10">
                Welcome Back!
              </h1>
              <p className="w-[200px] h-[20px] text-sm font-normal leading-5 tracking-normal text-gray-600 text-center ">
                Please Sign In to Continue
              </p>
            </div>
          </div>
          <form className="w-[340px] h-[260px] gap-[24px]">
            <div className="form-control w-[340px] h-[64px] gap-[4px]">
              <label className="label">
                <span className="label-text w-10 h-5 text-gray-800 font-medium text-sm leading-5 tracking-normal">
                  Email
                </span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered w-[340px] min-h-[40px] px-3 py-2 gap-2 rounded-md text-sm font-normal leading-5 tracking-normal text-gray-600 bg-white border-gray-300"
                required
              />
            </div>
            <div className="form-control w-[340px] h-[64px] gap-[4px] mt-5">
              <label className="label">
                <span className="label-text w-10 h-5 text-gray-800 font-medium text-sm leading-5 tracking-normal">
                  Password
                </span>
              </label>
              <input
                type="Password"
                placeholder="Password"
                className="input input-bordered w-[340px] min-h-[40px] px-3 py-2 gap-2 rounded-md text-sm font-normal leading-5 tracking-normal text-gray-600 bg-white border-gray-300 "
                required
              />
            </div>
            <div className="form-control mt-10">
              <label className="label w-[340px] h-[20px] justify-between ">
                <label className="label cursor-pointer">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="checkbox mr-4 w-[20px] h-[20px] rounded border "
                  />
                  <span className="label-text text-black">Remember me</span>
                </label>
                <a
                  href="#"
                  className="label-text-alt link link-hover text-red-700"
                >
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="w-[340px] h-[40px]  gap-[10px] text-white bg-red-700 rounded-xl ">
                Login
              </button>
            </div>
          </form>
        </div>

        {/* Bagian Join Our Community */}
        <div className="flex flex-col justify-center items-start w-[572.5px] h-[814px] p-10 relative bg-red-700 rounded-r-3xl shadow-2xl">
          <h1 className=" top-[353px] ml-[20px] text-white font-poppins text-4xl font-semibold leading-[40px] tracking-normal w-[244px] h-[80px] max-left-[638px] ">
            Join Our Community
          </h1>
          <p className="text-left absolute top-[437px] ml-[20px] text-white font-poppins text-base leading-[40px] tracking-normal w-[278px] h-[40px] max-left-[638px] font-normal mt-5">
            Lorem Ipsum is simply dummy text
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginDashboard;
