import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axiosInstance from '../../services/articleAdmin/api/axiosInstance';
import Breadcrumbs from "../breadcrumbAdmin/Breadcrumbs"
import uploadImage from "../../assets/icons/form/Picture.svg"

export default function EditPost() {
    const { articleId } = useParams();
    const navigate = useNavigate();
    const [article, setArticle] = useState({
      title: '',
      content: '',
      tags: '',
      image: null,
    });

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
        axiosInstance.get(`/api/v1/admin/articles/${articleId}`)
          .then(response => {
            setArticle(response.data);
            setLoading(false);
          })
          .catch(error => {
            setError('Error fetching article data');
            setLoading(false);
          });
      }, [articleId]);
  
      const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'image') {
          setArticle({ ...article, image: files[0] });
        } else {
          setArticle({ ...article, [name]: value });
        }
      };
  
      const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', article.title);
        formData.append('content', article.content);
        formData.append('tags', article.tags);
        if (article.image) {
          formData.append('image', article.image);
        }
    
        axiosInstance.put(`/api/v1/admin/articles/${articleId}`, formData)
          .then(() => {
            navigate('/articles');
          })
          .catch(error => {
            setError('Error updating article');
          });
      };

      if (loading) return <p>Loading...</p>;
      if (error) return <p>{error}</p>;

    return (
        <>
            <section className="container xl:px-[45px] xl:h-[1560px]">
                <Breadcrumbs />
                <form className="form-secondary" onSubmit={handleSubmit}>
                    <h1 className="title-form">
                        Edit Post
                    </h1>

                    <article className="question-form">
                        <div className="question-card">
                            <h2 className="text-zinc-900 lg:text-base lg:font-semibold leading-tight">
                                Post Title *
                            </h2>
                            <textarea 
                                name="title"
                                placeholder="Title" 
                                className="xl:w-[1115px] xl:h-12 textarea textarea-bordered textarea-sm w-full bg-primary-100" 
                                value={article.title}
                                onChange={handleChange}
                                required
                            ></textarea>
                            <div className="text-zinc-900 text-sm font-normal leading-tight text-justify">
                                This will be shown as the title on the front page and on the post itself
                            </div>
                        </div>

                        <div className="question-card">
                            <h2 className="text-zinc-900 lg:text-base lg:font-semibold leading-tight">
                                Post Image
                            </h2>
                            <div className="media-input">
                                <label htmlFor="file-upload" className="cursor-pointer gap-2 mx-auto">
                                    <img
                                    src={uploadImage}
                                    alt="upload-icon"
                                    className="xl:w-6 xl:h-6 mx-auto"
                                    />
                                    <span className="text-black text-xs font-light">Upload Foto</span>
                                </label>
                                <input
                                    id="file-upload"
                                    name="image"
                                    type="file"
                                    accept="image/*"
                                    className="hidden"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="text-zinc-900 text-sm font-normal leading-tight text-justify">
                                This image will appear in the header of the post when it is viewed. The recommended size is 500x500px
                            </div>
                        </div>

                        <div className="question-card">
                            <h2 className="text-zinc-900 lg:text-base lg:font-semibold leading-tight">
                                Post Content *
                            </h2>
                            <textarea 
                                name="content"
                                value={article.content}
                                onChange={handleChange}
                                placeholder="Description" 
                                className="xl:w-[1115px] xl:h-[229px] textarea textarea-bordered textarea-sm w-full bg-primary-100"
                                required
                            ></textarea>
                            <div className="text-zinc-900 text-sm font-normal leading-tight text-justify">
                                This is your post content
                            </div>
                        </div>

                        <div className="question-card">
                            <h2 className="text-zinc-900 lg:text-base lg:font-semibold leading-tight">
                                Tags
                            </h2>
                            <textarea 
                                name="tags"
                                value={article.tags}
                                onChange={handleChange}
                                placeholder="Tags" 
                                className="xl:w-[1115px] xl:h-12 textarea textarea-bordered textarea-sm w-full bg-primary-100" 
                            ></textarea>
                        </div>

                        <div className="w-full inline-flex sm:gap-3 xl:gap-[21px] sm:justify-center md:justify-end">
                            <button className="btn sm:btn-form-secondary lg:btn-form-primary btn-color-secondary sm:btn-sm md:btn-md">Cancel</button>
                            <button className="btn sm:btn-form-secondary lg:btn-form-primary btn-color-secondary sm:btn-sm md:btn-md">Draft</button>
                            <button type="submit" className="btn sm:btn-form-secondary lg:btn-form-primary btn-color-secondary sm:btn-sm md:btn-md">Save</button>
                        </div>
                    </article>
                </form>
            </section>
        </>
    )
}