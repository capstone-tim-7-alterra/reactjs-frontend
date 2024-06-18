import Breadcrumbs from "../breadcrumb/Breadcrumbs";
import EditProductInformation from "./EditProductInformation";
import EditDetailProduct from "./EditDetailProducts";
import EditPrice from "./EditPrice";

export default function EditProduct() {
  return (
    <>
      <section className="section-editProduct mt-4">
        <Breadcrumbs />
        <div className="w-[1440px] h-[2564px] top-[108px] left-[1px] p-6 gap-[80px]">
          <div className="w-[1156px] h-[2416px] gap-[50px] mx-auto mt-14 ">
            <h1 className="w-[328px] h-[48px] text-[32px] leading-[48px] font-semibold text-primary-0 mb-10">
              Edit Product
            </h1>
            <EditProductInformation />
            <EditDetailProduct />
            <EditPrice />
          </div>
        </div>
        <div className="absolute flex w-[424px] h-[60px] top-[2771px] left-[906px]  gap-[24px] -mt-48">
          <button className="btn-editProduct-cancel">Cancel</button>
          <button className="btn-editProduct-save">Save</button>
        </div>
      </section>
    </>
  );
}
