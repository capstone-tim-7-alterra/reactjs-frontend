import { useState, useEffect } from "react";
import axios from "axios";
import IconSearch from "../../assets/icons/IconSearch.png";
import TombolAtas from "../../assets/icons/TombolAtas.png";
import TombolBawah from "../../assets/icons/TombolBawah.png";
import EditSquare from "../../assets/icons/article/Edit.svg";
import Trash from "../../assets/icons/article/Trash.svg";
import { Link, useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [admins, setAdmins] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [counter, setCounter] = useState(10);
  const [resData, setResData] = useState();

  const navigate = useNavigate();

  const [pagination, setPagination] = useState();
  function handlePagination(isNext) {
    if (isNext) {
      fetchData("https://kreasinusantara.shop" + resData.link.next);
    } else {
      fetchData("https://kreasinusantara.shop" + resData.link.prev);
    }
  }
  async function fetchData(url) {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setResData(response.data);
      setAdmins(response.data.data); // data adalah array admin
    } catch (error) {
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
    }
  }
  const fetchAdmins = async () => {
    const token = localStorage.getItem("token");

    if (token === null) {
      navigate("/login");
      return;
    }

    fetchData("https://kreasinusantara.shop/api/v1/admin");
  };

  useEffect(() => {
    fetchAdmins();
  }, []);

  const handleDelete = async (id) => {
    const token = localStorage.getItem("token");

    try {
      const response = await axios.delete(
        "https://kreasinusantara.shop/api/v1/admin/" + id,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response);
      fetchAdmins();
    } catch (error) {
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
    }
  };
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleIncrement = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const handleDecrement = () => {
    setCounter((prevCounter) =>
      prevCounter > 0 ? prevCounter - 1 : prevCounter
    );
  };

  const itemsPerPage = counter;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const filteredAdmins = admins.filter((admin) =>
    admin.username.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const currentAdmins = filteredAdmins.slice(indexOfFirstItem, indexOfLastItem);

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <div className="w-[1440px] h-[1024px] top-[552px] left-0 bg-primary-100 font-poppins">
      <div className="w-[1140px] h-[800.79px] top-[171px] left-[300px] gap-[24px] bg-primary-100 mt-14">
        <div className="flex flex-wrap w-[1056px] h-[121px] gap-[27px] mx-auto">
          <div className="flex w-[1092px] h-[52px] gap-[24px] bg-primary-100">
            <div className="w-[108px] h-[46px] rounded-lg bg-primary-30 pt-[14px] pr-[16px] pb-[14px] pl-[16px] gap-[space-x-2]">
              <Link
                to="add"
                className="w-[76px] h-[18px] text-secondary-91 font-semibold text-[12px] leading-[18px] text-center"
              >
                Add Admin
              </Link>
            </div>
            <div className="flex flex-wrap w-[768px] h-[46px] rounded-lg border pt-[14px] pr-[16px] pb-[14px] pl-[16px] gap-[space-x-2] text-base-100 font-semibold text-xs">
              <div className="w-[16px] h-[18px] opacity-70 flex items-center justify-center">
                <img
                  src={IconSearch}
                  alt="Search"
                  className="w-[13.01px] h-[13.01px]"
                />
              </div>
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={handleSearch}
                className="input input-bordered border-none w-[712px] h-[18px] opacity-40 bg-primary-100 rounded-none mx-auto"
              />
            </div>
          </div>
          <div className="w-[1037px] h-auto p-6 mx-auto shadow-custom-3 shadow-custom-4 mt-10">
            <div className="overflow-x-auto">
              <table className="table">
                <thead className="mx-auto text-center text-neutral-15 border-none">
                  <tr className="border-none w-[999px] h-[56px] pt-[16px] pr-[0px] pb-[16px] pl-[0px] gap-[56px]">
                    <th></th>
                    <th>Username</th>
                    <th>Roles</th>
                    <th>Email</th>
                    <th>Create At</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody className="mx-auto text-center border-t-2">
                  {filteredAdmins.slice(0, counter).map((admin) => (
                    <tr
                      key={admin.id}
                      className="border-none w-[1003px] h-[64px] pt-[16px] pr-[0px] pb-[16px] pl-[0px] gap-[56px] text-neutral-15"
                    >
                      <td>
                        <img
                          src={admin.photo}
                          alt="avatar"
                          className="w-[32px] h-[32px]"
                        />
                      </td>
                      <td>{admin.username}</td>
                      <td>{admin.is_super_admin.toString()}</td>
                      <td>{admin.email}</td>
                      <td>{admin.created_at}</td>
                      <td className="flex gap-5 ml-10">
                        <button onClick={() => handleDelete(admin.id)}>
                          <img
                            src={Trash}
                            alt="Trash"
                            className="w-[24px] h-[24px]"
                          />
                        </button>

                        <img
                          src={EditSquare}
                          alt="editsquare"
                          className="w-[24px] h-[24px]"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="flex w-[1092px] h-[48px] gap-[24px] justify-end items-center mt-10">
            <div className="flex w-[196px] h-[31px] gap-[10px]">
              <p className="w-[42px] h-[24px] bg-primary-100 text-center flex items-center justify-center mt-1 text-[16px] leading-6 font-normal text-primary-0">
                Show
              </p>
              <div className="flex w-[79px] h-[31px] rounded-[10px] border-2 pt-[2px] pr-[10px] pb-[2px] pl-[10px] gap-[28px] border-primary-0 items-center">
                <p className="flex w-[11px] h-[24px] bg-primary-100 text-center items-center justify-center text-[16px] leading-6 font-normal text-primary-0">
                  {counter}
                </p>
                <div className="flex flex-col w-[9px] h-[17px] items-center justify-center gap-0.5">
                  <img
                    src={TombolAtas}
                    alt="Tombol Atas"
                    onClick={handleIncrement}
                  />
                  <img
                    src={TombolBawah}
                    alt="Tombol Bawah"
                    onClick={handleDecrement}
                  />
                </div>
              </div>
              <div className="w-[55px] h-[24px]">
                <p className="w-[42px] h-[24px] bg-primary-100 text-center flex items-center justify-center mt-1 text-[16px] leading-6 font-normal text-primary-0">
                  entries
                </p>
              </div>
            </div>

            <div className="join w-[159px] h-[48px]">
              <button
                onClick={() => handlePagination(false)}
                className="join-item w-[41px] h-[48px] pt-[14px] pr-[16px] pb-[14px] pl-[16px] gap-[space-x-2] bg-base-50 hover:bg-base-70 border-base-50 mx-auto text-primary-0 text-sm"
              >
                «
              </button>
              <button className="join-item w-[77px] h-[48px] pt-[14px] pr-[16px] pb-[14px] pl-[16px] gap-[space-x-2] bg-base-50 border-base-50 text-sm leading-5 font-semibold text-base-100">
                Page {resData?.pagination.current_page ?? 1}
              </button>
              <button
                onClick={() => handlePagination(true)}
                className="join-item w-[41px] h-[48px] pt-[14px] pr-[16px] pb-[14px] pl-[16px] gap-[space-x-2] bg-base-50 hover:bg-base-70 border-base-50 mx-auto text-primary-0 text-sm"
              >
                »
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
