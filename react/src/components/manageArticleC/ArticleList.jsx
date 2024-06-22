import { useState } from 'react';
import { Link } from 'react-router-dom';
import useSWR from 'swr';
import { getAllArticles, searchForArticles, removeArticle } from '../../services/articleAdmin/articleService';
import HeroMockup from '../../assets/images/article/hero-article.jpg'
import Plus from '../../assets/icons/dashboard/Plus.svg'
import Search from '../../assets/icons/dashboard/Search.svg'
import Edit from '../../assets/icons/article/Edit.svg'
import Trash from '../../assets/icons/article/Trash.svg'


export default function ArticleList() {
    const [current, setCurrent] = useState('')
    const [item, setItem] = useState('');
    const [isSearching, setIsSearching] = useState(false);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    const fetcher = async () => {
        const data = await getAllArticles(page);
        if (data.length < 6) {
            setHasMore(false);
        } else {
            setHasMore(true);
        }
        return data;
    };

    const { data: allArticles, error: allError, mutate: mutateAll } = useSWR(['/articles', page], fetcher, { revalidateOnFocus: false });
    const { data: searchResults, error: searchError, mutate: mutateSearch } = useSWR(
        isSearching && item.length >= 3 ? ['/search', item] : null,
        () => searchForArticles(item),
        { revalidateOnFocus: false }
    );

    const handleSearch = (e) => {
        setCurrent(e.target.value);
        if (e.target.value === '') {
            setIsSearching(false);
            mutateAll();
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            if (current.trim() && current.length >= 3) {
                setItem(current)
                setIsSearching(true);
            } else {
                setIsSearching(false);
                mutateAll();
            }
        }
    };

    const handleDelete = async (id) => {
        try {
            await removeArticle(id);
            mutateAll((articles) => articles.filter(article => article.id !== id), false);
            if (isSearching) {
                mutateSearch((articles) => articles.filter(article => article.id !== id), false);
            }
        } catch (error) {
            alert('Error deleting article');
        }
    };

    const handlePageChange = (newPage) => {
        setPage(newPage);
    };

    const articles = isSearching ? searchResults : allArticles;
    const error = isSearching ? searchError : allError;

    if (error) return <div>Error: {error.message}</div>;
    if (!articles) return <div>Loading...</div>;

    return (
        <>
            <div className="gap-[10px] flex sm:justify-center md:justify-between sm:flex-col md:flex-row">
                <Link className="grow btn bg-[#980019] text-white xl:px-6 xl:py-[10px] sm:btn-xs md:btn-sm lg:btn-md" to="add">
                    <img src={ Plus } alt="Plus"/>
                    New Post
                </Link>
                <label className="input input-bordered flex items-center gap-2 sm:input-xs md:input-sm lg:input-md xl:w-[921px] md:w-4/5 bg-primary-100">
                    <img src={ Search } alt="Search" />
                    <input 
                        type="text" 
                        className="grow" 
                        placeholder="Type here"
                        value={current}
                        onChange={handleSearch}
                        onKeyDown={handleKeyPress}
                    />
                </label>
            </div>
            
            <div className="mx-auto grid grid-cols-1 gap-x-6 gap-y-6 lg:grid-cols-3 md:grid-cols-2">
                {articles.map(article => (
                <article key={article.id}  className="article-list">
                    <img className="rounded-xl w-full max-h-[178px] object-cover" src={article.image || HeroMockup } alt="article-hero"/>
                    <button className="rounded-3xl border-2 lg:text-sm sm:text-xs lg:py-1 lg:px-[10px] border-pink-300 text-rose-700 xl:w-[100px]">
                        <Link className="text-center">{article.tags || "Untitle"} </Link>
                    </button>
                    <div>
                        <h3 className="text-black text-xs font-bold leading-normal tracking-wide">
                            {article.title || "Untitle"}
                        </h3>
                        <time className="text-xs tracking-wide text-black leading-[18px]">Published • { article.created_at }</time>
                        <p className="text-xs text-red-700 font-bold">{article.author || "Untitle"}</p>
                    </div>
                    <div className="w-full inline-flex  gap-4 justify-end">
                        <Link to={`./${article.id}`}><img src={ Edit } alt="Share" /></Link>
                        <Link onClick={() => handleDelete(article.id)}><img src={ Trash } alt="Comment" /></Link>
                    </div>
                </article>
                ))}
            </div>

            <div className='flex justify-end'>
            <div className="join">
                <button 
                    className="join-item btn btn-color-secondary" 
                    disabled={page === 1} 
                    onClick={() => handlePageChange(page - 1)}
                >
                    «
                </button>
                <button className="join-item btn btn-color-secondary">Page {page}</button>;
                <button 
                    className="join-item btn btn-color-secondary" 
                    disabled={!hasMore} 
                    onClick={() => handlePageChange(page + 1)}
                >
                    »
                </button>
            </div>
        </div> 
        </>
    )
}