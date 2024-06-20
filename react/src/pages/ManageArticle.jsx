import ArticleList from '../components/manageArticleC/ArticleList';
import Buy from '../assets/icons/dashboard/GroupProduct.svg'
import Profit from '../assets/icons/dashboard/GroupProfit.svg'


export default function ManageArticle() {
    
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

        <ArticleList/>

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
