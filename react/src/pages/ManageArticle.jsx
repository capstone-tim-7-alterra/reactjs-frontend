import { Link } from 'react-router-dom';
import Buy from '../assets/icons/dashboard/GroupProduct.svg'
import Profit from '../assets/icons/dashboard/GroupProfit.svg'
import Plus from '../assets/icons/dashboard/Plus.svg'
import Search from '../assets/icons/dashboard/Search.svg'
import HeroMockup from '../assets/icons/article/hero-article.jpg'
import Share from '../assets/icons/article/Share.svg'
import Comment from '../assets/icons/article/Comment.svg'
import Eye from '../assets/icons/article/Eye.svg'



export default function ManageArticle() {
  return (
    <>
        <div className="inline-flex space-x-[27px]">
            <div className="dashboard-summary-primary">
                <img className="xl:w-[50px]" src={Buy} alt="Product-Sold" />
                <div className="flex-col"   >
                    <h3 className="font-bold text-sm text-[#9593A0] capitalize">Total Visitor</h3>
                    <p className="text-xl font-bold leading-[30px]">12</p>
                </div>
            </div>
            <div className="dashboard-summary-secondary">
                <img className="xl:w-[50px]" src={Profit} alt="Product-Profit" />
                <div className="flex-col">
                    <h3 className="font-bold text-sm text-[#9593A0] capitalize">Total Likes</h3>
                    <p className="text-xl font-bold leading-[30px]">IDR 589.000</p>
                </div>
            </div>
            <div className="dashboard-summary-primary">
                <img className="xl:w-[50px]" src={Buy} alt="Ticket-Sold" />
                <div className="flex-col">
                    <h3 className="font-bold text-sm text-[#9593A0] capitalize">Ticket Comments</h3>
                    <p className="text-xl font-bold leading-[30px]">320</p>
                </div>
            </div>
            <div className="dashboard-summary-secondary">
                <img className="xl:w-[50px]" src={Profit} alt="Ticket-Profit" />
                <div className="flex-col">
                    <h3 className="font-bold text-sm text-[#9593A0] capitalize">Total Shares</h3>
                    <p className="text-xl font-bold leading-[30px]">IDR 712.000</p>
                </div>
            </div>
        </div>

        <div className="space-x-[10px] inline-flex">
            <Link className="btn bg-[#980019] text-white xl:px-6 xl:py-[10px]" to="add">
                <img src={ Plus } alt="Plus"/>
                New Post
            </Link>
            <label className="input input-bordered flex items-center gap-2 xl:w-[921px] bg-primary-100">
                <img src={ Search } alt="Search" />
                <input type="text" className="grow" placeholder="Type here" />
            </label>
        </div>

        <div className="mx-auto grid grid-cols-1 gap-x-6 gap-y-6 lg:grid-cols-3">
            <article className="article-list">
                <img className="rounded-xl w-full xl:h-178px" src={ HeroMockup } alt="article-hero"/>
                <div>
                    <h3 className="text-black text-xs font-semibold leading-normal tracking-wide">
                        Mengenal Sejarah dan Asal Tari Kecak - Kreasi Nusantara
                    </h3>
                    <time className="text-[10px] tracking-wide">Published • May 29, 2023</time>
                    <p className="text-black text-xs">Admin Nanda</p>
                </div>
                <div className="w-full inline-flex justify-end">
                    <img src={ Share } alt="Share" />
                    <img src={ Comment } alt="Comment" />
                    <img src={ Eye } alt="Eye" />
                </div>
            </article>

            <article className="article-list">
                <img className="rounded-xl w-full xl:h-178px" src={ HeroMockup } alt="article-hero"/>
                <div>
                    <h3 className="text-black text-xs font-semibold leading-normal tracking-wide">
                        Mengenal Sejarah dan Asal Tari Kecak - Kreasi Nusantara
                    </h3>
                    <time className="text-[10px] tracking-wide">Published • May 29, 2023</time>
                    <p className="text-black text-xs">Admin Nanda</p>
                </div>
                <div className="w-full inline-flex justify-end">
                    <img src={ Share } alt="Share" />
                    <img src={ Comment } alt="Comment" />
                    <img src={ Eye } alt="Eye" />
                </div>
            </article>

            <article className="article-list">
                <img className="rounded-xl w-full xl:h-178px" src={ HeroMockup } alt="article-hero"/>
                <div>
                    <h3 className="text-black text-xs font-semibold leading-normal tracking-wide">
                        Mengenal Sejarah dan Asal Tari Kecak - Kreasi Nusantara
                    </h3>
                    <time className="text-[10px] tracking-wide">Published • May 29, 2023</time>
                    <p className="text-black text-xs">Admin Nanda</p>
                </div>
                <div className="w-full inline-flex justify-end">
                    <img src={ Share } alt="Share" />
                    <img src={ Comment } alt="Comment" />
                    <img src={ Eye } alt="Eye" />
                </div>
            </article>

            <article className="article-list">
                <img className="rounded-xl w-full xl:h-178px" src={ HeroMockup } alt="article-hero"/>
                <div>
                    <h3 className="text-black text-xs font-semibold leading-normal tracking-wide">
                        Mengenal Sejarah dan Asal Tari Kecak - Kreasi Nusantara
                    </h3>
                    <time className="text-[10px] tracking-wide">Published • May 29, 2023</time>
                    <p className="text-black text-xs">Admin Nanda</p>
                </div>
                <div className="w-full inline-flex justify-end">
                    <img src={ Share } alt="Share" />
                    <img src={ Comment } alt="Comment" />
                    <img src={ Eye } alt="Eye" />
                </div>
            </article>

            <article className="article-list">
                <img className="rounded-xl w-full xl:h-178px" src={ HeroMockup } alt="article-hero"/>
                <div>
                    <h3 className="text-black text-xs font-semibold leading-normal tracking-wide">
                        Mengenal Sejarah dan Asal Tari Kecak - Kreasi Nusantara
                    </h3>
                    <time className="text-[10px] tracking-wide">Published • May 29, 2023</time>
                    <p className="text-black text-xs">Admin Nanda</p>
                </div>
                <div className="w-full inline-flex justify-end">
                    <img src={ Share } alt="Share" />
                    <img src={ Comment } alt="Comment" />
                    <img src={ Eye } alt="Eye" />
                </div>
            </article>

            <article className="article-list">
                <img className="rounded-xl w-full xl:h-178px" src={ HeroMockup } alt="article-hero"/>
                <div>
                    <h3 className="text-black text-xs font-semibold leading-normal tracking-wide">
                        Mengenal Sejarah dan Asal Tari Kecak - Kreasi Nusantara
                    </h3>
                    <time className="text-[10px] tracking-wide">Published • May 29, 2023</time>
                    <p className="text-black text-xs">Admin Nanda</p>
                </div>
                <div className="w-full inline-flex justify-end">
                    <img src={ Share } alt="Share" />
                    <img src={ Comment } alt="Comment" />
                    <img src={ Eye } alt="Eye" />
                </div>
            </article>

            <article className="article-list">
                <img className="rounded-xl w-full xl:h-178px" src={ HeroMockup } alt="article-hero"/>
                <div>
                    <h3 className="text-black text-xs font-semibold leading-normal tracking-wide">
                        Mengenal Sejarah dan Asal Tari Kecak - Kreasi Nusantara
                    </h3>
                    <time className="text-[10px] tracking-wide">Published • May 29, 2023</time>
                    <p className="text-black text-xs">Admin Nanda</p>
                </div>
                <div className="w-full inline-flex justify-end">
                    <img src={ Share } alt="Share" />
                    <img src={ Comment } alt="Comment" />
                    <img src={ Eye } alt="Eye" />
                </div>
            </article>

            <article className="article-list">
                <img className="rounded-xl w-full xl:h-178px" src={ HeroMockup } alt="article-hero"/>
                <div>
                    <h3 className="text-black text-xs font-semibold leading-normal tracking-wide">
                        Mengenal Sejarah dan Asal Tari Kecak - Kreasi Nusantara
                    </h3>
                    <time className="text-[10px] tracking-wide">Published • May 29, 2023</time>
                    <p className="text-black text-xs">Admin Nanda</p>
                </div>
                <div className="w-full inline-flex justify-end">
                    <img src={ Share } alt="Share" />
                    <img src={ Comment } alt="Comment" />
                    <img src={ Eye } alt="Eye" />
                </div>
            </article>
        </div>                            
    </>
  )
}
