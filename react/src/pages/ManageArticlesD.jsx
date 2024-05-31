import Navbar from "../navbar/Navbar"
import Logo from "../../assets/icons/Logo.png"
import Category  from "../../assets/icons/Category.svg"
import Event  from "../../assets/icons/Event.svg"
import Product  from "../../assets/icons/Cube.svg"
import Article  from "../../assets/icons/Globe.svg"
import Admin  from "../../assets/icons/GearSix.svg"
import Logout  from "../../assets/icons/Logout.svg"
import Buy from "../../assets/icons/GroupProduct.svg"
import Profit from "../../assets/icons/GroupProfit.svg"


export default function DashboardArticles() {
    return (
        <>
            <div className="flex flex-row font-poppins">
                <aside className="sidebar">
                    <header className="sidebar-heading">
                        <img className="xl:w-[85px]" src={ Logo } />
                        <h1 className="text-red-700 text-xl font-semibold leading-[23px]">Kreasi<br/>Nusantara</h1>
                    </header>

                    <nav className="sidebar-nav">
                        <div className="xl:w-[300px]">
                            <div className="sidebar-list]">
                                <img className="xl:w-6" src={Category} alt="" />
                                <h2 className="text-zinc-600">Dashboard</h2>
                            </div>
                        </div>
                        <div className="xl:w-[300px]">
                            <div className="sidebar-list">
                                <img className="xl:w-6" src={Event} alt="" />
                                <h2 className="text-zinc-600">Manage Event</h2>
                            </div>
                        </div>
                        <div className="xl:w-[300px]">
                            <div className="sidebar-list">
                                <img className="xl:w-6" src={Product} alt="" />
                                <h2 className="text-zinc-600">Manage Product</h2>
                            </div>
                        </div>
                        <div className="bg-[#980019] xl:w-[300px] px-[45px] py-[17px]">
                            <div className=" inline-flex font-semibold text-sm space-x-5 items-center px-[30px]">
                                <img className="xl:w-6" src={Article} alt="" />
                                <h2 className="text-white leading-[18px]">Manage Article</h2>
                            </div>
                        </div>
                        <div className=" xl:w-[300px]">
                            <div className="sidebar-list">
                                <img className="xl:w-6" src={Admin} alt="" />
                                <h2 className="text-zinc-600">Manage Admin</h2>
                            </div>
                        </div>
                        <div className="xl:w-[300px]">
                            <div className="sidebar-list">
                                <img className="xl:w-6" src={Logout} alt="" />
                                <h2 className="text-zinc-600">Log Out</h2>
                            </div>
                        </div>
                    </nav>
                </aside>

                <main className="xl:w-[1140px] relative z-30 grow">
                    <Navbar pages={ "Manage Article" }/>

                    <section className="xl:mx-[42px] xl:py-6 space-y-6">
                        <div className="breadcrumbs ">
                            <ul>
                                <li><a href="#">Dashboard</a></li> 
                                <li><a href="#">Manage Product</a></li> 
                            </ul>
                        </div>

                        <div className="inline-flex space-x-[27px]">
                            <div className="dashboard-summary-primary">
                                <img className="xl:w-[50px]" src={Buy} alt="Product-Sold" />
                                <div className="flex-col">
                                    <h3 className="font-bold text-sm text-[#9593A0] capitalize">Product Sold</h3>
                                    <p className="text-xl font-bold leading-[30px]">12</p>
                                </div>
                            </div>
                            <div className="dashboard-summary-secondary">
                                <img className="xl:w-[50px]" src={Profit} alt="Product-Profit" />
                                <div className="flex-col">
                                    <h3 className="font-bold text-sm text-[#9593A0] capitalize">Product Profit</h3>
                                    <p className="text-xl font-bold leading-[30px]">IDR 589.000</p>
                                </div>
                            </div>
                            <div className="dashboard-summary-primary">
                                <img className="xl:w-[50px]" src={Buy} alt="Ticket-Sold" />
                                <div className="flex-col">
                                    <h3 className="font-bold text-sm text-[#9593A0] capitalize">Ticket Sold</h3>
                                    <p className="text-xl font-bold leading-[30px]">320</p>
                                </div>
                            </div>
                            <div className="dashboard-summary-secondary">
                                <img className="xl:w-[50px]" src={Profit} alt="Ticket-Profit" />
                                <div className="flex-col">
                                    <h3 className="font-bold text-sm text-[#9593A0] capitalize">Event Ticket Profit</h3>
                                    <p className="text-xl font-bold leading-[30px]">IDR 712.000</p>
                                </div>
                            </div>
                        </div>

                        <div className="space-x-[10px] inline-flex">
                            <button className="btn bg-[#980019] text-white xl:px-6 xl:py-[10px]">
                                <img src="../../../public/icons/Plus.svg" alt="Plus"/>
                                Button
                            </button>
                            <label className="input input-bordered flex items-center gap-2 xl:w-[921px]">
                                <img src="/public/icons/Search.svg" alt="Search" />
                                <input type="text" className="grow" placeholder="Type here" />
                            </label>
                        </div>

                        <div className="mx-auto grid grid-cols-1 gap-x-6 gap-y-6 lg:grid-cols-3">
                            <article className="article-list">
                                <img className="rounded-xl w-full xl:h-178px" src="../../../public/news/hero-article.jpg" alt="article-hero"/>
                                <div>
                                    <h3 className="text-black text-xs font-semibold leading-normal tracking-wide">
                                        Mengenal Sejarah dan Asal Tari Kecak - Kreasi Nusantara
                                    </h3>
                                    <time className="text-[10px] tracking-wide">Published • May 29, 2023</time>
                                    <p className="text-black text-xs">Admin Nanda</p>
                                </div>
                                <div className="w-full inline-flex justify-end">
                                    <img src="../../../public/icons/article/Share.svg" alt="Share" />
                                    <img src="../../../public/icons/article/Comment.svg" alt="Comment" />
                                    <img src="../../../public/icons/article/Eye.svg" alt="Eye" />
                                </div>
                            </article>

                            <article className="article-list">
                                <img className="rounded-xl w-full xl:h-178px" src="../../../public/news/hero-article.jpg" alt="article-hero"/>
                                <div>
                                    <h3 className="text-black text-xs font-semibold leading-normal tracking-wide">
                                        Mengenal Sejarah dan Asal Tari Kecak - Kreasi Nusantara
                                    </h3>
                                    <time className="text-[10px] tracking-wide">Published • May 29, 2023</time>
                                    <p className="text-black text-xs">Admin Nanda</p>
                                </div>
                                <div className="w-full inline-flex justify-end">
                                    <img src="../../../public/icons/article/Share.svg" alt="Share" />
                                    <img src="../../../public/icons/article/Comment.svg" alt="Comment" />
                                    <img src="../../../public/icons/article/Eye.svg" alt="Eye" />
                                </div>
                            </article>

                            <article className="article-list">
                                <img className="rounded-xl w-full xl:h-178px" src="../../../public/news/hero-article.jpg" alt="article-hero"/>
                                <div>
                                    <h3 className="text-black text-xs font-semibold leading-normal tracking-wide">
                                        Mengenal Sejarah dan Asal Tari Kecak - Kreasi Nusantara
                                    </h3>
                                    <time className="text-[10px] tracking-wide">Published • May 29, 2023</time>
                                    <p className="text-black text-xs">Admin Nanda</p>
                                </div>
                                <div className="w-full inline-flex justify-end">
                                    <img src="../../../public/icons/article/Share.svg" alt="Share" />
                                    <img src="../../../public/icons/article/Comment.svg" alt="Comment" />
                                    <img src="../../../public/icons/article/Eye.svg" alt="Eye" />
                                </div>
                            </article>

                            <article className="article-list">
                                <img className="rounded-xl w-full xl:h-178px" src="../../../public/news/hero-article.jpg" alt="article-hero"/>
                                <div>
                                    <h3 className="text-black text-xs font-semibold leading-normal tracking-wide">
                                        Mengenal Sejarah dan Asal Tari Kecak - Kreasi Nusantara
                                    </h3>
                                    <time className="text-[10px] tracking-wide">Published • May 29, 2023</time>
                                    <p className="text-black text-xs">Admin Nanda</p>
                                </div>
                                <div className="w-full inline-flex justify-end">
                                    <img src="../../../public/icons/article/Share.svg" alt="Share" />
                                    <img src="../../../public/icons/article/Comment.svg" alt="Comment" />
                                    <img src="../../../public/icons/article/Eye.svg" alt="Eye" />
                                </div>
                            </article>

                            <article className="article-list">
                                <img className="rounded-xl w-full xl:h-178px" src="../../../public/news/hero-article.jpg" alt="article-hero"/>
                                <div>
                                    <h3 className="text-black text-xs font-semibold leading-normal tracking-wide">
                                        Mengenal Sejarah dan Asal Tari Kecak - Kreasi Nusantara
                                    </h3>
                                    <time className="text-[10px] tracking-wide">Published • May 29, 2023</time>
                                    <p className="text-black text-xs">Admin Nanda</p>
                                </div>
                                <div className="w-full inline-flex justify-end">
                                    <img src="../../../public/icons/article/Share.svg" alt="Share" />
                                    <img src="../../../public/icons/article/Comment.svg" alt="Comment" />
                                    <img src="../../../public/icons/article/Eye.svg" alt="Eye" />
                                </div>
                            </article>

                            <article className="article-list">
                                <img className="rounded-xl w-full xl:h-178px" src="../../../public/news/hero-article.jpg" alt="article-hero"/>
                                <div>
                                    <h3 className="text-black text-xs font-semibold leading-normal tracking-wide">
                                        Mengenal Sejarah dan Asal Tari Kecak - Kreasi Nusantara
                                    </h3>
                                    <time className="text-[10px] tracking-wide">Published • May 29, 2023</time>
                                    <p className="text-black text-xs">Admin Nanda</p>
                                </div>
                                <div className="w-full inline-flex justify-end">
                                    <img src="../../../public/icons/article/Share.svg" alt="Share" />
                                    <img src="../../../public/icons/article/Comment.svg" alt="Comment" />
                                    <img src="../../../public/icons/article/Eye.svg" alt="Eye" />
                                </div>
                            </article>

                            <article className="article-list">
                                <img className="rounded-xl w-full xl:h-178px" src="../../../public/news/hero-article.jpg" alt="article-hero"/>
                                <div>
                                    <h3 className="text-black text-xs font-semibold leading-normal tracking-wide">
                                        Mengenal Sejarah dan Asal Tari Kecak - Kreasi Nusantara
                                    </h3>
                                    <time className="text-[10px] tracking-wide">Published • May 29, 2023</time>
                                    <p className="text-black text-xs">Admin Nanda</p>
                                </div>
                                <div className="w-full inline-flex justify-end">
                                    <img src="../../../public/icons/article/Share.svg" alt="Share" />
                                    <img src="../../../public/icons/article/Comment.svg" alt="Comment" />
                                    <img src="../../../public/icons/article/Eye.svg" alt="Eye" />
                                </div>
                            </article>

                            <article className="article-list">
                                <img className="rounded-xl w-full xl:h-178px" src="../../../public/news/hero-article.jpg" alt="article-hero"/>
                                <div>
                                    <h3 className="text-black text-xs font-semibold leading-normal tracking-wide">
                                        Mengenal Sejarah dan Asal Tari Kecak - Kreasi Nusantara
                                    </h3>
                                    <time className="text-[10px] tracking-wide">Published • May 29, 2023</time>
                                    <p className="text-black text-xs">Admin Nanda</p>
                                </div>
                                <div className="w-full inline-flex justify-end">
                                    <img src="../../../public/icons/article/Share.svg" alt="Share" />
                                    <img src="../../../public/icons/article/Comment.svg" alt="Comment" />
                                    <img src="../../../public/icons/article/Eye.svg" alt="Eye" />
                                </div>
                            </article>
                        </div>                            
                    </section>
                </main>
            </div>
        </>
    )
}