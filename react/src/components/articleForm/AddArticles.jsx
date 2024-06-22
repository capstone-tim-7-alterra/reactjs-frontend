import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { createPost } from '../../services/articleAdmin/articleService';
import Breadcrumbs from "../breadcrumbAdmin/Breadcrumbs"
import uploadImage from "../../assets/icons/form/Picture.svg"

export default function AddPost() {
    const [title, setTitle] = useState('');
    const [image, setImage] = useState(null);
    const [content, setContent] = useState('');
    const [tags, setTags] = useState('');
    const [errors, setErrors] = useState({});
    
    const navigate = useNavigate();

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
          setImage(file);
        }
      };
      
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = {};

        if (!title.trim()) {
            newErrors.title = 'Post Title cannot be empty';
        }
        if (!content.trim()) {
            newErrors.content = 'Post Content cannot be empty';
        }
        if (!tags.trim()) {
            newErrors.tags = 'Tags cannot be empty';
        }

        if (!image) {
            newErrors.image = 'Post Image cannot be empty';
        }


        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
    
        const formData = new FormData();
        formData.append('title', title);
        formData.append('content', content);
        formData.append('tags', tags);
        if (image) {
          formData.append('image', image);
        }

        console.log(formData);
    
        try {
          await createPost(formData);
            navigate('/dashboard/manage-article');
        } catch (error) {
          console.error('Error submitting article:', error);
        }
      };


    return (
        <>
            <section className="container xl:px-[45px] xl:h-[1560px]">
                <Breadcrumbs />
                <form className="form-secondary" onSubmit={handleSubmit} noValidate>
                    <h1 className="title-form">
                        Create New Post
                    </h1>

                    <article className="question-form">
                        <div className="question-card">
                            <h2 className="text-zinc-900 lg:text-base lg:font-semibold leading-tight">
                                Post Title <span className={`${errors.title ? 'text-red-500' : ''}`} >*</span>
                            </h2>
                            <textarea 
                                placeholder="Title" 
                                className={`xl:w-[1115px] xl:h-12 textarea textarea-bordered textarea-sm w-full bg-primary-100 ${errors.title ? 'border-red-500' : ''}`}
                                value={title}
                                onChange={(e) => {
                                    setTitle(e.target.value);
                                    setErrors((prev) => ({ ...prev, title: '' }));
                                }}
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

                        <div className="question-card">
                            <h2 className="text-zinc-900 lg:text-base lg:font-semibold leading-tight">
                                Post Image <span className={`${errors.image ? 'text-red-500' : ''}`} >*</span>
                            </h2>
                            <div className={`media-input ${errors.image ? 'border-red-500' : ''}`}>
                                <label htmlFor="file-upload" className="cursor-pointer gap-2 mx-auto">
                                {image ? (
                                        <img
                                        src={image instanceof File ? URL.createObjectURL(image) : image}
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
                                        <span className={`text-xs font-light ${errors.image ? 'text-red-500' : 'text-black'}`}>Upload Foto</span>
                                        </>
                                    )}

                                </label>
                                <input
                                    id="file-upload"
                                    type="file"
                                    accept="image/*"
                                    className="hidden"
                                    onChange={handleFileChange}
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
                                placeholder="Description" 
                                className={`xl:w-[1115px] xl:h-[229px] textarea textarea-bordered textarea-sm w-full bg-primary-100 ${errors.content ? 'border-red-500' : ''}`}
                                onChange={(e) => {
                                    setContent(e.target.value);
                                    setErrors((prev) => ({ ...prev, content: '' }));
                                }}
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
                                placeholder="Tags" 
                                className={`xl:w-[1115px] xl:h-12 input input-bordered input-sm w-full bg-primary-100 ${errors.tags ? 'border-red-500' : ''}`}
                                onChange={(e) => {
                                    setTags(e.target.value);
                                    setErrors((prev) => ({ ...prev, tags: '' }));
                                }}
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
                            <button type="submit" className="btn sm:btn-form-secondary lg:btn-form-primary btn-color-primary sm:btn-sm md:btn-md">Publish</button>
                        </div>
                    </article>
                </form>
            </section>
            <br/>
        </>
    )
}