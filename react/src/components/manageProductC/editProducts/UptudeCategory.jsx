import React, { useState, useEffect } from "react";

const initialVariants = {
  Stock: { size: "", stock: null },
  S: { size: "S", stock: null },
  M: { size: "M", stock: null },
  L: { size: "L", stock: null },
  XL: { size: "XL", stock: null },
  XXL: { size: "XXL", stock: null },
  XXXL: { size: "XXXL", stock: null },
};

const ProductDetail = () => {
  const [productData, setProductData] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category_name: "",
    category_id: "",
    product_pricing: {
      original_price: 0,
      discount_percent: 0,
    },
    product_variants: { ...initialVariants },
    product_images: [],
    product_videos: [],
  });

  const [categories, setCategories] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          throw new Error("Token tidak ditemukan di localStorage");
        }

        const response = await fetch(
          "https://kreasinusantara.shop/api/v1/admin/categories",
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

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("Token not found in localStorage");
        }

        const response = await fetch(
          "https://kreasinusantara.shop/api/v1/admin/products/46af0d8a-e429-47d6-998e-985adfb068e8",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch product data");
        }

        const data = await response.json();
        setProductData(data.data || null);

        // Prepare formData from API response
        setFormData({
          name: data.data.name || "",
          description: data.data.description || "",
          category_name: data.data.category_name || "",
          category_id: data.data.category_id || "",
          product_pricing: {
            original_price: data.data.product_pricing.original_price || 0,
            discount_percent: data.data.product_pricing.discount_percent || 0,
          },
          product_variants: { ...initialVariants },
          product_images: [...data.data.product_images] || [],
          product_videos: [...data.data.product_videos] || [],
        });

        // Update product_variants with API data
        if (
          data.data.product_variants &&
          data.data.product_variants.length > 0
        ) {
          const updatedVariants = { ...initialVariants };
          data.data.product_variants.forEach((variant) => {
            const size = variant.size;
            if (updatedVariants[size]) {
              updatedVariants[size].stock = variant.stock || null;
            } else if (size === "") {
              updatedVariants.Stock.stock = variant.stock || null;
            }
          });
          setFormData((prevFormData) => ({
            ...prevFormData,
            product_variants: updatedVariants,
          }));
        }

        console.log("Product Data:", data.data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name.startsWith("product_pricing.")) {
      const field = name.split(".")[1];
      setFormData((prevFormData) => ({
        ...prevFormData,
        product_pricing: {
          ...prevFormData.product_pricing,
          [field]: value,
        },
      }));
    } else if (name.startsWith("product_variants")) {
      const parts = name.split(".");
      const size = parts[1];
      setFormData((prevFormData) => {
        const updatedVariants = {
          ...prevFormData.product_variants,
          [size]: {
            ...prevFormData.product_variants[size],
            stock: value,
          },
        };
        if (size === "Stock") {
          updatedVariants.Stock.stock = value;
        }
        return {
          ...prevFormData,
          product_variants: updatedVariants,
        };
      });
    } else if (name === "category_name") {
      setFormData((prevFormData) => {
        const matchedCategory = categories.find(
          (category) => category.name.toLowerCase() === value.toLowerCase()
        );

        if (!matchedCategory) {
          const newCategory = {
            id: `new-${value}`,
            name: value,
          };
          setCategories([...categories, newCategory]);
        }

        return {
          ...prevFormData,
          category_name: value,
          category_id: matchedCategory ? matchedCategory.id : `new-${value}`,
        };
      });
    } else if (name === "category_id") {
      const selectedCategory = categories.find(
        (category) => category.id === value
      );
      setFormData({
        ...formData,
        category_id: value,
        category_name: selectedCategory
          ? selectedCategory.name
          : formData.category_name,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleImageChange = (e, index) => {
    const file = e.target.files[0];
    if (!file) return;

    const newFormData = { ...formData };
    newFormData.product_images[index].imageFile = file;

    setFormData(newFormData);
  };

  const handleVideoChange = (e, index) => {
    const file = e.target.files[0];
    if (!file) return;

    const newFormData = { ...formData };
    newFormData.product_videos[index].videoFile = file;

    setFormData(newFormData);
  };

  const updateCategory = async (category_id, category_name) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("Token not found in localStorage");
      }

      const response = await fetch(
        `https://kreasinusantara.shop/api/v1/categories/${category_id}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name: category_name }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update category");
      }

      const updatedCategory = await response.json();
      console.log("Category updated successfully:", updatedCategory);
    } catch (error) {
      console.error("Error updating category:", error);
    }
  };

  const handleUpdateProduct = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("Token not found in localStorage");
      }

      // Update the category if it is new or has changed
      if (formData.category_id.startsWith("new-")) {
        await updateCategory(formData.category_id, formData.category_name);
      }

      const formDataForUpload = new FormData();
      formDataForUpload.append("name", formData.name);
      formDataForUpload.append("description", formData.description);
      formDataForUpload.append("category_name", formData.category_name);
      formDataForUpload.append("category_id", formData.category_id);
      formDataForUpload.append(
        "product_pricing.original_price",
        formData.product_pricing.original_price
      );
      formDataForUpload.append(
        "product_pricing.discount_percent",
        formData.product_pricing.discount_percent
      );

      Object.keys(formData.product_variants).forEach((size) => {
        formDataForUpload.append(
          `product_variants[${size}].size`,
          formData.product_variants[size].size
        );
        formDataForUpload.append(
          `product_variants[${size}].stock`,
          formData.product_variants[size].stock
        );
      });

      formData.product_images.forEach((image, index) => {
        if (image.imageFile) {
          formDataForUpload.append(
            `product_images[${index}].imageFile`,
            image.imageFile
          );
        }
      });

      formData.product_videos.forEach((video, index) => {
        if (video.videoFile) {
          formDataForUpload.append(
            `product_videos[${index}].videoFile`,
            video.videoFile
          );
        }
      });

      const response = await fetch(
        "https://kreasinusantara.shop/api/v1/admin/products/46af0d8a-e429-47d6-998e-985adfb068e8",
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formDataForUpload,
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update product data");
      }

      const updatedData = await response.json();
      console.log("Product data updated successfully:", updatedData);

      setProductData(updatedData.data || null);
    } catch (error) {
      console.error("Error updating product data:", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!productData) {
    return <div>Product data not found.</div>;
  }

  return (
    <div>
      <h2>Product Images</h2>
      {productData.product_images.map((image, index) => (
        <div key={index}>
          <img
            src={image.image_url}
            alt={`Image ${index}`}
            style={{ width: "200px", height: "auto" }}
          />
          <input type="file" onChange={(e) => handleImageChange(e, index)} />
        </div>
      ))}
      <h2>Product Videos</h2>
      {productData.product_videos.map((video, index) => (
        <div key={index}>
          <video controls style={{ width: "400px", height: "auto" }}>
            <source src={video.video_url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <input type="file" onChange={(e) => handleVideoChange(e, index)} />
        </div>
      ))}
      <h2>Update Product</h2>
      <div className="form-group">
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label>Description:</label>
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label>Category:</label>
        <div className="flex items-center">
          <select
            name="category_id"
            value={formData.category_id}
            onChange={handleInputChange}
            className="select select-bordered">
            <option value="">{formData.category_name}</option>
            {categories
              .filter((category) => category.name !== formData.category_name)
              .map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
          </select>
        </div>
      </div>

      <div className="form-group">
        <label>Original Price:</label>
        <input
          type="number"
          name="product_pricing.original_price"
          value={formData.product_pricing.original_price}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label>Discount Percent:</label>
        <input
          type="number"
          name="product_pricing.discount_percent"
          value={formData.product_pricing.discount_percent}
          onChange={handleInputChange}
        />
      </div>
      <h3>Product Variants</h3>
      {Object.keys(formData.product_variants).map((size, index) => (
        <div key={index} className="form-group">
          <label>{size}</label>
          <input
            type="number"
            name={`product_variants.${size}.stock`}
            value={formData.product_variants[size].stock}
            onChange={handleInputChange}
            placeholder={`Type Here ${size}`}
          />
        </div>
      ))}
      <button onClick={handleUpdateProduct}>Update Product</button>
    </div>
  );
};

export default ProductDetail;
