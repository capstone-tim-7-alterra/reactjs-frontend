import React, { useState, useEffect, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Breadcrumbs from "../breadcrumb/Breadcrumbs";
import uploadImage from "../../assets/icons/form/Picture.svg";
import uploadVideo from "../../assets/icons/form/Video.svg";
import percent from "../../assets/icons/form/Percent.svg";
import CategoryProduct from "../productForm/CategoryProduct";
import useSWR from "swr";
import axiosInstance from "../../services/ProductAdmin/api/axiosInstance";
// import { updateProduct } from "../../services/ProductAdmin/productService";

export default function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    min_order: "",
    category_id: "",
    category_name: "",
    original_price: "",
    discount_percent: "",
    product_variants: [],
    product_images: {
      image_urls: [],
    },
    product_videos: {
      video_urls: [],
    },
  });
  const [errors, setErrors] = useState({});
  const [categories, setCategories] = useState([]);
  const [deletedImages, setDeletedImages] = useState([]);
  const [deletedVideos, setDeletedVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetcher = (url) => axiosInstance.get(url).then((res) => res.data.data);
  const { data, error } = useSWR(
    `${import.meta.env.VITE_API_PRODUCT_URL}/${id}`,
    fetcher
  );

  useEffect(() => {
    if (data) {
      setFormData((prevData) => ({
        ...prevData,
        name: data.name,
        description: data.description,
        min_order: data.min_order,
        category_id: data.category_id,
        category_name: data.category_name,
        original_price: data.product_pricing?.original_price || "",
        discount_percent: data.product_pricing?.discount_percent || "",
        product_images: {
          image_urls: data.product_images || [],
        },
        product_videos: {
          video_urls: data.product_videos || [],
        },
        product_variants: data.product_variants || [],
      }));
      setIsLoading(false);
    }
  }, [data]);

  const fetchCategories = useCallback(async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("Token not found");

      const response = await fetch(
        "https://kreasinusantara.shop/api/v1/admin/categories",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) throw new Error("Failed to fetch categories");

      const data = await response.json();
      setCategories(data.data || []);
    } catch (error) {
      console.error("Error fetching categories:", error);
      setErrors((prev) => ({
        ...prev,
        categories: "Failed to load categories. Please try again.",
      }));
    }
  }, []);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleChangeStock = (size, value) => {
    setFormData((prevData) => ({
      ...prevData,
      product_variants: prevData.product_variants.map((variant) =>
        variant.size === size
          ? { ...variant, stock: parseInt(value) || null }
          : variant
      ),
    }));
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const imagePreviews = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));
    setFormData((prevData) => ({
      ...prevData,
      product_images: {
        image_urls: [...prevData.product_images.image_urls, ...imagePreviews],
      },
    }));
  };

  const handleVideoUpload = (e) => {
    const files = Array.from(e.target.files);
    const videoPreviews = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));
    setFormData((prevData) => ({
      ...prevData,
      product_videos: {
        video_urls: [...prevData.product_videos.video_urls, ...videoPreviews],
      },
    }));
  };

  const handleDeleteImage = (index) => {
    setFormData((prevData) => {
      const updatedImages = [...prevData.product_images.image_urls];
      const deletedImage = updatedImages[index];
      if (deletedImage.id) {
        setDeletedImages([...deletedImages, deletedImage.id]);
      }
      updatedImages.splice(index, 1);
      return {
        ...prevData,
        product_images: {
          image_urls: updatedImages,
        },
      };
    });
  };

  const handleDeleteVideo = (index) => {
    setFormData((prevData) => {
      const updatedVideos = [...prevData.product_videos.video_urls];
      const deletedVideo = updatedVideos[index];
      if (deletedVideo.id) {
        setDeletedVideos([...deletedVideos, deletedVideo.id]);
      }
      updatedVideos.splice(index, 1);
      return {
        ...prevData,
        product_videos: {
          video_urls: updatedVideos,
        },
      };
    });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Product name is required";
      isValid = false;
    }

    if (!formData.description.trim()) {
      newErrors.description = "Description is required";
      isValid = false;
    }

    if (!formData.min_order || formData.min_order <= 0) {
      newErrors.min_order = "Minimum order must be greater than 0";
      isValid = false;
    }

    if (!formData.category_id) {
      newErrors.category_id = "Category is required";
      isValid = false;
    }

    if (!formData.original_price || formData.original_price <= 0) {
      newErrors.original_price = "Price must be greater than 0";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    if (!validateForm()) {
      return;
    }
  
    const uptudata = new FormData();
    uptudata.append("name", formData.name);
    uptudata.append("description", formData.description);
    uptudata.append("min_order", parseInt(formData.min_order) || 0);
    uptudata.append("category_id", parseInt(formData.category_id, 10) || 0);
    uptudata.append("original_price", parseFloat(formData.original_price) || 0);
    uptudata.append("discount_percent", parseFloat(formData.discount_percent) || 0);
  
    formData.product_images.image_urls.forEach((file, index) => {
      if (file instanceof File) {
        uptudata.append(`product_images[${index}]`, file);
      }
    });
  
    formData.product_videos.video_urls.forEach((file, index) => {
      if (file instanceof File) {
        uptudata.append(`product_videos[${index}]`, file);
      }
    });
  
    formData.product_variants.forEach((variant, index) => {
      if (variant.stock !== null) {
        uptudata.append(`product_variants[${index}][size]`, variant.size);
        uptudata.append(`product_variants[${index}][stock]`, variant.stock);
      }
    });
  
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("Token tidak ditemukan di localStorage");
      }
  
      const response = await fetch(`${import.meta.env.VITE_API_PRODUCT_URL}/${id}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: uptudata,
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to update product");
      }
  
      const result = await response.json();
      console.log("Memperbarui Product berhasil", result);
  
      // Reset form atau navigasi ke halaman lain setelah berhasil
      navigate("/dashboard/manage-product");
    } catch (error) {
      console.error("Error memperbarui Product:", error.message);
      setErrors(prev => ({ ...prev, submit: error.message }));
    }
  };

  const handleCancel = () => {
    if (
      window.confirm(
        "Are you sure you want to cancel? Any unsaved changes will be lost."
      )
    ) {
      navigate("/dashboard/manage-product");
    }
  };

  if (error) return <div>Error: {error.message}</div>;
  if (isLoading) return <div>Loading...</div>;
  return (
    <section className="p-6 font-poppins">
      <Breadcrumbs />
      <form className="form-primary" onSubmit={handleSubmit}>
        <h1 className="title-form">Edit Product</h1>

        {/* Product Information */}
        <article className="form-card">
          <h2 className="form-card-title">Product Information</h2>

          {/* Product Name */}
          <div className="form-card-box">
            <div className="question-box">
              <label className="w-full sm: xl:w-[360px] justify-between items-center inline-flex">
                <span className="text-slate-500 sm:text-[16px] lg:text-[20px] xl:text-2xl font-semibold">
                  Product Name
                </span>
                <div className="sm:p-1 xl:p-2.5 bg-stone-300 rounded-[5px] justify-center items-center xl:gap-2.5 flex">
                  <span className="text-zinc-500 sm:text-[14px] text-base font-semibold">
                    Required
                  </span>
                </div>
              </label>
              <p className="md:w-[222px] xl:w-[360px] text-justify text-slate-500 sm:text-[12px] lg:text-sm font-normal leading-tight  tracking-wider">
                Nama produk maxsimal 40 karakter dengan memasukkan merek, jenis
                produk, warna, bahan, atau tipe.
              </p>
            </div>
            <div className="question-input">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Type here"
                className="input sm:w-[248px] md:w-[360px] lg:w-[500px] xl:w-[603px] xl:h-[46px] self-stretch input-bordered bg-primary-100"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>
          </div>

          {/* Category */}
          <div className="form-card-box">
            <div className="question-box">
              <label className="w-full sm: xl:w-[360px] justify-between items-center inline-flex">
                <div className="text-slate-500 sm:text-[16px] lg:text-[20px] xl:text-2xl font-semibold">
                  Category
                </div>
                <div className="sm:p-1 xl:p-2.5 bg-stone-300 rounded-[5px] justify-center items-center xl:gap-2.5 flex">
                  <div className="text-zinc-500 sm:text-[14px] text-base font-semibold">
                    Required
                  </div>
                </div>
              </label>
              <p className="md:w-[222px] xl:w-[360px] text-justify text-slate-500 sm:text-[12px] lg:text-sm font-normal leading-tight  tracking-wider">
                Pilih kategori yang sesuai karena biaya layanan akan tergantung
                pada kategori. Jika pemilihan kategori kurang sesuai,maka
                kategori akan diubah oleh Admin
              </p>
            </div>
            <div className="flex-col question-input">
              <div className="flex items-center gap-7">
                <select
                  name="category_id"
                  value={formData.category_id}
                  onChange={handleChange}
                  className="select select-bordered sm:w-[200px] md:w-[280px] lg:w-[450px] xl:w-[520px] xl:h-[46px] self-stretch bg-primary-100 lg:font-semibold text-xs text-primary-0">
                  <option value="">
                    {formData.category_name || "Select a category"}
                  </option>
                  {categories
                    ?.filter(
                      (category) => category.name !== formData.category_name
                    )
                    .map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                </select>
                <CategoryProduct />
              </div>
              {errors.category_id && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.category_id}
                </p>
              )}
            </div>
          </div>
        </article>

        {/* Detail Product */}
        <article className="form-card">
          <h2 className="form-card-title">Detail Product</h2>

          {/* Photo Product */}
          <div className="form-card-box">
            <div className="question-box">
              <label className="w-full sm: xl:w-[360px] justify-between items-center inline-flex">
                <div className="text-slate-500 sm:text-[16px] lg:text-[20px] xl:text-2xl font-semibold">
                  Photo Product
                </div>
                <div className="sm:p-1 xl:p-2.5 bg-stone-300 rounded-[5px] justify-center items-center xl:gap-2.5 flex">
                  <div className="text-zinc-500 sm:text-[14px] text-base font-semibold">
                    Required
                  </div>
                </div>
              </label>
              <p className="md:w-[222px] xl:w-[360px] text-justify text-slate-500 sm:text-[12px] lg:text-sm font-normal leading-tight  tracking-wider">
                Format foto harus .jpg, jpeg,png dan ukuran minimal 300 x 300
                px.
              </p>
            </div>
            <div className="flex flex-wrap gap-6">
              {!isLoading &&
                formData.product_images.image_urls.map((image, index) => (
                  <div key={index} className="relative">
                    <img
                      src={image.image_url || image.preview}
                      alt={`Product ${index}`}
                      className="xl:w-[108px] xl:h-[107px] lg:w-[108px] lg:h-[107px] md:w-[108px] md:h-[107px] sm:w-[108px] sm:h-[107px] border-black gap-2.5 flex-col justify-center items-center inline-flex"
                    />
                    <button
                      type="button"
                      onClick={() => handleDeleteImage(index)}
                      className="absolute top-0 right-0 bg-primary-40 text-white rounded-full w-6 h-6 flex items-center justify-center">
                      X
                    </button>
                  </div>
                ))}
              <div className="xl:w-[108px] xl:h-[107px] xl:px-[21px] xl:py-[30px] lg:w-[108px] lg:h-[107px] md:w-[108px] md:h-[107px] sm:w-[108px] sm:h-[107px] border-black gap-2.5 flex-col justify-center items-center inline-flex border border-dashed">
                <label
                  htmlFor="fileUpload"
                  className="inline-block rounded-md cursor-pointer mx-auto text-center">
                  <img
                    src={uploadImage}
                    alt="upload-icon"
                    className="xl:w-6 xl:h-6 mx-auto"
                  />
                  <span className="text-black text-xs font-light">
                    Upload Foto
                  </span>
                  <input
                    type="file"
                    id="fileUpload"
                    name="product_images.image_url"
                    onChange={handleImageUpload}
                    multiple
                    accept="image/*"
                    className="hidden"
                  />
                </label>
              </div>
            </div>
          </div>

          {/* Video Product */}
          <div className="form-card-box">
            <div className="question-box">
              <label className="w-full sm:xl:w-[360px] justify-between items-center inline-flex">
                <div className="text-slate-500 sm:text-[16px] lg:text-[20px] xl:text-2xl font-semibold">
                  Video Product
                </div>
              </label>
              <p className="md:w-[222px] xl:w-[360px] text-justify text-slate-500 sm:text-[12px] lg:text-sm font-normal leading-tight  tracking-wider">
                Format video .mp4 dan mov. Disarankan durasi maksimal 120 detik
                dan ukuran maks 100MB.
              </p>
            </div>
            <div className="flex flex-wrap gap-6">
              {!isLoading &&
                formData.product_videos.video_urls.map((video, index) => (
                  <div key={index} className="relative">
                    <video
                      className="xl:w-[108px] xl:h-[107px] lg:w-[108px] lg:h-[107px] md:w-[108px] md:h-[107px] sm:w-[108px] sm:h-[107px] border-black gap-2.5 flex-col justify-center items-center inline-flex"
                      controls>
                      <source
                        src={video.video_url || video.preview}
                        type="video/mp4"
                      />
                    </video>
                    <button
                      onClick={() => handleDeleteVideo(index)}
                      className="absolute top-0 right-0 bg-primary-40 text-white rounded-full w-6 h-6 flex items-center justify-center">
                      X
                    </button>
                  </div>
                ))}
              <div className="xl:w-[108px] xl:h-[107px] xl:px-[21px] xl:py-[30px] lg:w-[108px] lg:h-[107px] md:w-[108px] md:h-[107px] sm:w-[108px] sm:h-[107px] border-black gap-2.5 flex-col justify-center items-center inline-flex border border-dashed">
                <label
                  htmlFor="fileUploadVideo"
                  className="inline-block rounded-md cursor-pointer mx-auto text-center">
                  <img
                    src={uploadVideo}
                    alt="upload-icon"
                    className="xl:w-6 xl:h-6 mx-auto"
                  />
                  <span className="text-black text-xs font-light">
                    Upload Video
                  </span>
                  <input
                    type="file"
                    name="product_videos.video_url"
                    onChange={handleVideoUpload}
                    accept="video/mp4,video/mov"
                    className="hidden"
                    id="fileUploadVideo"
                  />
                </label>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="form-card-box">
            <div className="question-box">
              <label className="w-full sm: xl:w-[360px] justify-between items-center inline-flex">
                <div className="text-slate-500 sm:text-[16px] lg:text-[20px] xl:text-2xl font-semibold">
                  Description
                </div>
                <div className="sm:p-1 xl:p-2.5 bg-stone-300 rounded-[5px] justify-center items-center xl:gap-2.5 flex">
                  <div className="text-zinc-500 sm:text-[14px] text-base font-semibold">
                    Required
                  </div>
                </div>
              </label>
              <p className="md:w-[222px] xl:w-[360px] text-justify text-slate-500 sm:text-[12px] lg:text-sm font-normal leading-tight  tracking-wider">
                Pastikan deskripsi produk memuat penjelasan detail terkait
                produkmu agar pembeli mudah mengerti dan menemukan produkmu.
              </p>
            </div>
            <div className="question-input">
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Type here"
                className={`sm:w-[248px] md:w-[360px] lg:w-[500px] xl:w-[603px] xl:h-[229px] resize-none self-stretch textarea textarea-bordered bg-primary-100 ${
                  errors.description ? "border-red-500" : ""
                }`}></textarea>
              {errors.description && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.description}
                </p>
              )}
            </div>
          </div>

          {/* Size & Stock */}
          <div className="form-card-box">
            <div className="question-box">
              <div className="flex items-center justify-between max-w-[360px] h-[44px]">
                <label className="min-w-[176px] h-[36px] text-[24px] leading-9 font-semibold text-secondary-50">
                  Size & Stock
                </label>
              </div>
              <div className="md:w-[222px] xl:w-[360px] text-justify text-slate-500 sm:text-[12px] lg:text-sm font-normal leading-tight  tracking-wider">
                <p className="text-[14px] font-normal leading-[20px] text-justify">
                  Pastikan memasukan jumlah dari ukuran baju yang tersedia di
                  samping title Size.
                  <br />
                  <br />
                  Note:
                  <br />- Stock di isi optional jika produk tidak mempunyai
                  ukuran spesifik yang diinginkan yang sudah di sediakan.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-[6px] w-full md:w-[80%] mx-auto max-w-full">
              {["Stock", "S", "M", "L", "XL", "XXL", "XXXL"].map((size) => (
                <div
                  key={size}
                  className="flex items-center justify-center w-full max-w-[603px] h-[46px] mx-auto">
                  <div className="flex items-center justify-between question-input-icon input lg:font-semibold text-xs input-bordered bg-primary-100 p-4 gap-8 ">
                    <p className="text-center mx-auto text-[14px] leading-5 text-base-100 font-semibold disabled:bg-primary-100 disabled:text-primary-100 ">
                      {size}
                    </p>
                    <div className="">
                      <input
                        type="number"
                        value={
                          formData.product_variants.find((v) => v.size === size)
                            ?.stock || ""
                        }
                        onChange={(e) =>
                          handleChangeStock(size, e.target.value)
                        }
                        placeholder="Type Here"
                        className="input border-none grow mx-auto text-sm text-base-100 font-semibold rounded-none bg-primary-100 text-left disabled:bg-primary-100 disabled:h-8 disabled:text-primary-0 disabled:cursor-not-allowed disabled:placeholder-opacity-95 sm:w-[248px] md:w-[360px] lg:w-[500px] xl:w-[603px] xl:h-[200px]"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </article>

        {/* Price */}
        <article className="form-card">
          <h2 className="form-card-title">Price</h2>

          {/* Minimum Order */}
          <div className="form-card-box">
            <div className="question-box">
              <label className="w-full sm: xl:w-[360px] justify-between items-center inline-flex">
                <div className="text-slate-500 sm:text-[16px] lg:text-[20px] xl:text-2xl font-semibold">
                  Minimum Order
                </div>
              </label>
              <p className="md:w-[222px] xl:w-[360px] text-justify text-slate-500 sm:text-[12px] lg:text-sm font-normal leading-tight  tracking-wider">
                Alur jumlah minimum yang harus dibeli untuk produk ini
              </p>
            </div>
            <div className="question-input">
              <input
                type="number"
                name="min_order"
                value={formData.min_order}
                onChange={handleChange}
                placeholder="Type here"
                className="sm:w-[248px] md:w-[360px] lg:w-[500px] xl:w-[603px] xl:h-[46px] self-stretch input input-bordered bg-primary-100"
              />
              {errors.min_order && (
                <p className="text-red-500 text-sm mt-1">{errors.min_order}</p>
              )}
            </div>
          </div>

          {/* Unit Price */}
          <div className="form-card-box">
            <div className="question-box">
              <label className="w-full sm: xl:w-[360px] justify-between items-center inline-flex">
                <div className="text-slate-500 sm:text-[16px] lg:text-[20px] xl:text-2xl:text-2xl font-semibold">
                  Unit Price
                </div>
                <div className="sm:p-1 xl:p-2.5 bg-stone-300 rounded-[5px] justify-center items-center xl:gap-2.5 flex">
                  <div className="text-zinc-500 sm:text-[14px] text-base font-semibold">
                    Required
                  </div>
                </div>
              </label>
              <p className="md:w-[222px] xl:w-[360px] text-justify text-slate-500 sm:text-[12px] lg:text-sm font-normal leading-tight  tracking-wider">
                Masukan harga barang sesuai ketentuan anda
              </p>
            </div>
            <div className="question-input-icon input input-bordered bg-primary-100 lg:font-semibold text-xs">
              <input
                type="number"
                name="original_price"
                value={formData.original_price}
                onChange={handleChange}
                placeholder="Masukkan harga"
                className="grow"
              />
            </div>
            {errors.original_price && (
              <p className="text-red-500 text-sm mt-1">
                {errors.original_price}
              </p>
            )}
          </div>

          {/* Discount */}
          <div className="form-card-box">
            <div className="question-box">
              <label className="w-full sm:w-full xl:w-[360px] justify-between items-center inline-flex">
                <div className="text-slate-500 sm:text-[16px] lg:text-[20px] xl:text-2xl font-semibold">
                  Discount
                </div>
              </label>
              <p className="md:w-[222px] xl:w-[360px] text-justify text-slate-500 sm:text-[12px] lg:text-sm font-normal leading-tight tracking-wider">
                Masukkan discount jika ada, dalam angka 1 - 100 persen
              </p>
            </div>
            <div className="question-input-icon input lg:font-semibold text-xs input-bordered bg-primary-100">
              <img src={percent} alt="Percent" className="w-4" />
              <input
                type="number"
                name="discount_percent"
                value={formData.discount_percent}
                onChange={handleChange}
                placeholder="Masukkan discount"
                className="grow"
                min="0"
                max="100"
              />
            </div>
          </div>
        </article>

        {/* Form Buttons */}
        <div className="w-full inline-flex sm:gap-6 xl:gap-[21px] sm:justify-center md:justify-end">
          <button
            type="button"
            className="btn-editProduct-cancel"
            onClick={handleCancel}>
            Cancel
          </button>
          <button type="submit" className="btn-editProduct-save">
            Save
          </button>
        </div>

        {errors.submit && (
          <p className="text-red-500 text-sm mt-4 text-center">
            {errors.submit}
          </p>
        )}

        <br />
      </form>
    </section>
  );
}
