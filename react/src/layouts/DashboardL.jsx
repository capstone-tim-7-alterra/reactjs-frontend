import Sidebar from '../components/sidebar/Sidebar';
import Navbar from "../components/navbarAdmin/NavbarAdmin"
import Breadcrumbs from '../components/breadcrumb/BreadcrumbM';
import { Outlet } from 'react-router-dom';

export default function DashboardL() {

    return (
        <>
            <div className="flex flex-row bg-primary-100">
                <Sidebar/>

                <main className="xl:w-[1140px] relative z-30 grow">
                    <Navbar />
                    <section className="xl:mx-[42px] xl:py-6 space-y-6">
                        <Breadcrumbs/>
                        <Outlet/>
                    </section>
                </main>
            </div>
        </>
    )
}