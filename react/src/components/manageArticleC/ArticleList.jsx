import { useState } from 'react';
import { Link } from 'react-router-dom';
import useSWR from 'swr';
import { getAllArticles, searchForArticles, removeArticle } from '../../services/articleAdmin/articleService';
import HeroMockup from '../../assets/images/article/News-Hero-Mockup.png'
import Plus from '../../assets/icons/dashboard/Plus.svg'
import Search from '../../assets/icons/dashboard/Search.svg'
import Edit from '../../assets/icons/article/Edit.svg'
import Trash from '../../assets/icons/article/Trash.svg'
import DeleteModal from '../confirmationModal/DeleteM';


export default function ArticleList() {
    const [searchQuery, setSearchQuery] = useState('');
    const [isSearching, setIsSearching] = useState(false);

    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [articleToDelete, setArticleToDelete] = useState(null);

    // Fetch articles from API using SWR library
    const fetcher = async () => {
        const data = await getAllArticles(page);
        if (data.length < 6) {
            setHasMore(false);
        } else {
            // Determine if there are more articles to fetch
            setHasMore(true);
        }
        return data;
    };

    // UseSWR hooks for fetching articles and search results
    const { data: allArticles, error: allError, mutate: mutateAll } = useSWR(['/articles', page], fetcher, { revalidateOnFocus: false });
    const { data: searchResults, error: searchError, mutate: mutateSearch } = useSWR(
        isSearching && searchQuery.length >= 3 ? ['/search', searchQuery] : null,
        () => searchForArticles(searchQuery),
        { revalidateOnFocus: false }
    );

    // Handle search input change
    const handleSearch = (e) => {
        const { value } = e.target;
        setSearchQuery(value);
        setIsSearching(value.length >= 3);
        setPage(1); // Reset page when starting a new search
    };

    // Handle search input key press
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            if (searchQuery.trim() && searchQuery.length >= 3) {
                setIsSearching(true);
            } else {
                setIsSearching(false);
                mutateAll(); // Refresh all articles if search term is empty or invalid
            }
        }
    };
    
    // Handle article deletion
    const handleDelete = async () => {
        if (!articleToDelete) return;
        try {
          await removeArticle(articleToDelete);
          // Update UI by removing deleted article from lists
          mutateAll((articles) => articles.filter(article => article.id !== articleToDelete), false);
          if (isSearching) {
            mutateSearch((articles) => articles.filter(article => article.id !== articleToDelete), false);
          }
          setIsModalOpen(false);
        } catch (error) {
          alert('Error deleting article');
        }
      };
    
    // Open deletion confirmation modal
    const openModal = (id) => {
        setArticleToDelete(id);
        setIsModalOpen(true);
    };
    
    // Close deletion confirmation modal
    const closeModal = () => {
        setIsModalOpen(false);
        setArticleToDelete(null);
    };

       // Handle pagination change
    const handlePageChange = (newPage) => {
        setPage(newPage);
    };

    // Determine whether to use search results or all articles
    const articles = isSearching ? searchResults : allArticles;
    const error = isSearching ? searchError : allError;

    // Display error message if there's an error fetching data
    if (error) 
        return <div>Error: {error.message}</div>;
    // Display loading indicator while fetching data
    if (!articles) 
        return <div className="text-center flex-col">
                    <span className="loading loading-infinity xl:w-20 text-red-700"></span>
                    <span className="text-3xl">Loading...</span>
                </div>;

    return (
        <>
            {/* Top section with add new post button and search input */}
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
                        value={searchQuery}
                        onChange={handleSearch}
                        onKeyDown={handleKeyPress}
                    />
                </label>
            </div>
            
            {/* Grid layout for displaying articles */}
            <div className="article-map">
                {articles.map(article => (
                <article key={article.id}  className="article-list">
                    <img 
                        className="rounded-xl w-full max-h-[178px] object-cover" 
                        src={article.image || HeroMockup } 
                        alt="article-hero"/>
                    <button className="btn-article-tags">
                        <Link className="text-center">
                            {article.tags || "Untitle"}
                        </Link>
                    </button>
                    <div>
                        <h3 className="article-title">
                            {article.title.length > 49 ? `${article.title.slice(0, 48) || "Untitle"}...` : article.title || "Untitle"}
                        </h3>
                        <time className="text-xs tracking-wide text-black leading-[18px]">
                            Published • { article.created_at }
                        </time>
                        <p className="text-xs text-red-700 font-bold">{article.author || "Admin Nanda"}</p>
                    </div>
                    <div className="w-full inline-flex  gap-4 justify-end">
                        <Link to={`./${article.id}`}>
                            <img src={ Edit } alt="Share" />
                        </Link>
                        <Link onClick={() => openModal(article.id)}>
                            <img src={ Trash } alt="Comment" />
                        </Link>
                    </div>
                </article>
                ))}
            </div>
            
            {/* Pagination controls */}
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

        {isModalOpen && (
            <DeleteModal
            isOpen={isModalOpen}
            onConfirm={handleDelete}
            onCancel={closeModal}
            feature={'post'}
            />
        )}
        </>
    )
}