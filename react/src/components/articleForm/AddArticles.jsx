import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createPost } from '../../services/articleAdmin/articleService';
import Breadcrumbs from '../breadcrumbAdmin/Breadcrumbs';
import uploadImage from '../../assets/icons/form/Picture.svg';

export default function AddPost() {
    // Consolidate form data into a single state object
    const [formData, setFormData] = useState({
        title: '',
        image: null,
        author: '',
        content: '',
        tags: ''
    });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [previewImage, setPreviewImage] = useState(null);

    const navigate = useNavigate();

    // Handle form input change
    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'image' && files.length > 0) {
            const file = files[0];
            const imageUrl = URL.createObjectURL(file);
            setPreviewImage(imageUrl);
            setFormData((prevData) => ({ ...prevData, image: file }));
            setErrors((prevErrors) => ({ ...prevErrors, image: '' }));
        } else {
            setFormData((prevData) => ({ ...prevData, [name]: value }));
            setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
        }
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = {};

        // Validate form fields
        if (!formData.title?.trim()) {
            newErrors.title = 'Post Title cannot be empty';
        }
        if (!formData.content?.trim()) {
            newErrors.content = 'Post Content cannot be empty';
        }
        if (!formData.author?.trim()) {
            newErrors.author = 'Post Author cannot be empty';
        }
        if (!formData.tags?.trim()) {
            newErrors.tags = 'Tags cannot be empty';
        }
        if (!formData.image) {
            newErrors.image = 'Post Image cannot be empty';
        }

        // If there are validation errors, update state and abort submission
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        const newData = new FormData();
        newData.append('title', formData.title);
        newData.append('content', formData.content);
        newData.append('author', formData.author);
        newData.append('tags', formData.tags);
        newData.append('image', formData.image);

        // Set loading state to true
        setLoading(true);

        try {
            // Submit the form data
            await createPost(newData);
            // Navigate to manage-article after successful submission
            navigate('/dashboard/manage-article');
        } catch (error) {
            console.error('Error submitting article:', error);
        } finally {
            // Set loading state to false
            setLoading(false);
        }
    };

    return (
        <>
            <section className="container xl:px-[45px] xl:h-[1560px]">
                <Breadcrumbs />
                <form className="form-secondary" onSubmit={handleSubmit} noValidate>
                    <h1 className="title-form">Create New Post</h1>
                    
                    <article className="question-form">
                        <div className="question-card">
                            <h2 className="text-zinc-900 lg:text-base lg:font-semibold leading-tight">
                                Post Title <span className={`${errors.title ? 'text-red-500' : ''}`}>*</span>
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
                        
                        {/* Post Author */}
                        <div className="question-card">
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
                        </div>

                        {/* Post Image */}
                        <div className="question-card">
                            <h2 className="text-zinc-900 lg:text-base lg:font-semibold leading-tight">
                                Post Image <span className={`${errors.image ? 'text-red-500' : ''}`}>*</span>
                            </h2>
                            <div className={`media-input ${errors.image ? 'border-red-500' : ''}`}>
                                <label htmlFor="file-upload" className="cursor-pointer gap-2 mx-auto">
                                    {previewImage ? (
                                        <img
                                            src={previewImage}
                                            alt="selected-preview"
                                            className="lg:w-full lg:h-[202px] object-cover"
                                        />
                                    ) : (
                                        <>
                                            <img
                                                src={uploadImage}
                                                alt="upload-icon"
                                                className="xl:w-6 xl:h-6 mx-auto"
                                            />
                                            <span className={`text-xs font-light ${errors.image ? 'text-red-500' : 'text-black'}`}>Upload Photo</span>
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
                            {errors.image && (
                                <div className="text-red-500 text-xs md:text-sm font-normal leading-tight text-justify">
                                    {errors.image}
                                </div>
                            )}
                        </div>

                        {/* Post Content */}
                        <div className="question-card">
                            <h2 className="text-zinc-900 lg:text-base lg:font-semibold leading-tight">
                                Post Content <span className={`${errors.content ? 'text-red-500' : ''}`}>*</span>
                            </h2>
                            <textarea 
                                name="content"
                                placeholder="Description" 
                                className={`xl:w-[1115px] xl:h-[229px] textarea textarea-bordered textarea-sm w-full bg-primary-100 ${errors.content ? 'border-red-500' : ''}`}
                                value={formData.content}
                                onChange={handleChange}
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

                        {/* Tags */}
                        <div className="question-card">
                            <h2 className="text-zinc-900 lg:text-base lg:font-semibold leading-tight">
                                Tags <span className={`${errors.tags ? 'text-red-500' : ''}`}>*</span>
                            </h2>
                            <input 
                                name="tags"
                                placeholder="Tags" 
                                className={`xl:w-[1115px] xl:h-12 input input-bordered input-sm w-full bg-primary-100 ${errors.tags ? 'border-red-500' : ''}`}
                                value={formData.tags}
                                onChange={handleChange}
                            />
                            {errors.tags && (
                                <div className="text-red-500 text-xs md:text-sm font-normal leading-tight text-justify">
                                    {errors.tags}
                                </div>
                            )}
                        </div>

                        {/* Buttons */}
                        <div className="w-full inline-flex sm:gap-3 xl:gap-[21px] sm:justify-center md:justify-end">
                            <button 
                                type="button" 
                                className="btn sm:btn-form-secondary lg:btn-form-primary btn-color-secondary sm:btn-sm md:btn-md" 
                                onClick={() => window.history.back()}
                            >
                                Cancel
                            </button>
                            <button 
                                type="button" 
                                className="btn sm:btn-form-secondary lg:btn-form-primary btn-color-secondary sm:btn-sm md:btn-md"
                            >
                                Draft
                            </button>
                            <button 
                                type="submit" 
                                className="btn sm:btn-form-secondary lg:btn-form-primary btn-color-primary sm:btn-sm md:btn-md"
                            >
                                Publish
                            </button>
                        </div>
                    </article>
                </form>
            </section>
            <br />
            
            {/* Loading Overlay */}
            {loading && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <span className="loading loading-infinity xl:w-20 text-red-700"></span>
                    <span className="text-white text-lg">Submitting...</span>
                </div>
            )}
        </>
    );
}
