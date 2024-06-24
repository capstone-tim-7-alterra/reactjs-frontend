import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BatikPiring from "../../assets/images/imgDashboard/batikpiring.png";

export default function TableProduct() {
  const [item, setItem] = useState([]);
  const navigate = useNavigate();

  async function fetchData(url) {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
      return;
    }

    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: Bearer `${token}`,
        },
      });

      setItem(response.data.data); // data adalah array produk
    } catch (error) {
      console.error("Error:", error.response ? error.response.data : error.message);
    }
  }

  useEffect(() => {
    fetchData("https://kreasinusantara.shop/{{prodUrl}}/api/v1/admin/products-report");
  }, []);
 
  console.log(item)
  return (
    <table className="table">
      <thead className="mx-auto text-center text-neutral-15 border-none">
        <tr className="border-none w-[991px] h-[56px] pt-[16px] pr-[0px] pb-[16px] pl-[0px] gap-[30px] text-[16px] leading-6 font-normal">
          <th>Product</th>
          <th>Date and Time</th>
          <th>Income or Outcome</th>
          <th>Payment Method</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody className="mx-auto text-center border-t-2 gap-3">
        {item.map((item) => (
          <tr key={item.id} className="border-none w-[991px] pt-[16px] pb-[16px] gap-[30px] text-neutral-15">
            <td className="flex items-center gap-20 mx-auto font-semibold">
              <img src={item.image || BatikPiring} alt="Product" className="w-[32px] h-[32px]" />
              {item.name}
            </td>
            {/* <td className="text-[18px] font-semibold">
                <div className="mb-2">{new Date(item.date).toLocaleDateString()}</div>
                <span className="text-xs">{new Date(item.date).toLocaleTimeString()}</span>
              </td>
              <td className={text-[16px] font-semibold ${item.income < 0 ? 'text-error-40' : 'text-success-40'}}>
                {item.income < 0 ? -Rp.${Math.abs(item.income).toLocaleString()} : Rp.${item.income.toLocaleString()}}
              </td>
              <td className="text-base-100 font-normal">{item.paymentMethod}</td>
              <td className={rounded-lg btn gap-[2px] text-secondary-0 border-${item.status === 'Cancelled' ? 'error-40' : 'success-40'} hover:bg-${item.status === 'Cancelled' ? 'error-40' : 'success-40'} hover:border-${item.status === 'Cancelled' ? 'error-40' : 'success-40'}}> */}
                {/* {item.status} */}
              {/* </td> */}
          </tr>
        ))}
      </tbody>
    </table>
  );
}