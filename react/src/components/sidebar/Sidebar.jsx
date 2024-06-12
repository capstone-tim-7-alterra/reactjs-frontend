import { NavLink } from 'react-router-dom';
import Logo from "../../assets/icons/Logo.png"
import Category  from "../../assets/icons/sidebar/Category.svg"
import CategoryActive from "../../assets/icons/sidebar/CategoryActive.svg"
import Event  from "../../assets/icons/sidebar/Event.svg"
import EventActive from "../../assets/icons/sidebar/TicketActive.svg"
import Product  from "../../assets/icons/sidebar/Cube.svg"
import ProductActive from "../../assets/icons/sidebar/CubeActive.svg"
import Article  from "../../assets/icons/sidebar/Globe.svg"
import ArticleActive  from "../../assets/icons/sidebar/GlobeActive.svg"
import Admin  from "../../assets/icons/sidebar/GearSix.svg"
import AdminActive  from "../../assets/icons/sidebar/GearSixActive.svg"


export default function Sidebar () {
    return (
        <aside className="sidebar xl:fixed">
            <header className="sidebar-heading flex justify-center">
                <img className="xl:w-[85px] lg:w-[55px]" src={ Logo } />
                <h1 className="text-red-700 lg:text-md xl:text-xl font-semibold leading-[23px]">Kreasi<br/>Nusantara</h1>
            </header>

            <nav className="sidebar-nav">
                <NavLink className={({ isActive }) => isActive ? 'xl:w-[300px] bg-[#980019] lg:pl-[30px]' : 'xl:w-[300px]'} to="/dashboard" end>
                    {({ isActive }) => (
                        <div className="sidebar-list">
                            <img className="xl:w-6" src={isActive ? CategoryActive : Category} alt="Category" />
                            <h2 className={isActive ? "text-white xl:text-base" : "text-zinc-600 xl:text-sm"}>Dashboard</h2>
                        </div>
                    )}
                </NavLink>
                <NavLink className={({ isActive }) => isActive ? 'xl:w-[300px] bg-[#980019] lg:pl-[30px]' : 'xl:w-[300px]'} to="/dashboard/manage-event">
                    {({ isActive }) => (
                        <div className="sidebar-list">
                            <img className="xl:w-6" src={isActive ? EventActive : Event} alt="Event" />
                            <h2 className={isActive ? "text-white xl:text-base" : "text-zinc-600 xl:text-sm"}>Manage Event</h2>
                        </div>
                    )}
                </NavLink>
                <NavLink className={({ isActive }) => isActive ? 'xl:w-[300px] bg-[#980019] lg:pl-6 xl:pl-[30px]' : 'xl:w-[300px]'} to="/dashboard/manage-product">
                    {({ isActive }) => (
                        <div className="sidebar-list">
                            <img className="xl:w-6" src={isActive ? ProductActive : Product} alt="Product" />
                            <h2 className={isActive ? "text-white xl:text-base" : "text-zinc-600 xl:text-sm"}>Manage Product</h2>
                        </div>
                    )}
                </NavLink>
                <NavLink className={({ isActive }) => isActive ? 'xl:w-[300px] bg-[#980019] lg:pl-[30px]' : 'xl:w-[300px]'} to="/dashboard/manage-article">
                    {({ isActive }) => (
                        <div className="sidebar-list">
                            <img className="xl:w-6" src={isActive ? ArticleActive : Article} alt="Article" />
                            <h2 className={isActive ? "text-white xl:text-base" : "text-zinc-600 xl:text-sm"}>Manage Article</h2>
                        </div>
                    )}
                </NavLink>
                <NavLink className={({ isActive }) => isActive ? 'xl:w-[300px] bg-[#980019] lg:pl-[30px]' : 'xl:w-[300px]'} to="/dashboard/manage-admin">
                    {({ isActive }) => (
                        <div className="sidebar-list">
                            <img className="xl:w-6" src={isActive ? AdminActive : Admin} alt="Admin" />
                            <h2 className={isActive ? "text-white xl:text-base" : "text-zinc-600 xl:text-sm"}>Manage Admin</h2>
                        </div>
                    )}
                </NavLink>
            </nav>
        </aside>
    )
}