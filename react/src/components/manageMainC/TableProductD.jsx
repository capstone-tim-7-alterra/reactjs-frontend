import useSWR from "swr";
import { getReportProducts } from "../../services/dashboardAdmin/dashboardServices";
import BatikPiring from "../../assets/images/imgDashboard/batikpiring.png";

export default function TableProduct() { 
      // Fetch articles from API using SWR library
      const fetcher = async () => {
      const data = await getReportProducts();
        console.log('Datanya ada ga:', data);
        return data;
      };

      const { data: allProducts, error: allError} = useSWR(['/products-report'], fetcher);

      
      if (allError) 
        return <div>Error: {allError.message}</div>;

      if (!allProducts) 
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
                      <th>Product</th>
                      <th>Date and Time</th>
                      <th>Income our Outcome</th>
                      <th>Payment Method</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody className="mx-auto text-center border-t-2 gap-3">
                    {allProducts.map((product) => (
                      <tr key={product.key}className="border-none w-[991px] pt-[16px] pb-[16px] gap-[30px] text-neutral-15">
                        <td className="flex items-center gap-20 mx-auto font-semibold">
                          <img src={product.image || BatikPiring} alt="Batik" className="w-[32px] h-[32px]" />
                          {product.name || "Untitle"}
                        </td>
                        <td className="text-[18px] font-semibold">
                          <div className="mb-2">Jan 27, 24</div>{" "}
                          <span className="text-xs">09:24:22 AM</span>{" "}
                        </td>
                        <td className="text-error-40 text-[16px] font-semibold">-Rp.22.100.000</td>
                        <td className="text-base-100 font-normal">{product.payment_method || "Link Aja"}</td>
                        <td className="bg-error-40 rounded-lg btn gap-[2px] text-secondary-0  border-error-40 hover:bg-error-40 hover:border-error-40">{product.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
        </>
    )
}