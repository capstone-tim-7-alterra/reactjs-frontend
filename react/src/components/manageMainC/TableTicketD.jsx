import useSWR from "swr";
import { getReportEvents } from "../../services/dashboardAdmin/dashboardServices";


export default function TableTicket() {

      // Fetch articles from API using SWR library
      const fetcher = async () => {
        const data = await getReportEvents();
          console.log('Datanya ada ga:', data);
          return data;
        };
  
        const { data: allEvents, error: allError} = useSWR(['/events-report'], fetcher);
  
        
        if (allError) 
          return <div>Error: {allError.message}</div>;
  
        if (!allEvents) 
          return <div className="text-center flex-col">
                      <span className="loading loading-infinity xl:w-20 text-red-700"></span>
                      <span className="text-3xl">Loading...</span>
                  </div>;

    return (
        <>
                <table className="table">
                  {/* head */}
                  <thead className="mx-auto text-center text-neutral-15 border-none">
                    <tr className="border-none w-[991px] h-[56px] pt-[16px] pr-[0px] pb-[16px] pl-[0px] gap-[30px] text-[16px] leading-6 font-normal">
                      <th>Event</th>
                      <th>Date and Time</th>
                      <th>Income our Outcome</th>
                      <th>Payment Method</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody className="mx-auto text-center border-t-2 gap-3">
                    {/* row 1 */}

                    {allEvents.map((event => (
                      <tr key={event.key} className="border-none w-[991px] pt-[16px] pb-[16px] gap-[30px] text-neutral-15 ">
                      <td className="flex items-center gap-20 mx-auto ">
                        <img src={event.image} alt="Batik" className="w-[32px] h-[32px]" />
                         <div className="flex flex-col ">
                            <div className="leading-6 font-semibold">
                                {event.name || "Untitle"}
                            </div>
                            <div className="text-left text-[12px] leading-5 font-normal text-neutral-15">
                                {event.type}
                            </div>
                         </div>
                      </td>
                      <td className="text-[18px] font-semibold">
                        <div className="mb-2">Jun 16, 2024</div>{" "}
                        <span className="text-xs">09:24:22 AM</span>{" "}
                      </td>
                      <td className="text-error-40 text-[16px] font-semibold">{event.income}</td>
                      <td className="text-base-100 font-normal">{event.payment_method || "Link Aja"}</td>
                      <td className="bg-error-40 rounded-lg btn gap-[2px] text-secondary-0  border-error-40 hover:bg-error-40 hover:border-error-40">{event.status}</td>
                    </tr>
                    )))}
              
                  </tbody>
                </table>
        </>
    )
}