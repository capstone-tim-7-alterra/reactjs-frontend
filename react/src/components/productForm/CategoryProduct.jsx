import React, { useState } from "react";
import IconTambah from "../../assets/icons/iconTambah.svg";
import { NavLink } from "react-router-dom";

export default function CategoryProduct() {
  const [categories, setCategories] = useState([]);
  const [showAddCategory, setShowAddCategory] = useState(false);
  const [newCategory, setNewCategory] = useState("");

  const handleAddCategory = () => {
    setShowAddCategory(true);
  };

  const handleCancelAddCategory = () => {
    setShowAddCategory(false);
    setNewCategory("");
  };

  const handleAddNewCategory = async () => {
    if (newCategory.trim() !== "") {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          throw new Error("Token tidak ditemukan di localStorage");
        }

        const response = await fetch(
          import.meta.env.VITE_API_PRODUCT_CATEGORY_URL,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ name: newCategory.trim() }),
          }
        );

        if (!response.ok) {
          throw new Error("Gagal menambah kategori");
        }

        const newCategoryObj = await response.json();

        setCategories([...categories, newCategoryObj.data]);

        setShowAddCategory(false);
        setNewCategory("");
      } catch (error) {
        console.error("Error menambah kategori:", error);
      }
    }
  };
  return (
    <div>
      <label
        htmlFor="my_modal_6"
        className="btn btn-primary w-[56px] h-[45px] rounded-lg gap-[space-x-2] bg-base-50 border-base-50 hover:border-base-300 hover:bg-base-300 mx-auto "
        onClick={handleAddCategory}>
        <img src={IconTambah} alt="tambah" className="w-6 min-h-6" />
      </label>

      <input type="checkbox" id="my_modal_6" className="modal-toggle" />

      {showAddCategory && (
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box bg-primary-100 min-w-lg h-[284px] rounded-lg pt-[24px] pr-[24px] pb-[24px] pl-[24px]">
            <h3 className="text-lg text-[#1F2937] font-semibold text-[18px] leading-[27px] max-w-[464px] h-[27px]">
              Kategori
            </h3>
            <p className="py-4 max-w-[464px] h-[24px] font-normal text-[16px] leading-6 mb-6">
              Tambah kategori
            </p>
            <div>
              <input
                type="text"
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
                placeholder="ketik di sini"
                className="input input-bordered w-full bg-white text-black"
                required
              />
            </div>
            <div className="modal-action flex justify-end mx-auto mt-28">
              <NavLink
                className="btn bg-base-50 border-base-50 hover:bg-[#DBDBDD] hover:border-base-50 rounded-lg text-primary-0 font-semibold text-center w-[76px] h-[46px] mr-2"
                onClick={handleCancelAddCategory}>
                Batal
              </NavLink>
              <NavLink
                className="btn text-primary-100 font-semibold bg-primary-30 border-primary-30 hover:bg-primary-40 hover:border-primary-40 w-[76px] h-[46px]"
                onClick={handleAddNewCategory}>
                Unggah
              </NavLink>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
}
