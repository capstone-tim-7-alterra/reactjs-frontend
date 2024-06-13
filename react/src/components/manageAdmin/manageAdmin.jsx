import React, { useState } from "react";
import IconSearch from "../../assets/icons/IconSearch.png";
import TombolAtas from "../../assets/icons/TombolAtas.png";
import TombolBawah from "../../assets/icons/TombolBawah.png";
// import Avatar from "../../assets/iconManageadmin/avatar.png";
// import EditSquare from "../../assets/iconManageadmin/EditSquare.png";
// import Trash from "../../assets/iconManageadmin/Trash.png";
import SidebarDashboard from "./sidebarDashboard";
import HeaderDashboard from "./headerDashboard";

export default function Dashboard() {
  const [counter, setCounter] = useState(5);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [currentEditItem, setCurrentEditItem] = useState(null);
  const [currentDeleteItemId, setCurrentDeleteItemId] = useState(null);

  const handleIncrement = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const handleDecrement = () => {
    setCounter((prevCounter) =>
      prevCounter > 0 ? prevCounter - 1 : prevCounter
    );
  };

  const handleEdit = (item) => {
    setCurrentEditItem(item);
    setIsEditModalOpen(true);
  };

  const handleDelete = (id) => {
    setCurrentDeleteItemId(id);
    setIsDeleteDialogOpen(true);
  };

  const confirmDelete = () => {
   
    console.log(`Deleting item with id: ${currentDeleteItemId}`);
    setIsDeleteDialogOpen(false);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setCurrentEditItem(null);
  };

  const closeDeleteDialog = () => {
    setIsDeleteDialogOpen(false);
    setCurrentDeleteItemId(null);
  };

  const data = [
    { id: 1, username: "Inodhi Putra", role: "SuperAdmin", email: "Example@gmail.com", createdAt: "24/05/2024" },
    { id: 2, username: "Bessotu Itok", role: "SuperAdmin", email: "Example@gmail.com", createdAt: "24/05/2024" },
    { id: 3, username: "Mafazan", role: "Admin", email: "Example@gmail.com", createdAt: "24/05/2024" },
    { id: 4, username: "Putra Senja", role: "Admin", email: "Example@gmail.com", createdAt: "24/05/2024" },
    { id: 5, username: "Ananda", role: "Admin", email: "Example@gmail.com", createdAt: "24/05/2024" },
  ];

  return (
    <>
      <SidebarDashboard />
      <HeaderDashboard />
      <div className="w-[1440px] min-h-[1034px] h-[2000px] top-[552px] left-[157px] bg-primary-100 font-poppins">
        <div className="absolute w-[1056px] h-[20px] top-[125px] left-[324px] gap-[t--space/1] bg-primary-100">
          <div className="text-sm font-normal breadcrumbs text-neutral-40 gap-[1px]">
            <ul className="w-[1056px] h-[20px] left-[324px] gap-[t--space/1]">
              <li>
                <a href="#" className="w-[79px] h-[20px]">
                  Dashboard
                </a>
              </li>
              <li className="">
                <p className="w-[110px] h-[20px] font-semibold ">
                  Manage Admin
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="absolute w-[1140px] h-[800.79px] top-[171px] left-[300px] gap-[24px]  bg-primary-100 mt-14">
          <div className="flex flex-wrap w-[1056px] h-[121px] gap-[27px] mx-auto">
            <div className="flex w-[1092px] h-[46px] gap-[24px] bg-primary-100">
              <div className="w-[108px] h-[46px] rounded-lg bg-primary-30 pt-[14px] pr-[16px] pb-[14px] pl-[16px] gap-[space-x-2]">
                <p className="w-[76px] h-[18px] text-secondary-91 font-semibold text-[12px] leading-[18px] text-center">
                  Add Product
                </p>
              </div>
              <div className="flex flex-wrap w-[768px] h-[46px] rounded-lg border pt-[14px] pr-[16px] pb-[14px] pl-[16px] gap-[space-x-2] text-base-100 font-semibold text-xs ">
                <div className="w-[16px] h-[18px] opacity-70 flex items-center justify-center ">
                  <img
                    src={IconSearch}
                    alt="Search"
                    className="w-[13.01px] h-[13.01px]"
                  />
                </div>

                <input
                  type="text"
                  placeholder="Search"
                  className="input input-bordered border-none  w-[712px] h-[18px] opacity-40 bg-primary-100 rounded-none mx-auto"
                />
              </div>
            </div>
            <div className="w-[1037px] h-[502px] p-6 mx-auto shadow-custom-3 shadow-custom-4 mt-10">
              <div className="overflow-x-auto ">
                <table className="table">
                  <thead className="mx-auto text-center text-neutral-15 border-none ">
                    <tr className="border-none w-[999px] h-[56px]  pt-[16px] pr-[0px] pb-[16px] pl-[0px] gap-[56px]">
                      <th></th>
                      <th>Username</th>
                      <th>Roles</th>
                      <th>Email</th>
                      <th>Create At</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody className="mx-auto text-center border-t-2  ">
                    {data.map((item) => (
                      <tr key={item.id} className="border-none w-[1003px] h-[64px] pt-[16px] pr-[0px] pb-[16px] pl-[0px] gap-[56px] text-neutral-15 ">
                        <td>
                          <img
                            src={Avatar}
                            alt="avatar"
                            className="w-[32px] h-[32px] "
                          />
                        </td>
                        <td>{item.username}</td>
                        <td>{item.role}</td>
                        <td>{item.email}</td>
                        <td>{item.createdAt}</td>
                        <td className="flex gap-5 ml-10">
                          <img
                            src={EditSquare}
                            alt="editsquare"
                            className="w-[24px] h-[24px] cursor-pointer"
                            onClick={() => handleEdit(item)}
                          />
                          <img
                            src={Trash}
                            alt="Trash"
                            className="w-[24px] h-[24px] cursor-pointer"
                            onClick={() => handleDelete(item.id)}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="flex w-[1092px] h-[48px] gap-[24px] justify-end items-center mt-10">
              <div className="flex w-[196px] h-[31px] gap-[10px] ">
                <p className="w-[42px] h-[24px] bg-primary-100 text-center flex items-center justify-center mt-1 tex-[16px] leading-6 font-normal text-primary-0 ">
                  Show
                </p>
                <div className="flex w-[79px] h-[31px] rounded-[10px] border-2 pt-[2px] pr-[10px] pb-[2px] pl-[10px] gap-[28px] border-primary-0 items-center ">
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
                  <p className="w-[42px] h-[24px] bg-primary-100 text-center flex items-center justify-center mt-1 text-[16px] leading-6 font-normal  text-primary-0">
                    entries
                  </p>
                </div>
              </div>

              <div className="join w-[159px] h-[48px]">
                <button className="join-item  w-[41px] h-[48px] pt-[14px] pr-[16px] pb-[14px] pl-[16px] gap-[space-x-2] bg-base-50 hover:bg-base-70 border-base-50 mx-auto text-primary-0 text-sm hover:text-primary-100">
                  «
                </button>
                <button className="join-item  w-[77px] h-[48px] pt-[14px] pr-[16px] pb-[14px] pl-[16px] gap-[space-x-2] bg-base-50 border-base-50 text-sm leading-5 font-semibold text-base-100 ">
                  Page 1
                </button>
                <button className="join-item  w-[41px] h-[48px] pt-[14px] pr-[16px] pb-[14px] pl-[16px] gap-[space-x-2] bg-base-50 hover:bg-base-70 border-base-50 mx-auto text-primary-0 text-sm hover:text-primary-100">
                  »
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      {isEditModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Edit Item</h2>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Username
                </label>
                <input
                  type="text"
                  value={currentEditItem.username}
                  className="mt-1 p-2 border w-full"
                  // Add logic to handle input change
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Role
                </label>
                <input
                  type="text"
                  value={currentEditItem.role}
                  className="mt-1 p-2 border w-full"
                  // Add logic to handle input change
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  value={currentEditItem.email}
                  className="mt-1 p-2 border w-full"
                  // Add logic to handle input change
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="mr-4 bg-gray-500 text-white p-2 rounded"
                  onClick={closeEditModal}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white p-2 rounded"
                  // Add logic to handle form submission
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation Dialog */}
      {isDeleteDialogOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Confirm Delete</h2>
            <p>Are you sure you want to delete this item?</p>
            <div className="flex justify-end mt-4">
              <button
                className="mr-4 bg-gray-500 text-white p-2 rounded"
                onClick={closeDeleteDialog}
              >
                Cancel
              </button>
              <button
                className="bg-red-500 text-white p-2 rounded"
                onClick={confirmDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
