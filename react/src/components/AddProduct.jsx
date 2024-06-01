import Navbar from "./NavbarManage"
import Breadcrumbs from "./Breadcrumb"
import uploadImage from "../assets/icons/Picture.svg"

export default function AddPost() {
    return (
        <>
            <Navbar pages={ "Manage Article" }/>
            <section className="container font-poppins xl:px-[45px]">
                <Breadcrumbs pages={ "Add Article" }/>
                <form className="form-secondary">
                    <h1 className="title-form">
                        Create New Post
                    </h1>

                    <article className="question-form">
                        <div className="question-card">
                            <h2 className="text-zinc-900 lg:text-base lg:font-semibold leading-tight">
                                Post Title *
                            </h2>
                            <textarea placeholder="Bio" className="xl:w-[1115px] xl:h-12 textarea textarea-bordered textarea-xs w-full" ></textarea>
                            <div className="text-zinc-900 text-sm font-normal leading-tight">
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
                                    type="file"
                                    accept="image/*"
                                    className="hidden"
                                />
                            </div>
                            <div className="text-zinc-900 text-sm font-normal leading-tight">
                                This image will appear in the header of the post when it is viewed. The recommended size is 500x500px
                            </div>
                        </div>

                        <div className="question-card">
                            <h2 className="text-zinc-900 lg:text-base lg:font-semibold leading-tight">
                                Post Content *
                            </h2>
                            <textarea placeholder="Bio" className="xl:w-[1115px] xl:h-[229px] textarea textarea-bordered textarea-xs w-full" ></textarea>
                            <div className="text-zinc-900 text-sm font-normal leading-tight">
                                This is your post content
                            </div>
                        </div>

                        <div className="question-card">
                            <h2 className="text-zinc-900 lg:text-base lg:font-semibold leading-tight">
                                Tags
                            </h2>
                            <input type="text" className="xl:w-[1115px] h-12 input input-bordered input-sm w-full border-black" />
                        </div>

                        <div className="w-full inline-flex sm:gap-3  xl:gap-[21px] sm:justify-center md:justify-end">
                            <button className="btn btn-primary button-form">Cancel</button>
                            <button className="btn btn-primary button-form">Save</button>
                            <button className="btn btn-primary button-form">Draft</button>
                        </div>
                    </article>
                </form>
            </section>
        </>
    )
}