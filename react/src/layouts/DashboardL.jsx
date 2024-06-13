import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/NavbarAdmin/navbar";
import Breadcrumbs from "../components/breadcrumb/Breadcrumbs";
import { Outlet } from "react-router-dom";

export default function DashboardL() {
  return (
    <>
      <div className="flex flex-row bg-primary-100 relative">
        <Sidebar />
        <main className="xl:ml-[300px] xl:max-w-[1140px] relative z-30 grow flex-col justify-center">
          <Navbar />
          <section className="xl:mx-[42px] mx-auto lg:mx-8 xl:py-6 lg:py-5 space-y-6">
            <Breadcrumbs />
            <Outlet />
          </section>
        </main>
      </div>
    </>
  );
}
