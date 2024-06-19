import Sidebar from '../components/sidebarAdmin/Sidebar';
import Navbar from "../components/navbarAdmin/NavbarAdmin"
import Breadcrumbs from '../components/breadcrumbAdmin/Breadcrumbs';
import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function DashboardL() {
    console.log('DashboardL');

    const navigate = useNavigate();
    
    useEffect(() => {
    if(
        localStorage.getItem("token") === null
      ){
        navigate("/login");
        return;  
      };
    });
    
    return (
        <>
            <div className="flex flex-row bg-primary-100 relative">
                <Sidebar/>

                <main className="md:w-full lg:w-4/5 xl:w-[1140px] xl:ml-[300px] relative z-30 grow flex-col justify-center lg:ml-[20%]">
                    <Navbar/>
                    <section className="xl:mx-[42px] mx-auto lg:mx-8 xl:py-6 lg:py-5 md:p-3 sm:p-2 space-y-6 flex-col justify-center bg-white">
                        <Breadcrumbs/>
                        <Outlet/>
                    </section>
                </main>
            </div>
        </>
    )
}