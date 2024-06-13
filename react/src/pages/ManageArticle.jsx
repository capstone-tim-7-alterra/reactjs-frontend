import { Link } from "react-router-dom";
import Buy from "../assets/icons/dashboard/GroupProduct.svg";
import Profit from "../assets/icons/dashboard/GroupProfit.svg";
import Plus from "../assets/icons/dashboard/Plus.svg";
import Search from "../assets/icons/dashboard/Search.svg";
import HeroMockup from "../assets/icons/article/hero-article.jpg";
import Edit from "../assets/icons/article/Edit.svg";
import Trash from "../assets/icons/article/Trash.svg";
// import Share from '../assets/icons/article/Share.svg'
// import Comment from '../assets/icons/article/Comment.svg'
// import Eye from '../assets/icons/article/Eye.svg'

export default function ManageArticle() {
  return (
    <>
      <div className="grid grid-cols-4 gap-[20px]">
        <div className="dashboard-summary">
          <img className="xl:w-[50px]" src={Buy} alt="Product-Sold" />
          <div className="flex-col">
            <h3 className="font-bold text-sm text-[#9593A0]">Total Visitor</h3>
            <p className="text-xl font-bold leading-[30px]">12</p>
          </div>
        </div>
        <div className="dashboard-summary">
          <img className="xl:w-[50px]" src={Profit} alt="Product-Profit" />
          <div className="flex-col">
            <h3 className="font-bold text-sm text-[#9593A0]">Total Likes</h3>
            <p className="text-xl font-bold leading-[30px]">678.720</p>
          </div>
        </div>
        <div className="dashboard-summary">
          <img className="xl:w-[50px]" src={Buy} alt="Ticket-Sold" />
          <div className="flex-col">
            <h3 className="font-bold text-sm text-[#9593A0]">Ticket Comment</h3>
            <p className="text-xl font-bold leading-[30px]">320</p>
          </div>
        </div>
        <div className="dashboard-summary">
          <img className="xl:w-[50px]" src={Profit} alt="Ticket-Profit" />
          <div className="flex-col">
            <h3 className="font-bold text-sm text-[#9593A0]">Total Shares</h3>
            <p className="text-xl font-bold leading-[30px]">711.211</p>
          </div>
        </div>
      </div>

      <div className="gap-[10px] inline-flex">
        <Link
          className="flex-none btn bg-[#980019] text-white xl:px-6 xl:py-[10px]"
          to="add">
          <img src={Plus} alt="Plus" />
          New Post
        </Link>
        <label className="grow input input-bordered flex items-center gap-2 xl:w-[921px] bg-primary-100">
          <img src={Search} alt="Search" />
          <input type="text" className="grow" placeholder="Type here" />
        </label>
      </div>

      <div className="mx-auto grid grid-cols-1 gap-x-6 gap-y-6 lg:grid-cols-3">
        <article className="article-list">
          <img
            className="rounded-xl w-full xl:h-178px"
            src={HeroMockup}
            alt="article-hero"
          />
          <div>
            <h3 className="text-black text-xs font-semibold leading-normal tracking-wide">
              Mengenal Sejarah dan Asal Tari Kecak - Kreasi Nusantara
            </h3>
            <time className="text-[10px] tracking-wide">
              Published • May 29, 2023
            </time>
            <p className="text-black text-xs">Admin Nanda</p>
          </div>
          <div className="w-full inline-flex  gap-4 justify-end">
            <Link to="./edit">
              <img src={Edit} alt="Share" />
            </Link>
            <Link>
              <img src={Trash} alt="Comment" />
            </Link>
          </div>
        </article>

        <article className="article-list">
          <img
            className="rounded-xl w-full xl:h-178px"
            src={HeroMockup}
            alt="article-hero"
          />
          <div>
            <h3 className="text-black text-xs font-semibold leading-normal tracking-wide">
              Mengenal Sejarah dan Asal Tari Kecak - Kreasi Nusantara
            </h3>
            <time className="text-[10px] tracking-wide">
              Published • May 29, 2023
            </time>
            <p className="text-black text-xs">Admin Nanda</p>
          </div>
          <div className="w-full inline-flex  gap-4 justify-end">
            <img src={Edit} alt="Share" />
            <img src={Trash} alt="Comment" />
          </div>
        </article>

        <article className="article-list">
          <img
            className="rounded-xl w-full xl:h-178px"
            src={HeroMockup}
            alt="article-hero"
          />
          <div>
            <h3 className="text-black text-xs font-semibold leading-normal tracking-wide">
              Mengenal Sejarah dan Asal Tari Kecak - Kreasi Nusantara
            </h3>
            <time className="text-[10px] tracking-wide">
              Published • May 29, 2023
            </time>
            <p className="text-black text-xs">Admin Nanda</p>
          </div>
          <div className="w-full inline-flex  gap-4 justify-end">
            <img src={Edit} alt="Share" />
            <img src={Trash} alt="Comment" />
          </div>
        </article>

        <article className="article-list">
          <img
            className="rounded-xl w-full xl:h-178px"
            src={HeroMockup}
            alt="article-hero"
          />
          <div>
            <h3 className="text-black text-xs font-semibold leading-normal tracking-wide">
              Mengenal Sejarah dan Asal Tari Kecak - Kreasi Nusantara
            </h3>
            <time className="text-[10px] tracking-wide">
              Published • May 29, 2023
            </time>
            <p className="text-black text-xs">Admin Nanda</p>
          </div>
          <div className="w-full inline-flex  gap-4 justify-end">
            <img src={Edit} alt="Share" />
            <img src={Trash} alt="Comment" />
          </div>
        </article>

        <article className="article-list">
          <img
            className="rounded-xl w-full xl:h-178px"
            src={HeroMockup}
            alt="article-hero"
          />
          <div>
            <h3 className="text-black text-xs font-semibold leading-normal tracking-wide">
              Mengenal Sejarah dan Asal Tari Kecak - Kreasi Nusantara
            </h3>
            <time className="text-[10px] tracking-wide">
              Published • May 29, 2023
            </time>
            <p className="text-black text-xs">Admin Nanda</p>
          </div>
          <div className="w-full inline-flex  gap-4 justify-end">
            <img src={Edit} alt="Share" />
            <img src={Trash} alt="Comment" />
          </div>
        </article>

        <article className="article-list">
          <img
            className="rounded-xl w-full xl:h-178px"
            src={HeroMockup}
            alt="article-hero"
          />
          <div>
            <h3 className="text-black text-xs font-semibold leading-normal tracking-wide">
              Mengenal Sejarah dan Asal Tari Kecak - Kreasi Nusantara
            </h3>
            <time className="text-[10px] tracking-wide">
              Published • May 29, 2023
            </time>
            <p className="text-black text-xs">Admin Nanda</p>
          </div>
          <div className="w-full inline-flex  gap-4 justify-end">
            <img src={Edit} alt="Share" />
            <img src={Trash} alt="Comment" />
          </div>
        </article>

        <article className="article-list">
          <img
            className="rounded-xl w-full xl:h-178px"
            src={HeroMockup}
            alt="article-hero"
          />
          <div>
            <h3 className="text-black text-xs font-semibold leading-normal tracking-wide">
              Mengenal Sejarah dan Asal Tari Kecak - Kreasi Nusantara
            </h3>
            <time className="text-[10px] tracking-wide">
              Published • May 29, 2023
            </time>
            <p className="text-black text-xs">Admin Nanda</p>
          </div>
          <div className="w-full inline-flex  gap-4 justify-end">
            <img src={Edit} alt="Share" />
            <img src={Trash} alt="Comment" />
          </div>
        </article>

        <article className="article-list">
          <img
            className="rounded-xl w-full xl:h-178px"
            src={HeroMockup}
            alt="article-hero"
          />
          <div>
            <h3 className="text-black text-xs font-semibold leading-normal tracking-wide">
              Mengenal Sejarah dan Asal Tari Kecak - Kreasi Nusantara
            </h3>
            <time className="text-[10px] tracking-wide">
              Published • May 29, 2023
            </time>
            <p className="text-black text-xs">Admin Nanda</p>
          </div>
          <div className="w-full inline-flex  gap-4 justify-end">
            <img src={Edit} alt="Share" />
            <img src={Trash} alt="Comment" />
          </div>
        </article>
      </div>
    </>
  );
}
