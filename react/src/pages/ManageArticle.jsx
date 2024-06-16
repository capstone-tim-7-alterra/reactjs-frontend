import { Link } from 'react-router-dom';
import useSWR from 'swr';
import { getAllArticles } from '../services/articleAdmin/articleService'
import Buy from '../assets/icons/dashboard/GroupProduct.svg'
import Profit from '../assets/icons/dashboard/GroupProfit.svg'
import Plus from '../assets/icons/dashboard/Plus.svg'
import Search from '../assets/icons/dashboard/Search.svg'
import HeroMockup from '../assets/icons/article/hero-article.jpg'
import Edit from '../assets/icons/article/Edit.svg'
import Trash from '../assets/icons/article/Trash.svg'


export default function ManageArticle() {
    const { data, error } = useSWR('/articles', getAllArticles);

    if (error) return <div>Error: {error.message}</div>;
    if (!data) return <div>Loading...</div>;
    
    
  return (
    <>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-[20px]">
            <div className="dashboard-summary">
                <img className="xl:w-[50px] lg:w-10 sm:w-8" src={Buy} alt="Product-Sold" />
                <div className="flex-col"   >
                    <h3 className="font-bold text-xs xl:text-sm text-[#9593A0]">Total Visitor</h3>
                    <p className="sm:text-xs lg:text-base xl:text-xl font-bold leading-[30px]">12</p>
                </div>
            </div>
            <div className="dashboard-summary">
                <img className="xl:w-[50px] lg:w-10 sm:w-8" src={Profit} alt="Product-Profit" />
                <div className="flex-col">
                    <h3 className="font-bold text-xs xl:text-sm text-[#9593A0]">Total Likes</h3>
                    <p className="sm:text-xs lg:text-base xl:text-xl font-bold leading-[30px]">678.720</p>
                </div>
            </div>
            <div className="dashboard-summary">
                <img className="xl:w-[50px] lg:w-10 sm:w-8" src={Buy} alt="Ticket-Sold" />
                <div className="flex-col">
                    <h3 className="font-bold text-xs xl:text-sm text-[#9593A0]">Ticket Comment</h3>
                    <p className="sm:text-xs lg:text-base xl:text-xl font-bold leading-[30px]">320</p>
                </div>
            </div>
            <div className="dashboard-summary">
                <img className="xl:w-[50px] lg:w-10 sm:w-8" src={Profit} alt="Ticket-Profit" />
                <div className="flex-col">
                    <h3 className="font-bold text-xs xl:text-sm text-[#9593A0]">Total Shares</h3>
                    <p className="sm:text-xs lg:text-base xl:text-xl font-bold leading-[30px]">711.211</p>
                </div>
            </div>
        </div>

        <div className="gap-[10px] flex sm:justify-center md:justify-between sm:flex-col md:flex-row">
            <Link className="grow btn bg-[#980019] text-white xl:px-6 xl:py-[10px] sm:btn-xs md:btn-sm lg:btn-md" to="add">
                <img src={ Plus } alt="Plus"/>
                New Post
            </Link>
            <label className="input input-bordered flex items-center gap-2 sm:input-xs md:input-sm lg:input-md xl:w-[921px] md:w-4/5 bg-primary-100">
                <img src={ Search } alt="Search" />
                <input type="text" className="grow" placeholder="Type here" />
            </label>
        </div>

        <div className="mx-auto grid grid-cols-1 gap-x-6 gap-y-6 lg:grid-cols-3 md:grid-cols-2">
            {data.map(article => (
            <article key={article.id} className="article-list">
                <img className="rounded-xl w-full xl:h-178px" src={ HeroMockup } alt="article-hero"/>
                <div>
                    <h3 className="text-black text-xs font-semibold leading-normal tracking-wide">
                        {article.title}
                    </h3>
                    <time className="text-[10px] tracking-wide">Published • </time>
                    <p className="text-black text-xs">Admin Nanda</p>
                </div>
                <div className="w-full inline-flex  gap-4 justify-end">
                    <img src={ Edit } alt="Share" />
                    <img src={ Trash } alt="Comment" />
                </div>
            </article>
            ))}
        </div>

        <div className='flex justify-end'>
            <div className="join">
                <button className="join-item btn btn-color-secondary">«</button>
                <button className="join-item btn btn-color-secondary">Page 22</button>
                <button className="join-item btn btn-color-secondary">»</button>
            </div>
        </div>                            
    </>
  )
}
