import BatikPiring from "../../assets/images/imgDashboard/batikpiring.png";

export default function TableProduct() {
  
    return (
        <>
                <table className="table">
                  {/* head */}
                  <thead className="mx-auto text-center text-neutral-15 border-none">
                    <tr className="border-none w-[991px] h-[56px] pt-[16px] pr-[0px] pb-[16px] pl-[0px] gap-[30px] text-[16px] leading-6 font-normal">
                      <th>Product</th>
                      <th>Date and Time</th>
                      <th>Income our Outcome</th>
                      <th>Payment Method</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody className="mx-auto text-center border-t-2 gap-3">
                    {/* row 1 */}
                    <tr className="border-none w-[991px] pt-[16px] pb-[16px] gap-[30px] text-neutral-15">
                      <td className="flex items-center gap-20 mx-auto font-semibold">
                        <img src={BatikPiring} alt="Batik" className="w-[32px] h-[32px]" />
                        Batik Piring Sedapur
                      </td>
                      <td className="text-[18px] font-semibold">
                        <div className="mb-2">Jan 27, 24</div>{" "}
                        <span className="text-xs">09:24:22 AM</span>{" "}
                      </td>
                      <td className="text-error-40 text-[16px] font-semibold">-Rp.22.100.000</td>
                      <td className="text-base-100 font-normal">Link aja</td>
                      <td className="bg-error-40 rounded-lg btn gap-[2px] text-secondary-0  border-error-40 hover:bg-error-40 hover:border-error-40">Cancelled</td>
                    </tr>
                    {/* row 2 */}
                    <tr className="border-none w-[991px] pt-[16px] pb-[16px] gap-[30px] text-neutral-15">
                      <td className="flex items-center gap-20 mx-auto font-semibold">
                        <img src={BatikPiring} alt="Batik" className="w-[32px] h-[32px]" />
                        Batik Piring Sedapur
                      </td>
                      <td className="text-[18px] font-semibold">
                        <div className="mb-2">Jan 27, 24</div>{" "}
                        <span className="text-xs">09:24:22 AM</span>{" "}
                      </td>
                      <td className="text-base-410 text-[16px] font-semibold">-Rp.22.100.000</td>
                      <td className="text-base-100 font-normal">Link aja</td>
                      <td className="bg-base-410 rounded-lg btn gap-[2px] text-secondary-0  border-base-410 hover:bg-error-410 hover:border-error-410">Complete</td>
                    </tr>
                    {/* row 3 */}
                    <tr className="border-none w-[991px] pt-[16px] pb-[16px] gap-[30px] text-neutral-15">
                      <td className="flex items-center gap-20 mx-auto font-semibold">
                        <img src={BatikPiring} alt="Batik" className="w-[32px] h-[32px]" />
                        Batik Piring Sedapur
                      </td>
                      <td className="text-[18px] font-semibold">
                        <div className="mb-2">Jan 27, 24</div>{" "}
                        <span className="text-xs">09:24:22 AM</span>{" "}
                      </td>
                      <td className="text-base-410 text-[16px] font-semibold">-Rp.22.100.000</td>
                      <td className="text-base-100 font-normal">Link aja</td>
                      <td className="bg-base-410 rounded-lg btn gap-[2px] text-secondary-0  border-base-410 hover:bg-error-410 hover:border-error-410">Complete</td>
                    </tr>
                    {/* row 4 */}
                    <tr className="border-none w-[991px] pt-[16px] pr-[0px] pb-[16px] pl-[0px] gap-[30px] text-neutral-15">
                      <td className="flex items-center gap-20 mx-auto font-semibold">
                        <img src={BatikPiring} alt="Batik" className="w-[32px] h-[32px]" />
                        Batik Piring Sedapur
                      </td>
                      <td className="text-[18px] leading-[27px] font-semibold">
                        <div className="mb-2">Jan 27, 24</div>{" "}
                        <span className="text-xs">09:24:22 AM</span>{" "}
                      </td>
                      <td className="text-base-410 text-[16px] leading-[24px] font-semibold">-Rp.22.100.000</td>
                      <td className="text-base-100 font-normal">Link aja</td>
                      <td className="bg-base-410 rounded-lg btn gap-[2px] text-secondary-0  border-base-410 hover:bg-error-410 hover:border-error-410">Complete</td>
                    </tr>
                    {/* row 5 */}
                    <tr className="border-none w-[991px] pt-[16px] pr-[0px] pb-[16px] pl-[0px] gap-[30px] text-neutral-15">
                      <td className="flex items-center gap-20 mx-auto font-semibold">
                        <img src={BatikPiring} alt="Batik" className="w-[32px] h-[32px]" />
                        Batik Piring Sedapur
                      </td>
                      <td className="text-[18px] leading-[27px] font-semibold">
                        <div className="mb-2">Jan 27, 24</div>{" "}
                        <span className="text-xs">09:24:22 AM</span>{" "}
                      </td>
                      <td className="text-base-410 text-[16px] leading-[24px] font-semibold">-Rp.22.100.000</td>
                      <td className="text-base-100 font-normal">Link aja</td>
                      <td className="bg-base-410 rounded-lg btn gap-[2px] text-secondary-0  border-base-410 hover:bg-error-410 hover:border-error-410">Complete</td>
                    </tr>
                  </tbody>
                </table>
        </>
    )
}