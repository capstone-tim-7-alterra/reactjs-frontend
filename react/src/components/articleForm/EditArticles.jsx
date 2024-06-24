import { useEffect, useState } from 'react';
import useSWR from 'swr';
import { useNavigate, useParams } from 'react-router-dom';
import axiosInstance from '../../services/articleAdmin/api/axiosInstance';
import { updatePost } from '../../services/articleAdmin/articleService';
import Breadcrumbs from "../breadcrumbAdmin/Breadcrumbs"
import uploadImage from "../../assets/icons/form/Picture.svg"

export default function EditPost() {
    const { articleId } = useParams();
    const navigate = useNavigate();
    // Consolidate form data into a single state object
    const [formData, setFormData] = useState({
      title: '',
    //   author: '',
      content: '',
      tags: '',
      image: null,
    });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [previewImage, setPreviewImage] = useState(null);
  
    const fetcher = url => axiosInstance.get(url).then(res => res.data.data);
    const { data, error } = useSWR(`/api/v1/admin/articles/${articleId}`, fetcher);
    
    // Get latest article data from API and populate form fields
    useEffect(() => {
      if (data) {
        setFormData({
          title: data.title,
        //   author: data.author,
          content: data.content,
          tags: data.tags,
          image: data.image || null,
        });
        setPreviewImage(data.image || null);
      }
    }, [data]);
    
    // Handle form input change
    const handleChange = (e) => {
      const { name, value, files } = e.target;
      if (name === 'image' && files.length > 0) {
        const file = files[0];
        const imageUrl = URL.createObjectURL(file);
        setPreviewImage(imageUrl);
        setFormData({ ...formData, image: file });
        setErrors((prev) => ({ ...prev, image: '' }));
      } else {
        setFormData({ ...formData, [name]: value });
        setErrors((prev) => ({ ...prev, [name]: '' })); 
      }
    };
    
    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = {};

        if (!formData.title?.trim()) {
            newErrors.title = 'Post Title cannot be empty';
        }
        // if (!formData.author?.trim()) {
        //     newErrors.author = 'Post Author cannot be empty';
        // }
        if (!formData.content?.trim()) {
            newErrors.content = 'Post Content cannot be empty';
        }
        if (!formData.tags?.trim()) {
            newErrors.tags = 'Tags cannot be empty';
        }

        if (!formData.image) {
            newErrors.image = 'Post Image cannot be empty';
        }


        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
      const updatedData = new FormData();
      updatedData.append('title', formData.title);
    //   updatedData.append('author', formData.title);
      updatedData.append('content', formData.content);
      updatedData.append('tags', formData.tags);
      updatedData.append('image', formData.image);

      // Set loading state to true
      setLoading(true);

      updatePost(articleId, updatedData)
        .then(() => {
          navigate('/dashboard/manage-article');
        })
        .catch(err => {
          console.error('Error updating article:', err);
        });
    };

    if (error) return <p>Error loading article: {error.message}</p>;

    return (
        <>
            <section className="container xl:px-[45px] xl:h-[1560px]">
                <Breadcrumbs />
                <form className="form-secondary" onSubmit={handleSubmit} noValidate>
                    <h1 className="title-form">
                        Edit Post
                    </h1>

                    <article className="question-form">
                        <div className="question-card">
                            <h2 className="text-zinc-900 lg:text-base lg:font-semibold leading-tight">
                                Post Title <span className={`${errors.title ? 'text-red-500' : ''}`} >*</span>
                            </h2>
                            <textarea 
                                name="title"
                                placeholder="Title" 
                                className={`xl:w-[1115px] xl:h-12 textarea textarea-bordered textarea-sm w-full bg-primary-100 ${errors.title ? 'border-red-500' : ''}`}
                                value={formData.title}
                                onChange={handleChange}
                            ></textarea>
                            {errors.title ? (
                                <div className="text-red-500 text-xs md:text-sm font-normal leading-tight text-justify">
                                    {errors.title}
                                </div>
                            ) : (
                                <div className="text-zinc-900 text-xs md:text-sm font-normal leading-tight text-justify">
                                    This will be shown as the title on the front page and on the post itself
                                </div>
                            )}
                        </div>

                        {/* <div className="question-card">
                            <h2 className="text-zinc-900 lg:text-base lg:font-semibold leading-tight">
                                Post Author <span className={`${errors.author ? 'text-red-500' : ''}`} >*</span>
                            </h2>
                            <textarea 
                                name="author"
                                placeholder="Author" 
                                className={`xl:w-[1115px] xl:h-12 textarea textarea-bordered textarea-sm w-full bg-primary-100 ${errors.title ? 'border-red-500' : ''}`}
                                value={formData.author}
                                onChange={handleChange}
                            ></textarea>
                            {errors.author ? (
                                <div className="text-red-500 text-xs md:text-sm font-normal leading-tight text-justify">
                                    {errors.author}
                                </div>
                            ) : (
                                <div className="text-zinc-900 text-xs md:text-sm font-normal leading-tight text-justify">
                                    This will be shown as the author on the front page and on the post itself
                                </div>
                            )}
                        </div> */}

                        <div className="question-card">
                            <h2 className="text-zinc-900 lg:text-base lg:font-semibold leading-tight">
                                Post Image <span className={`${errors.image ? 'text-red-500' : ''}`} >*</span>
                            </h2>
                            <div className={`media-input ${errors.image ? 'border-red-500' : ''}`}>
                                <label htmlFor="file-upload" className="cursor-pointer gap-2 mx-auto">
                                {previewImage ? (
                                    <img
                                        src={previewImage}
                                        alt="selected-preview"
                                        className="xl:w-full xl:h-[202px] object-cover"
                                    />
                                    ) : (
                                    <>
                                        <img
                                        src={uploadImage}
                                        alt="upload-icon"
                                        className="xl:w-6 xl:h-6 mx-auto"
                                        />
                                        <span className="text-black text-xs font-light">Upload Foto</span>
                                    </>
                                    )}

                                </label>
                                <input
                                    id="file-upload"
                                    type="file"
                                    accept="image/*"
                                    className="hidden"
                                    name="image"
                                    onChange={handleChange}
                                />
                            </div>
                            {errors.image ? (
                                <div className="text-red-500 text-xs md:text-sm font-normal leading-tight text-justify">
                                    {errors.image}
                                </div>
                            ) : (
                                <div className="text-zinc-900 text-xs md:text-sm font-normal leading-tight text-justify">
                                    This image will appear in the header of the post when it is viewed. The recommended size is 500x500px
                                </div>
                            )}
                        </div>

                        <div className="question-card">
                            <h2 className="text-zinc-900 lg:text-base lg:font-semibold leading-tight">
                                Post Content <span className={`${errors.content ? 'text-red-500' : ''}`} >*</span>
                            </h2>
                            <textarea 
                                name="content"
                                value={formData.content}
                                onChange={handleChange}
                                placeholder="Description" 
                                className={`xl:w-[1115px] xl:h-[229px] textarea textarea-bordered textarea-sm w-full bg-primary-100 ${errors.content ? 'border-red-500' : ''}`}
                            ></textarea>
                            {errors.content ? (
                                <div className="text-red-500 text-xs md:text-sm font-normal leading-tight text-justify">
                                    {errors.content}
                                </div>
                            ) : (
                                <div className="text-zinc-900 text-xs md:text-sm font-normal leading-tight text-justify">
                                    This is your post content
                                </div>
                            )}
                        </div>

                        <div className="question-card">
                            <h2 className="text-zinc-900 lg:text-base lg:font-semibold leading-tight">
                                Tags <span className={`${errors.tags ? 'text-red-500' : ''}`} >*</span>
                            </h2>
                            <input 
                                name="tags"
                                value={formData.tags}
                                onChange={handleChange}
                                placeholder="Tags" 
                                className={`xl:w-[1115px] xl:h-12 input input-bordered input-sm w-full bg-primary-100 ${errors.tags ? 'border-red-500' : ''}`}
                            ></input>
                            {errors.tags && (
                                <div className="text-red-500 text-xs md:text-sm font-normal leading-tight text-justify">
                                    {errors.tags}
                                </div>
                            )}
                        </div>

                        <div className="w-full inline-flex sm:gap-3 xl:gap-[21px] sm:justify-center md:justify-end">
                            <button className="btn sm:btn-form-secondary lg:btn-form-primary btn-color-secondary sm:btn-sm md:btn-md" onClick={() => window.history.back()}>Cancel</button>
                            <button className="btn sm:btn-form-secondary lg:btn-form-primary btn-color-secondary sm:btn-sm md:btn-md">Draft</button>
                            <button type="submit" className="btn sm:btn-form-secondary lg:btn-form-primary btn-color-primary sm:btn-sm md:btn-md">Update</button>
                        </div>
                    </article>
                </form>
            </section>
            {loading && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <span className="loading loading-infinity xl:w-20 text-red-700"></span>
                    <span className="text-white text-lg">Submitting Edit...</span>
                </div>
            )}
        </>
    )
}