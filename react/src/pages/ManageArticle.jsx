import { getSummaryDashboard } from '../services/dashboardAdmin/dashboardServices';
import useSWR from 'swr';
import ArticleList from '../components/manageArticleC/ArticleList';
import Visitor from '../assets/icons/dashboard/GroupVisitor.svg';
import Likes from '../assets/icons/dashboard/GroupLikes.svg';
import Comment from '../assets/icons/dashboard/GroupComment.svg';
import Shares from '../assets/icons/dashboard/GroupShare.svg';

export default function ManageArticle() {
    const fetcher = async () => {
        const data = await getSummaryDashboard();
        console.log('Fetched Data:', data); // Log the fetched data
        return data;
    };

    const { data: summary, error } = useSWR('/api/summary-articles', fetcher);

    // Display error message if there's an error fetching data
    if (error) {
        return <div>Error: {error.message}</div>;
    }

    // Display loading indicator while fetching data
    if (!summary) {
        return (
            <div className="text-center flex-col">
                <span className="loading loading-infinity xl:w-20 text-red-700"></span>
                <span className="text-3xl">Loading...</span>
            </div>
        );
    }

    return (
        <>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-[20px]">
                <div className="dashboard-summary">
                    <img className="xl:w-[50px] lg:w-10 sm:w-8" src={Visitor} alt="Total-Visitor" />
                    <div className="flex-col">
                        <h3 className="font-bold text-xs xl:text-sm text-[#9593A0]">Total Visitor</h3>
                        <p className="sm:text-xs lg:text-base xl:text-xl font-bold leading-[30px]">
                            {summary.total_visitors}
                        </p>
                    </div>
                </div>
                <div className="dashboard-summary">
                    <img className="xl:w-[50px] lg:w-10 sm:w-8" src={Likes} alt="Total-Likes" />
                    <div className="flex-col">
                        <h3 className="font-bold text-xs xl:text-sm text-[#9593A0]">Total Likes</h3>
                        <p className="sm:text-xs lg:text-base xl:text-xl font-bold leading-[30px]">
                            {summary.total_likes}
                        </p>
                    </div>
                </div>
                <div className="dashboard-summary">
                    <img className="xl:w-[50px] lg:w-10 sm:w-8" src={Comment} alt="Total-Comment" />
                    <div className="flex-col">
                        <h3 className="font-bold text-xs xl:text-sm text-[#9593A0]">Total Comments</h3>
                        <p className="sm:text-xs lg:text-base xl:text-xl font-bold leading-[30px]">
                            {summary.total_comments}
                        </p>
                    </div>
                </div>
                <div className="dashboard-summary">
                    <img className="xl:w-[50px] lg:w-10 sm:w-8" src={Shares} alt="Total-Shares" />
                    <div className="flex-col">
                        <h3 className="font-bold text-xs xl:text-sm text-[#9593A0]">Total Shares</h3>
                        <p className="sm:text-xs lg:text-base xl:text-xl font-bold leading-[30px]">
                            {summary.total_shares}
                        </p>
                    </div>
                </div>
            </div>
            <ArticleList />
        </>
    );
}
