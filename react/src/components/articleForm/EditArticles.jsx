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
    const [formData, setFormData] = useState({
      title: '',
      content: '',
      tags: '',
      image: null,
    });
    const [previewImage, setPreviewImage] = useState(null);
  
    const fetcher = url => axiosInstance.get(url).then(res => res.data.data);
    const { data, error } = useSWR(`/api/v1/admin/articles/${articleId}`, fetcher);
  
    useEffect(() => {
      if (data) {
        setFormData({
          title: data.title,
          content: data.content,
          tags: data.tags,
          image: data.image || null,
        });
        setPreviewImage(data.image || null);
      }
    }, [data]);
  
    const handleChange = (e) => {
      const { name, value, files } = e.target;
      if (name === 'image' && files.length > 0) {
        const file = files[0];
        const imageUrl = URL.createObjectURL(file);
        setPreviewImage(imageUrl);
        setFormData({ ...formData, image: file });
      } else {
        setFormData({ ...formData, [name]: value });
      }
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const updatedData = new FormData();
      updatedData.append('title', formData.title);
      updatedData.append('content', formData.content);
      updatedData.append('tags', formData.tags);
      if (formData.image && formData.image !== data.image) {
        updatedData.append('image', formData.image);
      }
  
      updatePost(articleId, updatedData)
        .then(() => {
          navigate('/articles');
        })
        .catch(err => {
          console.error('Error updating article:', err);
        });
    };
  
    if (!data) return <p>Loading...</p>;
    if (error) return <p>Error loading article</p>;

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
                                value={formData.title}
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
                                value={formData.content}
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
                                value={formData.tags}
                                onChange={handleChange}
                                placeholder="Tags" 
                                className="xl:w-[1115px] xl:h-12 textarea textarea-bordered textarea-sm w-full bg-primary-100" 
                            ></textarea>
                        </div>

                        <div className="w-full inline-flex sm:gap-3 xl:gap-[21px] sm:justify-center md:justify-end">
                            <button className="btn sm:btn-form-secondary lg:btn-form-primary btn-color-secondary sm:btn-sm md:btn-md" onClick={() => window.history.back()}>Cancel</button>
                            <button className="btn sm:btn-form-secondary lg:btn-form-primary btn-color-secondary sm:btn-sm md:btn-md">Draft</button>
                            <button type="submit" className="btn sm:btn-form-secondary lg:btn-form-primary btn-color-primary sm:btn-sm md:btn-md">Save</button>
                        </div>
                    </article>
                </form>
            </section>
        </>
    )
}