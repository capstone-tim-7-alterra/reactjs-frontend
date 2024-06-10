import { NavLink } from 'react-router-dom';
import Logo from "../../assets/icons/Logo.png"
import Category  from "../../assets/icons/sidebar/Category.svg"
import Event  from "../../assets/icons/sidebar/Event.svg"
import Product  from "../../assets/icons/sidebar/Cube.svg"
import Article  from "../../assets/icons/sidebar/Globe.svg"
import Admin  from "../../assets/icons/sidebar/GearSix.svg"
import Logout  from "../../assets/icons/sidebar/Logout.svg"


export default function Sidebar () {
    return (
        <aside className="sidebar">
            <header className="sidebar-heading">
                <img className="xl:w-[85px]" src={ Logo } />
                <h1 className="text-red-700 text-xl font-semibold leading-[23px]">Kreasi<br/>Nusantara</h1>
            </header>

            <nav className="sidebar-nav">
                <NavLink className="xl:w-[300px]" to="/dashboard">
                    <div className="sidebar-list">
                        <img className="xl:w-6" src={Category} alt="" />
                        <h2 className="text-zinc-600">Dashboard</h2>
                    </div>
                </NavLink>
                <NavLink className="xl:w-[300px]" to="/dashboard/manage-event">
                    <div className="sidebar-list">
                        <img className="xl:w-6" src={Event} alt="" />
                        <h2 className="text-zinc-600">Manage Event</h2>
                    </div>
                </NavLink>
                <NavLink className="xl:w-[300px]" to="/dashboard/manage-product">
                    <div className="sidebar-list">
                        <img className="xl:w-6" src={Product} alt="" />
                        <h2 className="text-zinc-600">Manage Product</h2>
                    </div>
                </NavLink>
                <NavLink className="bg-[#980019] xl:w-[300px] px-[45px] py-[17px]"  to="/dashboard/manage-article">
                    <div className=" inline-flex font-semibold text-sm space-x-5 items-center px-[30px]">
                        <img className="xl:w-6" src={Article} alt="" />
                        <h2 className="text-white leading-[18px]">Manage Article</h2>
                    </div>
                </NavLink>
                <NavLink className=" xl:w-[300px]"  to="/dashboard/manage-admin">
                    <div className="sidebar-list">
                        <img className="xl:w-6" src={Admin} alt="" />
                        <h2 className="text-zinc-600">Manage Admin</h2>
                    </div>
                </NavLink>
                <NavLink className="xl:w-[300px]"  to="/dashboard/manage-product">
                    <div className="sidebar-list">
                        <img className="xl:w-6" src={Logout} alt="" />
                        <h2 className="text-zinc-600">Log Out</h2>
                    </div>
                </NavLink>
            </nav>
        </aside>
    )
}