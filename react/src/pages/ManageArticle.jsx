import ArticleList from '../components/manageArticleC/ArticleList';
import Visitor from '../assets/icons/dashboard/GroupVisitor.svg'
import Likes from '../assets/icons/dashboard/GroupLikes.svg'
import Comment from '../assets/icons/dashboard/GroupComment.svg'
import Shares from '../assets/icons/dashboard/GroupShare.svg'

// const { summary, isLoading, isError } = useSummaryArticles();

export default function ManageArticle() {
    
  return (
    <>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-[20px]">
            <div className="dashboard-summary">
                <img className="xl:w-[50px] lg:w-10 sm:w-8" src={Visitor} alt="Total-Visitor" />
                <div className="flex-col"   >
                    <h3 className="font-bold text-xs xl:text-sm text-[#9593A0]">Total Visitor</h3>
                    <p className="sm:text-xs lg:text-base xl:text-xl font-bold leading-[30px]">12
                    {/* {summary.totalVisitor} */}
                    </p>
                </div>
            </div>
            <div className="dashboard-summary">
                <img className="xl:w-[50px] lg:w-10 sm:w-8" src={Likes} alt="Total-Likes" />
                <div className="flex-col">
                    <h3 className="font-bold text-xs xl:text-sm text-[#9593A0]">Total Likes</h3>
                    <p className="sm:text-xs lg:text-base xl:text-xl font-bold leading-[30px]">678.720
                    {/* {summary.totalLikes} */}
                    </p>
                </div>
            </div>
            <div className="dashboard-summary">
                <img className="xl:w-[50px] lg:w-10 sm:w-8" src={Comment} alt="Total-Comment" />
                <div className="flex-col">
                    <h3 className="font-bold text-xs xl:text-sm text-[#9593A0]">Ticket Comment</h3>
                    <p className="sm:text-xs lg:text-base xl:text-xl font-bold leading-[30px]">320
                    {/* {summary.totalComment} */}
                    </p>
                </div>
            </div>
            <div className="dashboard-summary">
                <img className="xl:w-[50px] lg:w-10 sm:w-8" src={Shares} alt="Total-Shares" />
                <div className="flex-col">
                    <h3 className="font-bold text-xs xl:text-sm text-[#9593A0]">Total Shares</h3>
                    <p className="sm:text-xs lg:text-base xl:text-xl font-bold leading-[30px]">711.211
                    {/* {summary.totalShares} */}
                    </p>
                </div>
            </div>
        </div>

        <ArticleList/>                           
    </>
  )
}
