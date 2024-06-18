import React, { useState } from "react";
import DatePublish from "../../assets/ticketForm/datePublish.png";
import ClockPublish from "../../assets/ticketForm/clockPublish.png";
import Button from "../../assets/imgEvent/button.png";

function App() {
  const [activeTab, setActiveTab] = useState("sell");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 font-poppins">
      <div className="p-5 bg-primary-100 border border-base-300 rounded-lg shadow-md w-[452px] h-[509px] top-[4355px] left-[12189px]">
        <div className="flex justify-between mb-4 w-[452px] h-[79px] pt-[16px] pr-[24px] pb-[16px] pl-[24px]">
          <button
            className={`flex-1 py-2 text-center font-semibold text-[18px] leading-6 w-[202px] h-[47px] p-[10px] gap-[10px] ${
              activeTab === "sell"
                ? "text-base-100 border-b-4 border-base-150"
                : "text-base-100"
            }`}
            onClick={() => setActiveTab("sell")}
          >
            Date & Time
          </button>
        </div>

        <form>
          <div className="space-y-4">
            <div>
              <label className="label-datepublish">Publish Date</label>
              <div className="flex items-center space-x-4">
                <div className="input-publishdate">
                  <input
                    type="text"
                    placeholder="Date"
                    className="input-datepublish"
                  />
                  <img
                    src={DatePublish}
                    alt="datepublish"
                    className="w-[16px] h-[16px]"
                  />
                </div>
                <div className="input-publishdate">
                  <img
                    src={ClockPublish}
                    alt="clockpublish"
                    className="w-[16px] h-[16px]"
                  />

                  <input
                    type="text"
                    placeholder="00:00"
                    className="input input-md w-[95px] h-[18px] top-[14px] left-[40px] bg-primary-100 text-xs  leading-[18px] rounded-none text-base-100 font-semibold"
                  />
                  <span className="text-gray-500 w-[55px] h-[22px] justify-between  pt-[2px] pr-[4px] pb-[2px] pl-[4px] text-xs">
                    WIB
                  </span>
                  {/* <img
                    src={ClockPublish}
                    alt="clockpublish"
                    className="w-[9px] h-[17px] "
                  /> */}
                </div>
              </div>
            </div>
            <div>
              <label className="label-datepublish">End Date</label>
              <div className="flex items-center space-x-4">
                <div className="input-publishdate">
                  <input
                    type="text"
                    placeholder="Date"
                    className="input-datepublish"
                  />
                  <img
                    src={DatePublish}
                    alt="datepublish"
                    className="w-[16px] h-[16px]"
                  />
                </div>
                <div className="input-publishdate">
                  <img
                    src={ClockPublish}
                    alt="datepublish"
                    className="w-[16px] h-[16px] "
                  />
                  <input
                    type="text"
                    placeholder="00:00"
                    className="input input-md w-[95px] h-[18px] top-[14px] left-[40px] bg-primary-100 text-xs  leading-[18px] rounded-none text-base-100 font-semibold"
                  />
                  <span className="text-gray-500 w-[55px] h-[22px] justify-between  pt-[2px] pr-[4px] pb-[2px] pl-[4px] text-xs">
                    WIB
                  </span>
                  {/* <img
                    src={ClockPublish}
                    alt="clockpublish"
                    className="w-[9px] h-[17px]"
                  /> */}
                </div>
              </div>
            </div>
          </div>
          <button type="submit" className="submit-publishdate">
            Next
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
