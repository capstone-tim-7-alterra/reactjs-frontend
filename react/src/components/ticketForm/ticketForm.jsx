import React, { useState } from "react";
import DatePublish from "../../assets/ticketForm/datePublish.png";
import ClockPublish from "../../assets/ticketForm/clockPublish.png";
import Button from "../../assets/imgEvent/button.png";
function App() {
  const [activeTab, setActiveTab] = useState("detail");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 font-poppins">
      <div className="p-5 bg-primary-100 border border-base-300 rounded-lg shadow-md w-[452px] h-[509px] top-[4355px] left-[12189px]">
        <div className="flex justify-between mb-4 w-[452px] h-[79px]  pt-[16px] pr-[24px] pb-[16px] pl-[24px]">
          <button
            className={`flex-1 py-2 text-center font-semibold text-[18px] leading-7 w-[202px] h-[47px] ${
              activeTab === "detail"
                ? "text-base-100 border-b-4 border-base-150"
                : "text-base-100"
            }`}
            onClick={() => setActiveTab("detail")}
          >
            DETAIL TICKET
          </button>

          <button
            className={`flex-1 py-2 text-center font-semibold text-[18px] leading-6 w-[202px] h-[47px] p-[10px] gap-[10px] ${
              activeTab === "sell"
                ? "text-base-100 border-b-4 border-base-150"
                : "text-base-100"
            }`}
            onClick={() => setActiveTab("sell")}
          >
            TICKET SELL
          </button>
        </div>

        {activeTab === "detail" ? (
          <form>
            <div>
              <label className="label-detailticket" htmlFor="ticketName">
                Ticket
              </label>
              <div className="flex items-center space-x-2 w-[404px] h-[52px] gap-[10px]">
                <select className="select select-bordered border w-[338px] h-[46px] rounded-lg pt-[14px] pr-[16px] pb-[14px] pl-[16px] gap-[2px] border-base-300 text-base-100 text-xs font-semibold leading-5 bg-primary-100">
                  <option disabled selected>
                    Pick your an option
                  </option>
                  <option>Regular</option>
                  <option>VIP</option>
                  <option>VVIP</option>
                </select>
                <img
                  src={Button}
                  alt="button"
                  className="w-[56px] h-[52px] rounded-lg "
                />
              </div>
            </div>
            <div>
              <label
                className="label-detailticket mt-10"
                htmlFor="ticketNumber"
              >
                Number of Ticket
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input-numberofticket"
              />
            </div>
            <div>
              <label className="label-detailticket" htmlFor="ticketPrice">
                Price
              </label>
              <div className="div-priceticket">
                <span className="w-[19px] h-[20px] text-sm font-bold leading-5 text-base-100">
                  RP
                </span>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input-price"
                />
              </div>
            </div>

            <button type="submit" className="submit-ticket ">
              Next
            </button>
          </form>
        ) : (
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
                      className="input input-md w-[68.5px] h-[18px] top-[14px] left-[40px] bg-primary-100 text-xs  leading-[18px] rounded-none text-base-100 font-semibold"
                    />
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
                      className="input-clockpublish"
                    />
                  </div>
                </div>
              </div>
            </div>
            <button type="submit" className="submit-publishdate">
              Next
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default App;
