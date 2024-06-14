import Sidebar from '../components/sidebar/Sidebar';
import Navbar from "../components/navbarAdmin/NavbarAdmin"
import Breadcrumbs from '../components/breadcrumb/Breadcrumbs';
import { Outlet } from 'react-router-dom';

export default function DashboardL() {

    return (
        <>
            <div className="flex flex-row bg-primary-100 relative">
                <Sidebar/>

                <main className="xl:ml-[300px] relative z-30 grow flex-col justify-center">
                    <Navbar/>
                    <section className="xl:mx-[42px] mx-auto lg:mx-8 xl:py-6 lg:py-5 md:p-3 space-y-6 flex-col justify-center bg-white">
                        <Breadcrumbs/>
                        <Outlet/>
                    </section>
                </main>
            </div>
        </>
    )
}