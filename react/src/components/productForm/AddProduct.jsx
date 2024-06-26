/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Breadcrumbs from "../../components/breadcrumbAdmin/Breadcrumbs";
import uploadImage from "../../assets/icons/form/Picture.svg";
import uploadVideo from "../../assets/icons/form/Video.svg";
import { useNavigate } from "react-router-dom";
import CategoryProduct from "./CategoryProduct";

const validateFormData = (data) => {
  if (!data.product_images.image_urls.every((file) => file instanceof File)) {
    return "Semua product_images image_urls harus berupa file";
  }
  if (!data.product_videos.video_urls.every((file) => file instanceof File)) {
    return "Semua product_videos video_urls harus berupa file";
  }
  return null;
};

export default function AddProduct() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    min_order: "",
    category_id: "",
    original_price: "",
    discount_percent: "",
    product_variants: {
      Stock: { size: "", stock: null },
      S: { size: "S", stock: null },
      M: { size: "M", stock: null },
      L: { size: "L", stock: null },
      XL: { size: "XL", stock: null },
      XXL: { size: "XXL", stock: null },
      XXXL: { size: "XXXL", stock: null },
    },
    product_images: {
      image_urls: [],
    },
    product_videos: {
      video_urls: [],
    },
  });

  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateField = (name, value) => {
    switch (name) {
      case "name":
        if (!value.trim()) return "Product name is required";
        if (value.length > 40)
          return "Product name must be 40 characters or less";
        return null;
      case "category_id":
        if (!value) return "Category is required";
        return null;
      case "description":
        if (!value.trim()) return "Description is required";
        return null;
      case "min_order":
        if (!value) return "Please enter Minimum Order with number";
        if (parseInt(value) <= 0) return "Minimum order must be greater than 0";
        return null;
      case "original_price":
        if (!value) return "Please enter price with number";
        if (parseFloat(value) <= 0) return "Unit price must be greater than 0";
        return null;
      case "discount_percent":
        if (value && (parseFloat(value) < 0 || parseFloat(value) > 100))
          return "Discount must be between 0 and 100";
        return null;
      case "product_images":
        if (!value || value.length === 0)
          return "At least one product image is required";
        for (let file of value) {
          const allowedImageTypes = ["image/jpeg", "image/png", "image/jpg"];
          const allowedVideoTypes = ["video/mp4", "video/avi"];
          const maxImageSize = 5 * 1024 * 1024; // 5MB
          const maxVideoSize = 100 * 1024 * 1024; // 100MB

          if (allowedImageTypes.includes(file.type)) {
            if (file.size > maxImageSize) {
              return "Each image size must be less than 5MB";
            }
          } else if (allowedVideoTypes.includes(file.type)) {
            if (file.size > maxVideoSize) {
              return "Each video size must be less than 100MB";
            }
          } else {
            return "Only JPEG, PNG, JPG images, and MP4, AVI videos are allowed";
          }
        }
        return null;
      default:
        return null;
    }
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          throw new Error("Token tidak ditemukan di localStorage");
        }

        const response = await fetch(
          import.meta.env.VITE_API_PRODUCT_CATEGORY_URL,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Gagal mengambil kategori");
        }

        const data = await response.json();
        setCategories(data.data || []);
      } catch (error) {
        console.error("Error mengambil kategori:", error);
        setCategories([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const handleChange = (event) => {
    const { name, value, files } = event.target;

    if (name === "image") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: files[0],
      }));

      const error = validateField(name, files[0]);
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: error,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));

      const error = validateField(name, value);
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: error,
      }));
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  const handleChangeStock = (label, value) => {
    setFormData((prevData) => {
      const newFormData = { ...prevData };
      newFormData.product_variants[label].stock = value ? Number(value) : null;

      if (label === "Stock" && value) {
        ["S", "M", "L", "XL", "XXL", "XXXL"].forEach(
          (size) => (newFormData.product_variants[size].stock = null)
        );
      } else if (value) {
        newFormData.product_variants.Stock.stock = null;
      }

      return newFormData;
    });
  };

  const handleImageUpload = (e) => {
    const { name, files } = e.target;
    const maxImageSize = 5 * 1024 * 1024; // 5MB
    const allowedImageTypes = ["image/jpeg", "image/png", "image/jpg"];
    let error = null;

    if (name === "product_images.image_url") {
      const validFiles = [];
      const invalidFiles = [];

      Array.from(files).forEach((file) => {
        if (!allowedImageTypes.includes(file.type)) {
          invalidFiles.push("Only JPEG, PNG, and JPG images are allowed");
        } else if (file.size > maxImageSize) {
          invalidFiles.push("Each image size must be less than 5MB");
        } else {
          validFiles.push(file);
        }
      });

      if (invalidFiles.length > 0) {
        error = invalidFiles.join(", ");
      }

      setFormData((prevData) => ({
        ...prevData,
        product_images: {
          ...prevData.product_images,
          image_urls: [...prevData.product_images.image_urls, ...validFiles],
        },
      }));

      setErrors((prevErrors) => ({
        ...prevErrors,
        product_images: error,
      }));
    }
  };

  const handleVideoUpload = (e) => {
    const { files } = e.target;
    const maxVideoSize = 100 * 1024 * 1024; // 100MB
    const maxVideoDuration = 120; // 120 detik
    const allowedVideoTypes = ["video/mp4", "video/quicktime"]; // .mp4 dan .mov

    Array.from(files).forEach((file) => {
      if (!allowedVideoTypes.includes(file.type)) {
        setErrors((prev) => ({
          ...prev,
          product_videos: "Only MP4 and MOV videos are allowed",
        }));
        return;
      }
      if (file.size > maxVideoSize) {
        setErrors((prev) => ({
          ...prev,
          product_videos: "Each video size must be less than 100MB",
        }));
        return;
      }

      const video = document.createElement("video");
      video.preload = "metadata";
      video.onloadedmetadata = () => {
        URL.revokeObjectURL(video.src);
        if (video.duration > maxVideoDuration) {
          setErrors((prev) => ({
            ...prev,
            product_videos: `Video duration must be less than ${maxVideoDuration} seconds`,
          }));
        } else {
          setFormData((prevData) => ({
            ...prevData,
            product_videos: {
              ...prevData.product_videos,
              video_urls: [...prevData.product_videos.video_urls, file],
            },
          }));
        }
      };
      video.src = URL.createObjectURL(file);
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationError = validateFormData(formData);
    if (validationError) {
      console.error("Kesalahan Validasi:", validationError);
      return;
    }

    const data = new FormData();
    data.append("name", formData.name);
    data.append("description", formData.description);
    data.append("min_order", parseInt(formData.min_order) || 0);
    data.append("category_id", parseInt(formData.category_id, 10) || 0);
    data.append("original_price", parseFloat(formData.original_price) || 0);
    data.append("discount_percent", parseFloat(formData.discount_percent) || 0);

    formData.product_images.image_urls.forEach((file) => {
      data.append("product_images.image_url", file);
    });

    formData.product_videos.video_urls.forEach((file) => {
      data.append("product_videos.video_url", file);
    });

    Object.values(formData.product_variants)
      .filter((variant) => variant.stock !== null)
      .forEach((variant) => {
        data.append("product_variants.size", variant.size);
        data.append("product_variants.stock", variant.stock);
      });

    try {
      const token = localStorage.getItem("token");

      if (!token) {
        throw new Error("Token tidak ditemukan di localStorage");
      }

      const response = await fetch(import.meta.env.VITE_API_PRODUCT_URL, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: data,
      });

      if (!response.ok) {
        throw new Error("Respon jaringan tidak ok");
      }

      setFormData({
        name: "",
        description: "",
        min_order: "",
        category_id: "",
        original_price: "",
        discount_percent: "",
        product_variants: {
          Stock: { size: "", stock: null },
          S: { size: "S", stock: null },
          M: { size: "M", stock: null },
          L: { size: "L", stock: null },
          XL: { size: "XL", stock: null },
          XXL: { size: "XXL", stock: null },
          XXXL: { size: "XXXL", stock: null },
        },
        product_images: {
          image_urls: [],
        },
        product_videos: {
          video_urls: [],
        },
      });

      console.log("Produk berhasil ditambahkan");
    } catch (error) {
      console.error("Error menambahkan produk:", error.message);
    }
    console.log(formData);
    // Reset form atau navigasi ke halaman lain setelah berhasil
    navigate("/dashboard/manage-product");
  };

  // const handleCancel = () => {
  //   console.log("Batal menambahkan produk");
  // };

  const handleDeleteImage = (index) => {
    setFormData((prevData) => {
      const newImageUrls = [...prevData.product_images.image_urls];
      newImageUrls.splice(index, 1);
      return {
        ...prevData,
        product_images: {
          ...prevData.product_images,
          image_urls: newImageUrls,
        },
      };
    });
  };

  const handleDeleteVideo = (index) => {
    setFormData((prevData) => {
      const newVideoUrls = [...prevData.product_videos.video_urls];
      newVideoUrls.splice(index, 1);
      return {
        ...prevData,
        product_videos: {
          ...prevData.product_videos,
          video_urls: newVideoUrls,
        },
      };
    });
  };

  const renderImagePreviews = () => {
    return formData.product_images.image_urls.map((file, index) => {
      const url = URL.createObjectURL(file);
      return (
        <div key={index} className="relative">
          <img
            src={url}
            alt={`Preview ${index}`}
            className="xl:w-[108px] xl:h-[107px] lg:w-[108px] lg:h-[107px] md:w-[108px] md:h-[107px] sm:w-[108px] sm:h-[107px] border-primary-0 gap-2.5 flex-col justify-center items-center inline-flex"
          />
          <button
            onClick={() => handleDeleteImage(index)}
            className="absolute top-0 right-0 bg-primary-40 text-white rounded-full w-6 h-6 flex items-center justify-center">
            X
          </button>
        </div>
      );
    });
  };

  const renderVideoPreviews = () => {
    return formData.product_videos.video_urls.map((file, index) => {
      const url = URL.createObjectURL(file);
      return (
        <div key={index} className="relative">
          <video
            src={url}
            controls
            className="xl:w-[108px] xl:h-[107px] lg:w-[108px] lg:h-[107px] md:w-[108px] md:h-[107px] sm:w-[108px] sm:h-[107px] object-cover border-primary-0 gap-2.5 flex-col justify-center items-center inline-flex"
          />
          <button
            onClick={() => handleDeleteVideo(index)}
            className="absolute top-0 right-0 bg-primary-40 text-white rounded-full w-6 h-6 flex items-center justify-center">
            X
          </button>
        </div>
      );
    });
  };

  // navigasi ke halaman manage product jika tidak ingin addproduct
  const handleCancel = () => {
    if (
      window.confirm(
        "Are you sure you want to cancel? Any unsaved changes will be lost."
      )
    ) {
      navigate("/dashboard/manage-product");
    }
  };

  return (
    <>
      <section className="container font-poppins">
        <Breadcrumbs />
        <form className="form-primary" onSubmit={handleSubmit}>
          <h1 className="title-form">Add Product</h1>

          <article className="form-card">
            <h2 className="form-card-title">Product Information</h2>

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
                  Nama produk maxsimal 40 karakter dengan memasukkan merek,
                  jenis produk, warna, bahan, atau tipe.
                </p>
              </div>
              <div className="flex-col question-input">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Type here"
                  className={`input sm:w-[248px] md:w-[360px] lg:w-[500px] xl:w-[603px] xl:h-[46px] self-stretch input-bordered bg-primary-100 ${
                    errors.name ? "border-primary-50" : ""
                  }`}
                />
                {errors.name && (
                  <p className="text-primary-50 text-xs mt-1">{errors.name}</p>
                )}
              </div>
            </div>

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
                  Pilih kategori yang sesuai karena biaya layanan akan
                  tergantung pada kategori. Jika pemilihan kategori kurang
                  sesuai,maka kategori akan diubah oleh Admin
                </p>
              </div>
              <div className="flex-col question-input">
                <div className="flex items-center gap-7">
                  <select
                    name="category_id"
                    value={formData.category_id}
                    onChange={handleChange}
                    className={`select select-bordered sm:w-[200px] md:w-[280px] lg:w-[450px] xl:w-[520px] xl:h-[46px] self-stretch bg-primary-100 lg:font-semibold text-xs text-primary-0 ${
                      errors.category_id ? "border-primary-50" : ""
                    }`}>
                    <option value="" disabled>
                      Pick your an option
                    </option>
                    {categories?.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                  <CategoryProduct />
                </div>
              </div>
            </div>
          </article>
          <article className="form-card">
            <h2 className="form-card-title">Detail Product</h2>
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
                {renderImagePreviews()}
                <div
                  className={`xl:w-[108px] xl:h-[107px] xl:px-[21px] xl:py-[30px] lg:w-[108px] lg:h-[107px] md:w-[108px] md:h-[107px] sm:w-[108px] sm:h-[107px] border-primary-0 gap-2.5 flex flex-col justify-center items-center border border-dashed ${
                    formData.product_images.image_urls.length > 0
                      ? "border-primary-0"
                      : errors.product_images
                      ? "border-primary-50"
                      : "border-primary-0"
                  }`}>
                  {formData.product_images.image_urls.length > 0 && (
                    <div className="absolute top-2 left-2 text-primary-0 text-xs font-light ">
                      {`${formData.product_images.image_urls.length} file(s) selected`}
                    </div>
                  )}
                  <label
                    htmlFor="fileUpload"
                    className="inline-block rounded-md cursor-pointer text-center flex-col justify-center items-center">
                    <img
                      src={uploadImage}
                      alt="upload-icon"
                      className="xl:w-6 xl:h-6 mx-auto"
                    />
                    <span className="text-primary-0 text-xs font-light">
                      Upload Foto
                    </span>
                    <input
                      type="file"
                      id="fileUpload"
                      name="product_images.image_url"
                      onChange={handleImageUpload}
                      multiple
                      accept="image/jpeg,image/png,image/jpg"
                      className="hidden border"
                    />
                  </label>
                  {errors.product_images && (
                    <p className="text-primary-50 text-xs mt-1 absolute  -bottom-[310px]">
                      {errors.product_images}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="form-card-box">
              <div className="question-box">
                <label className="w-full sm:xl:w-[360px] justify-between items-center inline-flex">
                  <div className="text-slate-500 sm:text-[16px] lg:text-[20px] xl:text-2xl font-semibold">
                    Video Product
                  </div>
                </label>
                <p className="md:w-[222px] xl:w-[360px] text-justify text-slate-500 sm:text-[12px] lg:text-sm font-normal leading-tight  tracking-wider">
                  Format video .mp4 dan mov. Disarankan durasi maksimal 120
                  detik dan ukuran maks 100MB.
                </p>
              </div>
              <div className="flex flex-wrap gap-6">
                {renderVideoPreviews()}
                <div className="xl:w-[108px] xl:h-[107px] xl:px-[21px] xl:py-[30px] lg:w-[108px] lg:h-[107px] md:w-[108px] md:h-[107px] sm:w-[108px] sm:h-[107px] border-primary-0 gap-2.5 flex-col justify-center items-center inline-flex border border-dashed">
                  <label
                    htmlFor="fileUploadVideo"
                    className="inline-block rounded-md cursor-pointer mx-auto text-center">
                    <img
                      src={uploadVideo}
                      alt="upload-icon"
                      className="xl:w-6 xl:h-6 mx-auto"
                    />
                    <span className="text-primary-0 text-xs font-light">
                      Upload Video
                    </span>
                    <input
                      type="file"
                      name="product_videos.video_url"
                      onChange={handleVideoUpload}
                      accept="video/mp4,video/avi"
                      multiple
                      className="hidden"
                      id="fileUploadVideo"
                    />
                  </label>
                </div>
              </div>
            </div>

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
              <div className="flex-col question-input">
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Type here"
                  className={`sm:w-[248px] md:w-[360px] lg:w-[500px] xl:w-[603px] xl:h-[229px] resize-none self-stretch textarea textarea-bordered bg-primary-100 ${
                    errors.description ? "border-primary-50" : ""
                  }`}
                />
                {errors.description && (
                  <p className="text-primary-50 text-xs mt-1">
                    {errors.description}
                  </p>
                )}
              </div>
            </div>

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
                {["Stock", "S", "M", "L", "XL", "XXL", "XXXL"].map((label) => (
                  <div
                    key={label}
                    className="flex items-center justify-center w-full max-w-[603px] h-[46px] mx-auto">
                    <div className="flex items-center justify-between question-input-icon input lg:font-semibold text-xs input-bordered bg-primary-100 p-4 gap-8 ">
                      <p className="text-center mx-auto text-[14px] leading-5 text-base-100 font-semibold disabled:bg-primary-100 disabled:text-primary-100 ">
                        {label}
                      </p>
                      <div className="">
                        <input
                          type="number"
                          name={`product_variants.stock_${label}`}
                          value={formData.product_variants[label].stock || ""}
                          onChange={(e) =>
                            handleChangeStock(label, e.target.value)
                          }
                          placeholder="Type Here"
                          className="input border-none grow mx-auto text-sm text-base-100 font-semibold rounded-none bg-primary-100 text-left disabled:bg-primary-100 disabled:h-8 disabled:text-primary-0 disabled:cursor-not-allowed disabled:placeholder-opacity-95 sm:w-[248px] md:w-[360px] lg:w-[500px] xl:w-[603px] xl:h-[200px]"
                          disabled={
                            label === "Stock"
                              ? ["S", "M", "L", "XL", "XXL", "XXXL"].some(
                                  (size) =>
                                    formData.product_variants[size].stock !==
                                    null
                                )
                              : formData.product_variants.Stock.stock !== null
                          }
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </article>

          <article className="form-card">
            <h2 className="form-card-title">Price</h2>

            <div className="form-card-box">
              <div className="question-box">
                <label className="w-full sm: xl:w-[360px] justify-between items-center inline-flex">
                  <div className="text-slate-500 sm:text-[16px] lg:text-[20px] xl:text-2xl font-semibold">
                    Minimum Order
                  </div>
                  <div className="sm:p-1 xl:p-2.5 bg-stone-300 rounded-[5px] justify-center items-center xl:gap-2.5 flex">
                    <div className="text-zinc-500 sm:text-[14px] text-base font-semibold">
                      Required
                    </div>
                  </div>
                </label>
                <p className="md:w-[222px] xl:w-[360px] text-justify text-slate-500 sm:text-[12px] lg:text-sm font-normal leading-tight  tracking-wider">
                  Alur jumlah minimum yang harus dibeli untuk produk ini
                </p>
              </div>
              <div className="flex-col question-input">
                <input
                  type="number"
                  name="min_order"
                  value={formData.min_order}
                  onChange={handleChange}
                  placeholder="Type here"
                  className={`sm:w-[248px] md:w-[360px] lg:w-[500px] xl:w-[603px] xl:h-[46px] self-stretch input input-bordered bg-primary-100 ${
                    errors.min_order ? "border-primary-50" : ""
                  }`}
                />
                {errors.min_order && (
                  <p className="text-primary-50 text-xs mt-1">
                    {errors.min_order}
                  </p>
                )}
              </div>
            </div>

            <div className="form-card-box">
              <div className="question-box">
                <label className="w-full sm: xl:w-[360px] justify-between items-center inline-flex">
                  <div className="text-slate-500 sm:text-[16px] lg:text-[20px] xl:text-2xl font-semibold">
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
              <div className="flex-col question-input">
                <input
                  type="number"
                  name="original_price"
                  value={formData.original_price}
                  onChange={handleChange}
                  placeholder="RP"
                  className={`grow sm:w-[248px] md:w-[360px] lg:w-[500px] xl:w-[603px] xl:h-[46px] self-stretch input input-bordered bg-primary-100 placeholder:text-primary-0 ${
                    errors.original_price ? "border-primary-50" : ""
                  }`}
                />
                {errors.original_price && (
                  <p
                    id="original_price-error"
                    className="text-primary-50 text-xs mt-1">
                    {errors.original_price}
                  </p>
                )}
              </div>
            </div>

            <div className="form-card-box">
              <div className="question-box">
                <label className="w-full sm: xl:w-[360px] justify-between items-center inline-flex">
                  <div className="text-slate-500 sm:text-[16px] lg:text-[20px] xl:text-2xl font-semibold">
                    Discount
                  </div>
                </label>
                <p className="md:w-[222px] xl:w-[360px] text-justify text-slate-500 sm:text-[12px] lg:text-sm font-normal leading-tight  tracking-wider">
                  Masukan discount jika memang ada, dan masukan angka 1 - 100
                  persen saja
                </p>
              </div>
              <div className="flex-col question-input">
                <input
                  type="number"
                  name="discount_percent"
                  value={formData.discount_percent}
                  onChange={handleChange}
                  placeholder="%  Type here"
                  className={`grow sm:w-[248px] md:w-[360px] lg:w-[500px] xl:w-[603px] xl:h-[46px] self-stretch input input-bordered bg-primary-100  ${
                    errors.discount_percent ? "border-primary-50" : ""
                  }`}
                />
                {errors.discount_percent && (
                  <p className="text-primary-50 text-xs mt-1">
                    {errors.discount_percent}
                  </p>
                )}
              </div>
            </div>
          </article>
          <div className="w-full inline-flex sm:gap-6 xl:gap-[21px] sm:justify-center md:justify-end">
            <button className="btn-editProduct-cancel" onClick={handleCancel}>
              Cancel
            </button>
            <button type="submit" className="btn-editProduct-save">
              Save
            </button>
          </div>

          <br />
        </form>
      </section>
    </>
  );
}
